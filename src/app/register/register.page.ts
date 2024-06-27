import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string= '';
  email: string= '';
  password: string= '';
  confirmarPassword: string= '';

  constructor(private router: Router) { }

  register() {
    // Aquí agregarías la lógica para registrar el usuario
    console.log('Usuario registrado:', this.nombre, this.email);
    this.router.navigate(['/login']);
  }

  cancel() {
    this.router.navigate(['/login']);
  }
}
