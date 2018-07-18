import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { MyPost } from './mypost';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {Person} from './Person';
import { Subject } from 'rxjs';
import {MyPostService} from './mypost.service';

@Component({
  template: `
        <div class="post-highlights2">
            <!--<p><b>Article-{{post.sn}}: {{post.title}}</b></p>-->
            <!--<p><b>Article-</b></p>-->
            <!--<p>Category: </p>-->
            <!--<p>Category: {{post.category}}</p>-->

          <div class="row top-header marginLRZero">
            <div class="col-md-4">
              <div class="xls">
                <img src="../../assets/24.png">
              </div>
            </div>
            <div class="col-md-8 pull-right">
              <div class="sie-btn">
                <button class="sieBtn 1num" (click)="loadTable(1)">
                  <img src="../../assets/26.svg">
                </button>
                <button class="sieBtn 2num" (click)="loadTable(2)">
                  <img src="../../assets/27.svg">
                </button>
                <button class="sieBtn 3num" (click)="loadTable(3)">
                  <img src="../../assets/28.svg">
                </button>
                <button class="sieBtn 4num" (click)="loadTable(4)">
                  <img src="../../assets/29.svg">
                </button>
              </div>
            </div>
          </div>
          <table datatable [dtOptions]="dtOptions" [dtTrigger]="dtTrigger" class="row-border hover">
            <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let person of persons">
              <td>{{ person.id }}</td>
              <td>{{ person.firstName }}</td>
              <td>{{ person.lastName }}</td>
            </tr>
            </tbody>
          </table>
		    </div>
  `,
  styleUrls: ['../style.css']
})
export class ArticleComponent implements MyPost, OnInit, OnDestroy{
  @Input() post: any;
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Person[]> = new Subject();

  constructor(private http: Http,private myPostService:MyPostService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.myPostService.getPersonsData()
      .subscribe(persons => {
        this.persons = persons;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
        this.loadTable(1);
      });
  }
  loadTable(num){
    $(`.sieBtn`).removeClass('active');
    $(`.${num}num`).addClass('active');
    $(`.tb`).hide();
    $(`#table${num}`).show();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

 /* private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }*/
}
