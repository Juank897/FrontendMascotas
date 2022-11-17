import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
{
  path:'seguridad',
  loadChildren:() => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
},
{
  path:'administracion',
  loadChildren:() => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
},
{
  path:'seguridad',
  loadChildren:() => import("./modulos/publico/publico.module").then(x => x.PublicoModule)
},
{
  path:'reportes',
  loadChildren:() => import("./modulos/reportes/reportes.module").then(x => x.ReportesModule)
},

  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
