import { Component, OnInit } from '@angular/core';
import { TutorMeService } from './../tutor-me.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor( private _tutormeService: TutorMeService, private _router: Router) { }

  ngOnInit() {
  }

   
   createNewEvent(formData){
     this._tutormeService.createNewEvent(formData.value).then((response) => {
       this._router.navigate(['/home']).catch((err) => console.log(err))
       formData.reset()
     })
   }

}
