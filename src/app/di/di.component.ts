import { Component, inject } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-di',
  standalone: true,
  imports: [],
  templateUrl: './di.component.html',
  styleUrl: './di.component.scss',
})
export class DiComponent {
  display = '';
  // dataService = inject(DataService);

  // constructor() {
  //   this.display = this.dataService.getCars().join(' ⭐️ ');
  // }
  constructor(private _dataService: DataService) {
    this.display = this._dataService.getCars().join(' ⭐️ ');
  }
}
