import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  searchRepos(query: string) {
    const url = 'https://api.github.com/search/repositories?q='+query;
    return this.httpClient.get(url);
  }
}
