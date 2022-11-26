import {ReplaySubjectComponent} from './observables/replay-subject/replay-subject.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './Includes/headers/headers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { ListComponent } from './observables/list/list.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObsComponent } from './observables/custom-obs/custom-obs.component';
import { MapComponent } from './observables/map/map.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { FilterComponent } from './observables/filter/filter.component';
import { TapComponent } from './observables/tap/tap.component';
import { TakeComponent } from './observables/take/take.component';
import { RetryComponent } from './observables/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DtimeDChangeComponent } from './observables/dtime-d-change/dtime-d-change.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ConcatComponent } from './observables/concat/concat.component';
import { MergeComponent } from './observables/merge/merge.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    PromisesComponent,
    ObservablesComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObsComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DtimeDChangeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
