import { Parameter } from "./parameter";


export interface Metric{
      // 'parameter':Parameter;
      "id":string;
      "available": number;
      "required": number;
      "uptime":string;
      "usage":string;
    }
    
    /* {
      "category": "Cartridge",
      "unit": "#",
      "available": 15,
      "required": 20,
      "uptime": "95%",
      "usage": "2000"
    }
 */