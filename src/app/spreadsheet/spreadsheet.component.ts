import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {
  @ViewChild('container', {static: false}) public container: ElementRef;
  public spreadsheetUi: webix.ui.spreadsheet;
  private chart;

  public ngOnInit(): void {
    // @ts-ignore
    webix.env.cdn = 'assets/webix';

    webix.ready(() => {
      this.spreadsheetUi = webix.ui({
        id: 'main_spreadsheet',
        container: 'spreadsheet-container',
        view: 'spreadsheet',
        toolbar: 'full',
        bottombar: true,
        data: {
          data: [
            [1, 1, 1, 'number'],
            [2, 1, 2, 'number'],
            [3, 1, 3, 'number'],
            [4, 1, 4, 'number'],
            [1, 2, 2, 'number'],
            [2, 2, 3, 'number'],
            [3, 2, 4, 'number'],
            [4, 2, 5, 'number'],
          ],
        }
      }) as webix.ui.spreadsheet;

      // @ts-ignore
      this.chart = this.spreadsheetUi.views.add(750, 50, 'chart', 'A1:B4',
        {type: 'line', legend: 1, xAxis: 1, width: 550, height: 400}
      );
    });
  }

  public async png(): Promise<void> {
    const chartBlob: Blob = await webix.toPNG(this.chart, {download: false});
    console.log('blob', chartBlob);
  }
}
