import { Component, OnInit } from '@angular/core';
import { DeactivateDirective } from 'src/app/directive/deactivate.directive';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  hostDirectives: [DeactivateDirective],
})
export class ComponentOneComponent implements OnInit {
  public ngOnInit(): void {
    console.log('On init component one');
  }
}
