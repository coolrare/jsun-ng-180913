import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';

  constructor(public datasvc: DataService) {
  }

  doSearch(value) {
    this.keyword = value;
  }
}
