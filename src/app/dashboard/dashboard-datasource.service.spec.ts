import { TestBed } from '@angular/core/testing';

import { DashboardDatasourceService } from './dashboard-datasource.service';

describe('DashboardDatasourceService', () => {
  let service: DashboardDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
