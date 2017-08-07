/**
 * Created by asus-pc on 2017/8/6 0006.
 */
export class FILMDATA {
  title: string;
  posterUrl: string;
  goodTime: number;
  badTime: number;
  freshRate = 100;
  // freshRate: number = parseFloat((this.goodTime/(this.goodTime+this.badTime)).toFixed(3));

  // constructor() {
  //   this.freshRate = parseFloat((this.goodTime/(this.goodTime+this.badTime)).toFixed(3))
  // }
}

export let FilmData: FILMDATA[] = [
  {title: '战狼2', posterUrl: '../assets/img/poster/zhanlang2.jpg', goodTime: 0, badTime: 0, freshRate: 100},
  {title: '闪光少女', posterUrl: '../assets/img/poster/shanguangshaonv.jpg', goodTime: 0, badTime: 0, freshRate: 100},
  {title: '绣春刀', posterUrl: '../assets/img/poster/xiuchundao.jpg', goodTime: 0, badTime: 0, freshRate: 100},
];
