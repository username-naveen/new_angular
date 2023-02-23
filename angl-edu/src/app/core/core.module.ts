import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPreloadStrategy } from '../custom-preload-strategy';



@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  providers: [
    CustomPreloadStrategy
  ],
  /**
   * in providers you can inject: 
   *  
   * Global Services
   * Interceptors
   * error handlers
   * Custom Dependency Injection (DI)
   * App initializer
   * 
   * */ 
  /**
   * even this CustomPreloadStrategy is here, it doesn't mean anything. 
   * means, the CoreModule doesnot have anyother functionality that is being used from 
   * the CustomPreloadStrategy. Even without the providers here in NgModule, it works as it is.
   * Note: If you are using any of the functionality from the CustomPreloadStrategy you need to 
   * add the providers here.  
   * */ 
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [CustomPreloadStrategy]
    }
  }
}
