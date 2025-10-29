import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio10 } from './ejercicio10';

describe('Ejercicio10', () => {
  let component: Ejercicio10;
  let fixture: ComponentFixture<Ejercicio10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
