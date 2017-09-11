import { TestBed, inject } from '@angular/core/testing';

import { App.GoogleSheetsServiceService } from './app.google-sheets-service.service';

describe('App.GoogleSheetsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.GoogleSheetsServiceService]
    });
  });

  it('should be created', inject([App.GoogleSheetsServiceService], (service: App.GoogleSheetsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
