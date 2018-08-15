import { Parameter } from "./parameter";

export interface normalRequest{
      "requetId":string;
      "customerId":string;
      "parameter"?:Parameter;
      "description": string;
      "status": string;
      "quantity": string;
      "RequestedOn":string;
      "dueBy":string;
      "assetCategory":string;
    }
