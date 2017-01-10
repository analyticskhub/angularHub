import { AngularHubPage } from './app.po';

describe('angular-hub App', function() {
  let page: AngularHubPage;

  beforeEach(() => {
    page = new AngularHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
