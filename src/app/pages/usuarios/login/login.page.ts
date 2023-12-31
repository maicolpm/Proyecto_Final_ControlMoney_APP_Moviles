import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    
    private toastService: ToastService,
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d+/)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .login(this.formLogin.value)
      .then((response) => {
        console.log(response.user.uid);
        this.toastService.presentToast('Bienvenido al Sistema',3000, 'top');
        this.router.navigate(['/home'], { queryParams: { uid: response.user.uid } });
      })
      .catch((error) => console.log(error));
  }

  onClick() {
    this.userService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        
        this.toastService.presentToast('Bienvenido al Sistema',3000, 'top');
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }
}

