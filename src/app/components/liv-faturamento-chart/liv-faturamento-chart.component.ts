import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';
import { FaturamentoMensal } from 'src/app/models/interfaces/dto/graficos.interface';
import { faturamentoMock } from 'src/app/pages/admin-domain/dashboard/mock';

@Component({
  selector: 'liv-faturamento-chart',
  templateUrl: './liv-faturamento-chart.component.html',
  styleUrls: ['./liv-faturamento-chart.component.scss']
})
export class LivFaturamentoChartComponent implements OnChanges {
  @Input() faturamento: FaturamentoMensal[] = [];

  title = 'Faturamento Total por Mês';
  type = 'ColumnChart';
  data: any;
  columnNames = ['Data', 'Faturamento'];
  options = { 
    vAxis: { format: "R$ #,##0.00" }
  };
  width = 800;
  height = 500;

  constructor() { 
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.faturamento?.length) {
      this.data = this.faturamento.map(response => {
        return [response.data, response.faturamento]
      })
    }
  }

  

}
