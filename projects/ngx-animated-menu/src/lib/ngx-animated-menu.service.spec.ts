import { TestBed } from '@angular/core/testing';

import { NgxAnimatedMenuService } from './ngx-animated-menu.service';

describe('NgxAnimatedMenuService', () => {
  let service: NgxAnimatedMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAnimatedMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
