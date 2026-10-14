import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testwink } from './testwink';

describe('Testwink', () => {
  let component: Testwink;
  let fixture: ComponentFixture<Testwink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testwink],
    }).compileComponents();

    fixture = TestBed.createComponent(Testwink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
