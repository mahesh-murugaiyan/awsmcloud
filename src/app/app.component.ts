import { Component,ViewChild } from '@angular/core';
import {CdkDragDrop,CdkDragStart, moveItemInArray,copyArrayItem} from '@angular/cdk/drag-drop';
import {MatListOption,MatSelectionList} from '@angular/Material';

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
  
  onQClick(v:MatListOption[]){
    // console.log("v->",v);
    
    this.selectedQuestions=[];
    for(let itm of v){
      let t:MatListOption  = itm;
      
      // console.log("t in loop : ",t);
      this.selectedQuestions.push(itm.value);
    }
    console.log("Selected Questions ->",this.selectedQuestions);
  }

  @ViewChild('lquestions',{static:false})  qList: MatSelectionList;

  listDrag(event:CdkDragStart<String[]>){
    console.log("Drag event for the list",event);
    console.log(this.qList);
    //listdragstyle
    
  }
    
} 


