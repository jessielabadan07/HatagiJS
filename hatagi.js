/**
 *
 *
 *
 *
**/

(function(HApp) {

	var Hatagi = (function() {

		var lists = [];

		function Hatagi(args) {
	  		var args = args || arguments;	  		
			for(var i = 0; i < args.length; i++) {
				lists.push(args[i]);
			}		

			console.log(lists);
		};

		Hatagi.prototype.init = function(args) { 			
			var args = args || arguments;
			for(var i = 0; i < args.length; i++) {
				this.lists.push(args[i]);
			}			
		};

		var instance;

		var _static = {

			name: 'Hatagi',

			getInstance: function (args) {
				if(instance === undefined) {
					instance = new Hatagi(args);
				}
				return instance;
			}

		}

		return _static;

  	})();		

  	HApp.init = function() {  		    		
		return Hatagi.getInstance( ([].slice.call(arguments[0])) );
  	};

})(window.HApp || (window.HApp = {}));
