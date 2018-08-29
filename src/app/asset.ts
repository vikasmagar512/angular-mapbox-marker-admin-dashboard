import { Metric } from "./metric";

export interface Asset{
      "id":string;
      "category": string;
      "name": string;
      "detail"?:string;
      "agreement_no":string;
      "location": string;
      "serialno": string;
      "customer":string;
      "img":string;
      "status":Number;
      "quantity":string;
      "requestStatus":string;
      "requestedOn"?:string;
      "dueBy"?:string;
      "prodName"?:string,
      "unit"?: string,
      "metrics": Array<Metric>;
      "serialNumber"?: string;
      "supplier"?:string;
      "categoryId"?: string;
      "agreementNumber"?: string,
      "scheduleNumber"?: number,
      "description"?: string,
      "condition"?: string,
      "supplierBilling"?: 1,
      "cost"?: number,
      "rv"?: number,
      "registrationNumber"?: string,

    "type"?: string;
    "contact"?: string;
    "start_date"?: string;
    "end_date"?: string;
    "termination_date"?: string;
    "payment_freq"?: string;
    "Remaining_term"?: string;
    "assets_covered"?: Array<string>;
    "dueDate"?: string;
    "invoiceAddress"?: string;
    "customerAddressNumber"?: number;
    "amount"?: string;
    "invoiceAmount"?: string;
    "prolongedDueDate"?: string;
}
