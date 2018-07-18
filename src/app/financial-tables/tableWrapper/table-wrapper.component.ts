import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Person} from '../../post/Person';
import {Http} from '@angular/http';
import {MyPost} from '../../post/mypost';
import {Subject} from 'rxjs/index';
import {MyPostService} from '../../post/mypost.service';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css','../../style.css']
})

export class TableWrapperComponent{
  dataNumber:number = 0;
  loadTable(num:number){
    console.log(`loadTable${num}`)
    this.dataNumber = num
    $(`.sieBtn`).removeClass('active');
    $(`.${this.dataNumber}num`).addClass('active');
  }
}
