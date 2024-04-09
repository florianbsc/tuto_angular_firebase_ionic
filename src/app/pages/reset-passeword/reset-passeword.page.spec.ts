import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPassewordPage } from './reset-passeword.page';

describe('ResetPassewordPage', () => {
  let component: ResetPassewordPage;
  let fixture: ComponentFixture<ResetPassewordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassewordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
