const { I } = inject();

module.exports = {
    lblDealersHeader : '#facetedPageTitle > h2',

    waitForFurnitureDealerHeader() {
        I.waitForElement(this.lblDealersHeader, 5);
    },

}
