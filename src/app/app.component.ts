import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray,copyArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSandbox';

  //list of questions on the template
  tquestions=['Question 1','Question 2','Question 3','Question 4','Question 5'
  ];

  //this list holds the seleted questions
  squestions=['Placeholder Question'];
  fquestions=[];

  /*
    This method handles re-order within selected list and 
    re-order when a question is dropped from template.
  */
  reorderSelected(event:CdkDragDrop<string[]>){
    console.log("event.container -> ",event.container);
    if(event.container===event.previousContainer){
      console.log('event.container.data -> ',event.container.data)
      console.log('event.previous, current -> ',event.previousIndex,event.currentIndex)

      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }else{
        console.log("else being fired")
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,event.previousIndex,this.squestions.length);
        }
      }
    }

