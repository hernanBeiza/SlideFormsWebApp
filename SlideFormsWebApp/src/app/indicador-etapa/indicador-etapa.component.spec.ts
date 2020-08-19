import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorEtapaComponent } from './indicador-etapa.component';

describe('IndicadorEtapaComponent', () => {
  let component: IndicadorEtapaComponent;
  let fixture: ComponentFixture<IndicadorEtapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadorEtapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
