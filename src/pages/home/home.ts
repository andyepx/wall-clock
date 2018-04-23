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
    setInterval(() => {
      this.insomnia.keepAwake()
        .then(() => {
          this.currentTime = this.getTime();
          this.currentDate = this.getDate();
        }, () => {

        })
    }, 1000 * 60)
  }

  private getTime(): string {
    const x = new Date();
    const h = x.getHours() < 10 ? `0${x.getHours()}` : x.getHours();
    const m = x.getMinutes() < 10 ? `0${x.getMinutes()}` : x.getMinutes();
    return `${h}:${m}`;
  }

  private getDate(): string {
    const x = new Date();
    const d = x.getDate() < 10 ? `0${x.getDate()}` : x.getDate();
    const m = (x.getMonth() + 1) < 10 ? `0${(x.getMonth() + 1)}` : (x.getMonth() + 1);
    return `${d}/${m}/${x.getFullYear()}`;
  }

}
