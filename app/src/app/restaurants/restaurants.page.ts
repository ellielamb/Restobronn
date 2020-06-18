import { RestaurantService } from './../api/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants: [];

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants()
  }

  getRestaurants(): void {
    this.restaurantService.getAll().subscribe(restaurants => {
      this.restaurants = restaurants['data'] 
    })
  }

}
