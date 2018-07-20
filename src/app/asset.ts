import { Metric } from "./metric";

export interface Asset{
      "id":string;
      "category": string;
      "name": string;
      "agreement_no":string;
      "location": string;
      "serialno": string;
      "customer":string;
      "img":string;
      "status":Number;
      "metrics": Array<Metric>;
    }
