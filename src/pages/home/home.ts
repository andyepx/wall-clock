import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Insomnia} from '@ionic-native/insomnia';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private currentTime: string = "";
  private currentDate: string = "";

  constructor(public navCtrl: NavController,
              private insomnia: Insomnia) {
    this.currentTime = this.getTime();
    this.currentDate = this.getDate();
  }

  ngOnInit() {
    this.insomnia.keepAwake()
      .then(() => {
        setTimeout(() => {
          this.currentTime = this.getTime();
          this.currentDate = this.getDate();
        }, 1000 * 60)
      }, () => {

      })
  }

  private getTime(): string {
    const x = new Date();
    return x.getHours() + ":" + x.getMinutes();
  }

  private getDate(): string {
    const x = new Date();
    return x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
  }

}
