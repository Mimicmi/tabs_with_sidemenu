import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  contactList = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactList = this.contactService.contactData;
  }
}
