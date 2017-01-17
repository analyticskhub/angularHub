import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   mobileView: number = 992;
  toggle: boolean = true;



  constructor() {
    this.attachEvents();
  }

  attachEvents() {
    window.onresize = () => {
      if (this.getWidth() >= this.mobileView) {
        if (localStorage.getItem('toggle')) {
          console.info('toggle status', localStorage.getItem('toggle') ? false : true)
          this.toggle = !localStorage.getItem('toggle') ? false : true;
        } else {
          this.toggle = true;
        }
      } else {
        this.toggle = false;
      }
    }
  }

  getWidth() {
    return window.innerWidth;
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    localStorage.setItem('toggle', this.toggle.toString());
  }
}
