import { Component, OnInit } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
	 bricks = [
     {header: 'How playing videos games can increase intelligence',
     title: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Quis reprehenderit ipsam repellat neque amet, expedita eligendi tenetur nam nulla fugit, ea praesentium dolorem provident obcaecati enim ullam aut iure quibusdam.',
     more: 'Read more...'},
     {header: 'Tetris vs. Snake ',
     title: ' Lorem ipsum dolor sit amet, reprehenderit ipsam repellat neque amet, Quis reprehenderit ipsam repellat neque amet, Quis reprehenderit ipsam repellat neque amet, expedita eligendi tenetur nam nulla fugit, ea praesentium dolorem provident obcaecati enim ullam aut iure quibusdam.',
     more: 'Read more...'},
     {header: 'How to Overcome Anxieties ',
     title: ' Lorem  Lorem Lorem Lorem ipsum dolor sit amet neque amet, Quis reprehenderit ipsam repellat neque amet, Quis reprehenderit ipsam repellat neque amet, expedita eligendi tenetur nam nulla fugit, ea praesentium dolorem provident obcaecati enim ullam aut iure quibusdam.',
     more: 'Read more...'},
     {header: 'Say "No" More',
     title: ' Lorem sit amet neque amet, Quis reprehenderit. Quis reprehenderit ipsam repellat neque amet, expedita eligendi tenetur nam nulla fugit, ea praesentium dolorem provident obcaecati enim ullam aut iure quibusdam.',
     more: 'Read more...'},
     {header: '5 Essential Steps to Knowing More',
     title: ' Lorem sit amet neque amet, Quis reprehenderit. Lorem sit amet neque amet, Quis reprehenderit. Lorem sit amet neque amet, Quis reprehenderit. Lorem sit amet neque amet, Quis reprehenderit.Quis reprehenderit ipsam repellat neque amet, expedita eligendi tenetur nam nulla fugit, ea praesentium dolorem provident obcaecati enim ullam aut iure quibusdam.',
     more: 'Read more...'},
     {header: 'The More You Know...',
     title: ' Lorem sit amet neque amet,  amet neque amet, Quis reprehenderit. Lorem sit amet neque amet, Quis reprehenderit.Quis reprehenderit ipsam repellat neque amet, expedita eligendi tenetur nam nulla fugit, ea praesentium dolorem provident obcaecati enim ullam aut iure quibusdam.',
     more: 'Read more...'},
     {header: 'What Better Way Than Pay',
     title: ' Lorem sit amet neque amet,  amet neque amet, laboriosam commodi ratione, iusto ea.Quis reprehenderit. Lorem sit amet neque amet, Quis reprehenderit.Quis reprehenderit ipsam repellat neque amet, expedita eligendi tenetur nam nulla fugit, ea praesentium dolorem provident obcaecati enim ullam aut iure quibusdam.',
     more: 'Read more...'},
   ]
 
  public myOptions: MasonryOptions = { 
  	 fitWidth: true,
  	 gutter: 10,
  	 columnWidth: 0,
	};

  constructor() { }

  ngOnInit() {
 
  }


 
}
