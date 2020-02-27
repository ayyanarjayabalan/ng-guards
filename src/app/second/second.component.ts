import { Component, OnInit } from '@angular/core';
import { Observable, pipe, Observer } from 'rxjs';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
@UntilDestroy()
export class SecondComponent implements OnInit {

  constructor() { }

  observer = (obsrvr: Observer<number>) => {
    let i = 0;
    setInterval(() => {
      obsrvr.next(i++);
    }, 1000);
  }


  ngOnInit(): void {
    const getRecords = new Observable<number>(this.observer);
    getRecords.pipe(
      untilDestroyed(this)
    ).subscribe((data) => {
      console.log(`Data from pubs : ${data}`);
    });
  }

}
