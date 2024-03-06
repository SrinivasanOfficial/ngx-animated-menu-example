import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AppMod';

  menuLib01: string = '<ngx-animated-menu (menuEmitData)="getEmitData($event)" [menuData]="defaultMenuData" ></ngx-animated-menu>';
  defaultMenuData = [
    { menuLabel: 'Home', value: 'Home' },
    { menuLabel: 'About', value: 'About' },
    { menuLabel: 'Service', value: 'Service' },
    { menuLabel: 'Blog', value: 'Blog' },
    { menuLabel: 'Contact', value: 'Contact' }
  ]

  configData02 = {
    menuColor: '#fd4e59',
    indicatorColor: '#e7e7e7'
  }
  menuData02 = [
    { menuLabel: '<i class=\'gg-home\'></i>', value: 'Home Icon' },
    { menuLabel: '<i class=\'gg-smile\'></i>', value: { name: 'download', url: '/anything' } },
    { menuLabel: '<i class=\'gg-bell\'></i>', value: 'Bell' },
    { menuLabel: '<i class=\'gg-search\'></i>', value: 'Bell' },
    { menuLabel: '<i class=\'gg-play-button-o\'></i>', value: 'Play' },
  ]

  configData03 = {
    menuColor: '#10abdf',
    indicatorColor: '#e7e7e7'
  }
  menuData03 = [
    { menuLabel: '<div class=\'menu-cls\'><div>Home</div><i class=\'gg-home\'></i></div>', value: 'Home' },
    { menuLabel: '<div class=\'menu-cls\'><div>Emoji</div><i class=\'gg-smile\'></i></div>', value: 'About' },
    { menuLabel: '<div class=\'menu-cls\'><div>Notification</div><i class=\'gg-bell\'></i></div>', value: 'Service', selected: true },
    { menuLabel: '<div class=\'menu-cls\'><div>Search</div><i class=\'gg-search\'></i></div>', value: 'Blog' },
    { menuLabel: '<div class=\'menu-cls\'><div>Play</div><i class=\'gg-play-button-o\'></i></div>', value: 'Contact' }
  ]

  getEmitData(data: any) {
    console.log('data from menu - ', data);
  }

}
