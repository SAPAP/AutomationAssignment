
class DNCUploadPage{

    elements = {

        phoneNumber : () => cy.get("#number"),

        country : () => cy.get('select').eq(3),

        compaign : () => cy.get('select').eq(4),

        addBtn : () => cy.xpath("//button[contains(text(),'add')]"),

        addSuccessMsg : (number) => cy.contains(`Added DNC number ${number} to Global DNC List`)
    }

    addSingleNumber(number){

        this.elements.country().select('+1 United States');

        this.elements.compaign().select('Global DNC List');

        this.elements.phoneNumber().clear().type(number);

        this.elements.addBtn().click();

        this.elements.addSuccessMsg(number).should("be.visible");

    }
}
module.exports = new DNCUploadPage();

