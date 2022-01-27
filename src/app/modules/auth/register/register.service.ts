import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class RegisterService {
    private readonly _baseCompaniesApiRoute = 'http://localhost:3000/companies';

    constructor(private readonly http: HttpClient) { }
    
    public getCompanies() {
        return this.http.get(this._baseCompaniesApiRoute);
    }
}