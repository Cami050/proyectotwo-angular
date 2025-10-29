import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio12 } from './ejercicio12';

describe('Ejercicio12', () => {
  let component: Ejercicio12;
  let fixture: ComponentFixture<Ejercicio12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
