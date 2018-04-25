import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-warranty-equipments',
  templateUrl: './warranty-equipments.component.html',
  styleUrls: ['./warranty-equipments.component.css'],
  providers: [AngularFireDatabase]
})
export class WarrantyEquipmentsComponent implements OnInit {

  items$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.items$ = db.list('warranty').valueChanges();
  }

  ngOnInit() { }

}
