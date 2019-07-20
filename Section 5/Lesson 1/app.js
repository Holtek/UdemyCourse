// Budget Controller  
var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0
    data.allItems[type].forEach(function (cur) {
      sum += cur.value
    });
    data.totals[type] = sum;
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    precentage: -1

  }
  return {
    addItem: function (type, des, val) {
      var newItem, ID;
      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      //Create new item based on 'inc ' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
      // Push it all into our data structure 
      data.allItems[type].push(newItem);
      //Return the new element 
      return newItem;
    },

    calculateBudget: function () {
      // calculate total income and expenses 
      calculateTotal('exp');
      calculateTotal('inc')
      //calculate the budget : income - expenses
      data.budget = data.totals.inc - data.totals.exp;
      //calculate the precentage of income that we spent
      if (data.totals.inc > 0) {
        data.precentage = Math.round((data.totals.exp / data.totals.inc) * 100)
      } else {
        data.precentage = -1;
      }

    },
    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.inc,
        totalExp: data.exp,
        precentage: data.precentage
      }
    },
    testing: function () {
      console.log(data);
    }
  }

})();


//UI controller
var UIController = (function () {


  var DOMstrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',

  }

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either or inc or exp
        description: document.querySelector(DOMstrings.inputDesc).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      }
    },
    addListItem: function (obj, type) {
      // Create HTML string with placeholder text
      var html, newHtml, element;

      if (type === 'inc') {
        element = DOMstrings.incomeContainer
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

      }




      // Replace placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);


      //Insert the HTML into string 
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


    },
    clearFields: function () {
      var fields, fieldsArray;
      fields = document.querySelectorAll(DOMstrings.inputDesc + ', ' + DOMstrings.inputValue);

      fieldsArray = Array.prototype.slice.call(fields)

      fieldsArray.forEach(function (current, index, array) {
        current.value = "";
      });
      fieldsArray[0].focus();

    },

    getDOMStrings: function () {
      return DOMstrings
    }
  }

})();

//Global APP Controller
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UIController.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      };
    });
  };

  var updateBudget = function () {
    //1. calculate the budget
    budgetController.calculateBudget();
    //2. Return the budget
    var budget = budgetController.getBudget();

    //3.display the budget
    console.log(budget)
  }

  var ctrlAddItem = function () {
    var input, newItem;
    // 1. get the field input data 
    input = UIController.getInput();
    console.log(input)

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      //2.add the item to the budget controller 
      newItem = budgetController.addItem(input.type, input.description, input.value);

      //3. add the new item to user interface 
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear the fields
      UIController.clearFields;

      //Calculate and update budget
      updateBudget();
    };
  };

  return {
    init: function () {
      console.log('application has started')
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();