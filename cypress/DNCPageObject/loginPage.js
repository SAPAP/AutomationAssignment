
class loginPage{

    elements = {

        usernameInput : () => cy.get("#username"),

        passwordInput : () => cy.get("#password"),

        signInBtn : () => cy.get("#signin-form_id"),

        warningClose: () => cy.xpath("//div[@class = 'modal-footer']/button[@data-dismiss = 'modal'][2]")

    }

    login(email, password){

        this.elements.usernameInput().clear().type(email);

        this.elements.passwordInput().clear().type(password);

        this.elements.signInBtn().submit();

        this.elements.warningClose().click();

        cy.contains(email).should("be.visible");

    }
}
module.exports = new loginPage();

