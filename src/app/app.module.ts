import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import { MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutMeComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [
      {path: 'work', component: WorkComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: '**', component: HomeComponent}
    ])
    ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
