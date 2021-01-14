import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PhotosService } from '../services/photos.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private menu: MenuController,
    private photoService: PhotosService,
    private storage: Storage) { }

  savedImage = [];
  photoIndex = 0;

  photoDetails = this.photoService.data[this.photoIndex];

  displayImage() {
    this.savedImage.push(this.photoService.data[this.photoIndex]);
    console.log(this.savedImage);
    // this.storage.set('savedImage', this.savedImage);
  }


  openMenu() {
    this.menu.open();
  }

}
