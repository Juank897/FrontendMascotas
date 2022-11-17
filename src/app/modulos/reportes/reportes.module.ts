import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { SolicitarAfiliacionComponent } from './solicitar-afiliacion/solicitar-afiliacion.component';
import { RevisarSolicitudComponent } from './revisar-solicitud/revisar-solicitud.component';
import { DetallesSolicitudComponent } from './detalles-solicitud/detalles-solicitud.component';
import { ResultadoAfiliacionComponent } from './resultado-afiliacion/resultado-afiliacion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';


@NgModule({
  declarations: [
    SolicitarAfiliacionComponent,
    RevisarSolicitudComponent,
    DetallesSolicitudComponent,
    ResultadoAfiliacionComponent,
    CrearCuentaComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
