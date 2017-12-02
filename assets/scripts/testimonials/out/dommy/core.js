// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__7046__auto__ = elem.textContent;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__17995 = dommy.template.__GT_node_like.call(null,parent);G__17995.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__17995;
});
var append_BANG___3 = (function() { 
var G__18000__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__17996_18001 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__17997_18002 = null;var count__17998_18003 = 0;var i__17999_18004 = 0;while(true){
if((i__17999_18004 < count__17998_18003))
{var c_18005 = cljs.core._nth.call(null,chunk__17997_18002,i__17999_18004);append_BANG_.call(null,parent__$1,c_18005);
{
var G__18006 = seq__17996_18001;
var G__18007 = chunk__17997_18002;
var G__18008 = count__17998_18003;
var G__18009 = (i__17999_18004 + 1);
seq__17996_18001 = G__18006;
chunk__17997_18002 = G__18007;
count__17998_18003 = G__18008;
i__17999_18004 = G__18009;
continue;
}
} else
{var temp__4092__auto___18010 = cljs.core.seq.call(null,seq__17996_18001);if(temp__4092__auto___18010)
{var seq__17996_18011__$1 = temp__4092__auto___18010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17996_18011__$1))
{var c__7794__auto___18012 = cljs.core.chunk_first.call(null,seq__17996_18011__$1);{
var G__18013 = cljs.core.chunk_rest.call(null,seq__17996_18011__$1);
var G__18014 = c__7794__auto___18012;
var G__18015 = cljs.core.count.call(null,c__7794__auto___18012);
var G__18016 = 0;
seq__17996_18001 = G__18013;
chunk__17997_18002 = G__18014;
count__17998_18003 = G__18015;
i__17999_18004 = G__18016;
continue;
}
} else
{var c_18017 = cljs.core.first.call(null,seq__17996_18011__$1);append_BANG_.call(null,parent__$1,c_18017);
{
var G__18018 = cljs.core.next.call(null,seq__17996_18011__$1);
var G__18019 = null;
var G__18020 = 0;
var G__18021 = 0;
seq__17996_18001 = G__18018;
chunk__17997_18002 = G__18019;
count__17998_18003 = G__18020;
i__17999_18004 = G__18021;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__18000 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18000__delegate.call(this,parent,child,more_children);};
G__18000.cljs$lang$maxFixedArity = 2;
G__18000.cljs$lang$applyTo = (function (arglist__18022){
var parent = cljs.core.first(arglist__18022);
arglist__18022 = cljs.core.next(arglist__18022);
var child = cljs.core.first(arglist__18022);
var more_children = cljs.core.rest(arglist__18022);
return G__18000__delegate(parent,child,more_children);
});
G__18000.cljs$core$IFn$_invoke$arity$variadic = G__18000__delegate;
return G__18000;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__18031__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__18027_18032 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__18028_18033 = null;var count__18029_18034 = 0;var i__18030_18035 = 0;while(true){
if((i__18030_18035 < count__18029_18034))
{var c_18036 = cljs.core._nth.call(null,chunk__18028_18033,i__18030_18035);prepend_BANG_.call(null,parent__$1,c_18036);
{
var G__18037 = seq__18027_18032;
var G__18038 = chunk__18028_18033;
var G__18039 = count__18029_18034;
var G__18040 = (i__18030_18035 + 1);
seq__18027_18032 = G__18037;
chunk__18028_18033 = G__18038;
count__18029_18034 = G__18039;
i__18030_18035 = G__18040;
continue;
}
} else
{var temp__4092__auto___18041 = cljs.core.seq.call(null,seq__18027_18032);if(temp__4092__auto___18041)
{var seq__18027_18042__$1 = temp__4092__auto___18041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18027_18042__$1))
{var c__7794__auto___18043 = cljs.core.chunk_first.call(null,seq__18027_18042__$1);{
var G__18044 = cljs.core.chunk_rest.call(null,seq__18027_18042__$1);
var G__18045 = c__7794__auto___18043;
var G__18046 = cljs.core.count.call(null,c__7794__auto___18043);
var G__18047 = 0;
seq__18027_18032 = G__18044;
chunk__18028_18033 = G__18045;
count__18029_18034 = G__18046;
i__18030_18035 = G__18047;
continue;
}
} else
{var c_18048 = cljs.core.first.call(null,seq__18027_18042__$1);prepend_BANG_.call(null,parent__$1,c_18048);
{
var G__18049 = cljs.core.next.call(null,seq__18027_18042__$1);
var G__18050 = null;
var G__18051 = 0;
var G__18052 = 0;
seq__18027_18032 = G__18049;
chunk__18028_18033 = G__18050;
count__18029_18034 = G__18051;
i__18030_18035 = G__18052;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__18031 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18031__delegate.call(this,parent,child,more_children);};
G__18031.cljs$lang$maxFixedArity = 2;
G__18031.cljs$lang$applyTo = (function (arglist__18053){
var parent = cljs.core.first(arglist__18053);
arglist__18053 = cljs.core.next(arglist__18053);
var child = cljs.core.first(arglist__18053);
var more_children = cljs.core.rest(arglist__18053);
return G__18031__delegate(parent,child,more_children);
});
G__18031.cljs$core$IFn$_invoke$arity$variadic = G__18031__delegate;
return G__18031;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___18054 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___18054))
{var next_18055 = temp__4090__auto___18054;parent.insertBefore(actual_node,next_18055);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__18057 = dommy.template.__GT_node_like.call(null,parent);G__18057.innerHTML = "";
dommy.core.append_BANG_.call(null,G__18057,node_like);
return G__18057;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__18059 = elem__$1.parentNode;G__18059.removeChild(elem__$1);
return G__18059;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18065){var vec__18066 = p__18065;var k = cljs.core.nth.call(null,vec__18066,0,null);var v = cljs.core.nth.call(null,vec__18066,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t18067 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t18067 = (function (v,k,vec__18066,p__18065,container,key_selectors_map,template,selector_map,meta18068){
this.v = v;
this.k = k;
this.vec__18066 = vec__18066;
this.p__18065 = p__18065;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta18068 = meta18068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t18067.cljs$lang$type = true;
dommy.core.t18067.cljs$lang$ctorStr = "dommy.core/t18067";
dommy.core.t18067.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"dommy.core/t18067");
});
dommy.core.t18067.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t18067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18069){var self__ = this;
var _18069__$1 = this;return self__.meta18068;
});
dommy.core.t18067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18069,meta18068__$1){var self__ = this;
var _18069__$1 = this;return (new dommy.core.t18067(self__.v,self__.k,self__.vec__18066,self__.p__18065,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta18068__$1));
});
dommy.core.__GT_t18067 = (function __GT_t18067(v__$1,k__$1,vec__18066__$1,p__18065__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta18068){return (new dommy.core.t18067(v__$1,k__$1,vec__18066__$1,p__18065__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta18068));
});
}
return (new dommy.core.t18067(v,k,vec__18066,p__18065,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__18070_SHARP_){return p1__18070_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__18071_SHARP_){return !((p1__18071_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18072){var vec__18073 = p__18072;var special_mouse_event = cljs.core.nth.call(null,vec__18073,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__18073,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7046__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__7034__auto__ = related_target;if(cljs.core.truth_(and__7034__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__7034__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__7034__auto__ = selected_target;if(cljs.core.truth_(and__7034__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__7034__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__7046__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__18074){
var elem = cljs.core.first(arglist__18074);
arglist__18074 = cljs.core.next(arglist__18074);
var f = cljs.core.first(arglist__18074);
var args = cljs.core.rest(arglist__18074);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__18075_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__18075_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__18099_18122 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_18123 = cljs.core.nth.call(null,vec__18099_18122,0,null);var selector_18124 = cljs.core.nth.call(null,vec__18099_18122,1,null);var seq__18100_18125 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__18107_18126 = null;var count__18108_18127 = 0;var i__18109_18128 = 0;while(true){
if((i__18109_18128 < count__18108_18127))
{var vec__18116_18129 = cljs.core._nth.call(null,chunk__18107_18126,i__18109_18128);var orig_type_18130 = cljs.core.nth.call(null,vec__18116_18129,0,null);var f_18131 = cljs.core.nth.call(null,vec__18116_18129,1,null);var seq__18110_18132 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18130,new cljs.core.PersistentArrayMap.fromArray([orig_type_18130,cljs.core.identity], true, false)));var chunk__18112_18133 = null;var count__18113_18134 = 0;var i__18114_18135 = 0;while(true){
if((i__18114_18135 < count__18113_18134))
{var vec__18117_18136 = cljs.core._nth.call(null,chunk__18112_18133,i__18114_18135);var actual_type_18137 = cljs.core.nth.call(null,vec__18117_18136,0,null);var factory_18138 = cljs.core.nth.call(null,vec__18117_18136,1,null);var canonical_f_18139 = (cljs.core.truth_(selector_18124)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18123,selector_18124):cljs.core.identity).call(null,factory_18138.call(null,f_18131));dommy.core.update_event_listeners_BANG_.call(null,elem_18123,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18124,actual_type_18137,f_18131], null),canonical_f_18139);
if(cljs.core.truth_(elem_18123.addEventListener))
{elem_18123.addEventListener(cljs.core.name.call(null,actual_type_18137),canonical_f_18139);
} else
{elem_18123.attachEvent(cljs.core.name.call(null,actual_type_18137),canonical_f_18139);
}
{
var G__18140 = seq__18110_18132;
var G__18141 = chunk__18112_18133;
var G__18142 = count__18113_18134;
var G__18143 = (i__18114_18135 + 1);
seq__18110_18132 = G__18140;
chunk__18112_18133 = G__18141;
count__18113_18134 = G__18142;
i__18114_18135 = G__18143;
continue;
}
} else
{var temp__4092__auto___18144 = cljs.core.seq.call(null,seq__18110_18132);if(temp__4092__auto___18144)
{var seq__18110_18145__$1 = temp__4092__auto___18144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18110_18145__$1))
{var c__7794__auto___18146 = cljs.core.chunk_first.call(null,seq__18110_18145__$1);{
var G__18147 = cljs.core.chunk_rest.call(null,seq__18110_18145__$1);
var G__18148 = c__7794__auto___18146;
var G__18149 = cljs.core.count.call(null,c__7794__auto___18146);
var G__18150 = 0;
seq__18110_18132 = G__18147;
chunk__18112_18133 = G__18148;
count__18113_18134 = G__18149;
i__18114_18135 = G__18150;
continue;
}
} else
{var vec__18118_18151 = cljs.core.first.call(null,seq__18110_18145__$1);var actual_type_18152 = cljs.core.nth.call(null,vec__18118_18151,0,null);var factory_18153 = cljs.core.nth.call(null,vec__18118_18151,1,null);var canonical_f_18154 = (cljs.core.truth_(selector_18124)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18123,selector_18124):cljs.core.identity).call(null,factory_18153.call(null,f_18131));dommy.core.update_event_listeners_BANG_.call(null,elem_18123,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18124,actual_type_18152,f_18131], null),canonical_f_18154);
if(cljs.core.truth_(elem_18123.addEventListener))
{elem_18123.addEventListener(cljs.core.name.call(null,actual_type_18152),canonical_f_18154);
} else
{elem_18123.attachEvent(cljs.core.name.call(null,actual_type_18152),canonical_f_18154);
}
{
var G__18155 = cljs.core.next.call(null,seq__18110_18145__$1);
var G__18156 = null;
var G__18157 = 0;
var G__18158 = 0;
seq__18110_18132 = G__18155;
chunk__18112_18133 = G__18156;
count__18113_18134 = G__18157;
i__18114_18135 = G__18158;
continue;
}
}
} else
{}
}
break;
}
{
var G__18159 = seq__18100_18125;
var G__18160 = chunk__18107_18126;
var G__18161 = count__18108_18127;
var G__18162 = (i__18109_18128 + 1);
seq__18100_18125 = G__18159;
chunk__18107_18126 = G__18160;
count__18108_18127 = G__18161;
i__18109_18128 = G__18162;
continue;
}
} else
{var temp__4092__auto___18163 = cljs.core.seq.call(null,seq__18100_18125);if(temp__4092__auto___18163)
{var seq__18100_18164__$1 = temp__4092__auto___18163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18100_18164__$1))
{var c__7794__auto___18165 = cljs.core.chunk_first.call(null,seq__18100_18164__$1);{
var G__18166 = cljs.core.chunk_rest.call(null,seq__18100_18164__$1);
var G__18167 = c__7794__auto___18165;
var G__18168 = cljs.core.count.call(null,c__7794__auto___18165);
var G__18169 = 0;
seq__18100_18125 = G__18166;
chunk__18107_18126 = G__18167;
count__18108_18127 = G__18168;
i__18109_18128 = G__18169;
continue;
}
} else
{var vec__18119_18170 = cljs.core.first.call(null,seq__18100_18164__$1);var orig_type_18171 = cljs.core.nth.call(null,vec__18119_18170,0,null);var f_18172 = cljs.core.nth.call(null,vec__18119_18170,1,null);var seq__18101_18173 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18171,new cljs.core.PersistentArrayMap.fromArray([orig_type_18171,cljs.core.identity], true, false)));var chunk__18103_18174 = null;var count__18104_18175 = 0;var i__18105_18176 = 0;while(true){
if((i__18105_18176 < count__18104_18175))
{var vec__18120_18177 = cljs.core._nth.call(null,chunk__18103_18174,i__18105_18176);var actual_type_18178 = cljs.core.nth.call(null,vec__18120_18177,0,null);var factory_18179 = cljs.core.nth.call(null,vec__18120_18177,1,null);var canonical_f_18180 = (cljs.core.truth_(selector_18124)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18123,selector_18124):cljs.core.identity).call(null,factory_18179.call(null,f_18172));dommy.core.update_event_listeners_BANG_.call(null,elem_18123,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18124,actual_type_18178,f_18172], null),canonical_f_18180);
if(cljs.core.truth_(elem_18123.addEventListener))
{elem_18123.addEventListener(cljs.core.name.call(null,actual_type_18178),canonical_f_18180);
} else
{elem_18123.attachEvent(cljs.core.name.call(null,actual_type_18178),canonical_f_18180);
}
{
var G__18181 = seq__18101_18173;
var G__18182 = chunk__18103_18174;
var G__18183 = count__18104_18175;
var G__18184 = (i__18105_18176 + 1);
seq__18101_18173 = G__18181;
chunk__18103_18174 = G__18182;
count__18104_18175 = G__18183;
i__18105_18176 = G__18184;
continue;
}
} else
{var temp__4092__auto___18185__$1 = cljs.core.seq.call(null,seq__18101_18173);if(temp__4092__auto___18185__$1)
{var seq__18101_18186__$1 = temp__4092__auto___18185__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18101_18186__$1))
{var c__7794__auto___18187 = cljs.core.chunk_first.call(null,seq__18101_18186__$1);{
var G__18188 = cljs.core.chunk_rest.call(null,seq__18101_18186__$1);
var G__18189 = c__7794__auto___18187;
var G__18190 = cljs.core.count.call(null,c__7794__auto___18187);
var G__18191 = 0;
seq__18101_18173 = G__18188;
chunk__18103_18174 = G__18189;
count__18104_18175 = G__18190;
i__18105_18176 = G__18191;
continue;
}
} else
{var vec__18121_18192 = cljs.core.first.call(null,seq__18101_18186__$1);var actual_type_18193 = cljs.core.nth.call(null,vec__18121_18192,0,null);var factory_18194 = cljs.core.nth.call(null,vec__18121_18192,1,null);var canonical_f_18195 = (cljs.core.truth_(selector_18124)?cljs.core.partial.call(null,dommy.core.live_listener,elem_18123,selector_18124):cljs.core.identity).call(null,factory_18194.call(null,f_18172));dommy.core.update_event_listeners_BANG_.call(null,elem_18123,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18124,actual_type_18193,f_18172], null),canonical_f_18195);
if(cljs.core.truth_(elem_18123.addEventListener))
{elem_18123.addEventListener(cljs.core.name.call(null,actual_type_18193),canonical_f_18195);
} else
{elem_18123.attachEvent(cljs.core.name.call(null,actual_type_18193),canonical_f_18195);
}
{
var G__18196 = cljs.core.next.call(null,seq__18101_18186__$1);
var G__18197 = null;
var G__18198 = 0;
var G__18199 = 0;
seq__18101_18173 = G__18196;
chunk__18103_18174 = G__18197;
count__18104_18175 = G__18198;
i__18105_18176 = G__18199;
continue;
}
}
} else
{}
}
break;
}
{
var G__18200 = cljs.core.next.call(null,seq__18100_18164__$1);
var G__18201 = null;
var G__18202 = 0;
var G__18203 = 0;
seq__18100_18125 = G__18200;
chunk__18107_18126 = G__18201;
count__18108_18127 = G__18202;
i__18109_18128 = G__18203;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__18204){
var elem_sel = cljs.core.first(arglist__18204);
var type_fs = cljs.core.rest(arglist__18204);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__18228_18251 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_18252 = cljs.core.nth.call(null,vec__18228_18251,0,null);var selector_18253 = cljs.core.nth.call(null,vec__18228_18251,1,null);var seq__18229_18254 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__18236_18255 = null;var count__18237_18256 = 0;var i__18238_18257 = 0;while(true){
if((i__18238_18257 < count__18237_18256))
{var vec__18245_18258 = cljs.core._nth.call(null,chunk__18236_18255,i__18238_18257);var orig_type_18259 = cljs.core.nth.call(null,vec__18245_18258,0,null);var f_18260 = cljs.core.nth.call(null,vec__18245_18258,1,null);var seq__18239_18261 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18259,new cljs.core.PersistentArrayMap.fromArray([orig_type_18259,cljs.core.identity], true, false)));var chunk__18241_18262 = null;var count__18242_18263 = 0;var i__18243_18264 = 0;while(true){
if((i__18243_18264 < count__18242_18263))
{var vec__18246_18265 = cljs.core._nth.call(null,chunk__18241_18262,i__18243_18264);var actual_type_18266 = cljs.core.nth.call(null,vec__18246_18265,0,null);var __18267 = cljs.core.nth.call(null,vec__18246_18265,1,null);var keys_18268 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18253,actual_type_18266,f_18260], null);var canonical_f_18269 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18252),keys_18268);dommy.core.update_event_listeners_BANG_.call(null,elem_18252,dommy.utils.dissoc_in,keys_18268);
if(cljs.core.truth_(elem_18252.removeEventListener))
{elem_18252.removeEventListener(cljs.core.name.call(null,actual_type_18266),canonical_f_18269);
} else
{elem_18252.detachEvent(cljs.core.name.call(null,actual_type_18266),canonical_f_18269);
}
{
var G__18270 = seq__18239_18261;
var G__18271 = chunk__18241_18262;
var G__18272 = count__18242_18263;
var G__18273 = (i__18243_18264 + 1);
seq__18239_18261 = G__18270;
chunk__18241_18262 = G__18271;
count__18242_18263 = G__18272;
i__18243_18264 = G__18273;
continue;
}
} else
{var temp__4092__auto___18274 = cljs.core.seq.call(null,seq__18239_18261);if(temp__4092__auto___18274)
{var seq__18239_18275__$1 = temp__4092__auto___18274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18239_18275__$1))
{var c__7794__auto___18276 = cljs.core.chunk_first.call(null,seq__18239_18275__$1);{
var G__18277 = cljs.core.chunk_rest.call(null,seq__18239_18275__$1);
var G__18278 = c__7794__auto___18276;
var G__18279 = cljs.core.count.call(null,c__7794__auto___18276);
var G__18280 = 0;
seq__18239_18261 = G__18277;
chunk__18241_18262 = G__18278;
count__18242_18263 = G__18279;
i__18243_18264 = G__18280;
continue;
}
} else
{var vec__18247_18281 = cljs.core.first.call(null,seq__18239_18275__$1);var actual_type_18282 = cljs.core.nth.call(null,vec__18247_18281,0,null);var __18283 = cljs.core.nth.call(null,vec__18247_18281,1,null);var keys_18284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18253,actual_type_18282,f_18260], null);var canonical_f_18285 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18252),keys_18284);dommy.core.update_event_listeners_BANG_.call(null,elem_18252,dommy.utils.dissoc_in,keys_18284);
if(cljs.core.truth_(elem_18252.removeEventListener))
{elem_18252.removeEventListener(cljs.core.name.call(null,actual_type_18282),canonical_f_18285);
} else
{elem_18252.detachEvent(cljs.core.name.call(null,actual_type_18282),canonical_f_18285);
}
{
var G__18286 = cljs.core.next.call(null,seq__18239_18275__$1);
var G__18287 = null;
var G__18288 = 0;
var G__18289 = 0;
seq__18239_18261 = G__18286;
chunk__18241_18262 = G__18287;
count__18242_18263 = G__18288;
i__18243_18264 = G__18289;
continue;
}
}
} else
{}
}
break;
}
{
var G__18290 = seq__18229_18254;
var G__18291 = chunk__18236_18255;
var G__18292 = count__18237_18256;
var G__18293 = (i__18238_18257 + 1);
seq__18229_18254 = G__18290;
chunk__18236_18255 = G__18291;
count__18237_18256 = G__18292;
i__18238_18257 = G__18293;
continue;
}
} else
{var temp__4092__auto___18294 = cljs.core.seq.call(null,seq__18229_18254);if(temp__4092__auto___18294)
{var seq__18229_18295__$1 = temp__4092__auto___18294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18229_18295__$1))
{var c__7794__auto___18296 = cljs.core.chunk_first.call(null,seq__18229_18295__$1);{
var G__18297 = cljs.core.chunk_rest.call(null,seq__18229_18295__$1);
var G__18298 = c__7794__auto___18296;
var G__18299 = cljs.core.count.call(null,c__7794__auto___18296);
var G__18300 = 0;
seq__18229_18254 = G__18297;
chunk__18236_18255 = G__18298;
count__18237_18256 = G__18299;
i__18238_18257 = G__18300;
continue;
}
} else
{var vec__18248_18301 = cljs.core.first.call(null,seq__18229_18295__$1);var orig_type_18302 = cljs.core.nth.call(null,vec__18248_18301,0,null);var f_18303 = cljs.core.nth.call(null,vec__18248_18301,1,null);var seq__18230_18304 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_18302,new cljs.core.PersistentArrayMap.fromArray([orig_type_18302,cljs.core.identity], true, false)));var chunk__18232_18305 = null;var count__18233_18306 = 0;var i__18234_18307 = 0;while(true){
if((i__18234_18307 < count__18233_18306))
{var vec__18249_18308 = cljs.core._nth.call(null,chunk__18232_18305,i__18234_18307);var actual_type_18309 = cljs.core.nth.call(null,vec__18249_18308,0,null);var __18310 = cljs.core.nth.call(null,vec__18249_18308,1,null);var keys_18311 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18253,actual_type_18309,f_18303], null);var canonical_f_18312 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18252),keys_18311);dommy.core.update_event_listeners_BANG_.call(null,elem_18252,dommy.utils.dissoc_in,keys_18311);
if(cljs.core.truth_(elem_18252.removeEventListener))
{elem_18252.removeEventListener(cljs.core.name.call(null,actual_type_18309),canonical_f_18312);
} else
{elem_18252.detachEvent(cljs.core.name.call(null,actual_type_18309),canonical_f_18312);
}
{
var G__18313 = seq__18230_18304;
var G__18314 = chunk__18232_18305;
var G__18315 = count__18233_18306;
var G__18316 = (i__18234_18307 + 1);
seq__18230_18304 = G__18313;
chunk__18232_18305 = G__18314;
count__18233_18306 = G__18315;
i__18234_18307 = G__18316;
continue;
}
} else
{var temp__4092__auto___18317__$1 = cljs.core.seq.call(null,seq__18230_18304);if(temp__4092__auto___18317__$1)
{var seq__18230_18318__$1 = temp__4092__auto___18317__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18230_18318__$1))
{var c__7794__auto___18319 = cljs.core.chunk_first.call(null,seq__18230_18318__$1);{
var G__18320 = cljs.core.chunk_rest.call(null,seq__18230_18318__$1);
var G__18321 = c__7794__auto___18319;
var G__18322 = cljs.core.count.call(null,c__7794__auto___18319);
var G__18323 = 0;
seq__18230_18304 = G__18320;
chunk__18232_18305 = G__18321;
count__18233_18306 = G__18322;
i__18234_18307 = G__18323;
continue;
}
} else
{var vec__18250_18324 = cljs.core.first.call(null,seq__18230_18318__$1);var actual_type_18325 = cljs.core.nth.call(null,vec__18250_18324,0,null);var __18326 = cljs.core.nth.call(null,vec__18250_18324,1,null);var keys_18327 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18253,actual_type_18325,f_18303], null);var canonical_f_18328 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_18252),keys_18327);dommy.core.update_event_listeners_BANG_.call(null,elem_18252,dommy.utils.dissoc_in,keys_18327);
if(cljs.core.truth_(elem_18252.removeEventListener))
{elem_18252.removeEventListener(cljs.core.name.call(null,actual_type_18325),canonical_f_18328);
} else
{elem_18252.detachEvent(cljs.core.name.call(null,actual_type_18325),canonical_f_18328);
}
{
var G__18329 = cljs.core.next.call(null,seq__18230_18318__$1);
var G__18330 = null;
var G__18331 = 0;
var G__18332 = 0;
seq__18230_18304 = G__18329;
chunk__18232_18305 = G__18330;
count__18233_18306 = G__18331;
i__18234_18307 = G__18332;
continue;
}
}
} else
{}
}
break;
}
{
var G__18333 = cljs.core.next.call(null,seq__18229_18295__$1);
var G__18334 = null;
var G__18335 = 0;
var G__18336 = 0;
seq__18229_18254 = G__18333;
chunk__18236_18255 = G__18334;
count__18237_18256 = G__18335;
i__18238_18257 = G__18336;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__18337){
var elem_sel = cljs.core.first(arglist__18337);
var type_fs = cljs.core.rest(arglist__18337);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__18345_18352 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_18353 = cljs.core.nth.call(null,vec__18345_18352,0,null);var selector_18354 = cljs.core.nth.call(null,vec__18345_18352,1,null);var seq__18346_18355 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__18347_18356 = null;var count__18348_18357 = 0;var i__18349_18358 = 0;while(true){
if((i__18349_18358 < count__18348_18357))
{var vec__18350_18359 = cljs.core._nth.call(null,chunk__18347_18356,i__18349_18358);var type_18360 = cljs.core.nth.call(null,vec__18350_18359,0,null);var f_18361 = cljs.core.nth.call(null,vec__18350_18359,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_18360,((function (seq__18346_18355,chunk__18347_18356,count__18348_18357,i__18349_18358,vec__18350_18359,type_18360,f_18361){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_18360,this_fn);
return f_18361.call(null,e);
});})(seq__18346_18355,chunk__18347_18356,count__18348_18357,i__18349_18358,vec__18350_18359,type_18360,f_18361))
);
{
var G__18362 = seq__18346_18355;
var G__18363 = chunk__18347_18356;
var G__18364 = count__18348_18357;
var G__18365 = (i__18349_18358 + 1);
seq__18346_18355 = G__18362;
chunk__18347_18356 = G__18363;
count__18348_18357 = G__18364;
i__18349_18358 = G__18365;
continue;
}
} else
{var temp__4092__auto___18366 = cljs.core.seq.call(null,seq__18346_18355);if(temp__4092__auto___18366)
{var seq__18346_18367__$1 = temp__4092__auto___18366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18346_18367__$1))
{var c__7794__auto___18368 = cljs.core.chunk_first.call(null,seq__18346_18367__$1);{
var G__18369 = cljs.core.chunk_rest.call(null,seq__18346_18367__$1);
var G__18370 = c__7794__auto___18368;
var G__18371 = cljs.core.count.call(null,c__7794__auto___18368);
var G__18372 = 0;
seq__18346_18355 = G__18369;
chunk__18347_18356 = G__18370;
count__18348_18357 = G__18371;
i__18349_18358 = G__18372;
continue;
}
} else
{var vec__18351_18373 = cljs.core.first.call(null,seq__18346_18367__$1);var type_18374 = cljs.core.nth.call(null,vec__18351_18373,0,null);var f_18375 = cljs.core.nth.call(null,vec__18351_18373,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_18374,((function (seq__18346_18355,chunk__18347_18356,count__18348_18357,i__18349_18358,vec__18351_18373,type_18374,f_18375,seq__18346_18367__$1,temp__4092__auto___18366){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_18374,this_fn);
return f_18375.call(null,e);
});})(seq__18346_18355,chunk__18347_18356,count__18348_18357,i__18349_18358,vec__18351_18373,type_18374,f_18375,seq__18346_18367__$1,temp__4092__auto___18366))
);
{
var G__18376 = cljs.core.next.call(null,seq__18346_18367__$1);
var G__18377 = null;
var G__18378 = 0;
var G__18379 = 0;
seq__18346_18355 = G__18376;
chunk__18347_18356 = G__18377;
count__18348_18357 = G__18378;
i__18349_18358 = G__18379;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__18380){
var elem_sel = cljs.core.first(arglist__18380);
var type_fs = cljs.core.rest(arglist__18380);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__18381){var vec__18383 = p__18381;var update_event_BANG_ = cljs.core.nth.call(null,vec__18383,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__7046__auto__ = update_event_BANG_;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__18381 = null;if (arguments.length > 2) {
  p__18381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__18381);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__18384){
var node = cljs.core.first(arglist__18384);
arglist__18384 = cljs.core.next(arglist__18384);
var event_type = cljs.core.first(arglist__18384);
var p__18381 = cljs.core.rest(arglist__18384);
return fire_BANG___delegate(node,event_type,p__18381);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map