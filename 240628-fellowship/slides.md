---
theme: default
transition: fade-out
---

<h1 flex="~ col">
<!-- <div text-2xl op50>Anthony's Roads to Open Source</div> -->
<div mt1 font-bold>聖經人物</div>
<div mt-2 op75 text-3xl>巴錄 / 利未人 / 祭司 / 大祭司</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col gap-4 items-end" text-left>
  <div text-2xl> Bobson Lin</div>
  <div text-xs opacity-75 mt--4>Jun. 28th 2024</div>
</div>

---
growX: 10
growY: 120
---

<div text-5xl>巴錄</div>
<div text-2xl op50>文字傳道者</div>

<div text-2xl mt-8 text-warmgray-300 v-click>1. 耶利米的書記</div>

<div text-2xl mt-4 text-warmgray-300 v-click>2. 忠實完整地將耶利米預言用文字保留下來</div>

<div bg-gray-800 my-1 px-8 py-3 text-lg flex flex-col rounded-sm v-click>
  <div>所以，耶利米召了尼利亞的兒子巴錄來；巴錄就從耶利米口中，將耶和華對耶利米所說的一切話寫在書卷上。</div>
  <span text-right text-base text-gray-400 self-end>-- 耶利米書 36:4</span>
</div>

<div text-2xl mt-4 text-warmgray-300 v-click>3. 上帝使用巴錄的筆，將這些信息傳揚至世世代代</div>


---
growX: 100
growY: 100
---

<div text-5xl>利未人</div>
<div text-2xl op50>分別為聖歸於上帝的人</div>

<div flex items-center justify-center>
<div text-2xl my-4 text-warmgray-300 v-click="1">利未人的事奉</div>
</div>

<div flex items-center justify-center>
<div v-click="3"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.575 13L12 17.25q.2.35-.075.613t-.625.062L3.325 12.85q-.475-.3-.475-.85t.475-.85L11.3 6.075q.35-.2.625.063T12 6.75L9.575 11H21q.425 0 .713.288T22 12t-.288.713T21 13z"/></svg></div>
<div mx-8 v-click="2">大衛</div>
<div v-click="8"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.7 17.925q-.35.2-.625-.062T12 17.25L14.425 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h11.425L12 6.75q-.2-.35.075-.612t.625-.063l7.975 5.075q.475.3.475.85t-.475.85z"/></svg></div>
</div>

<div flex items-start justify-evenly>

<div text-2xl mt-6 p-4 h-50 w-100 text-warmgray-300 >
  <div text-xl v-click="4">哥轄、革順、米拉利</div>
  <p text-lg v-click="5">負責管理、運送會幕</p>
  <p text-lg v-click="6">祭司</p>
  <p text-lg v-click="7">代替以色列人一切頭生的 <span text-gray-400 font-bold  @click="$slidev.nav.go(4)">民數記 3:5-13</span></p>

</div>

<div mx-4 w-0.25rem h-60 bg-white v-click="2"></div>

<div text-2xl mt-6 p-4 h-60 w-100 text-warmgray-300 >
  <div text-xl v-click="9">亞薩、希幔、耶杜頓</div>
  <p text-lg v-click="10">負責管理、<span font-black>看守</span>會幕</p>
  <p text-lg v-click="11">祭司</p>
  <p text-lg v-click="12">音樂事奉 <span text-gray-400 font-bold @click="$slidev.nav.go(5)">歷代志上 16:37-42 & 歷代志上 23:25-32</span></p>
</div>

</div>

<div pl-100 @click="$slidev.nav.go(6)" v-click="13">利未🔜</div>


---
growX: 5
growY: 100
---

<div bg-gray-800 my-1 px-8 py-3 text-lg flex flex-col rounded-sm>
  <div text-2xl>5耶和華曉諭摩西說： 6「你使利未支派近前來，站在祭司亞倫面前好服事他， 7替他和會眾在會幕前守所吩咐的，辦理帳幕的事。 8又要看守會幕的器具，並守所吩咐以色列人的，辦理帳幕的事。 9你要將利未人給亞倫和他的兒子，因為他們是從以色列人中選出來給他的。 10你要囑咐亞倫和他的兒子謹守自己祭司的職任。近前來的外人必被治死。」
11耶和華曉諭摩西說： 12「我從以色列人中揀選了利未人，代替以色列人一切頭生的；利未人要歸我。 13因為凡頭生的是我的；我在埃及地擊殺一切頭生的那日就把以色列中一切頭生的，連人帶牲畜都分別為聖歸我；他們定要屬我。我是耶和華。」</div>
  <span text-right text-base text-gray-400 self-end>-- 民數記 3:5-13</span>
</div>

<div text-3xl pl-100 @click="$slidev.nav.go(3)">🔙</div>


---
growX: 100
growY: 100
---

