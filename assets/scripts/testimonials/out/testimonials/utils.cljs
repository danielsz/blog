(ns testimonials.utils)

(defn indexOf [item coll]
  (first (keep-indexed #(if (= item %2) %1) coll)))
