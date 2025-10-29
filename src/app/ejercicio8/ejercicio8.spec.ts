import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio8 } from './ejercicio8';

describe('Ejercicio8', () => {
  let component: Ejercicio8;
  let fixture: ComponentFixture<Ejercicio8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
