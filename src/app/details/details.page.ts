import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // récupérer la route active pour récup. le parametre id
  // on recup. notre PhotosService
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotosService,
    private storage: Storage) { }

  // on définit l'index du tableau à 0
  photoIndex = 0;

  testText = "Je suis un test en chaîne de caractère";
  savedImage = [];

  // déclaration de notre élément pour l'utiliser dans page
  // de details
  photoDetails = this.photoService.data[this.photoIndex];

  displayImage() {
    this.savedImage.push(this.photoService.data[this.photoIndex]);
    console.log(this.savedImage);
    this.storage.set('savedImage', this.savedImage);
  }

  async getStorage() {
    const data = await this.storage.get('savedImage');
    console.log('Données récupérées du Storage', data);
    if (data) this.savedImage = data;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      // on recherche l'index du tableau de photos correspondant
      // à l'id récupéré en paramètre
      this.photoIndex = this.photoService.data.findIndex(item => item.id == params.id);
      // console.log(this.photoService.data[this.photoIndex]);
      this.photoDetails = this.photoService.data[this.photoIndex];
      this.getStorage();
    });
  }

}
