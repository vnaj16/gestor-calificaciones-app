import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestor-calificaciones-app';
  opened = false;

  toggleSidebar(){ //https://www.npmjs.com/package/ng-sidebar
    this.opened = !this.opened;
  }
}
