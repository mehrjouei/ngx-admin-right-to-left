import { NgModule } from '@angular/core';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ComponentsModule { }
