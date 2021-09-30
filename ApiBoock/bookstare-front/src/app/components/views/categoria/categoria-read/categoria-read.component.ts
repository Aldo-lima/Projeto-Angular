import { Router, Routes } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Categoria.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[]=[]

  displayedColumns: string[] = ['id', 'nome','edit', 'delete'];
  constructor( private service: CategoriaService, private router: Router ) { }

  ngOnInit(): void {
   this.findAll();

  }
  findAll(){
     this.service.findAll().subscribe(reposta =>{
     this.categorias = reposta;
     })
}

navegarParaCategoriaCreat(){
  this.router.navigate(["categorias/create"])

}

}