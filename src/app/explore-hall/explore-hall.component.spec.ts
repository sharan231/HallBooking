import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreHallComponent } from './explore-hall.component';

describe('ExploreHallComponent', () => {
  let component: ExploreHallComponent;
  let fixture: ComponentFixture<ExploreHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
