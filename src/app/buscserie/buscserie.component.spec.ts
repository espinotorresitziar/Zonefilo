import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscserieComponent } from './buscserie.component';

describe('BuscserieComponent', () => {
  let component: BuscserieComponent;
  let fixture: ComponentFixture<BuscserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
