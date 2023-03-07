import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeactivatorService {
  private readonly DEACTIVATED_COMPONENTS: Array<string> = [
    'app-component-one',
  ];

  public isComponentDeactivated(componentClassName: string): boolean {
    return this.DEACTIVATED_COMPONENTS.includes(componentClassName);
  }
}
