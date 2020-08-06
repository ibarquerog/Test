import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionComponent } from './sesion/sesion.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ConfiguracionUsuarioComponent } from './configuracion-usuario/configuracion-usuario.component';
import { HomeComponent } from './home/home.component';
import {RegistrarComponent} from './registrar/registrar.component'
import { ObrasComponent } from './obras/obras.component';
import { ObrasNewComponent } from './obras/obras-new/obras-new.component';
import {ProblemaComponent} from './problema/problema.component'
import {VerProblemaComponent} from './problema/ver-problema/ver-problema.component'
import {NewProblemComponent} from './problema/new-problem/new-problem.component'
import { ObrasEditComponent } from './obras/obras-edit/obras-edit.component';
import {NewAdministradorComponent} from './configuracion-usuario/new-administrador/new-administrador.component'
import {EditAdministradorComponent} from './configuracion-usuario/edit-administrador/edit-administrador.component'
import {TablaProblemaComponent} from './problema/tabla-problema/tabla-problema.component'
import {VerProblemaUserComponent} from './user/ver-problema-user/ver-problema-user.component'
import { SolucionesComponent } from './user/soluciones/soluciones.component';
import { FiltroComponent } from './user/filtro/filtro.component';
import { CalendarioComponent } from './user/calendario/calendario.component';
import { AnotacionesComponent } from './anotaciones/anotaciones.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import {EnviarSugerenciaComponent} from './user/enviar-sugerencia/enviar-sugerencia.component';

const routes: Routes = [
  {path: '', component: SesionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: SesionComponent},
  {path: 'obrasArt', component: ObrasComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'obras-new', component: ObrasNewComponent},
  {path: 'obras-edit/:id', component: ObrasEditComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'config', component: ConfiguracionUsuarioComponent},
  {path: 'problem', component: ProblemaComponent},
  {path: 'registro', component: RegistrarComponent},
  {path: 'verProblema/:nombre', component: VerProblemaComponent},
  {path: 'newProblem', component: NewProblemComponent},
  {path: 'newAdministrador', component: NewAdministradorComponent},
  {path: 'editAdministrador/:id', component: EditAdministradorComponent},
  {path: 'tabla', component: TablaProblemaComponent},
  {path: 'verProblemaUser', component: VerProblemaUserComponent},
  {path: 'soluciones', component: SolucionesComponent},
  {path: 'filtro', component: FiltroComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'anotaciones',component: AnotacionesComponent},
  {path: 'sugerencias',component:SugerenciasComponent},
  {path: 'enviarSugerencia', component:EnviarSugerenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [VerProblemaComponent,
  SesionComponent,
  AdminComponent,
  UserComponent,
  RegistrarComponent,
  ProblemaComponent,
  ConfiguracionUsuarioComponent,
  NewProblemComponent,
  NewAdministradorComponent,
  EditAdministradorComponent,
  TablaProblemaComponent,
  VerProblemaUserComponent,
  SolucionesComponent,
  FiltroComponent,
  CalendarioComponent,
  AnotacionesComponent
]
