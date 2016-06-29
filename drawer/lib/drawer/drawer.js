KM.Drawer = BlazeComponent.extendComponent(function (data) {
  var drawer = {};
  if(data){
    _.each(data.hash, function(value, key) {
      drawer[key] = value;
    });
  }
  
  drawer.openOnLargeScreen = (drawer.openOnLargeScreen === false) ? false : true;
  drawer.edge = drawer.edge || 'left';
  drawer.closeOnClick = (drawer.closeOnClick === false) ? false : true;
  
  var configs = drawer.configs || {};
  drawer.width = configs.width || 300;
  drawer.location = configs.drawerLocation || 'body';
  drawer.largeScreen = configs.largeScreen || 500;
  drawer.contentLocation = configs.contentLocation || 'km-content';

  drawer._isOpen = new ReactiveField(false);
  
  var value = -1 * (drawer.width + 10);
  drawer._offset = value+'px';
  
  this.drawer = drawer;
}, {
  template: function() {
    return 'kingsman_drawer';
  },
  
  onRendered: function() {
    this.drawer.target = this.find('.km-drawer');
    this.drawer.buttonTarget = this.find('.km-drawer__button');
    
    this._initDrawer();
  },
  
  onDestroyed: function() {
		this._removeDrawer();
	},
	
  events: function() {
    return [{
      'click .km-drawer__button': this._onClickMenuButton
    }];
  },
  
  /**
   * @private
   * @function
   * 
   * initialize drawer
   */
  _initDrawer: function() {
    var this_ = this,
        drawer = this_ .drawer,
        drawerTarget = drawer.target;
    
    // set drawer width
    var widthpx = drawer.width+'px';
    drawerTarget.style.width = widthpx;
    
    // add left / right class to drawer
    if(drawer.edge == 'left') {
      drawerTarget.classList.add('km-drawer--left');
    }else if(drawer.edge == 'right') {
      drawerTarget.classList.add('km-drawer--right');
    }
    
    // append drawer to apporiate node
    if(drawer.location == 'body') {
      this.moveDOMElement(document.body, drawerTarget, document.body.firstChild);
    }else{
      var parent = document.getElementsByClassName(drawer.location);
      
      if(parent == undefined || parent == null || parent.length <= 0) {
        if(document.getElementById(drawer.location) != undefined) {
          parent = document.getElementById(drawer.location);
        }
      }
      
      var node = drawerTarget,
          before = parent.firstChild;

      this.moveDOMElement(parent, node, before);
    }
    
    // add event listener to drawer, events are not working
    drawerTarget.addEventListener('click', function() {
      if(drawer._isOpen() && window.innerWidth <= drawer.largeScreen && drawer.closeOnClick) {
        this_.toggle();
      }
    });
    
    // set drawer state by forcing drawer to stay open or close
    if (window.innerWidth > drawer.largeScreen) {
      this_._forceDrawer('open');
    }else{
      //document.body.appendChild(dragArea);
      this_._forceDrawer('close');
    }
    
    // when resizing, close / open drawer based on window width
    window.addEventListener('resize', function() {
      
      if(window.innerWidth > drawer.largeScreen) {
        this_._forceDrawer('open');
      }else{
        //dragTarget.style.display = 'initial';
        this_._forceDrawer('close');
      }
      
      document.body.removeAttribute('style');
      
      var overlayTarget = document.getElementById('km-drawer__overlay');
      if(overlayTarget != null){
        overlayTarget.remove();
      }
    });
  },
  
  /**
   * @private
   * @function
   * 
   * remove drawer on destroyed
   */
  _removeDrawer: function() {
		var this_ = this,
        drawer = this_ .drawer,
        drawerTarget = drawer.target;
        
		if(drawer.location == 'body') {
      this.removeDOMElement(document.body, drawerTarget);
    }else{
      var parent = document.getElementsByClassName(drawer.location);
      
      if(parent == undefined || parent == null || parent.length <= 0) {
        if(document.getElementById(drawer.location) != undefined) {
          parent = document.getElementById(drawer.location);
        }
      }
      
      var node = drawerTarget;

      this.removeDOMElement(parent, node);
    }
	},
	
  /**
   * 
   */
  _initDragArea: function() {
    var dragArea = document.createElement('div');
        dragArea.classList.add("km-drawer__drag-target");

    var dragTargets = document.getElementsByClassName('km-drawer__drag-target');
        dragTarget = dragTargets[drawer.nodeIndex];

    if(dragTargets){
      for(var k = 0; k < dragTargets.length; k++){
        var hammertime = new Hammer(dragTargets[k]);
    
        hammertime.on('pan', function(e) {
          var direction = e.direction,
              x = e.center.x,
              y = e.center.y,
              velocityX = e.velocityX;
    
          // Disable Scrolling
          document.body.style.overflow = 'hidden';
          
          // If overlay does not exist, create one and if it is clicked, close menu
          if(document.getElementById('km-drawer__overlay') && document.getElementById('km-drawer__overlay').length == 0) {
            var overlay = document.createElement('div');
            overlay.id = "km-drawer__overlay";
            document.body.appendChild(overlay);
            document.getElementById('km-drawer__overlay').style.opacity = 1;
            
            overlay.addEventListener('click', function() {
              if(drawerTarget.classList.contains('km-drawer--left')) {
                _this.toggleDrawer('left-in');
              }
              
              if(drawerTarget.classList.contains('km-drawer--right')){
                _this.toggleDrawer('right-in');
              }
              
              $('#km-drawer__overlay').velocity(
                {
                  opacity: 0
                },{
                  duration: 300, 
                  queue: false, 
                  easing: 'easeOutQuad'
              });
              
              this.remove();
            });
          }
          
          // Keep within boundaries
          if(drawerTarget.classList.contains('km-drawer--left')) {
            if(x > drawer.width) { x = drawer.width; }
            else if (x < 0) { x = 0; }
          }
    
          if(drawerTarget.classList.contains('km-drawer--left')) {
            var leftPos = x - drawer.width;
            
            if(leftPos > 0) {
              drawer._state('open');
              dragTarget.style.width = '50%';
            }
            
            drawerTarget.style.left = leftPos;
          }
          
          if(drawerTarget.classList.contains('km-drawer--right')) {
            var rightPos = -1 *(x - drawer.width / 2);
            if (rightPos > 0) {
              rightPos = 0;
              drawer._state('open');
              dragTarget.style.width = '50%';
            }
            
            drawerTarget.style.right = rightPos;
          }
    
          // Percentage overlay
          var overlayPerc;
          if(drawerTarget.classList.contains('km-drawer--left')) {
            overlayPerc = x / drawer.width;
            $('#km-drawer__overlay').velocity({
              opacity: overlayPerc 
            }, {
              duration: 50, 
              queue: false, 
              easing: 'easeOutQuad'
            });
          }
          
          if(drawerTarget.classList.contains('km-drawer--right')) {
            overlayPerc = Math.abs((x - window.innerWidth) / drawer.width);
            $('#km-drawer__overlay').velocity({
              opacity: overlayPerc 
            }, {
              duration: 50, 
              queue: false, 
              easing: 'easeOutQuad'
            });
          }
        });
      }
    }
  },
  
  /**
   * @private
   * @event
   * 
   * open and close drawer when menu button is clicked
   **/
  _onClickMenuButton: function(event) {
    this.toggle();
    
    return;
  },
  
  /**
   * @public
   * @function
   * 
   * bring drawer in and out
   */
  toggle: function() {
    var this_ = this,
        drawer = this.drawer,
        drawerTarget = drawer.target,
        isLeft = (drawer.edge == 'left') ? true : false;
    
    // drawer is open, then close drawer and remove overlay
    if(drawer._isOpen()) {
      if(isLeft) {
        $(drawerTarget).velocity(
        {
          left: drawer._offset
        }, {
          duration: 300, 
          queue: false, 
          easing: 'easeOutQuad'
        });
      }else{
        $(drawerTarget).velocity(
        {
          right: drawer._offset
        }, {
          duration: 300, 
          queue: false, 
          easing: 'easeOutQuad'
        });
      }
      
      var overlay = document.getElementById('km-drawer__overlay');
      if(overlay != null) {
        overlay.remove();
      }
      
      document.body.style.removeProperty('overflow');
      drawer._isOpen(false);
    }else{
      if(isLeft) {
        $(drawerTarget).velocity(
        {
          left: 0
        }, {
          duration: 300, 
          queue: false, 
          easing: 'easeOutQuad'
        });
      }else{
        $(drawerTarget).velocity(
        {
          right: 0
        }, {
          duration: 300, 
          queue: false, 
          easing: 'easeOutQuad'
        });
      }
      
      var overlay = document.createElement('div');
      overlay.id = "km-drawer__overlay";
      document.body.appendChild(overlay);
      document.getElementById('km-drawer__overlay').style.opacity = 1;
      
      overlay.addEventListener('click', function() {
        this_.toggle();
        
        $('#km-drawer__overlay').velocity(
          {
            opacity: 0
          },{
            duration: 300, 
            queue: false, 
            easing: 'easeOutQuad'
        });
        
        this.remove();
      });
      
      document.body.style.overflow = 'hidden';
      drawer._isOpen(true);
    }
    return;
  },
  
  /**
   * @private
   * @function
   * 
   * set drawer state
   * this is used for initial setup and window.resize
   */
  _forceDrawer: function(state) {
    var drawer = this.drawer,
        drawerTarget = drawer.target,
        buttonTarget = drawer.buttonTarget,
        isLeft = (drawer.edge == 'left') ? true : false;
    
    // update drawer state
    var isOpen = (state == 'open') ? true : false;

    if(state == 'open') {             
      if(drawer.openOnLargeScreen) {
        buttonTarget.style.display = 'none';
        
        var contentLocation = document.getElementsByClassName(drawer.contentLocation);
        
        if(isLeft) {
          if(contentLocation[0] == undefined) {
            contentLocation = document.getElementById(drawer.contentLocation);
            if(contentLocation != undefined) {
              contentLocation.style.paddingLeft = drawer.width+'px';
            }
          }else{
            contentLocation[0].style.paddingLeft = drawer.width+'px';
          }         
          
          $(drawerTarget).velocity(
            {
              left: 0
            }, {
              duration: 200, 
              queue: false, 
              easing: 'easeOutQuad'
          });
        }else{
          if(contentLocation[0] == undefined) {
            contentLocation = document.getElementById(drawer.contentLocation);
            if(contentLocation != undefined) {
              contentLocation.style.paddingRight = drawer.width+'px';
            }
          }else{
            contentLocation[0].style.paddingRight = drawer.width+'px';
          }
        
          $(drawerTarget).velocity(
            {
              right: 0
            }, {
              duration: 200, 
              queue: false, 
              easing: 'easeOutQuad'
          });
        }
        
        drawer._isOpen(true);
      }else{
        if(isLeft) {
          $(drawerTarget).velocity(
            {
              left: drawer._offset
            }, {
              duration: 200, 
              queue: false, 
              easing: 'easeOutQuad'
          });
        }else{
          $(drawerTarget).velocity(
            {
              right: drawer._offset
            }, {
              duration: 200, 
              queue: false, 
              easing: 'easeOutQuad'
          });
        }
        
        drawer._isOpen(false);
      }
    }else if(state == 'close') {
      // remove padding from content
      var contentLocation = document.getElementsByClassName(drawer.contentLocation);
      if(contentLocation[0] == undefined) {
        contentLocation = document.getElementById(drawer.contentLocation);
        if(contentLocation != undefined) {
          contentLocation.removeAttribute('style');
        }
      }else{
        contentLocation[0].removeAttribute('style');
      }
      
      //display button
      buttonTarget.style.display = 'inline-block';
      
      //offset drawer set dragTarget
      if(isLeft) {
        $(drawerTarget).velocity(
          {
            left: drawer._offset
          }, {
            duration: 200, 
            queue: false, 
            easing: 'easeOutQuad'
        });
      }else{
        $(drawerTarget).velocity(
          {
            right: drawer._offset
          }, {
            duration: 200, 
            queue: false, 
            easing: 'easeOutQuad'
        });
      }
      
      drawer._isOpen(false);
    }else if(state != 'open' && state != 'close') {
      throw new Error('Kingsman Drawer: invalid argument for _setDrawer function');
    }
    
    return;
  },
  
  /**
   * @public
   * @function
   * 
   * @return boolean
   */
  isOpen: function() {
    return this.drawer._isOpen();
  },
  
  /**
   * @helper
   */
  _classArr: function() {
    return [
      'km-button--circle',
      'km-drawer__button'
    ]
  }
}).register('KM.Drawer');
