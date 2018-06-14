import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillPageComponent } from './pages/skill-page/skill-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    SkillPageComponent,
    ContactPageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
