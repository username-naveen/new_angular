import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from 'src/types';
import { ProductService } from '../../services/product.service';
import { CurrencyService } from './../../../currency/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'], 
  providers: [ProductService]
})
export class ProductListComponent implements OnInit{
  
  constructor(
    private productService: ProductService, 
    private currencyService: CurrencyService,
    private router: Router,
  ) {}
  
  ngOnInit() {
    this.productService.getProduct().subscribe(
      (data) => this.plist = data, 
      (error) => console.log('Error: ', error),      
    );
    this.currencyService.currencyObservable$.subscribe(
      (data) => {
        console.log('data changes', data);
        this.selectedCode = data;
        
      }
    )
  }

  plist: ProductType[] = [];
  selectedCode!: string; 

  triggerChangeDetection() {
    console.log('Triggered');
    
  }

  addItem() {
    console.log('Add to the cart.');
    this.router.navigate(['/search'], {
      queryParams: {
        page: 1, 
        q: 'angular',
      }
    }) // formatting is done by angular
    // this.router.navigateByUrl('/search') // formatting needs to be done by whomever writes the code.
  }
}
