import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscsAbout } from './discs-about';

describe('DiscsAbout', () => {
  let component: DiscsAbout;
  let fixture: ComponentFixture<DiscsAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscsAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscsAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
