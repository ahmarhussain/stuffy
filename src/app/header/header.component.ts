import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, Subscription } from 'rxjs';
import { FilterService } from '../core/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription?: Subscription;
  formGroup: FormGroup = this.fb.group({
    'searchText': ['', Validators.required],
    'showCompletedOnly': [false]
  });

  constructor(
    private fb: FormBuilder,
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.formGroup.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(form => {
      this.filterService.headerFilters.next(form);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
