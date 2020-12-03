import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordsComponent } from './cords.component';

describe('CordsComponent', () => {
  let component: CordsComponent;
  let fixture: ComponentFixture<CordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
