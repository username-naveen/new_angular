import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() data!: ProductType;
  @Output() btnClick = new EventEmitter();
  @Input() code!: string;

  notifyParent() {
    this.btnClick.emit()
  }

  dirtyCheck() {
    console.log('change detected!');    
  }

  // discountCal() {
  //   console.log('Discount Calcultaion');
  //   return '0% off';
  // }
}
