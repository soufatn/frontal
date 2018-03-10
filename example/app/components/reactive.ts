import { Component, OnInit } from '@angular/core';
import { heroes, filter, toString, toJson, Hero } from '../../data/hero';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  template: `
    <form [formGroup]="form">
      <frontal [itemToString]="heroToString" formControlName="hero">
        <ng-template let-value="inputValue" let-open="open" let-highlightedIndex="highlightedIndex">
          <label>Select your hero!
            <input type="text" frontalInput/>
          </label>

          <ul *ngIf="open" class="menu">
            <li *ngFor="let hero of filteredHeroes(value); trackBy:trackHeroById; let index=index;"
              [class.highlight]="highlightedIndex === index">
              <div frontalItem [value]="hero">{{hero.name}}</div>
            </li>

            <div *ngIf="!filteredHeroes(value).length">
              No heroes found...
            </div>
          </ul>

          <h4>Form value:</h4>
          <input type="hidden" id="selected" [value]="heroToJson(form.get('hero').value)">
          <pre>{{form.value | json}}</pre>
        </ng-template>
      </frontal>
    </form>
    <button id="reset" (click)="reset()">Change hero</button>
  `,
  styles: [
    `
      .highlight {
        background: yellow;
      }
    `,
  ],
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;
  heroes = heroes;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      hero: heroes[3],
    });
  }

  filteredHeroes(query: string) {
    return filter(query);
  }

  trackHeroById(index: number, hero: Hero) {
    return hero.id;
  }

  heroToString(hero: Hero) {
    return toString(hero);
  }

  heroToJson(hero: Hero) {
    return toJson(hero);
  }

  reset() {
    this.form.setValue({ hero: this.heroes[3] });
  }
}
