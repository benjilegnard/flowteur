import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { configureTestSuite } from 'ng-bullet';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/components/header/header.component';

describe('AppComponent', () => {
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockComponent(HeaderComponent)]
    });
  });
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('flowteur');
  }));
  it('should render welcomme message in a h2 tag', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(
      'Welcome to flowteur!'
    );
  }));
});
