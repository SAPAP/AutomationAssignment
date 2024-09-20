
class ConvosoHomePage{

    elements = {

        callcenterDropDown : () => cy.contains("Call Center"),

        dnc : () => cy.contains("DNC"),

        uploadDNC : () => cy.contains("Upload DNC"),

        filterBySelect : () => cy.get('select').eq(0),

        filterValField : () => cy.get('[placeholder="Click to select"]').eq(1),

        filterValue : (value) => cy.contains(value),

        searchBtn : () => cy.xpath("//button[contains(text(),'Search')]"),

        ellipsesMenu : () => cy.xpath("//button[@data-toggle='dropdown']"),

        editBtn : () => cy.contains('Edit'),

        phoneNumber : () => cy.xpath("//div[@class='row form-group']//input"),

        campaign : () => cy.get('select').eq(1),

        applyChanges : () => cy.contains('Apply Changes')

    }

    navigateToDncManagePage(){

        this.elements.callcenterDropDown().click();

        this.elements.dnc().click();

    }

    uploadDNC(){
        this.elements.uploadDNC().should("be.visible").click();
    }

    searchDnc(filter,value) {
        this.elements.filterBySelect().select(filter);
        this.elements.filterValField().click();
        this.elements.filterValue(value).click();
        this.elements.searchBtn().click();
    }

    editDNC(campaign,phone){
        this.elements.ellipsesMenu().its('length').then((count)=>{
            //pick second last phone number from search list
            this.elements.ellipsesMenu().eq(count-2).click();
            this.elements.editBtn().click({force: true});
            this.elements.campaign().select(campaign);
            this.elements.phoneNumber().clear().type(phone);
            this.elements.applyChanges().click();
        })
    }
}
module.exports = new ConvosoHomePage();

