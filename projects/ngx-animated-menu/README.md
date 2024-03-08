# ngx-animated-menu

Angular animated menu library, a sleek and dynamic solution to enhance user interaction in web and app interfaces. With a collection of captivating animations and smooth transitions, our library offers a visually appealing way to navigate through menus, creating a seamless and engaging user experience. Whether you're designing a website or a mobile application, our animated menu library adds an extra layer of polish and interactivity to elevate your project to the next level

## Features

- Menu Indicator Animating to selected Menu
- Responsive Design
- Custom Color Option
- Dynamic String & Html Content

## Demo

[https://srinivasanofficial.github.io/ngx-animated-menu-demo/](https://srinivasanofficial.github.io/ngx-animated-menu-demo/)

## Installation

Install ngx-animated-menu via:

```bash
  npm i ngx-animated-menu
```

Once installed you need to import our main module in your application module:

```bash
  import { NgxAnimatedMenuModule } from 'ngx-animated-menu';

  @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxAnimatedMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Usage

```
<ngx-animated-menu
          (menuEmitData)="getEmitData($event)"
          [configData]="configData"
          [menuData]="menuData"
></ngx-animated-menu>
```

#### @Input menuData

| Parameter             | Type                     | Default Value |
| :-------------------- | :----------------------- | :------------ |
| `menuLabel`           | `String or HTML content` |               |
| `value`               | `String or HTML content` |               |
| `selected` (optional) | `boolean`                | true          |

```
[
    { menuLabel: 'Home', value: 'Home' },
    { menuLabel: 'About', value: 'About' },
    { menuLabel: 'Service', value: 'Service' },
    { menuLabel: 'Blog', value: 'Blog' },
    { menuLabel: 'Contact', value: 'Contact' }
]
```

#### @Input configData (Optional)

| Parameter        | Type             | Default Value |
| :--------------- | :--------------- | :------------ |
| `menuColor`      | `Hex Color code` | '#4c64f5 '    |
| `indicatorColor` | `Hex Color code` | '#ffffff'     |

```
{
    menuColor: '#4c64f5',
    indicatorColor: '#ffffff'
}
```

#### @Output menuEmitData (Optional)

Emit the current Array of data when clicking the corresponding Menu

## Authors

- [@SrinivasanOfficial](https://github.com/orgs/SrinivasanOfficial)

## Contributing

I am very appreciate for your ideas, proposals and found bugs which you can leave in github issues. Thanks in advance!
