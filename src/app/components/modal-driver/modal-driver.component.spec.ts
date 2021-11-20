import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDriverComponent } from './modal-driver.component';

describe('ModalDriverComponent', () => {
  let component: ModalDriverComponent;
  let fixture: ComponentFixture<ModalDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
