import { TestBed } from '@angular/core/testing';

import { RpxComponentsUiService } from './rpx-components-ui.service';

describe('RpxComponentsUiService', () => {
  let service: RpxComponentsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpxComponentsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
