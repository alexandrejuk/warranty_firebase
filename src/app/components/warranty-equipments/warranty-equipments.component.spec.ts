import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyEquipmentsComponent } from './warranty-equipments.component';

describe('WarrantyEquipmentsComponent', () => {
  let component: WarrantyEquipmentsComponent;
  let fixture: ComponentFixture<WarrantyEquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyEquipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
