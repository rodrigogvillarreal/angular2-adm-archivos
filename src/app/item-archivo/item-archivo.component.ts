import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-archivo',
  templateUrl: './item-archivo.component.html',
  styleUrls: ['./item-archivo.component.css']
})
export class ItemArchivoComponent implements OnInit {

  @Input()
  itemInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
