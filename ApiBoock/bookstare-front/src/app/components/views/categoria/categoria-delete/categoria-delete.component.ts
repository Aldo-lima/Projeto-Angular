import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../Categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {
 categoria: Categoria = {
   id: '',
   nome: '',
 }



  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findByid( this.categoria.id!).subscribe((resposta) =>{
      this.categoria =resposta
      
    })
  }

  delete(): void {
   this.service.delete(this.categoria.id!).subscribe((resposta)=>{
    this.router.navigate(['categorias'])
     this.service.mensagem('categoria deletada com sucesso!')
   })
  }

}
