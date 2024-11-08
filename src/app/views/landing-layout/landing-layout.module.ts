import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingLayoutRoutingModule } from './landing-layout-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CssComponent } from './css/css.component';
import { PgProgramesComponent } from './pg-programes/pg-programes.component';
import { DicGalleryComponent } from './dic-gallery/dic-gallery.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { LayoutComponent } from './layout.component';
import { PgApplicationComponent } from './pg-application/pg-application.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CssComponent,
    PgProgramesComponent,
    DicGalleryComponent,
    NewsPageComponent,
    LayoutComponent,
    PgApplicationComponent
  ],
  imports: [
    CommonModule,
    LandingLayoutRoutingModule,
    SharedModule,
  ]
})
export class LandingLayoutModule { }
