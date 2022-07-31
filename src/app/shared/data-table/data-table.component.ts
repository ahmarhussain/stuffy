import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Contracts, MappedContracts } from '../interface';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnChanges, OnInit {

  data: MappedContracts[] = [];
  @Input() tableData!: MappedContracts[];

  constructor() { }

  ngOnInit(): void {
    this.data = this.tableData;
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['tableData'].isFirstChange()) {
      this.data = changes['tableData'].currentValue;
    }
  }

}
