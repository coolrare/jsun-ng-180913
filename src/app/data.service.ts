import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article[]>(`${this.baseUri}/articles`);
  }

  deleteArticle(id) {
    return this.http.delete(`${this.baseUri}/articles/${id}`)
      .pipe(switchMap(v => {
        return this.http.get<Article[]>(`${this.baseUri}/articles`);
      }));
  }
}
