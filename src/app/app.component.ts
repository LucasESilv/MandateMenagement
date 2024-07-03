import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginLayoutComponent } from "./components/login-layout/login-layout.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginLayoutComponent]
})
export class AppComponent {
  title = 'angular';
}
