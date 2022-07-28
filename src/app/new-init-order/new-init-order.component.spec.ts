import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInitOrderComponent } from './new-init-order.component';

describe('NewInitOrderComponent', () => {
  let component: NewInitOrderComponent;
  let fixture: ComponentFixture<NewInitOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInitOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInitOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