<div bg-gray-800 my-1 px-8 py-2 text-lg flex flex-col rounded-sm>
  <div text-xl>37 大衛派亞薩和他的弟兄在約櫃前常常事奉耶和華，一日盡一日的職分； 38又派俄別‧以東和他的弟兄六十八人，與耶杜頓的兒子俄別‧以東，並何薩作守門的； 39-40且派祭司撒督和他弟兄眾祭司在基遍的邱壇、耶和華的帳幕前燔祭壇上，每日早晚，照着耶和華律法書上所吩咐以色列人的，常給耶和華獻燔祭。 41與他們一同被派的有希幔、耶杜頓，和其餘被選名字錄在冊上的，稱謝耶和華，因他的慈愛永遠長存。 42希幔、耶杜頓同着他們吹號、敲鈸，大發響聲，並用別的樂器隨着歌頌神。耶杜頓的子孫作守門的。
43於是眾民各歸各家；大衛也回去為家眷祝福。</div>
  <span text-right text-base text-gray-400 self-end>-- 歷代志上 16:37-42</span>
</div>

<div bg-gray-800 my-1 px-8 py-2 text-lg flex flex-col rounded-sm v-click>
  <div text-xl> 25大衛說：「耶和華－以色列的神已經使他的百姓平安，他永遠住在耶路撒冷。 26利未人不必再擡帳幕和其中所用的一切器皿了。」 27照着大衛臨終所吩咐的，利未人從二十歲以外的都被數點。 28他們的職任是服事亞倫的子孫，在耶和華的殿和院子，並屋中辦事，潔淨一切聖物，就是辦神殿的事務， 29並管理陳設餅，素祭的細麵，或無酵薄餅，或用盤烤，或用油調和的物，又管理各樣的升斗尺度； 30每日早晚，站立稱謝讚美耶和華， 31又在安息日、月朔，並節期，按數照例，將燔祭常常獻給耶和華； 32又看守會幕和聖所，並守耶和華吩咐他們弟兄亞倫子孫的，辦耶和華殿的事。</div>
  <span text-right text-base text-gray-400 self-end>-- 歷代志上 23:25-32</span>
</div>

<div text-3xl pl-100 @click="$slidev.nav.go(3)">🔙</div>

---
growX: 5
growY: 100
---

<div text-5xl>利未</div>
<div text-2xl op50>雅各的兒子</div>

<div bg-gray-800 my-1 px-8 py-2 text-lg flex flex-col rounded-sm v-click>
  <div text-xl> 25到第三天，眾人正在疼痛的時候，雅各的兩個兒子，就是底拿的哥哥西緬和利未，各拿刀劍，趁着眾人想不到的時候來到城中，把一切男丁都殺了， 26又用刀殺了哈抹和他兒子示劍，把底拿從示劍家裏帶出來就走了。 27雅各的兒子們因為他們的妹子受了玷污，就來到被殺的人那裏，擄掠那城， 28奪了他們的羊羣、牛羣，和驢，並城裏田間所有的； 29又把他們一切貨財、孩子、婦女，並各房中所有的，都擄掠去了。 30雅各對西緬和利未說：「你們連累我，使我在這地的居民中，就是在迦南人和比利洗人中，有了臭名。我的人丁既然稀少，他們必聚集來擊殺我，我和全家的人都必滅絕。」 31他們說：「他豈可待我們的妹子如同妓女嗎？」</div>
  <span text-right text-base text-gray-400 self-end>-- 創世紀 34:25-31</span>
</div>

<div bg-gray-800 my-1 px-8 py-2 text-lg flex flex-col rounded-sm v-click>
  <div text-xl> 5 西緬和利未是弟兄；
他們的刀劍是殘忍的器具。
6我的靈啊，不要與他們同謀；
我的心哪，不要與他們聯絡；
因為他們趁怒殺害人命，
任意砍斷牛腿大筋。
7他們的怒氣暴烈可咒；
他們的忿恨殘忍可詛。
我要使他們分居在雅各家裏，
散住在以色列地中。</div>
  <span text-right text-base text-gray-400 self-end>-- 創世紀 49:5-7</span>
</div>


---
growX: 100
growY: 100
---

<div text-5xl>利未支派</div>
<div text-2xl op50>轉變 - 金牛犢事件</div>

<div bg-gray-800 my-1 px-8 py-2 text-lg flex flex-col rounded-sm>
  <div text-lg> 15 摩西轉身下山，手裏拿着兩塊法版。這版是兩面寫的，這面那面都有字， 16是神的工作，字是神寫的，刻在版上。 17約書亞一聽見百姓呼喊的聲音，就對摩西說：「在營裏有爭戰的聲音。」 18摩西說：「這不是人打勝仗的聲音，也不是人打敗仗的聲音；我所聽見的乃是人歌唱的聲音。」 19摩西挨近營前就看見牛犢，又看見人跳舞，便發烈怒，把兩塊版扔在山下摔碎了， 20又將他們所鑄的牛犢用火焚燒，磨得粉碎，撒在水面上，叫以色列人喝。
