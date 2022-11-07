import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[]=[

    {
      banerimage:'Baner/Baner_Mobile.jpg',
      category:{
        id:0,
        category:'electronics',
        subcategory:'mobiles',
      },
    },
    {
      banerimage:'Baner/Baner_Grocery.jpg',
      category:{
        id:0,
        category:'foods',
        subcategory:'vegetables',
      },
    },
    {
      banerimage:'Baner/Baner_Grocery.jpg',
      category:{
        id:0,
        category:'electronics',
        subcategory:'laptops',
      },
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
