// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15336 = (function (f,fn_handler,meta15337){
this.f = f;
this.fn_handler = fn_handler;
this.meta15337 = meta15337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15336.cljs$lang$type = true;
cljs.core.async.t15336.cljs$lang$ctorStr = "cljs.core.async/t15336";
cljs.core.async.t15336.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t15336");
});
cljs.core.async.t15336.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15338){var self__ = this;
var _15338__$1 = this;return self__.meta15337;
});
cljs.core.async.t15336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15338,meta15337__$1){var self__ = this;
var _15338__$1 = this;return (new cljs.core.async.t15336(self__.f,self__.fn_handler,meta15337__$1));
});
cljs.core.async.__GT_t15336 = (function __GT_t15336(f__$1,fn_handler__$1,meta15337){return (new cljs.core.async.t15336(f__$1,fn_handler__$1,meta15337));
});
}
return (new cljs.core.async.t15336(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15340 = buff;if(G__15340)
{var bit__7696__auto__ = null;if(cljs.core.truth_((function (){var or__7046__auto__ = bit__7696__auto__;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return G__15340.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15340.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15340);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15340);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15341 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15341);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15341);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7034__auto__ = ret;if(cljs.core.truth_(and__7034__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7034__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7894__auto___15342 = n;var x_15343 = 0;while(true){
if((x_15343 < n__7894__auto___15342))
{(a[x_15343] = 0);
{
var G__15344 = (x_15343 + 1);
x_15343 = G__15344;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15345 = (i + 1);
i = G__15345;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15349 = (function (flag,alt_flag,meta15350){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15350 = meta15350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15349.cljs$lang$type = true;
cljs.core.async.t15349.cljs$lang$ctorStr = "cljs.core.async/t15349";
cljs.core.async.t15349.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t15349");
});
cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15351){var self__ = this;
var _15351__$1 = this;return self__.meta15350;
});
cljs.core.async.t15349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15351,meta15350__$1){var self__ = this;
var _15351__$1 = this;return (new cljs.core.async.t15349(self__.flag,self__.alt_flag,meta15350__$1));
});
cljs.core.async.__GT_t15349 = (function __GT_t15349(flag__$1,alt_flag__$1,meta15350){return (new cljs.core.async.t15349(flag__$1,alt_flag__$1,meta15350));
});
}
return (new cljs.core.async.t15349(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15355 = (function (cb,flag,alt_handler,meta15356){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15356 = meta15356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15355.cljs$lang$type = true;
cljs.core.async.t15355.cljs$lang$ctorStr = "cljs.core.async/t15355";
cljs.core.async.t15355.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t15355");
});
cljs.core.async.t15355.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15357){var self__ = this;
var _15357__$1 = this;return self__.meta15356;
});
cljs.core.async.t15355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15357,meta15356__$1){var self__ = this;
var _15357__$1 = this;return (new cljs.core.async.t15355(self__.cb,self__.flag,self__.alt_handler,meta15356__$1));
});
cljs.core.async.__GT_t15355 = (function __GT_t15355(cb__$1,flag__$1,alt_handler__$1,meta15356){return (new cljs.core.async.t15355(cb__$1,flag__$1,alt_handler__$1,meta15356));
});
}
return (new cljs.core.async.t15355(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15358_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15358_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7046__auto__ = wport;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15359 = (i + 1);
i = G__15359;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7046__auto__ = ret;if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7034__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7034__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7034__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15360){var map__15362 = p__15360;var map__15362__$1 = ((cljs.core.seq_QMARK_.call(null,map__15362))?cljs.core.apply.call(null,cljs.core.hash_map,map__15362):map__15362);var opts = map__15362__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15360 = null;if (arguments.length > 1) {
  p__15360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15360);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15363){
var ports = cljs.core.first(arglist__15363);
var p__15360 = cljs.core.rest(arglist__15363);
return alts_BANG___delegate(ports,p__15360);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15371 = (function (ch,f,map_LT_,meta15372){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15372 = meta15372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15371.cljs$lang$type = true;
cljs.core.async.t15371.cljs$lang$ctorStr = "cljs.core.async/t15371";
cljs.core.async.t15371.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t15371");
});
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15374 = (function (fn1,_,meta15372,ch,f,map_LT_,meta15375){
this.fn1 = fn1;
this._ = _;
this.meta15372 = meta15372;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15375 = meta15375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15374.cljs$lang$type = true;
cljs.core.async.t15374.cljs$lang$ctorStr = "cljs.core.async/t15374";
cljs.core.async.t15374.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t15374");
});
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15364_SHARP_){return f1.call(null,(((p1__15364_SHARP_ == null))?null:self__.f.call(null,p1__15364_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15376){var self__ = this;
var _15376__$1 = this;return self__.meta15375;
});
cljs.core.async.t15374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15376,meta15375__$1){var self__ = this;
var _15376__$1 = this;return (new cljs.core.async.t15374(self__.fn1,self__._,self__.meta15372,self__.ch,self__.f,self__.map_LT_,meta15375__$1));
});
cljs.core.async.__GT_t15374 = (function __GT_t15374(fn1__$1,___$2,meta15372__$1,ch__$2,f__$2,map_LT___$2,meta15375){return (new cljs.core.async.t15374(fn1__$1,___$2,meta15372__$1,ch__$2,f__$2,map_LT___$2,meta15375));
});
}
return (new cljs.core.async.t15374(fn1,___$1,self__.meta15372,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7034__auto__ = ret;if(cljs.core.truth_(and__7034__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7034__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15373){var self__ = this;
var _15373__$1 = this;return self__.meta15372;
});
cljs.core.async.t15371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15373,meta15372__$1){var self__ = this;
var _15373__$1 = this;return (new cljs.core.async.t15371(self__.ch,self__.f,self__.map_LT_,meta15372__$1));
});
cljs.core.async.__GT_t15371 = (function __GT_t15371(ch__$1,f__$1,map_LT___$1,meta15372){return (new cljs.core.async.t15371(ch__$1,f__$1,map_LT___$1,meta15372));
});
}
return (new cljs.core.async.t15371(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15380 = (function (ch,f,map_GT_,meta15381){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15381 = meta15381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15380.cljs$lang$type = true;
cljs.core.async.t15380.cljs$lang$ctorStr = "cljs.core.async/t15380";
cljs.core.async.t15380.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t15380");
});
cljs.core.async.t15380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15380.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15382){var self__ = this;
var _15382__$1 = this;return self__.meta15381;
});
cljs.core.async.t15380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15382,meta15381__$1){var self__ = this;
var _15382__$1 = this;return (new cljs.core.async.t15380(self__.ch,self__.f,self__.map_GT_,meta15381__$1));
});
cljs.core.async.__GT_t15380 = (function __GT_t15380(ch__$1,f__$1,map_GT___$1,meta15381){return (new cljs.core.async.t15380(ch__$1,f__$1,map_GT___$1,meta15381));
});
}
return (new cljs.core.async.t15380(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15386 = (function (ch,p,filter_GT_,meta15387){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15387 = meta15387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15386.cljs$lang$type = true;
cljs.core.async.t15386.cljs$lang$ctorStr = "cljs.core.async/t15386";
cljs.core.async.t15386.cljs$lang$ctorPrWriter = (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t15386");
});
cljs.core.async.t15386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15386.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15388){var self__ = this;
var _15388__$1 = this;return self__.meta15387;
});
cljs.core.async.t15386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15388,meta15387__$1){var self__ = this;
var _15388__$1 = this;return (new cljs.core.async.t15386(self__.ch,self__.p,self__.filter_GT_,meta15387__$1));
});
cljs.core.async.__GT_t15386 = (function __GT_t15386(ch__$1,p__$1,filter_GT___$1,meta15387){return (new cljs.core.async.t15386(ch__$1,p__$1,filter_GT___$1,meta15387));
});
}
return (new cljs.core.async.t15386(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9927__auto___15471 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_15450){var state_val_15451 = (state_15450[1]);if((state_val_15451 === 1))
{var state_15450__$1 = state_15450;var statearr_15452_15472 = state_15450__$1;(statearr_15452_15472[2] = null);
(statearr_15452_15472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 2))
{var state_15450__$1 = state_15450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15450__$1,4,ch);
} else
{if((state_val_15451 === 3))
{var inst_15448 = (state_15450[2]);var state_15450__$1 = state_15450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15450__$1,inst_15448);
} else
{if((state_val_15451 === 4))
{var inst_15432 = (state_15450[7]);var inst_15432__$1 = (state_15450[2]);var inst_15433 = (inst_15432__$1 == null);var state_15450__$1 = (function (){var statearr_15453 = state_15450;(statearr_15453[7] = inst_15432__$1);
return statearr_15453;
})();if(cljs.core.truth_(inst_15433))
{var statearr_15454_15473 = state_15450__$1;(statearr_15454_15473[1] = 5);
} else
{var statearr_15455_15474 = state_15450__$1;(statearr_15455_15474[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 5))
{var inst_15435 = cljs.core.async.close_BANG_.call(null,out);var state_15450__$1 = state_15450;var statearr_15456_15475 = state_15450__$1;(statearr_15456_15475[2] = inst_15435);
(statearr_15456_15475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 6))
{var inst_15432 = (state_15450[7]);var inst_15437 = p.call(null,inst_15432);var state_15450__$1 = state_15450;if(cljs.core.truth_(inst_15437))
{var statearr_15457_15476 = state_15450__$1;(statearr_15457_15476[1] = 8);
} else
{var statearr_15458_15477 = state_15450__$1;(statearr_15458_15477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 7))
{var inst_15446 = (state_15450[2]);var state_15450__$1 = state_15450;var statearr_15459_15478 = state_15450__$1;(statearr_15459_15478[2] = inst_15446);
(statearr_15459_15478[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 8))
{var inst_15432 = (state_15450[7]);var state_15450__$1 = state_15450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15450__$1,11,out,inst_15432);
} else
{if((state_val_15451 === 9))
{var state_15450__$1 = state_15450;var statearr_15460_15479 = state_15450__$1;(statearr_15460_15479[2] = null);
(statearr_15460_15479[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 10))
{var inst_15443 = (state_15450[2]);var state_15450__$1 = (function (){var statearr_15461 = state_15450;(statearr_15461[8] = inst_15443);
return statearr_15461;
})();var statearr_15462_15480 = state_15450__$1;(statearr_15462_15480[2] = null);
(statearr_15462_15480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15451 === 11))
{var inst_15440 = (state_15450[2]);var state_15450__$1 = state_15450;var statearr_15463_15481 = state_15450__$1;(statearr_15463_15481[2] = inst_15440);
(statearr_15463_15481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_15467 = [null,null,null,null,null,null,null,null,null];(statearr_15467[0] = state_machine__9913__auto__);
(statearr_15467[1] = 1);
return statearr_15467;
});
var state_machine__9913__auto____1 = (function (state_15450){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_15450);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e15468){if((e15468 instanceof Object))
{var ex__9916__auto__ = e15468;var statearr_15469_15482 = state_15450;(statearr_15469_15482[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15483 = state_15450;
state_15450 = G__15483;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_15450){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_15450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_15470 = f__9928__auto__.call(null);(statearr_15470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___15471);
return statearr_15470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9927__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_15635){var state_val_15636 = (state_15635[1]);if((state_val_15636 === 1))
{var state_15635__$1 = state_15635;var statearr_15637_15674 = state_15635__$1;(statearr_15637_15674[2] = null);
(statearr_15637_15674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 2))
{var state_15635__$1 = state_15635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15635__$1,4,in$);
} else
{if((state_val_15636 === 3))
{var inst_15633 = (state_15635[2]);var state_15635__$1 = state_15635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15635__$1,inst_15633);
} else
{if((state_val_15636 === 4))
{var inst_15581 = (state_15635[7]);var inst_15581__$1 = (state_15635[2]);var inst_15582 = (inst_15581__$1 == null);var state_15635__$1 = (function (){var statearr_15638 = state_15635;(statearr_15638[7] = inst_15581__$1);
return statearr_15638;
})();if(cljs.core.truth_(inst_15582))
{var statearr_15639_15675 = state_15635__$1;(statearr_15639_15675[1] = 5);
} else
{var statearr_15640_15676 = state_15635__$1;(statearr_15640_15676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 5))
{var inst_15584 = cljs.core.async.close_BANG_.call(null,out);var state_15635__$1 = state_15635;var statearr_15641_15677 = state_15635__$1;(statearr_15641_15677[2] = inst_15584);
(statearr_15641_15677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 6))
{var inst_15581 = (state_15635[7]);var inst_15586 = f.call(null,inst_15581);var inst_15591 = cljs.core.seq.call(null,inst_15586);var inst_15592 = inst_15591;var inst_15593 = null;var inst_15594 = 0;var inst_15595 = 0;var state_15635__$1 = (function (){var statearr_15642 = state_15635;(statearr_15642[8] = inst_15595);
(statearr_15642[9] = inst_15592);
(statearr_15642[10] = inst_15594);
(statearr_15642[11] = inst_15593);
return statearr_15642;
})();var statearr_15643_15678 = state_15635__$1;(statearr_15643_15678[2] = null);
(statearr_15643_15678[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 7))
{var inst_15631 = (state_15635[2]);var state_15635__$1 = state_15635;var statearr_15644_15679 = state_15635__$1;(statearr_15644_15679[2] = inst_15631);
(statearr_15644_15679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 8))
{var inst_15595 = (state_15635[8]);var inst_15594 = (state_15635[10]);var inst_15597 = (inst_15595 < inst_15594);var inst_15598 = inst_15597;var state_15635__$1 = state_15635;if(cljs.core.truth_(inst_15598))
{var statearr_15645_15680 = state_15635__$1;(statearr_15645_15680[1] = 10);
} else
{var statearr_15646_15681 = state_15635__$1;(statearr_15646_15681[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 9))
{var inst_15628 = (state_15635[2]);var state_15635__$1 = (function (){var statearr_15647 = state_15635;(statearr_15647[12] = inst_15628);
return statearr_15647;
})();var statearr_15648_15682 = state_15635__$1;(statearr_15648_15682[2] = null);
(statearr_15648_15682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 10))
{var inst_15595 = (state_15635[8]);var inst_15593 = (state_15635[11]);var inst_15600 = cljs.core._nth.call(null,inst_15593,inst_15595);var state_15635__$1 = state_15635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15635__$1,13,out,inst_15600);
} else
{if((state_val_15636 === 11))
{var inst_15606 = (state_15635[13]);var inst_15592 = (state_15635[9]);var inst_15606__$1 = cljs.core.seq.call(null,inst_15592);var state_15635__$1 = (function (){var statearr_15652 = state_15635;(statearr_15652[13] = inst_15606__$1);
return statearr_15652;
})();if(inst_15606__$1)
{var statearr_15653_15683 = state_15635__$1;(statearr_15653_15683[1] = 14);
} else
{var statearr_15654_15684 = state_15635__$1;(statearr_15654_15684[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 12))
{var inst_15626 = (state_15635[2]);var state_15635__$1 = state_15635;var statearr_15655_15685 = state_15635__$1;(statearr_15655_15685[2] = inst_15626);
(statearr_15655_15685[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 13))
{var inst_15595 = (state_15635[8]);var inst_15592 = (state_15635[9]);var inst_15594 = (state_15635[10]);var inst_15593 = (state_15635[11]);var inst_15602 = (state_15635[2]);var inst_15603 = (inst_15595 + 1);var tmp15649 = inst_15592;var tmp15650 = inst_15594;var tmp15651 = inst_15593;var inst_15592__$1 = tmp15649;var inst_15593__$1 = tmp15651;var inst_15594__$1 = tmp15650;var inst_15595__$1 = inst_15603;var state_15635__$1 = (function (){var statearr_15656 = state_15635;(statearr_15656[8] = inst_15595__$1);
(statearr_15656[9] = inst_15592__$1);
(statearr_15656[14] = inst_15602);
(statearr_15656[10] = inst_15594__$1);
(statearr_15656[11] = inst_15593__$1);
return statearr_15656;
})();var statearr_15657_15686 = state_15635__$1;(statearr_15657_15686[2] = null);
(statearr_15657_15686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 14))
{var inst_15606 = (state_15635[13]);var inst_15608 = cljs.core.chunked_seq_QMARK_.call(null,inst_15606);var state_15635__$1 = state_15635;if(inst_15608)
{var statearr_15658_15687 = state_15635__$1;(statearr_15658_15687[1] = 17);
} else
{var statearr_15659_15688 = state_15635__$1;(statearr_15659_15688[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 15))
{var state_15635__$1 = state_15635;var statearr_15660_15689 = state_15635__$1;(statearr_15660_15689[2] = null);
(statearr_15660_15689[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 16))
{var inst_15624 = (state_15635[2]);var state_15635__$1 = state_15635;var statearr_15661_15690 = state_15635__$1;(statearr_15661_15690[2] = inst_15624);
(statearr_15661_15690[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 17))
{var inst_15606 = (state_15635[13]);var inst_15610 = cljs.core.chunk_first.call(null,inst_15606);var inst_15611 = cljs.core.chunk_rest.call(null,inst_15606);var inst_15612 = cljs.core.count.call(null,inst_15610);var inst_15592 = inst_15611;var inst_15593 = inst_15610;var inst_15594 = inst_15612;var inst_15595 = 0;var state_15635__$1 = (function (){var statearr_15662 = state_15635;(statearr_15662[8] = inst_15595);
(statearr_15662[9] = inst_15592);
(statearr_15662[10] = inst_15594);
(statearr_15662[11] = inst_15593);
return statearr_15662;
})();var statearr_15663_15691 = state_15635__$1;(statearr_15663_15691[2] = null);
(statearr_15663_15691[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 18))
{var inst_15606 = (state_15635[13]);var inst_15615 = cljs.core.first.call(null,inst_15606);var state_15635__$1 = state_15635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15635__$1,20,out,inst_15615);
} else
{if((state_val_15636 === 19))
{var inst_15621 = (state_15635[2]);var state_15635__$1 = state_15635;var statearr_15664_15692 = state_15635__$1;(statearr_15664_15692[2] = inst_15621);
(statearr_15664_15692[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15636 === 20))
{var inst_15606 = (state_15635[13]);var inst_15617 = (state_15635[2]);var inst_15618 = cljs.core.next.call(null,inst_15606);var inst_15592 = inst_15618;var inst_15593 = null;var inst_15594 = 0;var inst_15595 = 0;var state_15635__$1 = (function (){var statearr_15665 = state_15635;(statearr_15665[15] = inst_15617);
(statearr_15665[8] = inst_15595);
(statearr_15665[9] = inst_15592);
(statearr_15665[10] = inst_15594);
(statearr_15665[11] = inst_15593);
return statearr_15665;
})();var statearr_15666_15693 = state_15635__$1;(statearr_15666_15693[2] = null);
(statearr_15666_15693[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_15670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15670[0] = state_machine__9913__auto__);
(statearr_15670[1] = 1);
return statearr_15670;
});
var state_machine__9913__auto____1 = (function (state_15635){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_15635);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e15671){if((e15671 instanceof Object))
{var ex__9916__auto__ = e15671;var statearr_15672_15694 = state_15635;(statearr_15672_15694[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15635);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15695 = state_15635;
state_15635 = G__15695;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_15635){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_15635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_15673 = f__9928__auto__.call(null);(statearr_15673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto__);
return statearr_15673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return c__9927__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__9927__auto___15776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_15755){var state_val_15756 = (state_15755[1]);if((state_val_15756 === 1))
{var state_15755__$1 = state_15755;var statearr_15757_15777 = state_15755__$1;(statearr_15757_15777[2] = null);
(statearr_15757_15777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15756 === 2))
{var state_15755__$1 = state_15755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15755__$1,4,from);
} else
{if((state_val_15756 === 3))
{var inst_15753 = (state_15755[2]);var state_15755__$1 = state_15755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15755__$1,inst_15753);
} else
{if((state_val_15756 === 4))
{var inst_15738 = (state_15755[7]);var inst_15738__$1 = (state_15755[2]);var inst_15739 = (inst_15738__$1 == null);var state_15755__$1 = (function (){var statearr_15758 = state_15755;(statearr_15758[7] = inst_15738__$1);
return statearr_15758;
})();if(cljs.core.truth_(inst_15739))
{var statearr_15759_15778 = state_15755__$1;(statearr_15759_15778[1] = 5);
} else
{var statearr_15760_15779 = state_15755__$1;(statearr_15760_15779[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15756 === 5))
{var state_15755__$1 = state_15755;if(cljs.core.truth_(close_QMARK_))
{var statearr_15761_15780 = state_15755__$1;(statearr_15761_15780[1] = 8);
} else
{var statearr_15762_15781 = state_15755__$1;(statearr_15762_15781[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15756 === 6))
{var inst_15738 = (state_15755[7]);var state_15755__$1 = state_15755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15755__$1,11,to,inst_15738);
} else
{if((state_val_15756 === 7))
{var inst_15751 = (state_15755[2]);var state_15755__$1 = state_15755;var statearr_15763_15782 = state_15755__$1;(statearr_15763_15782[2] = inst_15751);
(statearr_15763_15782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15756 === 8))
{var inst_15742 = cljs.core.async.close_BANG_.call(null,to);var state_15755__$1 = state_15755;var statearr_15764_15783 = state_15755__$1;(statearr_15764_15783[2] = inst_15742);
(statearr_15764_15783[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15756 === 9))
{var state_15755__$1 = state_15755;var statearr_15765_15784 = state_15755__$1;(statearr_15765_15784[2] = null);
(statearr_15765_15784[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15756 === 10))
{var inst_15745 = (state_15755[2]);var state_15755__$1 = state_15755;var statearr_15766_15785 = state_15755__$1;(statearr_15766_15785[2] = inst_15745);
(statearr_15766_15785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15756 === 11))
{var inst_15748 = (state_15755[2]);var state_15755__$1 = (function (){var statearr_15767 = state_15755;(statearr_15767[8] = inst_15748);
return statearr_15767;
})();var statearr_15768_15786 = state_15755__$1;(statearr_15768_15786[2] = null);
(statearr_15768_15786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_15772 = [null,null,null,null,null,null,null,null,null];(statearr_15772[0] = state_machine__9913__auto__);
(statearr_15772[1] = 1);
return statearr_15772;
});
var state_machine__9913__auto____1 = (function (state_15755){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_15755);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e15773){if((e15773 instanceof Object))
{var ex__9916__auto__ = e15773;var statearr_15774_15787 = state_15755;(statearr_15774_15787[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15788 = state_15755;
state_15755 = G__15788;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_15755){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_15755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_15775 = f__9928__auto__.call(null);(statearr_15775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___15776);
return statearr_15775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9927__auto___15875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_15853){var state_val_15854 = (state_15853[1]);if((state_val_15854 === 1))
{var state_15853__$1 = state_15853;var statearr_15855_15876 = state_15853__$1;(statearr_15855_15876[2] = null);
(statearr_15855_15876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 2))
{var state_15853__$1 = state_15853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15853__$1,4,ch);
} else
{if((state_val_15854 === 3))
{var inst_15851 = (state_15853[2]);var state_15853__$1 = state_15853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15853__$1,inst_15851);
} else
{if((state_val_15854 === 4))
{var inst_15834 = (state_15853[7]);var inst_15834__$1 = (state_15853[2]);var inst_15835 = (inst_15834__$1 == null);var state_15853__$1 = (function (){var statearr_15856 = state_15853;(statearr_15856[7] = inst_15834__$1);
return statearr_15856;
})();if(cljs.core.truth_(inst_15835))
{var statearr_15857_15877 = state_15853__$1;(statearr_15857_15877[1] = 5);
} else
{var statearr_15858_15878 = state_15853__$1;(statearr_15858_15878[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 5))
{var inst_15837 = cljs.core.async.close_BANG_.call(null,tc);var inst_15838 = cljs.core.async.close_BANG_.call(null,fc);var state_15853__$1 = (function (){var statearr_15859 = state_15853;(statearr_15859[8] = inst_15837);
return statearr_15859;
})();var statearr_15860_15879 = state_15853__$1;(statearr_15860_15879[2] = inst_15838);
(statearr_15860_15879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 6))
{var inst_15834 = (state_15853[7]);var inst_15840 = p.call(null,inst_15834);var state_15853__$1 = state_15853;if(cljs.core.truth_(inst_15840))
{var statearr_15861_15880 = state_15853__$1;(statearr_15861_15880[1] = 9);
} else
{var statearr_15862_15881 = state_15853__$1;(statearr_15862_15881[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 7))
{var inst_15849 = (state_15853[2]);var state_15853__$1 = state_15853;var statearr_15863_15882 = state_15853__$1;(statearr_15863_15882[2] = inst_15849);
(statearr_15863_15882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 8))
{var inst_15846 = (state_15853[2]);var state_15853__$1 = (function (){var statearr_15864 = state_15853;(statearr_15864[9] = inst_15846);
return statearr_15864;
})();var statearr_15865_15883 = state_15853__$1;(statearr_15865_15883[2] = null);
(statearr_15865_15883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 9))
{var state_15853__$1 = state_15853;var statearr_15866_15884 = state_15853__$1;(statearr_15866_15884[2] = tc);
(statearr_15866_15884[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 10))
{var state_15853__$1 = state_15853;var statearr_15867_15885 = state_15853__$1;(statearr_15867_15885[2] = fc);
(statearr_15867_15885[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15854 === 11))
{var inst_15834 = (state_15853[7]);var inst_15844 = (state_15853[2]);var state_15853__$1 = state_15853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15853__$1,8,inst_15844,inst_15834);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_15871 = [null,null,null,null,null,null,null,null,null,null];(statearr_15871[0] = state_machine__9913__auto__);
(statearr_15871[1] = 1);
return statearr_15871;
});
var state_machine__9913__auto____1 = (function (state_15853){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_15853);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e15872){if((e15872 instanceof Object))
{var ex__9916__auto__ = e15872;var statearr_15873_15886 = state_15853;(statearr_15873_15886[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15887 = state_15853;
state_15853 = G__15887;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_15853){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_15853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_15874 = f__9928__auto__.call(null);(statearr_15874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___15875);
return statearr_15874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9927__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_15934){var state_val_15935 = (state_15934[1]);if((state_val_15935 === 7))
{var inst_15930 = (state_15934[2]);var state_15934__$1 = state_15934;var statearr_15936_15952 = state_15934__$1;(statearr_15936_15952[2] = inst_15930);
(statearr_15936_15952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15935 === 6))
{var inst_15923 = (state_15934[7]);var inst_15920 = (state_15934[8]);var inst_15927 = f.call(null,inst_15920,inst_15923);var inst_15920__$1 = inst_15927;var state_15934__$1 = (function (){var statearr_15937 = state_15934;(statearr_15937[8] = inst_15920__$1);
return statearr_15937;
})();var statearr_15938_15953 = state_15934__$1;(statearr_15938_15953[2] = null);
(statearr_15938_15953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15935 === 5))
{var inst_15920 = (state_15934[8]);var state_15934__$1 = state_15934;var statearr_15939_15954 = state_15934__$1;(statearr_15939_15954[2] = inst_15920);
(statearr_15939_15954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15935 === 4))
{var inst_15923 = (state_15934[7]);var inst_15923__$1 = (state_15934[2]);var inst_15924 = (inst_15923__$1 == null);var state_15934__$1 = (function (){var statearr_15940 = state_15934;(statearr_15940[7] = inst_15923__$1);
return statearr_15940;
})();if(cljs.core.truth_(inst_15924))
{var statearr_15941_15955 = state_15934__$1;(statearr_15941_15955[1] = 5);
} else
{var statearr_15942_15956 = state_15934__$1;(statearr_15942_15956[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15935 === 3))
{var inst_15932 = (state_15934[2]);var state_15934__$1 = state_15934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15934__$1,inst_15932);
} else
{if((state_val_15935 === 2))
{var state_15934__$1 = state_15934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15934__$1,4,ch);
} else
{if((state_val_15935 === 1))
{var inst_15920 = init;var state_15934__$1 = (function (){var statearr_15943 = state_15934;(statearr_15943[8] = inst_15920);
return statearr_15943;
})();var statearr_15944_15957 = state_15934__$1;(statearr_15944_15957[2] = null);
(statearr_15944_15957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_15948 = [null,null,null,null,null,null,null,null,null];(statearr_15948[0] = state_machine__9913__auto__);
(statearr_15948[1] = 1);
return statearr_15948;
});
var state_machine__9913__auto____1 = (function (state_15934){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_15934);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e15949){if((e15949 instanceof Object))
{var ex__9916__auto__ = e15949;var statearr_15950_15958 = state_15934;(statearr_15950_15958[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15934);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15959 = state_15934;
state_15934 = G__15959;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_15934){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_15934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_15951 = f__9928__auto__.call(null);(statearr_15951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto__);
return statearr_15951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return c__9927__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9927__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_16021){var state_val_16022 = (state_16021[1]);if((state_val_16022 === 1))
{var inst_16001 = cljs.core.seq.call(null,coll);var inst_16002 = inst_16001;var state_16021__$1 = (function (){var statearr_16023 = state_16021;(statearr_16023[7] = inst_16002);
return statearr_16023;
})();var statearr_16024_16042 = state_16021__$1;(statearr_16024_16042[2] = null);
(statearr_16024_16042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16022 === 2))
{var inst_16002 = (state_16021[7]);var state_16021__$1 = state_16021;if(cljs.core.truth_(inst_16002))
{var statearr_16025_16043 = state_16021__$1;(statearr_16025_16043[1] = 4);
} else
{var statearr_16026_16044 = state_16021__$1;(statearr_16026_16044[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16022 === 3))
{var inst_16019 = (state_16021[2]);var state_16021__$1 = state_16021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16021__$1,inst_16019);
} else
{if((state_val_16022 === 4))
{var inst_16002 = (state_16021[7]);var inst_16005 = cljs.core.first.call(null,inst_16002);var state_16021__$1 = state_16021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16021__$1,7,ch,inst_16005);
} else
{if((state_val_16022 === 5))
{var state_16021__$1 = state_16021;if(cljs.core.truth_(close_QMARK_))
{var statearr_16027_16045 = state_16021__$1;(statearr_16027_16045[1] = 8);
} else
{var statearr_16028_16046 = state_16021__$1;(statearr_16028_16046[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16022 === 6))
{var inst_16017 = (state_16021[2]);var state_16021__$1 = state_16021;var statearr_16029_16047 = state_16021__$1;(statearr_16029_16047[2] = inst_16017);
(statearr_16029_16047[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16022 === 7))
{var inst_16002 = (state_16021[7]);var inst_16007 = (state_16021[2]);var inst_16008 = cljs.core.next.call(null,inst_16002);var inst_16002__$1 = inst_16008;var state_16021__$1 = (function (){var statearr_16030 = state_16021;(statearr_16030[7] = inst_16002__$1);
(statearr_16030[8] = inst_16007);
return statearr_16030;
})();var statearr_16031_16048 = state_16021__$1;(statearr_16031_16048[2] = null);
(statearr_16031_16048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16022 === 8))
{var inst_16012 = cljs.core.async.close_BANG_.call(null,ch);var state_16021__$1 = state_16021;var statearr_16032_16049 = state_16021__$1;(statearr_16032_16049[2] = inst_16012);
(statearr_16032_16049[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16022 === 9))
{var state_16021__$1 = state_16021;var statearr_16033_16050 = state_16021__$1;(statearr_16033_16050[2] = null);
(statearr_16033_16050[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16022 === 10))
{var inst_16015 = (state_16021[2]);var state_16021__$1 = state_16021;var statearr_16034_16051 = state_16021__$1;(statearr_16034_16051[2] = inst_16015);
(statearr_16034_16051[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_16038 = [null,null,null,null,null,null,null,null,null];(statearr_16038[0] = state_machine__9913__auto__);
(statearr_16038[1] = 1);
return statearr_16038;
});
var state_machine__9913__auto____1 = (function (state_16021){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_16021);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e16039){if((e16039 instanceof Object))
{var ex__9916__auto__ = e16039;var statearr_16040_16052 = state_16021;(statearr_16040_16052[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16053 = state_16021;
state_16021 = G__16053;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_16021){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_16021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_16041 = f__9928__auto__.call(null);(statearr_16041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto__);
return statearr_16041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return c__9927__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16055 = {};return obj16055;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7034__auto__ = _;if(and__7034__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7034__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__7673__auto__ = (((_ == null))?null:_);return (function (){var or__7046__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16057 = {};return obj16057;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7034__auto__ = m;if(and__7034__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7034__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__7673__auto__ = (((m == null))?null:m);return (function (){var or__7046__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7034__auto__ = m;if(and__7034__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7034__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__7673__auto__ = (((m == null))?null:m);return (function (){var or__7046__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7034__auto__ = m;if(and__7034__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7034__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__7673__auto__ = (((m == null))?null:m);return (function (){var or__7046__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16281 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16281 = (function (cs,ch,mult,meta16282){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16282 = meta16282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16281.cljs$lang$type = true;
cljs.core.async.t16281.cljs$lang$ctorStr = "cljs.core.async/t16281";
cljs.core.async.t16281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t16281");
});})(cs))
;
cljs.core.async.t16281.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16281.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16283){var self__ = this;
var _16283__$1 = this;return self__.meta16282;
});})(cs))
;
cljs.core.async.t16281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16283,meta16282__$1){var self__ = this;
var _16283__$1 = this;return (new cljs.core.async.t16281(self__.cs,self__.ch,self__.mult,meta16282__$1));
});})(cs))
;
cljs.core.async.__GT_t16281 = ((function (cs){
return (function __GT_t16281(cs__$1,ch__$1,mult__$1,meta16282){return (new cljs.core.async.t16281(cs__$1,ch__$1,mult__$1,meta16282));
});})(cs))
;
}
return (new cljs.core.async.t16281(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9927__auto___16504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_16418){var state_val_16419 = (state_16418[1]);if((state_val_16419 === 32))
{var inst_16362 = (state_16418[7]);var inst_16286 = (state_16418[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16418,31,Object,null,30);var inst_16369 = cljs.core.async.put_BANG_.call(null,inst_16362,inst_16286,done);var state_16418__$1 = state_16418;var statearr_16420_16505 = state_16418__$1;(statearr_16420_16505[2] = inst_16369);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16418__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 1))
{var state_16418__$1 = state_16418;var statearr_16421_16506 = state_16418__$1;(statearr_16421_16506[2] = null);
(statearr_16421_16506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 33))
{var inst_16375 = (state_16418[9]);var inst_16377 = cljs.core.chunked_seq_QMARK_.call(null,inst_16375);var state_16418__$1 = state_16418;if(inst_16377)
{var statearr_16422_16507 = state_16418__$1;(statearr_16422_16507[1] = 36);
} else
{var statearr_16423_16508 = state_16418__$1;(statearr_16423_16508[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 2))
{var state_16418__$1 = state_16418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16418__$1,4,ch);
} else
{if((state_val_16419 === 34))
{var state_16418__$1 = state_16418;var statearr_16424_16509 = state_16418__$1;(statearr_16424_16509[2] = null);
(statearr_16424_16509[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 3))
{var inst_16416 = (state_16418[2]);var state_16418__$1 = state_16418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16418__$1,inst_16416);
} else
{if((state_val_16419 === 35))
{var inst_16400 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16425_16510 = state_16418__$1;(statearr_16425_16510[2] = inst_16400);
(statearr_16425_16510[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 4))
{var inst_16286 = (state_16418[8]);var inst_16286__$1 = (state_16418[2]);var inst_16287 = (inst_16286__$1 == null);var state_16418__$1 = (function (){var statearr_16426 = state_16418;(statearr_16426[8] = inst_16286__$1);
return statearr_16426;
})();if(cljs.core.truth_(inst_16287))
{var statearr_16427_16511 = state_16418__$1;(statearr_16427_16511[1] = 5);
} else
{var statearr_16428_16512 = state_16418__$1;(statearr_16428_16512[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 36))
{var inst_16375 = (state_16418[9]);var inst_16379 = cljs.core.chunk_first.call(null,inst_16375);var inst_16380 = cljs.core.chunk_rest.call(null,inst_16375);var inst_16381 = cljs.core.count.call(null,inst_16379);var inst_16354 = inst_16380;var inst_16355 = inst_16379;var inst_16356 = inst_16381;var inst_16357 = 0;var state_16418__$1 = (function (){var statearr_16429 = state_16418;(statearr_16429[10] = inst_16356);
(statearr_16429[11] = inst_16357);
(statearr_16429[12] = inst_16354);
(statearr_16429[13] = inst_16355);
return statearr_16429;
})();var statearr_16430_16513 = state_16418__$1;(statearr_16430_16513[2] = null);
(statearr_16430_16513[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 5))
{var inst_16293 = cljs.core.deref.call(null,cs);var inst_16294 = cljs.core.seq.call(null,inst_16293);var inst_16295 = inst_16294;var inst_16296 = null;var inst_16297 = 0;var inst_16298 = 0;var state_16418__$1 = (function (){var statearr_16431 = state_16418;(statearr_16431[14] = inst_16296);
(statearr_16431[15] = inst_16295);
(statearr_16431[16] = inst_16298);
(statearr_16431[17] = inst_16297);
return statearr_16431;
})();var statearr_16432_16514 = state_16418__$1;(statearr_16432_16514[2] = null);
(statearr_16432_16514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 37))
{var inst_16375 = (state_16418[9]);var inst_16384 = cljs.core.first.call(null,inst_16375);var state_16418__$1 = (function (){var statearr_16433 = state_16418;(statearr_16433[18] = inst_16384);
return statearr_16433;
})();var statearr_16434_16515 = state_16418__$1;(statearr_16434_16515[2] = null);
(statearr_16434_16515[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 6))
{var inst_16346 = (state_16418[19]);var inst_16345 = cljs.core.deref.call(null,cs);var inst_16346__$1 = cljs.core.keys.call(null,inst_16345);var inst_16347 = cljs.core.count.call(null,inst_16346__$1);var inst_16348 = cljs.core.reset_BANG_.call(null,dctr,inst_16347);var inst_16353 = cljs.core.seq.call(null,inst_16346__$1);var inst_16354 = inst_16353;var inst_16355 = null;var inst_16356 = 0;var inst_16357 = 0;var state_16418__$1 = (function (){var statearr_16435 = state_16418;(statearr_16435[19] = inst_16346__$1);
(statearr_16435[10] = inst_16356);
(statearr_16435[11] = inst_16357);
(statearr_16435[12] = inst_16354);
(statearr_16435[13] = inst_16355);
(statearr_16435[20] = inst_16348);
return statearr_16435;
})();var statearr_16436_16516 = state_16418__$1;(statearr_16436_16516[2] = null);
(statearr_16436_16516[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 38))
{var inst_16397 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16437_16517 = state_16418__$1;(statearr_16437_16517[2] = inst_16397);
(statearr_16437_16517[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 7))
{var inst_16414 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16438_16518 = state_16418__$1;(statearr_16438_16518[2] = inst_16414);
(statearr_16438_16518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 39))
{var inst_16375 = (state_16418[9]);var inst_16393 = (state_16418[2]);var inst_16394 = cljs.core.next.call(null,inst_16375);var inst_16354 = inst_16394;var inst_16355 = null;var inst_16356 = 0;var inst_16357 = 0;var state_16418__$1 = (function (){var statearr_16439 = state_16418;(statearr_16439[10] = inst_16356);
(statearr_16439[11] = inst_16357);
(statearr_16439[12] = inst_16354);
(statearr_16439[13] = inst_16355);
(statearr_16439[21] = inst_16393);
return statearr_16439;
})();var statearr_16440_16519 = state_16418__$1;(statearr_16440_16519[2] = null);
(statearr_16440_16519[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 8))
{var inst_16298 = (state_16418[16]);var inst_16297 = (state_16418[17]);var inst_16300 = (inst_16298 < inst_16297);var inst_16301 = inst_16300;var state_16418__$1 = state_16418;if(cljs.core.truth_(inst_16301))
{var statearr_16441_16520 = state_16418__$1;(statearr_16441_16520[1] = 10);
} else
{var statearr_16442_16521 = state_16418__$1;(statearr_16442_16521[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 40))
{var inst_16384 = (state_16418[18]);var inst_16385 = (state_16418[2]);var inst_16386 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16387 = cljs.core.async.untap_STAR_.call(null,m,inst_16384);var state_16418__$1 = (function (){var statearr_16443 = state_16418;(statearr_16443[22] = inst_16386);
(statearr_16443[23] = inst_16385);
return statearr_16443;
})();var statearr_16444_16522 = state_16418__$1;(statearr_16444_16522[2] = inst_16387);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16418__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 9))
{var inst_16343 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16445_16523 = state_16418__$1;(statearr_16445_16523[2] = inst_16343);
(statearr_16445_16523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 41))
{var inst_16384 = (state_16418[18]);var inst_16286 = (state_16418[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16418,40,Object,null,39);var inst_16391 = cljs.core.async.put_BANG_.call(null,inst_16384,inst_16286,done);var state_16418__$1 = state_16418;var statearr_16446_16524 = state_16418__$1;(statearr_16446_16524[2] = inst_16391);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16418__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 10))
{var inst_16296 = (state_16418[14]);var inst_16298 = (state_16418[16]);var inst_16304 = cljs.core._nth.call(null,inst_16296,inst_16298);var inst_16305 = cljs.core.nth.call(null,inst_16304,0,null);var inst_16306 = cljs.core.nth.call(null,inst_16304,1,null);var state_16418__$1 = (function (){var statearr_16447 = state_16418;(statearr_16447[24] = inst_16305);
return statearr_16447;
})();if(cljs.core.truth_(inst_16306))
{var statearr_16448_16525 = state_16418__$1;(statearr_16448_16525[1] = 13);
} else
{var statearr_16449_16526 = state_16418__$1;(statearr_16449_16526[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 42))
{var state_16418__$1 = state_16418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16418__$1,45,dchan);
} else
{if((state_val_16419 === 11))
{var inst_16315 = (state_16418[25]);var inst_16295 = (state_16418[15]);var inst_16315__$1 = cljs.core.seq.call(null,inst_16295);var state_16418__$1 = (function (){var statearr_16450 = state_16418;(statearr_16450[25] = inst_16315__$1);
return statearr_16450;
})();if(inst_16315__$1)
{var statearr_16451_16527 = state_16418__$1;(statearr_16451_16527[1] = 16);
} else
{var statearr_16452_16528 = state_16418__$1;(statearr_16452_16528[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 43))
{var state_16418__$1 = state_16418;var statearr_16453_16529 = state_16418__$1;(statearr_16453_16529[2] = null);
(statearr_16453_16529[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 12))
{var inst_16341 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16454_16530 = state_16418__$1;(statearr_16454_16530[2] = inst_16341);
(statearr_16454_16530[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 44))
{var inst_16411 = (state_16418[2]);var state_16418__$1 = (function (){var statearr_16455 = state_16418;(statearr_16455[26] = inst_16411);
return statearr_16455;
})();var statearr_16456_16531 = state_16418__$1;(statearr_16456_16531[2] = null);
(statearr_16456_16531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 13))
{var inst_16305 = (state_16418[24]);var inst_16308 = cljs.core.async.close_BANG_.call(null,inst_16305);var state_16418__$1 = state_16418;var statearr_16457_16532 = state_16418__$1;(statearr_16457_16532[2] = inst_16308);
(statearr_16457_16532[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 45))
{var inst_16408 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16461_16533 = state_16418__$1;(statearr_16461_16533[2] = inst_16408);
(statearr_16461_16533[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 14))
{var state_16418__$1 = state_16418;var statearr_16462_16534 = state_16418__$1;(statearr_16462_16534[2] = null);
(statearr_16462_16534[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 15))
{var inst_16296 = (state_16418[14]);var inst_16295 = (state_16418[15]);var inst_16298 = (state_16418[16]);var inst_16297 = (state_16418[17]);var inst_16311 = (state_16418[2]);var inst_16312 = (inst_16298 + 1);var tmp16458 = inst_16296;var tmp16459 = inst_16295;var tmp16460 = inst_16297;var inst_16295__$1 = tmp16459;var inst_16296__$1 = tmp16458;var inst_16297__$1 = tmp16460;var inst_16298__$1 = inst_16312;var state_16418__$1 = (function (){var statearr_16463 = state_16418;(statearr_16463[27] = inst_16311);
(statearr_16463[14] = inst_16296__$1);
(statearr_16463[15] = inst_16295__$1);
(statearr_16463[16] = inst_16298__$1);
(statearr_16463[17] = inst_16297__$1);
return statearr_16463;
})();var statearr_16464_16535 = state_16418__$1;(statearr_16464_16535[2] = null);
(statearr_16464_16535[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 16))
{var inst_16315 = (state_16418[25]);var inst_16317 = cljs.core.chunked_seq_QMARK_.call(null,inst_16315);var state_16418__$1 = state_16418;if(inst_16317)
{var statearr_16465_16536 = state_16418__$1;(statearr_16465_16536[1] = 19);
} else
{var statearr_16466_16537 = state_16418__$1;(statearr_16466_16537[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 17))
{var state_16418__$1 = state_16418;var statearr_16467_16538 = state_16418__$1;(statearr_16467_16538[2] = null);
(statearr_16467_16538[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 18))
{var inst_16339 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16468_16539 = state_16418__$1;(statearr_16468_16539[2] = inst_16339);
(statearr_16468_16539[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 19))
{var inst_16315 = (state_16418[25]);var inst_16319 = cljs.core.chunk_first.call(null,inst_16315);var inst_16320 = cljs.core.chunk_rest.call(null,inst_16315);var inst_16321 = cljs.core.count.call(null,inst_16319);var inst_16295 = inst_16320;var inst_16296 = inst_16319;var inst_16297 = inst_16321;var inst_16298 = 0;var state_16418__$1 = (function (){var statearr_16469 = state_16418;(statearr_16469[14] = inst_16296);
(statearr_16469[15] = inst_16295);
(statearr_16469[16] = inst_16298);
(statearr_16469[17] = inst_16297);
return statearr_16469;
})();var statearr_16470_16540 = state_16418__$1;(statearr_16470_16540[2] = null);
(statearr_16470_16540[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 20))
{var inst_16315 = (state_16418[25]);var inst_16325 = cljs.core.first.call(null,inst_16315);var inst_16326 = cljs.core.nth.call(null,inst_16325,0,null);var inst_16327 = cljs.core.nth.call(null,inst_16325,1,null);var state_16418__$1 = (function (){var statearr_16471 = state_16418;(statearr_16471[28] = inst_16326);
return statearr_16471;
})();if(cljs.core.truth_(inst_16327))
{var statearr_16472_16541 = state_16418__$1;(statearr_16472_16541[1] = 22);
} else
{var statearr_16473_16542 = state_16418__$1;(statearr_16473_16542[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 21))
{var inst_16336 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16474_16543 = state_16418__$1;(statearr_16474_16543[2] = inst_16336);
(statearr_16474_16543[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 22))
{var inst_16326 = (state_16418[28]);var inst_16329 = cljs.core.async.close_BANG_.call(null,inst_16326);var state_16418__$1 = state_16418;var statearr_16475_16544 = state_16418__$1;(statearr_16475_16544[2] = inst_16329);
(statearr_16475_16544[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 23))
{var state_16418__$1 = state_16418;var statearr_16476_16545 = state_16418__$1;(statearr_16476_16545[2] = null);
(statearr_16476_16545[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 24))
{var inst_16315 = (state_16418[25]);var inst_16332 = (state_16418[2]);var inst_16333 = cljs.core.next.call(null,inst_16315);var inst_16295 = inst_16333;var inst_16296 = null;var inst_16297 = 0;var inst_16298 = 0;var state_16418__$1 = (function (){var statearr_16477 = state_16418;(statearr_16477[29] = inst_16332);
(statearr_16477[14] = inst_16296);
(statearr_16477[15] = inst_16295);
(statearr_16477[16] = inst_16298);
(statearr_16477[17] = inst_16297);
return statearr_16477;
})();var statearr_16478_16546 = state_16418__$1;(statearr_16478_16546[2] = null);
(statearr_16478_16546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 25))
{var inst_16356 = (state_16418[10]);var inst_16357 = (state_16418[11]);var inst_16359 = (inst_16357 < inst_16356);var inst_16360 = inst_16359;var state_16418__$1 = state_16418;if(cljs.core.truth_(inst_16360))
{var statearr_16479_16547 = state_16418__$1;(statearr_16479_16547[1] = 27);
} else
{var statearr_16480_16548 = state_16418__$1;(statearr_16480_16548[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 26))
{var inst_16346 = (state_16418[19]);var inst_16404 = (state_16418[2]);var inst_16405 = cljs.core.seq.call(null,inst_16346);var state_16418__$1 = (function (){var statearr_16481 = state_16418;(statearr_16481[30] = inst_16404);
return statearr_16481;
})();if(inst_16405)
{var statearr_16482_16549 = state_16418__$1;(statearr_16482_16549[1] = 42);
} else
{var statearr_16483_16550 = state_16418__$1;(statearr_16483_16550[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 27))
{var inst_16357 = (state_16418[11]);var inst_16355 = (state_16418[13]);var inst_16362 = cljs.core._nth.call(null,inst_16355,inst_16357);var state_16418__$1 = (function (){var statearr_16484 = state_16418;(statearr_16484[7] = inst_16362);
return statearr_16484;
})();var statearr_16485_16551 = state_16418__$1;(statearr_16485_16551[2] = null);
(statearr_16485_16551[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 28))
{var inst_16354 = (state_16418[12]);var inst_16375 = (state_16418[9]);var inst_16375__$1 = cljs.core.seq.call(null,inst_16354);var state_16418__$1 = (function (){var statearr_16489 = state_16418;(statearr_16489[9] = inst_16375__$1);
return statearr_16489;
})();if(inst_16375__$1)
{var statearr_16490_16552 = state_16418__$1;(statearr_16490_16552[1] = 33);
} else
{var statearr_16491_16553 = state_16418__$1;(statearr_16491_16553[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 29))
{var inst_16402 = (state_16418[2]);var state_16418__$1 = state_16418;var statearr_16492_16554 = state_16418__$1;(statearr_16492_16554[2] = inst_16402);
(statearr_16492_16554[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 30))
{var inst_16356 = (state_16418[10]);var inst_16357 = (state_16418[11]);var inst_16354 = (state_16418[12]);var inst_16355 = (state_16418[13]);var inst_16371 = (state_16418[2]);var inst_16372 = (inst_16357 + 1);var tmp16486 = inst_16356;var tmp16487 = inst_16354;var tmp16488 = inst_16355;var inst_16354__$1 = tmp16487;var inst_16355__$1 = tmp16488;var inst_16356__$1 = tmp16486;var inst_16357__$1 = inst_16372;var state_16418__$1 = (function (){var statearr_16493 = state_16418;(statearr_16493[31] = inst_16371);
(statearr_16493[10] = inst_16356__$1);
(statearr_16493[11] = inst_16357__$1);
(statearr_16493[12] = inst_16354__$1);
(statearr_16493[13] = inst_16355__$1);
return statearr_16493;
})();var statearr_16494_16555 = state_16418__$1;(statearr_16494_16555[2] = null);
(statearr_16494_16555[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16419 === 31))
{var inst_16362 = (state_16418[7]);var inst_16363 = (state_16418[2]);var inst_16364 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16365 = cljs.core.async.untap_STAR_.call(null,m,inst_16362);var state_16418__$1 = (function (){var statearr_16495 = state_16418;(statearr_16495[32] = inst_16364);
(statearr_16495[33] = inst_16363);
return statearr_16495;
})();var statearr_16496_16556 = state_16418__$1;(statearr_16496_16556[2] = inst_16365);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16418__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_16500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16500[0] = state_machine__9913__auto__);
(statearr_16500[1] = 1);
return statearr_16500;
});
var state_machine__9913__auto____1 = (function (state_16418){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_16418);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e16501){if((e16501 instanceof Object))
{var ex__9916__auto__ = e16501;var statearr_16502_16557 = state_16418;(statearr_16502_16557[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16558 = state_16418;
state_16418 = G__16558;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_16418){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_16418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_16503 = f__9928__auto__.call(null);(statearr_16503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___16504);
return statearr_16503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16560 = {};return obj16560;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7034__auto__ = m;if(and__7034__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7034__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__7673__auto__ = (((m == null))?null:m);return (function (){var or__7046__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7034__auto__ = m;if(and__7034__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7034__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__7673__auto__ = (((m == null))?null:m);return (function (){var or__7046__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7034__auto__ = m;if(and__7034__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7034__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__7673__auto__ = (((m == null))?null:m);return (function (){var or__7046__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7034__auto__ = m;if(and__7034__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7034__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__7673__auto__ = (((m == null))?null:m);return (function (){var or__7046__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7034__auto__ = m;if(and__7034__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7034__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__7673__auto__ = (((m == null))?null:m);return (function (){var or__7046__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16670 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16671){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta16671 = meta16671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16670.cljs$lang$type = true;
cljs.core.async.t16670.cljs$lang$ctorStr = "cljs.core.async/t16670";
cljs.core.async.t16670.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t16670");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16670.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16670.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16672){var self__ = this;
var _16672__$1 = this;return self__.meta16671;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16672,meta16671__$1){var self__ = this;
var _16672__$1 = this;return (new cljs.core.async.t16670(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16671__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16670 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16670(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16671){return (new cljs.core.async.t16670(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16671));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16670(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__9927__auto___16779 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_16737){var state_val_16738 = (state_16737[1]);if((state_val_16738 === 1))
{var inst_16676 = (state_16737[7]);var inst_16676__$1 = calc_state.call(null);var inst_16677 = cljs.core.seq_QMARK_.call(null,inst_16676__$1);var state_16737__$1 = (function (){var statearr_16739 = state_16737;(statearr_16739[7] = inst_16676__$1);
return statearr_16739;
})();if(inst_16677)
{var statearr_16740_16780 = state_16737__$1;(statearr_16740_16780[1] = 2);
} else
{var statearr_16741_16781 = state_16737__$1;(statearr_16741_16781[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 2))
{var inst_16676 = (state_16737[7]);var inst_16679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16676);var state_16737__$1 = state_16737;var statearr_16742_16782 = state_16737__$1;(statearr_16742_16782[2] = inst_16679);
(statearr_16742_16782[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 3))
{var inst_16676 = (state_16737[7]);var state_16737__$1 = state_16737;var statearr_16743_16783 = state_16737__$1;(statearr_16743_16783[2] = inst_16676);
(statearr_16743_16783[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 4))
{var inst_16676 = (state_16737[7]);var inst_16682 = (state_16737[2]);var inst_16683 = cljs.core.get.call(null,inst_16682,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16684 = cljs.core.get.call(null,inst_16682,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16685 = cljs.core.get.call(null,inst_16682,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16686 = inst_16676;var state_16737__$1 = (function (){var statearr_16744 = state_16737;(statearr_16744[8] = inst_16686);
(statearr_16744[9] = inst_16684);
(statearr_16744[10] = inst_16685);
(statearr_16744[11] = inst_16683);
return statearr_16744;
})();var statearr_16745_16784 = state_16737__$1;(statearr_16745_16784[2] = null);
(statearr_16745_16784[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 5))
{var inst_16686 = (state_16737[8]);var inst_16689 = cljs.core.seq_QMARK_.call(null,inst_16686);var state_16737__$1 = state_16737;if(inst_16689)
{var statearr_16746_16785 = state_16737__$1;(statearr_16746_16785[1] = 7);
} else
{var statearr_16747_16786 = state_16737__$1;(statearr_16747_16786[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 6))
{var inst_16735 = (state_16737[2]);var state_16737__$1 = state_16737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16737__$1,inst_16735);
} else
{if((state_val_16738 === 7))
{var inst_16686 = (state_16737[8]);var inst_16691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16686);var state_16737__$1 = state_16737;var statearr_16748_16787 = state_16737__$1;(statearr_16748_16787[2] = inst_16691);
(statearr_16748_16787[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 8))
{var inst_16686 = (state_16737[8]);var state_16737__$1 = state_16737;var statearr_16749_16788 = state_16737__$1;(statearr_16749_16788[2] = inst_16686);
(statearr_16749_16788[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 9))
{var inst_16694 = (state_16737[12]);var inst_16694__$1 = (state_16737[2]);var inst_16695 = cljs.core.get.call(null,inst_16694__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16696 = cljs.core.get.call(null,inst_16694__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16697 = cljs.core.get.call(null,inst_16694__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16737__$1 = (function (){var statearr_16750 = state_16737;(statearr_16750[13] = inst_16697);
(statearr_16750[14] = inst_16696);
(statearr_16750[12] = inst_16694__$1);
return statearr_16750;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16737__$1,10,inst_16695);
} else
{if((state_val_16738 === 10))
{var inst_16702 = (state_16737[15]);var inst_16701 = (state_16737[16]);var inst_16700 = (state_16737[2]);var inst_16701__$1 = cljs.core.nth.call(null,inst_16700,0,null);var inst_16702__$1 = cljs.core.nth.call(null,inst_16700,1,null);var inst_16703 = (inst_16701__$1 == null);var inst_16704 = cljs.core._EQ_.call(null,inst_16702__$1,change);var inst_16705 = (inst_16703) || (inst_16704);var state_16737__$1 = (function (){var statearr_16751 = state_16737;(statearr_16751[15] = inst_16702__$1);
(statearr_16751[16] = inst_16701__$1);
return statearr_16751;
})();if(cljs.core.truth_(inst_16705))
{var statearr_16752_16789 = state_16737__$1;(statearr_16752_16789[1] = 11);
} else
{var statearr_16753_16790 = state_16737__$1;(statearr_16753_16790[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 11))
{var inst_16701 = (state_16737[16]);var inst_16707 = (inst_16701 == null);var state_16737__$1 = state_16737;if(cljs.core.truth_(inst_16707))
{var statearr_16754_16791 = state_16737__$1;(statearr_16754_16791[1] = 14);
} else
{var statearr_16755_16792 = state_16737__$1;(statearr_16755_16792[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 12))
{var inst_16702 = (state_16737[15]);var inst_16697 = (state_16737[13]);var inst_16716 = (state_16737[17]);var inst_16716__$1 = inst_16697.call(null,inst_16702);var state_16737__$1 = (function (){var statearr_16756 = state_16737;(statearr_16756[17] = inst_16716__$1);
return statearr_16756;
})();if(cljs.core.truth_(inst_16716__$1))
{var statearr_16757_16793 = state_16737__$1;(statearr_16757_16793[1] = 17);
} else
{var statearr_16758_16794 = state_16737__$1;(statearr_16758_16794[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 13))
{var inst_16733 = (state_16737[2]);var state_16737__$1 = state_16737;var statearr_16759_16795 = state_16737__$1;(statearr_16759_16795[2] = inst_16733);
(statearr_16759_16795[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 14))
{var inst_16702 = (state_16737[15]);var inst_16709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16702);var state_16737__$1 = state_16737;var statearr_16760_16796 = state_16737__$1;(statearr_16760_16796[2] = inst_16709);
(statearr_16760_16796[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 15))
{var state_16737__$1 = state_16737;var statearr_16761_16797 = state_16737__$1;(statearr_16761_16797[2] = null);
(statearr_16761_16797[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 16))
{var inst_16712 = (state_16737[2]);var inst_16713 = calc_state.call(null);var inst_16686 = inst_16713;var state_16737__$1 = (function (){var statearr_16762 = state_16737;(statearr_16762[18] = inst_16712);
(statearr_16762[8] = inst_16686);
return statearr_16762;
})();var statearr_16763_16798 = state_16737__$1;(statearr_16763_16798[2] = null);
(statearr_16763_16798[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 17))
{var inst_16716 = (state_16737[17]);var state_16737__$1 = state_16737;var statearr_16764_16799 = state_16737__$1;(statearr_16764_16799[2] = inst_16716);
(statearr_16764_16799[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 18))
{var inst_16702 = (state_16737[15]);var inst_16697 = (state_16737[13]);var inst_16696 = (state_16737[14]);var inst_16719 = cljs.core.empty_QMARK_.call(null,inst_16697);var inst_16720 = inst_16696.call(null,inst_16702);var inst_16721 = cljs.core.not.call(null,inst_16720);var inst_16722 = (inst_16719) && (inst_16721);var state_16737__$1 = state_16737;var statearr_16765_16800 = state_16737__$1;(statearr_16765_16800[2] = inst_16722);
(statearr_16765_16800[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 19))
{var inst_16724 = (state_16737[2]);var state_16737__$1 = state_16737;if(cljs.core.truth_(inst_16724))
{var statearr_16766_16801 = state_16737__$1;(statearr_16766_16801[1] = 20);
} else
{var statearr_16767_16802 = state_16737__$1;(statearr_16767_16802[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 20))
{var inst_16701 = (state_16737[16]);var state_16737__$1 = state_16737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16737__$1,23,out,inst_16701);
} else
{if((state_val_16738 === 21))
{var state_16737__$1 = state_16737;var statearr_16768_16803 = state_16737__$1;(statearr_16768_16803[2] = null);
(statearr_16768_16803[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 22))
{var inst_16694 = (state_16737[12]);var inst_16730 = (state_16737[2]);var inst_16686 = inst_16694;var state_16737__$1 = (function (){var statearr_16769 = state_16737;(statearr_16769[8] = inst_16686);
(statearr_16769[19] = inst_16730);
return statearr_16769;
})();var statearr_16770_16804 = state_16737__$1;(statearr_16770_16804[2] = null);
(statearr_16770_16804[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16738 === 23))
{var inst_16727 = (state_16737[2]);var state_16737__$1 = state_16737;var statearr_16771_16805 = state_16737__$1;(statearr_16771_16805[2] = inst_16727);
(statearr_16771_16805[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_16775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16775[0] = state_machine__9913__auto__);
(statearr_16775[1] = 1);
return statearr_16775;
});
var state_machine__9913__auto____1 = (function (state_16737){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_16737);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e16776){if((e16776 instanceof Object))
{var ex__9916__auto__ = e16776;var statearr_16777_16806 = state_16737;(statearr_16777_16806[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16807 = state_16737;
state_16737 = G__16807;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_16737){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_16737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_16778 = f__9928__auto__.call(null);(statearr_16778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___16779);
return statearr_16778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16809 = {};return obj16809;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7034__auto__ = p;if(and__7034__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7034__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__7673__auto__ = (((p == null))?null:p);return (function (){var or__7046__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7034__auto__ = p;if(and__7034__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7034__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__7673__auto__ = (((p == null))?null:p);return (function (){var or__7046__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7034__auto__ = p;if(and__7034__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7034__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__7673__auto__ = (((p == null))?null:p);return (function (){var or__7046__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7034__auto__ = p;if(and__7034__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7034__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__7673__auto__ = (((p == null))?null:p);return (function (){var or__7046__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7673__auto__)]);if(or__7046__auto__)
{return or__7046__auto__;
} else
{var or__7046__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7046__auto____$1)
{return or__7046__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7046__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7046__auto__))
{return or__7046__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7046__auto__,mults){
return (function (p1__16810_SHARP_){if(cljs.core.truth_(p1__16810_SHARP_.call(null,topic)))
{return p1__16810_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16810_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7046__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16935 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16936){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16936 = meta16936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16935.cljs$lang$type = true;
cljs.core.async.t16935.cljs$lang$ctorStr = "cljs.core.async/t16935";
cljs.core.async.t16935.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7613__auto__,writer__7614__auto__,opt__7615__auto__){return cljs.core._write.call(null,writer__7614__auto__,"cljs.core.async/t16935");
});})(mults,ensure_mult))
;
cljs.core.async.t16935.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16935.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16937){var self__ = this;
var _16937__$1 = this;return self__.meta16936;
});})(mults,ensure_mult))
;
cljs.core.async.t16935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16937,meta16936__$1){var self__ = this;
var _16937__$1 = this;return (new cljs.core.async.t16935(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16936__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16935 = ((function (mults,ensure_mult){
return (function __GT_t16935(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16936){return (new cljs.core.async.t16935(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16936));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16935(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9927__auto___17059 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_17011){var state_val_17012 = (state_17011[1]);if((state_val_17012 === 1))
{var state_17011__$1 = state_17011;var statearr_17013_17060 = state_17011__$1;(statearr_17013_17060[2] = null);
(statearr_17013_17060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 2))
{var state_17011__$1 = state_17011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17011__$1,4,ch);
} else
{if((state_val_17012 === 3))
{var inst_17009 = (state_17011[2]);var state_17011__$1 = state_17011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17011__$1,inst_17009);
} else
{if((state_val_17012 === 4))
{var inst_16940 = (state_17011[7]);var inst_16940__$1 = (state_17011[2]);var inst_16941 = (inst_16940__$1 == null);var state_17011__$1 = (function (){var statearr_17014 = state_17011;(statearr_17014[7] = inst_16940__$1);
return statearr_17014;
})();if(cljs.core.truth_(inst_16941))
{var statearr_17015_17061 = state_17011__$1;(statearr_17015_17061[1] = 5);
} else
{var statearr_17016_17062 = state_17011__$1;(statearr_17016_17062[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 5))
{var inst_16947 = cljs.core.deref.call(null,mults);var inst_16948 = cljs.core.vals.call(null,inst_16947);var inst_16949 = cljs.core.seq.call(null,inst_16948);var inst_16950 = inst_16949;var inst_16951 = null;var inst_16952 = 0;var inst_16953 = 0;var state_17011__$1 = (function (){var statearr_17017 = state_17011;(statearr_17017[8] = inst_16953);
(statearr_17017[9] = inst_16952);
(statearr_17017[10] = inst_16950);
(statearr_17017[11] = inst_16951);
return statearr_17017;
})();var statearr_17018_17063 = state_17011__$1;(statearr_17018_17063[2] = null);
(statearr_17018_17063[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 6))
{var inst_16940 = (state_17011[7]);var inst_16988 = (state_17011[12]);var inst_16990 = (state_17011[13]);var inst_16988__$1 = topic_fn.call(null,inst_16940);var inst_16989 = cljs.core.deref.call(null,mults);var inst_16990__$1 = cljs.core.get.call(null,inst_16989,inst_16988__$1);var state_17011__$1 = (function (){var statearr_17019 = state_17011;(statearr_17019[12] = inst_16988__$1);
(statearr_17019[13] = inst_16990__$1);
return statearr_17019;
})();if(cljs.core.truth_(inst_16990__$1))
{var statearr_17020_17064 = state_17011__$1;(statearr_17020_17064[1] = 19);
} else
{var statearr_17021_17065 = state_17011__$1;(statearr_17021_17065[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 7))
{var inst_17007 = (state_17011[2]);var state_17011__$1 = state_17011;var statearr_17022_17066 = state_17011__$1;(statearr_17022_17066[2] = inst_17007);
(statearr_17022_17066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 8))
{var inst_16953 = (state_17011[8]);var inst_16952 = (state_17011[9]);var inst_16955 = (inst_16953 < inst_16952);var inst_16956 = inst_16955;var state_17011__$1 = state_17011;if(cljs.core.truth_(inst_16956))
{var statearr_17026_17067 = state_17011__$1;(statearr_17026_17067[1] = 10);
} else
{var statearr_17027_17068 = state_17011__$1;(statearr_17027_17068[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 9))
{var inst_16986 = (state_17011[2]);var state_17011__$1 = state_17011;var statearr_17028_17069 = state_17011__$1;(statearr_17028_17069[2] = inst_16986);
(statearr_17028_17069[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 10))
{var inst_16953 = (state_17011[8]);var inst_16952 = (state_17011[9]);var inst_16950 = (state_17011[10]);var inst_16951 = (state_17011[11]);var inst_16958 = cljs.core._nth.call(null,inst_16951,inst_16953);var inst_16959 = cljs.core.async.muxch_STAR_.call(null,inst_16958);var inst_16960 = cljs.core.async.close_BANG_.call(null,inst_16959);var inst_16961 = (inst_16953 + 1);var tmp17023 = inst_16952;var tmp17024 = inst_16950;var tmp17025 = inst_16951;var inst_16950__$1 = tmp17024;var inst_16951__$1 = tmp17025;var inst_16952__$1 = tmp17023;var inst_16953__$1 = inst_16961;var state_17011__$1 = (function (){var statearr_17029 = state_17011;(statearr_17029[8] = inst_16953__$1);
(statearr_17029[9] = inst_16952__$1);
(statearr_17029[10] = inst_16950__$1);
(statearr_17029[11] = inst_16951__$1);
(statearr_17029[14] = inst_16960);
return statearr_17029;
})();var statearr_17030_17070 = state_17011__$1;(statearr_17030_17070[2] = null);
(statearr_17030_17070[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 11))
{var inst_16950 = (state_17011[10]);var inst_16964 = (state_17011[15]);var inst_16964__$1 = cljs.core.seq.call(null,inst_16950);var state_17011__$1 = (function (){var statearr_17031 = state_17011;(statearr_17031[15] = inst_16964__$1);
return statearr_17031;
})();if(inst_16964__$1)
{var statearr_17032_17071 = state_17011__$1;(statearr_17032_17071[1] = 13);
} else
{var statearr_17033_17072 = state_17011__$1;(statearr_17033_17072[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 12))
{var inst_16984 = (state_17011[2]);var state_17011__$1 = state_17011;var statearr_17034_17073 = state_17011__$1;(statearr_17034_17073[2] = inst_16984);
(statearr_17034_17073[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 13))
{var inst_16964 = (state_17011[15]);var inst_16966 = cljs.core.chunked_seq_QMARK_.call(null,inst_16964);var state_17011__$1 = state_17011;if(inst_16966)
{var statearr_17035_17074 = state_17011__$1;(statearr_17035_17074[1] = 16);
} else
{var statearr_17036_17075 = state_17011__$1;(statearr_17036_17075[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 14))
{var state_17011__$1 = state_17011;var statearr_17037_17076 = state_17011__$1;(statearr_17037_17076[2] = null);
(statearr_17037_17076[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 15))
{var inst_16982 = (state_17011[2]);var state_17011__$1 = state_17011;var statearr_17038_17077 = state_17011__$1;(statearr_17038_17077[2] = inst_16982);
(statearr_17038_17077[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 16))
{var inst_16964 = (state_17011[15]);var inst_16968 = cljs.core.chunk_first.call(null,inst_16964);var inst_16969 = cljs.core.chunk_rest.call(null,inst_16964);var inst_16970 = cljs.core.count.call(null,inst_16968);var inst_16950 = inst_16969;var inst_16951 = inst_16968;var inst_16952 = inst_16970;var inst_16953 = 0;var state_17011__$1 = (function (){var statearr_17039 = state_17011;(statearr_17039[8] = inst_16953);
(statearr_17039[9] = inst_16952);
(statearr_17039[10] = inst_16950);
(statearr_17039[11] = inst_16951);
return statearr_17039;
})();var statearr_17040_17078 = state_17011__$1;(statearr_17040_17078[2] = null);
(statearr_17040_17078[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 17))
{var inst_16964 = (state_17011[15]);var inst_16973 = cljs.core.first.call(null,inst_16964);var inst_16974 = cljs.core.async.muxch_STAR_.call(null,inst_16973);var inst_16975 = cljs.core.async.close_BANG_.call(null,inst_16974);var inst_16976 = cljs.core.next.call(null,inst_16964);var inst_16950 = inst_16976;var inst_16951 = null;var inst_16952 = 0;var inst_16953 = 0;var state_17011__$1 = (function (){var statearr_17041 = state_17011;(statearr_17041[8] = inst_16953);
(statearr_17041[9] = inst_16952);
(statearr_17041[10] = inst_16950);
(statearr_17041[11] = inst_16951);
(statearr_17041[16] = inst_16975);
return statearr_17041;
})();var statearr_17042_17079 = state_17011__$1;(statearr_17042_17079[2] = null);
(statearr_17042_17079[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 18))
{var inst_16979 = (state_17011[2]);var state_17011__$1 = state_17011;var statearr_17043_17080 = state_17011__$1;(statearr_17043_17080[2] = inst_16979);
(statearr_17043_17080[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 19))
{var state_17011__$1 = state_17011;var statearr_17044_17081 = state_17011__$1;(statearr_17044_17081[2] = null);
(statearr_17044_17081[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 20))
{var state_17011__$1 = state_17011;var statearr_17045_17082 = state_17011__$1;(statearr_17045_17082[2] = null);
(statearr_17045_17082[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 21))
{var inst_17004 = (state_17011[2]);var state_17011__$1 = (function (){var statearr_17046 = state_17011;(statearr_17046[17] = inst_17004);
return statearr_17046;
})();var statearr_17047_17083 = state_17011__$1;(statearr_17047_17083[2] = null);
(statearr_17047_17083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 22))
{var inst_17001 = (state_17011[2]);var state_17011__$1 = state_17011;var statearr_17048_17084 = state_17011__$1;(statearr_17048_17084[2] = inst_17001);
(statearr_17048_17084[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 23))
{var inst_16988 = (state_17011[12]);var inst_16992 = (state_17011[2]);var inst_16993 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16988);var state_17011__$1 = (function (){var statearr_17049 = state_17011;(statearr_17049[18] = inst_16992);
return statearr_17049;
})();var statearr_17050_17085 = state_17011__$1;(statearr_17050_17085[2] = inst_16993);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17011__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17012 === 24))
{var inst_16940 = (state_17011[7]);var inst_16990 = (state_17011[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17011,23,Object,null,22);var inst_16997 = cljs.core.async.muxch_STAR_.call(null,inst_16990);var state_17011__$1 = state_17011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17011__$1,25,inst_16997,inst_16940);
} else
{if((state_val_17012 === 25))
{var inst_16999 = (state_17011[2]);var state_17011__$1 = state_17011;var statearr_17051_17086 = state_17011__$1;(statearr_17051_17086[2] = inst_16999);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17011__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_17055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17055[0] = state_machine__9913__auto__);
(statearr_17055[1] = 1);
return statearr_17055;
});
var state_machine__9913__auto____1 = (function (state_17011){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_17011);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e17056){if((e17056 instanceof Object))
{var ex__9916__auto__ = e17056;var statearr_17057_17087 = state_17011;(statearr_17057_17087[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17088 = state_17011;
state_17011 = G__17088;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_17011){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_17011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_17058 = f__9928__auto__.call(null);(statearr_17058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___17059);
return statearr_17058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__9927__auto___17225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_17195){var state_val_17196 = (state_17195[1]);if((state_val_17196 === 1))
{var state_17195__$1 = state_17195;var statearr_17197_17226 = state_17195__$1;(statearr_17197_17226[2] = null);
(statearr_17197_17226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 2))
{var inst_17158 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17159 = 0;var state_17195__$1 = (function (){var statearr_17198 = state_17195;(statearr_17198[7] = inst_17159);
(statearr_17198[8] = inst_17158);
return statearr_17198;
})();var statearr_17199_17227 = state_17195__$1;(statearr_17199_17227[2] = null);
(statearr_17199_17227[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 3))
{var inst_17193 = (state_17195[2]);var state_17195__$1 = state_17195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17195__$1,inst_17193);
} else
{if((state_val_17196 === 4))
{var inst_17159 = (state_17195[7]);var inst_17161 = (inst_17159 < cnt);var state_17195__$1 = state_17195;if(cljs.core.truth_(inst_17161))
{var statearr_17200_17228 = state_17195__$1;(statearr_17200_17228[1] = 6);
} else
{var statearr_17201_17229 = state_17195__$1;(statearr_17201_17229[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 5))
{var inst_17179 = (state_17195[2]);var state_17195__$1 = (function (){var statearr_17202 = state_17195;(statearr_17202[9] = inst_17179);
return statearr_17202;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17195__$1,12,dchan);
} else
{if((state_val_17196 === 6))
{var state_17195__$1 = state_17195;var statearr_17203_17230 = state_17195__$1;(statearr_17203_17230[2] = null);
(statearr_17203_17230[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 7))
{var state_17195__$1 = state_17195;var statearr_17204_17231 = state_17195__$1;(statearr_17204_17231[2] = null);
(statearr_17204_17231[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 8))
{var inst_17177 = (state_17195[2]);var state_17195__$1 = state_17195;var statearr_17205_17232 = state_17195__$1;(statearr_17205_17232[2] = inst_17177);
(statearr_17205_17232[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 9))
{var inst_17159 = (state_17195[7]);var inst_17172 = (state_17195[2]);var inst_17173 = (inst_17159 + 1);var inst_17159__$1 = inst_17173;var state_17195__$1 = (function (){var statearr_17206 = state_17195;(statearr_17206[7] = inst_17159__$1);
(statearr_17206[10] = inst_17172);
return statearr_17206;
})();var statearr_17207_17233 = state_17195__$1;(statearr_17207_17233[2] = null);
(statearr_17207_17233[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 10))
{var inst_17163 = (state_17195[2]);var inst_17164 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17195__$1 = (function (){var statearr_17208 = state_17195;(statearr_17208[11] = inst_17163);
return statearr_17208;
})();var statearr_17209_17234 = state_17195__$1;(statearr_17209_17234[2] = inst_17164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17195__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 11))
{var inst_17159 = (state_17195[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17195,10,Object,null,9);var inst_17168 = chs__$1.call(null,inst_17159);var inst_17169 = done.call(null,inst_17159);var inst_17170 = cljs.core.async.take_BANG_.call(null,inst_17168,inst_17169);var state_17195__$1 = state_17195;var statearr_17210_17235 = state_17195__$1;(statearr_17210_17235[2] = inst_17170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17195__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 12))
{var inst_17181 = (state_17195[12]);var inst_17181__$1 = (state_17195[2]);var inst_17182 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17181__$1);var state_17195__$1 = (function (){var statearr_17211 = state_17195;(statearr_17211[12] = inst_17181__$1);
return statearr_17211;
})();if(cljs.core.truth_(inst_17182))
{var statearr_17212_17236 = state_17195__$1;(statearr_17212_17236[1] = 13);
} else
{var statearr_17213_17237 = state_17195__$1;(statearr_17213_17237[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 13))
{var inst_17184 = cljs.core.async.close_BANG_.call(null,out);var state_17195__$1 = state_17195;var statearr_17214_17238 = state_17195__$1;(statearr_17214_17238[2] = inst_17184);
(statearr_17214_17238[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 14))
{var inst_17181 = (state_17195[12]);var inst_17186 = cljs.core.apply.call(null,f,inst_17181);var state_17195__$1 = state_17195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17195__$1,16,out,inst_17186);
} else
{if((state_val_17196 === 15))
{var inst_17191 = (state_17195[2]);var state_17195__$1 = state_17195;var statearr_17215_17239 = state_17195__$1;(statearr_17215_17239[2] = inst_17191);
(statearr_17215_17239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17196 === 16))
{var inst_17188 = (state_17195[2]);var state_17195__$1 = (function (){var statearr_17216 = state_17195;(statearr_17216[13] = inst_17188);
return statearr_17216;
})();var statearr_17217_17240 = state_17195__$1;(statearr_17217_17240[2] = null);
(statearr_17217_17240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_17221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17221[0] = state_machine__9913__auto__);
(statearr_17221[1] = 1);
return statearr_17221;
});
var state_machine__9913__auto____1 = (function (state_17195){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_17195);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e17222){if((e17222 instanceof Object))
{var ex__9916__auto__ = e17222;var statearr_17223_17241 = state_17195;(statearr_17223_17241[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17242 = state_17195;
state_17195 = G__17242;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_17195){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_17195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_17224 = f__9928__auto__.call(null);(statearr_17224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___17225);
return statearr_17224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9927__auto___17350 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_17326){var state_val_17327 = (state_17326[1]);if((state_val_17327 === 1))
{var inst_17297 = cljs.core.vec.call(null,chs);var inst_17298 = inst_17297;var state_17326__$1 = (function (){var statearr_17328 = state_17326;(statearr_17328[7] = inst_17298);
return statearr_17328;
})();var statearr_17329_17351 = state_17326__$1;(statearr_17329_17351[2] = null);
(statearr_17329_17351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17327 === 2))
{var inst_17298 = (state_17326[7]);var inst_17300 = cljs.core.count.call(null,inst_17298);var inst_17301 = (inst_17300 > 0);var state_17326__$1 = state_17326;if(cljs.core.truth_(inst_17301))
{var statearr_17330_17352 = state_17326__$1;(statearr_17330_17352[1] = 4);
} else
{var statearr_17331_17353 = state_17326__$1;(statearr_17331_17353[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17327 === 3))
{var inst_17324 = (state_17326[2]);var state_17326__$1 = state_17326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17326__$1,inst_17324);
} else
{if((state_val_17327 === 4))
{var inst_17298 = (state_17326[7]);var state_17326__$1 = state_17326;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17326__$1,7,inst_17298);
} else
{if((state_val_17327 === 5))
{var inst_17320 = cljs.core.async.close_BANG_.call(null,out);var state_17326__$1 = state_17326;var statearr_17332_17354 = state_17326__$1;(statearr_17332_17354[2] = inst_17320);
(statearr_17332_17354[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17327 === 6))
{var inst_17322 = (state_17326[2]);var state_17326__$1 = state_17326;var statearr_17333_17355 = state_17326__$1;(statearr_17333_17355[2] = inst_17322);
(statearr_17333_17355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17327 === 7))
{var inst_17306 = (state_17326[8]);var inst_17305 = (state_17326[9]);var inst_17305__$1 = (state_17326[2]);var inst_17306__$1 = cljs.core.nth.call(null,inst_17305__$1,0,null);var inst_17307 = cljs.core.nth.call(null,inst_17305__$1,1,null);var inst_17308 = (inst_17306__$1 == null);var state_17326__$1 = (function (){var statearr_17334 = state_17326;(statearr_17334[10] = inst_17307);
(statearr_17334[8] = inst_17306__$1);
(statearr_17334[9] = inst_17305__$1);
return statearr_17334;
})();if(cljs.core.truth_(inst_17308))
{var statearr_17335_17356 = state_17326__$1;(statearr_17335_17356[1] = 8);
} else
{var statearr_17336_17357 = state_17326__$1;(statearr_17336_17357[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17327 === 8))
{var inst_17307 = (state_17326[10]);var inst_17306 = (state_17326[8]);var inst_17305 = (state_17326[9]);var inst_17298 = (state_17326[7]);var inst_17310 = (function (){var c = inst_17307;var v = inst_17306;var vec__17303 = inst_17305;var cs = inst_17298;return ((function (c,v,vec__17303,cs,inst_17307,inst_17306,inst_17305,inst_17298,state_val_17327){
return (function (p1__17243_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17243_SHARP_);
});
;})(c,v,vec__17303,cs,inst_17307,inst_17306,inst_17305,inst_17298,state_val_17327))
})();var inst_17311 = cljs.core.filterv.call(null,inst_17310,inst_17298);var inst_17298__$1 = inst_17311;var state_17326__$1 = (function (){var statearr_17337 = state_17326;(statearr_17337[7] = inst_17298__$1);
return statearr_17337;
})();var statearr_17338_17358 = state_17326__$1;(statearr_17338_17358[2] = null);
(statearr_17338_17358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17327 === 9))
{var inst_17306 = (state_17326[8]);var state_17326__$1 = state_17326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17326__$1,11,out,inst_17306);
} else
{if((state_val_17327 === 10))
{var inst_17318 = (state_17326[2]);var state_17326__$1 = state_17326;var statearr_17340_17359 = state_17326__$1;(statearr_17340_17359[2] = inst_17318);
(statearr_17340_17359[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17327 === 11))
{var inst_17298 = (state_17326[7]);var inst_17315 = (state_17326[2]);var tmp17339 = inst_17298;var inst_17298__$1 = tmp17339;var state_17326__$1 = (function (){var statearr_17341 = state_17326;(statearr_17341[11] = inst_17315);
(statearr_17341[7] = inst_17298__$1);
return statearr_17341;
})();var statearr_17342_17360 = state_17326__$1;(statearr_17342_17360[2] = null);
(statearr_17342_17360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_17346 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17346[0] = state_machine__9913__auto__);
(statearr_17346[1] = 1);
return statearr_17346;
});
var state_machine__9913__auto____1 = (function (state_17326){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_17326);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e17347){if((e17347 instanceof Object))
{var ex__9916__auto__ = e17347;var statearr_17348_17361 = state_17326;(statearr_17348_17361[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17362 = state_17326;
state_17326 = G__17362;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_17326){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_17326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_17349 = f__9928__auto__.call(null);(statearr_17349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___17350);
return statearr_17349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9927__auto___17455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_17432){var state_val_17433 = (state_17432[1]);if((state_val_17433 === 1))
{var inst_17409 = 0;var state_17432__$1 = (function (){var statearr_17434 = state_17432;(statearr_17434[7] = inst_17409);
return statearr_17434;
})();var statearr_17435_17456 = state_17432__$1;(statearr_17435_17456[2] = null);
(statearr_17435_17456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 2))
{var inst_17409 = (state_17432[7]);var inst_17411 = (inst_17409 < n);var state_17432__$1 = state_17432;if(cljs.core.truth_(inst_17411))
{var statearr_17436_17457 = state_17432__$1;(statearr_17436_17457[1] = 4);
} else
{var statearr_17437_17458 = state_17432__$1;(statearr_17437_17458[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 3))
{var inst_17429 = (state_17432[2]);var inst_17430 = cljs.core.async.close_BANG_.call(null,out);var state_17432__$1 = (function (){var statearr_17438 = state_17432;(statearr_17438[8] = inst_17429);
return statearr_17438;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17432__$1,inst_17430);
} else
{if((state_val_17433 === 4))
{var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17432__$1,7,ch);
} else
{if((state_val_17433 === 5))
{var state_17432__$1 = state_17432;var statearr_17439_17459 = state_17432__$1;(statearr_17439_17459[2] = null);
(statearr_17439_17459[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 6))
{var inst_17427 = (state_17432[2]);var state_17432__$1 = state_17432;var statearr_17440_17460 = state_17432__$1;(statearr_17440_17460[2] = inst_17427);
(statearr_17440_17460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 7))
{var inst_17414 = (state_17432[9]);var inst_17414__$1 = (state_17432[2]);var inst_17415 = (inst_17414__$1 == null);var inst_17416 = cljs.core.not.call(null,inst_17415);var state_17432__$1 = (function (){var statearr_17441 = state_17432;(statearr_17441[9] = inst_17414__$1);
return statearr_17441;
})();if(inst_17416)
{var statearr_17442_17461 = state_17432__$1;(statearr_17442_17461[1] = 8);
} else
{var statearr_17443_17462 = state_17432__$1;(statearr_17443_17462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 8))
{var inst_17414 = (state_17432[9]);var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17432__$1,11,out,inst_17414);
} else
{if((state_val_17433 === 9))
{var state_17432__$1 = state_17432;var statearr_17444_17463 = state_17432__$1;(statearr_17444_17463[2] = null);
(statearr_17444_17463[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 10))
{var inst_17424 = (state_17432[2]);var state_17432__$1 = state_17432;var statearr_17445_17464 = state_17432__$1;(statearr_17445_17464[2] = inst_17424);
(statearr_17445_17464[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 11))
{var inst_17409 = (state_17432[7]);var inst_17419 = (state_17432[2]);var inst_17420 = (inst_17409 + 1);var inst_17409__$1 = inst_17420;var state_17432__$1 = (function (){var statearr_17446 = state_17432;(statearr_17446[10] = inst_17419);
(statearr_17446[7] = inst_17409__$1);
return statearr_17446;
})();var statearr_17447_17465 = state_17432__$1;(statearr_17447_17465[2] = null);
(statearr_17447_17465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_17451 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17451[0] = state_machine__9913__auto__);
(statearr_17451[1] = 1);
return statearr_17451;
});
var state_machine__9913__auto____1 = (function (state_17432){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_17432);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e17452){if((e17452 instanceof Object))
{var ex__9916__auto__ = e17452;var statearr_17453_17466 = state_17432;(statearr_17453_17466[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17467 = state_17432;
state_17432 = G__17467;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_17432){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_17432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_17454 = f__9928__auto__.call(null);(statearr_17454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___17455);
return statearr_17454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9927__auto___17564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_17539){var state_val_17540 = (state_17539[1]);if((state_val_17540 === 1))
{var inst_17516 = null;var state_17539__$1 = (function (){var statearr_17541 = state_17539;(statearr_17541[7] = inst_17516);
return statearr_17541;
})();var statearr_17542_17565 = state_17539__$1;(statearr_17542_17565[2] = null);
(statearr_17542_17565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17540 === 2))
{var state_17539__$1 = state_17539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17539__$1,4,ch);
} else
{if((state_val_17540 === 3))
{var inst_17536 = (state_17539[2]);var inst_17537 = cljs.core.async.close_BANG_.call(null,out);var state_17539__$1 = (function (){var statearr_17543 = state_17539;(statearr_17543[8] = inst_17536);
return statearr_17543;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17539__$1,inst_17537);
} else
{if((state_val_17540 === 4))
{var inst_17519 = (state_17539[9]);var inst_17519__$1 = (state_17539[2]);var inst_17520 = (inst_17519__$1 == null);var inst_17521 = cljs.core.not.call(null,inst_17520);var state_17539__$1 = (function (){var statearr_17544 = state_17539;(statearr_17544[9] = inst_17519__$1);
return statearr_17544;
})();if(inst_17521)
{var statearr_17545_17566 = state_17539__$1;(statearr_17545_17566[1] = 5);
} else
{var statearr_17546_17567 = state_17539__$1;(statearr_17546_17567[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17540 === 5))
{var inst_17519 = (state_17539[9]);var inst_17516 = (state_17539[7]);var inst_17523 = cljs.core._EQ_.call(null,inst_17519,inst_17516);var state_17539__$1 = state_17539;if(inst_17523)
{var statearr_17547_17568 = state_17539__$1;(statearr_17547_17568[1] = 8);
} else
{var statearr_17548_17569 = state_17539__$1;(statearr_17548_17569[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17540 === 6))
{var state_17539__$1 = state_17539;var statearr_17550_17570 = state_17539__$1;(statearr_17550_17570[2] = null);
(statearr_17550_17570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17540 === 7))
{var inst_17534 = (state_17539[2]);var state_17539__$1 = state_17539;var statearr_17551_17571 = state_17539__$1;(statearr_17551_17571[2] = inst_17534);
(statearr_17551_17571[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17540 === 8))
{var inst_17516 = (state_17539[7]);var tmp17549 = inst_17516;var inst_17516__$1 = tmp17549;var state_17539__$1 = (function (){var statearr_17552 = state_17539;(statearr_17552[7] = inst_17516__$1);
return statearr_17552;
})();var statearr_17553_17572 = state_17539__$1;(statearr_17553_17572[2] = null);
(statearr_17553_17572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17540 === 9))
{var inst_17519 = (state_17539[9]);var state_17539__$1 = state_17539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17539__$1,11,out,inst_17519);
} else
{if((state_val_17540 === 10))
{var inst_17531 = (state_17539[2]);var state_17539__$1 = state_17539;var statearr_17554_17573 = state_17539__$1;(statearr_17554_17573[2] = inst_17531);
(statearr_17554_17573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17540 === 11))
{var inst_17519 = (state_17539[9]);var inst_17528 = (state_17539[2]);var inst_17516 = inst_17519;var state_17539__$1 = (function (){var statearr_17555 = state_17539;(statearr_17555[7] = inst_17516);
(statearr_17555[10] = inst_17528);
return statearr_17555;
})();var statearr_17556_17574 = state_17539__$1;(statearr_17556_17574[2] = null);
(statearr_17556_17574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_17560 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17560[0] = state_machine__9913__auto__);
(statearr_17560[1] = 1);
return statearr_17560;
});
var state_machine__9913__auto____1 = (function (state_17539){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_17539);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e17561){if((e17561 instanceof Object))
{var ex__9916__auto__ = e17561;var statearr_17562_17575 = state_17539;(statearr_17562_17575[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17576 = state_17539;
state_17539 = G__17576;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_17539){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_17539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_17563 = f__9928__auto__.call(null);(statearr_17563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___17564);
return statearr_17563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9927__auto___17711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_17681){var state_val_17682 = (state_17681[1]);if((state_val_17682 === 1))
{var inst_17644 = (new Array(n));var inst_17645 = inst_17644;var inst_17646 = 0;var state_17681__$1 = (function (){var statearr_17683 = state_17681;(statearr_17683[7] = inst_17646);
(statearr_17683[8] = inst_17645);
return statearr_17683;
})();var statearr_17684_17712 = state_17681__$1;(statearr_17684_17712[2] = null);
(statearr_17684_17712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 2))
{var state_17681__$1 = state_17681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17681__$1,4,ch);
} else
{if((state_val_17682 === 3))
{var inst_17679 = (state_17681[2]);var state_17681__$1 = state_17681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17681__$1,inst_17679);
} else
{if((state_val_17682 === 4))
{var inst_17649 = (state_17681[9]);var inst_17649__$1 = (state_17681[2]);var inst_17650 = (inst_17649__$1 == null);var inst_17651 = cljs.core.not.call(null,inst_17650);var state_17681__$1 = (function (){var statearr_17685 = state_17681;(statearr_17685[9] = inst_17649__$1);
return statearr_17685;
})();if(inst_17651)
{var statearr_17686_17713 = state_17681__$1;(statearr_17686_17713[1] = 5);
} else
{var statearr_17687_17714 = state_17681__$1;(statearr_17687_17714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 5))
{var inst_17646 = (state_17681[7]);var inst_17645 = (state_17681[8]);var inst_17654 = (state_17681[10]);var inst_17649 = (state_17681[9]);var inst_17653 = (inst_17645[inst_17646] = inst_17649);var inst_17654__$1 = (inst_17646 + 1);var inst_17655 = (inst_17654__$1 < n);var state_17681__$1 = (function (){var statearr_17688 = state_17681;(statearr_17688[10] = inst_17654__$1);
(statearr_17688[11] = inst_17653);
return statearr_17688;
})();if(cljs.core.truth_(inst_17655))
{var statearr_17689_17715 = state_17681__$1;(statearr_17689_17715[1] = 8);
} else
{var statearr_17690_17716 = state_17681__$1;(statearr_17690_17716[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 6))
{var inst_17646 = (state_17681[7]);var inst_17667 = (inst_17646 > 0);var state_17681__$1 = state_17681;if(cljs.core.truth_(inst_17667))
{var statearr_17692_17717 = state_17681__$1;(statearr_17692_17717[1] = 12);
} else
{var statearr_17693_17718 = state_17681__$1;(statearr_17693_17718[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 7))
{var inst_17677 = (state_17681[2]);var state_17681__$1 = state_17681;var statearr_17694_17719 = state_17681__$1;(statearr_17694_17719[2] = inst_17677);
(statearr_17694_17719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 8))
{var inst_17645 = (state_17681[8]);var inst_17654 = (state_17681[10]);var tmp17691 = inst_17645;var inst_17645__$1 = tmp17691;var inst_17646 = inst_17654;var state_17681__$1 = (function (){var statearr_17695 = state_17681;(statearr_17695[7] = inst_17646);
(statearr_17695[8] = inst_17645__$1);
return statearr_17695;
})();var statearr_17696_17720 = state_17681__$1;(statearr_17696_17720[2] = null);
(statearr_17696_17720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 9))
{var inst_17645 = (state_17681[8]);var inst_17659 = cljs.core.vec.call(null,inst_17645);var state_17681__$1 = state_17681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17681__$1,11,out,inst_17659);
} else
{if((state_val_17682 === 10))
{var inst_17665 = (state_17681[2]);var state_17681__$1 = state_17681;var statearr_17697_17721 = state_17681__$1;(statearr_17697_17721[2] = inst_17665);
(statearr_17697_17721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 11))
{var inst_17661 = (state_17681[2]);var inst_17662 = (new Array(n));var inst_17645 = inst_17662;var inst_17646 = 0;var state_17681__$1 = (function (){var statearr_17698 = state_17681;(statearr_17698[7] = inst_17646);
(statearr_17698[8] = inst_17645);
(statearr_17698[12] = inst_17661);
return statearr_17698;
})();var statearr_17699_17722 = state_17681__$1;(statearr_17699_17722[2] = null);
(statearr_17699_17722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 12))
{var inst_17645 = (state_17681[8]);var inst_17669 = cljs.core.vec.call(null,inst_17645);var state_17681__$1 = state_17681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17681__$1,15,out,inst_17669);
} else
{if((state_val_17682 === 13))
{var state_17681__$1 = state_17681;var statearr_17700_17723 = state_17681__$1;(statearr_17700_17723[2] = null);
(statearr_17700_17723[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 14))
{var inst_17674 = (state_17681[2]);var inst_17675 = cljs.core.async.close_BANG_.call(null,out);var state_17681__$1 = (function (){var statearr_17701 = state_17681;(statearr_17701[13] = inst_17674);
return statearr_17701;
})();var statearr_17702_17724 = state_17681__$1;(statearr_17702_17724[2] = inst_17675);
(statearr_17702_17724[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17682 === 15))
{var inst_17671 = (state_17681[2]);var state_17681__$1 = state_17681;var statearr_17703_17725 = state_17681__$1;(statearr_17703_17725[2] = inst_17671);
(statearr_17703_17725[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_17707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17707[0] = state_machine__9913__auto__);
(statearr_17707[1] = 1);
return statearr_17707;
});
var state_machine__9913__auto____1 = (function (state_17681){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_17681);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e17708){if((e17708 instanceof Object))
{var ex__9916__auto__ = e17708;var statearr_17709_17726 = state_17681;(statearr_17709_17726[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17727 = state_17681;
state_17681 = G__17727;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_17681){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_17681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_17710 = f__9928__auto__.call(null);(statearr_17710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___17711);
return statearr_17710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9927__auto___17870 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9928__auto__ = (function (){var switch__9912__auto__ = (function (state_17840){var state_val_17841 = (state_17840[1]);if((state_val_17841 === 1))
{var inst_17799 = [];var inst_17800 = inst_17799;var inst_17801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17840__$1 = (function (){var statearr_17842 = state_17840;(statearr_17842[7] = inst_17801);
(statearr_17842[8] = inst_17800);
return statearr_17842;
})();var statearr_17843_17871 = state_17840__$1;(statearr_17843_17871[2] = null);
(statearr_17843_17871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 2))
{var state_17840__$1 = state_17840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17840__$1,4,ch);
} else
{if((state_val_17841 === 3))
{var inst_17838 = (state_17840[2]);var state_17840__$1 = state_17840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17840__$1,inst_17838);
} else
{if((state_val_17841 === 4))
{var inst_17804 = (state_17840[9]);var inst_17804__$1 = (state_17840[2]);var inst_17805 = (inst_17804__$1 == null);var inst_17806 = cljs.core.not.call(null,inst_17805);var state_17840__$1 = (function (){var statearr_17844 = state_17840;(statearr_17844[9] = inst_17804__$1);
return statearr_17844;
})();if(inst_17806)
{var statearr_17845_17872 = state_17840__$1;(statearr_17845_17872[1] = 5);
} else
{var statearr_17846_17873 = state_17840__$1;(statearr_17846_17873[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 5))
{var inst_17808 = (state_17840[10]);var inst_17801 = (state_17840[7]);var inst_17804 = (state_17840[9]);var inst_17808__$1 = f.call(null,inst_17804);var inst_17809 = cljs.core._EQ_.call(null,inst_17808__$1,inst_17801);var inst_17810 = cljs.core.keyword_identical_QMARK_.call(null,inst_17801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17811 = (inst_17809) || (inst_17810);var state_17840__$1 = (function (){var statearr_17847 = state_17840;(statearr_17847[10] = inst_17808__$1);
return statearr_17847;
})();if(cljs.core.truth_(inst_17811))
{var statearr_17848_17874 = state_17840__$1;(statearr_17848_17874[1] = 8);
} else
{var statearr_17849_17875 = state_17840__$1;(statearr_17849_17875[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 6))
{var inst_17800 = (state_17840[8]);var inst_17825 = inst_17800.length;var inst_17826 = (inst_17825 > 0);var state_17840__$1 = state_17840;if(cljs.core.truth_(inst_17826))
{var statearr_17851_17876 = state_17840__$1;(statearr_17851_17876[1] = 12);
} else
{var statearr_17852_17877 = state_17840__$1;(statearr_17852_17877[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 7))
{var inst_17836 = (state_17840[2]);var state_17840__$1 = state_17840;var statearr_17853_17878 = state_17840__$1;(statearr_17853_17878[2] = inst_17836);
(statearr_17853_17878[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 8))
{var inst_17808 = (state_17840[10]);var inst_17800 = (state_17840[8]);var inst_17804 = (state_17840[9]);var inst_17813 = inst_17800.push(inst_17804);var tmp17850 = inst_17800;var inst_17800__$1 = tmp17850;var inst_17801 = inst_17808;var state_17840__$1 = (function (){var statearr_17854 = state_17840;(statearr_17854[7] = inst_17801);
(statearr_17854[8] = inst_17800__$1);
(statearr_17854[11] = inst_17813);
return statearr_17854;
})();var statearr_17855_17879 = state_17840__$1;(statearr_17855_17879[2] = null);
(statearr_17855_17879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 9))
{var inst_17800 = (state_17840[8]);var inst_17816 = cljs.core.vec.call(null,inst_17800);var state_17840__$1 = state_17840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17840__$1,11,out,inst_17816);
} else
{if((state_val_17841 === 10))
{var inst_17823 = (state_17840[2]);var state_17840__$1 = state_17840;var statearr_17856_17880 = state_17840__$1;(statearr_17856_17880[2] = inst_17823);
(statearr_17856_17880[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 11))
{var inst_17808 = (state_17840[10]);var inst_17804 = (state_17840[9]);var inst_17818 = (state_17840[2]);var inst_17819 = [];var inst_17820 = inst_17819.push(inst_17804);var inst_17800 = inst_17819;var inst_17801 = inst_17808;var state_17840__$1 = (function (){var statearr_17857 = state_17840;(statearr_17857[7] = inst_17801);
(statearr_17857[8] = inst_17800);
(statearr_17857[12] = inst_17818);
(statearr_17857[13] = inst_17820);
return statearr_17857;
})();var statearr_17858_17881 = state_17840__$1;(statearr_17858_17881[2] = null);
(statearr_17858_17881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 12))
{var inst_17800 = (state_17840[8]);var inst_17828 = cljs.core.vec.call(null,inst_17800);var state_17840__$1 = state_17840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17840__$1,15,out,inst_17828);
} else
{if((state_val_17841 === 13))
{var state_17840__$1 = state_17840;var statearr_17859_17882 = state_17840__$1;(statearr_17859_17882[2] = null);
(statearr_17859_17882[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 14))
{var inst_17833 = (state_17840[2]);var inst_17834 = cljs.core.async.close_BANG_.call(null,out);var state_17840__$1 = (function (){var statearr_17860 = state_17840;(statearr_17860[14] = inst_17833);
return statearr_17860;
})();var statearr_17861_17883 = state_17840__$1;(statearr_17861_17883[2] = inst_17834);
(statearr_17861_17883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17841 === 15))
{var inst_17830 = (state_17840[2]);var state_17840__$1 = state_17840;var statearr_17862_17884 = state_17840__$1;(statearr_17862_17884[2] = inst_17830);
(statearr_17862_17884[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9912__auto__){
return (function() {
var state_machine__9913__auto__ = null;
var state_machine__9913__auto____0 = (function (){var statearr_17866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17866[0] = state_machine__9913__auto__);
(statearr_17866[1] = 1);
return statearr_17866;
});
var state_machine__9913__auto____1 = (function (state_17840){while(true){
var ret_value__9914__auto__ = (function (){try{while(true){
var result__9915__auto__ = switch__9912__auto__.call(null,state_17840);if(cljs.core.keyword_identical_QMARK_.call(null,result__9915__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9915__auto__;
}
break;
}
}catch (e17867){if((e17867 instanceof Object))
{var ex__9916__auto__ = e17867;var statearr_17868_17885 = state_17840;(statearr_17868_17885[5] = ex__9916__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9914__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17886 = state_17840;
state_17840 = G__17886;
continue;
}
} else
{return ret_value__9914__auto__;
}
break;
}
});
state_machine__9913__auto__ = function(state_17840){
switch(arguments.length){
case 0:
return state_machine__9913__auto____0.call(this);
case 1:
return state_machine__9913__auto____1.call(this,state_17840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9913__auto____0;
state_machine__9913__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9913__auto____1;
return state_machine__9913__auto__;
})()
;})(switch__9912__auto__))
})();var state__9929__auto__ = (function (){var statearr_17869 = f__9928__auto__.call(null);(statearr_17869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9927__auto___17870);
return statearr_17869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9929__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map