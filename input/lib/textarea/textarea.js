KM.TextArea = KM.InputBase.extendComponent({
	template: function() {
		return 'kingsman_textarea';
	},
	
	onRendered: function() {
		KM.Input.__super__.onRendered.call(this);
		var input = this.input,
				textareaTarget = this.find('.km-textarea textarea'),
				target = this.find('.km-textarea');
		
		textareaTarget.disabled = input.disabled;
		textareaTarget.autofocus = input.autofocus;
		textareaTarget.rows = input.rows;
		if(input.maxlength) {
			textareaTarget.maxLength = input.maxlength;
		}
		
		if(input.value) {
			textareaTarget.value = input.value;
		}
		
		if(input.floatLabel) {
			target.classList.add('km-input__label--float');
		}else{
			target.classList.add('km-input__label--no-float');
		}
		
		this._toggleLabel();
	
		if(textareaTarget) {
			autosize(textareaTarget);
		}
	},
	
	events: function() {
		return KM.TextArea.__super__.events.call(this).concat({
			'input .km-textarea textarea': this._onTextInput
		})
	}
}).register('KM.TextArea');
