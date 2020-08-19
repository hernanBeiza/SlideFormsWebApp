import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraNavegacionComponent } from './botonera-navegacion.component';

describe('BotoneraNavegacionComponent', () => {
  let component: BotoneraNavegacionComponent;
  let fixture: ComponentFixture<BotoneraNavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoneraNavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
