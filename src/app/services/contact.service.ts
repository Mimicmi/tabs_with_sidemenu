import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contactData = [
    {
      id: 1,
      url: '',
      firstName: 'Rémi',
      lastName: 'Pontonnier',
      phone: '00 00 00 00 00',
      email: 'remi.pontonnier@mail.com',
      address: '15 rue Charles de Gaulles'
    },
    {
      id: 1,
      url: '',
      firstName: 'Rémi',
      lastName: 'Pontonnier',
      phone: '00 00 00 00 00',
      email: 'remi.pontonnier@mail.com',
      address: '15 rue Charles de Gaulles'

    },
    {
      id: 1,
      url: '',
      firstName: 'Rémi',
      lastName: 'Pontonnier',
      phone: '00 00 00 00 00',
      email: 'remi.pontonnier@mail.com',
      address: '15 rue Charles de Gaulles'

    },
    {
      id: 1,
      url: '',
      firstName: 'Rémi',
      lastName: 'Pontonnier',
      phone: '00 00 00 00 00',
      email: 'remi.pontonnier@mail.com',
      address: '15 rue Charles de Gaulles'

    }
  ]

  constructor() { }
}
