import { TestBed } from '@angular/core/testing';

import { CompanyDriveService } from './company-drive.service';

describe('CompanyDriveService', () => {
  let service: CompanyDriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyDriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
