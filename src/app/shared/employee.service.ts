import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class EmployeeService {
    host = 'http://localhost:8000'
    http = inject(HttpClient)

    getEmployees() {
        let url = `${this.host}/api/employees`
        return this.http.get(url)
    }

    createEmployee(emp: any) {
        let url = `${this.host}/api/employees`
        return this.http.post(url, emp)
    }

    deleteEmployee(id: number) {
        let url = `${this.host}/api/employees/${id}`
        return this.http.delete(url);
    }
}
