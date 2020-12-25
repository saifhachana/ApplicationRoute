import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent implements OnInit {

  constructor() { }
  lesProduits =[ {id:15, libelle:'montre'},
{id:32, libelle:'cartable'},
 {id:45, libelle:'cahier'},
{id:96, libelle:'tablier'} ];


  ngOnInit(): void {
  }

}
