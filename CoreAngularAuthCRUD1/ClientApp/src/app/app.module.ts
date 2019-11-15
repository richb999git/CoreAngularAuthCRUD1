import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { DisplayTypesComponent } from './types/display-types/display-types.component';
import { DisplayTypeComponent } from './types/display-type/display-type.component';
import { DeleteTypeComponent } from './types/delete-type/delete-type.component';
import { AddTypeComponent } from './types/add-type/add-type.component';
import { UpdateTypeComponent } from './types/update-type/update-type.component';
import { AdvertTypesService } from './types/_services/advert-types.service';
import { BoatsComponent } from './boats/boats.component';

// Types, Types - declarations, routes
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DisplayTypesComponent,
    DisplayTypeComponent,
    DeleteTypeComponent,
    AddTypeComponent,
    UpdateTypeComponent,
    BoatsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
        { path: 'display-types', component: DisplayTypesComponent },
        { path: 'display-type/:id', component: DisplayTypeComponent },
        { path: 'delete-type/:id', component: DeleteTypeComponent },
        { path: 'add-type', component: AddTypeComponent },
        { path: 'update-type/:id', component: UpdateTypeComponent },
    ])
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
      AdvertTypesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
