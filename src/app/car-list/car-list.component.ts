import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{
  cars = this.carService.getCars();

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  selectCar(car: Car): void {
    this.carService.setCurrentCar(car);
    console.log('Car selected: ', car);
    
  }
}
