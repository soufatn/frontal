import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FrontalComponent,
  FrontalInputDirective,
  FrontalLabelDirective,
  FrontalItemDirective,
  FrontalButtonDirective,
} from './frontal.component';

const components = [
  FrontalComponent,
  FrontalInputDirective,
  FrontalLabelDirective,
  FrontalItemDirective,
  FrontalButtonDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class FrontalModule {}
