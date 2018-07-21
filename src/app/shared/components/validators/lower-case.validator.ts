import { AbstractControl } from '../../../../../node_modules/@angular/forms';

//todo validator precisa conter o control do tipo AbstractControl
export function LowerCaseValidator(control: AbstractControl) {
    //se não tiver em branco e o que tiver no value não seguir a expressão regular
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value))
        //para ter acesso no errors desse validator, quando esta com problema retornamos true e quando esta valido retornamos null
        return { lowerCase: true }
    return null;
}