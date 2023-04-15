import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloAulaComponent } from './titulo-aula.component';

describe('TituloAulaComponent', () => {
  let component: TituloAulaComponent;
  let fixture: ComponentFixture<TituloAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
