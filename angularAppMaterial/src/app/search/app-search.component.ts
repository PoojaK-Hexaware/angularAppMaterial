import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { AppSearchService } from '../shared/services/app-search.service';
@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: []
  
})
export class AppSearchComponent implements  AfterViewInit, OnInit{
  displayedColumns: string[] = ['id', 'AWB_prefix', 'AWB_Serial', 'AWB_ServiceType', 'agent',  'area', 'destination', 'isMaster', 'issueCarrier', 'origin',
  'totalChargableWeight',  'totalVolume', 'totalWeight'];
  bookingSearchList: any  = [];
  dataSource = new MatTableDataSource<any>;
 
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor( private _appSearchService: AppSearchService){}
  
  ngOnInit(): void {
    
  }

  getSearchList(){
    this._appSearchService.getAllBookings().subscribe((data:any) => {
      console.log("search list*****",data)
     
    
      for(let i = 0; i < data.length; i++){
         this.bookingSearchList.push({
          id: data[i]._id,
          AWB_prefix: data[i]['AWB-Prefix'],
          isMaster: data[i]['Is-Master'],
          AWB_ServiceType: data[i]['AWB-Service-Type'],
          AWB_Serial: data[i]['AWB-Serial'],
          issueCarrier: data[i]['Issue-Carrier'],
          origin: data[i]['Origin'],
          destination: data[i]['Destination'],
          agent: data[i]['Agent'],
          area: data[i]['Area'],
          totalWeight: data[i]['Total-Weight'],
          totalChargableWeight: data[i]['Total-Chargeable-Weight'],
          totalVolume: data[i]['Total-Volume']
         })
      }
      this.dataSource = new MatTableDataSource(this.bookingSearchList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  ngAfterViewInit() {
    this.getSearchList();
  }

}
// export interface searchElement {
//   id: number;
//   AWB_prefix: number;
//   isMaster: boolean;
//   AWB_ServiceType: string;
//   AWB_Serial: number;
//   issueCarrier: string;
//   origin: string;
//   destination: string;
//   agent: string;
//   area: string;
//   totalWeight: number;
//   totalChargableWeight: number;
//   totalVolume:number
// }

// const ELEMENT_DATA: searchElement[] = [
//   {
//     id: 875452,
//     AWB_prefix: 950,
//     isMaster: true,
//     AWB_ServiceType: "ABC",
//     AWB_Serial: 10203045,
//     issueCarrier: "XYZ",
//     origin: "SIN",
//     destination: "LHR",
//     agent: "CFSIN",
//     area: "ABC",
//     totalWeight: 30,
//     totalChargableWeight: 25,
//     totalVolume:12
//   },
//   {
//     id: 875453,
//     AWB_prefix: 850,
//     isMaster: true,
//     AWB_ServiceType: "ABC",
//     AWB_Serial: 10203045,
//     issueCarrier: "XYZ",
//     origin: "SIP",
//     destination: "LHR",
//     agent: "CFSIN",
//     area: "ABC",
//     totalWeight: 30,
//     totalChargableWeight: 25,
//     totalVolume:12
//   },
//   {
//     id: 875454,
//     AWB_prefix: 750,
//     isMaster: true,
//     AWB_ServiceType: "ABC",
//     AWB_Serial: 10203045,
//     issueCarrier: "XYZ",
//     origin: "SIN",
//     destination: "LHR",
//     agent: "CFSIN",
//     area: "ABC",
//     totalWeight: 30,
//     totalChargableWeight: 25,
//     totalVolume:12
//   },
//   {
//     id: 875455,
//     AWB_prefix: 650,
//     isMaster: true,
//     AWB_ServiceType: "ABC",
//     AWB_Serial: 10203045,
//     issueCarrier: "XYZ",
//     origin: "SIQ",
//     destination: "LHB",
//     agent: "CFSIN",
//     area: "ABC",
//     totalWeight: 30,
//     totalChargableWeight: 25,
//     totalVolume:12
//   },
//   {
//     id: 875456,
//     AWB_prefix: 550,
//     isMaster: true,
//     AWB_ServiceType: "ABC",
//     AWB_Serial: 10203045,
//     issueCarrier: "PQR",
//     origin: "SIN",
//     destination: "LHT",
//     agent: "CFSIN",
//     area: "ABC",
//     totalWeight: 30,
//     totalChargableWeight: 25,
//     totalVolume:12
//   },
//   {
//     id: 875457,
//     AWB_prefix: 450,
//     isMaster: true,
//     AWB_ServiceType: "ABC",
//     AWB_Serial: 10203045,
//     issueCarrier: "ABC",
//     origin: "SIN",
//     destination: "LHR",
//     agent: "CFSIN",
//     area: "ABC",
//     totalWeight: 30,
//     totalChargableWeight: 25,
//     totalVolume:12
//   }
// ]
