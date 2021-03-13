import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpxComponentsUiComponent } from './rpx-components-ui.component';

describe('RpxCompontentsUiComponent', () => {
  let component: RpxComponentsUiComponent;
  let fixture: ComponentFixture<RpxComponentsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpxComponentsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpxComponentsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
