import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import {Observable} from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private _getAllUsersUrl = "http://localhost:3000/users/all";
  //private _getUserUrl='http://localhost:3000/users/';

  private _getAllUsersUrl = "https://akshar-acad-fdcc-server-1.glitch.me/users/all";
  private _getUserUrl='https://akshar-acad-fdcc-server-1.glitch.me/users';

  constructor(private _http: HttpClient) { }
   getAllUsers() 
   {
   return this._http.get(this._getAllUsersUrl)
        .pipe(map((response: Response) => (JSON.stringify(response))));
}
    getUser(id) 
    {
          console.log(id)
          return this._http.get(this._getUserUrl+id)
        .pipe(map((response: Response) => (JSON.stringify(response))));
}
saveUser(value,user_id) 
{
      console.log(user_id)
      value=(value)
      value={user_id,...value}
      console.log("su")
      console.log(value)
      return this._http.post(this._getUserUrl+'save',value)
    .pipe(map((response: Response) => (JSON.stringify(response))));
}
deleteUser(user_id) 
{
      console.log(user_id)
      return this._http.delete(this._getUserUrl+user_id)
    .pipe(map((response: Response) => (JSON.stringify(response))));
}
}
