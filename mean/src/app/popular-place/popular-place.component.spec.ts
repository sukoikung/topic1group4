import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPlaceComponent } from './popular-place.component';

describe('PopularPlaceComponent', () => {
  let component: PopularPlaceComponent;
  let fixture: ComponentFixture<PopularPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
