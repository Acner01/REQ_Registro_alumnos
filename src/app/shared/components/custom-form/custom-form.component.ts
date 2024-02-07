import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  DatosContactoForm:FormGroup=new FormGroup({});
  constructor(
    private fb:FormBuilder
  ) { 
    this.DatosContactoForm = this.fb.group({
      nombre : new FormControl('',[]),
      apellido1 : new FormControl('',[]),
      apellido2: new FormControl('',[]),
      documento: new FormControl('',[]),
      sex: new FormControl('',[])

      
    })
    
  }

  ngOnInit(): void {
  }

}
