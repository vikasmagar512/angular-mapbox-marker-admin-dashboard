import { Component, OnInit,TemplateRef } from '@angular/core';
import { dataService } from '../dataService.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  customer: any;
  public modalRef: BsModalRef;
  constructor(private dataService: dataService,
    private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  ngOnInit() {
    this.customer = this.dataService.getCustomer();
  }

}