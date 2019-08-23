import { Component } from '@angular/core';
import { UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RetoMensajes';
  constructor(public user: UserService){
    this.user.getData('http://jsonplaceholder.typicode.com/posts').subscribe((res: any)=>{
      console.log(res);
    })
  }
}
