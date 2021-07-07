import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  nit:string = ""+localStorage.getItem('nit');
  nombre:string = ""+localStorage.getItem('nombre');
  capa:string = ""+localStorage.getItem('capa');
  segmento:string = ""+localStorage.getItem('segmento');
  gerenteRelacion:string = ""+localStorage.getItem('gerenteRelacion');

  ngOnInit(): void {
   
  }

  

}
