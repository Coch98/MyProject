import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nombreUsuario: string = 'Cristobal';

  constructor(private router: Router) { }

  goTo(page: string) {
    // Aquí redirigirías a las diferentes secciones de la aplicación
    console.log('Ir a la página:', page);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
