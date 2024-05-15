import { useState } from "react";
import "../../../Styling/Components/InvoiceComponentStyle/_invoiceTableNav.scss";
import TableFilter from "./TableFilter";
import TableSort from "./TableSort";
import { PaginationRequestType } from "../../../types/invoiceTypes";
interface InvoiceTableNavTypes {
  handleFilterSubmitBtn: (query: PaginationRequestType) => void;
  handleSort: (query: PaginationRequestType) => void;
  checkIsFilterEmpty: boolean;
}

const InvoiceTableNav: React.FC<InvoiceTableNavTypes> = ({
  handleFilterSubmitBtn,
  checkIsFilterEmpty,
  handleSort,
}) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);

  const handleToggle = (option: string) => {
    if (option === "filter") {
      setOpenSort(false);
      setOpenFilter((prev) => !prev);
    } else if (option === "sort") {
      setOpenFilter(false);
      setOpenSort((prev) => !prev);
    }
  };

  return (
    <div className="invoiceTableNav width600">
      <div className="invoiceTableNav__search">
        <input
          type="text"
          placeholder="Search an Invoice"
          className="search-input"
        />
      </div>
      <div className="invoiceTableNav__filter">
        <span
          className={
            checkIsFilterEmpty
              ? "invoiceTableNav__filter-btn"
              : "invoiceTableNav__filter-btn  activeFilterSort"
          }
          onClick={() => handleToggle("filter")}
        >
          Filter By ↓
        </span>

        {openFilter && (
          <TableFilter
            setOpenFilter={setOpenFilter}
            handleFilterSubmitBtn={handleFilterSubmitBtn}
          />
        )}
        <span
          className="invoiceTableNav__filter-btn"
          onClick={() => handleToggle("sort")}
        >
          Sort By ↓
        </span>
        {openSort && <TableSort handleSort={handleSort} />}
      </div>
    </div>
  );
};

export default InvoiceTableNav;
