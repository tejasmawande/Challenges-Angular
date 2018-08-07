import { Component } from '@angular/core';


@Component({
 selector: 'app-user',
 template: `
 <input type="text" (input)="onUserInput($event)" [value]=" name">
 <p>Hello {{ name }}</p>
 <p> I m the user Component</p>
 `
})
export class UserComponent {
  name = 'Tejas';

  onUserInput(event){
    this.name = event.target.value;

  }
}
