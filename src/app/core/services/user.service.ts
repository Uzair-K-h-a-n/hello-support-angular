import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { User } from "../../shared/models/user.model";
@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiPath = environment.apiPath;

    public users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

    constructor(
        private http: HttpClient,
    ) { }

    public getUser(id): Observable<User> {
        const url = this.apiPath + `/user/${id}`;
        return this.http.get<User>(url);
    }

    public getUsers() {
        const url = this.apiPath + `/user`;
        return this.http.get(url)
            .subscribe(
                (users:any) =>{
                    
                    this.users.next(users)},
                err => console.log(err)
            );
    }

    public addNewUser(user: User) {
        const url = this.apiPath + `/user`;
        return this.http.post(url, user);
    }

    public updateUser(user: User) {
        const url = this.apiPath + `/user/${user._id}`;
        return this.http.patch(url, user);
    }

    public deleteUser(userId: Number) {
        const url = this.apiPath + `/user/${userId}`;
        return this.http.delete(url)
    }

}