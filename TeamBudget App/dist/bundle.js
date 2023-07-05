(function() {
  const e = {
    deals: [],
    totalExpenses: 0,
    annualBudget: 0,
    Deal: function(e, t) {
      this.dealName = e;
      this.budget = t;
    },
    addDeal: function(e, t) {
      const n = new this.Deal(e, t);
      this.deals.push(n);
      this.totalExpenses += t;
      this.annualBudget -= t;
    },
    displayBudgetResults: function() {
      const e = document.getElementById("dealList");
      const t = document.getElementById("budgetInfo");
      e.innerHTML = "";
      this.deals.forEach(function(t) {
        const n = document.createElement("li");
        n.textContent = `${t.dealName} - $${t.budget}`;
        e.appendChild(n);
      });
      this.annualBudget = 21206.25 - this.totalExpenses;
      const n = `
          <h3>Deals:</h3>
          <ul>${this.getDealListHTML()}</ul>
          <h3>Budget Information:</h3>
          <p>Total Expenses: $${this.totalExpenses}</p>
          <p>Annual Budget: $${this.annualBudget}</p>
        `;
      t.innerHTML = n;
      console.log("Deals:");
      console.log(this.deals);
      console.log("Budget Information:");
      console.log("Total Expenses:", this.totalExpenses);
      console.log("Annual Budget:", this.annualBudget);
    },
    getDealListHTML: function() {
      let e = "";
      this.deals.forEach(function(t) {
        e += `<li>${t.dealName} - $${t.budget}</li>`;
      });
      return e;
    }
  };

  document.getElementById("budgetForm").addEventListener("submit", function(t) {
    t.preventDefault();
    const n = document.getElementById("dealName").value;
    const a = parseInt(document.getElementById("budget").value);
    e.addDeal(n, a);
    e.displayBudgetResults();
    document.getElementById("dealName").value = "";
    document.getElementById("budget").value = "";
  });

  window.addEventListener("load", function() {
    setTimeout(function() {
      [
        { dealName: "Software License Renewal", budget: 5678 },
        { dealName: "Marketing Campaign Collaboration", budget: 6787 }
      ].forEach(function(t) {
        e.addDeal(t.dealName, t.budget);
      });
      e.displayBudgetResults();
    }, 2000);
  });
})();
