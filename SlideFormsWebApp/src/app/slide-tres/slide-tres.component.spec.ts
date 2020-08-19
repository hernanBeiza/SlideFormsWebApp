import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTresComponent } from './slide-tres.component';

describe('SlideTresComponent', () => {
  let component: SlideTresComponent;
  let fixture: ComponentFixture<SlideTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
