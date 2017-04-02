import { MyTestProjectPage } from './app.po';

describe('my-test-project App', () => {
  let page: MyTestProjectPage;

  beforeEach(() => {
    page = new MyTestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
