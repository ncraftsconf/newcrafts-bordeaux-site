+++
name = "Meetings With Remarkable Trees"
type = "microphone"
schedule = "14:25 - 15:15"
speakers = ["Bodil Stokke"]
+++
Everybody knows the classic cons list. Clojure brag about their bitmapped vector tries. Haskell weenies took it up a notch with their impossible finger trees. Rustaceans turned back the clock and gave us simple arrays again.

All of these have shortcomings. Hickey tries are magically indexable but the only other thing you can do to them is add things to the end. Finger trees are absurdly flexible but you can't index them efficiently. And so the search goes on...

And today, you're going to learn about the ultimate list data structure: the RRB tree ("relaxed radix balanced tree") is an improved version of the tried and tested Hickey trie, which has achieved the impossible: /every/ basic operation is efficient - push and pop on either end, index lookup, split and join. RRB trees pull no punches.

Watch as Bodil shows you diagrams with brightly coloured boxes in an enthusiastic effort to explain why data structures are amazingly exciting.