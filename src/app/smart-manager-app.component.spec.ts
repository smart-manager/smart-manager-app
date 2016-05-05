import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SmartManagerAppAppComponent } from '../app/smart-manager-app.component';

beforeEachProviders(() => [SmartManagerAppAppComponent]);

describe('App: SmartManagerApp', () => {
  it('should create the app',
      inject([SmartManagerAppAppComponent], (app: SmartManagerAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'smart-manager-app works!\'',
      inject([SmartManagerAppAppComponent], (app: SmartManagerAppAppComponent) => {
    expect(app.title).toEqual('smart-manager-app works!');
  }));
});
