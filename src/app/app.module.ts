
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// composant

import { MainComponent } from 'app/components/main/main';
import { MainHeaderCompenent } from 'app/components/header/header';
import { MainFooterCompenent } from 'app/components/footer/footer';
import { MainMenuComponent } from 'app/components/menu/menu';
import { HomeComponent } from './components/home/home.component';

//Pipes
import { OneInTwo } from 'app/pipes/oneintwo';
import { UpcharPipe } from './pipes/upchar.pipe';

@NgModule({
  declarations: [
    MainComponent,
    MainHeaderCompenent,
    MainFooterCompenent,
    MainMenuComponent,
    HomeComponent,
    OneInTwo,
    UpcharPipe
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
