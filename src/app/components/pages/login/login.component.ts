import { Component } from '@angular/core';
import { LoginLayoutComponent } from "../../login-layout/login-layout.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../primary-input/primary-input.component';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    LoginLayoutComponent,
    MatFormFieldModule,
    PrimaryInputComponent,
    ReactiveFormsModule,
    MatIcon
  ]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

}
