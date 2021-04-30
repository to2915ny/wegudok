import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.page.html',
  styleUrls: ['./app-modal.page.scss'],
})
export class AppModalPage implements OnInit {

  @Input() name: string;

  constructor(
    private modalCtr: ModalController,
  ) { }

  ngOnInit() { }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

}
