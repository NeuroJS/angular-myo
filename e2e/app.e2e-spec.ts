import { AngularMyoPage } from './app.po';

describe('angular-myo App', () => {
  let page: AngularMyoPage;

  beforeEach(() => {
    page = new AngularMyoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
