KM.MenuButton = BlazeComponent.extendComponent(function (data) {
  var menuBtn = {};
  if(data){
    _.each(data.hash, function(value, key) {
      menuBtn[key] = value;
    });
  }
  
  menuBtn.classList = menuBtn.classList || undefined;
  menuBtn.closeMenuOnClickItem = (menuBtn.closeMenuOnClickItem == false) ? false : true;
  menuBtn.alignBottom = (menuBtn.alignBottom == true) ? true : false;
  menuBtn.focused = (menuBtn.focused == true) ? true : false;
  menuBtn.focused = new ReactiveField(menuBtn.focused);
  
  this.menuBtn = menuBtn;
}, {
  template: function() {
    return 'kingsman_menu_button';
  },

  onRendered: function() {
    this._setMenuPosition();
    this.resizeHandler= this._onResizeWin.bind(this);
		this.clickHandler = this._onClickDoc.bind(this);
		
    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('click', this.clickHandler);
  },
  
  onDestroyed: function() {		
		window.removeEventListener('resize', this.resizeHandler);
		document.removeEventListener('click', this.clickHandler);
	},
	
  events: function() {
    return [{
      'click .km-menu-button .km-button': this._onClickMenuButton,
      'click .km-menu-button .km-item': this._onClickItem,
    }];
  },
  
  /**
   * @private
   * @event
   */
  _onResizeWin: function() {
		this._setMenuPosition();
	},
	
	/**
	 * @private
	 * @event
	 */
	_onClickDoc: function() {
		this._closeMenu();
	},
	
  /**
   * @private
   * @event
   * 
   * brings in/out the menu
   */
  _onClickMenuButton: function(event) {
		this.toggle();
  },
  
  /**
   * @private
   * @event
   */
  _onClickItem: function(event) {
		if(this.menuBtn.closeMenuOnClickItem) {
			this.toggle('close');
		}
  },
  
  /**
   * @public
   * @function
   * 
   * re-runs when menuBtn.focused() changes
   */
  toggle: function(state) {
		var menuBtn = this.find('.km-menu-button');
		
		if(menuBtn) {
			if(state == '' || state == null) {
				this.menuBtn.focused(!this.menuBtn.focused());
				if(this.menuBtn.focused) {
					menuBtn.classList.add('km-menu-button--focused');
				}else{
					menuBtn.classList.remove('km-menu-button--focused');
				}
			}
			
			if(state == 'open') {
				menuBtn.classList.add('km-menu-button--focused');
			}
			
			if(state == 'close') {
				menuBtn.classList.remove('km-menu-button--focused');
			}
		}
  },
  
  /**
   * @private
   * @function
   * 
   * get offset X and Y accurately
   */
  _getPosition: function(elem) {
    var _x11 = 0,
        _y11 = 0,
        _x21 = 0,
        _y21 = 0,
        _x12 = 0,
        _y12 = 0,
        _x22 = 0,
        _y22 = 0;
        
    if(elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop)) {
        _x11 = elem.offsetLeft - elem.scrollLeft;
        _y11 = elem.offsetTop - elem.scrollTop;
        
        _x21 = _x11;
        _y21 = _y11 + elem.offsetHeight;
        
        _x12 = _x11 + elem.offsetWidth;
        _y12 = _y11;
        
        _x22 = _x12;
        _y22 = _y21;
    }

    return { 
      topLeft: {
        Y: _y11,
        X: _x11 
      },
      topRight: {
        Y: _y12,
        X: _x12 
      },
      bottomLeft: {
        Y: _y21,
        X: _x21 
      },
      bottomRight: {
        Y: _y22,
        X: _x22 
      }
    };
  },

//TODO: clean up this block, very messy 
  /**
   * @private
   * @function
   * 
   * determine whether menu should be pointing down or upwards
   */
  _setMenuPosition: function() {
    var _this = this,
        menuBtn = _this.find('.km-menu-button'),
        menu = _this.find('.km-menu');
            
    //set menu min and max width and height
    menu.style.minWidth = menuBtn.offsetWidth+'px';
    menu.style.minHeight = menuBtn.offsetHeight+'px';
    
    var TL = _this._getPosition(menuBtn).topLeft,
	      BL = _this._getPosition(menuBtn).bottomLeft
	      maxHeightFromBottom = BL.Y - 32,    
        maxHeightFromTop = window.innerHeight - 16 -16 -4 - TL.Y,
        maxHeight = Math.max(maxHeightFromTop, maxHeightFromBottom),
        maxWidth = window.innerWidth - TL.X - 8;
	      
    //set menu position
    //if the menu exceed screen size, move up/down
    // check if it's below button
    if(this.menuBtn.alignBottom) {
	    if(maxHeight == maxHeightFromTop) {
	      menu.style.bottom = '';
	      menu.style.top = menuBtn.offsetHeight+'px';
	    }else{
	      menu.style.top = '';
	      menu.style.bottom = menuBtn.offsetHeight+'px';
	    }
	    
	    maxHeight = maxHeight - menuBtn.offsetHeight;
	    
		}else{
			if(maxHeight == maxHeightFromTop) {
	      menu.style.bottom = '';
	      menu.style.top = 0;
	    }else{
	      menu.style.top = '';
	      menu.style.bottom = 0;
	    }
		}
    
    menu.style.maxWidth = maxWidth+'px';
		menu.style.maxHeight = maxHeight+'px';
    menu.style.left = 0;
    
    return;
  },
  
  /**
   * @private
   * @function
   */
  _closeMenu: function() {
    var isClickInside = this.find('.km-menu-button').contains(event.target);

    if (!isClickInside) {
      //the click was outside the menuBtn, close menu
      this.toggle('close');
    }
  }
}).register('KM.MenuButton');

