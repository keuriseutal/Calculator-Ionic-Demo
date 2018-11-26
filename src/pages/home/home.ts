import { Component } from "@angular/core";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  disp: string = "0";
  num1: string[] = [];
  num2: string[] = [];
  operator: string = "";
  isOperatorPressed: boolean = false;

  constructor() {}

  selectedOperator(event: string) {
    this.isOperatorPressed = true;
    this.operator = event;
  }

  clear() {
    this.disp = "0";
    this.num1 = [];
    this.num2 = [];
    this.isOperatorPressed = false;
  }

  input(event: string) {
    if (!this.isOperatorPressed && this.num1.length != 9) {
      switch (event) {
        case "negate":
          if (this.num1[0] != "-") {
            this.num1.unshift("-");
          } else {
            this.num1.splice(0, 1);
          }
          break;
        case "delete":
          this.num1.splice(this.num1.length - 1, 1);
          break;
        default:
          this.num1.push(event);
          break;
      }
      this.disp = this.num1.toString().replace(/,/g, "");
    } else if (this.isOperatorPressed && this.num2.length != 9) {
      switch (event) {
        case "negate":
          if (this.num2[0] != "-") {
            this.num2.unshift("-");
          } else {
            this.num2.splice(0, 1);
          }
          break;
        case "delete":
          this.num2.splice(this.num2.length - 1, 1);
          break;
        default:
          this.num2.push(event);
          break;
      }
      this.disp = this.num2.toString().replace(/,/g, "");
    }
  }

  equals() {
    if (this.num2.length != 0) {
      this.isOperatorPressed = false;
      switch (this.operator) {
        case "+":
          this.disp = (
            parseFloat(this.num1.toString().replace(/,/g, "")) +
            parseFloat(this.num2.toString().replace(/,/g, ""))
          ).toString();
          break;
        case "-":
          this.disp = (
            parseFloat(this.num1.toString().replace(/,/g, "")) -
            parseFloat(this.num2.toString().replace(/,/g, ""))
          ).toString();
          break;
        case "*":
          this.disp = (
            parseFloat(this.num1.toString().replace(/,/g, "")) *
            parseFloat(this.num2.toString().replace(/,/g, ""))
          ).toString();
          break;
        case "/":
          this.disp = (
            parseFloat(this.num1.toString().replace(/,/g, "")) /
            parseFloat(this.num2.toString().replace(/,/g, ""))
          ).toString();
          break;
      }

      this.num1 = [];
      this.num2 = [];
    }
  }
}
