import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWarrantyEquipmentComponent } from './add-warranty-equipment.component';

describe('AddWarrantyEquipmentComponent', () => {
  let component: AddWarrantyEquipmentComponent;
  let fixture: ComponentFixture<AddWarrantyEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWarrantyEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWarrantyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
