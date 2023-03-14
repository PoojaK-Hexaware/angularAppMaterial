import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'AWB_prefix', 'isMaster', 'AWB_ServiceType','AWB_Serial','issueCarrier','origin','destination','agent','area','totalWeight','totalChargableWeight','totalVolume'];
  dataSource = new MatTableDataSource<searchElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  title = 'angularAppMaterial';
  searchFlag = true;
  createFlag = false;
  onSearchClick(){
    this.searchFlag = true;
    this.createFlag = false;
  }
  onCreateClick(){
    this.createFlag = true;
    this.searchFlag = false;
  }
}

  export interface searchElement {
    id: number;
    AWB_prefix: number;
    isMaster: boolean;
    AWB_ServiceType: string;
    AWB_Serial: number;
    issueCarrier: string;
    origin: string;
    destination: string;
    agent: string;
    area: string;
    totalWeight: number;
    totalChargableWeight: number;
    totalVolume:number
  }
  
  const ELEMENT_DATA: searchElement[] = [
    {
      id: 875452,
      AWB_prefix: 950,
      isMaster: true,
      AWB_ServiceType: "ABC",
      AWB_Serial: 10203045,
      issueCarrier: "XYZ",
      origin: "SIN",
      destination: "LHR",
      agent: "CFSIN",
      area: "ABC",
      totalWeight: 30,
      totalChargableWeight: 25,
      totalVolume:12
    },
    {
      id: 875453,
      AWB_prefix: 950,
      isMaster: true,
      AWB_ServiceType: "ABC",
      AWB_Serial: 10203045,
      issueCarrier: "XYZ",
      origin: "SIN",
      destination: "LHR",
      agent: "CFSIN",
      area: "ABC",
      totalWeight: 30,
      totalChargableWeight: 25,
      totalVolume:12
    },
    {
      id: 875454,
      AWB_prefix: 950,
      isMaster: true,
      AWB_ServiceType: "ABC",
      AWB_Serial: 10203045,
      issueCarrier: "XYZ",
      origin: "SIN",
      destination: "LHR",
      agent: "CFSIN",
      area: "ABC",
      totalWeight: 30,
      totalChargableWeight: 25,
      totalVolume:12
    },
    {
      id: 875455,
      AWB_prefix: 950,
      isMaster: true,
      AWB_ServiceType: "ABC",
      AWB_Serial: 10203045,
      issueCarrier: "XYZ",
      origin: "SIN",
      destination: "LHR",
      agent: "CFSIN",
      area: "ABC",
      totalWeight: 30,
      totalChargableWeight: 25,
      totalVolume:12
    },
    {
      id: 875456,
      AWB_prefix: 950,
      isMaster: true,
      AWB_ServiceType: "ABC",
      AWB_Serial: 10203045,
      issueCarrier: "XYZ",
      origin: "SIN",
      destination: "LHR",
      agent: "CFSIN",
      area: "ABC",
      totalWeight: 30,
      totalChargableWeight: 25,
      totalVolume:12
    },
    {
      id: 875457,
      AWB_prefix: 950,
      isMaster: true,
      AWB_ServiceType: "ABC",
      AWB_Serial: 10203045,
      issueCarrier: "XYZ",
      origin: "SIN",
      destination: "LHR",
      agent: "CFSIN",
      area: "ABC",
      totalWeight: 30,
      totalChargableWeight: 25,
      totalVolume:12
    }
  ]
