import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusltsComponent } from './reuslts.component';

describe('ReusltsComponent', () => {
  let component: ReusltsComponent;
  let fixture: ComponentFixture<ReusltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusltsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
