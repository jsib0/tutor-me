import {Routes, RouterModule} from '@angular/router';
import { TutorMeComponent } from './tutor-me/tutor-me.component';
import { AboutComponent } from './tutor-me/about/about.component';
import { BlogComponent } from './tutor-me/blog/blog.component';
import { ContactComponent } from './tutor-me/contact/contact.component';
import { EventsComponent } from './tutor-me/events/events.component';
import { HomeComponent } from './tutor-me/home/home.component';
import { ImpactComponent} from './tutor-me/impact/impact.component';


const APP_ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'blog', component: BlogComponent},
	{path: 'impact', component: ImpactComponent},
	{path: 'events', component: EventsComponent},	
	{path: 'contact', component: ContactComponent }

]

export const routing = RouterModule.forRoot(APP_ROUTES);