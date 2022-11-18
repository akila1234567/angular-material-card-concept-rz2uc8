import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./card.scss'],
  host: {
    'class': 'card'
  }
})
export class Card {
  constructor() {}
}

@Directive({
  selector: 'card-title',
  host: {
    'class': 'card-title'
  }
})
export class CardTitle{}

@Directive({
  selector: 'card-content',
  host: {
    'class': 'card-content'
  }
})
export class CardContent{}

@Directive({
  selector: 'card-actions',
  host: {
    'class': 'card-actions'
  }
})
export class CardActions{}

@Directive({
  selector: 'card-header',
  host: {
    'class': 'card-header'
  }
})
export class CardHeader{}

@Directive({
  selector: 'card-item',
  host: {
    'class': 'card-item'
  }
})
export class CardItem{}
