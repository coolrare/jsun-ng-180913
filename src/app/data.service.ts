import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<any>('/api/articles.json');
  }

  deleteArticle(id) {
    return this.http.delete('/api/articles/' + id);
  }
}
