import { Component } from '@angular/core';
import { Form } from './form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JDOT-tecnologia-angular-basic-T35-2';

  name: string ="";
  email: string = "";
  message: string = "";
  result: string = "";
  firstNumber: number = Math.floor(Math.random() * (10 - 1) + 1);
  secondNumber: number = Math.floor(Math.random() * (10 - 1) + 1);
  nameNotNull: boolean = true;
  emailNotNull: boolean = true;
  messageNotNull: boolean = true;
  resultIsCorrect: boolean = true;
  created_form: Form = new Form("","","","");

  createForm(): void{
    this.nameNotNull = true;
    this.emailNotNull = true;
    this.messageNotNull = true;
    this.resultIsCorrect = true;
    if (this.name=="") {
      this.nameNotNull = false;
    }
    if (this.email=="") {
      this.emailNotNull = false;
    }
    if (this.message=="") {
      this.messageNotNull = false;
    }
    if (parseInt(this.result)!=this.firstNumber+this.secondNumber) {
      this.resultIsCorrect = false;
    }
    if (this.name!="" && this.email!="" && this.message!='' && parseInt(this.result) == this.firstNumber + this.secondNumber) {
      this.nameNotNull = true;
      this.emailNotNull = true;
      this.messageNotNull = true;
      this.resultIsCorrect = true;
      const form : Form = {
        name: this.name,
        email: this.email,
        message: this.message,
        result: this.result
      }
      this.created_form = form;
    }
  }
}
