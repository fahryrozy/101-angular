import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '101-angular';
  isTitleChanged: boolean = false;

  changeTitle() {
    this.title = '102-angular';
    this.isTitleChanged = true;
  }

  revertTitle() {
    this.title = '101-angular';
    this.isTitleChanged = false;
  }
}
