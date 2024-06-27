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
  mostrarContrasena: boolean = false; 
  mostrarConfirmarContrasena: boolean = false;

  constructor(private router: Router) { }

  ionViewWillEnter() {
    // Reiniciar valores de los campos
    this.nombre = '';
    this.email = '';
    this.password = '';
    this.confirmarPassword = '';
    this.mostrarContrasena = false;
    this.mostrarConfirmarContrasena = false;
  }

  register() {
    // Lógica para registrar el usuario
    console.log('Usuario registrado:', this.nombre, this.email);
    this.router.navigate(['/login']);
  }

  cancel() {
    this.router.navigate(['/login']);
  }

  toggleMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  toggleMostrarConfirmarContrasena() {
    this.mostrarConfirmarContrasena = !this.mostrarConfirmarContrasena;
  }

}
