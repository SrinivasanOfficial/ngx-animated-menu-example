import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AppMod';

  configData = {
    menuColor : '#d523c8'
  }

  menuData = [
    { content: 'Home', value: 'Home' },
    { content: 'About', value: 'About' },
    { content: 'Service', value: 'Service' },
    { content: 'Blog', value: 'Blog' },
    { content: 'Contact', value: 'Contact' }
  ]
  
}
