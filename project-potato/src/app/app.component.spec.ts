import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'project-potato'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('project-potato');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#title');
    expect(compiled.innerHTML).toContain('project-potato');
  });

  it('should show Button Overview', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const button = fixture.nativeElement.querySelector('#overview');

    expect(button.textContent).toContain('Übersicht');
  });

  it('should show Button Recipe', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const button = fixture.nativeElement.querySelector('#recipe');

    expect(button.textContent).toContain('Rezepte');
  });
});
