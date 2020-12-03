import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firebase/firestore.service';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss']
})
export class SupplyComponent implements OnInit {

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getUser('dzwAVKyN4mXExP7OkgtiXWGgHoG2');
    /* this.firestoreService.getAllUser(); */

  }

}
