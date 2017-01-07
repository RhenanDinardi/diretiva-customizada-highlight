(function () {
  'use strict';

  angular
    .module('AngularStructure')
    .controller('HighlightController', HighlightController);

  HighlightController.$inject = ['$scope', '$http', '$sce'];

  /**
   * @constructor By Rhenan Dinardi 27-09-2016
   * */
  function HighlightController($scope, $http, $sce) {

	/**
	* Variables
	*/
	$scope.search = "";
	
	$scope.text = "<p>Like the legend of the phoenix<br>All ends with beginnings<br>What keeps the planet spinning (uh)<br>The force of love beginning</p><p>We've come too far to give up who we are<br>So let's raise the bar and our cups to the stars</p><p>She's up all night 'til the sun<br>I'm up all night to get some<br>She's up all night for good fun<br>I'm up all night to get lucky</p><p>We're up all night 'til the sun<br>We're up all night to get some<br>We're up all night for good fun<br>We're up all night to get lucky</p><p>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky</p><p>The present has no ribbon<br>Your gift keeps on giving,<br>What is this I'm feeling?<br>If you wanna leave I'm with it (ah)</p><p>We've come too far to give up who we are<br>So let's raise the bar and our cups to the stars</p><p>She's up all night 'til the sun<br>I'm up all night to get some<br>She's up all night for good fun<br>I'm up all night to get lucky</p><p>We're up all night 'til the sun<br>We're up all night to get some<br>We're up all night for good fun<br>We're up all night to get lucky</p><p>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky</p><p>She's up all night 'til the sun<br>I'm up all night to get some<br>She's up all night for good fun<br>I'm up all night to get lucky</p><p>We're up all night 'til the sun<br>We're up all night to get some<br>We're up all night for good fun<br>We're up all night to get lucky</p><p>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky</p><p>She's up all night 'til the sun<br>I'm up all night to get some<br>She's up all night for good fun<br>I'm up all night to get lucky</p><p>We're up all night 'til the sun<br>We're up all night to get some<br>We're up all night for good fun<br>We're up all night to get lucky</p><p>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky</p><p>We've come too far to give up who we are<br>So let's raise the bar and our cups to the stars</p><p>She's up all night 'til the sun<br>I'm up all night to get some<br>She's up all night for good fun<br>I'm up all night to get lucky</p><p>We're up all night 'til the sun<br>We're up all night to get some<br>We're up all night for good fun<br>We're up all night to get lucky</p><p>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky</p><p>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky<br>We're up all night to get lucky</p>";
  
		$scope.music = [
		"Like the legend of the phoenix",
		"All ends with beginnings",
		"What keeps the planet spinning (uh)",
		"The force of love beginning",
		"We've come too far to give up who we are",
		"So let's raise the bar and our cups to the stars",
		"She's up all night 'til the sun",
		"I'm up all night to get some",
		"She's up all night for good fun",
		"I'm up all night to get lucky",
		"We're up all night 'til the sun",
		"We're up all night to get some",
		"We're up all night for good fun",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"The present has no ribbon",
		"Your gift keeps on giving,",
		"What is this I'm feeling?",
		"If you wanna leave I'm with it (ah)",
		"We've come too far to give up who we are",
		"So let's raise the bar and our cups to the stars",
		"She's up all night 'til the sun",
		"I'm up all night to get some",
		"She's up all night for good fun",
		"I'm up all night to get lucky",
		"We're up all night 'til the sun",
		"We're up all night to get some",
		"We're up all night for good fun",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"She's up all night 'til the sun",
		"I'm up all night to get some",
		"She's up all night for good fun",
		"I'm up all night to get lucky",
		"We're up all night 'til the sun",
		"We're up all night to get some",
		"We're up all night for good fun",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"She's up all night 'til the sun",
		"I'm up all night to get some",
		"She's up all night for good fun",
		"I'm up all night to get lucky",
		"We're up all night 'til the sun",
		"We're up all night to get some",
		"We're up all night for good fun",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We've come too far to give up who we are",
		"So let's raise the bar and our cups to the stars",
		"She's up all night 'til the sun",
		"I'm up all night to get some",
		"She's up all night for good fun",
		"I'm up all night to get lucky",
		"We're up all night 'til the sun",
		"We're up all night to get some",
		"We're up all night for good fun",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
		"We're up all night to get lucky",
	];
  
    /**
     * @description Configurações iniciais
     * */
    function init() {
		
		console.log("Hello, yes this is dog.");		
		
    }
	
	/**
     * @description Trata a string de HTML para ser renderizada na tela
     * */
	$scope.trustedHtml = function (_text) {
		
        return $sce.trustAsHtml(_text);
	}
			
    init();
  }
})();