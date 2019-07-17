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



  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }

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
        value: document.querySelector(DOMstrings.inputValue).value
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
        html = '<div class="item clearfix" id="expense-%id%> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }




      // Replace placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);


      //Insert the HTML into string 
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


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

  var ctrlAddItem = function () {
    var input, newItem;
    // 1. get the field input data 
    input = UIController.getInput();
    console.log(input)
    //2.add the item to the budget controller 
    newItem = budgetController.addItem(input.type, input.description, input.value);

    //3. add the new item to user interface 
    UICtrl.addListItem(newItem, input.type);

    //4. calculate the budget


    //5.display the budget
  };

  return {
    init: function () {
      console.log('application has started')
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();