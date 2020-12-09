import { Component, OnInit } from '@angular/core';
import { CordsService } from '../../services/httpclient/cords.service';
import { CordModel } from '../../models/cord.model';


@Component({
  selector: 'app-cords',
  templateUrl: './cords.component.html',
  styleUrls: ['./cords.component.scss']
})
export class CordsComponent implements OnInit {

  cords: CordModel[] = [];

  constructor(
    private cordsService: CordsService
  ) { }

  ngOnInit() {
    this.cordsService.getCords().subscribe( resp => {
      console.log(resp);
      this.cords = resp;
    });
  }

 

}
