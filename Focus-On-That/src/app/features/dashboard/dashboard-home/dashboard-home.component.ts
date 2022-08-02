import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;
  arr: any;

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title,
    private logger: NGXLogger) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.titleService.setTitle('D-&-A Generator - Dashboard');
    this.logger.log('Dashboard loaded');

    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
  }
   compareTriplets(a: number[], b: number[]): number[] {
    a=[5, 6, 7];
    b=[3 ,6, 10];
    arr:[]= [];
   
    for (let i=0; i<a.length;i++){
        
        if(a[i]>b[i]){
           
        this.arr.append[1];
            break;
        }
        if(i==1 && a[i]==b[i]){
          this.arr.append[1];
            break;
        }else if(i==2 && a[i]<b[i]){
            this.arr.append[1];
            break;
        }
        
    }
    return this.arr;
    
    
    

}

}
