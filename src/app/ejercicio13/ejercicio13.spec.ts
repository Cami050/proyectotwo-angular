import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio13 } from './ejercicio13';

describe('Ejercicio13', () => {
  let component: Ejercicio13;
  let fixture: ComponentFixture<Ejercicio13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio13);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
