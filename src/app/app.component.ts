import {Component} from '@angular/core';

import {FILMDATA, FilmData} from './film-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {
  title = 'app';
  films: FILMDATA[] = FilmData;
  inputName: string;
  inputUrl: string;

  addNew(): void {
    let newFilm: FILMDATA = {
      title: this.inputName,
      posterUrl: this.inputUrl,
      goodTime: 0,
      badTime: 0,
      freshRate:100
    };
    this.films.push(newFilm);
  }
  freshFilm(targetFilm:FILMDATA): void {
    targetFilm.goodTime++;
    window.localStorage.setItem('goodTime', '1');
    targetFilm.freshRate = this.getRate(targetFilm.goodTime,targetFilm.badTime);
    console.log(targetFilm);
  }
  rottenFilm(targetFilm:FILMDATA): void {
    targetFilm.badTime++;
    targetFilm.freshRate =this.getRate(targetFilm.goodTime,targetFilm.badTime);
  }
  getRate(goodTime,badTime):number {
    return parseFloat(((goodTime/(goodTime+badTime))*100).toFixed(3))
  }
}
