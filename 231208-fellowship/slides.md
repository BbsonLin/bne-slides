---
theme: default
transition: fade-out
---

<h1 flex="~ col">
<!-- <div text-2xl op50>Anthony's Roads to Open Source</div> -->
<div mt1 font-bold>婚姻成長學</div>
<div mt-2 op75 text-3xl>為問題找答案</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col gap-4 items-end" text-left>
  <div text-2xl> Bobson Lin</div>
  <div text-xs opacity-75 mt--4>Dec. 8th 2023</div>
</div>

---
growX: 10
growY: 120
---

<div text-2xl op50>為問題找答案之</div>
<div text-5xl>三個重要假設</div>

<div text-2xl mt-8 text-warmgray-300 v-click>1. 所有夫妻都會有問題</div>
<p text-xl p-2 text-truegray-400 v-click>家家都有本難念的經，所有的夫妻都會遇到問題。</p>

<div text-2xl mt-4 text-warmgray-300 v-click>2. 最好以 <span font-black>團隊</span> 觀點解決問題</div>
<p text-xl p-2 text-truegray-400 v-click>
一起面對挑戰，在婚姻中互相尊重是非常重要的。
</p>

<div bg-gray-800 my-1 px-8 py-3 text-lg flex flex-col rounded-sm v-click>
  <div>不過，你們每一個人也要愛自己的妻子，就像愛自己一樣；而妻子要敬重丈夫。</div>
  <span text-right text-base text-gray-400 self-end>-- 以弗所書 5:33</span>
</div>

<div bg-gray-800 my-1 px-8 py-3 text-lg flex flex-col rounded-sm v-click>
  <div>你們做丈夫的，也要按情理和妻子同住，因她比你軟弱，與你一同承受生命之恩的，所以要敬重她。這樣，便叫你們的禱告沒有阻礙。</div>
  <span text-right text-base text-gray-400 self-end>-- 彼得前書 3:7</span>
</div>

---
growX: 100
growY: 100
---

<div text-2xl op50>為問題找答案之</div>
<div text-5xl>三個重要假設</div>

<div text-2xl mt-8 text-warmgray-300 v-click>3. 草率的解答是差勁的解答</div>
<p text-xl p-2 text-truegray-400 v-click>
為避免衝突，速成的答案或許可以暫時鬆一口氣，但是不能真正解決問題。<br>

若願意的話，可以稍微停下來，向神求面對婚姻的智慧。
</p>

<div bg-gray-800 my-1 px-8 py-3 text-lg flex flex-col rounded-sm v-click>
  <div>未曾聽完先回答的，便是他的愚昧和羞辱。</div>
  <span text-right text-base text-gray-400 self-end>-- 箴言 18:13</span>
</div>

<div text-2xl mt-8 text-warmgray-400 v-click> 誰比較多提出問題 -- 男人或女人?  p. 125 ~ 126</div>

---
clicks: 5
growX: -100
growY: 120
---

<div
  v-click="1"
  absolute w-500 h-500 left--125 top--125 border="~ gray/50 rounded-full" bg-gray:20 text-5xl 
  flex="~ items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 3 ? 'scale-50' : 'scale-100'"
>
  <div absolute transition-all duration-500 :class="$clicks >= 4 ? 'left-50' : 'left-225'">所有問題</div>
  <div 
    v-click="2"
    absolute w-80 h-80 top-150 border="~ green rounded-full"
    bg-green:20 text-4xl text-green flex="~ items-center justify-center"
    transition-all duration-500
    :class="$clicks >= 3 ? 'left-50' : 'left-150'"
    @click="$slidev.nav.go(5)"
  >
    生活小問題
  </div>
  <div 
    v-click="4"
    absolute w-300 h-300 left-150 top-50 border="~ blue rounded-full"
    bg-blue:10 text-6xl text-blue flex="~ items-center justify-center"
    transition-all duration-500
    @click="$slidev.nav.go(6)"
  >
    重大問題
  </div>
  <div 
    v-click="5"
    absolute w-70 h-70 left-100 top-50 border="~ amber rounded-full"
    bg-amber:10 text-3xl text-amber flex="~ items-center justify-center"
    transition-all duration-500
  >
    無法處理的問題
  </div>
