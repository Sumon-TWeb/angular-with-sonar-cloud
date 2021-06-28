import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = "Product List Component";
  constructor() {
    this.title = 'Updated';
  }

  // This function init the execution
  ngOnInit(): void {
    console.log(this.title);
  }

}
