import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
})
export class ComponentOneComponent implements OnInit {
  public ngOnInit(): void {
    console.log('On init component one');
  }
}
