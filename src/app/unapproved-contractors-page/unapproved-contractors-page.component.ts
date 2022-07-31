import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { data } from 'src/assets/data';
import { FilterService } from '../core/filter.service';
import { Contracts, MappedContracts } from '../shared/interface';
import dayjs from './../shared/day';

@Component({
  selector: 'app-unapproved-contractors-page',
  templateUrl: './unapproved-contractors-page.component.html',
  styleUrls: ['./unapproved-contractors-page.component.scss']
})
export class UnapprovedContractorsPageComponent implements OnInit, OnDestroy {

  filterSubscription?: Subscription;
  mappedData: MappedContracts[] = [];
  filteredData: MappedContracts[] = [];
  
  constructor(
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.mappedData = data.map(data => {
      const progressArray = Object.entries(data.progress);
      return {
        ...data,
        isActive: progressArray.every(arr => arr[1]),
        progress: progressArray.map(a => {return {key: a[0].replace('_', ' '), value: a[1]}}),
        dateJoined: dayjs(data.dateJoined).format('Do MMM. YYYY'),
        lastActivity: dayjs(data.lastActivity).format('Do MMM. YYYY, HH:mm'),
      };
    });

    this.filteredData = this.mappedData;
    this.filterSubscription = this.filterService.headerFilters.subscribe((filterData) => {
      this.filteredData = this.mappedData;
      if(filterData.showCompletedOnly){
        this.filteredData = this.filteredData.filter(obj => obj.isActive);
      }
      if (filterData.searchText) {
        this.filteredData = this.filteredData.filter(obj => {
          return obj.name.toLowerCase().includes(filterData.searchText.toLowerCase());
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.filterSubscription?.unsubscribe();
  }

}
