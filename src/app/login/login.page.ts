import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  mostrarContrasena: boolean = false; 

  constructor(private router: Router) { }

  ionViewWillEnter() {
    // Reiniciar valores de los campos
    this.email = '';
    this.password = '';
  }

  login() {
    // Aquí agregarías la lógica para iniciar sesión
    console.log('Usuario iniciado sesión:', this.email);
    this.router.navigate(['/home']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  toggleMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}
