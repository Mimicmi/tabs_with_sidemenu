import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';
import { StorageService } from '../services/storage.service';

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
    private storageServ: StorageService) { }

  // on définit l'index du tableau à 0
  photoIndex = 0;

  favArray = [];



  // testText = "Je suis un test en chaîne de caractère";
  // savedImage = [];

  // déclaration de notre élément pour l'utiliser dans page
  // de details
  photoDetails = this.photoService.data[this.photoIndex];
  addedToFav = false;

  async addtoFavorites() {
    const data = await this.storageServ.getFavPhotos();
    // let data = await this.storageServ.getFavPhotos();

    // if (!data) data = [];
    // data.push(this.photoDetails);
    this.favArray = data ? data : [];
    this.favArray.push(this.photoDetails);
    this.storageServ.setFavPhotos(this.favArray);
    this.addedToFav = true;
    console.log("added to fav", this.favArray);
  }

  async removeFromFav(id) {
    const index = await this.storageServ.getFavById(id);
    const data = await this.storageServ.getFavPhotos();
    data.splice(index, 1);
    this.storageServ.setFavPhotos(data);
    this.addedToFav = false;
    console.log("Remove from fav", data);
  }

  // displayImage() {
  //   this.savedImage.push(this.photoService.data[this.photoIndex]);
  //   console.log(this.savedImage);
  //   this.storage.set('savedImage', this.savedImage);
  // }

  // deleteImage(i) {
  //   this.savedImage.splice(i, 1);
  //   this.storage.set('savedImage', this.savedImage);
  // }

  // async getStorage() {
  //   const data = await this.storage.get('savedImage');
  //   console.log('Données récupérées du Storage', data);
  //   if (data) this.savedImage = data;
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      // on recherche l'index du tableau de photos correspondant
      // à l'id récupéré en paramètre
      this.photoIndex = this.photoService.data.findIndex(item => item.id == params.id);
      // console.log(this.photoService.data[this.photoIndex]);
      this.photoDetails = this.photoService.data[this.photoIndex];
      // this.getStorage();

      this.storageServ.getFavById(params.id).then((index) => {
        console.log('La photo est dans les favoris ?', index);
        if (index != -1) this.addedToFav = true;
      });

    });
  }

}
