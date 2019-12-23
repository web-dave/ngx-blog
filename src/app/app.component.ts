import {IdleMonitorService} from '@scullyio/ng-lib'; 
 import { Component } from '@angular/core';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
 constructor (private idle: IdleMonitorService) { } 
}
