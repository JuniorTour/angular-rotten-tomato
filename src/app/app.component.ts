import {Component, OnInit} from '@angular/core';

import {FILMDATA, FilmData} from './film-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent implements OnInit {
  title = 'app';
  films: FILMDATA[] = FilmData;
  inputName = '神偷奶爸';
  inputUrl = '../assets/img/poster/shentounaiba.jpg';

  ngOnInit(): void {
    const localData = window.localStorage.getItem('FilmData');
    if (localData) {
      this.films = JSON.parse(localData);
    }
  }

  addNew(): void {
    const newFilm: FILMDATA = {
      title: this.inputName,
      posterUrl: this.inputUrl,
      goodTime: 0,
      badTime: 0,
      freshRate: 100
    };
    this.films.push(newFilm);
    // 更新数据到local storage
    window.localStorage.setItem('FilmData', JSON.stringify(this.films));
  }

  freshFilm(targetFilm: FILMDATA): void {
    targetFilm.goodTime++;
    targetFilm.freshRate = this.getRate(targetFilm.goodTime, targetFilm.badTime);
    console.log(targetFilm);
  }

  rottenFilm(targetFilm: FILMDATA): void {
    targetFilm.badTime++;
    targetFilm.freshRate = this.getRate(targetFilm.goodTime, targetFilm.badTime);
  }

  getRate(goodTime, badTime): number {
    return parseFloat(((goodTime / (goodTime + badTime)) * 100).toFixed(3));
  }

  getRateClass(rate: number): string {
    // pipe ???
    if (rate >= 90) {
      return 'rate-high';
    } else if (rate <= 70) {
      return 'rate-middle';
    }
  }
}
