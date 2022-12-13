import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempiVariComponent } from './esempi-vari.component';

describe('EsempiVariComponent', () => {
  let component: EsempiVariComponent;
  let fixture: ComponentFixture<EsempiVariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsempiVariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsempiVariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
