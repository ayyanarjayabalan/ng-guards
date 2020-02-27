import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
@UntilDestroy()
export class SecondComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.getRecords().pipe(
      untilDestroyed(this)
    ).subscribe((data) => {
      console.log(`Data from pubs : ${data}`);
    });
  }

  getRecords(): Observable<number> {
    let i = 0;

    const obsvable = new Observable<number>(
      (obsrvr) => {
        setInterval(() => {
          obsrvr.next(i++);
        }, 1000);
      }
    );

    return obsvable;
  }

}
