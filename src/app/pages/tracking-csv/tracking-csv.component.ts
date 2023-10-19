import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface AcountFileUpload {
  account_id: string,
  parent_account_id: string,
  name: string,
  status: string
}
@Component({
  selector: 'ngx-tracking-csv',
  templateUrl: './tracking-csv.component.html',
  styleUrls: ['./tracking-csv.component.scss']
})

export class TrackingCsvComponent {
  accountFileUpload: AcountFileUpload[] = []
  valueUpload: any
  textvalue: any
  test=[{
    key:'1',
    parentKey:'1'
  }]
  expanded: Boolean = true;
  constructor(
    private http: HttpClient,
  ) {
  }

  private getTextFromFile(event: any) {
    const file: File = event.value[0];
    let fileContent = file.text();

    return fileContent;
  }
  onUploadStarted(e) {
    this.accountFileUpload = []
    let filecontent = this.getTextFromFile(e)
    filecontent.then(data => {
      let csvToRowArray = data.split("\n");
      for (let index = 1; index < csvToRowArray.length - 1; index++) {
        let row = csvToRowArray[index].split(",");
        let value = {
          account_id: row[0],
          parent_account_id: row[1],
          name: row[2],
          status: row[3]
        }
        this.accountFileUpload.push(value);
      }
      console.log(this.accountFileUpload)
    })
  }

}
