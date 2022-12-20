import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  vms: string[] = [
    'dev-vm-blr6',
    'dev-vm-blr8',
    'coredev4',
    'coredev5',
    'coredev3',
    'core-dev5'
  ];

  dropdownList;
  dropdownSettings;

  featuresSelected: string[] = [];


  constructor(private reports: ReportsService) {
    
   }

  ngOnInit() {

    this.reports.callApi('dev-vm-blr6', 'nrs');
    this.reports.enableFeature();
  
      this.dropdownList = this.getData();
  
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'Unselect All'
      };
    }

  getData() {
    return [
      {item_id: 1, item_text: 'Admin Reporting'},
      {item_id: 2, item_text: 'Interactive Reporting'},
    ]
  }

  features: {id: number, text: string}[] = []

  selectFeature(event: any) {
    console.log(event);
    
    if (event.item_id === 1) {
      this.featuresSelected = ['Admin Reporting'];
    }
    if (event.item_id === 2) {
      this.featuresSelected = ['Interactive Reporting'];
    }
  }
  
  selectFeatures(event: any) {
    this.featuresSelected = ['Admin Reporting', 'Interactive Reporting'];
  }
  

  callApi(vmName: string, instanceName: string) { 
    // console.log(vmName, instanceName);
       
    // this.reports.callApi(vmName, instanceName);

    // this.reports.callApi('dev-vm-blr6','nrs');

    this.reports.enableFeature();
  }

}
