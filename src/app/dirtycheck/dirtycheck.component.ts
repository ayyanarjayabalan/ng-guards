import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '../component-can-deactivate';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dirtycheck',
  templateUrl: './dirtycheck.component.html',
  styleUrls: ['./dirtycheck.component.css']
})
export class DirtycheckComponent implements OnInit, ComponentCanDeactivate {
  public isDirty = false;

  canDeactivate(): boolean {
    console.log('Can Deactivate component triggered');
    return !this.isDirty;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
