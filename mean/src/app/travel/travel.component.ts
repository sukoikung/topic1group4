import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  travel = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => 
      
      this.authService.getposttravel().subscribe(data => {
        for (var i in data){
          if(params.id == data[i]._id){
            this.travel =  data[i];
            break;
          }
        }
        })
      );
    console.log(this.travel);
  }

}
