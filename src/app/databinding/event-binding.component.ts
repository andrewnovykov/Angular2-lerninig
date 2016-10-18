import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
      <button (click)="onCliked()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  onCliked(){
    alert('It work');
  }

  constructor() { }

  ngOnInit() {
  }

}
