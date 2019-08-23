import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

import { UserService } from './user.service';

// Este servicio permitira setear un token y obtener token en toda la app
import { ShareDataService } from './services/share-data.service';
import { appRoutingModule } from './app.component.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [UserService, ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
