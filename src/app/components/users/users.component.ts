import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 userarray !: Array<any>
  constructor(
    private _userservice : UserService
  ) { }

  ngOnInit(): void {

     this._userservice.fetchusers()
                      .subscribe(res=>{
                        console.log(res);
                        this.userarray=res
              
                      })
  }

}
