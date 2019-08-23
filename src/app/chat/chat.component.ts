import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { CommentsService } from './services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [CommentsService]
})
export class ChatComponent implements OnInit {

  constructor(
    private _shareDataService: ShareDataService,
    private _commentsService: CommentsService,
  ) { }


  ngOnInit() {
    console.log('_shareDataService', this._shareDataService._token);
    this.loadAllComments();
  }

  loadAllComments() {
    const token =  this._shareDataService._token;
    this._commentsService.getComments(token).subscribe((response) => {
      console.log('_commentsService', response);
    });
  }
}
