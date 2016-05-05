import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SmartManagerAppComponent } from '../app/sm-app.component';

beforeEachProviders(() => [SmartManagerAppComponent]);

describe('App: SmartManagerApp', () => {
  it('should create the app',
      inject([SmartManagerAppComponent], (app: SmartManagerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sm-app works!\'',
      inject([SmartManagerAppComponent], (app: SmartManagerAppComponent) => {
    expect(app.title).toEqual('sm-app works!');
  }));
});
