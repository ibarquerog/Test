import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {ClientService} from './sesion/client.service'
import {ProblemaService} from './problema/problema.service'
import {ObraService} from './obras/obras.service'
import {NewProblemService} from './problema/new-problem/new-problem.service'
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(es);
//LATEX

import { KatexModule } from 'ng-katex';
import {ReactiveFormsModule} from '@angular/forms'

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgDatepickerModule } from 'ng2-datepicker';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SesionComponent } from './sesion/sesion.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ConfiguracionUsuarioComponent } from './configuracion-usuario/configuracion-usuario.component';
//import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { HomeComponent } from './home/home.component';
import { NavbarInicioComponent } from './navbar-inicio/navbar-inicio.component';
import { ObrasComponent } from './obras/obras.component';
import {ConfiguracionUsuarioService}from './configuracion-usuario/configuracion-usuario.service';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { ObrasNewComponent } from './obras/obras-new/obras-new.component';
import { ProblemaComponent } from './problema/problema.component';
import { TablaProblemaComponent } from './problema/tabla-problema/tabla-problema.component';
import { VerProblemaComponent } from './problema/ver-problema/ver-problema.component';
import { NewProblemComponent } from './problema/new-problem/new-problem.component';
import { TipoProblemaComponent } from './tipo-problema/tipo-problema.component';
import { TipoColeccionService } from './obras/obras-new/tipo-coleccion.service';
import { ObrasEditComponent } from './obras/obras-edit/obras-edit.component';
import { NewAdministradorComponent } from './configuracion-usuario/new-administrador/new-administrador.component';
import { EditAdministradorComponent } from './configuracion-usuario/edit-administrador/edit-administrador.component';
import { EditarProblemaComponent } from './problema/editar-problema/editar-problema.component';
import { RouterModule } from '@angular/router';
import { VerProblemaUserComponent } from './user/ver-problema-user/ver-problema-user.component';
import { SolucionesComponent } from './user/soluciones/soluciones.component';
import { FiltroComponent } from './user/filtro/filtro.component';
import { CalendarioComponent } from './user/calendario/calendario.component';
import { AnotacionesComponent } from './anotaciones/anotaciones.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

//DataTables
import { DataTablesModule } from 'angular-datatables';
import { EnviarSugerenciaComponent } from './user/enviar-sugerencia/enviar-sugerencia.component';
import { Anotaciones } from './anotaciones/anotaciones';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegistrarComponent,
    SesionComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    NavbarInicioComponent,
    ObrasComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    ObrasNewComponent,
    ProblemaComponent,
    TablaProblemaComponent,
    VerProblemaComponent,
    NewProblemComponent,
    TipoProblemaComponent,
    ObrasEditComponent,
    NewAdministradorComponent,
    EditAdministradorComponent,
    EditarProblemaComponent,
    VerProblemaUserComponent,
    SolucionesComponent,
    FiltroComponent,
    CalendarioComponent,
    AnotacionesComponent,
    SugerenciasComponent,
    EnviarSugerenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    KatexModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgDatepickerModule,
    FilterPipeModule,
    RouterModule.forRoot([
      {
        path: 'config', component: ConfiguracionUsuarioComponent
      },
      {
        path: 'obras', component: ObrasComponent 
      },
      {
        path: 'newAdministrador', component: NewAdministradorComponent 
      },
      {
        path: 'tabla', component: TablaProblemaComponent
      }
    ]),
    DataTablesModule
  ],
  providers: [
    ClientService,
    ConfiguracionUsuarioService,
    ObraService,
    ProblemaService,
    NewProblemService,
    TipoColeccionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
