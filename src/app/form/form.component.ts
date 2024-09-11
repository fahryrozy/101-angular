import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  gender = ['male', 'female'];
  departements = ['FE', 'BE'];
  soldevModel: Soldev = new Soldev('', '', '', '');

  onSubmit() {
    console.log(this.soldevModel);
  }
}

class Soldev {
  constructor(
    public nik: string,
    public name: string,
    public gender: string,
    public departement: string
  ) {}
}
