import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AlimComponent } from '../app/alim/alim.component';
import { HomeComponent } from '../app/home/home.component';
import { ServiceComponent } from '../app/service/service.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AsigurariComponent } from './asigurari/asigurari.component';
import { VenitComponent } from './venit/venit.component';
import { SalariuComponent } from './salariu/salariu.component';
// -----------------------------------------------------------




const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'alim' , component : AlimComponent },
  {path: 'home' , component : HomeComponent },
  {path: 'service' , component : ServiceComponent},
  {path: 'asigurari', component: AsigurariComponent},
  {path: 'venit', component: VenitComponent},
  {path: 'salar', component: SalariuComponent}


  // -----------------------------------------------------


  


  // {path: '', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules}    ), NgxDatatableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }