import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDosComponent } from './slide-dos.component';

describe('SlideDosComponent', () => {
  let component: SlideDosComponent;
  let fixture: ComponentFixture<SlideDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
