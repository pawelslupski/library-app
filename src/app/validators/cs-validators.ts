import { AbstractControl } from '@angular/forms';

export class CustomValidators {

    static pages(control: AbstractControl) {
        let regex = /^(?:[1-9][0-9]{3}|[1-9][0-9]{2}|[1-9][0-9]|[1-9])$/;
        const minPages = 10;
        const maxPages = 1500;
        if (control.value < minPages || control.value > maxPages || (!regex.test(control.value))) {
            return {
                pages: true
            }
        }
        return null;
    }

    static releaseDate(control: AbstractControl) {
        let regex = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/g;
        if (!regex.test(control.value)) {
            return {
                pages: true
            }
        }
        return null;
    }

    static ISBN(control: AbstractControl) {
        let regex = /^[0-9]{2}[-][0-9]{2}[-][0-9]{5}[-][0-9]{1}$/g;
        const minPages = 10;
        const maxPages = 1500;
        if (!((control.value < minPages || control.value > maxPages) && regex.test(control.value))) {
            return {
                pages: true
            }
        }
        return null;
    }
}