import { AngularSassProjectPage } from './app.po';

describe('angular-sass-project App', function() {
  let page: AngularSassProjectPage;

  beforeEach(() => {
    page = new AngularSassProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
