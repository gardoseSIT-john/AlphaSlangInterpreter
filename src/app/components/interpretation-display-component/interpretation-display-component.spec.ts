import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpretationDisplayComponent } from './interpretation-display-component';

describe('InterpretationDisplayComponent', () => {
  let component: InterpretationDisplayComponent;
  let fixture: ComponentFixture<InterpretationDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpretationDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InterpretationDisplayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
