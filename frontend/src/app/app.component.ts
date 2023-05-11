import { Component, OnInit } from '@angular/core';
import { Orders } from './orders.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  parentSelector: boolean = false;
  
  selectedDataFromTable = [];

  searchParameter:string;

  selectedStatus:any;

  selectedDistribution:any;

  Status: string[] = ["In Transit","Placed","Out for Delivery",];

  Distributions: string[] = ["Bangalore","Patna","Hyderabad"];

  orders: Orders[] = [
  {
    id:213,
    customer: "Souptik C",
    product: "Orbea Orco M30",
    date:"08 Aug 2020",
    distribution:"Bangalore",
    status: "In Transit",
    price:"800",
    select: false
  },
  {
    id:455,
    customer: "Anangha P",
    product: "Pinarelo Gang Disk (x2)",
    date:"06 Aug 2020",
    distribution:"Hyderabad",
    status: "In Tansit",
    price:"900",
    select: false
  },
  {
    id:121,
    customer: "Suranjana G",
    product: "S Works Tarmac SL7",
    date:"12 Aug 2020",
    distribution:"Patna",
    status: "Out for Delivery",
    price:"300",
    select: false
  },
  {
    id:424,
    customer: "Nitin S",
    product: "7878",
    date:"07 Aug 2020",
    distribution:"Bangalore",
    status: "In Transit",
    price:"1100",
    select: false
  },
  {
    id:877,
    customer: "Alpit Anand",
    product: "Felt Sport E 50 (x3)",
    date:"12 Sept 2020",
    distribution:"Hyderabad",
    status: "Placed",
    price:"600",
    select: false
  },
  {
    id:235,
    customer: "Rohina M",
    product: "BH Atom 29 (x5)",
    date:"31 July 2020",
    distribution:"Patna",
    status: "Delivered",
    price:"1250",
    select: false
  },
  {
    id:837,
    customer: "Pratha Pratim",
    product: "HJC Atara, Abus",
    date:"08 Aug 2020",
    distribution:"Bangalore",
    status: "Out For Delivery",
    price:"850",
    select: false
  },
  ];
	
	constructor() { }
	
	ngOnInit() {
		
	}

  onChange($event) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    if(id != -1){
      if(isChecked){
          var data = this.orders.filter(dat => dat.id == id);
          this.selectedDataFromTable.push(...data);
      }
      else if(!isChecked){
        this.selectedDataFromTable.splice(this.selectedDataFromTable.findIndex(a => a.id === id) , 1)
      }
    }
    else if(id == -1 && isChecked == true){
      this.selectedDataFromTable  = this.orders;
    }
    else if(id == -1 && isChecked == false){
      this.selectedDataFromTable.length = 0;
    }
    console.log(this.selectedDataFromTable)
   
    //to select all checkboxes
    this.orders = this.orders.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }
      console.log(d)
      return d;
    });
  }

  csvExport(){

  }
	

}
