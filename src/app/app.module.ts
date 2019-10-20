import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {DragDropModule} from '@angular/cdk/drag-drop';

import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material';
import {MatListModule} from '@angular/material/';
import {MatExpansionModule} from '@angular/material/expansion'


@NgModule({
  imports:      [ BrowserModule, FormsModule, 
      DragDropModule,
        MatCardModule,MatRadioModule,MatDividerModule,MatListModule,MatRadioModule
    ,MatExpansionModule
  
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
