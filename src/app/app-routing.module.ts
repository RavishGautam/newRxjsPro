import { SwitchMap2Component } from './observables/switch-map2/switch-map2.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { DtimeDChangeComponent } from './observables/dtime-d-change/dtime-d-change.component';
import { RetryComponent } from './observables/retry/retry.component';
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
import { ConcatComponent } from './observables/concat/concat.component';
import { MergeComponent } from './observables/merge/merge.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { ExhaustMapComponent } from './observables/exhaust-map/exhaust-map.component';
import { Example1Component } from './observables/example1/example1.component';
import { ForkJoinComponent } from './observables/fork-join/fork-join.component';

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
    {path:'retry', component:RetryComponent},
    {path:'dTime-dChange', component:DtimeDChangeComponent},
    {path:'subject', component:SubjectComponent},
    {path:'replay-subject', component:ReplaySubjectComponent},
    {path:'concat', component:ConcatComponent},
    {path:'merge', component:MergeComponent},
    {path:'merge-map', component:MergeMapComponent},
    {path:'concat-map', component:ConcatMapComponent},
    {path:'switch-map', component:SwitchMapComponent},
    {path:'switch-map2', component:SwitchMap2Component},
    {path:'exhaust-map', component:ExhaustMapComponent},
    {path:'example1', component:Example1Component},
    {path:'fork-join', component:ForkJoinComponent},
    
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
