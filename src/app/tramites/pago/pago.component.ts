import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TramitesService } from 'src/app/services/tramites.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styles: [
  ]
})
export class PagoComponent {
  public pagoForm: FormGroup = this.fb.group({
    access: [ '', [ Validators.required ] ],
    numId: [ '', [ Validators.required ] ],
    confirmNumId: [ '', [ Validators.required ] ],
    firstName: [ '', [ Validators.required ] ],
    lastName: [ '', [ Validators.required ] ],
    mobile: [ '', [ Validators.required ] ],
    email: [ '', [ Validators.required ] ],
    confirmEmail: [ '', [ Validators.required ] ]
  }) 

  constructor(
    private fb: FormBuilder,
    private ts: TramitesService
  ){

  }

  campoEsValido(campo: string){
    return this.pagoForm.get(campo)?.invalid && this.pagoForm.get(campo)?.touched
  }

  sendPayInfo(){
    this.ts.sendPayment(this.pagoForm.value)
      .subscribe( resp => {
        if ( !resp.ok ){
          Swal.fire(
            'Error',
            resp.msg,
            'error'
          )
        }
      })
  }
}
