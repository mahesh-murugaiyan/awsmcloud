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
  squestions=['Placeholder'];
  fquestions=[];
  selQIdx:number[]=[];
  selLItems:MatListOption[];
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
  
  //get the index of selected questions from the main question array
  onQClick(selLItems:MatListOption[]){
    //clear the previous selections and add all selected items from the list
    this.selQIdx=[];
    this.selLItems=[];
    this.selLItems=selLItems;

    selLItems.forEach(itm=>{
        this.tquestions.forEach((q)=>{
          if(q===itm.value){
            this.selQIdx.push(this.tquestions.indexOf(itm.value));
          }
        })
      });
      console.log("Selcted: ",this.selQIdx);
  }


  reorderList(event:CdkDragDrop<string[]>){
    // console.log("event.container -> ",event.container);
    console.log("Items to copy [idx] -> ", this.selQIdx);
    console.log("Initial position ",event.previousIndex," drop position", event.currentIndex);
    let tmp = this.tquestions;
    let popped:Array<string>;
    this.selQIdx.map((idx)=>{
          popped.concat(this.tquestions.splice(idx,1));
      }
      );
    console.log("Popped ->  ",popped);

    // this.selQIdx.forEach((idx:number)=>{
    //     console.log("Moving item -> ", this.tquestions[idx]," current index-> ", event.currentIndex);

    //     moveItemInArray(
    //       this.tquestions,
    //       this.tquestions.indexOf(this.tquestions[idx]),//previousIndex
    //       event.currentIndex  //current drop position
    //       );

    // });
    this.selQIdx=[];
    this.selLItems.forEach( (opt:MatListOption)=>{
        opt.selected=false;
      }
    );

  }

  copyToTargetList(event:CdkDragDrop<string[]>){
    console.log("")
    if(event.container===event.previousContainer){
      console.log('event.container.data -> ',event.container.data)
      console.log('event.previous, current -> ',event.previousIndex,event.currentIndex)

      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }else{
     copyArrayItem(
          event.previousContainer.data,
          event.container.data,event.previousIndex,this.squestions.length);
    }
  }



  @ViewChild('lquestions',{static:false}) 
  qList: MatSelectionList;
  
  listDrag(event:CdkDragStart<String[]>){
    // console.log("Drag event for the list",this.qList);
    //implement coloring 
  }
    
} 


