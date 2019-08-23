import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chat', component: ChatComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class appRoutingModule {}
