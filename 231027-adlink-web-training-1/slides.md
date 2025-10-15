---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
---

# Web Tech Introduction Ⅰ
Bobson Lin

---
layout: full
growX: 10
growY: 120
---

# History of Web

<img src="/history_of_web.svg" />

<div class="absolute left-24 top-50 z-1" v-click> 
    <ul>
        <li>Static Web Pages</li>
        <li>Mostly Read Only Web</li>
        <li>Information Sharing</li>
    </ul>
</div>

<div class="absolute left-63 top-53 w-40rem h-5rem bg-[#121212]"></div>

<div class="absolute left-145 top-78 w-20rem h-5rem bg-[#121212]"></div>

<!-- 

https://www.iotasol.com/blog/what-is-web3-how-its-different-from-web1-and-web2 
-->

---
layout: full
growX: 100
growY: 10
---

# History of Web - Web 1.0

1990 - 2004

<div class="grid grid-cols-[320px_1fr] gap-4">
    <div>
        <img src="/ie.jpg" class="w-16rem" v-click="1" />
        <ul>
            <li v-click="2">Ecommerce</li>
            <li v-click="4">Search Engine</li>
            <div class="flex">
                <img v-click="3" src="/Ecommerce.svg" class="w-10rem" />
                <img v-click="5" src="/SearchEngine.svg" class="w-10rem" />
            </div>
        </ul>
    </div>
    <div>
        <img src="/nasa-1997.jpeg"  />
    </div>
</div>

<!--
Ecommerce: Amazon, Ebay  ...
Search Engine: Google, Yahoo ...
-->

---
layout: full
growX: 10
growY: 120
---

# History of Web

<img src="/history_of_web.svg" />

<div class="absolute left-63 top-53 w-40rem h-5rem bg-[#121212]" v-click-hide="1"></div>

<div class="absolute left-65 top-73 z-1" v-click="1"> 
    <ul>
        <li>Dynamic Web Pages</li>
        <li>Read-Write Web</li>
        <li>Interactive Applications</li>
    </ul>
</div>

<div class="absolute left-145 top-78 w-20rem h-5rem bg-[#121212]" v-click-hide="3"></div>

---
layout: full
growX: 100
growY: 10
---

# History of Web - Web 2.0

2000 - Now

![]()

<div class="grid grid-cols-[320px_1fr] gap-4">
    <div class="flex flex-justify-center items-start">
        <img src="/chrome.png" class="w-14rem" v-click="1" />
    </div>
    <div class="flex flex-justify-start items-center flex-col">
        <ul>
            <li v-click="2"><span>SaaS</span><img src="/SaaS.svg" class="w-12rem" /></li>
            <li v-click="3">Social Media<img src="/SocialMedia.svg" class="w-12rem" /></li>
            <li v-click="4">Streaming Media<img src="/StreamingMedia.svg" class="w-12rem" /></li>
        </ul>
    </div>
</div>

<!--
SaaS: Google Apps (Gmail, Google Drive) ...
Social Media: Facebook, Twitter, Instagram ...
Streaming Media: Youtube, Netflix ...
-->

---
layout: full
growX: 100
growY: 100
---

# Web 2.0

Web Application

<div class="grid grid-cols-[1fr_100px_1fr] gap-4">
    <div class="flex flex-justify-center items-center flex-col" v-click="1">
        <div class="text-2xl">Frontend</div>
        <img src="/web_frontend_rmbg.png" class="w-full mt-3rem" />
    </div>
    <div class="flex flex-justify-start flex-col">
        <div v-click="2">
            <div class="absolute left-110 top-50">HTTP / HTTPS</div>
            <Arrow x1="420" y1="240" x2="570" y2="240" />
            <Arrow x1="570" y1="280" x2="420" y2="280" />
        </div>
        <div v-click="3">
            <Arrow x1="420" y1="380" x2="570" y2="380" />
            <Arrow x1="570" y1="380" x2="420" y2="380" />
            <div class="absolute left-113 top-85">WS / WSS</div>
        </div>
    </div>
    <div class="flex flex-justify-center items-center flex-col" v-click="1">
        <div class="text-2xl">Backend</div>
        <img src="/server.png" class="w-10rem mt-3rem ml-2rem" />
    </div>
    <img src="/REST.svg" class="absolute left-145 top-50 w-5rem" v-click="4" />
    <img src="/WebSocket.svg" class="absolute left-145 top-80 w-5rem" v-click="5" />
</div>


<!-- HTTPS 和 WSS 的 S 代表 SSL/TLS 連線上作加密使用 -->


---
layout: full
growX: 100
growY: 100
---

# Web 2.0

Web Application

<div class="grid grid-cols-2 gap-4">
    <div class="flex flex-justify-center items-center flex-col">
        <div class="text-2xl">HTTP/HTTPS Connection</div>
        <div class="text-sm text-truegray">(REST API)</div>
        <img src="/HttpConnection.svg" class="w-full" v-click="1" />
        <ul>
            <li v-click="2">Uni-directional</li>
            <li v-click="3">Stateless</li>
            <li v-click="4">Static data, not updated regularly</li>
        </ul>
    </div>
    <div class="flex flex-justify-center items-center flex-col">
        <div class="text-2xl">WebSocket Connection</div>
        <div class="text-sm text-truegray">(WebSocket API)</div>
        <img src="/WSConnection.svg" class="w-full" v-click="1" />
        <ul>
            <li v-click="2">Bi-directional</li>
            <li v-click="3">Stateful</li>
            <li v-click="4">Dynamic data, constant and frequent updates</li>
        </ul>
    </div>
