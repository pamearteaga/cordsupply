import { Component, OnInit } from '@angular/core';
import { CordModel } from '../../models/cord.model';
import { NgForm } from '@angular/forms';
import { CordsService } from '../../services/httpclient/cords.service';
import { ActivatedRoute } from '@angular/router';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-cord',
  templateUrl: './cord.component.html',
  styleUrls: ['./cord.component.scss']
})
export class CordComponent implements OnInit {

  marcas: any[] = ['Linhasita', 'Sethanyl', 'Linhanyl', 'Otro'];
  cord: CordModel  = new CordModel();
  add = false;
  update = false;
  colorVal: string = '';

  constructor(
    private cordsService: CordsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if(id !== 'nuevo') {
      this.cordsService.getCord( id ).subscribe( (resp: CordModel) => {
        this.cord = resp;
        this.cord.id = id;
      })
    }
  }

  handleChange( $event: ColorEvent) {
    this.colorVal = $event.color.hex;
    console.log(this.colorVal);
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  }
  

  saveCord(form: NgForm) {
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
        resp.color = this.colorVal;
       /*  this.cord = resp; */
        /* this.cord.color = this.colorVal; */
        this.colorVal = '';
      });

    }

  }

}
