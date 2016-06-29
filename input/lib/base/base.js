KM.InputBase = BlazeComponent.extendComponent(function(data){
	var input = {};
	if(data){
	  _.each(data.hash, function(value, key) {
	    input[key] = value;
	  });
	}
	
	input.idList = input.ids || undefined; // N/A 
	input.classList = input.classList || undefined; // N/A
	
	input.charCounter = (input.charCounter === true) ? true: false;
	
	input.floatLabel = (input.floatLabel === false) ? false: true;
	input.label = input.label || undefined;
	
	input.cols = input.cols || undefined;
	input.rows = input.rows || 2;
	
	input.disabled = (input.disabled === true) ? true: false;
	input.multiple = (input.multiple === true) ? true: false;
	input.autofocus = (input.autofocus === true) ? true: false;
	input.autocomplete = (input.autocomplete === true) ? true: false;
	
	input.max = input.max || undefined;
	input.min = input.min || undefined;	
	input.maxlength = input.maxlength || undefined;
	
	input.type = input.type || 'text'; //email, text, search, password, number
	input.value = input.value || undefined;
	
	this.input = input;
},{
	onRendered: function() {		
		this._charCounter();
	},
	
	/**
	 * @private
	 * @event
	 */
	_onTextInput: function(event) {
		this._charCounter();
		this._toggleLabel();
	},
	
	/**
	 * @private
	 * @function
	 */
	_charCounter: function() {
		if(this.input.charCounter) {
			var input = this.input,
					counter = this.find('.km-input__counter');
					parent = this.find('.km-input') || this.find('.km-textarea'),
					count = this.find('.km-input input') || this.find('.km-textarea textarea'),
					counterText = count.value.length.toString();
			
			if(input.maxlength) {
				var limit = '/'+input.maxlength;
				counterText = counterText.concat(limit.toString());
			}
			
			if(!counter) {
				counter = document.createElement('span'),
				counter.classList.add('km-input__counter');
				this.insertDOMElement(parent, counter, null);
			}
				
			counter.innerHTML = counterText;
		}
	},
	
	/**
	 * @private
	 * @function
	 * 
	 * hide label when input
	 */
	_toggleLabel: function() {
		if(!this.input.floatLabel) {
			var noFloatInput = this.find('.km-input__label--no-float input'),
					noFloatTextArea= this.find('.km-input__label--no-float textarea');
			
			if(noFloatInput) {
				var isEmpty = noFloatInput.value == null || noFloatInput.value == '';		
				if(!isEmpty) {
					noFloatInput.nextElementSibling.classList.add('km-input__label--hide');
				}else{
					noFloatInput.nextElementSibling.classList.remove('km-input__label--hide');
				}
			}else if(noFloatTextArea) {
				var isEmpty = noFloatTextArea.value == null || noFloatTextArea.value == '';	
				if(!isEmpty) {
					noFloatTextArea.nextElementSibling.classList.add('km-input__label--hide');
				}else{
					noFloatTextArea.nextElementSibling.classList.remove('km-input__label--hide');
				}
			}
		}
	},
	
	/**
	 * @private
	 * @helper
	 */
	_label: function() {
		return this.input.label;
	}
}).register('KM.InputBase');

