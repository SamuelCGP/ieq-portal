import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoAulaComponent } from './descricao-aula.component';

describe('DescricaoAulaComponent', () => {
  let component: DescricaoAulaComponent;
  let fixture: ComponentFixture<DescricaoAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
