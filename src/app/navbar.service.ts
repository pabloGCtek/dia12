import { Injectable } from '@angular/core';
import { claseItem } from './model/claseItem';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  listaNavs: claseItem[]=[new claseItem("Main","favorite",""),
                          new claseItem("Contact Us","favorite","/contact"),
                          new claseItem("Gallery","favorite","/gallery")]
  constructor() { }
}
