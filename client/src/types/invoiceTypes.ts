export interface InvoiceType {
  date: Date | string;
  companyInfoId: number | null;
  customercompanyId: number | null;
  createdById: number | null;
  tax?: number | null;
  discount?: number | null;
}

export interface LastInvoiceIdType {
  lastId: number;
}

export interface InvoiceDetailsType {
  invoiceID: number | null | undefined;
  description: string;
  price: number | null;
}

export interface AllInvoicesPaginationType {
  id: number;
  invoiceId: string;
  customerName: string;
  tax: number | null;
  discount: number | null;
  currentDate: Date | string;
  totalPrice: number;
  statusName: string;
}

export type invoiceDetails = {
  id?: number;
  description?: string;
  price?: string;
};

export type invoiceJoinDataTypes = {
  invoiceId: string;
  currentDate: string;
  totalPrice: string;
  statusName: string;
  customerName: string;
  country: string;
  city: string;
  street: string;
  zipcode: string;
  idNumber: string;
  tax: string;
  discount: string;
};
export interface SingleInvoiceByIdType {
  findInvoice?: Partial<invoiceJoinDataTypes[]>;
  findDetails?: Partial<invoiceDetails[]>;
}
