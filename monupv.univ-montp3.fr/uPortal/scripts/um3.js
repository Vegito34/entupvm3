var LoginModalController = {
    tabsElementName: ".logmod__tabs li",
    tabElementName: ".logmod__tab",
    inputElementsName: ".logmod__form .input",
    hidePasswordName: ".hide-password",
    
    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,
    
    activeTab: null,
    tabSelection: 0, // 0 - first, 1 - second
    
    findElements: function () {
        var base = this;
        
        base.tabsElement = up.jQuery(base.tabsElementName);
        base.tabElement = up.jQuery(base.tabElementName);
        base.inputElements = up.jQuery(base.inputElementsName);
        base.hidePassword = up.jQuery(base.hidePasswordName);
        
        return base;
    },
    
    setState: function (state) {
    	var base = this,
            elem = null;
        
        if (!state) {
            state = 0;
        }
        
        if (base.tabsElement) {
        	elem = up.jQuery(base.tabsElement[state]);
            elem.addClass("current");
            up.jQuery("." + elem.attr("data-tabtar")).addClass("show");
        }
  
        return base;
    },
    
    getActiveTab: function () {
        var base = this;
        
        base.tabsElement.each(function (i, el) {
           if (up.jQuery(el).hasClass("current")) {
               base.activeTab = up.jQuery(el);
           }
        });
        
        return base;
    },
   
    addClickEvents: function () {
    	var base = this;
        
        base.hidePassword.on("click", function (e) {
            var $this = up.jQuery(this),
                $pwInput = $this.prev("input");
            
            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Cacher");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Montrer");
            }
        });
 
        base.tabsElement.on("click", function (e) {
            var targetTab = up.jQuery(this).attr("data-tabtar");
            
            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = up.jQuery(this);
            base.activeTab.addClass("current");
            
            base.tabElement.each(function (i, el) {
                el = up.jQuery(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
	    if(up.jQuery(this).attr('id') == 'tab-auth'){
                up.jQuery('#user-name').focus();
            }
        });
        
        base.inputElements.find("label").on("click", function (e) {
           var $this = up.jQuery(this),
               $input = $this.next("input");
            
            $input.focus();
        });
        
        return base;
    },
    
    initialize: function () {
        var base = this;
        
        base.findElements().setState().getActiveTab().addClickEvents();
    }
};

up.jQuery(document).ready(function() {
    up.jQuery('div div:has(.contenu)').removeClass('portal-content');
    LoginModalController.initialize();
    up.jQuery('#user-name').focus();
    navigation();
    if(up.jQuery('div[id].portal-page-column-inner').length > 1){
    	vignetisation();
    }
});

function navigation() {
   up.jQuery('.portal-navigation, .portal-navigation-add-item').hover(
        function() {
                up.jQuery(this).find('a').addClass('hover');
        },
        function(){
                up.jQuery(this).find('a').removeClass('hover');
   });
}

function vignetisation(){

        up.jQuery('div[id].portal-page-column-inner section').each(function( index ) {
                var image = "";
                var section = up.jQuery(this);
                up.jQuery('#region-footer-first li').each(function ( index ) {
                        var tmp = up.jQuery(this).find('a').attr('href');
                        image = tmp.substring(tmp.indexOf("/p/")+3, tmp.indexOf("."));
                        if(section.hasClass(image)){
                                return false;
                        }
                });
                up.jQuery.getJSON('https://monupv.univ-montp3.fr/images/'+image+'.json', function(data) {
                        var href = section.find('div.up-portlet-wrapper-inner a.focus').attr('href');
                        var html = '<div id="'+image+'" class="vignette">';
			html += '<div class="col-md-12 col-sm-6 col-xs12"><a href="'+'https://monupv.univ-montp3.fr'+href+'"><img class="img-responsive" src="https://monupv.univ-montp3.fr/images/'+image+'.png"></img></a></div>';
			html += '<div class="col-md-12 col-sm-6 col-xs12"><a href="'+'https://monupv.univ-montp3.fr'+href+'"><h2>'+data.h2+'</h2></a><a href="'+'https://monupv.univ-montp3.fr'+href+'"><p>'+data.p+'</p></a></div>';
			html+= '</div>';
section.find('div.up-portlet-content-wrapper').empty().html(html);
                });
        });
}

function addPorletAccueil(tabId, chanId) {
                var url, promise, tabName;
                
                url = 'https://monupv.univ-montp3.fr/uPortal/api/layout';
                promise = up.jQuery.ajax({
                    url: url,
                    data: {
                        action: 'addPortlet',
                        channelID: chanId,
                        elementID: tabId,
                        position: ''
                    },
                    type: 'POST',
                    dataType: 'json'
                });
                promise.success(function() {
                    up.jQuery('#up-notification').noty({
                        text: "Félicitation, le service a été ajouté à l'onglet Accueil",
                        type: 'success'
                    });
                });
                promise.error(function() {
                    up.jQuery('#up-notification').noty({
                        text: "Erreur, le service n'a pu être ajouté à l'onglet Accueil",
                        type: 'error'
                    });
                });
                promise.done(function() {
                    
                });
}

function agrandirRetrecir() {
        if(up.jQuery('.portal-content').css('max-width') == '1230px') {
                up.jQuery('.portal-content').css('max-width', 'none');
                up.jQuery('#resize').removeClass('fa-expand');
                up.jQuery('#resize').addClass('fa-compress');
        }else {
                up.jQuery('.portal-content').css('max-width', '1230px');
                up.jQuery('#resize').removeClass('fa-compress');
                up.jQuery('#resize').addClass('fa-expand');
        }
}

