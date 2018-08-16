import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsOfInterestComponent } from './persons-of-interest.component';

describe('PersonsOfInterestComponent', () => {
  let component: PersonsOfInterestComponent;
  let fixture: ComponentFixture<PersonsOfInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsOfInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
