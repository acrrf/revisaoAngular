import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './template/home/home.component';
import { FooterComponent } from './template/footer/footer.component';
import { CachorroComponent } from './components/produtos/cachorro/cachorro.component';
import { GatoComponent } from './components/produtos/gato/gato.component';
import { GatoCachorroComponent } from './components/produtos/gato-cachorro/gato-cachorro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CachorroComponent,
    GatoComponent,
    GatoCachorroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
