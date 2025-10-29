import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio15 } from './ejercicio15';

describe('Ejercicio15', () => {
  let component: Ejercicio15;
  let fixture: ComponentFixture<Ejercicio15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio15);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
