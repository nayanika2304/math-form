import {AbstractControl} from '@angular/forms';

export class MathValidators {

  // only going to make use of the arguments to the functions and not instance variables
  static addition(target: string, sourceOne: string, sourceTwo: string){

    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNUmber = form.value[sourceTwo];
      // tslint:disable-next-line:radix
      if (firstNumber + secondNUmber === parseInt(sum)){
        return null;
      }
      return {addition: true};
    };


  }

}


