import { Component, OnInit } from '@angular/core';
import { TutorMeService } from './tutor-me.service';
declare var jquery: any;
declare var $:any;

import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-me',
  templateUrl: './tutor-me.component.html',
  styleUrls: ['./tutor-me.component.css']
})

export class TutorMeComponent implements OnInit {


 

  constructor( private _tutormeService: TutorMeService, private _router: Router ) { }

  ngOnInit() {
  }

   // menu hide and show
  ngAfterViewInit(): void {
     $('.cross').hide();
     $( ".menu" ).hide();
     $( ".hamburger" ).click(function() {
       $("body").css("background-color", "rgba(255, 255, 255, .2)");
       $( ".menu" ).slideToggle( "slow", function() {
         $( ".hamburger" ).hide();
         $( ".cross" ).show();
     });
   });

     $( ".cross" ).click(function() {
       $("body").css("background-color", "rgba(0, 0, 0, 0.0)");
       $( ".menu" ).slideToggle( "slow", function() {
         $( ".cross" ).hide();
         $( ".hamburger" ).show();
     });
   });

     $(".a").click( function() {
       $("body").css("background-color", "rgba(0, 0, 0, 0.0)");
       $( ".menu" ).slideToggle( "slow", function() {
         $( ".cross" ).hide();
         $( ".hamburger" ).show();
        });
     });

   }


  

}
