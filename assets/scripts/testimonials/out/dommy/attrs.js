// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7034__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7034__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7034__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__18542 = (i + class$.length);
start_from = G__18542;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___18567 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___18567))
{var class_list_18568 = temp__4090__auto___18567;var seq__18555_18569 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__18556_18570 = null;var count__18557_18571 = 0;var i__18558_18572 = 0;while(true){
if((i__18558_18572 < count__18557_18571))
{var class_18573 = cljs.core._nth.call(null,chunk__18556_18570,i__18558_18572);class_list_18568.add(class_18573);
{
var G__18574 = seq__18555_18569;
var G__18575 = chunk__18556_18570;
var G__18576 = count__18557_18571;
var G__18577 = (i__18558_18572 + 1);
seq__18555_18569 = G__18574;
chunk__18556_18570 = G__18575;
count__18557_18571 = G__18576;
i__18558_18572 = G__18577;
continue;
}
} else
{var temp__4092__auto___18578 = cljs.core.seq.call(null,seq__18555_18569);if(temp__4092__auto___18578)
{var seq__18555_18579__$1 = temp__4092__auto___18578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18555_18579__$1))
{var c__7794__auto___18580 = cljs.core.chunk_first.call(null,seq__18555_18579__$1);{
var G__18581 = cljs.core.chunk_rest.call(null,seq__18555_18579__$1);
var G__18582 = c__7794__auto___18580;
var G__18583 = cljs.core.count.call(null,c__7794__auto___18580);
var G__18584 = 0;
seq__18555_18569 = G__18581;
chunk__18556_18570 = G__18582;
count__18557_18571 = G__18583;
i__18558_18572 = G__18584;
continue;
}
} else
{var class_18585 = cljs.core.first.call(null,seq__18555_18579__$1);class_list_18568.add(class_18585);
{
var G__18586 = cljs.core.next.call(null,seq__18555_18579__$1);
var G__18587 = null;
var G__18588 = 0;
var G__18589 = 0;
seq__18555_18569 = G__18586;
chunk__18556_18570 = G__18587;
count__18557_18571 = G__18588;
i__18558_18572 = G__18589;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_18590 = elem__$1.className;var seq__18559_18591 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__18560_18592 = null;var count__18561_18593 = 0;var i__18562_18594 = 0;while(true){
if((i__18562_18594 < count__18561_18593))
{var class_18595 = cljs.core._nth.call(null,chunk__18560_18592,i__18562_18594);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_18590,class_18595)))
{} else
{elem__$1.className = (((class_name_18590 === ""))?class_18595:[cljs.core.str(class_name_18590),cljs.core.str(" "),cljs.core.str(class_18595)].join(''));
}
{
var G__18596 = seq__18559_18591;
var G__18597 = chunk__18560_18592;
var G__18598 = count__18561_18593;
var G__18599 = (i__18562_18594 + 1);
seq__18559_18591 = G__18596;
chunk__18560_18592 = G__18597;
count__18561_18593 = G__18598;
i__18562_18594 = G__18599;
continue;
}
} else
{var temp__4092__auto___18600 = cljs.core.seq.call(null,seq__18559_18591);if(temp__4092__auto___18600)
{var seq__18559_18601__$1 = temp__4092__auto___18600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18559_18601__$1))
{var c__7794__auto___18602 = cljs.core.chunk_first.call(null,seq__18559_18601__$1);{
var G__18603 = cljs.core.chunk_rest.call(null,seq__18559_18601__$1);
var G__18604 = c__7794__auto___18602;
var G__18605 = cljs.core.count.call(null,c__7794__auto___18602);
var G__18606 = 0;
seq__18559_18591 = G__18603;
chunk__18560_18592 = G__18604;
count__18561_18593 = G__18605;
i__18562_18594 = G__18606;
continue;
}
} else
{var class_18607 = cljs.core.first.call(null,seq__18559_18601__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_18590,class_18607)))
{} else
{elem__$1.className = (((class_name_18590 === ""))?class_18607:[cljs.core.str(class_name_18590),cljs.core.str(" "),cljs.core.str(class_18607)].join(''));
}
{
var G__18608 = cljs.core.next.call(null,seq__18559_18601__$1);
var G__18609 = null;
var G__18610 = 0;
var G__18611 = 0;
seq__18559_18591 = G__18608;
chunk__18560_18592 = G__18609;
count__18561_18593 = G__18610;
i__18562_18594 = G__18611;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__18612__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18563_18613 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__18564_18614 = null;var count__18565_18615 = 0;var i__18566_18616 = 0;while(true){
if((i__18566_18616 < count__18565_18615))
{var c_18617 = cljs.core._nth.call(null,chunk__18564_18614,i__18566_18616);add_class_BANG_.call(null,elem__$1,c_18617);
{
var G__18618 = seq__18563_18613;
var G__18619 = chunk__18564_18614;
var G__18620 = count__18565_18615;
var G__18621 = (i__18566_18616 + 1);
seq__18563_18613 = G__18618;
chunk__18564_18614 = G__18619;
count__18565_18615 = G__18620;
i__18566_18616 = G__18621;
continue;
}
} else
{var temp__4092__auto___18622 = cljs.core.seq.call(null,seq__18563_18613);if(temp__4092__auto___18622)
{var seq__18563_18623__$1 = temp__4092__auto___18622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18563_18623__$1))
{var c__7794__auto___18624 = cljs.core.chunk_first.call(null,seq__18563_18623__$1);{
var G__18625 = cljs.core.chunk_rest.call(null,seq__18563_18623__$1);
var G__18626 = c__7794__auto___18624;
var G__18627 = cljs.core.count.call(null,c__7794__auto___18624);
var G__18628 = 0;
seq__18563_18613 = G__18625;
chunk__18564_18614 = G__18626;
count__18565_18615 = G__18627;
i__18566_18616 = G__18628;
continue;
}
} else
{var c_18629 = cljs.core.first.call(null,seq__18563_18623__$1);add_class_BANG_.call(null,elem__$1,c_18629);
{
var G__18630 = cljs.core.next.call(null,seq__18563_18623__$1);
var G__18631 = null;
var G__18632 = 0;
var G__18633 = 0;
seq__18563_18613 = G__18630;
chunk__18564_18614 = G__18631;
count__18565_18615 = G__18632;
i__18566_18616 = G__18633;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__18612 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18612__delegate.call(this,elem,classes,more_classes);};
G__18612.cljs$lang$maxFixedArity = 2;
G__18612.cljs$lang$applyTo = (function (arglist__18634){
var elem = cljs.core.first(arglist__18634);
arglist__18634 = cljs.core.next(arglist__18634);
var classes = cljs.core.first(arglist__18634);
var more_classes = cljs.core.rest(arglist__18634);
return G__18612__delegate(elem,classes,more_classes);
});
G__18612.cljs$core$IFn$_invoke$arity$variadic = G__18612__delegate;
return G__18612;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__18635 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__18635;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___18644 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___18644))
{var class_list_18645 = temp__4090__auto___18644;class_list_18645.remove(class$__$1);
} else
{var class_name_18646 = elem__$1.className;var new_class_name_18647 = dommy.attrs.remove_class_str.call(null,class_name_18646,class$__$1);if((class_name_18646 === new_class_name_18647))
{} else
{elem__$1.className = new_class_name_18647;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__18648__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18640 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__18641 = null;var count__18642 = 0;var i__18643 = 0;while(true){
if((i__18643 < count__18642))
{var c = cljs.core._nth.call(null,chunk__18641,i__18643);remove_class_BANG_.call(null,elem__$1,c);
{
var G__18649 = seq__18640;
var G__18650 = chunk__18641;
var G__18651 = count__18642;
var G__18652 = (i__18643 + 1);
seq__18640 = G__18649;
chunk__18641 = G__18650;
count__18642 = G__18651;
i__18643 = G__18652;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18640);if(temp__4092__auto__)
{var seq__18640__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18640__$1))
{var c__7794__auto__ = cljs.core.chunk_first.call(null,seq__18640__$1);{
var G__18653 = cljs.core.chunk_rest.call(null,seq__18640__$1);
var G__18654 = c__7794__auto__;
var G__18655 = cljs.core.count.call(null,c__7794__auto__);
var G__18656 = 0;
seq__18640 = G__18653;
chunk__18641 = G__18654;
count__18642 = G__18655;
i__18643 = G__18656;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__18640__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__18657 = cljs.core.next.call(null,seq__18640__$1);
var G__18658 = null;
var G__18659 = 0;
var G__18660 = 0;
seq__18640 = G__18657;
chunk__18641 = G__18658;
count__18642 = G__18659;
i__18643 = G__18660;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__18648 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18648__delegate.call(this,elem,class$,classes);};
G__18648.cljs$lang$maxFixedArity = 2;
G__18648.cljs$lang$applyTo = (function (arglist__18661){
var elem = cljs.core.first(arglist__18661);
arglist__18661 = cljs.core.next(arglist__18661);
var class$ = cljs.core.first(arglist__18661);
var classes = cljs.core.rest(arglist__18661);
return G__18648__delegate(elem,class$,classes);
});
G__18648.cljs$core$IFn$_invoke$arity$variadic = G__18648__delegate;
return G__18648;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___18662 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___18662))
{var class_list_18663 = temp__4090__auto___18662;class_list_18663.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__18666){var vec__18667 = p__18666;var k = cljs.core.nth.call(null,vec__18667,0,null);var v = cljs.core.nth.call(null,vec__18667,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__18674_18680 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__18675_18681 = null;var count__18676_18682 = 0;var i__18677_18683 = 0;while(true){
if((i__18677_18683 < count__18676_18682))
{var vec__18678_18684 = cljs.core._nth.call(null,chunk__18675_18681,i__18677_18683);var k_18685 = cljs.core.nth.call(null,vec__18678_18684,0,null);var v_18686 = cljs.core.nth.call(null,vec__18678_18684,1,null);(style[cljs.core.name.call(null,k_18685)] = v_18686);
{
var G__18687 = seq__18674_18680;
var G__18688 = chunk__18675_18681;
var G__18689 = count__18676_18682;
var G__18690 = (i__18677_18683 + 1);
seq__18674_18680 = G__18687;
chunk__18675_18681 = G__18688;
count__18676_18682 = G__18689;
i__18677_18683 = G__18690;
continue;
}
} else
{var temp__4092__auto___18691 = cljs.core.seq.call(null,seq__18674_18680);if(temp__4092__auto___18691)
{var seq__18674_18692__$1 = temp__4092__auto___18691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18674_18692__$1))
{var c__7794__auto___18693 = cljs.core.chunk_first.call(null,seq__18674_18692__$1);{
var G__18694 = cljs.core.chunk_rest.call(null,seq__18674_18692__$1);
var G__18695 = c__7794__auto___18693;
var G__18696 = cljs.core.count.call(null,c__7794__auto___18693);
var G__18697 = 0;
seq__18674_18680 = G__18694;
chunk__18675_18681 = G__18695;
count__18676_18682 = G__18696;
i__18677_18683 = G__18697;
continue;
}
} else
{var vec__18679_18698 = cljs.core.first.call(null,seq__18674_18692__$1);var k_18699 = cljs.core.nth.call(null,vec__18679_18698,0,null);var v_18700 = cljs.core.nth.call(null,vec__18679_18698,1,null);(style[cljs.core.name.call(null,k_18699)] = v_18700);
{
var G__18701 = cljs.core.next.call(null,seq__18674_18692__$1);
var G__18702 = null;
var G__18703 = 0;
var G__18704 = 0;
seq__18674_18680 = G__18701;
chunk__18675_18681 = G__18702;
count__18676_18682 = G__18703;
i__18677_18683 = G__18704;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18705){
var elem = cljs.core.first(arglist__18705);
var kvs = cljs.core.rest(arglist__18705);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18712_18718 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__18713_18719 = null;var count__18714_18720 = 0;var i__18715_18721 = 0;while(true){
if((i__18715_18721 < count__18714_18720))
{var vec__18716_18722 = cljs.core._nth.call(null,chunk__18713_18719,i__18715_18721);var k_18723 = cljs.core.nth.call(null,vec__18716_18722,0,null);var v_18724 = cljs.core.nth.call(null,vec__18716_18722,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_18723,[cljs.core.str(v_18724),cljs.core.str("px")].join(''));
{
var G__18725 = seq__18712_18718;
var G__18726 = chunk__18713_18719;
var G__18727 = count__18714_18720;
var G__18728 = (i__18715_18721 + 1);
seq__18712_18718 = G__18725;
chunk__18713_18719 = G__18726;
count__18714_18720 = G__18727;
i__18715_18721 = G__18728;
continue;
}
} else
{var temp__4092__auto___18729 = cljs.core.seq.call(null,seq__18712_18718);if(temp__4092__auto___18729)
{var seq__18712_18730__$1 = temp__4092__auto___18729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18712_18730__$1))
{var c__7794__auto___18731 = cljs.core.chunk_first.call(null,seq__18712_18730__$1);{
var G__18732 = cljs.core.chunk_rest.call(null,seq__18712_18730__$1);
var G__18733 = c__7794__auto___18731;
var G__18734 = cljs.core.count.call(null,c__7794__auto___18731);
var G__18735 = 0;
seq__18712_18718 = G__18732;
chunk__18713_18719 = G__18733;
count__18714_18720 = G__18734;
i__18715_18721 = G__18735;
continue;
}
} else
{var vec__18717_18736 = cljs.core.first.call(null,seq__18712_18730__$1);var k_18737 = cljs.core.nth.call(null,vec__18717_18736,0,null);var v_18738 = cljs.core.nth.call(null,vec__18717_18736,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_18737,[cljs.core.str(v_18738),cljs.core.str("px")].join(''));
{
var G__18739 = cljs.core.next.call(null,seq__18712_18730__$1);
var G__18740 = null;
var G__18741 = 0;
var G__18742 = 0;
seq__18712_18718 = G__18739;
chunk__18713_18719 = G__18740;
count__18714_18720 = G__18741;
i__18715_18721 = G__18742;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__18743){
var elem = cljs.core.first(arglist__18743);
var kvs = cljs.core.rest(arglist__18743);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__18752 = dommy.template.__GT_node_like.call(null,elem);(G__18752[cljs.core.name.call(null,k)] = v);
return G__18752;
} else
{var G__18753 = dommy.template.__GT_node_like.call(null,elem);G__18753.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__18753;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__18760__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18754_18761 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__18755_18762 = null;var count__18756_18763 = 0;var i__18757_18764 = 0;while(true){
if((i__18757_18764 < count__18756_18763))
{var vec__18758_18765 = cljs.core._nth.call(null,chunk__18755_18762,i__18757_18764);var k_18766__$1 = cljs.core.nth.call(null,vec__18758_18765,0,null);var v_18767__$1 = cljs.core.nth.call(null,vec__18758_18765,1,null);set_attr_BANG_.call(null,elem__$1,k_18766__$1,v_18767__$1);
{
var G__18768 = seq__18754_18761;
var G__18769 = chunk__18755_18762;
var G__18770 = count__18756_18763;
var G__18771 = (i__18757_18764 + 1);
seq__18754_18761 = G__18768;
chunk__18755_18762 = G__18769;
count__18756_18763 = G__18770;
i__18757_18764 = G__18771;
continue;
}
} else
{var temp__4092__auto___18772 = cljs.core.seq.call(null,seq__18754_18761);if(temp__4092__auto___18772)
{var seq__18754_18773__$1 = temp__4092__auto___18772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18754_18773__$1))
{var c__7794__auto___18774 = cljs.core.chunk_first.call(null,seq__18754_18773__$1);{
var G__18775 = cljs.core.chunk_rest.call(null,seq__18754_18773__$1);
var G__18776 = c__7794__auto___18774;
var G__18777 = cljs.core.count.call(null,c__7794__auto___18774);
var G__18778 = 0;
seq__18754_18761 = G__18775;
chunk__18755_18762 = G__18776;
count__18756_18763 = G__18777;
i__18757_18764 = G__18778;
continue;
}
} else
{var vec__18759_18779 = cljs.core.first.call(null,seq__18754_18773__$1);var k_18780__$1 = cljs.core.nth.call(null,vec__18759_18779,0,null);var v_18781__$1 = cljs.core.nth.call(null,vec__18759_18779,1,null);set_attr_BANG_.call(null,elem__$1,k_18780__$1,v_18781__$1);
{
var G__18782 = cljs.core.next.call(null,seq__18754_18773__$1);
var G__18783 = null;
var G__18784 = 0;
var G__18785 = 0;
seq__18754_18761 = G__18782;
chunk__18755_18762 = G__18783;
count__18756_18763 = G__18784;
i__18757_18764 = G__18785;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__18760 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18760__delegate.call(this,elem,k,v,kvs);};
G__18760.cljs$lang$maxFixedArity = 3;
G__18760.cljs$lang$applyTo = (function (arglist__18786){
var elem = cljs.core.first(arglist__18786);
arglist__18786 = cljs.core.next(arglist__18786);
var k = cljs.core.first(arglist__18786);
arglist__18786 = cljs.core.next(arglist__18786);
var v = cljs.core.first(arglist__18786);
var kvs = cljs.core.rest(arglist__18786);
return G__18760__delegate(elem,k,v,kvs);
});
G__18760.cljs$core$IFn$_invoke$arity$variadic = G__18760__delegate;
return G__18760;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__18795__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__18791_18796 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__18792_18797 = null;var count__18793_18798 = 0;var i__18794_18799 = 0;while(true){
if((i__18794_18799 < count__18793_18798))
{var k_18800__$1 = cljs.core._nth.call(null,chunk__18792_18797,i__18794_18799);remove_attr_BANG_.call(null,elem__$1,k_18800__$1);
{
var G__18801 = seq__18791_18796;
var G__18802 = chunk__18792_18797;
var G__18803 = count__18793_18798;
var G__18804 = (i__18794_18799 + 1);
seq__18791_18796 = G__18801;
chunk__18792_18797 = G__18802;
count__18793_18798 = G__18803;
i__18794_18799 = G__18804;
continue;
}
} else
{var temp__4092__auto___18805 = cljs.core.seq.call(null,seq__18791_18796);if(temp__4092__auto___18805)
{var seq__18791_18806__$1 = temp__4092__auto___18805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18791_18806__$1))
{var c__7794__auto___18807 = cljs.core.chunk_first.call(null,seq__18791_18806__$1);{
var G__18808 = cljs.core.chunk_rest.call(null,seq__18791_18806__$1);
var G__18809 = c__7794__auto___18807;
var G__18810 = cljs.core.count.call(null,c__7794__auto___18807);
var G__18811 = 0;
seq__18791_18796 = G__18808;
chunk__18792_18797 = G__18809;
count__18793_18798 = G__18810;
i__18794_18799 = G__18811;
continue;
}
} else
{var k_18812__$1 = cljs.core.first.call(null,seq__18791_18806__$1);remove_attr_BANG_.call(null,elem__$1,k_18812__$1);
{
var G__18813 = cljs.core.next.call(null,seq__18791_18806__$1);
var G__18814 = null;
var G__18815 = 0;
var G__18816 = 0;
seq__18791_18796 = G__18813;
chunk__18792_18797 = G__18814;
count__18793_18798 = G__18815;
i__18794_18799 = G__18816;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__18795 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18795__delegate.call(this,elem,k,ks);};
G__18795.cljs$lang$maxFixedArity = 2;
G__18795.cljs$lang$applyTo = (function (arglist__18817){
var elem = cljs.core.first(arglist__18817);
arglist__18817 = cljs.core.next(arglist__18817);
var k = cljs.core.first(arglist__18817);
var ks = cljs.core.rest(arglist__18817);
return G__18795__delegate(elem,k,ks);
});
G__18795.cljs$core$IFn$_invoke$arity$variadic = G__18795__delegate;
return G__18795;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__18819 = dommy.template.__GT_node_like.call(null,elem);G__18819.style.display = ((show_QMARK_)?"":"none");
return G__18819;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__18821 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__18821,false);
return G__18821;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__18823 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__18823,true);
return G__18823;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__18825 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__18825["constructor"] = Object);
return G__18825;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map