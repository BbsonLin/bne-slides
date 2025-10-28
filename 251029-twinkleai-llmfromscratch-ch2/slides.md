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
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---


<h1 flex="~ col">
  <div flex text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
    <div flex="~ gap-2" duration-500 v-click>
      <img src="https://cdn.discordapp.com/emojis/1377096605815013516.webp" alt="Twinkle AI" w-8 />
      Twinkle AI 之
    </div>
    <div duration-500 :class="$clicks <= 0 ? 'text-4xl ml-10' : ''">熬夜書坊 </div>
    <sup v-click>2/n</sup>
  </div>
  <div mt-1 v-click>Build a LLM from scratch</div>
  <div mt-8 flex="~ gap-2" transition duration-500 v-click>
    <img src="https://cdn.discordapp.com/avatars/410799622756499456/b0c14ec402d31695d719203b6ebba71b.webp" rounded-full w-15 h-15  />
    <div text-2xl >導讀人<br>Bobson Lin</div>
  </div>
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
      <div i-ph:book-open-text-duotone text-3xl />
      <span font-bold text-3xl>要怎麼讓模型「看懂」文字？</span>
    </div>
  </div>
    <!-- <span v-click op75 ml4>Put them in <code>components/</code> and use anywhere</span> -->

  <div flex="~ gap-2 items-center">
    <div flex="~ gap-2 items-center" v-click>
      <div i-ph:tree-structure-duotone text-3xl />
      <span font-bold text-3xl>要怎麼讓模型「學會語言的結構」？</span>
    </div>
  </div>


  <div flex="~ gap-2 items-center">
    <div flex="~ gap-2 items-center" v-click>
      <div i-ph:list-numbers-duotone text-3xl />
      <span font-bold text-3xl>要怎麼讓模型「知道順序」？</span>
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

<h1 font-bold flex="~ gap-2"> <div i-ph:book-open-text-duotone></div> <span v-mark="{at:1, color:'#ffd500', strokeWidth:3}">要怎麼讓模型「看懂」文字？</span> </h1>

## 表示/表示法 Representaion

人類如何表示 語言/圖像/聲音

機器如何表示 資料 (Data)
=> 轉換成 數字

## 將文字資料轉換數字/向量

1. 詞元切分 (Tokenization)
2. 編碼/解碼 (Encode/Decode) 
3. 嵌入 (Embedding)


---
transition: fade-out
layout: full
---

# 詞元切分 (Tokenization)

<div text-xl> 將原始文本分解為較小的處理單元，稱為詞元 (tokens)</div>

