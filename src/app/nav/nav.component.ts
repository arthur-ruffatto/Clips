import { Component } from '@angular/core';
import { ModalService } from "../services/modal.service";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private router: Router
  ) {
  }

  openModal($event: Event) {
    $event.preventDefault();

    this.modal.toggleModal('auth');
  }

  async logout($event: Event) {
    $event.preventDefault();
    await this.auth.logoutUser()
    await this.router.navigateByUrl('/');
  }
}
