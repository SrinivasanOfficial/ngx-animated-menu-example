import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnimatedCircularMenuComponent } from './ngx-animated-circular-menu.component';

describe('NgxAnimatedCircularMenuComponent', () => {
  let component: NgxAnimatedCircularMenuComponent;
  let fixture: ComponentFixture<NgxAnimatedCircularMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxAnimatedCircularMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxAnimatedCircularMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
