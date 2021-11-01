import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';

import { ShellModule } from './shell/shell.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, DefaultRouterStateSerializer } from '@ngrx/router-store';
import * as fromApp from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { AppFacade } from './+state/app.facade';
import { NxModule } from '@nrwl/angular';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'videos',
  //   component: VideoListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/videos',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes, { enableTracing: true, initialNavigation: 'enabled', relativeLinkResolution: 'legacy' } // <-- debugging purposes only
 // <-- debugging purposes only
),
    // other imports here
    ClarityModule,
    BrowserAnimationsModule,
    ShellModule,
    NxModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature(fromApp.APP_FEATURE_KEY, fromApp.reducer)
  ],
  providers: [AppFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
