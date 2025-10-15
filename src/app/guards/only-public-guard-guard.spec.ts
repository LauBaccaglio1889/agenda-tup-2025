import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { onlyPublicGuardGuard } from './only-public-guard-guard';

describe('onlyPublicGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlyPublicGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
