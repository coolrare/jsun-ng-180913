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
  data;

  constructor(public datasvc: DataService) {
  }

  ngOnInit(): void {
    this.datasvc.getArticles().subscribe((v) => {
      this.data = v;
    });
  }

  doSearch(value) {
    this.keyword = value;
  }

  deleteArticle(id) {
    this.datasvc.deleteArticle(id).subscribe(v => {
      console.log('您刪除了一篇文章: ' + id);
      this.datasvc.getArticles().subscribe((v) => {
        this.data = v;
      });
    }, (error) => {
      console.log(error);
    });
  }
}
