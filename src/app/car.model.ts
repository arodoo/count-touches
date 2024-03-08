export interface Car {
    clickCount: number;
    name: string;
    imgSrc: string;
}

export class CarModel {
    currentCar: Car | null = null;
    cars: Car[] = [
        {
            clickCount: 0,
            name: 'Coupe Maserati',
            imgSrc: 'assets/img/black-convertible-coupe.jpg',
        },
        {
            clickCount: 0,
            name: 'Camaro SS 1LE',
            imgSrc: 'assets/img/chevrolet-camaro.jpg',
        },
        {
            clickCount: 0,
            name: 'Dodger Charger 1970',
            imgSrc: 'assets/img/dodge-charger.jpg',
        },
        {
            clickCount: 0,
            name: 'Ford Mustang 1966',
            imgSrc: 'assets/img/ford-mustang.jpg',
        },
        {
            clickCount: 0,
            name: '190 SL Roadster 1962',
            imgSrc: 'assets/img/mercedes-benz.jpg',
        },
    ];
}