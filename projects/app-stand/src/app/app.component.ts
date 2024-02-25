import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxAnimatedMenuModule } from '../../../ngx-animated-menu/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxAnimatedMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AppStand';
}
