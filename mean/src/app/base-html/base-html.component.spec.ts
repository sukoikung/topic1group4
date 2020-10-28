import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHtmlComponent } from './base-html.component';

describe('BaseHtmlComponent', () => {
  let component: BaseHtmlComponent;
  let fixture: ComponentFixture<BaseHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
