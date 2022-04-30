import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';


@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];
  originCoffee : number = 0;
  blendCoffee : number = 0;

  constructor(private coffeeService : CoffeeService) { }

  computeDifferentCoffeesTotal(coffees : Array<Coffee>){

    for(var coffee  of coffees){

      if(coffee.tipo === 'Blend'){
        this.blendCoffee++;
      }else if (coffee.tipo === 'Café de Origen'){
        this.originCoffee++;
      }

    }
  }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      this.computeDifferentCoffeesTotal(coffees);
    });
  }

  ngOnInit() {
    this.getCoffees();
  }

}
