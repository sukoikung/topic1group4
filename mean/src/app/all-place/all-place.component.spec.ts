import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlaceComponent } from './all-place.component';

describe('AllPlaceComponent', () => {
  let component: AllPlaceComponent;
  let fixture: ComponentFixture<AllPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
