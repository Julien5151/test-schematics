import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
})
export class ComponentTwoComponent implements OnInit {
  public ngOnInit(): void {
    console.log('On init component two');
  }
}
