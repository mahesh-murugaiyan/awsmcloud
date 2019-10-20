import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray,copyArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prime';

  tquestions=['Question 1','Question 2','Question 3','Question 4','Question 5'
  ];

  squestions=['Placeholder Question'];

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.tquestions, event.previousIndex, event.currentIndex);
    // console.log(event.previousIndex+" "+event.currentIndex+" "+this.tquestions);
  }

  reorderSelected(event:CdkDragDrop<string[]>){

    if(event.container===event.previousContainer){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }else{

        copyArrayItem(
          event.previousContainer.data,
          event.container.data,event.previousIndex,this.squestions.length);
        }
      }
    }

