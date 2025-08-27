import { Component, input } from '@angular/core';
import { Contact } from '../../interfaces/contacto';

@Component({
  selector: 'app-contact-list-item',
  imports: [],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  // contacto = input.required<string>();
  index = input.required<number>();
  contacto = input.required<Contact>();

}
