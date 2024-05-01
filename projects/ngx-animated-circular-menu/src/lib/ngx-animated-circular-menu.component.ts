import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'ngx-animated-circular-menu',
  templateUrl: './ngx-animated-circular-menu.component.html',
  styleUrl: './ngx-animated-circular-menu.component.scss'
})
export class NgxAnimatedCircularMenuComponent implements AfterViewInit {

  menuWidthHeight: number = 200;
  menuOpen: boolean = false;

  @Input() configData: any = {};

  menuData: any = [
    {
      content: '<i class="gg-home"></i>',
      value: 0
    },
    {
      content: '<i class="gg-bell"></i>',
      value: 1
    },
    {
      content: '<i class="gg-shopping-cart"></i>',
      value: 2
    },
    {
      content: '<i class="gg-music"></i>',
      value: 3
    },
    {
      content: '<i class="gg-heart"></i>',
      value: 4
    },
    {
      content: '<i class="gg-phone"></i>',
      value: 5
    }
  ]

  @ViewChildren('nacmCenterMenuRef') nacmCenterMenuRef!: QueryList<ElementRef>;
  @ViewChildren('nacmMenuListRef') nacmMenuListRef!: QueryList<ElementRef>;
  @ViewChildren('nacmMenuIconRef') nacmMenuIconRef!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {

  }

  namcRotateIcon() {
    this.nacmCenterMenuRef?.first.nativeElement.classList.toggle('nacm-icon-rotate');
    this.namcToggleMenuOpenClose();
  }

  namcToggleMenuOpenClose() {
    this.menuOpen = !this.menuOpen;
    const menuListLen = this.nacmMenuListRef.length;
    this.nacmMenuListRef.forEach((itemRef, index) => {
      const menuElement = itemRef.nativeElement;
      if (this.menuOpen) {
        const menuAngle = (360 / menuListLen) * index;
        console.log(menuAngle);
        const styles = {
          transform: `rotate(${menuAngle}deg)`,
          left: '0px',
          transitionDelay: (0.1 * index) + 's'
        }
        Object.assign(menuElement.style, styles);
      } else {
        const styles = {
          transform: `rotate(0deg) translateX(90px)`
        }
        Object.assign(menuElement.style, styles);
      }

    });

    this.nacmMenuIconRef.forEach((itemRef, index) => {
      const menuElement = itemRef.nativeElement;
      const menuAngle = -(360 / menuListLen) * index;
      const styles = {
        transform: `rotate(${menuAngle}deg)`
      }
      Object.assign(menuElement.style, styles);
    });
  }
}

export interface NacmConfigData {
  menuWidthHeight?: number,
  iconWidthHeight?: number
}
