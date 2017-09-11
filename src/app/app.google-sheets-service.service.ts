import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SheetsService {
  private dataUrl = 'https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1q7IIa6ZEUoyeMUbUFhI1K4w0kzf6xdVY6y-f5hihn3s&sheet=Form Responses 1';  // URL to web API
  private scheduleJSON = 'assets/app.schedule.json';
  constructor(private http: Http) { }
  getSheetData(): Observable<string[]> {
    return this.http.get(this.dataUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLocalData(): Observable<string[]> {
    return this.http.get(this.scheduleJSON)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
