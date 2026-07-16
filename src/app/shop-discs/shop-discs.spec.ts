import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDiscs } from './shop-discs';

describe('ShopDiscs', () => {
  let component: ShopDiscs;
  let fixture: ComponentFixture<ShopDiscs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopDiscs],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopDiscs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
