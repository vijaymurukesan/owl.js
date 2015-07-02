$$ ={} || $$;

        $$ = (function(){
            'use strict';

            var owlSyntax = (function(){
                
                function isUndefined (attr){
                    if(attr === undefined){
                        return '';
                    }else {
                        return attr;
                    }
                }
                function getDefaultClass(defaultClass){
                 var className =''; 
                 if(defaultClass !== undefined){
                    className = defaultClass; 
                    }
                return className;
                }
                function constructHtml(html, templAttr, defaultAttr, noEndTag){            
                    if(defaultAttr === undefined){
                            defaultAttr = {};
                    }
                    if(templAttr === undefined){
                        return defaultAttr;
                    } else {
                        var tempDom = $( '<div '+ templAttr +'>' )[0];
                        var attrObj = {};
                        for (var i=0, attrs=tempDom.attributes, l=attrs.length; i<l; i++){
                            if(attrs.item(i).nodeName =='class'){
                                attrObj[attrs.item(i).nodeName] = attrs.item(i).value + ' ' + getDefaultClass(defaultAttr.class);
                            } else {
                                if(defaultAttr[attrs.item(i).nodeName]){
                                    delete defaultAttr[attrs.item(i).nodeName];    
                                }
                                attrObj[attrs.item(i).nodeName] = attrs.item(i).value;
                            }
                        }
                        $.extend(attrObj, defaultAttr);

                        if(typeof html == 'string'){
                            ////console.log(html);
                            return html;
                        }
                        else{
                            html = html.attr(attrObj);
                            ////console.log(html)
                            var tagName = html[0].nodeName;
                            tagName = tagName.toLowerCase();
                            var openingTag = '<' + tagName +'>';
                            var openingTagLength = openingTag.length;
                            var closingTag = '<' + tagName + '/>';
                            var closingTagLength = closingTag.length;

                            html = html[0].outerHTML;
                            var htmlLength = html.length;
                            if(noEndTag){
                                var stringAttributes = html.substring(openingTagLength-1,  htmlLength-1 ) ;
                            } else {
                                var stringAttributes = html.substring(openingTagLength-1,  (htmlLength - closingTagLength) -1 ) ;
                            }
                            
                            html = '<' + tagName + stringAttributes + '>';
                            console.log(html);   
                            return html;
                        }
                    }
                };
               function appendClass(defaultAttr, syntaxAttr){
                    syntaxAttr.class = defaultAttr.class + syntaxAttr.class;
                }

                var syntax = {
                // default HTML element
                    h1                      :       function(templAttr){ 
                                                        var defaultAttr = {};
                                                        var html = $('<h1 />');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    },
                    h1$$                    :       function(templAttr){
                                                        var htmlString = '</h1>';
                                                        return htmlString;
                                                    },
                    h2                      :       function(templAttr){ 
                                                        var defaultAttr = {
                                                            "class" : "mod-header-level1",
                                                            "id" : "mainHeading"
                                                        };                                                      
                                                        var html = $('<h2>');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        //console.log(html);      
                                                        //console.log(htmlString)
                                                        return htmlString;
                                                    },
                    h2$$                    :       function(templAttr){ 
                                                        var htmlString = '</h2>'; 
                                                        return htmlString;
                                                    },
                    ul                      :       function(templAttr){
                                                        var defaultAttr = {}; 
                                                        var html = $('<ul>'); 
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    },
                    ul$$                    :       function(templAttr){ 
                                                        var htmlString = '</ul>';
                                                        return htmlString;
                                                    },
                    li                      :       function(templAttr){ 
                                                        var defaultAttr = {};
                                                        var html = $('<li>'); 
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    },
                    li$$                    :       function(templAttr){ 
                                                        var htmlString = '</li>'; 
                                                        return htmlString;
                                                    },
                    input                   :       function(templAttr){
                                                        var defaultAttr = {};
                                                        var html = $('<input>');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr, true);
                                                        return htmlString;
                                                    },
                    p                       :       function(templAttr){ 
                                                        var defaultAttr = {};
                                                        var html = $('<p>'); 
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    },
                    p$$                     :       function(templAttr){ 
                                                        var htmlString = '</p>'; 
                                                        return htmlString;
                                                    },
                    a                       :       function(templAttr){
                                                        var defaultAttr = {};
                                                        var html = $('<a>');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    },
                    a$$                     :       function(templAttr){ 
                                                        var htmlString = '</a>'; 
                                                        return htmlString;
                                                    },
                    img                     :       function(templAttr){
                                                        var defaultAttr = {};
                                                        var html = $('<img>');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr, true);
                                                        return htmlString;
                                                    },
                    noscript                :       function(templAttr){ 
                                                        var defaultAttr = {};
                                                        var html = $('<noscript>'); 
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    },
                    noscript$$              :       function(templAttr){ 
                                                        var htmlString = '</noscript>'; 
                                                        return htmlString;
                                                    },
                    div                     :       function(templAttr, syntaxAttr){
                                                        var defaultAttr = { "class": "TESTING " }                                                        
                                                        if(syntaxAttr !== undefined){
                                                            appendClass(defaultAttr, syntaxAttr);    
                                                        }
                                                        
                                                        
                                                        $.extend(defaultAttr, syntaxAttr);
                                                        var html = $('<div>');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    },
                    div$$                   :       function(){ 
                                                        var htmlString = '</div>'; 
                                                        return htmlString;
                                                    },
                    h4                     :       function(templAttr, syntaxAttr){
                                                        var defaultAttr = syntaxAttr;
                                                        $.extend(defaultAttr, syntaxAttr);
                                                        var html = $('<h4>');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    },
                    h4$$                   :       function(){ 
                                                        var htmlString = '</h4>'; 
                                                        return htmlString;
                                                    },
                    picture                 :           function(templAttr, syntaxAttr){
                                                        var defaultAttr = syntaxAttr;
                                                        $.extend(defaultAttr, syntaxAttr);
                                                        var html = $('<picture>');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        return htmlString;
                                                    }, 
                     picture$$               :           function(){ 
                                                        var htmlString = '</picture>'; 
                                                        return htmlString;
                                                    },
                    picturevideo            :       function(templAttr){ return '<!--[if IE 9]><video style="display: none;"><![endif]-->'},
                    picturevideo$$          :       function(){ var htmlString = '<!--[if IE 9]></video><![endif]-->';return htmlString;},
                    picturesource           :       function(templAttr){
                                                        var defaultAttr = {};
                                                        var html = $('<source>');
                                                        var htmlString = constructHtml(html, templAttr, defaultAttr, true);
                                                        return htmlString;
                                                    },









                    //carousel
                    carousel                :       function(templAttr){ 
                                                        var defaultAttr = {},
                                                            el1Attr = {"class" : "row"},
                                                            el2Attr = {"class" : "col-16"},
                                                            el3Attr = {
                                                                        "class" : "mod-carousel",
                                                                        "data-active-slide" : "0",
                                                                        "data-indicators" : "true",
                                                                        "data-theme" : "navigation-below"
                                                                    },
                                                        
                                                        htmlString1 =  this.div( templAttr , el1Attr),
                                                       // var htmlString1 = constructHtml(html, templAttr, defaultAttr);

                                                        templAttr = '',
                                                        htmlString2 =  this.div( templAttr , el2Attr),
                                                        //var htmlString2 = constructHtml(html, templAttr, defaultAttr);

                                                        htmlString3 =  this.div( templAttr , el3Attr),
                                                        //var htmlString3 = constructHtml(html, templAttr, defaultAttr);
                                                        
                                                        htmlString = htmlString1 + htmlString2 + htmlString3;
                                                        
                                                        return htmlString;
                                                    },
                                                    //'<div class="row"><div class="col-16"><div class="mod-carousel" data-active-slide="0" data-indicators="true" data-theme="navigation-below">',
                    aperture                :       function(templAttr){ 
                                                        var defaultAttr = {},
                                                            el1Attr = {"class" : "outer aperture"},
                                                            el2Attr = {"class" : "carousel-slides"},
                                                            el3Attr = {"class" : "inner"},
                                                        
                                                        htmlString1 =  this.div( templAttr , el1Attr),
                                                        //var htmlString1 = constructHtml(html, templAttr, defaultAttr);

                                                        templAttr = '',
                                                        htmlString2 =  this.div( templAttr , el2Attr),
                                                        //var htmlString2 = constructHtml(html, templAttr, defaultAttr);

                                                        htmlString3 =  this.div( templAttr , el3Attr),
                                                        //var htmlString3 = constructHtml(html, templAttr, defaultAttr);

                                                        htmlString = htmlString1 + htmlString2  + htmlString3;
                                                        
                                                        return htmlString;
                                                    },//'<div class="outer aperture"><div class="carousel-slides"><div class="inner">',
                    aperture$$              :       function(){
                                                        var htmlString =    this.div$$() 
                                                                            + this.div$$() 
                                                                            + this.div$$();
                                                        return htmlString;
                                                    },
                    carouselslideheader     :       function(templAttr){ 
                                                        var el1Attr = {},
                                                            html =  this.h4( templAttr , el1Attr),
                                                            htmlString = constructHtml(html, templAttr);                                                        
                                                        return htmlString;
                                                    },
                    carouselslideheader$$       :   function(){
                                                        var htmlString = this.h4$$();
                                                        return htmlString;
                                                    },
                    carouselcontentwrap     :       function(templAttr){ 
                                                        var defaultAttr = {},
                                                        el1Attr = {"class" : "slide"},
                                                        el2Attr = {"class" : "content"},
                                                        
                                                        htmlString1 =  this.div( templAttr , el1Attr),
                                                        //htmlString1 = constructHtml(html, templAttr, defaultAttr);

                                                        templAttr = '',
                                                        htmlString2 =  this.div( templAttr , el2Attr),
                                                        //htmlString2 = constructHtml(html, templAttr, defaultAttr),

                                                        htmlString = htmlString1 + htmlString2;
                                                        
                                                        return htmlString;
                                                    },
                     carouselcontentwrap$$   :       function(){
                                                        var htmlString = this.div$$() + this.div$$();
                                                        return htmlString;
                                                    },
                    carouselimgwrap         :        function(templAttr){ 
                                                        var defaultAttr = {},
                                                            el1Attr = {"class" : "image"},
                                                        
                                                            htmlString =  this.div( templAttr , el1Attr);
                                                            //htmlString = constructHtml(html, templAttr, defaultAttr);
                                                        
                                                        return htmlString;
                                                    },
                     carouselimgwrap$$       :      function(){
                                                        var htmlString = this.div$$();
                                                        return htmlString;
                                                    },
                    carouselcontent         :       function(templAttr){ 
                                                        var defaultAttr = {},
                                                            el1Attr = {"class" : "inner"},                                                        
                                                            htmlString =  this.div( templAttr , el1Attr);
                                                            //htmlString = constructHtml(html, templAttr, defaultAttr);                                                        
                                                        return htmlString;
                                                    },
                     carouselcontent$$       :      function(){
                                                        var htmlString =  this.div$$();
                                                        return htmlString;
                                                    },
                    carouselhight           :       function(templAttr){ 
                                                        var defaultAttr = {},
                                                            el1Attr = {"class" : "restricted-height"},                                                        
                                                            htmlString =  this.div( templAttr , el1Attr);
                                                        //var htmlString = constructHtml(html, templAttr, defaultAttr);                                                        
                                                        return htmlString;
                                                    },
                    carouselhight$$         :       function(){
                                                        var htmlString =    this.div$$();
                                                        return htmlString;
                                                    },
                     carousel$$              :      function(){
                                                        var htmlString =    this.div$$() 
                                                                            + this.div$$() 
                                                                            + this.div$$();
                                                        return htmlString;
                                                    }
                }
                return syntax;
            }());
            var owl = (function(){
                var obj = {};
                for(var key in owlSyntax){
                    if(owlSyntax.hasOwnProperty(key)){
                        if(typeof (owlSyntax[key]) === 'function' ){
                            owlSyntax[key]() ;
                        }
                        obj[key] = owlSyntax[key];
                    }
                }
                 return obj;
            }());

            return owl;
            

        }());
        
