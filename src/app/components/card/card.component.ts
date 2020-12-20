import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CordsService } from '../../services/httpclient/cords.service';
import { CordModel } from '../../models/cord.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cords: CordModel[] = [];

  modalRef: BsModalRef;

  constructor(
    private cordsService: CordsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      {
        class: 'modal-dialog modal-dialog-centered modal-sm'
      }
    );
  }

  deleteCord( cord: CordModel, i: number ) {
    this.cords.splice(i, 1);
    this.cordsService.deleteCord( cord.id ).subscribe();
  }

}
