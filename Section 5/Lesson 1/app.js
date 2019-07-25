// Budget Controller  
var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100)
    } else {
      this.percentage = -1;
    }
  }
  Expense.prototype.getPercentage = function () {
    return this.percentage;
  }
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
    percentage: -1

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
    deleteItem: function (type, id) {
      var ids, index;
      ids = data.allItems[type].map(function (current) {
        return current.id;
      });
      index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1)
      }
    },

    calculateBudget: function () {
      // calculate total income and expenses 
      calculateTotal('exp');
      calculateTotal('inc')
      //calculate the budget : income - expenses
      data.budget = data.totals.inc - data.totals.exp;
      //calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
      } else {
        data.percentage = -1;
      }

    },

    calculatePercentages: function () {
      data.allItems.exp.forEach(function (cur) {
        cur.calcPercentage(data.totals.inc);
      })
    },
    getPercentages: function () {
      var allPerc = data.allItems.exp.map(function (cur) {
        return cur.getPercentage();

      });
      return allPerc;
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.inc,
        totalExp: data.exp,
        percentage: data.percentage
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
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  }


  var formatNumber = (function (num, type) {
    var numSplit;
    num = Math.abs(num);

    num = num.toFixed(2);

    numSplit = num.split('.');
    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];


    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

  })

  var NodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i)
    }
  }
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either or inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      }
    },
    addListItem: function (obj, type) {
      // Create HTML string with placeholder text
      var html, newHtml, element;

      if (type === 'inc') {
        element = DOMstrings.incomeContainer
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

      }




      // Replace placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));


      //Insert the HTML into string 
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


    },

    deleteListItem: function (selectorId) {
      var element = document.getElementById(selectorId)
      element.parentNode.removeChild(element);
    },
    clearFields: function () {
      var fields, fieldsArr;

      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function (current, index, array) {
        current.value = "";
      });
      fieldsArr[0].focus();
    },



    displayBudget: function (obj) {
      var type;
      obj.budget > 0 ? type = 'inc' : type = 'exp';
      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
      document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '---';
      }
    },

    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);


      NodeListForEach(fields, function (current, index) {

        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });

    },


    displayMonth: function () {
      var now, months, year, month;
      now = new Date();
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December'];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
      // var christmas = new Date(2019,11,25)
    },

    changeType: function () {
      var fields = document.querySelectorAll(
        DOMstrings.inputType, +',' +
        DOMstrings.inputDescription + ',' +
        DOMstrings.inputValue,

      )
      NodeListForEach(fields, function (cur) {
        cur.classList.toggle('red-focus');
      })
      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.inputType).addEventListener('change', UIController.changeType

    )
  };

  var updateBudget = function () {
    //1. calculate the budget
    budgetController.calculateBudget();
    //2. Return the budget
    var budget = budgetController.getBudget();

    //3.display the budget
    UIController.displayBudget(budget);
  }

  var updatePercentages = function () {
    // Calc the percentages
    budgetController.calculatePercentages();
    // read them from the budget ctrl
    var percentages = budgetController.getPercentages();
    //Update the UI
    UIController.displayPercentages(percentages);
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

      // calculate and upadate percentages
      updatePercentages();
    };
  };
  var ctrlDeleteItem = function (e) {
    var itemID, splitID, type, ID;
    itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemID) {
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID = [1]);

      budgetController.deleteItem(type, ID);

      UIController.deleteListItem(itemID);

      updateBudget();
      // calculate and upadate percentages
      updatePercentages();
    }
  };

  return {
    init: function () {
      console.log('application has started')
      UIController.displayMonth();
      UIController.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();

    }
  }

})(budgetController, UIController);

controller.init();