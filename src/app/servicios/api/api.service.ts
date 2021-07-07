import { Injectable } from '@angular/core';
import { inicioI} from '../../modelos/inicio.interface';
import { ResponseI} from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ="/pruebaClient/userclient"
  
  constructor(private http:HttpClient) { }

  inicioUser(form:inicioI):Observable<ResponseI>{
    let direccion=this.url;
    return this.http.post<ResponseI>(direccion, form);
  }
}





