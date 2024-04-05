import "../../../Styling/Components/SettingsComponent/_companyDetails.scss";
import { NavLink, To } from "react-router-dom";
import LoadingRing from "../../GlobalComponents/LoadingRing";
import React from "react";
import { DetailItem } from "../../../pages/Settings/companyInfo/CompanyProfile";
import ErrorMinimalDisplay from "../../GlobalComponents/ErrorMinimalDisplay";

interface CompanyDetailsProps {
  companyDataError: Error;
  companyDataLoading: boolean;
  companyDetails?: DetailItem[];
  setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  navigateTo: To;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  companyDataError,
  companyDataLoading,
  companyDetails,
  title,
  navigateTo,
  setPopupOpen,
}) => {
  if (companyDataError)
    return <ErrorMinimalDisplay errorMessage={companyDataError?.message} />;
  if (companyDataLoading) return <LoadingRing />;

  return (
    <div className="companyDetails">
      <div className="card">
        <div className="card-header">
          <h2>{title}</h2>
          <NavLink to={navigateTo}>
            <p onClick={() => setPopupOpen((x) => !x)}>Edit</p>
          </NavLink>
        </div>
        <div className="card-body">
          <dl>
            {companyDetails?.map((info, i) => (
              <React.Fragment key={i}>
                <dt>{info?.label}</dt>
                <dd>{info?.value}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
