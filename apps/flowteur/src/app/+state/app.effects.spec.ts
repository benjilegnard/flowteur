import { TestBed, waitForAsync } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nx/angular';

import { hot } from 'jasmine-marbles';

import { AppEffects } from './app.effects';
import { LoadApp, AppLoaded } from './app.actions';

describe('AppEffects', () => {
  let actions: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        AppEffects,
        DataPersistence,
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
