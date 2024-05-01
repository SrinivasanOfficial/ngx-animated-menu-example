import { TestBed } from '@angular/core/testing';

import { NgxAnimatedCircularMenuService } from './ngx-animated-circular-menu.service';

describe('NgxAnimatedCircularMenuService', () => {
  let service: NgxAnimatedCircularMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAnimatedCircularMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
