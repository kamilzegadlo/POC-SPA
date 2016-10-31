import { EasyJet2017FrontEndPage } from './app.po';

describe('easy-jet2017-front-end App', function() {
  let page: EasyJet2017FrontEndPage;

  beforeEach(() => {
    page = new EasyJet2017FrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
