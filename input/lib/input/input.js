KM.Input = KM.InputBase.extendComponent({
	template: function() {
		return 'kingsman_input';
	},
	
	onRendered: function() {
		KM.Input.__super__.onRendered.call(this);
		var input = this.input,
				inputTarget = this.find('.km-input input'),
				target = this.find('.km-input');
		
		inputTarget.disabled = input.disabled;
		inputTarget.autofocus = input.autofocus;
		inputTarget.autocomplete = input.autocomplete;
		inputTarget.multiple = input.multiple;
		inputTarget.type = input.type;
		if(input.maxlength) {
			inputTarget.maxLength = input.maxlength;
		}
		
		if(input.max) {
			inputTarget.max = input.max;
		}
		
		if(input.min) {
			inputTarget.min = input.min;
		}
		
		if(input.value) {
			inputTarget.value = input.value;
		}
		
		if(input.floatLabel) {
			target.classList.add('km-input__label--float');
		}else{
			target.classList.add('km-input__label--no-float');
		}
		
		this._toggleLabel();
	},
	
	events: function() {
		return KM.Input.__super__.events.call(this).concat({
			'input .km-input input': this._onTextInput
		})
	}
}).register('KM.Input');
