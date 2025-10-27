---
# try also 'default' to start simple
# theme: seriph
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Twinkle AI 熬夜書坊 - Build LLM From Scratch ch2
info: |
  Twinkle AI 熬夜書坊 - 從頭打造 LLM 實戰秘笈
  Twinkle AI Study Group - Build LLM From Scratch ch2
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---


<h1 class="flex flex-col">
  <div class="text-2xl transition duration-500" :class="$clicks <= 2 ? 'scale-150 absolute-center' : 'op50'">
    <span v-click>Twinkle AI 之 </span>
    <span :class="$clicks <= 2 ? 'text-4xl' : ''"> 熬夜書坊 </span>
    <sup v-click>2/n</sup>
  </div>
  <div mt-1 v-click>Build a LLM from scratch</div>
</h1>

---
transition: fade-out
layout: full
---

# 幾個問題

<br>

<div flex="~ col gap-24">

  <div flex="~ gap-2 items-center">
    <div flex="~ gap-2 items-center" v-click>
      <div i-ph:book-open-text-duotone text-4xl />
      <span font-bold text-4xl>要怎麼讓模型「看懂」文字？</span>
    </div>
  </div>
    <!-- <span v-click op75 ml4>Put them in <code>components/</code> and use anywhere</span> -->

  <div flex="~ gap-2 items-center">
    <div flex="~ gap-2 items-center" v-click>
      <div i-ph:tree-structure-duotone text-4xl />
      <span font-bold text-4xl>要怎麼讓模型「學會語言的結構」？</span>
    </div>
  </div>


  <div flex="~ gap-2 items-center">
    <div flex="~ gap-2 items-center" v-click>
      <div i-ph:list-numbers-duotone text-4xl />
      <span font-bold text-4xl>要怎麼讓模型「知道順序」？</span>
    </div>
  </div>
</div>


<!--
https://raw.githubusercontent.com/antfu/talks/refs/heads/main/2024-02-29/src/slides.md
-->

<style>
h1 {
  background-color:rgb(182, 145, 43);
  background-image: linear-gradient(45deg,rgb(203, 212, 78) 10%,rgb(140, 102, 20) 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
transition: fade-out
layout: full
---

# 要怎麼讓模型「看懂」文字？

## 表示/表示法 Representaion

人類如何表示 語言/圖像/聲音

機器如何表示 資料 (Data)
=> 轉換成 數字


---
transition: fade-out
layout: full
---

# 將文字資料轉換數字/向量

1. 詞元切分 (Tokenization)
2. 編碼/解碼 (Encode/Decode) 
3. 嵌入 (Embedding)


---
transition: fade-out
layout: full
---

# 詞元切分 (Tokenization)

將原始文本分解為較小的處理單元，稱為詞元 (tokens)

依照空白做切分

``` python
with open("the-verdict.txt", "r", encoding="utf-8") as f:
    raw_text = f.read()

preprocessed = re.split(r'([,.:;?_!"()\']|--|\s)', raw_text)
preprocessed = [item.strip() for item in preprocessed if item.strip()]
print(len(reprocessed))
print(preprocessed[:30])
```

<br>

``` log
4690
['I', 'HAD', 'always', 'thought', 'Jack', 'Gisburn', 'rather', 'a', 'cheap', 'genius', '--', 'though', 'a', 'good',
'fellow', 'enough', '--', 'so', 'it', 'was', 'no', 'great', 'surprise', 'to', 'me', 'to', 'hear', 'that', ',', 'in']
```

---
transition: fade-out
layout: full
---

# 編碼/解碼 (Encode/Decode) 

透過建立一個 **詞彙表 (Vocabulary)** 來實現 詞元 (Token) 到 整數 (Token ID) 的映射關係


``` python
class SimpleTokenizerV1:
    def __init__(self, vocab):
        self.str_to_int = vocab  # 詞彙表 (Vocabulary)
        self.int_to_str = {i:s for s,i in vocab.items()}  # 詞彙表 (Vocabulary)

    def encode(self, text):  # 編碼 ； Token == encode => Token ID
        preprocessed = re.split(r'([,.:;?_!"()\']|--|\s)', text)
        preprocessed = [
            item.strip() for item in preprocessed if item.strip()
        ]
        ids = [self.str_to_int[s] for s in preprocessed]
        return ids

    def decode(self, ids):  # 解碼 ; Token ID == decode => Token
        text = " ".join([self.int_to_str[i] for i in ids])
        text = re.sub(r'\s+([,.?!"()\'])', r'\1', text)
        return text
```

這樣就完成了 嗎!?


---
transition: fade-out
layout: full
---

# Tokenizer

`SimpleTokenizer` is too simple ...


> Tokenization is my least favorite part of working with large language models
>
> but unfortunately it is necessary to understand in some detail ...
> 
> -- **Andrej Karpathy [Let's build the GPT Tokenizer](https://youtu.be/zduSFxRajkE?list=TLGGSLuehg7u_WcyNjEwMjAyNQ)**

