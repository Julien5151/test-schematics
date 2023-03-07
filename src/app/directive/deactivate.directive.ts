import {
  Directive,
  inject,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { DeactivatorService } from '../services/deactivator.service';

@Directive({
  selector: '[appDeactivate]',
  standalone: true,
})
export class DeactivateDirective implements OnInit {
  @Input()
  componentName: string = '';
  private deactivatorService = inject(DeactivatorService);
  private vcr = inject(ViewContainerRef);

  public ngOnInit(): void {
    console.log('On init deactivate directive');
    console.log(this.vcr);
    //this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
    // this.ngIfDirective.ngIf = !this.deactivatorService.isComponentDeactivated(
    //   this.elementRef.nativeElement.tagName.toLowerCase()
    // );
  }
}