</div>

<!-- 
Stateless: 無狀態, 每次 Request 都是獨立，彼此是沒有關聯性的，每個伺服器的回覆都不依賴任何存於伺服器的狀態

Stateful: 每次 Request 有關聯性, 需要伺服器記錄先前的 Reuqest 狀態
-->

---
layout: full
growX: 100
growY: 10
---

# Web Backend

Web Server

<v-clicks at="1">

- Deliver static content.
- Content is delivered using the HTTP protocol only.
- Serves only web-based applications.

</v-clicks>

<div class="grid grid-cols-2 gap-4">
    <div class="flex flex-justify-start items-center flex-col">
        <img src="/Web_Server.jpeg" class="w-30rem mt-2rem" v-click="1" />
    </div>
    <div class="flex flex-justify-start items-center flex-col">
        <img src="/Web_servers_logo.svg" class="w-24rem" v-click />
    </div>
</div>

<!-- https://www.educative.io/answers/web-server-vs-application-server -->

---
layout: full
growX: 100
growY: 10
---

# Web Backend

Application Server

<v-clicks at="1">

- Delivers dynamic content.
- Provides business logic to application programs using several protocols (including HTTP).
- Can serve web and enterprise-based applications.

</v-clicks>

<div class="grid grid-cols-2 gap-4">
    <div class="flex flex-justify-start items-center flex-col">
        <img src="/Application_Server.jpeg" class="w-30rem mt-1rem" v-click="1" />
    </div>
    <div class="flex flex-justify-start items-center flex-col">
        <div v-click>Web Frameworks</div>
        <img src="/WebFrameworks.svg" class="w-20rem mt-1rem" v-click />
    </div>
</div>

<!-- https://www.educative.io/answers/web-server-vs-application-server -->

---
layout: full
growX: 100
growY: 100
---

# Web Frontend

Web App

<div class="grid grid-cols-2 gap-4">
    <div class="flex flex-justify-start items-center flex-col" v-click>
        <div class="text-3xl">MPA</div>
        <div class="text-sm text-truegray">Multi-Page Application</div>
        <img src="/MPA.jpg" class="w-30rem mt-1rem" />
    </div>
    <div class="flex flex-justify-start items-center flex-col" v-click>
        <div class="text-3xl">SPA</div>
        <div class="text-sm text-truegray">Single-Page Application</div>
        <img src="/SPA.jpg" class="w-30rem mt-1rem" />
    </div>
</div>

<!-- https://hackmd.io/@naralala/B1BiZhvtD -->

---
layout: full
growX: 100
growY: 100
---

# Web Frontend

Web App

<div class="grid grid-cols-2 gap-4">
    <div class="flex flex-justify-start items-center flex-col">
        <div class="text-3xl">MPA</div>
        <img src="/MPA_Diagram.svg" class="w-full mt-1rem" v-click="1" />
        <!-- <img src="/MPA_Web.jpg" class="w-6rem mt-1rem" v-click="3" /> -->
    </div>
    <div class="flex flex-justify-start items-center flex-col">
        <div class="text-3xl">SPA</div>
        <img src="/SPA_Diagram.svg" class="w-full mt-1rem" v-click="2"  />
    </div>
</div>

---
layout: full
growX: 100
growY: 100
---

# Web Frontend

Web App

<div class="grid grid-cols-2 gap-4">
    <div class="flex flex-justify-start items-center flex-col">
        <div class="text-3xl">MPA</div>
        <img src="/MPA_pros_cons.svg" class="w-20rem" />
        <img src="/MPA_framework.svg" class="w-20rem" v-click />
    </div>
    <div class="flex flex-justify-start items-center flex-col">
        <div class="text-3xl">SPA</div>
        <img src="/SPA_pros_cons.svg" class="w-20rem" />
        <img src="/SPA_framework.svg" class="w-20rem" v-click />
    </div>
</div>

---
layout: full
growX: 10
growY: 100
---

# Real World Project

SDAQ & EMU


<div class="grid grid-cols-[200px_1fr] gap-4">
    <div class="flex flex-justify-center items-start">
        <ul>
            <li v-click>On edge device</li>
            <span v-click>=> Don't care about SEO</span>
            <li v-click>As fast as possible</li>
            <span v-click>=> SPA</span>
        </ul>
    </div>
    <div class="flex flex-justify-start items-center flex-col">
        <img v-click src="/SDAQ_EMU.svg" class="w-full mt-1rem" />
    </div>
</div>

---
layout: section
---

# About This Slides

<v-click>

### Also a SPA web app

<div class="flex flex-justify-center "><img src="/slide_qr.png" class="w-8rem mt-1rem" /></div>

</v-click>
