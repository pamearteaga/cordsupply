import { Component, OnInit } from '@angular/core';
import { CordModel } from '../../models/cord.model';
import { NgForm,FormControl ,FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CordsService } from '../../services/httpclient/cords.service';
import { ActivatedRoute } from '@angular/router';
import { Cord } from '../../interfaces/cord';

@Component({
  selector: 'app-cord',
  templateUrl: './cord.component.html',
  styleUrls: ['./cord.component.scss']
})
export class CordComponent implements OnInit {

  get codigo() {
    return this.formCord.get('codigo');
  }
  get color() {
    return this.formCord.get('color');
  }
  get cantidad() {
    return this.formCord.get('cantidad');
  }
  get marca() {
    return this.formCord.get('marca');
  }

  public formCord = new FormGroup({
    codigo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    color: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required)
  });


  marcas: any[] = ['Linhasita', 'Sethanyl', 'Linhanyl', 'Otro'];
  /* cord: CordModel  = new CordModel(); */
  add = false;
  update = false;
 

  constructor(
    private cordsService: CordsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if(id !== 'nuevo') {
      this.cordsService.getCord(id).subscribe( resp => {
        console.log(resp);
        resp = this.formCord;
        /* this.formCord.id = id; */
      })
    }
  }

  
  saveCord() {
    const cord = this.formCord.value;
    if(cord.id) {
      this.cordsService.updateCord(cord).subscribe( resp => {
        console.log(resp);
        this.add = false;
        this.update = true;
      });
    } else {
      this.cordsService.newCord(cord).subscribe( resp => {
        console.log(resp);
        this.add = true;
        this.update = false;
      });

    }




  }

  /* saveCord() {
    if (form.invalid) {
      console.error('campo requerido');
      return; 
    } 
    if (this.cord.id) {
      this.cordsService.updateCord(this.cord).subscribe( resp => {
        console.log(resp);
        this.add = false;
        this.update = true;
      });
    } else {
      this.cordsService.newCord(this.cord).subscribe( resp => {
        console.log(resp);
        this.add = true;
        this.update = false;
        this.cord = resp;
      });

    }

  } */

} //end
