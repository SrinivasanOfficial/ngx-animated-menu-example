import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AppMod';

  configData = {
    menuColor: '#d523c8'
  }

  defaultMenuData = [
    { menuLabel: 'Home', value: 'Home' },
    { menuLabel: 'About', value: 'About' },
    { menuLabel: 'Service', value: 'Service' },
    { menuLabel: 'Blog', value: 'Blog' },
    { menuLabel: 'Contact', value: 'Contact' }
  ]

  getEmitData(data: any) {
    console.log('data from menu - ', data);
  }

}
