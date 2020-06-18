import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './../api/restaurant.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  restaurant: Object = {
    name: null
  }

  constructor(
    private route: ActivatedRoute,
    public restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.getRestaurant()
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getOne(id)
      .subscribe(restaurant => this.restaurant = restaurant['data']);
  }
}
