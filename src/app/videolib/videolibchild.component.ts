import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';

 
  @Component({
      selector: 'catchup-playlist',
      template: `<span> <img src="{{ poster }}" style="width:100px" />  {{title}} -- {{index}}</span>`
  })
  
  
  export class VideolibChildComponent implements OnChanges {
      @Input() poster: any;
      @Input() title: any;
      @Input() index: number;
 
      ngOnChanges() {
      }
  }