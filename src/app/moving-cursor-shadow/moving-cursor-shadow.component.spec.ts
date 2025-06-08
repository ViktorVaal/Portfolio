import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingCursorShadowComponent } from './moving-cursor-shadow.component';

describe('MovingCursorShadowComponent', () => {
  let component: MovingCursorShadowComponent;
  let fixture: ComponentFixture<MovingCursorShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingCursorShadowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovingCursorShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
