import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, retry, switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'], 
  providers: [SearchService]
})
export class SearchComponent implements OnInit{
  search = new FormControl();
  constructor(
    private searchService: SearchService,
    private activeRoute: ActivatedRoute) {}
  
  queryRepos(query: string) {
    console.log(query);
    
    this.searchService.searchRepos(query).subscribe(
      (data) => console.log(data),
      (error) => console.log(error),     
    )
  }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((params) => {
      console.log(params.get('page'));
    })
    this.search.valueChanges.pipe(
      debounceTime(500),
      // debounceTime is to wait for a minimum time
      distinctUntilChanged(),
      switchMap((q) => this.searchService.searchRepos(q)),
      retry(3),
    ).subscribe((value) => console.log(value)
    )
  }
}
