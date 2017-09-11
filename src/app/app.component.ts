import { Component } from '@angular/core';
import { SheetsService } from './app.google-sheets-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SheetsService]
})

export class AppComponent {
  index = 0;
  dates = ['9/14', '9/15', '9/16','9/17', '9/18', '9/19','9/20', '9/21'];
  times = ['0:00AM - 02:00AM','2:00AM - 04:00AM','04:00AM - 06:00AM','06:00AM - 08:00AM','08:00AM - 10:00AM','10:00AM - 12:00PM','12:00PM - 02:00PM','02:00PM - 04:00PM','04:00PM - 06:00PM','06:00PM - 08:00PM','08:00PM - 10:00PM','10:00PM - 0:00AM'];
  uniqueID =[];
  sheetData: Array<any>;
  localData: Array<any>;
  _sheetService: SheetsService;
  constructor(sheetService: SheetsService){
     this._sheetService = sheetService;
     this.getData();
  }
  generateID(){
    for(var i =0; i<8;i=i++){
      for(var o =0; o< 12;o++){
        var value = i+""+o;
        this.uniqueID.push(value);
      }
    }
    console.log(this.uniqueID)
  }
  getData(){
    this._sheetService.getSheetData().subscribe(
      data =>{
        this.sheetData = data;
        this.getLocalData();
      },
      error => {
        alert(error);
      },
      () => {
      });
  }

  getLocalData(){
    this._sheetService.getLocalData().subscribe(
      data => {
        this.localData = data;
        this.generateID();
        //this.testData();
      },
      error => {
        alert(error);
      },
      () => {
      });
  }

  testData(){
    for(var data of this.sheetData["Form Responses 1"]){
      for(var value in data){
        if(data[value] !=""){
          console.log(value+":"+data[value])
        }
      }
    }
  }

}
