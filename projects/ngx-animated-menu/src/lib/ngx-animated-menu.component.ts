import { Component, ElementRef, HostListener, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'ngx-animated-menu',
  templateUrl: './ngx-animated-menu.component.html',
  styleUrl: './ngx-animated-menu.component.scss'
})
export class NgxAnimatedMenuComponent {

  _defConfigData: NamDefaultConfigData = {
    menuColor: '#4c64f5',
    indicatorColor: '#ffffff'
  }
  @Input() menuData!: Array<NamMenuData>;
  @Input()
  set configData(value: any) {
    this._defConfigData = { ...this._defConfigData, ...value };
  }


  randomId: number = Math.floor(1000 + Math.random() * 9000);
  parentContainerId: string = 'nam-main-container-id-' + this.randomId;
  beforeContent: string = '';

  @ViewChildren('namMainContainer') namMainContainer!: QueryList<ElementRef>;
  @ViewChildren('namMainEleCnt') namMainEleCnt!: QueryList<ElementRef>;
  @ViewChildren('namIndicatorDom') namIndicatorDom!: QueryList<ElementRef>;
  @ViewChildren('namDynamicElements') namDynamicElements!: QueryList<ElementRef>;

  menuEleDet: Array<any> = [];
  curMenuEle: number = 0;

  ngOnInit() {
    this.beforeContent = 'dynamic';
    console.log('def value - ',this._defConfigData);
  }

  ngAfterViewInit() {
    this.namGetMenuElementDetails();
    this.namUpdateActiveMenuBar(0);
    this.beforeContent = 'dynamic';
  }

  namGetMenuElementDetails() {
    this.namMainEleCnt.first.nativeElement.style.setProperty('--background-color',this._defConfigData.menuColor)
    this.menuEleDet = [];
    this.namDynamicElements.forEach(element => {
      console.log(element.nativeElement.offsetLeft);
      this.menuEleDet.push({
        width: element.nativeElement.clientWidth,
        offsetLeft: element.nativeElement.offsetLeft
      });
    });
    console.log('this.menuEleDet - ', this.menuEleDet);
  }

  namUpdateActiveMenuBar(key: number) {
    const curMenu = this.menuEleDet[key];
    this.curMenuEle = key;
    this.namIndicatorDom.first.nativeElement.style.width = curMenu.width + 'px';
    this.namIndicatorDom.first.nativeElement.style.left = curMenu.offsetLeft + 'px';
    this.namIndicatorDom.first.nativeElement.style.setProperty('--indicator-color', this._defConfigData.indicatorColor);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('resize');
    this.namGetMenuElementDetails();
    this.namUpdateActiveMenuBar(this.curMenuEle);
  }

}

export interface NamMenuData {
  content: any;
  value: any;
}

export interface NamDefaultConfigData {
  menuColor?: '#4c64f5';
  indicatorColor?: '#ffffff';
}
