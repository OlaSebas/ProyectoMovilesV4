import { TestBed } from '@angular/core/testing';

import { AuthenticadoGuard } from './authenticado.guard';

describe('AuthenticadoGuard', () => {
  let guard: AuthenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
