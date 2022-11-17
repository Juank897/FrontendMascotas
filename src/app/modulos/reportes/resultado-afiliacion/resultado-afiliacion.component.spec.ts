import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoAfiliacionComponent } from './resultado-afiliacion.component';

describe('ResultadoAfiliacionComponent', () => {
  let component: ResultadoAfiliacionComponent;
  let fixture: ComponentFixture<ResultadoAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoAfiliacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
