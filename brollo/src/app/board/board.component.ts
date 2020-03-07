import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';
import { stringify } from 'querystring';
import { Board } from '../models/board';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  stories: Story[];
  boards: Board[];
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
    this.boards = [
      {
        id: 1,
        title: "A",
        stories: [
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
      },
      {
        id: 2,
        title: "B",
        stories: [
          {
            'id': 4,
            'title': 'Story 1'
          },
          {
            'id': 5,
            'title': 'Story 2'
          },
          {
            'id': 6,
            'title': 'Story 3'
          }
        ]
      }
    ]
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
