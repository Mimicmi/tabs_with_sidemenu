import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  public data = [
  {
    id: 5,
    url: '../../assets/photos/madison.jpg',
    title: 'Madison',
    author: 'Rémi Pontonnier',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, accusantium at dolorum commodi reiciendis aspernatur fugiat perspiciatis ipsam blanditiis corrupti quam. Assumenda corrupti a distinctio ipsam quas beatae, quasi voluptatum.'
  },
  {
    id: 10,
    url: '../../assets/photos/papillon.jpg',
    title: 'Papillon',
    author: 'Mael Ramilien',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, accusantium at dolorum commodi reiciendis aspernatur fugiat perspiciatis ipsam blanditiis corrupti quam. Assumenda corrupti a distinctio ipsam quas beatae, quasi voluptatum.'
  },
  {
    id: 15,
    url: '../../assets/photos/pont.jpg',
    title: 'Pont',
    author: 'Lucien Sigayret',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, accusantium at dolorum commodi reiciendis aspernatur fugiat perspiciatis ipsam blanditiis corrupti quam. Assumenda corrupti a distinctio ipsam quas beatae, quasi voluptatum.'
  },
  {
    id: 20,
    url: '../../assets/photos/trou-noir.jpg',
    title: 'Trou-noir',
    author: 'Romain Cordier',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, accusantium at dolorum commodi reiciendis aspernatur fugiat perspiciatis ipsam blanditiis corrupti quam. Assumenda corrupti a distinctio ipsam quas beatae, quasi voluptatum.'
  },
  {
    id: 23,
    url: '../../assets/photos/volcan.jpg',
    title: 'Volcan',
    author: 'Rodolphe Marbot',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, accusantium at dolorum commodi reiciendis aspernatur fugiat perspiciatis ipsam blanditiis corrupti quam. Assumenda corrupti a distinctio ipsam quas beatae, quasi voluptatum.'
  },
  {
    id: 25,
    url: '../../assets/photos/cat.png',
    title: 'Cat',
    author: 'Li',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, accusantium at dolorum commodi reiciendis aspernatur fugiat perspiciatis ipsam blanditiis corrupti quam. Assumenda corrupti a distinctio ipsam quas beatae, quasi voluptatum.'
  },
  {
    id: 30,
    url: '../../assets/photos/dog.jpg',
    title: 'Dog',
    author: 'Rémi de Pontonnier',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, accusantium at dolorum commodi reiciendis aspernatur fugiat perspiciatis ipsam blanditiis corrupti quam. Assumenda corrupti a distinctio ipsam quas beatae, quasi voluptatum.'
  },

]

  constructor() { }
}
