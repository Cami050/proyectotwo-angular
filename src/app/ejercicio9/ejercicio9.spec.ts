import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio9 } from './ejercicio9';

describe('Ejercicio9', () => {
  let component: Ejercicio9;
  let fixture: ComponentFixture<Ejercicio9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
