import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zoieria_Frontend';
  panelOpenState = false;

  @ViewChild(MatSidenav) sidenav!: MatSidenav
  constructor(private observer: BreakpointObserver) {

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width:760px)']).subscribe((res) => {
      if (res.matches) { //this means we are on a larger screen
        this.sidenav.mode = 'side'
        this.sidenav.close()
      } else { //thus means we are on smaller screen
        this.sidenav.mode = 'over'
        this.sidenav.close();

      }
    })
  }
}
