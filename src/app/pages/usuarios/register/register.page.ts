import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  formRegister: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastService: ToastService,
    ) 
    {
      this.formRegister = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d+/)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],

      },{ validator: this.passwordMatchValidator });

     }

  ngOnInit(): void {
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  onSubmit() {
    this.userService.register(this.formRegister.value)
      .then(response => {
        console.log(response);
        
        this.toastService.presentToast('Usuario Registrado',3000, 'top');
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

}
