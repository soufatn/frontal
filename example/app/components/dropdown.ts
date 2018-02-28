import { Component } from '@angular/core';
import { heroes, filter, toString, toJson, Hero } from '../../data/hero';

@Component({
  selector: 'frontal-dropdown',
  template: `
    <frontal #frontal>
      <ng-template>
        <button frontalButton>
          {{frontal.state.selectedItem ? frontal.state.selectedItem.name : 'Select your hero'}}
        </button>

        <ul *ngIf="frontal.state.open" class="menu">
          <li *ngFor="let hero of heroes; trackBy:trackById; let index=index;" [class.highlight]="frontal.state.highlightedIndex === index">
            <div frontalItem [toString]="heroToString" [value]="hero">{{hero.name}}</div>
          </li>
        </ul>

        <h4>Selected hero:</h4>
        <input type="hidden" id="selected" [value]="heroToJson(frontal.state.selectedItem)">
        <pre>{{frontal.state.selectedItem | json}}</pre>
      </ng-template>
    </frontal>
  `,
  styles: [
    `
      .highlight {
        background: yellow;
      }
    `,
  ],
})
export class DropdownComponent {
  heroes = heroes;

  trackHeroById(index: number, hero: Hero) {
    return hero.id;
  }

  heroToString(hero: Hero) {
    return toString(hero);
  }

  heroToJson(hero: Hero) {
    return toJson(hero);
  }
}