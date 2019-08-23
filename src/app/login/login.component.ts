import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ShareDataService } from '../services/share-data.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, UserService]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService, // injectamos el servicio para usarlo en este componente LOGIN
    private _shareDataService: ShareDataService, // se injecta para setear el token que response LoginService
    private _userService: UserService,
    private router: Router,
    ) {
    // Se inicializa el formulario  con los controles Passowrd y email
    // Ahora este formulario tiene que estar conectado con el template html
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    console.log('app-login');
  }

  login() {
    const { email, password } = this.loginForm.value;

    this._loginService.login(email, password).subscribe((response) => {
      console.log('_loginService', response);
      // Se guarda token para usar en otros servicios
      if (response.body) {
        const { token } = response.body.data;
        this._shareDataService.token = token;
        this.getAuthUser();
        this.router.navigate(['/chat']);
      }
    });
  }

  getAuthUser(): void {
    this._userService.getAuthUser(this._shareDataService._token).subscribe((response) => {
      console.log('_userService', response);
    });
  }

  // En angular se puede manejar formularios reactivos
}
