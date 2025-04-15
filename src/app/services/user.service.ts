import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser, Iusers } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl :string = `${environment.BASEURL}`;
  userurl : string =`${this.baseurl}/users`;
  constructor(
    private _http : HttpClient
  ) { }

  fetchusers():Observable<Array<Iuser>>{
     return this._http.get<Iusers[]>(this.userurl)
                       .pipe(
                        map((users:Iusers[]) =>
                             users.map((user:any)=>({
                               name: user.name,
                               email: user.email,
                               address: user.address,
                               phone: user.phone,
                               website : user.website     
                             }))
                        )
                       );
  }
   

}
