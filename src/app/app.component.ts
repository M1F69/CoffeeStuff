import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainBlockComponent} from "./components/main-block/main-block.component";
import {TitleBlockComponent} from "./components/title-block/title-block.component";
import {IconsModule} from "./icons/icons.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainBlockComponent, TitleBlockComponent,IconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    class: 'h-full w-full'
  },
})
export class AppComponent {
  title = 'CoffeStuff';
}
