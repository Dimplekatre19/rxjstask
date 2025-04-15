import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icomm, Icomment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseurl :string = `${environment.BASEURL}`;
  commenturl : string =`${this.baseurl}/comments`;
  constructor(
    private _http : HttpClient
  ) { }

  fetchcomment(): Observable<Array<Icomm>>{
    return this._http.get<Icomment[]>(this.commenturl) 
                         .pipe(
                               map((comments:Array<Icomment>) => 
                                   comments.map((comment : any) => ({
                                         name: comment.name,
                                         email: comment.email
                                       }))
                                    )
                              );

}
}
