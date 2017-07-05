import { ExempleAngularPage } from './app.po';

describe('exemple-angular App', () => {
  let page: ExempleAngularPage;

  beforeEach(() => {
    page = new ExempleAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