</div>


---
growX: 5
growY: 100
---

<div text-2xl op50>為問題找答案之</div>
<div text-5xl>生活小問題解決方法 -- <span text-3xl op80 >TIP</span></div>

<ul mt-4>
  <li text-2xl v-click>T - Trigger 導火線</li>
  <div text-xl py-2 px-10 text-truegray-400 v-click>事件本身，指你配偶做或沒做而影響到你的事情</div>
  <li text-2xl v-click>I - Impact 衝擊 ⭐</li>
  <div text-xl py-2 px-10 text-truegray-400 v-click>事件帶給你的衝擊，要讓配偶曉得你的感受。</div>
  <div text-xl px-10 text-truegray-400 v-click>開誠佈公地講出感受或感想，可立刻終止對方的讀心術</div>
  <div text-xl my-1 mx-9 px-2 py-1 text-truegray-300 bg-warmgray-800 border-l-1 v-click>請留意，避免講出負面的話，例如「我覺得你是個白癡」等等。</div>
  <li text-2xl v-click>P - Preference 偏好</li>
  <div text-xl py-2 px-10 text-truegray-400 v-click>相較於實際發生的狀況，你期待將來事情如何發生。</div>
  <div text-xl my-1 mx-9 px-2 py-1 text-truegray-300 bg-warmgray-800 border-l-1 v-click>偏好不是要求，只是表明你期望發生的事，而非要求配偶用特定的方式做事。</div>
  <div text-3xl pl-100 v-click @click="$slidev.nav.go(4)">🔙</div>
</ul>


---
growX: 100
growY: 100
---

<div text-2xl op50>為問題找答案之</div>
<div text-5xl>重大問題的解決步驟</div>

<div flex items-center justify-center>

  <div text-2xl mt-6 p-4 h-100 w-15rem text-warmgray-300 b-1 v-click="1">
    1. 問題討論
    <p text-lg v-click="2">為彼此了解奠定基礎</p>
    <p text-lg v-click="3">建立團隊關係，尊重彼此</p>
    <div text-lg px-2 text-truegray-300 bg-warmgray-800 border-l-1 v-click="4">高品質的討論，很重要❗</div>
  </div>
  <div mx-4 v-click="5"> >> </div>
  <div text-2xl mt-6 p-4 h-100 w-15rem text-warmgray-300 b-1 v-click="6">
  2. 禱告
  <p text-lg v-click="6">重要的問題，邀請主共同參與是最有智慧的。</p>
  <div text-lg px-2 text-truegray-300 bg-warmgray-800 border-l-1 v-click="7">有聲或無聲的禱告都無法，關鍵是認定主。</div>
  <div bg-gray-800 mt-3 px-4 py-3 text-base flex flex-col rounded-sm v-click="8">
    <div>你要專心仰賴耶和華，不可倚靠自己的聰明，在你一切所行的事上都要認定他，他必指引你的路。</div>
    <span text-right text-sm text-gray-400 self-end>-- 箴言 3:5-6</span>
  </div>
  </div>

  <div mx-4 v-click="9"> >> </div>

  <div text-2xl mt-6 p-4 h-100 w-15rem text-warmgray-300 b-1 v-click="10">
    3. 問題解決
     <p text-lg v-click="11">設定問題，設定議程</p>
     <p text-lg v-click="12">腦力激盪</p>
     <p text-lg v-click="13">協議與妥協</p>
     <p text-lg v-click="14">後續跟進</p>
  </div>

</div>

---
layout: statement
growX: 50
growY: 100
---


# 分享與代禱

