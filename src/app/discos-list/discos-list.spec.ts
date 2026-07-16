import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscosList } from './discos-list';

describe('DiscosList', () => {
  let component: DiscosList;
  let fixture: ComponentFixture<DiscosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscosList],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
