const { I } = inject();

module.exports = {
    account : '.givenNameAccountSelector',
    searchField : '#searchTextbox',
    searchedProductTitle : '.listing-name',
    lnkFurnitureMenu : '#listing_menu_3',
    lnkFurnitureDealers : 'a[href*="dealers/furniture?site_type=1"]',

    waitForAccount() {
        I.waitForElement(this.account, 5);
    },

    searchForItem(listingName) {
        I.waitForElement(this.searchField, 5);
        I.fillField(this.searchField, listingName);
        I.pressKey('Enter');
        I.waitForElement(this.searchedProductTitle, 10);
    },

    viewItem() {
        I.click(this.searchedProductTitle);
    },

    goToFurnitureDealers() {
        I.moveCursorTo(this.lnkFurnitureMenu);
        I.waitForElement(this.lnkFurnitureDealers, 5);
        I.click(this.lnkFurnitureDealers);
    },
}
