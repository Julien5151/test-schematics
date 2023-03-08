import {
  Directive,
  inject,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DeactivatorService } from '../services/deactivator.service';

@Directive({
  selector: '[appDeactivate]',
  standalone: true,
})
export class DeactivateDirective implements OnInit {
  private deactivatorService = inject(DeactivatorService);
  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);

  public ngOnInit(): void {
    console.log('On init deactivate directive');
    // Create embedded view to get access to component selector
    const embeddedView = this.viewContainerRef.createEmbeddedView(
      this.templateRef
    );
    // Extract component selector from HTML tag
    const componentSelector = (embeddedView.rootNodes[0] as HTMLElement)
      .localName;
    // Check for deactivation
    const isComponentDeactivated =
      this.deactivatorService.isComponentDeactivated(componentSelector);
    // Destroy the view before it has a chance to be inserted in DOM
    if (isComponentDeactivated) {
      embeddedView.destroy();
    }
  }
}
