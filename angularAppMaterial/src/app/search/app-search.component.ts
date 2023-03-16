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

  searchFormFields = {
    id:"",
    awbPrefix:"",
    destination:"",
    agent:"",
    origin: "",
    awbSerial:""
  }

  constructor( private _appSearchService: AppSearchService){}
  
  ngOnInit(): void {
    
  }

  getSearchList(){
    this._appSearchService.getAllBookings().subscribe((data:any) => {
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

  onSearchClick(){
    this._appSearchService.searchById(this.searchFormFields.id)
    .subscribe((data: any) =>{
      this.bookingSearchList = [];
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

}

