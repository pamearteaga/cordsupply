import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCordComponent } from './new-cord.component';

describe('NewCordComponent', () => {
  let component: NewCordComponent;
  let fixture: ComponentFixture<NewCordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
