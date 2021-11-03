import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetalhesPedidoComponent } from 'src/app/components/dialogs/detalhes-pedido/detalhes-pedido.component';
import { PedidoInterface, PedidosModalInterface } from 'src/app/models/interfaces/dto/pedido.interface';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.scss']
})
export class PedidosClienteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'numero', 'data', 'status', 'acoes'];

  pedidos$?: Observable<PedidoInterface[]>;

  dataSource = new MatTableDataSource<PedidoInterface>();

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private service: PedidosService,
    private matDialogRef: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pedidos$ = this.service.getPedidos();

    this.pedidos$.subscribe(response => {
      this.dataSource = new MatTableDataSource<PedidoInterface>(response)
      this.dataSource.paginator = this.paginator || null;
    })
  }

  cancelarPedido(idPedido: number) {
    console.log('foo', idPedido);
    this.service.cancelarPedido(idPedido).subscribe(response => {
      this.snackBar.open('pedido foi cancelado', 'fechar')
    }, error => {
      this.snackBar.open('erro ao cancelar pedido', 'fechar')
    }, () => {
      location.reload()
    })
  }

  abrirDetalhesPedido(pedido: PedidoInterface) {
    //TODO: integrar isso
    let modalData: PedidosModalInterface = {
      idCliente: Number(sessionStorage.getItem('isLogado')),
      idPedido: pedido.id,
      pedido: pedido
    }

    const dialogRef = this.matDialogRef.open(DetalhesPedidoComponent, {
      width: '1200px',
      data: modalData
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pedidos$ = this.service.getPedidos();

      this.pedidos$.subscribe(response => {
        this.dataSource = new MatTableDataSource<PedidoInterface>(response)
      })
    })
  }

}
