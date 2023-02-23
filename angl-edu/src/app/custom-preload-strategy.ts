import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

export class CustomPreloadStrategy implements PreloadingStrategy{
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            return load();
        }
        // throw new Error("Method not implemented.")
        return of(null);
        /**
         * of is from rxjs itself. It allows us to create a observable
         * by passing some params to it, currently it is null, and the created observable will be a 
         * observable which has null value 
         */
    }
}
