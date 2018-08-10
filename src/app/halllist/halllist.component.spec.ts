import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalllistComponent } from './halllist.component';

describe('HalllistComponent', () => {
  let component: HalllistComponent;
  let fixture: ComponentFixture<HalllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
