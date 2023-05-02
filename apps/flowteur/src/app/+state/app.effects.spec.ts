import { TestBed, waitForAsync } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { hot } from 'jasmine-marbles';

import { AppEffects } from './app.effects';
import { LoadApp, AppLoaded } from './app.actions';

describe('AppEffects', () => {
  let actions: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        AppEffects,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.get(AppEffects);
  });

  describe('loadApp$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadApp() });
      expect(effects.loadApp$).toBeObservable(
        hot('-a-|', { a: new AppLoaded([]) }),
      );
    });
  });
});
