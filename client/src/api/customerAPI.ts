import { apiFetcher } from "./apiHelper";
import { AllCustomerTypes } from "../types/customerAPITypes";
import { Step2initialDateTypes } from "../components/InvoicesComponents/createInvoiceSteps/StepsInitialData";
import { apiGeneralErrorHandle } from "../components/GlobalComponents/ErrorShow";

const API_URL = import.meta.env.VITE_API_URL as string;

/**
 *
 * @param token string
 * @returns all customer info data
 */
export const fetchCustomerData = async (token?: string) => {
  return apiFetcher<AllCustomerTypes[]>("customer", token || "");
};

/**
 * API POST REQUEST for create customer comapny
 * @param token
 * @param queryData (customerName,country,idNumber are requred - rest not requred)
 * @returns status 200 or 400
 */
export const createCustomerCompany = async (
  token: string,
  queryData: Partial<Step2initialDateTypes>
) => {
  try {
    const res = await fetch(`${API_URL}/customer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(queryData),
    });

    if (!res.ok) {
      const errorResponse = await res.json();

      console.log("erroprrrrr", errorResponse);

      throw new Error(`${errorResponse.validationErrors[0].message}`);
    } else {
      return res;
    }
  } catch (err: unknown) {
    if ((err as Error).message.includes("Duplicate")) {
      throw new Error(
        `Company already exists. <br/><br/> <strong>If you're coming back from Step 3, please search for the existing company in the list. </strong>`
      );
    }
    throw err;
  }
};
