(function () {
  // Budget tracker object
  const budgetTracker = {
    deals: [],
    totalExpenses: 0,
    annualBudget: 0,

    // Constructor for Deal object
    Deal: function (dealName, budget, vendor) {
      this.dealName = dealName;
      this.budget = budget;
      this.vendor = vendor;
    },

    // Method to add a new deal
    addDeal: function (dealName, budget, vendor) {
      const deal = new this.Deal(dealName, budget, vendor);
      this.deals.push(deal);
      this.totalExpenses += budget;
      this.annualBudget -= budget;
    },

    // Method to display the budget results on the webpage
    displayBudgetResults: function () {
      const dealList = document.getElementById('dealList');
      const budgetInfo = document.getElementById('budgetInfo');

      // Clear existing deal list
      dealList.innerHTML = '';

      // Add each deal to the deal list
      this.deals.forEach(function (deal) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${deal.dealName}</td>
          <td>${deal.budget}</td>
          <td>${deal.vendor}</td>
        `;
        dealList.appendChild(tr);
      });

      // Calculate the Annual Budget
      this.annualBudget = 21206.25 - this.totalExpenses;

      // Display the budget information
      const budgetInfoHTML = `
        <h3>Deals:</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Deal Name</th>
              <th>Deal Amount</th>
              <th>Vendor</th>
            </tr>
          </thead>
          <tbody>${this.getDealListHTML()}</tbody>
        </table>
        <h3>Budget Information:</h3>
        <p>Total Expenses: $${this.totalExpenses}</p>
        <p>Annual Budget: $${this.annualBudget}</p>
      `;
      budgetInfo.innerHTML = budgetInfoHTML;

      // Log the budget information in the console
      console.log('Deals:');
      console.log(this.deals);
      console.log('Budget Information:');
      console.log('Total Expenses:', this.totalExpenses);
      console.log('Annual Budget:', this.annualBudget);
    },

    // Helper method to generate HTML for the deal list
    getDealListHTML: function () {
      let dealListHTML = '';
      this.deals.forEach(function (deal) {
        dealListHTML += `
          <tr>
            <td>${deal.dealName}</td>
            <td>$${deal.budget}</td>
            <td>${deal.vendor}</td>
          </tr>
        `;
      });
      return dealListHTML;
    },
  };

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    // Get input values
    const dealName = document.getElementById('dealName').value;
    const budget = parseInt(document.getElementById('budget').value);
    const vendor = document.getElementById('vendor').value;

    // Add the deal to the budget tracker
    budgetTracker.addDeal(dealName, budget, vendor);

    // Display the updated budget results
    budgetTracker.displayBudgetResults();

    // Reset the form
    document.getElementById('dealName').value = '';
    document.getElementById('budget').value = '';
    document.getElementById('vendor').value = '';
  }

  // Add form submission event listener
  const budgetForm = document.getElementById('budgetForm');
  budgetForm.addEventListener('submit', handleFormSubmit);

  // Fetch and display deals when the page loads
  function fetchAndDisplayDeals() {
    // Simulate fetching deals from an API
    setTimeout(function () {
      const deals = [
        { dealName: 'Software License Renewal', budget: 5678, vendor: 'Vendor A' },
        { dealName: 'Marketing Campaign Collaboration', budget: 6787, vendor: 'Vendor B' },
      ];

      // Add the fetched deals to the budget tracker
      deals.forEach(function (deal) {
        budgetTracker.addDeal(deal.dealName, deal.budget, deal.vendor);
      });

      // Display the budget results
      budgetTracker.displayBudgetResults();
    }, 2000);
  }

  // Fetch and display deals when the page loads
  window.addEventListener('load', fetchAndDisplayDeals);
})();
