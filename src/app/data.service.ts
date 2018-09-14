import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { switchMap } from "rxjs/operators";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article[]>(`${environment.baseUri}/articles`);
  }

  deleteArticle(id) {
    return this.http.delete(`${environment.baseUri}/articles/${id}`)
      .pipe(switchMap(v => {
        return this.http.get<Article[]>(`${environment.baseUri}/articles`);
      }));
  }
}
