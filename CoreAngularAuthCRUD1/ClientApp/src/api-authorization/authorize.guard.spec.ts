import { TestBed, inject } from '@angular/core/testing';

import { AuthorizeGuard } from './authorize.guard';
import { RouterTestingModule } from '@angular/router/testing'; // added

describe('AuthorizeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // added
      providers: [AuthorizeGuard]
    });
  });

  it('should ...', inject([AuthorizeGuard], (guard: AuthorizeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
