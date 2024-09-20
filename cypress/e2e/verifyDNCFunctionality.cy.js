import loginPage from "../DNCPageObject/loginPage";
import homePage from "../DNCPageObject/ConvosoHomePage";
import DNCUploadPage from "../DNCPageObject/DNCUploadPage";

describe('Call Center DNC phone number CRUD Test Suit', () => {
  before(() => {
    cy.visit("/login");

    cy.fixture("credential.json").then((loginData) => {
      loginPage.login(loginData.email, loginData.password);
    });
  });

  it('Verify phone number update and delete functionality for Call Center -> DNC flow', () => {
    homePage.navigateToDncManagePage();
    homePage.uploadDNC();
    
    cy.fixture("phoneNumbers.json").then((data) => {
      data.numbers.forEach(number => {
        DNCUploadPage.addSingleNumber(number);
      });
    });

    homePage.navigateToDncManagePage();
    homePage.searchDnc('Campaign', 'Global DNC');
    homePage.editDNC('Automation Campaign', '8884567777');
    homePage.navigateToDncManagePage();
    homePage.searchDnc('Campaign', 'Automation Campaign');
    cy.contains('8884567777').should('be.visible');
  });

  after(() => {
    // Make the POST request to fetch all phone numbers uploaded in system using UI automation
    cy.request({
      method: 'POST',
      url: 'https://api.convoso.com/v1/dnc/search?auth_token=25qjvfl2uyepx5wak4wltaq91nzpgrm8&id=&campaign_id=&phone_number=&phone_code=1&insert_date=&offset=&limit=' // URL to POST to
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);  // Assert that the status code is 200
      expect(response.body).to.have.property('data');
      
      let jsonData = JSON.parse(JSON.stringify(response.body));
      jsonData.data.entries.forEach(entry => {
        cy.log(entry.campaign_id + ':' + entry.phone_number);

        // Make the POST request to delete all DNC phone numbers for Global and Automation campaigns
        cy.request({
          method: 'POST',
          url: `https://api.convoso.com/v1/dnc/delete?auth_token=25qjvfl2uyepx5wak4wltaq91nzpgrm8&phone_number=${entry.phone_number}&phone_code=1&campaign_id=${entry.campaign_id}&update_lead_status=no&lead_status=`
        }).then((response) => {
          cy.log(JSON.stringify(response.body));
          expect(response.status).to.eq(200);  // Assert that the status code is 200
        });
      });
    });
  });
});
