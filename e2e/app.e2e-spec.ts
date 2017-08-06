import { RottenTomatoPage } from './app.po';

describe('rotten-tomato App', () => {
  let page: RottenTomatoPage;

  beforeEach(() => {
    page = new RottenTomatoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
