import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import {MaterialCustomModule} from './material-custom/material-custom.module';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutMeComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialCustomModule,
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
