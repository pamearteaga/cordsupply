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
  download = false;


  constructor(
    private cordsService: CordsService
  ) { }

  ngOnInit() {
    this.download = true;
    this.cordsService.getCords().subscribe( resp => {
      this.cords = resp.reverse();
      this.download = false;
      if( resp.length === 0 ){
        this.download = false;
      }
    });
  }

}
