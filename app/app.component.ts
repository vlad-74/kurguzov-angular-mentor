import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  bool = false;

   ngOnInit() {
    setTimeout(()=>{this.bool = true})
  }

}
