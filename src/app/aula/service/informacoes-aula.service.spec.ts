import { TestBed } from '@angular/core/testing';

import { InformacoesAulaService } from './informacoes-aula.service';

describe('InformacoesAulaService', () => {
  let service: InformacoesAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacoesAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
