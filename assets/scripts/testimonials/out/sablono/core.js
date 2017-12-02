// Compiled by ClojureScript 0.0-2156
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__13881__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__13880 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__13880,0,null);var body = cljs.core.nthnext.call(null,vec__13880,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__13881 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13881__delegate.call(this,args);};
G__13881.cljs$lang$maxFixedArity = 0;
G__13881.cljs$lang$applyTo = (function (arglist__13882){
var args = cljs.core.seq(arglist__13882);
return G__13881__delegate(args);
});
G__13881.cljs$core$IFn$_invoke$arity$variadic = G__13881__delegate;
return G__13881;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__7763__auto__ = (function iter__13887(s__13888){return (new cljs.core.LazySeq(null,(function (){var s__13888__$1 = s__13888;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13888__$1);if(temp__4092__auto__)
{var s__13888__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13888__$2))
{var c__7761__auto__ = cljs.core.chunk_first.call(null,s__13888__$2);var size__7762__auto__ = cljs.core.count.call(null,c__7761__auto__);var b__13890 = cljs.core.chunk_buffer.call(null,size__7762__auto__);if((function (){var i__13889 = 0;while(true){
if((i__13889 < size__7762__auto__))
{var args = cljs.core._nth.call(null,c__7761__auto__,i__13889);cljs.core.chunk_append.call(null,b__13890,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__13891 = (i__13889 + 1);
i__13889 = G__13891;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13890),iter__13887.call(null,cljs.core.chunk_rest.call(null,s__13888__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13890),null);
}
} else
{var args = cljs.core.first.call(null,s__13888__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__13887.call(null,cljs.core.rest.call(null,s__13888__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7763__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__13892_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__13892_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__7763__auto__ = (function iter__13897(s__13898){return (new cljs.core.LazySeq(null,(function (){var s__13898__$1 = s__13898;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13898__$1);if(temp__4092__auto__)
{var s__13898__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13898__$2))
{var c__7761__auto__ = cljs.core.chunk_first.call(null,s__13898__$2);var size__7762__auto__ = cljs.core.count.call(null,c__7761__auto__);var b__13900 = cljs.core.chunk_buffer.call(null,size__7762__auto__);if((function (){var i__13899 = 0;while(true){
if((i__13899 < size__7762__auto__))
{var style = cljs.core._nth.call(null,c__7761__auto__,i__13899);cljs.core.chunk_append.call(null,b__13900,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__13901 = (i__13899 + 1);
i__13899 = G__13901;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13900),iter__13897.call(null,cljs.core.chunk_rest.call(null,s__13898__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13900),null);
}
} else
{var style = cljs.core.first.call(null,s__13898__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__13897.call(null,cljs.core.rest.call(null,s__13898__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7763__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__13902){
var styles = cljs.core.seq(arglist__13902);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to13903 = (function() { 
var link_to13903__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to13903 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to13903__delegate.call(this,url,content);};
link_to13903.cljs$lang$maxFixedArity = 1;
link_to13903.cljs$lang$applyTo = (function (arglist__13904){
var url = cljs.core.first(arglist__13904);
var content = cljs.core.rest(arglist__13904);
return link_to13903__delegate(url,content);
});
link_to13903.cljs$core$IFn$_invoke$arity$variadic = link_to13903__delegate;
return link_to13903;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13903);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to13905 = (function() { 
var mail_to13905__delegate = function (e_mail,p__13906){var vec__13908 = p__13906;var content = cljs.core.nth.call(null,vec__13908,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7046__auto__ = content;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to13905 = function (e_mail,var_args){
var p__13906 = null;if (arguments.length > 1) {
  p__13906 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to13905__delegate.call(this,e_mail,p__13906);};
mail_to13905.cljs$lang$maxFixedArity = 1;
mail_to13905.cljs$lang$applyTo = (function (arglist__13909){
var e_mail = cljs.core.first(arglist__13909);
var p__13906 = cljs.core.rest(arglist__13909);
return mail_to13905__delegate(e_mail,p__13906);
});
mail_to13905.cljs$core$IFn$_invoke$arity$variadic = mail_to13905__delegate;
return mail_to13905;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13905);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list13910 = (function unordered_list13910(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7763__auto__ = (function iter__13915(s__13916){return (new cljs.core.LazySeq(null,(function (){var s__13916__$1 = s__13916;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13916__$1);if(temp__4092__auto__)
{var s__13916__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13916__$2))
{var c__7761__auto__ = cljs.core.chunk_first.call(null,s__13916__$2);var size__7762__auto__ = cljs.core.count.call(null,c__7761__auto__);var b__13918 = cljs.core.chunk_buffer.call(null,size__7762__auto__);if((function (){var i__13917 = 0;while(true){
if((i__13917 < size__7762__auto__))
{var x = cljs.core._nth.call(null,c__7761__auto__,i__13917);cljs.core.chunk_append.call(null,b__13918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__13919 = (i__13917 + 1);
i__13917 = G__13919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13918),iter__13915.call(null,cljs.core.chunk_rest.call(null,s__13916__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13918),null);
}
} else
{var x = cljs.core.first.call(null,s__13916__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__13915.call(null,cljs.core.rest.call(null,s__13916__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7763__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13910);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list13920 = (function ordered_list13920(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__7763__auto__ = (function iter__13925(s__13926){return (new cljs.core.LazySeq(null,(function (){var s__13926__$1 = s__13926;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13926__$1);if(temp__4092__auto__)
{var s__13926__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13926__$2))
{var c__7761__auto__ = cljs.core.chunk_first.call(null,s__13926__$2);var size__7762__auto__ = cljs.core.count.call(null,c__7761__auto__);var b__13928 = cljs.core.chunk_buffer.call(null,size__7762__auto__);if((function (){var i__13927 = 0;while(true){
if((i__13927 < size__7762__auto__))
{var x = cljs.core._nth.call(null,c__7761__auto__,i__13927);cljs.core.chunk_append.call(null,b__13928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__13929 = (i__13927 + 1);
i__13927 = G__13929;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13928),iter__13925.call(null,cljs.core.chunk_rest.call(null,s__13926__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13928),null);
}
} else
{var x = cljs.core.first.call(null,s__13926__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__13925.call(null,cljs.core.rest.call(null,s__13926__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7763__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13920);
/**
* Create an image element.
*/
sablono.core.image13930 = (function() {
var image13930 = null;
var image13930__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image13930__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image13930 = function(src,alt){
switch(arguments.length){
case 1:
return image13930__1.call(this,src);
case 2:
return image13930__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image13930.cljs$core$IFn$_invoke$arity$1 = image13930__1;
image13930.cljs$core$IFn$_invoke$arity$2 = image13930__2;
return image13930;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13930);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__13931_SHARP_,p2__13932_SHARP_){return [cljs.core.str(p1__13931_SHARP_),cljs.core.str("["),cljs.core.str(p2__13932_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__13933_SHARP_,p2__13934_SHARP_){return [cljs.core.str(p1__13933_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13934_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field13935 = (function() {
var hidden_field13935 = null;
var hidden_field13935__1 = (function (name){return hidden_field13935.call(null,name,null);
});
var hidden_field13935__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field13935 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field13935__1.call(this,name);
case 2:
return hidden_field13935__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field13935.cljs$core$IFn$_invoke$arity$1 = hidden_field13935__1;
hidden_field13935.cljs$core$IFn$_invoke$arity$2 = hidden_field13935__2;
return hidden_field13935;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13935);
/**
* Creates a new text input field.
*/
sablono.core.text_field13936 = (function() {
var text_field13936 = null;
var text_field13936__1 = (function (name){return text_field13936.call(null,name,null);
});
var text_field13936__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field13936 = function(name,value){
switch(arguments.length){
case 1:
return text_field13936__1.call(this,name);
case 2:
return text_field13936__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field13936.cljs$core$IFn$_invoke$arity$1 = text_field13936__1;
text_field13936.cljs$core$IFn$_invoke$arity$2 = text_field13936__2;
return text_field13936;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13936);
/**
* Creates a new password field.
*/
sablono.core.password_field13937 = (function() {
var password_field13937 = null;
var password_field13937__1 = (function (name){return password_field13937.call(null,name,null);
});
var password_field13937__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field13937 = function(name,value){
switch(arguments.length){
case 1:
return password_field13937__1.call(this,name);
case 2:
return password_field13937__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field13937.cljs$core$IFn$_invoke$arity$1 = password_field13937__1;
password_field13937.cljs$core$IFn$_invoke$arity$2 = password_field13937__2;
return password_field13937;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13937);
/**
* Creates a new email input field.
*/
sablono.core.email_field13938 = (function() {
var email_field13938 = null;
var email_field13938__1 = (function (name){return email_field13938.call(null,name,null);
});
var email_field13938__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field13938 = function(name,value){
switch(arguments.length){
case 1:
return email_field13938__1.call(this,name);
case 2:
return email_field13938__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field13938.cljs$core$IFn$_invoke$arity$1 = email_field13938__1;
email_field13938.cljs$core$IFn$_invoke$arity$2 = email_field13938__2;
return email_field13938;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13938);
/**
* Creates a check box.
*/
sablono.core.check_box13939 = (function() {
var check_box13939 = null;
var check_box13939__1 = (function (name){return check_box13939.call(null,name,null);
});
var check_box13939__2 = (function (name,checked_QMARK_){return check_box13939.call(null,name,checked_QMARK_,"true");
});
var check_box13939__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box13939 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box13939__1.call(this,name);
case 2:
return check_box13939__2.call(this,name,checked_QMARK_);
case 3:
return check_box13939__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box13939.cljs$core$IFn$_invoke$arity$1 = check_box13939__1;
check_box13939.cljs$core$IFn$_invoke$arity$2 = check_box13939__2;
check_box13939.cljs$core$IFn$_invoke$arity$3 = check_box13939__3;
return check_box13939;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box13939);
/**
* Creates a radio button.
*/
sablono.core.radio_button13940 = (function() {
var radio_button13940 = null;
var radio_button13940__1 = (function (group){return radio_button13940.call(null,group,null);
});
var radio_button13940__2 = (function (group,checked_QMARK_){return radio_button13940.call(null,group,checked_QMARK_,"true");
});
var radio_button13940__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button13940 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button13940__1.call(this,group);
case 2:
return radio_button13940__2.call(this,group,checked_QMARK_);
case 3:
return radio_button13940__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button13940.cljs$core$IFn$_invoke$arity$1 = radio_button13940__1;
radio_button13940.cljs$core$IFn$_invoke$arity$2 = radio_button13940__2;
radio_button13940.cljs$core$IFn$_invoke$arity$3 = radio_button13940__3;
return radio_button13940;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button13940);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options13941 = (function() {
var select_options13941 = null;
var select_options13941__1 = (function (coll){return select_options13941.call(null,coll,null);
});
var select_options13941__2 = (function (coll,selected){var iter__7763__auto__ = (function iter__13950(s__13951){return (new cljs.core.LazySeq(null,(function (){var s__13951__$1 = s__13951;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13951__$1);if(temp__4092__auto__)
{var s__13951__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13951__$2))
{var c__7761__auto__ = cljs.core.chunk_first.call(null,s__13951__$2);var size__7762__auto__ = cljs.core.count.call(null,c__7761__auto__);var b__13953 = cljs.core.chunk_buffer.call(null,size__7762__auto__);if((function (){var i__13952 = 0;while(true){
if((i__13952 < size__7762__auto__))
{var x = cljs.core._nth.call(null,c__7761__auto__,i__13952);cljs.core.chunk_append.call(null,b__13953,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13956 = x;var text = cljs.core.nth.call(null,vec__13956,0,null);var val = cljs.core.nth.call(null,vec__13956,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options13941.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__13958 = (i__13952 + 1);
i__13952 = G__13958;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13953),iter__13950.call(null,cljs.core.chunk_rest.call(null,s__13951__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13953),null);
}
} else
{var x = cljs.core.first.call(null,s__13951__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13957 = x;var text = cljs.core.nth.call(null,vec__13957,0,null);var val = cljs.core.nth.call(null,vec__13957,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options13941.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__13950.call(null,cljs.core.rest.call(null,s__13951__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7763__auto__.call(null,coll);
});
select_options13941 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options13941__1.call(this,coll);
case 2:
return select_options13941__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options13941.cljs$core$IFn$_invoke$arity$1 = select_options13941__1;
select_options13941.cljs$core$IFn$_invoke$arity$2 = select_options13941__2;
return select_options13941;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options13941);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down13959 = (function() {
var drop_down13959 = null;
var drop_down13959__2 = (function (name,options){return drop_down13959.call(null,name,options,null);
});
var drop_down13959__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down13959 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down13959__2.call(this,name,options);
case 3:
return drop_down13959__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down13959.cljs$core$IFn$_invoke$arity$2 = drop_down13959__2;
drop_down13959.cljs$core$IFn$_invoke$arity$3 = drop_down13959__3;
return drop_down13959;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down13959);
/**
* Creates a text area element.
*/
sablono.core.text_area13960 = (function() {
var text_area13960 = null;
var text_area13960__1 = (function (name){return text_area13960.call(null,name,null);
});
var text_area13960__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area13960 = function(name,value){
switch(arguments.length){
case 1:
return text_area13960__1.call(this,name);
case 2:
return text_area13960__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area13960.cljs$core$IFn$_invoke$arity$1 = text_area13960__1;
text_area13960.cljs$core$IFn$_invoke$arity$2 = text_area13960__2;
return text_area13960;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area13960);
/**
* Creates a file upload input.
*/
sablono.core.file_upload13961 = (function file_upload13961(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload13961);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label13962 = (function label13962(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label13962);
/**
* Creates a submit button.
*/
sablono.core.submit_button13963 = (function submit_button13963(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button13963);
/**
* Creates a form reset button.
*/
sablono.core.reset_button13964 = (function reset_button13964(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button13964);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to13965 = (function() { 
var form_to13965__delegate = function (p__13966,body){var vec__13968 = p__13966;var method = cljs.core.nth.call(null,vec__13968,0,null);var action = cljs.core.nth.call(null,vec__13968,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to13965 = function (p__13966,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to13965__delegate.call(this,p__13966,body);};
form_to13965.cljs$lang$maxFixedArity = 1;
form_to13965.cljs$lang$applyTo = (function (arglist__13969){
var p__13966 = cljs.core.first(arglist__13969);
var body = cljs.core.rest(arglist__13969);
return form_to13965__delegate(p__13966,body);
});
form_to13965.cljs$core$IFn$_invoke$arity$variadic = form_to13965__delegate;
return form_to13965;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to13965);

//# sourceMappingURL=core.js.map