import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';

@Component({
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {

  livroId: number = 0;

  livroData: LivroDTO | any; 

  routeData$?: Observable<Params>;

  livro$?: Observable<LivroDTO>;

  constructor(
    private snack: MatSnackBar,
    private service: EstoqueService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.routeData$ = this.activatedRoute.params;

    this.routeData$.subscribe(data => {
      this.livroId = data.id;
    });

    this.livro$ = this.service.obterDetalhesLivroPorId(this.livroId);
    this.livro$.subscribe(response => {
      this.livroData = response;
    });
  }

  addNovoItem() {
    this.livroData.quantidadeSelecionada = 1;
    let jsonCarrinho = localStorage.getItem('carrinho') || '[]';
    let listaProdutos: LivroDTO[] = JSON.parse(jsonCarrinho);
    let isAlreadyExist = listaProdutos.find(livro => livro.id === this.livroData.id)

    if(!isAlreadyExist) {
      console.log('item adicionado', this.livroData);
      
      listaProdutos = [this.livroData, ...listaProdutos];
      localStorage.setItem('carrinho', JSON.stringify(listaProdutos))
    } else {
      this.snack.open("Já está incluído no carrinho", "fechar", {
        duration: 2000
      })
    }
    this.router.navigate(['/livraria/carrinho'])
  }

  

}
