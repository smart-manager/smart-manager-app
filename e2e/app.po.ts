export class SmartManagerAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('smart-manager-app-app h1')).getText();
  }
}
