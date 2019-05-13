import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import 'ag-grid-enterprise';
import { rowData } from './utils';
import { BuysellstrRenderer } from './renderers/buysellstr.renderer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData: any;
  private frameworkComponents;
  private getRowHeight;
  private rowHeight;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      { 
        headerName: 'Security',
        children: [
          { headerName: 'Name', field: 'name' },
          { headerName: 'Sedol Code', field: 'sedolCode' },
          { headerName: 'Isin Code', field: 'isinCode' },
        ]
      },
      { 
        headerName: 'Sector',
        children: [
          { headerName: 'Sector Name', field: 'sectorName' },
          { headerName: 'Sector Group', field: 'sectorGroup' }
        ]
      },
      { headerName: 'Cur', field: 'cur' },
      { headerName: 'Size', field: 'size' },
      { headerName: 'Country', field: 'country', width: 250 },
      { 
        headerName: 'Info', field: 'info',
        cellStyle: { margin: '0px', 'line-weight': 'normal !important', padding: '0px !important' },
        cellRenderer: 'buysellstrRenderer'
      },
      { headerName: 'Local Price', cellStyle: { 'margin-left': '0px' }, field: 'localPrice' },
      { headerName: 'Price Pf. Currency', field: 'pricePfCurrency' },
      { headerName: 'Total Nb Of Shares', field: 'totalNbOfShares' },
      { headerName: 'FIF Factor/ Adjust', field: 'fifFactorAdjust' },
      { headerName: 'FIF Nb Of Shares', field: 'fifNbOfShares' },
      { headerName: 'Weight', field: 'weight' }
    ];

    this.defaultColDef = {
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: true,
      resizable: true
    };

    this.frameworkComponents = {
      buysellstrRenderer: BuysellstrRenderer
    };

    this.rowHeight = 30;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    this.rowData = rowData;
  }
}
