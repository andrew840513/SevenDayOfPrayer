import {Component} from '@angular/core';
import {SheetsService} from './app.google-sheets-service.service';
import {tryCatch} from "rxjs/util/tryCatch";

@Component({
  selector: 'app-root',
  templateUrl: './app.signup.html',
  styleUrls: ['./app.signup.css'],
  providers: [SheetsService]
})

export class AppSignupComponent {
  ID;
  displayDate;
  displayTime;
  displayData;
  dates = ['9/14', '9/15', '9/16', '9/17', '9/18', '9/19', '9/20', '9/21'];
  times = ['0:00AM - 02:00AM', '2:00AM - 04:00AM', '04:00AM - 06:00AM', '06:00AM - 08:00AM', '08:00AM - 10:00AM', '10:00AM - 12:00PM', '12:00PM - 02:00PM', '02:00PM - 04:00PM', '04:00PM - 06:00PM', '06:00PM - 08:00PM', '08:00PM - 10:00PM', '10:00PM - 0:00AM'];
  sheetData: Array<any>;
  localData: Array<any>;
  grid = [[], [], [], [], [], [], [], []];
  _sheetService: SheetsService;

  constructor(sheetService: SheetsService) {
    this._sheetService = sheetService;
    this.getData();
  }


  getData() {
    this._sheetService.getSheetData().subscribe(
      data => {
        this.sheetData = data;
        this.getLocalData();
      },
      error => {
      },
      () => {
      });
  }

  getLocalData() {
    this._sheetService.getLocalData().subscribe(
      data => {
        this.localData = data;
        this.fillData();
      },
      error => {
      },
      () => {
      });
  }

  fillData() {
    for (let i = 0; i < 12; i++) {
      for (let o = 0; o < 8; o++) {
        this.grid[o][i] = [];
      }
    }
    for (const i of this.sheetData['Form Responses 1']) {
      for (const o in i) {
        if (i[o] !== '' && o !== 'Timestamp' && o !== '姓名') {
          const col = this.localData['date'][o];
          const partsOFStr = i[o].replace(/ /g, '').split(',');
          for (const v of partsOFStr) {
            console.log(v);
            const row = this.localData['time'][v];
            if(i['姓名'] !== ''){
              this.grid[col][row].push(i['姓名']);
            }else{
              this.grid[col][row].push('no name');
            }
          }
        }
      }
    }
    console.log(this.grid);
    this.changeColor();
  }

  changeColor() {
    for (let i = 0; i < 12; i++) {
      for (let o = 0; o < 8; o++) {
        if (this.grid[o][i].length > 0) {
          document.getElementById(('block' + o + i)).style.background = "grey";
          document.getElementById(('text' + o + i)).innerHTML = this.grid[o][i].length + '人認領';
        } else {
          document.getElementById(('block' + o + i)).style.background = "#adff2f";
          document.getElementById(('text' + o + i)).innerHTML = '尚未認領';
        }
      }
    }
  }

  onTextClick(ID, date, time) {
    this.ID = ID;
    this.displayDate = date;
    this.displayTime = time;
    this.displayData = this.grid[this.ID.substring(0, 1)][this.ID.substring(1)];
    console.log(this.displayData);
  }

}
