import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TramitesService } from 'src/app/services/tramites.service';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import {
  MomentDateModule,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import Swal from 'sweetalert2';

const DateFormats = {
  parse: {
    dateInput: ['DD/MM/YYYY'],
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styles: [],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: DateFormats },
  ],
})
export class CitaComponent {
  public citaForm: FormGroup = this.fb.group({
    access: ['', [Validators.required]],
    numId: ['', [Validators.required]],
    paymentDay: ['', [Validators.required]],
    processType: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required]],
    confirmEmail: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private ts: TramitesService) {}

  campoEsValido(campo: string) {
    return (
      this.citaForm.get(campo)?.invalid && this.citaForm.get(campo)?.touched
    );
  }

  sendAppoinmentInfo() {
    this.ts.sendAppoinment(this.citaForm.value)
      .subscribe((resp) => {
        if ( !resp.ok ){
          Swal.fire(
            'Error',
            resp.msg,
            'error'
          )
        }
    });
  }
}
