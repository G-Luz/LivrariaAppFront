import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivHeaderComponent } from './liv-header/liv-header.component';
import { LivFooterComponent } from './liv-footer/liv-footer.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { LivEnderecoFormComponent } from './liv-endereco-form/liv-endereco-form.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InativarDialogComponent } from './dialogs/inativar-dialog/inativar-dialog.component';
import { EnderecoSubmitterComponent } from './dialogs/endereco-submitter/endereco-submitter.component';
import { LivCartoesFormComponent } from './liv-cartoes-form/liv-cartoes-form.component';
import { LivSidenavClienteComponent } from './liv-sidenav-cliente/liv-sidenav-cliente.component';
import { LivSidenavAdminComponent } from './liv-sidenav-admin/liv-sidenav-admin.component';
import { CarrinhoFinalizacaoComponent } from './dialogs/carrinho-finalizacao/carrinho-finalizacao.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    LivHeaderComponent, 
    LivFooterComponent, 
    LivEnderecoFormComponent, 
    InativarDialogComponent, 
    EnderecoSubmitterComponent, 
    LivCartoesFormComponent, 
    LivSidenavClienteComponent, 
    LivSidenavAdminComponent, 
    CarrinhoFinalizacaoComponent, 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LivHeaderComponent, 
    LivFooterComponent, 
    LivEnderecoFormComponent, 
    InativarDialogComponent, 
    EnderecoSubmitterComponent, 
    LivCartoesFormComponent, 
    LivSidenavClienteComponent, 
    LivSidenavAdminComponent, 
  ]
})
export class ComponentsModule { }
