// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj18389 = {};return obj18389;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7034__auto__ = this$;if(and__7034__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7034__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__7673__auto__ = (((this$ == null))?null:this$);return (function (){var or__7046__auto__ = (dommy.template._elem[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (dommy.template._elem["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_18392 = node_str.substring(base_idx);while(true){
var next_idx_18393 = dommy.template.next_css_index.call(null,str_18392,1);var frag_18394 = (((next_idx_18393 >= 0))?str_18392.substring(0,next_idx_18393):str_18392);var G__18391_18395 = frag_18394.charAt(0);if(cljs.core._EQ_.call(null,"#",G__18391_18395))
{node.setAttribute("id",frag_18394.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__18391_18395))
{dommy.attrs.add_class_BANG_.call(null,node,frag_18394.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_18394.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_18393 >= 0))
{{
var G__18396 = str_18392.substring(next_idx_18393);
str_18392 = G__18396;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__18402 = data;if(G__18402)
{var bit__7696__auto__ = null;if(cljs.core.truth_((function (){var or__7046__auto__ = bit__7696__auto__;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return G__18402.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18402.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18402);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18402);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__18403_18407 = cljs.core.seq.call(null,data);var chunk__18404_18408 = null;var count__18405_18409 = 0;var i__18406_18410 = 0;while(true){
if((i__18406_18410 < count__18405_18409))
{var child_18411 = cljs.core._nth.call(null,chunk__18404_18408,i__18406_18410);__GT_document_fragment.call(null,result_frag,child_18411);
{
var G__18412 = seq__18403_18407;
var G__18413 = chunk__18404_18408;
var G__18414 = count__18405_18409;
var G__18415 = (i__18406_18410 + 1);
seq__18403_18407 = G__18412;
chunk__18404_18408 = G__18413;
count__18405_18409 = G__18414;
i__18406_18410 = G__18415;
continue;
}
} else
{var temp__4092__auto___18416 = cljs.core.seq.call(null,seq__18403_18407);if(temp__4092__auto___18416)
{var seq__18403_18417__$1 = temp__4092__auto___18416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18403_18417__$1))
{var c__7794__auto___18418 = cljs.core.chunk_first.call(null,seq__18403_18417__$1);{
var G__18419 = cljs.core.chunk_rest.call(null,seq__18403_18417__$1);
var G__18420 = c__7794__auto___18418;
var G__18421 = cljs.core.count.call(null,c__7794__auto___18418);
var G__18422 = 0;
seq__18403_18407 = G__18419;
chunk__18404_18408 = G__18420;
count__18405_18409 = G__18421;
i__18406_18410 = G__18422;
continue;
}
} else
{var child_18423 = cljs.core.first.call(null,seq__18403_18417__$1);__GT_document_fragment.call(null,result_frag,child_18423);
{
var G__18424 = cljs.core.next.call(null,seq__18403_18417__$1);
var G__18425 = null;
var G__18426 = 0;
var G__18427 = 0;
seq__18403_18407 = G__18424;
chunk__18404_18408 = G__18425;
count__18405_18409 = G__18426;
i__18406_18410 = G__18427;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__18429 = data;if(G__18429)
{var bit__7696__auto__ = null;if(cljs.core.truth_((function (){var or__7046__auto__ = bit__7696__auto__;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return G__18429.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18429.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18429);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18429);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__18430){var vec__18450 = p__18430;var tag_name = cljs.core.nth.call(null,vec__18450,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__18450,1,null);var children = cljs.core.nthnext.call(null,vec__18450,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__18452 = maybe_attrs;if(G__18452)
{var bit__7696__auto__ = null;if(cljs.core.truth_((function (){var or__7046__auto__ = bit__7696__auto__;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return G__18452.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18452.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18452);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18452);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__18453_18469 = cljs.core.seq.call(null,attrs);var chunk__18454_18470 = null;var count__18455_18471 = 0;var i__18456_18472 = 0;while(true){
if((i__18456_18472 < count__18455_18471))
{var vec__18457_18473 = cljs.core._nth.call(null,chunk__18454_18470,i__18456_18472);var k_18474 = cljs.core.nth.call(null,vec__18457_18473,0,null);var v_18475 = cljs.core.nth.call(null,vec__18457_18473,1,null);var G__18458_18476 = k_18474;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__18458_18476))
{var seq__18459_18477 = cljs.core.seq.call(null,v_18475);var chunk__18460_18478 = null;var count__18461_18479 = 0;var i__18462_18480 = 0;while(true){
if((i__18462_18480 < count__18461_18479))
{var c_18481 = cljs.core._nth.call(null,chunk__18460_18478,i__18462_18480);dommy.attrs.add_class_BANG_.call(null,n,c_18481);
{
var G__18482 = seq__18459_18477;
var G__18483 = chunk__18460_18478;
var G__18484 = count__18461_18479;
var G__18485 = (i__18462_18480 + 1);
seq__18459_18477 = G__18482;
chunk__18460_18478 = G__18483;
count__18461_18479 = G__18484;
i__18462_18480 = G__18485;
continue;
}
} else
{var temp__4092__auto___18486 = cljs.core.seq.call(null,seq__18459_18477);if(temp__4092__auto___18486)
{var seq__18459_18487__$1 = temp__4092__auto___18486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18459_18487__$1))
{var c__7794__auto___18488 = cljs.core.chunk_first.call(null,seq__18459_18487__$1);{
var G__18489 = cljs.core.chunk_rest.call(null,seq__18459_18487__$1);
var G__18490 = c__7794__auto___18488;
var G__18491 = cljs.core.count.call(null,c__7794__auto___18488);
var G__18492 = 0;
seq__18459_18477 = G__18489;
chunk__18460_18478 = G__18490;
count__18461_18479 = G__18491;
i__18462_18480 = G__18492;
continue;
}
} else
{var c_18493 = cljs.core.first.call(null,seq__18459_18487__$1);dommy.attrs.add_class_BANG_.call(null,n,c_18493);
{
var G__18494 = cljs.core.next.call(null,seq__18459_18487__$1);
var G__18495 = null;
var G__18496 = 0;
var G__18497 = 0;
seq__18459_18477 = G__18494;
chunk__18460_18478 = G__18495;
count__18461_18479 = G__18496;
i__18462_18480 = G__18497;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__18458_18476))
{dommy.attrs.add_class_BANG_.call(null,n,v_18475);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_18474,v_18475);
} else
{}
}
}
{
var G__18498 = seq__18453_18469;
var G__18499 = chunk__18454_18470;
var G__18500 = count__18455_18471;
var G__18501 = (i__18456_18472 + 1);
seq__18453_18469 = G__18498;
chunk__18454_18470 = G__18499;
count__18455_18471 = G__18500;
i__18456_18472 = G__18501;
continue;
}
} else
{var temp__4092__auto___18502 = cljs.core.seq.call(null,seq__18453_18469);if(temp__4092__auto___18502)
{var seq__18453_18503__$1 = temp__4092__auto___18502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18453_18503__$1))
{var c__7794__auto___18504 = cljs.core.chunk_first.call(null,seq__18453_18503__$1);{
var G__18505 = cljs.core.chunk_rest.call(null,seq__18453_18503__$1);
var G__18506 = c__7794__auto___18504;
var G__18507 = cljs.core.count.call(null,c__7794__auto___18504);
var G__18508 = 0;
seq__18453_18469 = G__18505;
chunk__18454_18470 = G__18506;
count__18455_18471 = G__18507;
i__18456_18472 = G__18508;
continue;
}
} else
{var vec__18463_18509 = cljs.core.first.call(null,seq__18453_18503__$1);var k_18510 = cljs.core.nth.call(null,vec__18463_18509,0,null);var v_18511 = cljs.core.nth.call(null,vec__18463_18509,1,null);var G__18464_18512 = k_18510;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__18464_18512))
{var seq__18465_18513 = cljs.core.seq.call(null,v_18511);var chunk__18466_18514 = null;var count__18467_18515 = 0;var i__18468_18516 = 0;while(true){
if((i__18468_18516 < count__18467_18515))
{var c_18517 = cljs.core._nth.call(null,chunk__18466_18514,i__18468_18516);dommy.attrs.add_class_BANG_.call(null,n,c_18517);
{
var G__18518 = seq__18465_18513;
var G__18519 = chunk__18466_18514;
var G__18520 = count__18467_18515;
var G__18521 = (i__18468_18516 + 1);
seq__18465_18513 = G__18518;
chunk__18466_18514 = G__18519;
count__18467_18515 = G__18520;
i__18468_18516 = G__18521;
continue;
}
} else
{var temp__4092__auto___18522__$1 = cljs.core.seq.call(null,seq__18465_18513);if(temp__4092__auto___18522__$1)
{var seq__18465_18523__$1 = temp__4092__auto___18522__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18465_18523__$1))
{var c__7794__auto___18524 = cljs.core.chunk_first.call(null,seq__18465_18523__$1);{
var G__18525 = cljs.core.chunk_rest.call(null,seq__18465_18523__$1);
var G__18526 = c__7794__auto___18524;
var G__18527 = cljs.core.count.call(null,c__7794__auto___18524);
var G__18528 = 0;
seq__18465_18513 = G__18525;
chunk__18466_18514 = G__18526;
count__18467_18515 = G__18527;
i__18468_18516 = G__18528;
continue;
}
} else
{var c_18529 = cljs.core.first.call(null,seq__18465_18523__$1);dommy.attrs.add_class_BANG_.call(null,n,c_18529);
{
var G__18530 = cljs.core.next.call(null,seq__18465_18523__$1);
var G__18531 = null;
var G__18532 = 0;
var G__18533 = 0;
seq__18465_18513 = G__18530;
chunk__18466_18514 = G__18531;
count__18467_18515 = G__18532;
i__18468_18516 = G__18533;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__18464_18512))
{dommy.attrs.add_class_BANG_.call(null,n,v_18511);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_18510,v_18511);
} else
{}
}
}
{
var G__18534 = cljs.core.next.call(null,seq__18453_18503__$1);
var G__18535 = null;
var G__18536 = 0;
var G__18537 = 0;
seq__18453_18469 = G__18534;
chunk__18454_18470 = G__18535;
count__18455_18471 = G__18536;
i__18456_18472 = G__18537;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e18538){if((e18538 instanceof ReferenceError))
{var __18539 = e18538;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18538;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__18541 = data;if(G__18541)
{var bit__7696__auto__ = null;if(cljs.core.truth_((function (){var or__7046__auto__ = bit__7696__auto__;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return G__18541.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18541.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18541);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18541);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map