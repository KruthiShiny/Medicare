import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductHandelerComponent } from './admin-product-handeler.component';

describe('AdminProductHandelerComponent', () => {
  let component: AdminProductHandelerComponent;
  let fixture: ComponentFixture<AdminProductHandelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductHandelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductHandelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
