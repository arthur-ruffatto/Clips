import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  @Input() modalID = ''

  constructor(public modal: ModalService, public el: ElementRef) {
  }

  ngOnInit() {
    //this is moving the app-auth-modal from the app.component to the body
    document.body.appendChild(this.el.nativeElement)
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
}
