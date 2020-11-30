import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MathValidators} from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a : new FormControl(this.randomNumber()),
    b : new FormControl(this.randomNumber()),
    answer : new FormControl('')
  }, [
    // provide a reference to that function
    MathValidators.addition('answer', 'a', 'b')
  ]);

  constructor() { }

  // tslint:disable-next-line:typedef
  get a(){
    return this.mathForm.value.a;
  }
  // tslint:disable-next-line:typedef
  get b(){
    return this.mathForm.value.b;
  }
  ngOnInit(): void {
    this.mathForm.statusChanges.subscribe((value) => {

    });
  }

  // tslint:disable-next-line:typedef
  randomNumber(){
    return Math.floor(Math.random() * 10);
  }
}
