import { Employee } from "./employee.modle";

export interface EmployeeResponse {
    data: any;
    meta_data: {
        status: string;
        status_code: number;
        status_msg: string;
        _reqid?: any;
        _server_ts: string;
    };
}