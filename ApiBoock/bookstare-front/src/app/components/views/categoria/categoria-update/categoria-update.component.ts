import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../Categoria.model';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {
  
  categoria: Categoria= {
   id: '',
   nome: '',
  }

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  cancelar(): void{
    this.router.navigate(['categorias'])
  }

}