21 摩西對亞倫說：「這百姓向你做了甚麼？你竟使他們陷在大罪裏！」 22亞倫說：「求我主不要發烈怒。這百姓專於作惡，是你知道的。 23他們對我說：『你為我們做神像，可以在我們前面引路；因為領我們出埃及地的那個摩西，我們不知道他遭了甚麼事。』 24我對他們說：『凡有金環的可以摘下來』，他們就給了我。我把金環扔在火中，這牛犢便出來了。」
25 摩西見百姓放肆（亞倫縱容他們，使他們在仇敵中間被譏刺）， 26就站在營門中，說：「凡屬耶和華的，都要到我這裏來！」於是利未的子孫都到他那裏聚集。 27他對他們說：「耶和華－以色列的神這樣說：『你們各人把刀跨在腰間，在營中往來，從這門到那門，各人殺他的弟兄與同伴並鄰舍。』」 28利未的子孫照摩西的話行了。那一天百姓中被殺的約有三千。 29摩西說：「今天你們要自潔，歸耶和華為聖，各人攻擊他的兒子和弟兄，使耶和華賜福與你們。」</div>
  <span text-right text-base text-gray-400 self-end>-- 出埃及記 32:15-29</span>
</div>


---
growX: 100
growY: 100
---

<div text-5xl>利未支派</div>
<div text-2xl op50>轉變 - 巴力‧毗珥事件</div>

<div bg-gray-800 my-1 px-8 py-2 text-lg flex flex-col rounded-sm>
  <div text-lg> 1 以色列人住在什亭，百姓與摩押女子行起淫亂。 2因為這女子叫百姓來，一同給她們的神獻祭，百姓就吃她們的祭物，跪拜她們的神。 3以色列人與巴力‧毗珥連合，耶和華的怒氣就向以色列人發作。 4耶和華吩咐摩西說：「將百姓中所有的族長在我面前對着日頭懸掛，使我向以色列人所發的怒氣可以消了。」 5於是摩西吩咐以色列的審判官說：「凡屬你們的人，有與巴力‧毗珥連合的，你們各人要把他們殺了。」
6 摩西和以色列全會眾正在會幕門前哭泣的時候，誰知，有以色列中的一個人，當他們眼前，帶着一個米甸女人到他弟兄那裏去。 7祭司亞倫的孫子，以利亞撒的兒子非尼哈看見了，就從會中起來，手裏拿着槍， 8跟隨那以色列人進亭子裏去，便將以色列人和那女人由腹中刺透。這樣，在以色列人中瘟疫就止息了。 9那時遭瘟疫死的，有二萬四千人。
10耶和華曉諭摩西說： 11「祭司亞倫的孫子，以利亞撒的兒子非尼哈，使我向以色列人所發的怒消了；因他在他們中間，以我的忌邪為心，使我不在忌邪中把他們除滅。 12因此，你要說：『我將我平安的約賜給他。 13這約要給他和他的後裔，作為永遠當祭司職任的約；因他為神有忌邪的心，為以色列人贖罪。』」
14那與米甸女人一同被殺的以色列人，名叫心利，是撒路的兒子，是西緬一個宗族的首領。 15那被殺的米甸女人，名叫哥斯比，是蘇珥的女兒；這蘇珥是米甸一個宗族的首領。</div>
  <span text-right text-base text-gray-400 self-end>-- 民數記 25:1-15</span>
</div>

---
growX: 5
growY: 100
---

<div text-5xl>祭司 / 大祭司</div>
<div text-2xl op50>為百姓獻祭的人 / 人與上帝之間的中保</div>

<div text-2xl mt-4 text-warmgray-300 v-click>1. 向以色列民宣講上帝的旨意</div>
<div text-2xl mt-4 text-warmgray-300 v-click>2. 負責宗教上的教育，將典章律例教導百姓</div>
<div text-2xl mt-4 text-warmgray-300 v-click>3. 在會幕中獻祭和敬拜</div>
<div text-2xl mt-4 text-warmgray-300 v-click>4. 服事上帝前必須先潔淨自己</div>
<div text-2xl mt-4 text-warmgray-300 v-click>5. 扮演以色列人與上帝之間的中保</div>
<hr my-4>
<div flex items-start justify-start>
  <div text-3xl text-warmgray-300 v-click>新約時代，唯一且至高的大祭司</div>
  
  <div text-3xl text-warmgray-300 v-click flex font-bold><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.7 17.925q-.35.2-.625-.062T12 17.25L14.425 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h11.425L12 6.75q-.2-.35.075-.612t.625-.063l7.975 5.075q.475.3.475.85t-.475.85z"/></svg>耶穌基督</div>
</div>
 

---
layout: statement
growX: 50
growY: 100
---


# 分享與代禱

