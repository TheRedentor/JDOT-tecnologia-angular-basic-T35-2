import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent {
  @Input() form: any;

  constructor() {

  }

  ngOnInit(): void {

  }

}
