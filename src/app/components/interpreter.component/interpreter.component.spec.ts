import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpreterComponent } from './interpreter.component';

describe('InterpreterComponent', () => {
  let component: InterpreterComponent;
  let fixture: ComponentFixture<InterpreterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpreterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InterpreterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
