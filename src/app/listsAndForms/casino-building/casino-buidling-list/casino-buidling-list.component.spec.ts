import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoBuidlingListComponent } from './casino-buidling-list.component';

describe('CasinoBuidlingListComponent', () => {
  let component: CasinoBuidlingListComponent;
  let fixture: ComponentFixture<CasinoBuidlingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoBuidlingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoBuidlingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
