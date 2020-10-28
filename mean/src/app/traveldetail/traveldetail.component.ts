import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-traveldetail',
  templateUrl: './traveldetail.component.html',
  styleUrls: ['./traveldetail.component.css']
})
export class TraveldetailComponent implements OnInit {
  travel = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
      this.authService.getposttravel().subscribe(data =>{
        this.travel = data;
        console.log(this.travel)
      })
  }

}
