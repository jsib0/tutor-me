import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { TutorMeComponent } from './tutor-me/tutor-me.component';
import { ImpactComponent } from './tutor-me/impact/impact.component';
import { BlogComponent } from './tutor-me/blog/blog.component';
import { EventsComponent } from './tutor-me/events/events.component';
import { ContactComponent } from './tutor-me/contact/contact.component';
import { HomeComponent } from './tutor-me/home/home.component';
import { AboutComponent } from './tutor-me/about/about.component';
import { TutorMeService } from './tutor-me/tutor-me.service';
import { routing } from './app.routes';
import { MasonryModule } from 'angular2-masonry';


@NgModule({
  declarations: [
    AppComponent,
    TutorMeComponent,
    ImpactComponent,
    BlogComponent,
    EventsComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    routing,
    HttpModule,
    MasonryModule
  ],
  providers: [TutorMeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
