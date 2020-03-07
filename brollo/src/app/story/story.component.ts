import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  stories: object[];


  constructor() { }

  ngOnInit() {
    this.stories = [
      {
        'id': 1,
        'title': 'Story 1'
      },
      {
        'id': 2,
        'title': 'Story 2'
      },
      {
        'id': 3,
        'title': 'Story 3'
      }
    ]
  }

}
