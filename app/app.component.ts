import {Component, OnInit, OnDestroy} from '@angular/core';

import { fromEvent, interval, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  bool = false;
  show = true;
  private readonly destroyed$ = new Subject();

  ngOnInit() {
    fromEvent(document, 'click')
      .pipe(
        takeUntil(this.destroyed$),
        switchMap((ev) => interval(1000))
      )
      .subscribe(x => {
        this.bool = true
        this.show = x < 60;
        console.log(x)
      });
    document.body.click()
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
