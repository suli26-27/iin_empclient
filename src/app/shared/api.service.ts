import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class ApiService {
    host = 'http://localhost:8000'
    http = inject(HttpClient)

    getEmployees() {
        let url = `${this.host}/api/emplyoees`
        return this.http.get(url)
    }
}
