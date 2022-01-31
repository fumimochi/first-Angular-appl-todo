import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

import { AuthModels } from "../../models";

@Injectable({
    providedIn: 'root',
})
export class RegisterService {
    private readonly _baseSignInApiRoute = 'http://localhost:3000/signIns';
    
    constructor(private readonly http: HttpClient) {}

    public getReg() {
        return this.http.get<AuthModels.User.IUser[]>(this._baseSignInApiRoute);
    }

    public addRegistration(reg: AuthModels.User.IUser) {
        return this.http.post(this._baseSignInApiRoute, reg)
            .pipe(map(response => JSON.stringify(response)));
    }
}