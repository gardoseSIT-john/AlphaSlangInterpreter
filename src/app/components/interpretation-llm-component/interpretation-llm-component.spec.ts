import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpretationLLMComponent } from './interpretation-llm-component';

describe('InterpretationLLMComponent', () => {
  let component: InterpretationLLMComponent;
  let fixture: ComponentFixture<InterpretationLLMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpretationLLMComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InterpretationLLMComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
