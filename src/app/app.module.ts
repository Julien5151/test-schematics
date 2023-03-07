import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { DeactivateDirective } from './directive/deactivate.directive';

@NgModule({
  declarations: [AppComponent, ComponentOneComponent, ComponentTwoComponent],
  imports: [BrowserModule, AppRoutingModule, DeactivateDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
