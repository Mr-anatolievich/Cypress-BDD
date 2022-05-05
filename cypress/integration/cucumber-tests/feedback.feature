Feature: Send Feedback Form

    As a custumer I want to send my feedback via form

    Scenario: Submit Feedback Form
    Given I open feedback page
    When I fill feedback form
    And I click on send button 
    Then I see "sendFeedback.html" on the url