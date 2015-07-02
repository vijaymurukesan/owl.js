var templ = $('script#template');

var matchresult = [];
var openingTags =  templ.html().match(/({{\$\$\.\w.*?}})/g);   // ---     /({{\$\$\.\w*)+(}})/g
var closingTags = templ.html().match(/({{\$\$\.\w*)+(\$\$}})/g);
var matchresult = openingTags.concat(closingTags);


function replaceSyntax(value){
  var len = value.length;
  var htmlStringTag = value.substring(5 , len-2);
  var tag = htmlStringTag.match(/(^[^\s]+).*?/g);
  tag = tag.join('');
    //console.log(tag);
  var tagLength = tag.length + 1 ;
  var syntaxLength = htmlStringTag.length;
  var attributes = htmlStringTag.substring(tagLength, syntaxLength);
  //console.log(tag.length + tag);
  //console.log(attributes.length);
  //console.log('attribute : ' + attributes);

  // var htmlTagArray = htmlStringTag.split('.');
  // var arrayObjectRef =[];
  // $(htmlTagArray).each(function(index, value){
  //   arrayObjectRef.push( '["'+ value + '"]' );
  // });
  // var syntaxObjreference = arrayObjectRef.join('');
  // var result = syntaxObjreference;
  //console.log(value + tag);
 // console.log(typeof($$[tag]));
  var owlHtml;
  if ( typeof($$[tag]) != 'function' ){
    owlHtml = $$[tag];  
  } else
  {
    owlHtml = $$[tag](attributes);  
  }
  //console.log(owlHtml);
  var replacedHTML = $(this).html().replace(value,  owlHtml);
  return replacedHTML;
}
//console.log(matchresult);
(function(){
    $(matchresult).each(function(index, value){
        $("script#template:contains(" + value + ")").each(function(){
            var Magictemplate =  $(this);
            return $(this).html(replaceSyntax.call(Magictemplate, value));
        });
    });
})();
//console.log($('script#template').html());
$('#result').html($('script#template').html());