import { SmartManagerAppPage } from './app.po';

describe('smart-manager-app App', function() {
  let page: SmartManagerAppPage;

  beforeEach(() => {
    page = new SmartManagerAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('smart-manager-app works!');
  });
});
