import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputString: string = "For input";
  inputAnotherString: string = "Another string";
  @Output() clicked = new EventEmitter<string>();
  onClicked(){
    alert("It works");
  }
  onTest() {
    return false ;
  }
}
