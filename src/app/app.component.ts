import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front End Developer Assessment';
  description = 'Shelton Wilson\'s Assessment for the Front End Developer position.';
  instructions = `To begin, please generate a 5x5 grid of letters by clicking the 
  GENERATE button. Then upload your text file and click VALIDATE to check if the 
  words in the text file appear in the grid.`;

  gridData:string;

  receiveData($event) {
    this.gridData = $event
  }
}
