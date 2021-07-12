import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoBuildingFormComponent } from './casino-building-form.component';

describe('CasinoBuildingFormComponent', () => {
  let component: CasinoBuildingFormComponent;
  let fixture: ComponentFixture<CasinoBuildingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoBuildingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoBuildingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
