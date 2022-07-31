import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Array.from(document.querySelectorAll('.navbar p')).forEach(el => {
      el.addEventListener('click', () => {
        const alreadyActive = el.parentElement?.classList.contains('active');
        this.removeActiveFromAllClasses();
        if (!alreadyActive) {
          el?.parentElement?.classList.add('active');
        }
      });
    });
  }
  
  removeActiveFromAllClasses(): void {
    Array.from(document.querySelectorAll('.nav-items')).forEach(function(el) { 
      el.classList.remove('active');
    });
  }

}
