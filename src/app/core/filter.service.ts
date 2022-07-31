import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderFilters } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  headerFilters: Subject<HeaderFilters> = new Subject();
  constructor() { }
}
