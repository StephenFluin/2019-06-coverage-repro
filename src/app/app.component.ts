import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coverage';
  unused() {
    console.log('this is not run');
    console.log('this is not run');
    console.log('this is not run');
    console.log('this is not run');
    console.log('this is not run');
  }
}
