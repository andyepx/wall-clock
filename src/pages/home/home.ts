import {Component} from '@angular/core';
import {Insomnia} from '@ionic-native/insomnia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private currentTime: string = "";
  private currentDate: string = "";
  private colors: string[] = ["#A0126C", "#a02e31", "#6ba037", "#20a0a0", "#7da00d", "#992fa0", "#a01720"];
  private currentColor: string = "#A0126C";
  private colorIndex: number = 0;

  private months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(private insomnia: Insomnia) {
    this.currentTime = this.getTime();
    this.currentDate = this.getDate();
  }

  nextColor() {
    if (this.colorIndex < this.colors.length - 1) {
      this.colorIndex++;
    } else {
      this.colorIndex = 0;
    }
    this.currentColor = this.colors[this.colorIndex];
  }

  ngOnInit() {
    setInterval(() => {
      this.insomnia.keepAwake()
        .then(() => {
          this.currentTime = this.getTime();
          this.currentDate = this.getDate();
        }, () => {
        })
    }, 1000 * 30)
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
    return `${d} ${this.months[x.getMonth()]} ${x.getFullYear()}`;
  }

}
