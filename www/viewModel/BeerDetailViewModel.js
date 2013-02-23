/// <reference path="..//intellisense.js" />

/*globals $ application ko localStorage */

function BeerDetailViewModel() {
  /// <summary>
  /// A view model for our homescreen app
  /// </summary>

  var that = this;

  // --- properties

  this.template = "beerDetailView";
  this.userMessage = "Welkom..bier?"; //ko.observable();
  this.recentBeers = ko.observableArray();

  // --- public functions

  this.loadState = function () {
    /// <summary>
    /// Loads the persisted view model state from local storage
    /// </summary>

    var state = localStorage.getItem("state");
    if (typeof (state) === 'string') {
      $.each(state.split(","), function (index, item) {
        if (item.trim() !== "") {
          that.recentBeers.push(item);
        }
      });
    }
  };

  // --- private functions

  function saveState() {
    /// <summary>
    /// Saves the view model state to local storage
    /// </summary>

    localStorage.setItem("state", that.recentBeers().toString());
  }
}
