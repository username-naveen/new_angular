import { OnDestroy, } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObs: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObs = interval(1000).subscribe(
    //   (count) => {
    //     console.log(count);
    //   }
    // )
    const customObs = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Error: Count exceeded 3!'));
        }
        count++;
      }, 1000);
    })

    this.firstObs = customObs.pipe(filter((data) => {
      return data > 0;
    }) , map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.message)
    }, () => {
      console.log('Completed!');
      
    }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.firstObs.unsubscribe();
  }

}
