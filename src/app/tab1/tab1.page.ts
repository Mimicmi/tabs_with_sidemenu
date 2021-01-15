import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PhotosService } from '../services/photos.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private menu: MenuController,
    private photoService: PhotosService,
    private storageService: StorageService) { }

  // savedImage = [];
  // photoIndex = 0;

  // photoDetails = this.photoService.data[this.photoIndex];

  // displayImage() {
  //   this.savedImage.push(this.photoService.data[this.photoIndex]);
  //   console.log(this.savedImage);
  //   // this.storage.set('savedImage', this.savedImage);
  // }

  // async getStorage() {
  //   const data = await this.storage.get('savedImage');
  //   console.log('Données récupérées du Storage', data);
  //   if (data) this.savedImage = data;
  // }

  ngOnInit() {
    this.storageService.getFavPhotos().then((fav) => {
      console.log('ngOnInit', fav);
    });
    // this.getStorage();
  }

  ionViewWillEnter() {
    this.storageService.getFavPhotos().then((fav) => {
      console.log('ionViewWillEnter', fav);
    });
  }



  openMenu() {
    this.menu.open();
  }

}
