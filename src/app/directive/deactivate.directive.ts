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
    // Je n'ai pas d'autre moyen... Mais c'est un nogo pour moi d'accéder à cette prop
    // Le jour où elle passe en private réelle, la directive serait cassée
    const componentSelector = (this.viewContainerRef as any)._hostTNode
      .value as string;
    const isComponentDeactivated =
      this.deactivatorService.isComponentDeactivated(componentSelector);
    if (!isComponentDeactivated) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
