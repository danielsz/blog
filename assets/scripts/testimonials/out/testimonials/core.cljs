(ns testimonials.core
    (:require 
     [testimonials.state :refer [testimonials]]
     [clojure.browser.repl]
     [cljs.core.async :as a :refer [<! >! put! take! chan]]
     [om.core :as om :include-macros true]
     [sablono.core :as html :refer-macros [html]]
     [dommy.core :as dom])
    (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                     [dommy.macros :refer [sel sel1 node deftemplate]]))

(enable-console-print!)

(def app-state (atom {:testimonials (shuffle testimonials)}))

(defn transition [state]
  (om/transact! state :testimonials #(if (seq (pop %)) (pop %) (shuffle testimonials))))

(defn testimonial [state]
  (peek (:testimonials state)))

(defn widget [data owner]
  (reify
    om/IInitState
    (init-state [_]
      )
    om/IRender
    (render [this]
      (html [:div {:class "media"}
             [:a {:class "pull-left" :href "#"}
              [:img {:class "media-object avatar" 
                     :alt "Avatar" 
                     :style #js {:width "75px" :height "75px"}
                     :src (:avatar (testimonial data))}]]
             [:div {:class "media-body"}
              [:h4 {:class "media-heading"}
               [:a {:href (str "http://www.etsy.com/shop/" (:shop_name (testimonial data))) 
                    :class "shop" 
                    :target "_blank"} 
                (:shop_name (testimonial data))]]
              [:blockquote 
               [:p {:class "text-info quote"} 
                (:quote (testimonial data))]
               [:small 
                [:cite {:title "Source title" 
                        :class "shop_owner"} 
                 (:shop_owner (testimonial data))]]]]]))
    om/IWillMount
    (will-mount [this]
      )
    om/IDidMount
    (did-mount [this node]
      (js/setInterval transition 5000 data)
      )
    om/IWillUpdate
    (will-update [_ next-props next-state]
      )
    om/IDidUpdate
    (did-update [this prev-props prev-state root-node]      
      )))

(om/root 
 widget
 app-state
 {:target (sel1 :#testimonials)})







