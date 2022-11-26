import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtimeDChangeComponent } from './dtime-d-change.component';

describe('DtimeDChangeComponent', () => {
  let component: DtimeDChangeComponent;
  let fixture: ComponentFixture<DtimeDChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtimeDChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtimeDChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
