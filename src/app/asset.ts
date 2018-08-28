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
      "quantity"?:string;
      "requestStatus":string;
      requestedOn?:string;
      dueBy?:string;
      "prodName"?:string,
      "unit"?: string,
      "metrics": Array<Metric>;
    }
