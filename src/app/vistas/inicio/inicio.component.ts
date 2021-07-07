import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { inicioI } from '../../modelos/inicio.interface';
import { ResponseI } from  '../../modelos/response.interface';

import { Router} from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

   inicioForm= new FormGroup({
    nit: new FormControl('', Validators.required)
   })

  constructor(private api:ApiService, private router:Router) { }

  errorStatus:boolean = false;
  errorMsj:string = "";

  nit:string = "";


  ngOnInit(): void {
    this.checkLocalInfoStorage();
  }

  checkLocalInfoStorage(){
    if(localStorage.getItem('nombre')){
      this.router.navigate(['dashboard']);
    }
  }

  onConsulta(form:inicioI){
   
    this.api.inicioUser(form).subscribe(data =>{
      console.log(data);
      let dataResponse:ResponseI =data;
      if(dataResponse.status=="200"){
        localStorage.setItem("nombre",dataResponse.Response.nombre);
        localStorage.setItem("nit",dataResponse.Response.nit);
        localStorage.setItem("capa",dataResponse.Response.capa);
        localStorage.setItem("segmento",dataResponse.Response.segmento);
        localStorage.setItem("gerenteRelacion",dataResponse.Response.gerenteRelacion);
        this.nit=dataResponse.Response.nit;
        this.router.navigate(['dashboard']);
      }else{
        this.errorStatus =true;
        this.errorMsj="No coincide numero Nit"
      }
    })
  }
// console.log(form);
}
