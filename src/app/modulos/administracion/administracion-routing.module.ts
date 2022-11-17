import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarMascotaComponent } from './mascota/consultar-mascota/consultar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { ConsultarUsuarioComponent } from './usuarios/consultar-usuario/consultar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [

  // Componente usuarios
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'consultar-usuario',
    component: ConsultarUsuarioComponent
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent
  },

// Componente mascota
{
  path: 'crear-mascota',
  component: CrearMascotaComponent
},
{
  path: 'consultar-mascota',
  component: ConsultarMascotaComponent
},
{
  path: 'editar-mascota',
  component: EditarMascotaComponent
},
{
  path: 'eliminar-mascota',
  component: EliminarMascotaComponent
},
// componente plan




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
