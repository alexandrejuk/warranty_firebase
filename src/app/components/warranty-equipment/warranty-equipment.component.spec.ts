import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyEquipmentComponent } from './warranty-equipment.component';

describe('WarrantyEquipmentComponent', () => {
  let component: WarrantyEquipmentComponent;
  let fixture: ComponentFixture<WarrantyEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
