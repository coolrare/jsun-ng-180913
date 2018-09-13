import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelink = 'http://blog.miniasp.com/';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeName(evt: MouseEvent) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.counter--;
    } else {
      this.counter++;
    }
    this.sitename = 'The Will Will Web';
  }

}
