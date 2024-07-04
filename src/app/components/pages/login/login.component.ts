import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { LoginLayoutComponent } from "../../login-layout/login-layout.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../primary-input/primary-input.component';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
  ],
  providers: [
    LoginService,
  ]
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastr.success("Login efetuado com sucesso"),
      error: () => this.toastr.error("Erro ao efetuar login!!"),
    })
    console.log(this.loginForm);
  }

  navigate() {
    this.router.navigate(["/signUp"]);
  }

}
