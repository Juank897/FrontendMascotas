import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = 'http://localhost:3000';
  datosUsuariosEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }


  VerificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.RefrescarDatosSesion(datos);
    }
  }

  ObtenerDatosUsuarioEnSesion() {
    return this.datosUsuariosEnSesion.asObservable;
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuariosEnSesion.next(datos);

  }

  Identificar(usuario: string, contrasena: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>('${this.url}/identificarUsuario', {
      usuario: usuario,
      contrasena: contrasena
    }, {
      headers: new HttpHeaders({
      })
    })
  }


  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos)
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem("datosSesion");
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }

  EliminarInformacionSesion() {
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SeHaIniciaddoSesion() {
    let datosString = localStorage.getItem("datosSesion");
    return datosString;

  }




}
