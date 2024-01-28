import { Component } from '@angular/core';

@Component({
  selector: 'app-main-block',
  standalone: true,
  imports: [],
  templateUrl: './main-block.component.html',
  styleUrl: './main-block.component.css',
  host: {
  class: 'flex flex-col justify-center '
},

})
export class MainBlockComponent {
  protected bdCoffee = ["эспрессо",
    "капучино",
    "латте",
    "американо",
    "флэт уфйт",
    "глясе",
    "какао",
    "горячий шоколад"];
  protected bdSizing = [
    "S",
    "M",
    "L",
  ]
  public rez: any

  startRandom() {
    this.rez=(this.bdCoffee[Math.floor(Math.random() * this.bdCoffee.length)]) + (this.bdSizing[Math.floor(Math.random() * this.bdSizing.length)])
  }
}
