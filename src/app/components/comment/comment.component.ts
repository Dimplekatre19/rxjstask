import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
 commentarray !: Array<any>
  constructor(
    private _comment : CommentService
  ) { }

  ngOnInit(): void {
        this._comment.fetchcomment()
                     .subscribe(res=>{
                                this.commentarray=res
                               //console.log(this.commentarray);
                           })
                   }

}
