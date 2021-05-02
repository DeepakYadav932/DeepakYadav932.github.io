import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MenuItem } from '../Models/MenuItem';

@Component({
  selector: 'pf-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() displaySidebarSubject: Subject<boolean>;
  public display: boolean = false;
  public menuItems: MenuItem[] = [
    {
      label: 'Home',
      shouldShowArrowIcon: false,
      route: ''
    },
    {
      label: 'Experience',
      shouldShowArrowIcon: false,
      route: 'experience'
    },
    {
      label: 'See My Work',
      shouldShowArrowIcon: false,
      route: 'projects'
    },
    {
      label: 'My skills',
      shouldShowArrowIcon: false,
      route: 'skills'
    },
    {
      label: 'About Me',
      shouldShowArrowIcon: false,
      route: 'about'
    },
    {
      label: 'Contact Me',
      shouldShowArrowIcon: false,
      route: 'contact'
    },
  ]

  ngOnInit(): void {
    this.displaySidebarSubject.subscribe((value: boolean) => {
     this.display = value;
    })
  }

  public onMouseOver(index: number) {
    this.menuItems[index].shouldShowArrowIcon = true;
  }

  public onMouseLeave(index: number) {
    this.menuItems[index].shouldShowArrowIcon = false;
  }

  public navigateToMenutem(index: number) {
    const route = this.menuItems[index].route;
    this.router.navigate([route]);
    this.displaySidebarSubject.next(false);
  }


}
