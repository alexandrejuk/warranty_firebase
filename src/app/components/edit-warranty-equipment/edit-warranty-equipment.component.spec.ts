import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWarrantyEquipmentComponent } from './edit-warranty-equipment.component';

describe('EditWarrantyEquipmentComponent', () => {
  let component: EditWarrantyEquipmentComponent;
  let fixture: ComponentFixture<EditWarrantyEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWarrantyEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWarrantyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
