import { MobileAppAngularPage } from './app.po';

describe('mobile-app-angular App', () => {
  let page: MobileAppAngularPage;

  beforeEach(() => {
    page = new MobileAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
