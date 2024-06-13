import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  constructor(public modal: ModalService) {
  }

  ngOnInit() {
  }

  closeModal() {
    console.log('closeModal');
    this.modal.toggleModal();
  }
}
