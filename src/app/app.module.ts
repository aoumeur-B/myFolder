
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

// composant

import { MainComponent } from 'app/components/main/main';
import { MainHeaderCompenent } from 'app/components/header/header';
import { MainFooterCompenent } from 'app/components/footer/footer';
import { MainMenuComponent } from 'app/components/menu/menu';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
//Pipes
import { OneInTwo } from 'app/pipes/oneintwo';
import { UpcharPipe } from './pipes/upchar.pipe';

//Services
import {FilmsService } from './services/films.service';

//Directive
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    MainComponent,
    MainHeaderCompenent,
    MainFooterCompenent,
    MainMenuComponent,
    HomeComponent,
    OneInTwo,
    UpcharPipe,
    SearchComponent,
    ColorDirective,
   
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, HttpModule
  ],
  providers: [FilmsService],
  bootstrap: [MainComponent]
})
export class AppModule { }
