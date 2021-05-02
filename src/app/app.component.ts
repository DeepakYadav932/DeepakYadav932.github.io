import { Component, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public displaySidebarSubject = new Subject<boolean>();

  public openSidebar(): void {
    this.displaySidebarSubject.next(true);
  }
}
