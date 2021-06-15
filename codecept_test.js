Feature('codecept');

Scenario('test login', ({ I, mainPage, homePage }) => {
    I.amOnPage('/');
    mainPage.login('alena.tulatest@gmail.com', 'Password1');
    homePage.waitForAccount();
    I.see('ALENA BELYAVSKAYA');
});

Scenario('test search', ({ I, mainPage, homePage }) => {
    I.amOnPage('/');
    mainPage.login('alena.tulatest@gmail.com', 'Password1');
    homePage.waitForAccount();
    homePage.searchForItem('Large 2-Door Cabinet by Guillerme & Chambron');
    I.seeAttributesOnElements('.listing-name', { title: "Large 2-Door Cabinet by Guillerme & Chambron"});
});

Scenario('test listing view page', ({ I, mainPage, homePage, itemPage }) => {
    I.amOnPage('/');
    mainPage.login('alena.tulatest@gmail.com', 'Password1');
    homePage.waitForAccount();
    homePage.searchForItem('Large 2-Door Cabinet by Guillerme & Chambron');
    homePage.viewItem();
    itemPage.waitForItemTitle();
    I.see('Large 2-Door Cabinet by Guillerme & Chambron');
});

Scenario('view furniture dealers', ({ I, mainPage, homePage, furniturePage }) => {
    I.amOnPage('/');
    homePage.goToFurnitureDealers();
    furniturePage.waitForFurnitureDealerHeader();
    I.see('Dealers');
});

Scenario('test adding to favourites', ({ I, mainPage, homePage, itemPage }) => {
    I.amOnPage('/');
    mainPage.login('alena.tulatest@gmail.com', 'Password1');
    homePage.waitForAccount();
    homePage.searchForItem('Large 2-Door Cabinet by Guillerme & Chambron');
    homePage.viewItem();
    itemPage.waitForItemTitle();
    itemPage.addToFavourites();
    I.see('This item was added to Favorites.');
});
