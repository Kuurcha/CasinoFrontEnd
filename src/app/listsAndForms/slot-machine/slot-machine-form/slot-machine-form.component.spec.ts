import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotMachineFormComponent } from './slot-machine-form.component';

describe('SlotMachineFormComponent', () => {
  let component: SlotMachineFormComponent;
  let fixture: ComponentFixture<SlotMachineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotMachineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotMachineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
