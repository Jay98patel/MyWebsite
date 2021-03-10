import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMEComponent } from './hire-me.component';

describe('HireMEComponent', () => {
  let component: HireMEComponent;
  let fixture: ComponentFixture<HireMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
