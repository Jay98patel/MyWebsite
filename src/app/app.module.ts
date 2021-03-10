import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { WorksSectionComponent } from './works-section/works-section.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HireMEComponent } from './hire-me/hire-me.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ContactMeService } from './services/contact-me.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    AboutMeComponent,
    TechnicalSkillsComponent,
    WorksSectionComponent,
    HireMEComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule ,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    CarouselModule
  ],
  providers: [ContactMeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
