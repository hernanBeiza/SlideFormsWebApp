import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideUnoComponent } from './slide-uno.component';

describe('SlideUnoComponent', () => {
  let component: SlideUnoComponent;
  let fixture: ComponentFixture<SlideUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
