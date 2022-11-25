import { TakeComponent } from './observables/take/take.component';
import { TapComponent } from './observables/tap/tap.component';
import { FilterComponent } from './observables/filter/filter.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { MapComponent } from './observables/map/map.component';
import { CustomObsComponent } from './observables/custom-obs/custom-obs.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { ListComponent } from './observables/list/list.component';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { PromisesComponent } from './promises/promises.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';

const routes: Routes = [
  {path:'promises', component:PromisesComponent},
  {path:'observable', component:ObservablesComponent,children:[
    {path:'', component:ListComponent},
    {path:'from-event', component:FromEventComponent},
    {path:'interval', component:IntervalComponent},
    {path:'of-from', component:OfFromComponent},
    {path:'toArray', component:ToArrayComponent},
    {path:'customObs', component:CustomObsComponent},
    {path:'map', component:MapComponent},
    {path:'pluck', component:PluckComponent},
    {path:'filter', component:FilterComponent},
    {path:'tap', component:TapComponent},
    {path:'take', component:TakeComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
