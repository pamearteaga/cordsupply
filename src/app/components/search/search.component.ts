import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { CordsService } from '../../services/httpclient/cords.service';
import { CordModel } from '../../models/cord.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cords: CordModel[] = [];
  finds: CordModel[] = [];
  term: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private cordsService: CordsService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.finds = [];
      this.term = params['term'];
      this.cordsService.getCords().subscribe( resp => {
        this.cords = resp;
        for(  let cord of this.cords ) {
          const codigo = cord.codigo.toLowerCase();
           if ( codigo === this.term ) {
            this.finds.push( cord );
          }
        }
      });
    })
  }


  deleteCord( find: CordModel, i: number ) {
    this.cords.splice(i, 1);
    this.cordsService.deleteCord( find.id ).subscribe();
  }


}