將文本([The Verdict](https://en.wikisource.org/wiki/The_Verdict))依照空白做切分


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

<div text-xl mb-2> 透過建立一個 <span font-bold> 詞彙表 (Vocabulary)</span> 來實現 詞元 (Token) 到 整數 (Token ID) 的映射關係 </div>

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

<div text-xl my-2>這樣就完成了 <span>嗎!?</span></div>

<div text-xl> SimpleTokenizer is way too simple ... </div>


---
transition: fade-out
layout: full
---

<h1> Tokenizer (分詞器) </h1>

> Tokenization is my least favorite part of working with large language models but unfortunately it is necessary to understand in some detail ...   標記化是我在使用大型語言模型時最不喜歡的部分，但不幸的是，有必要詳細了解它  ...  
> -- From **Andrej Karpathy [Let's build the GPT Tokenizer](https://youtu.be/zduSFxRajkE?list=TLGGSLuehg7u_WcyNjEwMjAyNQ)**

分詞方法:

* Word-based (eg. SimpleTokenizer)
  * Pros: 直觀好理解
  * Cons: 詞彙庫龐大、有大量未知詞彙 ([UNK]) (aka. OOV問題)、無法處理詞形變化 (eg. dog dogs) ...
* Character-based
  * Pros: 詞彙庫極小、沒有未知詞彙
  * Cons: 語義意義降低、序列過長
* Subword-based (eg. Byte-level BPE (用於 GPT-2), WordPiece (用於 BERT))
  * Pros:
  * Cons:


---
transition: fade-out
layout: full
---

# BPE 演算法 & 實作 (補充)



---
transition: fade-out
layout: full
---

# 使用 tiktoken

``` python
import tiktoken

tokenizer = tiktoken.get_encoding("gpt2")

text = (
    "Hello, do you like tea? <|endoftext|> In the sunlit terraces"
     "of someunknownPlace."
)

encoded_list = tokenizer.encode(text, allowed_special={"<|endoftext|>"})

print(encoded_list)

decoded_string = tokenizer.decode(encoded_list)

print(decoded_string)
```
<br>

``` log
[15496, 11, 466, 345, 588, 8887, 30, 220, 50256, 554, 262, 4252, 18250, 8812, 2114, 1659, 617, 34680, 27271, 13]
Hello, do you like tea? <|endoftext|> In the sunlit terracesof someunknownPlace.
```


---
transition: fade-out
layout: full
---

# Tiktokenizer

https://tiktokenizer.vercel.app/?model=gpt2

![](./images/Tiktokenizer-GPT2.png)

<!-- 
Build a LLM From Scratch
從頭打造 LLM 實戰秘笈

127 + 667 = 804
1275 + 6673 = 8041

for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

GPT2 的 Tokenizer 也存在些問題：
非英文
數學
程式碼
 -->


---
transition: fade-out
layout: full
---

<h1 font-bold flex="~ gap-2"> <div i-ph:tree-structure-duotone></div> <span v-mark="{at:1, color:'#ffd500', strokeWidth:3}">要怎麼讓模型「學會語言的結構」？</span> </h1>

## 嵌入 Embedding

離散物件 => 映射 => 向量空間

## 詞嵌入 (Word Embeddings)

文字(分詞後) => (詞)嵌入 (Word) Embedding => (嵌入)向量 (Eembedding Vector)

  
---
transition: fade-out
layout: two-cols
---


# 詞嵌入的小歷史

BoW (Bag of Words) / TF-IDF


Word2Vec / GloVe / FastText


ELMo / BERT / GPT


::right::


> Word2Vec: 透過轉換成向量空間能更好的捕捉詞彙之間的 **語義關係** 和 **相似性** 

![](./images/Word%20Vectors%203D%20from%20DLI.jpg)

https://lamyiowce.github.io/word2viz/


---
transition: fade-out
layout: two-cols
---


# 創建詞元嵌入層 (Token Embedding Layer)




::right::


``` python
import torch

vocab_size = 6
output_dim = 3

torch.manual_seed(123)
token_embedding_layer = torch.nn.Embedding(vocab_size, output_dim)
print(token_embedding_layer.weight)

inputs = torch.tensor([2, 3, 5, 1])
token_embeddings = token_embedding_layer(inputs)
print(token_embeddings)
```

``` log
Parameter containing:
tensor([[ 0.3374, -0.1778, -0.1690],
        [ 0.9178,  1.5810,  1.3010],
        [ 1.2753, -0.2010, -0.1606],
        [-0.4015,  0.9666, -1.1481],
        [-1.1589,  0.3255, -0.6315],
        [-2.8400, -0.7849, -1.4096]], requires_grad=True)

tensor([[ 1.2753, -0.2010, -0.1606],
        [-0.4015,  0.9666, -1.1481],
        [-2.8400, -0.7849, -1.4096],
        [ 0.9178,  1.5810,  1.3010]], grad_fn=<EmbeddingBackward0>)
```


---
transition: fade-out
layout: full
---

<h1 font-bold flex="~ gap-2"> <div i-ph:list-numbers-duotone></div> <span v-mark="{at:1, color:'#ffd500', strokeWidth:3}">要怎麼讓模型「知道順序」？</span> </h1>


<div flex="~ gap-2" class="mt-12" text-3xl v-click>
  <div >我打你</div> <div i-ph:equals-bold v-mark="{type: 'crossed-off'}"></div> <div >你打我</div>
</div>

<br>

<v-clicks>

模型無法感知詞元在序列中的 **絕對位置** 或 **相對位置**

$Input\ Embedding=Token\ Embedding+Positional\ Embedding$

OpenAI GPT 用的是 **絕對位置** 嵌入

</v-clicks>


<style>
.slidev-vclick-target {
  transition: all 500ms ease;
}

</style>


<!-- 
詞元嵌入向量送入模型之前，會額外添加位置資訊

* 機制： 額外訓練一個位置嵌入層（Position Embedding Layer），該層根據詞元在序列中的索引（例如 0, 1, 2, ...）產生一個對應的向量。
* 結合方式： 這個位置向量會直接與詞嵌入向量相加，生成最終的輸入嵌入。
  Input Embedding=Token Embedding+Positional Embedding
* 效果： 即使同一個詞元（擁有相同的 Token Embedding）出現在序列的不同位置，由於它們的位置編碼不同，最終輸入到 Transformer 的向量也會不同。
-->

---
transition: fade-out
layout: full
---

# 將絕對位置嵌入


``` python
import torch

...

token_embeddings = token_embedding_layer(inputs)
print(token_embeddings.shape)

# uncomment & execute the following line to see how the embeddings look like
print(token_embeddings)

context_length = max_length
pos_embedding_layer = torch.nn.Embedding(context_length, output_dim)

# uncomment & execute the following line to see how the embedding layer weights look like
print(pos_embedding_layer.weight)

input_embeddings = token_embeddings + pos_embeddings
print(input_embeddings.shape)

# uncomment & execute the following line to see how the embeddings look like
print(input_embeddings)
```


---
transition: fade-out
layout: full
---

# Take Away

<br>

<div flex="~ col gap-24">

  <div flex="~ gap-2 items-center">
    <div flex="~ gap-2 items-center" v-click>
      <div i-ph:book-open-text-duotone text-3xl />
      <span font-bold text-3xl>要怎麼讓模型「看懂」文字？</span>
    </div>
  </div>
    <!-- <span v-click op75 ml4>Put them in <code>components/</code> and use anywhere</span> -->

  <div flex="~ gap-2 items-center">
    <div flex="~ gap-2 items-center" v-click>
      <div i-ph:tree-structure-duotone text-3xl />
      <span font-bold text-3xl>要怎麼讓模型「學會語言的結構」？</span>
    </div>
  </div>

  <div flex="~ gap-2 items-center">
    <div flex="~ gap-2 items-center" v-click>
      <div i-ph:list-numbers-duotone text-3xl />
      <span font-bold text-3xl>要怎麼讓模型「知道順序」？</span>
    </div>
  </div>
</div>


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
