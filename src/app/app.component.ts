import { Component, ViewChild } from '@angular/core';
import {CdkDragDrop, CdkDragStart, moveItemInArray,copyArrayItem} from '@angular/cdk/drag-drop';
import {MatListOption, MatSelectionList} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSandbox';

  liststyle="";

  //list of questions on the template
  tquestions=['Question 1','Question 2','Question 3','Question 4','Question 5'
  ];
  
  //this list holds the seleted questions
  squestions=['Placeholder Question'];
  fquestions=[];
  selectedQuestions=[]
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
  
  onQClick(selectionList:MatListOption[]){

    this.selectedQuestions=[];
  for(let itm of selectionList){
      let t:MatListOption  = itm;
      this.tquestions.forEach((q)=>{
        if(q===itm.value){
          this.selectedQuestions.push(itm.value);
        }
      })
      
    }
    console.log("Selected Questions ->",this.selectedQuestions);
  }


  reorderList(event:CdkDragDrop<string[]>){
    // console.log("event.container -> ",event.container);
    console.log("Items to copy-> ",this.selectedQuestions)
    console.log("previousIndex", event.previousIndex);
    console.log("currentIndex", event.currentIndex);

    this.selectedQuestions.forEach((itm)=>{
      console.log("previousIndex", event.previousIndex);

        moveItemInArray(itm,event.previousIndex,event.currentIndex);

    })
  }





  @ViewChild('lquestions',{static:false}) 
  qList: MatSelectionList;
  listDrag(event:CdkDragStart<String[]>){
    // console.log("Drag event for the list",this.qList);
    //implement coloring 
  }
    
} 


