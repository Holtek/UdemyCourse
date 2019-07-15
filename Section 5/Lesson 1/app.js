// Budget Controller  
var budgetController = (function () {


})();


//UI controller
var UIController = (function () {

  var DOMstrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either or inc or exp
        description: document.querySelector(DOMstrings.inputDesc).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    getDOMStrings: function () {
      return DOMstrings
    }
  }

})();

//Global APP Controller
var controller = (function (budgetCtrl, UICtrl) {
  var DOM = UIController.getDOMStrings();

  var ctrlAddItem = function () {
    // 1. get the field input data 
    var input = UIController.getInput();
    console.log(input);

    //2.add the item to the budget controller 


    //3. add the new item to user interface 


    //4. calculate the budget


    //5.display the budget
  };

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  })
})(budgetController, UIController);