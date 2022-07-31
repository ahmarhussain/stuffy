import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedContractorsPageComponent } from './unapproved-contractors-page.component';

describe('UnapprovedContractorsPageComponent', () => {
  let component: UnapprovedContractorsPageComponent;
  let fixture: ComponentFixture<UnapprovedContractorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedContractorsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnapprovedContractorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
