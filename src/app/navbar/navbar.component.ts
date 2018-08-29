import { Component, OnInit,TemplateRef } from '@angular/core';
import { dataService } from '../dataService.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class NavbarComponent implements OnInit {

  customer: any;
  public modalRef: BsModalRef;
  constructor(private dataService: dataService,
    private modalService: BsModalService,
              private router:Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  ngOnInit() {
    this.customer = this.dataService.getCustomer();
  }
  navigateTo(){
    // this.router.navigate(['main/home']);
    this.router.navigate(['main', 'home']);
  }
}
