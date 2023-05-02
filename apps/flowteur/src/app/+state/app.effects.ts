import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { fetch } from '@nx/angular';

import { AppPartialState } from './app.reducer';
import {
  LoadApp,
  AppLoaded,
  AppLoadError,
  AppActionTypes,
} from './app.actions';

@Injectable()
export class AppEffects {
   loadApp$ = createEffect(() => fetch({ 
    run: (action: LoadApp, state: AppPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new AppLoaded([]);
    },

    onError: (action: LoadApp, error) => {
      console.error('Error', error);
      return new AppLoadError(error);
    },
  }));

  constructor(
    private actions$: Actions,
  ) {}
}
