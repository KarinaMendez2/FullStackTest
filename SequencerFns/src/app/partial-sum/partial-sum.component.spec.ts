import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialSumComponent } from './partial-sum.component';

describe('PartialSumComponent', () => {
  let component: PartialSumComponent;
  let fixture: ComponentFixture<PartialSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
