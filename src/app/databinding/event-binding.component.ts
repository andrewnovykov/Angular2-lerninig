import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
      <button (click)="onCliked()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent   {

  @Output( ) cliked = new EventEmitter();

  onCliked(){
    this.cliked.emit('its works');
  }

 

}
