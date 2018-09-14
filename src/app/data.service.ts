import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  deleteArticle(id) {
    return this.http.delete('http://localhost:3000/articles/' + id);
  }
}
