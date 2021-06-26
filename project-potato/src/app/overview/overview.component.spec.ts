import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get recipes from recipe.service', () => {
    fixture.whenStable().then(() => {
      const test = component.service.recipes.length;
      fixture.detectChanges();
      expect(test).toBeGreaterThan(0);
    });
  });

  it(
    'should display Data in Table',
    waitForAsync(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('td').textContent).toContain('Salzwasser');
    })
  );
});
