const { I } = inject();

module.exports = {
    itemViewTitleString : '.listing-details-title',
    addToFavBtn : '#SaveToFavorites',
    addedToFavNotification : '.cms_notify',

    waitForItemTitle() {
        I.waitForElement(this.itemViewTitleString, 5);
    },

    addToFavourites() {
        I.click(this.addToFavBtn);
        I.waitForElement(this.addedToFavNotification, 5);
    },
}
