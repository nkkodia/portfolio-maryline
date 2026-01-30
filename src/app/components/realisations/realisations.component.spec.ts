import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationsComponent } from './realisations.component';

describe('Realisations', () => {
  let component: RealisationsComponent;
  let fixture: ComponentFixture<RealisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
