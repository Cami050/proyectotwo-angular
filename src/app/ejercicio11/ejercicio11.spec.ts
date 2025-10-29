import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio11 } from './ejercicio11';

describe('Ejercicio11', () => {
  let component: Ejercicio11;
  let fixture: ComponentFixture<Ejercicio11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
