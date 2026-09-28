import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictionaryDisplayComponent } from './dictionary-display-component';

describe('DictionaryDisplayComponent', () => {
  let component: DictionaryDisplayComponent;
  let fixture: ComponentFixture<DictionaryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictionaryDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryDisplayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
