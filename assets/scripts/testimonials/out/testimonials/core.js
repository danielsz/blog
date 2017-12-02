// Compiled by ClojureScript 0.0-2156
goog.provide('testimonials.core');
goog.require('cljs.core');
goog.require('testimonials.state');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('testimonials.state');
goog.require('cljs.core.async');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
testimonials.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"testimonials","testimonials",1211392806),cljs.core.shuffle.call(null,testimonials.state.testimonials)], null));
testimonials.core.transition = (function transition(state){return om.core.transact_BANG_.call(null,state,new cljs.core.Keyword(null,"testimonials","testimonials",1211392806),(function (p1__14087_SHARP_){if(cljs.core.seq.call(null,cljs.core.pop.call(null,p1__14087_SHARP_)))
{return cljs.core.pop.call(null,p1__14087_SHARP_);
} else
{return cljs.core.shuffle.call(null,testimonials.state.testimonials);
}
}));
});
testimonials.core.testimonial = (function testimonial(state){return cljs.core.peek.call(null,new cljs.core.Keyword(null,"testimonials","testimonials",1211392806).cljs$core$IFn$_invoke$arity$1(state));
});
testimonials.core.widget = (function widget(data,owner){if(typeof testimonials.core.t14091 !== 'undefined')
{} else
{
/**
* @constructor
*/
testimonials.core.t14091 = (function (owner,data,widget,meta14092){
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta14092 = meta14092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testimonials.core.t14091.cljs$lang$type = true;
testimonials.core.t14091.cljs$lang$ctorStr = "testimonials.core/t14091";
testimonials.core.t14091.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"testimonials.core/t14091");
});
testimonials.core.t14091.prototype.om$core$IDidUpdate$ = true;
testimonials.core.t14091.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return null;
});
testimonials.core.t14091.prototype.om$core$IWillUpdate$ = true;
testimonials.core.t14091.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;return null;
});
testimonials.core.t14091.prototype.om$core$IDidMount$ = true;
testimonials.core.t14091.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return setInterval(testimonials.core.transition,5000,self__.data);
});
testimonials.core.t14091.prototype.om$core$IWillMount$ = true;
testimonials.core.t14091.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
testimonials.core.t14091.prototype.om$core$IRender$ = true;
testimonials.core.t14091.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "media"},React.DOM.a({"className": "pull-left", "href": "#"},React.DOM.img({"className": "media-object avatar", "alt": "Avatar", "style": cljs.core.clj__GT_js.call(null,{"height": "75px", "width": "75px"}), "src": new cljs.core.Keyword(null,"avatar","avatar",3902911691).cljs$core$IFn$_invoke$arity$1(testimonials.core.testimonial.call(null,self__.data))})),React.DOM.div({"className": "media-body"},React.DOM.h4({"className": "media-heading"},React.DOM.a({"href": [cljs.core.str("http://www.etsy.com/shop/"),cljs.core.str(new cljs.core.Keyword(null,"shop_name","shop_name",3204953510).cljs$core$IFn$_invoke$arity$1(testimonials.core.testimonial.call(null,self__.data)))].join(''), "className": "shop", "target": "_blank"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"shop_name","shop_name",3204953510).cljs$core$IFn$_invoke$arity$1(testimonials.core.testimonial.call(null,self__.data))))),React.DOM.blockquote(null,React.DOM.p({"className": "text-info quote"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"quote","quote",1121858030).cljs$core$IFn$_invoke$arity$1(testimonials.core.testimonial.call(null,self__.data)))),React.DOM.small(null,React.DOM.cite({"title": "Source title", "className": "shop_owner"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"shop_owner","shop_owner",4513502108).cljs$core$IFn$_invoke$arity$1(testimonials.core.testimonial.call(null,self__.data))))))));
});
testimonials.core.t14091.prototype.om$core$IInitState$ = true;
testimonials.core.t14091.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
testimonials.core.t14091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14093){var self__ = this;
var _14093__$1 = this;return self__.meta14092;
});
testimonials.core.t14091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14093,meta14092__$1){var self__ = this;
var _14093__$1 = this;return (new testimonials.core.t14091(self__.owner,self__.data,self__.widget,meta14092__$1));
});
testimonials.core.__GT_t14091 = (function __GT_t14091(owner__$1,data__$1,widget__$1,meta14092){return (new testimonials.core.t14091(owner__$1,data__$1,widget__$1,meta14092));
});
}
return (new testimonials.core.t14091(owner,data,widget,null));
});
om.core.root.call(null,testimonials.core.widget,testimonials.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("testimonials")], null));

//# sourceMappingURL=core.js.map
