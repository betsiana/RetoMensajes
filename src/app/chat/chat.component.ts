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
    private _shareDataService: ShareDataService, // ahora leeremos el token
    private _commentsService: CommentsService,
  ) { }

  // Betsi me voy un rato al  cumple de mi primo ok graci as bien, tratared e seguir
// OK WAIT te dejare con e l router bueno  leugo continuamos ....oki


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
