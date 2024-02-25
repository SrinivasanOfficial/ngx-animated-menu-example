import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnimatedMenuComponent } from './ngx-animated-menu.component';

describe('NgxAnimatedMenuComponent', () => {
  let component: NgxAnimatedMenuComponent;
  let fixture: ComponentFixture<NgxAnimatedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxAnimatedMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxAnimatedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
