import { Component, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
	selector: 'ngx-animated-menu',
	templateUrl: './ngx-animated-menu.component.html',
	styleUrl: './ngx-animated-menu.component.scss'
})
export class NgxAnimatedMenuComponent {
	menuEleDet: Array<any> = [];
	curMenuEle: number = 0;
	_defConfigData: NamDefaultConfigData = {
		menuColor: '#4c64f5',
		indicatorColor: '#ffffff'
	}
	_menuData: any = [];
	randomId: number = Math.floor(1000 + Math.random() * 9000);
	parentContainerId: string = 'nam-main-container-id-' + this.randomId;
	beforeContent: string = '';

	@Input()
	set menuData(value: any) {
		let key = 0;
		this._menuData = [...value];
		value.forEach((val: any) => {
			if (val.hasOwnProperty('selected') && val.selected) {
				this.curMenuEle = key;
			}
			key++;
		});
		console.log('this.curMenuEle', this.curMenuEle)
	}
	@Input()
	set configData(value: any) {
		this._defConfigData = { ...this._defConfigData, ...value };
	}
	@Output() menuEmitData = new EventEmitter<any>();

	@ViewChildren('namMainContainer') namMainContainer!: QueryList<ElementRef>;
	@ViewChildren('namMainEleCnt') namMainEleCnt!: QueryList<ElementRef>;
	@ViewChildren('namIndicatorDom') namIndicatorDom!: QueryList<ElementRef>;
	@ViewChildren('namDynamicElements') namDynamicElements!: QueryList<ElementRef>;




	ngOnInit() {
		this.beforeContent = 'dynamic';
	}

	ngAfterViewInit() {
		this.namGetMenuElementDetails();
		this.namUpdateActiveMenuBar(this.curMenuEle);
		this.beforeContent = 'dynamic';
	}

	namGetMenuElementDetails() {
		this.namMainEleCnt.first.nativeElement.style.setProperty('--background-color', this._defConfigData.menuColor);
		this.namMainEleCnt.first.nativeElement.style.color = this._defConfigData.indicatorColor;
		this.menuEleDet = [];
		this.namDynamicElements.forEach(element => {
			this.menuEleDet.push({
				width: element.nativeElement.clientWidth,
				offsetLeft: element.nativeElement.offsetLeft
			});
		});
	}

	namUpdateActiveMenuBar(key: number, clicked?: boolean) {
		const curMenu = this.menuEleDet[key];
		this.curMenuEle = key;
		this.namIndicatorDom.first.nativeElement.style.width = curMenu.width + 'px';
		this.namIndicatorDom.first.nativeElement.style.left = curMenu.offsetLeft + 'px';
		this.namIndicatorDom.first.nativeElement.style.setProperty('--indicator-color', this._defConfigData.indicatorColor);
		if (clicked) {
			this.menuEmitData.emit(this._menuData[key]);
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.namGetMenuElementDetails();
		this.namUpdateActiveMenuBar(this.curMenuEle);
	}

}

export interface NamMenuData {
	menuLabel: any;
	value: any;
	selected?: false
}

export interface NamDefaultConfigData {
	menuColor?: '#4c64f5';
	indicatorColor?: '#ffffff';
}
