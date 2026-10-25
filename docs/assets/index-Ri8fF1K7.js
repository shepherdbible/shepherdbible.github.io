var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=[{id:`verse-image`,icon:`🎨`,title:`Verse Image Creator`,description:`Create beautiful Scripture images`,route:`/editor`}];function u(){return l.map(e=>`
        <a
          href="${e.route}"
          class="feature-item"
          data-route
          data-feature-id="${e.id}"
        >
          <span
            class="feature-item-icon"
            aria-hidden="true"
          >
            ${e.icon}
          </span>

          <span class="feature-item-content">
            <strong>${e.title}</strong>
            <small>${e.description}</small>
          </span>
        </a>
      `).join(``)}var d={render:()=>`
    <nav class="navbar" aria-label="Main Navigation">

      <div class="container navbar-container">

        <!-- Logo -->
        <a
          href="/"
          class="logo"
          data-route
          aria-label="Shepherd Bible Home"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>

          <span>Shepherd Bible</span>
        </a>

        <!-- Mobile Menu Button -->
        <button
          class="mobile-menu-btn"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="main-navigation"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>

        <!-- Navigation -->
        <div
          class="nav-links"
          id="main-navigation"
        >

          <a href="/" data-route>Home</a>

          <!-- Features -->
          <div class="nav-dropdown">

            <button
              class="nav-dropdown-trigger"
              type="button"
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls="features-menu"
            >
              <span>Features</span>

              <svg
                class="dropdown-chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <div
              class="features-menu"
              id="features-menu"
              role="menu"
            >
              ${u()}
            </div>

          </div>

          <a href="/community" data-route>Community</a>

          <a href="/changelog" data-route>Changelog</a>

          
<a href="/support" data-route class="donate-button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/>
  </svg>
  <span>DONATE</span>
</a>


          <!-- Theme -->
          <button
            id="theme-toggle"
            class="theme-toggle"
            type="button"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <span aria-hidden="true">🌓</span>
          </button>

        </div>
      </div>
    </nav>
  `,mount:()=>{let e=document.querySelector(`.mobile-menu-btn`),t=document.querySelector(`#main-navigation`),n=document.querySelector(`.nav-dropdown`),r=document.querySelector(`.nav-dropdown-trigger`);e?.addEventListener(`click`,()=>{let n=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!n)),t?.classList.toggle(`active`,!n)}),r?.addEventListener(`click`,e=>{e.stopPropagation();let t=r.getAttribute(`aria-expanded`)===`true`;r.setAttribute(`aria-expanded`,String(!t)),n?.classList.toggle(`open`,!t)}),document.addEventListener(`click`,e=>{let t=e.target;n&&!n.contains(t)&&(n.classList.remove(`open`),r?.setAttribute(`aria-expanded`,`false`))}),t?.querySelectorAll(`a[data-route]`).forEach(i=>{i.addEventListener(`click`,()=>{t.classList.remove(`active`),e?.setAttribute(`aria-expanded`,`false`),n?.classList.remove(`open`),r?.setAttribute(`aria-expanded`,`false`)})});let i=document.getElementById(`theme-toggle`),a=localStorage.getItem(`sb-theme`);(a===`dark`||a===`light`)&&document.documentElement.setAttribute(`data-theme`,a),i?.addEventListener(`click`,()=>{let e=document.documentElement.getAttribute(`data-theme`)===`dark`?`light`:`dark`;document.documentElement.setAttribute(`data-theme`,e),localStorage.setItem(`sb-theme`,e)})}},f=o(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),p=o((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),m=o((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),h=o(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),g=o(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),_=o((e=>{var t=p().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),v=o((e=>{var t=p().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),y=o((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),b=o((e=>{var t=m(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),x=o((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),S=o((e=>{var t=x();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),C=o(((e,t)=>{var n=S();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),w=o((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),T=o((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),E=o((e=>{var t=w(),n=T();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),ee=o((e=>{var t=p(),n=b(),r=m(),i=E(),a=w(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),te=o((e=>{var t=p(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),D=o(((e,t)=>{var n=E();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),O=o(((e,t)=>{var n=E(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),ne=o(((e,t)=>{var n=E();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),re=o(((e,t)=>{var n=E(),r=p();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),ie=o(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),ae=o((e=>{var t=E(),n=D(),r=O(),i=ne(),a=re(),o=T(),s=p(),c=ie();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function m(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function h(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function g(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function _(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(_(t,null)):t.data&&e.push(_(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=g(h(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(m(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),oe=o((e=>{var t=p(),n=m(),r=h(),i=g(),a=_(),o=v(),s=y(),c=b(),l=C(),u=ee(),d=te(),f=E(),x=ae();function S(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function w(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function T(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function D(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function O(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function ne(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function re(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return ie(a,e,n)}function ie(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function oe(e,n,r,a){let o;if(Array.isArray(e))o=x.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=x.rawSplit(e);t=u.getBestVersionForData(n,r)}o=x.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=re(n,r,o),d=new i(t.getSymbolSize(n));return S(d,n),w(d),T(d,n),O(d,r,0),n>=7&&D(d,n),ne(d,l),isNaN(a)&&(a=s.getBestMask(d,O.bind(null,d,r))),s.applyMask(a,d),O(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),oe(e,a,i,o)}})),se=o((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),ce=o((e=>{var t=se();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),le=o((e=>{var t=se();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),ue=c(o((e=>{var t=f(),n=oe(),r=ce(),i=le();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1),k=[{id:`windows`,name:`Windows PC`,icon:`windows`,iconClass:`windows-icon`,status:`Live on Windows 10/11`,statusClass:`live`,description:`Fast, offline-first Bible study with multi-translation support.`,storeName:`Microsoft Store`,storeUrl:`https://apps.microsoft.com/detail/9pprws532n91`,installerUrl:`https://get.microsoft.com/installer/download/9pprws532n91?referrer=appbadge`,installerName:`Windows Installer (.exe)`,available:!0},{id:`android`,name:`Android`,icon:`android`,iconClass:`android-icon`,status:`Live on the Play Store`,statusClass:`live`,description:`Bible reading, quick verse navigation, audio options, and daily devotions.`,storeName:`Google Play`,storeUrl:`https://play.google.com/store/apps/details?id=com.nxtccode.biblenotebook`,available:!0},{id:`macos`,name:`macOS`,icon:`apple`,iconClass:`mac-icon`,status:`Planned`,statusClass:`preview`,description:`A desktop Bible reading experience planned for Apple Silicon and Intel Macs.`,storeName:`Coming in the future`,available:!1},{id:`ios`,name:`iOS & iPadOS`,icon:`apple`,iconClass:`ios-icon`,status:`Planned`,statusClass:`preview`,description:`A focused Bible reading experience planned for iPhone and iPad.`,storeName:`App Store`,available:!1},{id:`linux`,name:`Linux`,icon:`terminal`,iconClass:`linux-icon`,status:`Planned`,statusClass:`preview`,description:`A desktop Bible study experience planned for Linux distributions.`,storeName:`Coming in the future`,available:!1}],A={windows:`
    <svg viewBox="0 0 24 24" fill="#0078D4" aria-hidden="true">
      <path d="M0 3.449L9.75 2.1v9.451H0m9.75 1.35V22.35L0 20.9v-8zm1.05-20.1L24 0v11.25H10.8m13.2 1.35V24l-13.2-1.8v-9.45"/>
    </svg>`,android:`
    <svg viewBox="0 0 24 24" fill="#3DDC84" aria-hidden="true">
      <path d="M17.523 15.341c-.551 0-.999-.448-.999-1s.448-.999.999-.999 1 .448 1 1-.448 1-1 1M6.477 15.341c-.551 0-1-.448-1-.999s.449-1 1-1 .999.449.999 1-.448.999-.999.999M17.881 9.321l1.997-3.459a.416.416 0 0 0-.72-.416l-2.022 3.503C15.59 8.197 13.853 7.72 12 7.72s-3.59.477-5.137 1.23L4.841 5.447a.416.416 0 0 0-.72.415l1.997 3.459C2.689 11.286.338 14.832.016 19h23.968c-.322-4.168-2.673-7.714-6.103-9.679"/>
    </svg>`,apple:`
    <svg viewBox="0 0 24 24" fill="#A3AAAE" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.68-.82 1.14-1.97 1.01-3.12-1 .04-2.21.67-2.92 1.5-.63.73-1.18 1.9-1.03 3.03 1.12.09 2.26-.59 2.94-1.41z"/>
    </svg>`,linux:`
  <svg viewBox="0 0 24 24" fill="#FCC624" aria-hidden="true">
    <path d="M12 2.2c-2.7 0-4.4 2.1-4.4 5.1v3.2c-1.5 1.3-2.5 3.2-2.5 5.1 0 1.1.6 2 1.6 2.5l-.6 2c-.2.7.2 1.3.9 1.5l2.4.6c.7.2 1.3-.2 1.6-.8l1-2.1 1 2.1c.3.6.9 1 1.6.8l2.4-.6c.7-.2 1.1-.8.9-1.5l-.6-2c1-.5 1.6-1.4 1.6-2.5 0-1.9-1-3.8-2.5-5.1V7.3c0-3-1.7-5.1-4.4-5.1zm-2 5.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm4 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"/>
  </svg>`,terminal:`
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <!-- Penguin body -->
    <path
      d="M12 2.5C7.8 2.5 6 6 6 10v5.5
         C6 19 8.5 22 12 22s6-3 6-6.5V10
         c0-4-1.8-7.5-6-7.5Z"
      fill="#242424"
    />

    <!-- Wings -->
    <path
      d="M6.5 11 4.5 15.5c-.5 1.2.4 2.3 1.7 2.2L8 17"
      fill="#242424"
    />
    <path
      d="M17.5 11 19.5 15.5c.5 1.2-.4 2.3-1.7 2.2L16 17"
      fill="#242424"
    />

    <!-- White face and belly -->
    <path
      d="M8.2 10.5c0-3 1.3-4.5 3.8-4.5s3.8 1.5 3.8 4.5v5
         c0 3-1.5 4.5-3.8 4.5s-3.8-1.5-3.8-4.5Z"
      fill="#FFFFFF"
    />

    <!-- Eyes -->
    <circle cx="10" cy="8.5" r=".8" fill="#242424"/>
    <circle cx="14" cy="8.5" r=".8" fill="#242424"/>

    <!-- Beak -->
    <path d="m10.5 10 1.5 1.5 1.5-1.5Z" fill="#FCC624"/>

    <!-- Feet -->
    <path d="M8.5 20.5 6 22h4l1-1.2ZM15.5 20.5 18 22h-4l-1-1.2Z"
      fill="#FCC624"/>
  </svg>`};function de(e){let t=e.available&&e.storeUrl?`
      <div class="platform-actions">
        <a
          href="${e.storeUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="platform-link"
        >
          Download from ${e.storeName} &rarr;
        </a>

        ${e.installerUrl?`
              <a
                href="${e.installerUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="platform-link platform-installer-link"
              >
                ${e.installerName??`Windows Installer (.exe)`} &darr;
              </a>
            `:``}

        <button
          type="button"
          class="platform-qr-button"
          data-qr-platform="${e.id}"
          aria-label="View QR code for ${e.name}"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM15 13h2v2h-2zM19 13h2v5h-2zM13 17h4v4h-4zM17 19h2v2h-2z"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
          </svg>
          View QR Code
        </button>
      </div>
    `:`
      <span class="platform-link-disabled">
        ${e.storeName} (Coming Soon)
      </span>
    `;return`
    <article class="card platform-card ${e.id===`windows`?`featured-platform`:``}">
      <div class="card-top-icon platform-${e.id}">
        ${A[e.icon]??``}
      </div>

      <div class="card-content">
        <h3>${e.name}</h3>

        <span class="status-badge ${e.statusClass}">
          ${e.status}
        </span>

        <p>${e.description}</p>

        ${t}
      </div>
    </article>
  `}function j(){return`
    <section class="section platforms-section">
      <div class="container text-center">
        <h2>Available Everywhere You Are</h2>
        <p class="section-lead">
          Study Scripture seamlessly on desktop or mobile — online or offline.
        </p>

        <div class="grid grid-4 platform-grid">
          ${k.map(de).join(``)}
        </div>
      </div>
    </section>

    <div class="qr-modal" id="platform-qr-modal"
         aria-hidden="true" role="dialog"
         aria-modal="true" aria-labelledby="platform-qr-title">

      <div class="qr-modal-backdrop" data-qr-close></div>

      <div class="qr-modal-content">
        <button type="button" class="qr-modal-close"
                data-qr-close aria-label="Close QR code">
          &times;
        </button>

        <p class="qr-eyebrow">GET THE APP</p>
        <h2 id="platform-qr-title">Scan to download</h2>
        <p class="qr-modal-description" id="platform-qr-description">
          Scan this code with your phone's camera.
        </p>

        <div class="qr-code-frame" id="platform-qr-frame">
          <canvas id="platform-qr-canvas"
                  aria-label="QR code for the app store"></canvas>
          <div class="qr-center-icon" id="platform-qr-icon"
               aria-hidden="true"></div>
        </div>

        <p class="qr-store-label" id="platform-qr-store"></p>

        <a id="platform-qr-open" class="platform-link"
           href="#" target="_blank" rel="noopener noreferrer">
          Open Store &rarr;
        </a>
      </div>
    </div>`}function fe(){let e=e=>{let t=document.querySelector(e);if(!t)throw Error(`Required element not found: ${e}`);return t},t,n,r,i,a,o,s,c;try{t=e(`#platform-qr-modal`),n=e(`#platform-qr-canvas`),r=e(`#platform-qr-title`),i=e(`#platform-qr-description`),a=e(`#platform-qr-store`),o=e(`#platform-qr-icon`),s=e(`#platform-qr-open`),c=t.querySelector(`.qr-modal-close`)}catch(e){console.error(`QR modal initialization failed:`,e);return}let l=null;async function u(e){let u=k.find(t=>t.id===e);if(u?.available&&u.storeUrl){l=document.activeElement instanceof HTMLElement?document.activeElement:null,r.textContent=`${u.name} QR Code`,i.textContent=`Scan with your phone to open the app listing.`,a.textContent=u.storeName,o.innerHTML=A[u.icon]??``,s.href=u.storeUrl,n.hidden=!1,t.classList.add(`is-open`),t.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`qr-modal-open`);try{await ue.toCanvas(n,u.storeUrl,{width:260,margin:2,errorCorrectionLevel:`H`,color:{dark:`#211a1d`,light:`#ffffff`}})}catch(e){console.error(`QR code generation failed:`,e),n.hidden=!0,i.textContent=`Unable to generate the QR code. Use the Open Store link instead.`}c?.focus()}}function d(){t.classList.remove(`is-open`),t.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`qr-modal-open`),l?.focus()}document.addEventListener(`click`,e=>{let t=e.target;if(!(t instanceof Element))return;let n=t.closest(`[data-qr-platform]`);if(n){u(n.dataset.qrPlatform??``);return}t.closest(`[data-qr-close]`)&&d()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&t.classList.contains(`is-open`)&&d()})}var pe={render:()=>`
    <!-- Hero Section -->
    <section class="hero section">
      <div class="container text-center">
        <div class="hero-badge">
          <span class="pulse-dot"></span>
          Now Available on Windows — "Shepherd Bible"
        </div>
        
        <h1 class="hero-title">Grow in the Word.<br>Walk together.</h1>
        <p class="hero-subtitle">
          Discover Shepherd Bible — a fast, lightweight, offline-first Bible study app available across Windows, Android, macOS, and iOS.
        </p>

        <!-- Primary Platform CTA Group -->
        <div class="hero-cta-group">
          <a href="https://apps.microsoft.com/detail/9pprws532n91" target="_blank" rel="noopener noreferrer" class="btn btn-store btn-windows">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m9.75 1.35V22.35L0 20.9v-8zm1.05-20.1L24 0v11.25H10.8m13.2 1.35V24l-13.2-1.8v-9.45"/>
            </svg>
            <div class="btn-text">
              <span class="subtext">Get it on</span>
              <span class="maintext">Microsoft Store</span>
            </div>
          </a>

          <a href="/store" class="btn btn-secondary">
            Visit Store
          </a>
        </div>

        <!-- App Preview Device Mockup -->
        <div class="hero-visual">
          <div class="mockup-container">
            <div class="mockup-topbar">
              <div class="mockup-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="mockup-title">Shepherd Bible</div>
            </div>
            <div class="mockup-content">
              <aside class="mockup-sidebar">
                <div class="sidebar-item active">📖 Reading</div>
                <div class="sidebar-item">🔍 Search</div>
                <div class="sidebar-item">🔖 Bookmarks</div>
                <div class="sidebar-item">📝 Notebooks</div>
                <div class="sidebar-item">🎵 Hymns</div>
              </aside>
              <main class="mockup-reader">
                <div class="reader-header">
                  <h2>Psalm 23:1-6</h2>
                  <span class="version-select">KJV ▼</span>
                </div>
                <div class="reader-body">
                  <p><span class="v-num">1</span> The <span class="god-name">LORD</span> is my shepherd; I shall not want.</p>
                  <p><span class="v-num">2</span> He maketh me to lie down in green pastures: he leadeth me beside the still waters.</p>
                  <p><span class="v-num">3</span> He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.</p>
                  <p><span class="v-num">4</span> Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.</p>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Availability Showcase -->
    <section class="section platforms-section">
        ${j()}
    </section>

    <!-- App Features Grid -->
    <section class="section features">
      <div class="container">
        <h2 class="text-center">Built for Daily Scripture Study</h2>
        <p class="text-center section-lead">Everything you need to read, listen, research, and grow.</p>

        <div class="grid grid-3 feature-grid">
          <div class="card feature-card">
            <div class="feature-emoji">⚡</div>
            <h3>Multi-Version & Offline</h3>
            <p>Read freely without internet access. Supports SQLite Bible databases, KJV, WEB, ASV, and more.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">🎧</div>
            <h3>Audio Bibles</h3>
            <p>Listen to dramatized Bible audio readings while commuting, walking, or resting in God's Word.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">🔍</div>
            <h3>Fast Verse Search</h3>
            <p>Locate any verse or passage instantly with rapid search filters, concordance, and Greek/Hebrew references.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">📌</div>
            <h3>Highlights & Notes</h3>
            <p>Personalize your Bible journey. Mark favorite passages with color highlights, bookmarks, and study notebooks.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">🎵</div>
            <h3>Worship & Hymns</h3>
            <p>Browse Christian hymns with lyrics and praise songs integrated right alongside your Bible reader.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">🤝</div>
            <h3>Community Driven</h3>
            <p>Share inspiring verses, ask study questions, and contribute ideas to shape future app updates.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Callout Section -->
    <section class="section community-banner">
      <div class="container text-center">
        <h2>"Share a piece of your journey to inspire another."</h2>
        <p class="banner-subtext">Join our growing reader community to suggest features, get support, and share testimony.</p>
        <div class="banner-actions">
          <a href="/community" class="btn btn-primary">Visit Community Hub</a>
          <a href="/faq" class="btn btn-secondary">Help & FAQ</a>
        </div>
      </div>
    </section>

   
  `,mount:()=>{j(),fe()}},me=[{id:`1`,category:`Getting Started`,question:`What is Shepherd Bible?`,answer:`Shepherd Bible is a Bible reading and study app designed to help you read God's Word, take notes, highlight verses, bookmark passages, and keep your personal Bible study organized.`},{id:`2`,category:`Getting Started`,question:`Is Shepherd Bible free?`,answer:`Yes. Shepherd Bible is available to use for Bible reading and study. Some features or services may vary by platform and version.`},{id:`3`,category:`Bible Versions`,question:`Which Bible versions are available?`,answer:`Shepherd Bible supports multiple Bible versions, including the King James Version (KJV) and other available editions. The available versions may vary depending on the platform and the current app release.`},{id:`4`,category:`Bible Versions`,question:`Can I read different Bible versions?`,answer:`Yes. Shepherd Bible is designed to let you work with multiple Bible versions so you can compare translations while studying a passage.`},{id:`5`,category:`Bible Reading`,question:`Can I read the Bible offline?`,answer:`Bible content available in Shepherd Bible is stored locally on your device, allowing you to access your downloaded Bible data without depending on an internet connection.`},{id:`6`,category:`Bible Study`,question:`Can I highlight Bible verses?`,answer:`Yes. Shepherd Bible provides highlighting tools so you can mark important verses and passages for personal Bible study.`},{id:`7`,category:`Bible Study`,question:`Can I bookmark Bible verses?`,answer:`Yes. You can bookmark passages that you want to quickly return to later.`},{id:`8`,category:`Notes`,question:`Can I add notes to Bible passages?`,answer:`Yes. Shepherd Bible allows you to create personal notes while reading and studying the Bible.`},{id:`9`,category:`Notes`,question:`Where are my notes and highlights stored?`,answer:`Your personal Bible study data, including notes, highlights, and bookmarks, is stored locally on your device. This allows the app to work with your study data without requiring an internet connection.`},{id:`10`,category:`Backup and Data`,question:`How can I back up my Bible study data?`,answer:`Shepherd Bible provides data backup and export functionality so you can protect your personal Bible study data. We recommend making regular backups, especially before major device or app changes.`},{id:`11`,category:`Backup and Data`,question:`What happens to my notes if I reinstall the app?`,answer:`Personal study data is stored locally on your device. Reinstalling or removing the app can affect locally stored data, so it is important to create a backup before uninstalling or resetting the application.`},{id:`12`,category:`Search`,question:`Can I search the Bible?`,answer:`Yes. Shepherd Bible includes Bible search functionality that helps you find words, phrases, and passages across the available Bible data.`},{id:`13`,category:`Community`,question:`What is the Shepherd Bible community?`,answer:`The Shepherd Bible community is a place for Bible readers to discuss Scripture, ask questions, share encouragement, and share personal testimonies with other believers.`},{id:`14`,category:`Community`,question:`Can I share my Bible study journey with others?`,answer:`Yes. The Shepherd Bible community is designed to give users a place to share thoughts, encouragement, questions, testimonies, and experiences from their Bible study journey.`},{id:`15`,category:`Verse Sharing`,question:`Can I share a specific Bible verse?`,answer:`Yes. Shepherd Bible's verse sharing features are designed to make it easy to share a specific Scripture passage with others.`},{id:`16`,category:`Verse Images`,question:`What is the Verse Image Creator?`,answer:`The Verse Image Creator lets you turn a Bible verse into a visual image that you can save and share. You can customize elements such as text, fonts, colors, backgrounds, layouts, effects, and templates.`},{id:`17`,category:`Verse Images`,question:`Can I create Bible verse images for social media?`,answer:`Yes. The Verse Image Creator is designed to help you create Scripture images in different layouts and sizes that can be shared on social media or with friends and family.`},{id:`18`,category:`Privacy`,question:`Does Shepherd Bible require an internet connection to read the Bible?`,answer:`No. Bible reading can work with locally available Bible data. Internet access may be required for online services and community-related features.`},{id:`19`,category:`Privacy`,question:`Is my personal Bible study data private?`,answer:`Personal study data such as notes, highlights, and bookmarks is stored locally on your device. Online community features are separate from your private local study data.`},{id:`20`,category:`Support`,question:`How can I report a problem or bug?`,answer:`If you encounter a problem, please report it through the available Shepherd Bible support or feedback channel. Include what you were doing when the problem occurred and, if possible, your device and app version. This information helps us investigate and fix issues.`},{id:`21`,category:`Support`,question:`How can I suggest a new feature?`,answer:`We welcome suggestions from Shepherd Bible users. Feature requests and feedback help us understand how people use the app and what would make Bible study more useful.`},{id:`22`,category:`Updates`,question:`How often is Shepherd Bible updated?`,answer:`Shepherd Bible is actively developed and updated as improvements, bug fixes, new features, and Bible study enhancements become available.`},{id:`23`,category:`Updates`,question:`Where can I see what changed in an update?`,answer:`You can check the Shepherd Bible changelog for information about new features, improvements, fixes, and other changes included in releases.`}],he={render:()=>`
    <div class="section">
      <div class="container" style="max-width: 800px;">
        <h1 class="text-center" style="margin-bottom: 16px;">Help Center & FAQ</h1>
        <p class="text-center" style="color: var(--color-text-muted); margin-bottom: 40px;">Find answers to common questions about Shepherd Bible.</p>
        
        <div class="search-container" style="margin-bottom: 40px;">
          <input type="text" id="faq-search" placeholder="Search questions..." class="search-input" aria-label="Search FAQ" />
        </div>

        <div id="faq-list" class="faq-list">
          ${me.map(e=>`
            <div class="faq-item" data-question="${e.question.toLowerCase()}">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${e.id}">
                ${e.question}
                <span class="icon">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-${e.id}" hidden>
                <p>${e.answer}</p>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
    <style>
      .search-input {
        width: 100%;
        padding: 16px;
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 1rem;
        font-family: var(--font-sans);
      }
      .search-input:focus { outline: 2px solid var(--color-primary); }
      .faq-item {
        border-bottom: 1px solid var(--color-border);
      }
      .faq-question {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: none;
        border: none;
        padding: 24px 0;
        font-size: 1.125rem;
        font-weight: 500;
        color: var(--color-text);
        cursor: pointer;
        text-align: left;
        font-family: var(--font-sans);
      }
      .faq-answer {
        padding-bottom: 24px;
        color: var(--color-text-muted);
        line-height: 1.6;
      }
      .faq-answer[hidden] { display: none; }
    </style>
  `,mount:()=>{document.querySelectorAll(`.faq-question`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!t));let n=e.nextElementSibling;t?(n.setAttribute(`hidden`,`true`),e.querySelector(`.icon`).textContent=`+`):(n.removeAttribute(`hidden`),e.querySelector(`.icon`).textContent=`−`)})});let e=document.getElementById(`faq-search`),t=document.querySelectorAll(`.faq-item`);e?.addEventListener(`input`,e=>{let n=e.target.value.toLowerCase();t.forEach(e=>{let t=e.getAttribute(`data-question`)||``;e.style.display=t.includes(n)?`block`:`none`})})}},ge={render:()=>`
    <div class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom: 64px;">
          <h1>Community Hub</h1>
          <p style="color: var(--color-text-muted); margin-top: 16px;">
            A space to grow together. Ask questions, share your journey, and suggest improvements.
          </p>
          <div class="static-notice" style="margin-top: 24px; display: inline-block; padding: 12px 24px; background: var(--color-surface-muted); border-radius: var(--radius-md); font-size: 0.875rem;">
            <em>Note: The community board is currently a static preview. Interactive discussions and accounts will arrive in a future update.</em>
          </div>
        </div>

        <div class="grid grid-2">
          <!-- Sample Demo Post 1 -->
          <div class="card community-card">
            <div class="card-header">
              <span class="badge">Testimony</span>
              <span class="date">Oct 15, 2026</span>
            </div>
            <h3>Finding peace in the Psalms</h3>
            <p>"Reading through Psalm 91 this morning using the new highlight feature really helped center my day..."</p>
            <div class="author">— User1 <em></em></div>
          </div>

          <!-- Sample Demo Post 2 -->
          <div class="card community-card">
            <div class="card-header">
              <span class="badge badge-feature">Feature Request</span>
              <span class="date">Oct 14, 2026</span>
            </div>
            <h3>Audio Bible Support</h3>
            <p>"It would be incredible to have text-to-speech or integrated audio bibles for commuting."</p>
            <div class="author">— User2 <em></em></div>
          </div>
        </div>
      </div>
    </div>
    <style>
      .community-card { display: flex; flex-direction: column; gap: 12px; }
      .card-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem; }
      .badge { background: var(--color-surface-muted); padding: 4px 12px; border-radius: 20px; font-weight: 500; }
      .badge-feature { background: #e6f0fa; color: #0056b3; }
      [data-theme="dark"] .badge-feature { background: #1a365d; color: #90cdf4; }
      .date { color: var(--color-text-muted); }
      .author { margin-top: auto; font-size: 0.875rem; color: var(--color-text-muted); font-style: italic; }
    </style>
  `},_e=[{id:`v1.1.433.0`,version:`1.1.433.0`,date:`2026-10-23`,title:`Stability Fixes & Future Preparations`,description:`Improvements, stability fixes, and preparation for future features.`,platforms:[`windows`],changes:[`We are working to improve purchase recognition and fix an issue where some users may successfully purchase the customization upgrade but still find its features locked. If this happens to you, please save your work, completely exit Shepherd Bible, and reopen the app. If the upgrade remains locked, open the upgrade screen and try the purchase option again. Since this is a durable purchase, Microsoft Store should recognize that you already own it and indicate that it has already been purchased, rather than charge you again. Please ensure you are signed in to the same Microsoft Store account used for the original purchase. If you still cannot access your upgrade, contact us at shepherdbiblecommunity@gmail.com so we can help investigate. We apologize for the inconvenience and appreciate your patience while we work on a permanent fix.`,`We are also aware of some remaining lag, crashes, and other issues, and we are working to address them. Please be patient with us, as some fixes may take time. Our development time is shared with our daily work and our mission to personally share the Gospel with others. We may not always be able to fix every issue immediately, but we remain committed to improving the app step by step. We hope that, in the coming days and months, these improvements will make the app faster, more stable, and more useful for everyone. Thank you for your patience and for being part of this mission with us.`,`Fixed major issues causing the app to crash on launch, as reported by users in reviews. (September 7, 2026)`,`Fixed Reader crashes and improved restoration of the last opened Bible book and chapter.`,`Fixed the main window automatically opening on Windows startup.`,`Added document printing capabilities.`,`Added support for daily verse notifications.`,`Fixed an issue where some music sheets were not displayed correctly.`,`YouTube audio playback now remembers and restores the last listening position.`,`Verse numbers now automatically follow the active theme color for improved visual consistency.`,`Added support for multiple overlay windows, allowing Bible Hub and other tools to remain open simultaneously.`,`General performance and stability enhancements.`,`Fixed several issues related to overlay window activation and reuse.`,`Resolved cases where previously opened overlay windows were not properly released after closing.`],type:`improvement`},{id:`v1.1.389.0`,version:`1.1.389.0`,date:`2026-06-15`,title:`Fixes & Stability`,description:`Fixes and general stability improvements.`,platforms:[`windows`],changes:[`Fixed an issue where the app could crash when selecting themes and Quizzes.`,`General performance and stability enhancements.`],type:`fix`},{id:`v1.1.387.0`,version:`1.1.387.0`,date:`2026-06-10`,title:`Major Internal Modernization`,description:`Major internal modernization work and preparation for future features.`,platforms:[`windows`],changes:[`Major internal modernization work has begun across the application.`,`Comparison results now properly adapt according to the selected Bible version.`,`Numerous stability improvements and codebase refactoring for future features.`,`Large-scale framework and architecture upgrades are underway.`,`Preparations for improved performance, maintainability, and long-term support.`,`Foundation work completed for upcoming advanced Bible study tools and integrations.`,`The Notebook feature is currently undergoing major revisions and may contain bugs.`,`Google Drive synchronization is still being redesigned and remains incomplete.`,`Major Platform Upgrade: The application is being migrated from UWP to WinUI 3 and newer Microsoft technologies. This transition will enable a more modern user experience, improved performance, and better support for future features.`,`Significant UI and user experience redesigns are planned across multiple pages, including the Projector and Notebook systems.`,`Full notebook exporting, improved backup options, and enhanced cloud synchronization.`,`Integration with Bible study resources such as Blue Letter Bible, Bible Hub, and Wikipedia for additional historical and reference information.`,`New Bible study tools, productivity features, and advanced research capabilities are planned as part of future Pro and premium enhancements.`,`Daily verse notifications and background services are being evaluated as Microsoft continues to improve support for modern desktop applications.`,`Long-term plans include support for macOS and iOS, allowing users to access their Bible studies across multiple platforms.`,`This release marks the beginning of a major modernization effort. While some features may temporarily experience limitations during the transition, the goal is to deliver a faster, more capable, and feature-rich Bible study platform in the coming releases.`],type:`improvement`},{id:`v1.1.383.0`,version:`1.1.383.0`,date:`2026-05-29`,title:`Comparison Improvements`,description:`Comparison improvements and ongoing modernization work.`,platforms:[`windows`],changes:[`Comparison now adjusts according to the selected Bible version.`,`General enhancements.`,`The Notebook feature has several known bugs and requires additional development time.`,`Google Drive synchronization is incomplete and requires further changes.`,`Redesign the Projector page to separate text styling controls.`,`Add complete notebook exporting.`,`Continue UI design improvements.`,`Integration of Blue Letter Bible for Strong's Numbers and word studies.`,`Integration of Bible Hub for Interlinear Bible tools.`,`Integration of Wikipedia for additional historical and reference information.`,`Migration to the latest technologies and frameworks, including WinUI, for a more advanced application experience.`,`Evaluate modern background-task support for daily verse notifications.`,`Potential future support for Apple platforms, including macOS and iOS.`],type:`improvement`},{id:`v1.1.382.0`,version:`1.1.382.0`,date:`2025-12-23`,title:`Minor Fixes`,description:`Minor fixes and general enhancements.`,platforms:[`windows`],changes:[`Resolved an issue where embedded hymn YouTube videos were not working.`,`General enhancements.`,`The Notebook feature has several known bugs and requires additional development time.`,`Google Drive synchronization is incomplete and requires further changes.`,`Redesign the Projector page to separate text styling controls.`,`Add complete notebook exporting.`,`Continue UI design improvements.`,`Integration of Blue Letter Bible for Strong's Numbers and word studies.`,`Integration of Bible Hub for Interlinear Bible tools.`,`Integration of Wikipedia for additional historical and reference information.`,`Migration to newer technologies and frameworks, including WinUI.`,`Evaluate background services for daily verse notifications.`,`Potential future support for Apple platforms, including macOS and iOS.`],type:`fix`},{id:`v1.1.378.0`,version:`1.1.378.0`,date:`2025-07-24`,title:`Hymns & Changelog Fixes`,description:`Fixed changelog and hymns controls.`,platforms:[`windows`],changes:[`Fixed changelog buttons.`,`Fixed hymns buttons.`,`General enhancements.`,`The Notebook feature has several known bugs and requires additional development time.`,`Google Drive synchronization is incomplete and requires further changes.`,`Redesign the Projector page to separate text styling controls.`,`Add complete notebook exporting.`,`Continue UI design improvements.`,`Integration of Blue Letter Bible for Strong's Numbers and word studies.`,`Integration of Bible Hub for Interlinear Bible tools.`,`Integration of Wikipedia for additional information.`,`Migration to newer technologies and frameworks, including WinUI.`,`Potential future support for Apple platforms, including macOS and iOS.`],type:`fix`}],ve=[{id:`v78-0-0-124`,version:`78.0.0.124`,date:`2026-10-08`,title:`Daily Verse Widget and Search Improvements`,description:`Introduces a home-screen Daily Verse widget alongside Bible search improvements, import reliability fixes, and interface enhancements.`,platforms:[`android`],changes:[`New: Add a Daily Verse widget to your Android home screen for quick access to Scripture each day.`,`New daily verse reminder (Android): a notification, or a modern floating card if "Display over other apps" is allowed, every morning at 8:00.`,`Faster Bible search powered by a full-text index (FTS5) across all downloaded translations.`,`Search now also matches book names, references and translation codes.`,`Reference search: type e.g. "Gen 2:5", "Genesis 4:6", "Gen 2:5-7" or "Gen 2:6; Matt 4:5".`,`Last word of a search matches as a prefix ("at first go" finds God, good, gospel...).`,`Existing search data is upgraded and re-indexed automatically; nothing is deleted.`,`Fixed search returning no results.`,`Fixed verse numbers shown wrong for some translations (chapter and verse decoding).`,`Fixed imported translations sometimes failing to open (SQLITE_CANTOPEN): safer ZIP extraction and database file selection.`,`Import file page now shows progress and notifies you when done or failed.`,`Translations list loads instantly from local data; it refreshes online on first start or when you tap refresh.`,`Modern toast and snackbar messages.`],type:`feature`},{id:`v78-0-0-119`,version:`78.0.0.119`,date:`2026-10-06`,title:`Daily Verse Reminders and Faster Search`,description:`Adds daily verse reminders and improves Bible search, translation imports, and loading performance.`,platforms:[`android`],changes:[`New daily verse reminder (Android): a notification, or a modern floating card if "Display over other apps" is allowed, every morning at 8:00.`,`Faster Bible search powered by a full-text index (FTS5) across all downloaded translations.`,`Search now also matches book names, references and translation codes.`,`Reference search: type e.g. "Gen 2:5", "Genesis 4:6", "Gen 2:5-7" or "Gen 2:6; Matt 4:5".`,`Last word of a search matches as a prefix ("at first go" finds God, good, gospel...).`,`Existing search data is upgraded and re-indexed automatically; nothing is deleted.`,`Fixed search returning no results.`,`Fixed verse numbers shown wrong for some translations (chapter and verse decoding).`,`Fixed imported translations sometimes failing to open (SQLITE_CANTOPEN): safer ZIP extraction and database file selection.`,`Import file page now shows progress and notifies you when done or failed.`,`Translations list loads instantly from local data; it refreshes online on first start or when you tap refresh.`,`Modern toast and snackbar messages.`],type:`feature`},{id:`v78-0-0-113`,version:`78.0.0.113`,date:`2025-07-11`,title:`Minor Fixes`,description:`Includes minor bug fixes and stability improvements.`,platforms:[`android`],changes:[`Minor fixed.`],type:`fix`},{id:`v78-0-0-109`,version:`78.0.0.109`,date:`2025-03-31`,title:`Bible Quiz Mode`,description:`Introduces a quiz mode designed to make Bible questions fun and engaging for children.`,platforms:[`android`],changes:[`Added a quiz mode, perfect for fun questions for kids.`],type:`feature`},{id:`v78-0-0-107`,version:`78.0.0.107`,date:`2025-01-13`,title:`Next Chapter Navigation Fix`,description:`Fixes an issue preventing navigation to the next chapter.`,platforms:[`android`],changes:[`Next chapter not works fixed`,`... underdevelopment`],type:`fix`},{id:`v78-0-0-106`,version:`78.0.0.106`,date:`2025-01-10`,title:`System Audio Player`,description:`Adds a system audio player.`,platforms:[`android`],changes:[`Added sytem audio player...`,`... underdevelopment`],type:`feature`},{id:`v78-0-0-105`,version:`78.0.0.105`,date:`2025-01-01`,title:`Minor Improvements`,description:`Includes minor improvements and ongoing development.`,platforms:[`android`],changes:[`Minor...`,`... underdevelopment`],type:`improvement`},{id:`v78-0-0-104`,version:`78.0.0.104`,date:`2024-12-31`,title:`Bible Loading Fixes`,description:`Includes an attempt to fix an issue where the Bible fails to load.`,platforms:[`android`],changes:[`Try to fixed Bible not loaded...`,`... underdevelopment`],type:`fix`},{id:`v78-0-0-101`,version:`78.0.0.101`,date:`2024-12-25`,title:`Translation Download Fix`,description:`Fixes issues with downloading Bible translations.`,platforms:[`android`],changes:[`Fixed downloading translations`,`... underdevelopment`],type:`fix`},{id:`v78-0-0-100`,version:`78.0.0.100`,date:`2024-12-24`,title:`Hymns Loading Fix`,description:`Fixes a loading issue affecting hymns.`,platforms:[`android`],changes:[`Hymns stuck at loading, fixed.`,`... underdevelopment`],type:`fix`},{id:`v78-0-0-98`,version:`78.0.0.98`,date:`2024-12-23`,title:`Database and Hymn Title Fixes`,description:`Addresses database issues and fixes hymn titles not loading.`,platforms:[`android`],changes:[`Major fixed for wrong databases`,`Fixed issue with hymn titles not loading.`,`... underdevelopment`],type:`fix`},{id:`v78-0-0-97`,version:`78.0.0.97`,date:`2024-12-22`,title:`Minor Fixes and Hymn Editing`,description:`Includes minor fixes and ongoing work on adding or editing hymns in the local database.`,platforms:[`android`],changes:[`Minor fixed`,`Add or edit hymns to local database.`,`... underdevelopment`],type:`improvement`},{id:`v78-0-0-96`,version:`78.0.0.96`,date:`2024-12-19`,title:`Minor Fixes`,description:`Includes minor fixes and ongoing development.`,platforms:[`android`],changes:[`Minor fixed`,`... underdevelopment`],type:`fix`},{id:`v78-0-0-95`,version:`78.0.0.95`,date:`2024-12-08`,title:`Verse Selection Highlight`,description:`Adds highlighting for selected verses, with automatic scrolling noted as a planned improvement.`,platforms:[`android`],changes:[`Added higlight when verse selected`,`... AUTO Scroll to verse coming soon...`],type:`feature`},{id:`v78-0-0-94`,version:`78.0.0.94`,date:`2024-12-07`,title:`Additional Improvements`,description:`Includes additional app improvements.`,platforms:[`android`],changes:[`Additional improvements`],type:`improvement`},{id:`v78-0-0-93`,version:`78.0.0.93`,date:`2024-12-07`,title:`Font Fixes`,description:`Fixes minor font-related issues.`,platforms:[`android`],changes:[`Fixed minor fonts`],type:`fix`},{id:`v78-0-0-83`,version:`78.0.0.83`,date:`2023-07-29`,title:`Colored Icons and Upcoming Features`,description:`Adds additional icon colors and lists planned audio selection and cross-reference features.`,platforms:[`android`],changes:[`Additional colorise icons`,`COMING SOON: -------------------------`,`AUDIO SELECTION`,`LONG PRESS FOR CROSS REFERENCES`],type:`improvement`},{id:`v78-0-0-82`,version:`78.0.0.82`,date:`2023-07-28`,title:`Audio Playback Fixes`,description:`Fixes chapter navigation and audio word updates, and adds a basic online audio player.`,platforms:[`android`],changes:[`Crash on next chapter after playing bible audio`,`Fixed, not updating words in audio`,`Add simple online audio player`,`NOTES: -------------------------`,`AUDIO SELECTION, WILL FIX SOON!`],type:`feature`},{id:`v78-0-0-81`,version:`78.0.0.81`,date:`2023-07-27`,title:`Startup and Rendering Fixes`,description:`Fixes missing verses on startup and improves verse rendering with chapter transition animations.`,platforms:[`android`],changes:[`Fixed issue with no verses rendered on startup`,`Improved performance for verse rendering`,`Animation added when new chapter rendered`,`NOTES: -------------------------`,`AUDIO SELECTION, WILL FIX SOON!`],type:`improvement`},{id:`v78-0-0-80`,version:`78.0.0.80`,date:`2023-07-27`,title:`Verse Navigation and Audio Notes`,description:`Fixes verse scrolling and chapter navigation while improving verse rendering performance.`,platforms:[`android`],changes:[`Fixed issue with scrolling to verse numbers`,`Fixed bug causing app to jump to other chapters when tapping on a chapter`,`Improved performance for verse rendering`,`NOTES: -------------------------`,`AUDIO SELECTION, WILL FIX SOON!`],type:`fix`}],ye=[{id:`v1.1.420.0`,version:`1.1.420.0`,date:`2026-09-21`,title:`Shepherd Bible Improvements`,description:`Continued improvements to Shepherd Bible with a focus on reliability, Bible study, and a better reading experience.`,platforms:[`web`],changes:[`Improved application stability`,`Improved handling of Bible data and local storage`,`Improved Bible search reliability`,`Improved notes, highlights, and bookmarks handling`,`Improved error handling for damaged or unavailable local data`,`Continued performance improvements`],type:`improvement`},{id:`v1.1.416.0`,version:`1.1.416.0`,date:`2026-09-XX`,title:`Bible Study Improvements`,description:`Improvements to Bible reading and personal study features.`,platforms:[`web`],changes:[`Improved Bible reading experience`,`Improved Bible search`,`Improved notes and annotation handling`,`Improved highlights and bookmarks`,`Improved application stability`],type:`improvement`},{id:`v1.1.405.0`,version:`1.1.405.0`,date:`2026-09-XX`,title:`Stability and Compatibility`,description:`Focused on compatibility, stability, and improving the reliability of Bible study data.`,platforms:[`web`],changes:[`Improved application compatibility`,`Improved local data handling`,`Improved recovery from database-related problems`,`Improved error handling`,`Fixed several stability issues`],type:`fix`},{id:`community`,version:`Community`,date:`2026-09-21`,title:`Shepherd Bible Community`,description:`Introducing the Shepherd Bible community experience, created to give Bible readers a place to connect, encourage one another, and share their journey.`,platforms:[`web`],changes:[`Added Bible discussion areas`,`Added encouragement posts`,`Added testimony sharing`,`Added community questions`,`Added replies and conversations`,`Added post and reply interactions`,`Added community reporting tools`],type:`feature`},{id:`verse-image`,version:`Verse Image Creator`,date:`2026-09-21`,title:`Create Scripture Images`,description:`A new creative experience for turning Bible verses into beautiful shareable images.`,platforms:[`web`],changes:[`Added Bible verse image editor`,`Added customizable text`,`Added font controls`,`Added color controls`,`Added background customization`,`Added layout controls`,`Added visual effects`,`Added templates`,`Added PNG export`,`Added undo and redo support`],type:`feature`}];typeof document<`u`&&document.addEventListener(`click`,e=>{let t=e.target.closest(`.platform-tab`);if(!t)return;document.querySelectorAll(`.platform-tab`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`);let n=t.getAttribute(`data-filter`),r=0;document.querySelectorAll(`.changelog-card`).forEach(e=>{let t=e.getAttribute(`data-platforms`)?.split(`,`)||[];n===`all`||t.includes(n)?(e.style.display=`block`,r++):e.style.display=`none`});let i=document.getElementById(`changelog-empty`);i&&(i.style.display=r===0?`block`:`none`)});var be={render:()=>{let e=[..._e,...ve,...ye].sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()),t={all:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,windows:`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M0,0 H11.4 V11.4 H0 V0 M12.6,0 H24 V11.4 H12.6 V0 M0,12.6 H11.4 V24 H0 V12.6 M12.6,12.6 H24 V24 H12.6 V12.6" /></svg>`,android:`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.76 4.84 5.2 2.14a.5.5 0 0 1 .86-.5l1.58 2.74a8.9 8.9 0 0 1 8.72 0l1.58-2.74a.5.5 0 1 1 .86.5l-1.56 2.7A8.4 8.4 0 0 1 21 11H3a8.4 8.4 0 0 1 3.76-6.16ZM7 7.5a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm10 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM3 12h18v6a2 2 0 0 1-2 2h-1v2a1.5 1.5 0 0 1-3 0v-2H9v2a1.5 1.5 0 0 1-3 0v-2H5a2 2 0 0 1-2-2v-6Zm-2 1.5a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0v-4Zm19 0a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0v-4Z"/>
</svg>`,ios:`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.35 10.83c-.03-2.6 2.13-3.87 2.23-3.92-1.2-1.76-3.07-2-3.7-2.03-1.58-.16-3.08.93-3.9.93-.8 0-2.04-.9-3.37-.88-1.72.02-3.32.99-4.2 2.53-1.8 3.12-.46 7.73 1.28 10.25.86 1.23 1.87 2.6 3.16 2.55 1.24-.05 1.74-.8 3.25-.8s1.97.8 3.27.78c1.33-.03 2.18-1.25 3.03-2.48.98-1.42 1.38-2.8 1.4-2.87-.03-.02-2.7-1.04-2.7-3.66zm-2.07-5.96c.7-.85 1.18-2.02 1.05-3.18-1.01.04-2.22.67-2.93 1.5-.63.75-1.2 1.95-1.05 3.08 1.13.09 2.23-.55 2.93-1.4z"/></svg>`,linux:`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,web:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`};return`
      <div class="section">
        <div class="container" style="max-width: 800px;">
          
          <div class="text-center" style="margin-bottom: 40px;">
            <h1 style="margin-bottom: 16px;">Changelog & Updates</h1>
            <p style="color: var(--color-text-muted); font-size: 1.125rem;">
              Track continuous updates, fixes, and feature additions for Shepherd Bible across all platforms.
            </p>
          </div>

          <div class="platform-tabs" id="changelog-filters">
            <button class="platform-tab active" data-filter="all">
              <span class="tab-icon">${t.all}</span>
              All Platforms
            </button>
            <button class="platform-tab" data-filter="windows">
              <span class="tab-icon">${t.windows}</span>
              Windows
            </button>
            <button class="platform-tab" data-filter="android">
              <span class="tab-icon">${t.android}</span>
              Android
            </button>
            <button class="platform-tab" data-filter="ios">
              <span class="tab-icon">${t.ios}</span>
              iOS / Mac
            </button>
            <button class="platform-tab" data-filter="linux">
              <span class="tab-icon">${t.linux}</span>
              Linux
            </button>
            <button class="platform-tab" data-filter="web">
              <span class="tab-icon">${t.web}</span>
              Web
            </button>
          </div>

          <div class="changelog-list" id="changelog-list">
            ${e.map(e=>`
              <article class="changelog-card" data-platforms="${e.platforms?e.platforms.join(`,`):`all`}">
                <div class="changelog-header">
                  <div class="version-group">
                    <span class="version-tag">${e.version}</span>
                    <span class="type-badge badge-${e.type}">${e.type}</span>
                    <div class="platform-indicators">
                      ${(e.platforms||[]).map(e=>`
                        <span class="indicator-icon" title="${e}">${t[e]||``}</span>
                      `).join(``)}
                    </div>
                  </div>
                  <time class="release-date">${e.date}</time>
                </div>

                <h2 class="changelog-title">${e.title}</h2>
                <p class="changelog-description">${e.description}</p>

                <div class="changelog-changes">
                  <h3>What's New</h3>
                  <ul>
                    ${e.changes.map(e=>`<li>${e}</li>`).join(``)}
                  </ul>
                </div>
              </article>
            `).join(``)}
          </div>

          <!-- Empty State -->
          <div id="changelog-empty" style="display: none; text-align: center; padding: 60px 20px; color: var(--color-text-muted); background: var(--color-surface); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
             <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px; opacity: 0.5;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
             <h3 style="margin-bottom: 8px; font-size: 1.25rem; color: var(--color-text);">No updates yet</h3>
             <p>There are no changelog entries for this platform at the moment. Check back soon!</p>
          </div>

        </div>
      </div>
    `}},xe={render:()=>`
    <div class="section">
      <div class="container" style="max-width: 800px;">
        
        <div class="text-center" style="margin-bottom: 64px;">
          <h1 style="margin-bottom: 24px;">About Shepherd Bible</h1>
          <p class="about-lead">
            Shepherd Bible is a digital space designed for peace, focus, and connection. We believe that reading Scripture should be a distraction-free experience that brings clarity to your day.
          </p>
        </div>

        <div class="about-content">
          <h2>Our Purpose</h2>
          <p>
            In a world of constant notifications and digital noise, Shepherd Bible was created to be a quiet retreat. 
            Our application focuses on elegant typography, intuitive design, and essential study tools so you can focus entirely on the Word.
          </p>

          <h2>Development Philosophy</h2>
          <p>
            We are building this application with a simple philosophy: <strong>craftsmanship and care</strong>. 
            Instead of rushing to add every possible feature, we prioritize stability, accessibility, and a beautiful user interface. 
            Every update is thoughtfully designed to enhance your reading experience without overwhelming the screen.
          </p>

          <div class="grid grid-2 about-cards">
            <div class="card">
              <h3>The Community Mission</h3>
              <p>"Share a piece of your journey to inspire another." We envision a community where readers can encourage one another, share insights, and help shape the future of the application together.</p>
            </div>
            <div class="card">
              <h3>Supported Platforms</h3>
              <p>Shepherd Bible is currently in active development to bring you the best experience across your devices.</p>
              <p class="todo-note"><em>(TODO: Update with official iOS/Android App Store and Web release links once confirmed and published.)</em></p>
            </div>
          </div>

          <h2>How You Can Help</h2>
          <p>
            Shepherd Bible grows through the insights of its readers. Whether you have found a bug, have an idea for a new feature, or simply want to share a testimony of how reading the Word has helped you, your voice matters.
          </p>
          
          <div class="action-container">
            <a href="#/community" class="btn btn-primary">Visit the Community</a>
            <a href="#/faq" class="btn btn-secondary">Read the FAQ</a>
          </div>
        </div>

      </div>
    </div>
    
    <style>
      .about-lead {
        font-size: 1.25rem;
        color: var(--color-text-muted);
        line-height: 1.8;
      }
      
      .about-content h2 {
        margin-top: 48px;
        margin-bottom: 16px;
        font-size: 1.75rem;
      }
      
      .about-content p {
        font-size: 1.125rem;
        color: var(--color-text);
        margin-bottom: 24px;
      }
      
      .about-cards {
        margin: 48px 0;
      }
      
      .about-cards .card {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .about-cards h3 {
        font-family: var(--font-sans);
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
      }
      
      .about-cards p {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        margin: 0;
      }

      .todo-note {
        margin-top: auto !important;
        font-size: 0.85rem !important;
        background: var(--color-surface-muted);
        padding: 8px 12px;
        border-radius: 6px;
      }
      
      .action-container {
        margin-top: 40px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }

      @media (max-width: 600px) {
        .action-container {
          justify-content: stretch;
          flex-direction: column;
        }
        .action-container .btn {
          width: 100%;
        }
      }
    </style>
  `},Se={render:()=>`
    <div class="section">
      <div class="container" style="max-width: 860px;">
        
        <!-- Header -->
        <div class="text-center" style="margin-bottom: 48px;">
          <h1 style="margin-bottom: 16px;">Privacy Policy & Terms of Service</h1>
          <p style="color: var(--color-text-muted); font-size: 1.1rem;">
            Last updated: October 2026
          </p>

          <!-- Toggle Sub-navigation -->
          <div class="policy-nav" style="margin-top: 32px;">
            <button class="policy-tab active" data-target="privacy-section">Privacy Policy</button>
            <button class="policy-tab" data-target="terms-section">Terms of Service</button>
          </div>
        </div>

        <!-- Privacy Policy Content -->
        <article id="privacy-section" class="policy-content card">
          <h2>Privacy Policy</h2>
          <p class="lead-text">
            At Shepherd Bible, we believe your spiritual journey and personal Bible study notes should remain private. We are committed to protecting your personal information and being transparent about our data practices.
          </p>

          <hr class="divider" />

          <h3>1. Offline-First Data Architecture</h3>
          <p>
            Shepherd Bible applications (including <em>"Bible - Multi Version"</em> on Windows, mobile, and desktop platforms) operate as offline-first software:
          </p>
          <ul>
            <li><strong>Bible Notes, Highlights, & Bookmarks:</strong> Stored locally on your personal device using local storage or a local SQLite database. We do not transmit or store your personal study notes on external servers in the current static version.</li>
            <li><strong>Audio & Scripture Downloads:</strong> Bible text translations and audio files downloaded within the app are stored locally on your device storage for offline access.</li>
          </ul>

          <h3>2. Website Data Collection</h3>
          <p>
            Our website (hosted on GitHub Pages) is a static community and informational website:
          </p>
          <ul>
            <li><strong>Theme Preference:</strong> We store a small item in your browser’s <code>localStorage</code> (<code>sb-theme</code>) strictly to remember your choice between light and dark modes.</li>
            <li><strong>No Tracking Cookies:</strong> We do not use third-party tracking cookies, invasive advertising scripts, or cross-site telemetry tools.</li>
            <li><strong>Server Logs:</strong> As a static site hosted via GitHub Pages, basic request logs (such as IP addresses and browser headers) may be automatically logged by GitHub infrastructure for security and operational diagnostics in accordance with <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener">GitHub's Privacy Statement</a>.</li>
          </ul>

          <h3>3. Third-Party App Stores</h3>
          <p>
            When downloading Shepherd Bible through app storefronts (such as the Microsoft Store, Google Play Store, or Apple App Store), telemetry related to app installations, crashes, or updates is governed by the privacy policy of the respective store platform.
          </p>

          <h3>4. Future Interactive Community Features</h3>
          <p>
            When interactive community accounts, cloud synchronization, or forum discussions are integrated in future updates, we will update this policy and request your explicit consent before collecting account credentials or sync data.
          </p>

          <h3>5. Contact Us</h3>
          <p>
            If you have questions regarding this Privacy Policy or data privacy, please reach out through our <a href="#/community">Community Hub</a> or open an inquiry on our official GitHub repository.
          </p>
        </article>

        <!-- Terms of Service Content -->
        <article id="terms-section" class="policy-content card" style="display: none;">
          <h2>Terms of Service</h2>
          <p class="lead-text">
            By downloading, installing, or using the Shepherd Bible website or application ("Bible - Multi Version"), you agree to be bound by these Terms of Service.
          </p>

          <hr class="divider" />

          <h3>1. Use of Service</h3>
          <p>
            Shepherd Bible is provided for personal, educational, and non-commercial Bible study and community growth. You agree to use the application and website in accordance with all applicable local, national, and international laws.
          </p>

          <h3>2. Scripture Translations & Intellectual Property</h3>
          <ul>
            <li><strong>Public Domain Translations:</strong> Public domain Bible versions (such as King James Version - KJV, American Standard Version - ASV, World English Bible - WEB) are distributed freely according to their respective open licensing models.</li>
            <li><strong>Copyrighted Translations:</strong> Any copyrighted translation included now or in future updates is used under license or explicit authorization from the respective publisher.</li>
            <li><strong>Application Software:</strong> The visual interface, branding, logo, custom code, and software design of Shepherd Bible remain the intellectual property of the project creators.</li>
          </ul>

          <h3>3. Community Guidelines & Conduct</h3>
          <p>
            When participating in community discussions, feature requests, or testimonies:
          </p>
          <ul>
            <li>Treat fellow community members with dignity, respect, and grace.</li>
            <li>Do not post hateful, defamatory, obscene, or harassing content.</li>
            <li>Do not post unauthorized commercial solicitations, spam, or malicious links.</li>
          </ul>

          <h3>4. Disclaimer of Warranties</h3>
          <p>
            Shepherd Bible is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind, whether express or implied. While we strive for absolute accuracy and uptime, we do not guarantee uninterrupted service or error-free software execution.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, Shepherd Bible and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use the software or website.
          </p>

          <h3>6. Revisions to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. Updated terms will be posted directly to this page with an updated revision date.
          </p>
        </article>

      </div>
    </div>

    <style>
      .policy-nav {
        display: inline-flex;
        gap: 8px;
        background: var(--color-surface-muted);
        padding: 6px;
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
      }

      .policy-tab {
        background: none;
        border: none;
        padding: 10px 24px;
        border-radius: var(--radius-md);
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--color-text-muted);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .policy-tab.active {
        background: var(--color-surface);
        color: var(--color-primary);
        font-weight: 600;
        box-shadow: var(--shadow-sm);
      }

      .policy-content {
        padding: 48px;
        border-radius: var(--radius-lg);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
      }

      .policy-content h2 {
        font-size: 2rem;
        margin-bottom: 12px;
      }

      .lead-text {
        font-size: 1.1rem;
        color: var(--color-text-muted);
        line-height: 1.7;
      }

      .divider {
        border: none;
        border-top: 1px solid var(--color-border);
        margin: 32px 0;
      }

      .policy-content h3 {
        font-family: var(--font-sans);
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--color-text);
        margin: 32px 0 12px;
      }

      .policy-content p, .policy-content li {
        font-size: 1rem;
        color: var(--color-text);
        line-height: 1.7;
      }

      .policy-content ul {
        margin: 12px 0 24px 24px;
      }

      .policy-content li {
        margin-bottom: 8px;
      }

      .policy-content code {
        background: var(--color-surface-muted);
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.875rem;
        color: var(--color-primary);
      }

      @media (max-width: 600px) {
        .policy-content {
          padding: 24px;
        }
        .policy-nav {
          width: 100%;
          justify-content: stretch;
        }
        .policy-tab {
          flex: 1;
          padding: 8px 12px;
          font-size: 0.85rem;
        }
      }
    </style>
  `,mount:()=>{let e=document.querySelectorAll(`.policy-tab`),t=document.querySelectorAll(`.policy-content`);e.forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-target`);e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t.forEach(e=>{e.id===r?e.style.display=`block`:e.style.display=`none`})})})}};function Ce(){let e=`elem_verse_text`;return{width:1080,height:1080,padding:60,preset:`square`,background:{type:`gradient`,color:`#2C1B18`,gradient:{type:`linear`,colors:[`#3D1E18`,`#1A0B08`],angle:135},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.2,blur:0},elements:[{id:e,type:`text`,text:`“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.”`,fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,letterSpacing:0,lineHeight:1.4,textTransform:`none`,color:`#FAF7F2`,gradient:{type:`linear`,colors:[`#FAF7F2`,`#FAF7F2`],angle:90},outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0, 0, 0, 0.4)`,shadowBlur:8,shadowOffsetX:2,shadowOffsetY:4,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0,x:90,y:360,width:900,height:300,rotation:0,opacity:1,isVerseText:!0},{id:`elem_verse_ref`,type:`text`,text:`JOHN 3:16`,fontFamily:`Montserrat`,fontSize:26,fontWeight:`600`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,letterSpacing:4,lineHeight:1.2,textTransform:`uppercase`,color:`#D4AF37`,gradient:{type:`linear`,colors:[`#D4AF37`,`#D4AF37`],angle:90},outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0, 0, 0, 0.3)`,shadowBlur:4,shadowOffsetX:1,shadowOffsetY:2,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0,x:90,y:720,width:900,height:60,rotation:0,opacity:1,isReference:!0}],selected_element_id:e}}var we=class{listeners=new Map;on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n)),n.add(t)}off(e,t){let n=this.listeners.get(e);n&&(n.delete(t),n.size===0&&this.listeners.delete(e))}emit(e,t){let n=this.listeners.get(e);if(n)for(let e of n)e(t)}removeAll(){this.listeners.clear()}},Te=class{undoStack=[];redoStack=[];maxHistorySize;constructor(e=50){this.maxHistorySize=e}deepClone(e){if(typeof structuredClone==`function`)try{return structuredClone(e)}catch{}return JSON.parse(JSON.stringify(e))}push(e){let t=this.deepClone(e);this.undoStack.push(t),this.undoStack.length>this.maxHistorySize&&this.undoStack.shift(),this.redoStack=[]}undo(e){if(!this.canUndo())return null;let t=this.undoStack.pop();return this.redoStack.push(this.deepClone(e)),this.deepClone(t)}redo(e){if(!this.canRedo())return null;let t=this.redoStack.pop();return this.undoStack.push(this.deepClone(e)),this.deepClone(t)}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}clear(){this.undoStack=[],this.redoStack=[]}},Ee=class{imageCache=new Map;async render(e,t,n,r){if(e.save(),r.type===`solid`)e.fillStyle=r.color||`#1A1A1A`,e.fillRect(0,0,t,n);else if(r.type===`gradient`){let i=r.gradient,a;if(i.type===`radial`){let r=t/2,i=n/2,o=Math.max(t,n)/1.2;a=e.createRadialGradient(r,i,0,r,i,o)}else{let r=(i.angle||0)*Math.PI/180,o=t/2-Math.cos(r)*t/2,s=n/2-Math.sin(r)*n/2,c=t/2+Math.cos(r)*t/2,l=n/2+Math.sin(r)*n/2;a=e.createLinearGradient(o,s,c,l)}let o=i.colors&&i.colors.length>=2?i.colors:[`#3D1E18`,`#1A0B08`];o.forEach((e,t)=>{a.addColorStop(t/(o.length-1),e)}),e.fillStyle=a,e.fillRect(0,0,t,n)}else if(r.type===`image`&&r.imageUrl){e.fillStyle=r.color||`#000000`,e.fillRect(0,0,t,n);try{let i=await this.loadImage(r.imageUrl);e.save(),r.blur>0&&(e.filter=`blur(${r.blur}px)`),e.globalAlpha=Math.max(0,Math.min(1,r.imageOpacity??1));let a=i.width/i.height,o=t/n,s=t,c=n,l=0,u=0;a>o?(s=n*a,l=(t-s)/2):(c=t/a,u=(n-c)/2),e.drawImage(i,l,u,s,c),e.restore()}catch(e){console.warn(`Failed to render background image:`,e)}}r.overlayOpacity>0&&r.overlayColor&&(e.save(),e.globalAlpha=Math.max(0,Math.min(1,r.overlayOpacity)),e.fillStyle=r.overlayColor,e.fillRect(0,0,t,n),e.restore()),e.restore()}loadImage(e){return this.imageCache.has(e)?Promise.resolve(this.imageCache.get(e)):new Promise((t,n)=>{let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{this.imageCache.set(e,r),t(r)},r.onerror=e=>n(e),r.src=e})}clearCache(){this.imageCache.clear()}},M=class{static applyTextShadow(e,t){t.shadowBlur>0||t.shadowOffsetX!==0||t.shadowOffsetY!==0?(e.shadowColor=t.shadowColor||`rgba(0, 0, 0, 0.5)`,e.shadowBlur=t.shadowBlur||0,e.shadowOffsetX=t.shadowOffsetX||0,e.shadowOffsetY=t.shadowOffsetY||0):this.clearShadow(e)}static applyTextGlow(e,t){let n=t.glowColor,r=t.glowBlur??0,i=Math.max(0,Math.min(1,t.glowIntensity??0));if(!n||n===`transparent`||r<=0||i<=0){this.clearShadow(e);return}e.shadowColor=this.withAlpha(n,i),e.shadowBlur=r,e.shadowOffsetX=0,e.shadowOffsetY=0}static clearShadow(e){e.shadowColor=`transparent`,e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}static drawTextOutline(e,t,n,r,i){i.outlineWidth>0&&i.outlineColor&&i.outlineColor!==`transparent`&&(e.save(),e.strokeStyle=i.outlineColor,e.lineWidth=i.outlineWidth*2,e.lineJoin=`round`,e.lineCap=`round`,e.miterLimit=2,e.strokeText(t,n,r),e.restore())}static drawRoundedRect(e,t,n,r,i,a){let o=Math.max(0,Math.min(a,Math.min(r/2,i/2)));e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()}static withAlpha(e,t){let n=Math.max(0,Math.min(1,t));if(e.startsWith(`#`)){let t=e.substring(1);if(t.length===3&&(t=t.split(``).map(e=>e+e).join(``)),t.length===6)return`rgba(${parseInt(t.substring(0,2),16)}, ${parseInt(t.substring(2,4),16)}, ${parseInt(t.substring(4,6),16)}, ${n})`}if(e.startsWith(`rgba(`))return e.replace(/rgba\(([^)]+)\)/,(e,t)=>{let r=t.split(`,`).map(e=>e.trim());return`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${n})`});if(e.startsWith(`rgb(`)){let t=e.substring(4,e.length-1).split(`,`).map(e=>e.trim());return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${n})`}return e}static withTransform(e,t,n,r,i,a,o,s){e.save(),e.globalAlpha=Math.max(0,Math.min(1,o));let c=t+r/2,l=n+i/2;e.translate(c,l),a!==0&&e.rotate(a*Math.PI/180),e.translate(-c,-l),s(),e.restore()}},De=class{render(e,t){M.withTransform(e,t.x,t.y,t.width,t.height,t.rotation,t.opacity,()=>{this.drawTextContent(e,t)})}fitToText(e,t,n){let r=t.padding??0,i=t.fontStyle===`italic`?`italic `:``;e.save(),e.font=`${i}${t.fontWeight||`400`} ${t.fontSize}px "${t.fontFamily}", serif, sans-serif`,`letterSpacing`in e&&(e.letterSpacing=`${t.letterSpacing||0}px`);let a=this.applyTextTransform(t.text,t.textTransform),o=this.wrapText(e,a,Math.max(1,t.width-r*2)),s=o.length?Math.max(...o.map(t=>e.measureText(t).width)):0;e.restore();let c=t.fontSize*(t.lineHeight||1.3),l=Math.max(1,o.length)*c+r*2,u=t.y+t.height/2;if(t.height=l,t.y=u-l/2,n&&s>0){let e=Math.min(t.width,s+r*2+4),n=t.x+t.width/2;t.width=e,t.x=n-e/2}}drawTextContent(e,t){e.save(),e.font=`${t.fontStyle===`italic`?`italic `:``}${t.fontWeight||`400`} ${t.fontSize}px "${t.fontFamily}", serif, sans-serif`,e.textAlign=t.textAlign||`center`,e.textBaseline=`middle`,`letterSpacing`in e&&(e.letterSpacing=`${t.letterSpacing||0}px`);let n=this.applyTextTransform(t.text,t.textTransform),r=this.wrapText(e,n,Math.max(1,t.width-(t.padding??0)*2));if(r.length===0){e.restore();return}let i=t.fontSize*(t.lineHeight||1.3),a=t.x+t.width/2;t.textAlign===`left`?a=t.x+(t.padding??0):t.textAlign===`right`&&(a=t.x+t.width-(t.padding??0));let o=r.length*i,s=t.y+t.height/2-o/2+i/2;t.verticalAlign===`top`?s=t.y+(t.padding??0)+i/2:t.verticalAlign===`bottom`&&(s=t.y+t.height-(t.padding??0)-o+i/2),this.drawTextBackground(e,t,r,i,a,s),r.forEach((n,r)=>{let o=s+r*i;M.applyTextGlow(e,t),this.drawTextFill(e,n,a,o,t),M.clearShadow(e),M.applyTextShadow(e,t),this.drawTextFill(e,n,a,o,t),M.clearShadow(e),M.drawTextOutline(e,n,a,o,t),this.drawTextFill(e,n,a,o,t)}),M.clearShadow(e),e.restore()}drawTextFill(e,t,n,r,i){e.fillStyle=i.gradient&&i.gradient.colors.length>=2?this.createTextGradient(e,i,n,r):i.color||`#FFFFFF`,e.fillText(t,n,r)}createTextGradient(e,t,n,r){let i=t.gradient;if(i.type===`radial`){let a=Math.max(t.width,t.height)/2,o=e.createRadialGradient(n,r,0,n,r,a);return this.addGradientStops(o,i.colors),o}let a=(i.angle||0)*Math.PI/180,o=Math.sqrt(t.width**2+t.height**2),s=t.x+t.width/2,c=t.y+t.height/2,l=s-Math.cos(a)*o/2,u=c-Math.sin(a)*o/2,d=s+Math.cos(a)*o/2,f=c+Math.sin(a)*o/2,p=e.createLinearGradient(l,u,d,f);return this.addGradientStops(p,i.colors),p}addGradientStops(e,t){let n=t.length;t.forEach((t,r)=>{let i=n<=1?0:r/(n-1);e.addColorStop(i,t)})}drawTextBackground(e,t,n,r,i,a){if(!t.backgroundColor||t.backgroundColor===`transparent`)return;let o=t.padding??0,s=Math.max(...n.map(t=>e.measureText(t).width))+o*2,c=n.length*r+o*2,l=t.x+t.width/2-s/2;t.textAlign===`left`?l=t.x:t.textAlign===`right`&&(l=t.x+t.width-s);let u=t.y+t.height/2-c/2;t.glowColor&&t.glowColor!==`transparent`&&(t.glowBlur??0)>0&&(e.save(),e.shadowColor=t.glowColor,e.shadowBlur=t.glowBlur??0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.fillStyle=t.backgroundColor,M.drawRoundedRect(e,l,u,s,c,t.backgroundRadius??0),e.fill(),e.restore()),e.save(),e.fillStyle=t.backgroundColor,M.drawRoundedRect(e,l,u,s,c,t.backgroundRadius??0),e.fill(),e.restore()}applyTextTransform(e,t){switch(t){case`uppercase`:return e.toUpperCase();case`lowercase`:return e.toLowerCase();case`capitalize`:return e.replace(/\b\w/g,e=>e.toUpperCase());default:return e}}wrapText(e,t,n){if(!t)return[];let r=t.split(`
`),i=[];return r.forEach(t=>{let r=t.split(` `),a=``;for(let t=0;t<r.length;t++){let o=a?`${a} ${r[t]}`:r[t];for(e.measureText(o).width>n&&a?(i.push(a),a=r[t]):a=o;e.measureText(a).width>n&&a.length>1;){let t=a.length-1;for(;t>1&&e.measureText(a.slice(0,t)).width>n;)t--;i.push(a.slice(0,t)),a=a.slice(t)}}i.push(a)}),i}},N=[{id:`merriweather`,family:`Merriweather`,category:`serif`,googleFontQuery:`Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700`},{id:`playfair-display`,family:`Playfair Display`,category:`serif`,googleFontQuery:`Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600`},{id:`lora`,family:`Lora`,category:`serif`,googleFontQuery:`Lora:ital,wght@0,400;0,600;0,700;1,400;1,600`},{id:`libre-baskerville`,family:`Libre Baskerville`,category:`serif`,googleFontQuery:`Libre+Baskerville:ital,wght@0,400;0,700;1,400`},{id:`cormorant-garamond`,family:`Cormorant Garamond`,category:`serif`,googleFontQuery:`Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400`},{id:`cinzel`,family:`Cinzel`,category:`display`,googleFontQuery:`Cinzel:wght@400;600;700`},{id:`inter`,family:`Inter`,category:`sans-serif`,googleFontQuery:`Inter:wght@300;400;500;600;700`},{id:`montserrat`,family:`Montserrat`,category:`sans-serif`,googleFontQuery:`Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400`},{id:`great-vibes`,family:`Great Vibes`,category:`handwriting`,googleFontQuery:`Great+Vibes`},{id:`caveat`,family:`Caveat`,category:`handwriting`,googleFontQuery:`Caveat:wght@400;600;700`}],P=new class{loadedFonts=new Set;loadingPromises=new Map;async loadFont(e){if(this.loadedFonts.has(e))return!0;if(this.loadingPromises.has(e))return this.loadingPromises.get(e);let t=N.find(t=>t.family.toLowerCase()===e.toLowerCase()),n=(async()=>{try{if(t){let e=`google-font-${t.id}`;if(!document.getElementById(e)){let n=document.createElement(`link`);n.id=e,n.rel=`stylesheet`,n.href=`https://fonts.googleapis.com/css2?family=${t.googleFontQuery}&display=swap`,document.head.appendChild(n)}}return`fonts`in document&&await document.fonts.load(`16px "${e}"`),this.loadedFonts.add(e),!0}catch(t){return console.warn(`Font load warning for "${e}":`,t),this.loadedFonts.add(e),!1}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,n),n}isLoaded(e){return this.loadedFonts.has(e)}getAvailableFonts(){return N}},F=class{baseHandleSize=12;baseRotateDistance=50;baseRotateRadius=12;baseRotateHitRadius=24;uiScale=1;get handleSize(){return this.baseHandleSize*this.uiScale}get rotateRadius(){return this.baseRotateRadius*this.uiScale}get rotateDistance(){return this.baseRotateDistance*this.uiScale}render(e,t){e.save();let n=t.x+t.width/2,r=t.y+t.height/2;e.translate(n,r),t.rotation!==0&&e.rotate(t.rotation*Math.PI/180),e.translate(-n,-r);let i=t.x-4,a=t.x+t.width+4,o=t.y-4,s=t.y+t.height+4,c=t.x+t.width/2,l=t.y+t.height/2;e.strokeStyle=`#D4AF37`,e.lineWidth=2*this.uiScale,e.setLineDash([6*this.uiScale,6*this.uiScale]),e.strokeRect(i,o,a-i,s-o),e.setLineDash([]),[{x:i,y:o},{x:a,y:o},{x:a,y:s},{x:i,y:s},{x:c,y:o},{x:a,y:l},{x:c,y:s},{x:i,y:l}].forEach(t=>{this.drawHandle(e,t.x,t.y)}),this.drawDeleteHandle(e,a+14*this.uiScale,o-14*this.uiScale);let u=o-this.rotateDistance;e.beginPath(),e.moveTo(c,o),e.lineTo(c,u+7),e.strokeStyle=`#D4AF37`,e.lineWidth=2*this.uiScale,e.stroke(),this.drawRotateHandle(e,c,u),e.restore()}drawHandle(e,t,n){let r=this.handleSize;e.save(),e.fillStyle=`#FAF7F2`,e.strokeStyle=`#3D1E18`,e.lineWidth=2*this.uiScale,e.fillRect(t-r/2,n-r/2,r,r),e.strokeRect(t-r/2,n-r/2,r,r),e.restore()}drawDeleteHandle(e,t,n){let r=11*this.uiScale;e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=`#D93025`,e.fill(),e.strokeStyle=`#FFFFFF`,e.lineWidth=2*this.uiScale,e.stroke();let i=r*.45;e.beginPath(),e.moveTo(t-i,n-i),e.lineTo(t+i,n+i),e.moveTo(t+i,n-i),e.lineTo(t-i,n+i),e.stroke(),e.restore()}drawRotateHandle(e,t,n){let r=this.rotateRadius;e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=`#D4AF37`,e.fill(),e.strokeStyle=`#3D1E18`,e.lineWidth=2*this.uiScale,e.stroke(),e.beginPath(),e.arc(t,n,r*.72,0,Math.PI*2),e.fillStyle=`#FAF7F2`,e.fill(),e.beginPath(),e.arc(t,n,r*.42,-Math.PI*.8,Math.PI*.8),e.strokeStyle=`#3D1E18`,e.lineWidth=2*this.uiScale,e.lineCap=`round`,e.stroke();let i=t+r*.3,a=n-r*.3;e.beginPath(),e.moveTo(i-r*.12,a-r*.08),e.lineTo(i+r*.12,a-r*.08),e.lineTo(i+r*.06,a+r*.14),e.strokeStyle=`#3D1E18`,e.lineWidth=2*this.uiScale,e.lineJoin=`round`,e.stroke(),e.restore()}getHandlePoint(e,t){let n=e.x-4,r=e.x+e.width+4,i=e.y-4,a=e.y+e.height+4,o=e.x+e.width/2,s=e.y+e.height/2;switch(t){case`top-left`:return{x:n,y:i};case`top`:return{x:o,y:i};case`top-right`:return{x:r,y:i};case`right`:return{x:r,y:s};case`bottom-right`:return{x:r,y:a};case`bottom`:return{x:o,y:a};case`bottom-left`:return{x:n,y:a};case`left`:return{x:n,y:s};case`delete`:return{x:r+14*this.uiScale,y:i-14*this.uiScale};case`rotate`:return{x:o,y:i-this.rotateDistance}}}hitTest(e,t,n){let r=[`top-left`,`top`,`top-right`,`right`,`bottom-right`,`bottom`,`bottom-left`,`left`,`rotate`,`delete`],i=e.x+e.width/2,a=e.y+e.height/2,o=-(e.rotation*Math.PI)/180,s=t-i,c=n-a,l=s*Math.cos(o)-c*Math.sin(o)+i,u=s*Math.sin(o)+c*Math.cos(o)+a,d=12*Math.max(this.uiScale,1)+(this.uiScale>1?6*this.uiScale:0),f=this.getHandlePoint(e,`rotate`),p=Math.max(this.baseRotateHitRadius*this.uiScale,24);if(Math.hypot(l-f.x,u-f.y)<=p)return`rotate`;for(let t of r){let n=this.getHandlePoint(e,t);if(Math.abs(l-n.x)<=d&&Math.abs(u-n.y)<=d)return t}return null}getCursor(e){switch(e){case`left`:case`right`:return`ew-resize`;case`top`:case`bottom`:return`ns-resize`;case`top-left`:case`bottom-right`:return`nwse-resize`;case`top-right`:case`bottom-left`:return`nesw-resize`;case`rotate`:return`grab`;case`delete`:return`pointer`;default:return`default`}}},I=class{canvas;ctx;backgroundRenderer=new Ee;textRenderer=new De;fitWidth=!0;autoFit=!0;selectionHandles=new F;showSelectionControls=!0;constructor(e){this.canvas=e;let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)throw Error(`Unable to obtain 2D Canvas Context`);this.ctx=t}async render(e,t=!0){this.showSelectionControls=t,(this.canvas.width!==e.width||this.canvas.height!==e.height)&&(this.canvas.width=e.width,this.canvas.height=e.height);let n=e.elements.filter(e=>e.type===`text`).map(e=>P.loadFont(e.fontFamily));if(await Promise.all(n),this.ctx.clearRect(0,0,e.width,e.height),await this.backgroundRenderer.render(this.ctx,e.width,e.height,e.background),e.elements.forEach(e=>{e.type===`text`?(this.autoFit&&this.textRenderer.fitToText(this.ctx,e,this.fitWidth),this.textRenderer.render(this.ctx,e)):e.type===`shape`&&this.renderShape(e)}),this.showSelectionControls&&e.selected_element_id){let t=e.elements.find(t=>t.id===e.selected_element_id);t&&this.renderSelectionOverlay(t)}}renderShape(e){M.withTransform(this.ctx,e.x,e.y,e.width,e.height,e.rotation,e.opacity,()=>{if(this.ctx.save(),this.ctx.fillStyle=e.fillColor||`transparent`,this.ctx.strokeStyle=e.strokeColor||`#D4AF37`,this.ctx.lineWidth=e.strokeWidth||2,e.shapeType===`divider`||e.shapeType===`line`)this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y+e.height/2),this.ctx.lineTo(e.x+e.width,e.y+e.height/2),this.ctx.stroke();else if(e.shapeType===`rectangle`)this.ctx.fillRect(e.x,e.y,e.width,e.height),e.strokeWidth>0&&this.ctx.strokeRect(e.x,e.y,e.width,e.height);else if(e.shapeType===`circle`){this.ctx.beginPath();let t=e.width/2,n=e.height/2;this.ctx.ellipse(e.x+t,e.y+n,t,n,0,0,Math.PI*2),this.ctx.fill(),e.strokeWidth>0&&this.ctx.stroke()}this.ctx.restore()})}renderSelectionOverlay(e){let t=this.canvas.getBoundingClientRect();this.selectionHandles.uiScale=t.width>0?Math.max(1,this.canvas.width/t.width):1,this.selectionHandles.render(this.ctx,e)}getCanvas(){return this.canvas}},L=[{id:`classic`,name:`Classic Shepherd`,description:`Rich burgundy with warm gold accents and traditional serif typography.`,presetState:{background:{type:`gradient`,color:`#2C1B18`,gradient:{type:`linear`,colors:[`#4A241B`,`#160A07`],angle:135},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.22,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#FAF7F2`,letterSpacing:0,lineHeight:1.4,outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0,0,0,0.45)`,shadowBlur:10,shadowOffsetX:2,shadowOffsetY:4,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:26,fontWeight:`600`,fontStyle:`normal`,textAlign:`center`,color:`#D4AF37`,letterSpacing:4,lineHeight:1.2}},{id:`midnight-glow`,name:`Midnight Scripture`,description:`Deep midnight background with bright scripture and a subtle atmospheric glow.`,presetState:{background:{type:`gradient`,color:`#080B12`,gradient:{type:`radial`,colors:[`#20283A`,`#05070C`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:44,fontWeight:`400`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,shadowColor:`rgba(0,0,0,0.6)`,shadowBlur:12,shadowOffsetX:0,shadowOffsetY:4,glowColor:`#B9D8FF`,glowBlur:18,glowIntensity:.7,outlineColor:`transparent`,outlineWidth:0,letterSpacing:0,lineHeight:1.45,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:24,fontWeight:`600`,color:`#B9D8FF`,letterSpacing:4,textAlign:`center`}},{id:`modern-card`,name:`Modern Card`,description:`Contemporary scripture typography placed over a soft translucent text panel.`,presetState:{background:{type:`gradient`,color:`#171717`,gradient:{type:`linear`,colors:[`#3A3A3A`,`#111111`],angle:145},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Inter`,fontSize:40,fontWeight:`500`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,letterSpacing:0,lineHeight:1.4,backgroundColor:`rgba(255,255,255,0.10)`,backgroundRadius:24,padding:32,shadowColor:`rgba(0,0,0,0.35)`,shadowBlur:12,shadowOffsetX:0,shadowOffsetY:6,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,blur:0},referenceStyle:{fontFamily:`Inter`,fontSize:22,fontWeight:`700`,color:`#D4AF37`,letterSpacing:3,textAlign:`center`}},{id:`forest-psalm`,name:`Forest Psalm`,description:`Deep forest green with warm cream typography inspired by nature and the Psalms.`,presetState:{background:{type:`gradient`,color:`#10251D`,gradient:{type:`radial`,colors:[`#28533D`,`#07130E`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#F5EFE2`,letterSpacing:0,lineHeight:1.45,shadowColor:`rgba(0,0,0,0.5)`,shadowBlur:10,shadowOffsetX:1,shadowOffsetY:4,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:25,fontWeight:`600`,color:`#D8C58A`,letterSpacing:4,textAlign:`center`}},{id:`bold-proclamation`,name:`Bold Proclamation`,description:`Large bold typography designed for powerful scripture statements.`,presetState:{background:{type:`solid`,color:`#F4F0E8`,gradient:{type:`linear`,colors:[`#F4F0E8`,`#DDD4C4`],angle:180},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:0,blur:0}},textStyle:{fontFamily:`Montserrat`,fontSize:54,fontWeight:`800`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#241B18`,letterSpacing:-1,lineHeight:1.2,shadowColor:`transparent`,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:22,fontWeight:`700`,color:`#8A6330`,letterSpacing:3,textAlign:`center`}},{id:`royal-word`,name:`Royal Word`,description:`Rich purple tones with elegant gold typography and a luxurious presentation.`,presetState:{background:{type:`gradient`,color:`#21112F`,gradient:{type:`radial`,colors:[`#5A3277`,`#160A20`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.12,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:43,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,gradient:{type:`linear`,colors:[`#FFF3B0`,`#D4AF37`],angle:90},color:`#D4AF37`,letterSpacing:0,lineHeight:1.4,shadowColor:`rgba(0,0,0,0.55)`,shadowBlur:10,shadowOffsetX:0,shadowOffsetY:4,glowColor:`#D4AF37`,glowBlur:8,glowIntensity:.25,outlineColor:`transparent`,outlineWidth:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:25,fontWeight:`700`,color:`#F7E7A9`,letterSpacing:4,textAlign:`center`}},{id:`text-glow`,name:`Text Glow`,description:`Bright scripture with a strong dark glow behind the letters for clear visibility on any background.`,presetState:{background:{type:`solid`,color:`#2A1515`,gradient:{type:`linear`,colors:[`#BC6565`,`#C3A9A9`],angle:180},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:0,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,letterSpacing:0,lineHeight:1.4,glowColor:`#000000`,glowBlur:14,glowIntensity:.9,shadowColor:`rgba(0, 0, 0, 0.85)`,shadowBlur:8,shadowOffsetX:0,shadowOffsetY:2,outlineColor:`rgba(0, 0, 0, 0.75)`,outlineWidth:1,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:24,fontWeight:`700`,fontStyle:`normal`,textAlign:`center`,color:`#FFFFFF`,letterSpacing:4,glowColor:`#000000`,glowBlur:10,glowIntensity:.85,shadowColor:`rgba(0, 0, 0, 0.8)`,shadowBlur:6,shadowOffsetX:0,shadowOffsetY:2,outlineColor:`rgba(0, 0, 0, 0.7)`,outlineWidth:1}}],Oe=class{static getTemplates(){return L}static applyTemplate(e,t){let n=L.find(t=>t.id===e);if(!n)return t;let r=JSON.parse(JSON.stringify(t));return n.presetState.background&&(r.background=JSON.parse(JSON.stringify(n.presetState.background))),n.presetState.width!==void 0&&(r.width=n.presetState.width),n.presetState.height!==void 0&&(r.height=n.presetState.height),n.presetState.padding!==void 0&&(r.padding=n.presetState.padding),n.presetState.preset!==void 0&&(r.preset=n.presetState.preset),r.elements=r.elements.map(e=>{if(e.type!==`text`)return e;let t=e;return t.isReference&&n.referenceStyle?{...t,...n.referenceStyle}:n.textStyle?{...t,...n.textStyle}:t}),r}},ke={format:`png`,quality:.95,fileName:`bible-verse`},Ae=class{static async exportDesign(e,t={}){let n={...ke,...t},r=document.createElement(`canvas`);r.width=e.width,r.height=e.height,await new I(r).render(e,!1);let i=this.getMimeType(n.format),a=r.toDataURL(i,n.quality),o=`${n.fileName||`bible-verse`}.${n.format}`,s=document.createElement(`a`);s.download=o,s.href=a,document.body.appendChild(s),s.click(),document.body.removeChild(s)}static getMimeType(e){switch(e.toLowerCase()){case`jpeg`:case`jpg`:return`image/jpeg`;case`webp`:return`image/webp`;default:return`image/png`}}},R=`shepherd_bible_verse_image_editor`,je=class{state;events;history;renderer;canvasElement;selectionHandles=new F;shiftPressed=!1;activeHandle=null;isDragging=!1;isTransforming=!1;dragStartX=0;dragStartY=0;elementInitialX=0;elementInitialY=0;elementInitialWidth=0;elementInitialHeight=0;elementInitialRotation=0;elementInitialFontSize=0;operationHistoryStarted=!1;constructor(e){this.canvasElement=e,this.events=new we,this.history=new Te,this.renderer=new I(e),this.state=this.loadLocalState()||Ce(),this.initPointerInteractions(),this.requestRender(),window.addEventListener(`keydown`,e=>{e.key===`Shift`&&(this.shiftPressed=!0)}),window.addEventListener(`keyup`,e=>{e.key===`Shift`&&(this.shiftPressed=!1)})}getState(){return this.state}getEvents(){return this.events}getHistory(){return this.history}updateState(e){this.history.push(this.state),e(this.state),this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender()}updateElement(e,t){this.updateState(n=>{let r=n.elements.findIndex(t=>t.id===e);r!==-1&&(n.elements[r]={...n.elements[r],...t})})}increaseTextSize(e,t=2){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);n&&this.updateTextFontSize(e,Math.min(n.fontSize+t,150))}decreaseTextSize(e,t=2){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);n&&this.updateTextFontSize(e,Math.max(n.fontSize-t,12))}updateTextFontSize(e,t){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);if(!n)return;let r=n.fontSize;if(r<=0)return;let i=t/r;this.updateElement(e,{fontSize:t,width:n.width*i,height:n.height*i})}updateBackground(e){this.updateState(t=>{t.background={...e}})}updateCanvasDimensions(e,t){this.updateState(n=>{let r=n.width,i=n.height;n.width=e,n.height=t,n.elements.forEach(n=>{let a=n.x+n.width/2,o=n.y+n.height/2,s=Math.abs(a-r/2)<2,c=Math.abs(o-i/2)<2;s&&(n.x=(e-n.width)/2),c&&(n.y=(t-n.height)/2)})})}addTextElement(e=`New Text`){let t=`elem_${Date.now()}`,n={id:t,type:`text`,text:e,fontFamily:`Inter`,fontSize:32,fontWeight:`400`,fontStyle:`normal`,textAlign:`center`,color:`#FAF7F2`,letterSpacing:0,lineHeight:1.3,shadowColor:`rgba(0,0,0,0.4)`,shadowBlur:4,shadowOffsetX:1,shadowOffsetY:2,outlineColor:`transparent`,outlineWidth:0,x:this.state.width/2-300,y:this.state.height/2-40,width:600,height:80,rotation:0,opacity:1};this.updateState(e=>{e.elements.push(n),e.selected_element_id=t}),this.events.emit(`element_selected`,{elementId:t})}deleteElement(e){this.updateState(t=>{t.elements=t.elements.filter(t=>t.id!==e),t.selected_element_id===e&&(t.selected_element_id=null)}),this.events.emit(`element_selected`,{elementId:null})}selectElement(e){this.state.selected_element_id=e,this.events.emit(`element_selected`,{elementId:e}),this.requestRender()}applyTemplate(e){this.history.push(this.state),this.state=Oe.applyTemplate(e,this.state),this.saveLocalState(),this.events.emit(`template_applied`,{templateId:e}),this.events.emit(`state_changed`,{state:this.state}),this.requestRender()}undo(){let e=this.history.undo(this.state);e&&(this.state=e,this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender())}redo(){let e=this.history.redo(this.state);e&&(this.state=e,this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender())}exportImage(e={}){return Ae.exportDesign(this.state,e)}requestRender(){this.renderer.render(this.state,!0)}initPointerInteractions(){this.canvasElement.style.touchAction=`none`;let e=e=>{let t=this.canvasElement.getBoundingClientRect(),n=this.state.width/t.width,r=this.state.height/t.height;return{x:(e.clientX-t.left)*n,y:(e.clientY-t.top)*r}};this.canvasElement.addEventListener(`pointerdown`,t=>{let n=e(t),r=this.state.selected_element_id;if(r){let e=this.state.elements.find(e=>e.id===r);if(e){let r=this.selectionHandles.hitTest(e,n.x,n.y);if(r){if(r===`delete`){this.deleteElement(e.id);return}this.activeHandle=r,this.elementInitialFontSize=e.type===`text`?e.fontSize:0,this.renderer.fitWidth=!1,this.isTransforming=!0,this.dragStartX=n.x,this.dragStartY=n.y,this.elementInitialX=e.x,this.elementInitialY=e.y,this.elementInitialWidth=e.width,this.elementInitialHeight=e.height,this.elementInitialRotation=e.rotation,this.history.push(this.state),this.operationHistoryStarted=!0,this.canvasElement.setPointerCapture(t.pointerId);return}}}let i=[...this.state.elements].reverse().find(e=>this.hitTestElement(e,n.x,n.y));i?(this.selectElement(i.id),this.isDragging=!0,this.dragStartX=n.x,this.dragStartY=n.y,this.elementInitialX=i.x,this.elementInitialY=i.y,this.elementInitialWidth=i.width,this.elementInitialHeight=i.height,this.elementInitialRotation=i.rotation,this.history.push(this.state),this.operationHistoryStarted=!0,this.canvasElement.setPointerCapture(t.pointerId)):this.selectElement(null)}),this.canvasElement.addEventListener(`pointermove`,t=>{let n=e(t);if(this.isTransforming&&this.state.selected_element_id&&this.activeHandle){let e=this.state.elements.find(e=>e.id===this.state.selected_element_id);if(!e)return;this.activeHandle===`rotate`?this.rotateElement(e,n.x,n.y):this.resizeElement(e,n.x,n.y,this.activeHandle),this.requestRender();return}if(this.isDragging&&this.state.selected_element_id){let e=this.state.elements.find(e=>e.id===this.state.selected_element_id);if(!e)return;let t=n.x-this.dragStartX,r=n.y-this.dragStartY;e.x=this.elementInitialX+t,e.y=this.elementInitialY+r,this.requestRender();return}this.updateHoverCursor(n.x,n.y)});let t=e=>{let t=this.isDragging||this.isTransforming;if(this.isDragging=!1,this.isTransforming=!1,this.activeHandle=null,this.renderer.fitWidth=!0,this.requestRender(),t){try{this.canvasElement.releasePointerCapture(e.pointerId)}catch{}this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.operationHistoryStarted=!1}this.canvasElement.style.cursor=`default`};this.canvasElement.addEventListener(`pointerup`,t),this.canvasElement.addEventListener(`pointercancel`,t)}saveLocalState(){try{localStorage.setItem(R,JSON.stringify(this.state))}catch(e){console.warn(`Unable to save Verse Image State to localStorage:`,e)}}loadLocalState(){try{let e=localStorage.getItem(R);if(!e)return null;let t=JSON.parse(e);if(t&&typeof t.width==`number`&&Array.isArray(t.elements))return t}catch(e){console.warn(`Invalid local state found in localStorage, clearing:`,e),localStorage.removeItem(R)}return null}hitTestElement(e,t,n){let r=e.x+e.width/2,i=e.y+e.height/2,a=-(e.rotation*Math.PI)/180,o=t-r,s=n-i,c=o*Math.cos(a)-s*Math.sin(a)+r,l=o*Math.sin(a)+s*Math.cos(a)+i;return c>=e.x&&c<=e.x+e.width&&l>=e.y&&l<=e.y+e.height}resizeElement(e,t,n,r){let i=this.elementInitialX+this.elementInitialWidth/2,a=this.elementInitialY+this.elementInitialHeight/2,o=-(this.elementInitialRotation*Math.PI)/180,s=t-i,c=n-a,l=s*Math.cos(o)-c*Math.sin(o)+i,u=s*Math.sin(o)+c*Math.cos(o)+a,d=this.elementInitialX,f=this.elementInitialX+this.elementInitialWidth,p=this.elementInitialY,m=this.elementInitialY+this.elementInitialHeight;if((r===`left`||r===`top-left`||r===`bottom-left`)&&(d=Math.min(l,f-40)),(r===`right`||r===`top-right`||r===`bottom-right`)&&(f=Math.max(l,d+40)),(r===`top`||r===`top-left`||r===`top-right`)&&(p=Math.min(u,m-30)),(r===`bottom`||r===`bottom-left`||r===`bottom-right`)&&(m=Math.max(u,p+30)),e.x=d,e.y=p,e.width=Math.max(40,f-d),e.height=Math.max(30,m-p),e.type===`text`&&this.elementInitialFontSize>0){let t=r.includes(`-`),n=(f-d)/this.elementInitialWidth,i=(m-p)/this.elementInitialHeight,a=t?Math.max(n,i):r===`left`||r===`right`?n:i,o=Math.min(400,Math.max(12,this.elementInitialFontSize*a));if(e.fontSize=o,t){let t=o/this.elementInitialFontSize,n=this.elementInitialWidth*t,i=this.elementInitialHeight*t,a=this.elementInitialX+this.elementInitialWidth,s=this.elementInitialY+this.elementInitialHeight;e.x=r.includes(`left`)?a-n:this.elementInitialX,e.y=r.includes(`top`)?s-i:this.elementInitialY,e.width=n,e.height=i,e.rotation=this.elementInitialRotation;return}}e.rotation=this.elementInitialRotation}rotateElement(e,t,n){let r=this.elementInitialX+this.elementInitialWidth/2,i=this.elementInitialY+this.elementInitialHeight/2,a=Math.atan2(n-i,t-r)*180/Math.PI+90;this.isShiftPressed()&&(a=Math.round(a/15)*15),e.rotation=a}updateHoverCursor(e,t){let n=this.state.selected_element_id;if(!n){this.canvasElement.style.cursor=`default`;return}let r=this.state.elements.find(e=>e.id===n);if(!r){this.canvasElement.style.cursor=`default`;return}let i=this.selectionHandles.hitTest(r,e,t);if(i){this.canvasElement.style.cursor=this.selectionHandles.getCursor(i);return}if(this.hitTestElement(r,e,t)){this.canvasElement.style.cursor=`move`;return}this.canvasElement.style.cursor=`default`}isShiftPressed(){return!1}},z=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel text-panel`,this.render(),this.editor.getEvents().on(`element_selected`,()=>this.updateControls()),this.editor.getEvents().on(`state_changed`,()=>this.updateControls())}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label" for="input-verse-text">Verse Content</label>
        <textarea
          id="input-verse-text"
          class="panel-textarea"
          rows="4"
          placeholder="Enter verse passage..."
        ></textarea>
      </div>

      <div class="panel-section">
        <label class="panel-label" for="input-verse-ref">Reference</label>
        <input
          id="input-verse-ref"
          type="text"
          class="panel-input"
          placeholder="e.g. JOHN 3:16"
        />
      </div>

      <div class="panel-row">
        <div class="panel-field">
          <label class="panel-label">Size (px)</label>

          <div class="font-size-control">
            
            <input
              id="input-font-size"
              type="number"
              class="panel-input font-size-input"
              min="12"
              max="150"
              step="2"
            />

           
          </div>
        </div>

        <div class="panel-field">
          <label class="panel-label" for="input-line-height">Line Height</label>
          <input
            id="input-line-height"
            type="number"
            class="panel-input"
            min="0.8"
            max="2.5"
            step="0.1"
          />
        </div>
      </div>

      <div class="panel-row">
        <div class="panel-field">
          <label class="panel-label" for="input-letter-spacing">
            Letter Spacing
          </label>

          <input
            id="input-letter-spacing"
            type="number"
            class="panel-input"
            min="-2"
            max="20"
            step="1"
          />
        </div>

        <div class="panel-field">
          <label class="panel-label">Alignment</label>

          <div class="btn-group">
            <button
              id="btn-align-left"
              class="btn-icon"
              type="button"
              aria-label="Align Left"
            >
              ⯇
            </button>

            <button
              id="btn-align-center"
              class="btn-icon"
              type="button"
              aria-label="Align Center"
            >
              ☰
            </button>

            <button
              id="btn-align-right"
              class="btn-icon"
              type="button"
              aria-label="Align Right"
            >
              ⯈
            </button>
          </div>
        </div>
      </div>

      <div class="panel-row">
        <button id="btn-toggle-bold" class="panel-btn" type="button">
          Bold
        </button>

        <button id="btn-toggle-italic" class="panel-btn" type="button">
          Italic
        </button>
      </div>

      <div class="panel-section">
        <button
          id="btn-add-text"
          class="panel-btn panel-btn-primary"
          type="button"
        >
          + Add New Text Element
        </button>
      </div>
    `,this.bindEvents(),this.updateControls()}bindEvents(){let e=this.container.querySelector(`#input-verse-text`),t=this.container.querySelector(`#input-verse-ref`),n=this.container.querySelector(`#input-font-size`),r=this.container.querySelector(`#input-line-height`),i=this.container.querySelector(`#input-letter-spacing`),a=this.container.querySelector(`#btn-font-size-minus`),o=this.container.querySelector(`#btn-font-size-plus`);e?.addEventListener(`input`,()=>{let t=this.getSelectedTextElement();t&&this.editor.updateElement(t.id,{text:e.value})}),t?.addEventListener(`input`,()=>{let e=this.editor.getState().elements.find(e=>e.isReference);e&&this.editor.updateElement(e.id,{text:t.value})}),n?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=parseFloat(n.value);if(!Number.isFinite(t))return;let r=Math.min(Math.max(t,12),150);this.editor.updateTextFontSize(e.id,r)}),a?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=this.getFontSizeStep();this.editor.decreaseTextSize(e.id,t)}),o?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=this.getFontSizeStep();this.editor.increaseTextSize(e.id,t)}),r?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{lineHeight:parseFloat(r.value)||1.3})}),i?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{letterSpacing:parseInt(i.value,10)||0})}),this.container.querySelector(`#btn-align-left`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`left`})}),this.container.querySelector(`#btn-align-center`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`center`})}),this.container.querySelector(`#btn-align-right`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`right`})}),this.container.querySelector(`#btn-toggle-bold`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(e){let t=e.fontWeight===`700`||e.fontWeight===`bold`;this.editor.updateElement(e.id,{fontWeight:t?`400`:`700`})}}),this.container.querySelector(`#btn-toggle-italic`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(e){let t=e.fontStyle===`italic`;this.editor.updateElement(e.id,{fontStyle:t?`normal`:`italic`})}}),this.container.querySelector(`#btn-add-text`)?.addEventListener(`click`,()=>{this.editor.addTextElement(`New Scripture Line`)})}getFontSizeStep(){let e=this.editor.getState().width;return e>=3e3?8:e>=2e3?4:2}getSelectedTextElement(){let e=this.editor.getState();if(!e.selected_element_id)return null;let t=e.elements.find(t=>t.id===e.selected_element_id);return t&&t.type===`text`?t:null}updateControls(){let e=this.getSelectedTextElement(),t=this.container.querySelector(`#input-verse-text`),n=this.container.querySelector(`#input-verse-ref`),r=this.container.querySelector(`#input-font-size`),i=this.container.querySelector(`#input-line-height`),a=this.container.querySelector(`#input-letter-spacing`),o=this.container.querySelector(`#btn-font-size-minus`),s=this.container.querySelector(`#btn-font-size-plus`),c=this.editor.getState().elements.find(e=>e.isReference);c&&n&&(n.value=c.text),e?(t&&(t.value=e.text),r&&(r.value=e.fontSize.toString()),i&&(i.value=e.lineHeight.toString()),a&&(a.value=e.letterSpacing.toString()),o&&(o.disabled=e.fontSize<=12),s&&(s.disabled=e.fontSize>=150)):(r&&(r.value=``),i&&(i.value=``),a&&(a.value=``),o&&(o.disabled=!0),s&&(s.disabled=!0))}},B=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel font-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Typography Style</label>
        <div class="font-list" id="font-list-container"></div>
      </div>
    `;let e=this.container.querySelector(`#font-list-container`);N.forEach(t=>{let n=document.createElement(`button`);n.className=`font-item-card`,n.innerHTML=`
        <span class="font-name" style="font-family: '${t.family}', serif">${t.family}</span>
        <span class="font-category">${t.category}</span>
      `,n.addEventListener(`click`,async()=>{await P.loadFont(t.family);let e=this.editor.getState();e.selected_element_id&&this.editor.updateElement(e.selected_element_id,{fontFamily:t.family})}),e.appendChild(n)})}},V=class{element;editor;constructor(e){this.editor=e,this.element=document.createElement(`div`),this.element.className=`panel-content color-panel`,this.render(),this.editor.getEvents().on(`element_selected`,()=>{this.updateControls()}),this.editor.getEvents().on(`state_changed`,()=>{this.updateControls()})}getElement(){return this.element}render(){let e=[`#ffffff`,`#000000`,`#f43f5e`,`#3b82f6`,`#10b981`,`#f59e0b`,`#8b5cf6`];this.element.innerHTML=`
      <div class="panel-section">
        <label class="panel-label" for="text-color-input">
          Text Color
        </label>

        <div class="color-picker-row flex items-center gap-2 mb-3">
          <input
            type="color"
            id="text-color-input"
            value="#332624"
            class="w-8 h-8 rounded cursor-pointer border-0"
          />

          <span
            id="color-hex-display"
            class="text-xs font-mono"
          >#332624</span>
        </div>

        <label class="panel-label">Presets</label>

        <div class="preset-colors flex flex-wrap gap-2">
          ${e.map(e=>`
                <button
                  type="button"
                  class="color-swatch w-7 h-7 rounded-full border transition-transform hover:scale-105"
                  data-color="${e}"
                  style="background-color: ${e};"
                  aria-label="Set text color to ${e}"
                  title="${e}"
                ></button>
              `).join(``)}
        </div>
      </div>
    `,this.attachEvents(),this.updateControls()}attachEvents(){let e=this.element.querySelector(`#text-color-input`),t=this.element.querySelectorAll(`.color-swatch`);e.addEventListener(`input`,()=>{this.updateColor(e.value)}),t.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.color;n&&(e.value=n,this.updateColor(n))})})}getSelectedTextElement(){let e=this.editor.getState(),t=e.selected_element_id;if(!t)return null;let n=e.elements.find(e=>e.id===t);return!n||n.type!==`text`?null:n}updateColor(e){let t=this.editor.getState(),n=t.selected_element_id;if(!n){console.warn(`No selected element`);return}let r=t.elements.find(e=>e.id===n);if(!r||r.type!==`text`){console.warn(`Selected element is not text`,r);return}console.log(`Updating text color:`,r.id,e),this.editor.updateElement(r.id,{color:e,gradient:void 0}),console.log(`Updated element color:`,this.editor.getState().elements.find(e=>e.id===n))}updateControls(){let e=this.element.querySelector(`#text-color-input`),t=this.element.querySelector(`#color-hex-display`),n=this.getSelectedTextElement()?.color||`#332624`;/^#[0-9a-f]{6}$/i.test(n)?(e.value=n,t.textContent=n):(e.value=`#332624`,t.textContent=n)}},H=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel background-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Background Mode</label>
        <div class="btn-group">
          <button id="bg-mode-gradient" class="panel-btn">Gradient</button>
          <button id="bg-mode-solid" class="panel-btn">Solid</button>
          <button id="bg-mode-image" class="panel-btn">Image</button>
        </div>
      </div>

      <div id="bg-gradient-controls" class="panel-section">
        <label class="panel-label">Gradient Color 1</label>
        <input type="color" id="bg-grad-1" class="color-input-native" value="#3D1E18" />
        
        <label class="panel-label" style="margin-top:10px;">Gradient Color 2</label>
        <input type="color" id="bg-grad-2" class="color-input-native" value="#1A0B08" />
      </div>

      <div id="bg-image-controls" class="panel-section" style="display:none;">
        <label class="panel-label">Upload Custom Image</label>
        <input type="file" id="bg-file-input" accept="image/*" class="panel-input-file" />
        
        <label class="panel-label" style="margin-top:10px;">Blur Effect (px)</label>
        <input type="range" id="bg-blur-slider" min="0" max="20" value="0" class="panel-slider" />
      </div>

      <div class="panel-section">
        <label class="panel-label">Overlay Color & Opacity</label>
        <div class="panel-row">
          <input type="color" id="bg-overlay-color" class="color-input-native" value="#000000" />
          <input type="range" id="bg-overlay-opacity" min="0" max="1" step="0.05" value="0.2" class="panel-slider" />
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#bg-grad-1`),t=this.container.querySelector(`#bg-grad-2`),n=this.container.querySelector(`#bg-file-input`),r=this.container.querySelector(`#bg-blur-slider`),i=this.container.querySelector(`#bg-overlay-color`),a=this.container.querySelector(`#bg-overlay-opacity`),o=this.container.querySelector(`#bg-gradient-controls`),s=this.container.querySelector(`#bg-image-controls`);this.container.querySelector(`#bg-mode-gradient`)?.addEventListener(`click`,()=>{o.style.display=`block`,s.style.display=`none`;let e=this.editor.getState().background;e.type=`gradient`,this.editor.updateBackground(e)}),this.container.querySelector(`#bg-mode-solid`)?.addEventListener(`click`,()=>{o.style.display=`none`,s.style.display=`none`;let e=this.editor.getState().background;e.type=`solid`,this.editor.updateBackground(e)}),this.container.querySelector(`#bg-mode-image`)?.addEventListener(`click`,()=>{o.style.display=`none`,s.style.display=`block`});let c=()=>{let n=this.editor.getState().background;n.type=`gradient`,n.gradient.colors=[e.value,t.value],this.editor.updateBackground(n)};e?.addEventListener(`input`,c),t?.addEventListener(`input`,c),n?.addEventListener(`change`,e=>{let t=e.target.files?.[0];if(t){let e=URL.createObjectURL(t),n=this.editor.getState().background;n.type=`image`,n.imageUrl=e,this.editor.updateBackground(n)}}),r?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.blur=parseFloat(r.value)||0,this.editor.updateBackground(e)}),i?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.overlayColor=i.value,this.editor.updateBackground(e)}),a?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.overlayOpacity=parseFloat(a.value)||0,this.editor.updateBackground(e)})}},U=class{editor;container;presets={square:{label:`Square`,description:`1080 × 1080`,width:1080,height:1080},portrait:{label:`Portrait`,description:`1080 × 1350`,width:1080,height:1350},story:{label:`Story`,description:`1080 × 1920`,width:1080,height:1920},landscape:{label:`Landscape`,description:`1200 × 630`,width:1200,height:630},phone:{label:`Phone`,description:`1170 × 2532`,width:1170,height:2532},"phone-landscape":{label:`Phone Landscape`,description:`2532 × 1170`,width:2532,height:1170},"tablet-portrait":{label:`Tablet Portrait`,description:`1536 × 2048`,width:1536,height:2048},"tablet-landscape":{label:`Tablet Landscape`,description:`2048 × 1536`,width:2048,height:1536},"desktop-hd":{label:`Desktop HD`,description:`1920 × 1080`,width:1920,height:1080},"desktop-qhd":{label:`Desktop QHD`,description:`2560 × 1440`,width:2560,height:1440},"desktop-4k":{label:`Desktop 4K`,description:`3840 × 2160`,width:3840,height:2160},presentation:{label:`Presentation`,description:`1920 × 1080`,width:1920,height:1080},"a4-portrait":{label:`A4 Portrait`,description:`2480 × 3508`,width:2480,height:3508},"a4-landscape":{label:`A4 Landscape`,description:`3508 × 2480`,width:3508,height:2480},"three-four":{label:`3 : 4`,description:`1200 × 1600`,width:1200,height:1600},"four-three":{label:`4 : 3`,description:`1600 × 1200`,width:1600,height:1200},"two-three":{label:`2 : 3`,description:`1200 × 1800`,width:1200,height:1800},"three-two":{label:`3 : 2`,description:`1800 × 1200`,width:1800,height:1200},"five-four":{label:`5 : 4`,description:`1500 × 1200`,width:1500,height:1200},"four-five":{label:`4 : 5`,description:`1200 × 1500`,width:1200,height:1500},ultrawide:{label:`Ultrawide`,description:`2560 × 1080`,width:2560,height:1080},cinema:{label:`Cinema`,description:`2560 × 1080`,width:2560,height:1080}};constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel layout-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <!-- ================================= -->
      <!-- Dimension Presets                 -->
      <!-- ================================= -->

      <div class="panel-section">
        <label class="panel-label">
          Dimension Presets
        </label>

        <!-- Social Media -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Social Media
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="square">
              Square
              <small>1080 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="portrait">
              Portrait
              <small>1080 × 1350</small>
            </button>

            <button
              class="panel-btn"
              data-preset="story">
              Story
              <small>1080 × 1920</small>
            </button>

            <button
              class="panel-btn"
              data-preset="landscape">
              Landscape
              <small>1200 × 630</small>
            </button>

          </div>
        </div>


        <!-- Phone -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Phone
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="phone">
              Phone Portrait
              <small>1170 × 2532</small>
            </button>

            <button
              class="panel-btn"
              data-preset="phone-landscape">
              Phone Landscape
              <small>2532 × 1170</small>
            </button>

          </div>
        </div>


        <!-- Tablet -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Tablet
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="tablet-portrait">
              Tablet Portrait
              <small>1536 × 2048</small>
            </button>

            <button
              class="panel-btn"
              data-preset="tablet-landscape">
              Tablet Landscape
              <small>2048 × 1536</small>
            </button>

          </div>
        </div>


        <!-- Desktop -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Desktop
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="desktop-hd">
              Full HD
              <small>1920 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="desktop-qhd">
              QHD
              <small>2560 × 1440</small>
            </button>

            <button
              class="panel-btn"
              data-preset="desktop-4k">
              4K
              <small>3840 × 2160</small>
            </button>

          </div>
        </div>


        <!-- Presentation -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Presentation
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="presentation">
              Presentation
              <small>1920 × 1080</small>
            </button>

          </div>
        </div>


        <!-- Print -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Print
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="a4-portrait">
              A4 Portrait
              <small>2480 × 3508</small>
            </button>

            <button
              class="panel-btn"
              data-preset="a4-landscape">
              A4 Landscape
              <small>3508 × 2480</small>
            </button>

          </div>
        </div>


        <!-- Common Ratios -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Aspect Ratios
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="three-four">
              3 : 4
              <small>1200 × 1600</small>
            </button>

            <button
              class="panel-btn"
              data-preset="four-three">
              4 : 3
              <small>1600 × 1200</small>
            </button>

            <button
              class="panel-btn"
              data-preset="two-three">
              2 : 3
              <small>1200 × 1800</small>
            </button>

            <button
              class="panel-btn"
              data-preset="three-two">
              3 : 2
              <small>1800 × 1200</small>
            </button>

            <button
              class="panel-btn"
              data-preset="four-five">
              4 : 5
              <small>1200 × 1500</small>
            </button>

            <button
              class="panel-btn"
              data-preset="five-four">
              5 : 4
              <small>1500 × 1200</small>
            </button>

          </div>
        </div>


        <!-- Wide -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Wide
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="ultrawide">
              Ultrawide
              <small>2560 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="cinema">
              Cinema
              <small>2560 × 1080</small>
            </button>

          </div>
        </div>

      </div>


      <!-- ================================= -->
      <!-- Custom Canvas Size                -->
      <!-- ================================= -->

      <div class="panel-section">

        <label class="panel-label">
          Custom Canvas Size
        </label>

        <div class="panel-row">

          <div class="panel-field">

            <label class="panel-label">
              Width
            </label>

            <input
              type="number"
              id="canvas-width-input"
              class="panel-input"
              value="1080"
              min="1"
              max="10000"
              step="10"
            />

          </div>


          <div class="panel-field">

            <label class="panel-label">
              Height
            </label>

            <input
              type="number"
              id="canvas-height-input"
              class="panel-input"
              value="1080"
              min="1"
              max="10000"
              step="10"
            />

          </div>

        </div>

      </div>
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#canvas-width-input`),t=this.container.querySelector(`#canvas-height-input`);this.container.querySelectorAll(`[data-preset]`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-preset`);if(!r)return;let i=this.presets[r];i&&(e.value=i.width.toString(),t.value=i.height.toString(),this.editor.updateCanvasDimensions(i.width,i.height),this.container.querySelectorAll(`[data-preset]`).forEach(e=>{e.classList.remove(`active`)}),n.classList.add(`active`))})});let n=()=>{let n=parseInt(e.value,10),r=parseInt(t.value,10);!Number.isFinite(n)||!Number.isFinite(r)||n<=0||r<=0||(this.editor.updateCanvasDimensions(n,r),this.container.querySelectorAll(`[data-preset]`).forEach(e=>{e.classList.remove(`active`)}))};e.addEventListener(`change`,n),t.addEventListener(`change`,n)}},W=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel effects-panel`,this.render(),this.editor.getEvents().on(`element_selected`,()=>{this.syncFromSelectedElement()}),this.editor.getEvents().on(`state_changed`,()=>{this.syncFromSelectedElement()}),this.syncFromSelectedElement()}getElement(){return this.container}render(){this.container.innerHTML=`
      <!-- ====================================== -->
      <!-- TEXT DROP SHADOW -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Drop Shadow
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="shadow-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Blur
            </label>

            <input
              type="range"
              id="shadow-blur-range"
              min="0"
              max="30"
              step="1"
              value="8"
              class="panel-slider"
            />
          </div>
        </div>
      </div>


      <!-- ====================================== -->
      <!-- TEXT GLOW -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Glow
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="glow-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Blur
            </label>

            <input
              type="range"
              id="glow-blur-range"
              min="0"
              max="50"
              step="1"
              value="0"
              class="panel-slider"
            />
          </div>
        </div>

        <div class="panel-field">
          <label class="panel-label">
            Intensity
          </label>

          <input
            type="range"
            id="glow-intensity-range"
            min="0"
            max="1"
            step="0.05"
            value="0"
            class="panel-slider"
          />
        </div>
      </div>


      <!-- ====================================== -->
      <!-- TEXT OUTLINE -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Stroke / Outline
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="outline-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Width
            </label>

            <input
              type="range"
              id="outline-width-range"
              min="0"
              max="10"
              step="1"
              value="0"
              class="panel-slider"
            />
          </div>
        </div>
      </div>


      <!-- ====================================== -->
      <!-- ROTATION -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Element Rotation (deg)
        </label>

        <input
          type="range"
          id="rotation-range"
          min="-180"
          max="180"
          step="1"
          value="0"
          class="panel-slider"
        />
      </div>


      <!-- ====================================== -->
      <!-- OPACITY -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Element Opacity
        </label>

        <input
          type="range"
          id="opacity-range"
          min="0"
          max="1"
          step="0.05"
          value="1"
          class="panel-slider"
        />
      </div>
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#shadow-color-picker`),t=this.container.querySelector(`#shadow-blur-range`),n=this.container.querySelector(`#glow-color-picker`),r=this.container.querySelector(`#glow-blur-range`),i=this.container.querySelector(`#glow-intensity-range`),a=this.container.querySelector(`#outline-color-picker`),o=this.container.querySelector(`#outline-width-range`),s=this.container.querySelector(`#rotation-range`),c=this.container.querySelector(`#opacity-range`),l=()=>this.editor.getState().selected_element_id;e?.addEventListener(`input`,()=>{let t=l();t&&this.editor.updateElement(t,{shadowColor:e.value})}),t?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{shadowBlur:parseInt(t.value,10)||0})}),n?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowColor:n.value})}),r?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowBlur:parseInt(r.value,10)||0})}),i?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowIntensity:parseFloat(i.value)||0})}),a?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{outlineColor:a.value})}),o?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{outlineWidth:parseInt(o.value,10)||0})}),s?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{rotation:parseInt(s.value,10)||0})}),c?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{opacity:parseFloat(c.value)||1})})}syncFromSelectedElement(){let e=this.editor.getState(),t=e.selected_element_id;if(!t)return;let n=e.elements.find(e=>e.id===t);if(n){if(n.type===`text`){let e=n;this.setInputValue(`#shadow-color-picker`,this.toHexColor(e.shadowColor,`#000000`)),this.setInputValue(`#shadow-blur-range`,String(e.shadowBlur??0)),this.setInputValue(`#glow-color-picker`,this.toHexColor(e.glowColor,`#000000`)),this.setInputValue(`#glow-blur-range`,String(e.glowBlur??0)),this.setInputValue(`#glow-intensity-range`,String(e.glowIntensity??0)),this.setInputValue(`#outline-color-picker`,this.toHexColor(e.outlineColor,`#000000`)),this.setInputValue(`#outline-width-range`,String(e.outlineWidth??0))}this.setInputValue(`#rotation-range`,String(n.rotation??0)),this.setInputValue(`#opacity-range`,String(n.opacity??1))}}setInputValue(e,t){let n=this.container.querySelector(e);n&&(n.value=t)}toHexColor(e,t){if(!e)return t;if(/^#[0-9a-f]{6}$/i.test(e))return e;if(/^#[0-9a-f]{3}$/i.test(e)){let t=e.substring(1);return`#${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`}let n=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);return n?`#`+[Number(n[1]),Number(n[2]),Number(n[3])].map(e=>e.toString(16).padStart(2,`0`)).join(``):t}},G=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel template-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Built-in Themes</label>
        <div class="template-grid" id="template-cards-grid"></div>
      </div>
    `;let e=this.container.querySelector(`#template-cards-grid`);L.forEach(t=>{let n=document.createElement(`div`);n.className=`template-card`,n.innerHTML=`
        <div class="template-title">${t.name}</div>
        <div class="template-desc">${t.description}</div>
      `,n.addEventListener(`click`,()=>{this.editor.applyTemplate(t.id)}),e.appendChild(n)})}},Me=class{container;editor;constructor(){this.container=document.createElement(`div`),this.container.className=`verse-image-editor-page`}render(){return this.container.innerHTML=`
      <header class="editor-header">
        <div class="editor-title">
          <h1>Verse Image Creator</h1>
          <p>Design and share God's Word beautifully.</p>
        </div>

        <div class="editor-actions">
          <button id="btn-undo" class="panel-btn" title="Undo">
            ↩ Undo
          </button>

          <button id="btn-redo" class="panel-btn" title="Redo">
            ↪ Redo
          </button>

          <button id="btn-export-png" class="panel-btn panel-btn-primary">
            💾 Save PNG
          </button>
        </div>
      </header>

      <main class="editor-body">

        <aside class="editor-sidebar">
          <nav class="tab-nav" id="editor-tabs">
            <button class="tab-btn active" data-tab="text">
              Text
            </button>

            <button class="tab-btn" data-tab="fonts">
              Fonts
            </button>

            <button class="tab-btn" data-tab="color">
              Color
            </button>

            <button class="tab-btn" data-tab="bg">
              Background
            </button>

            <button class="tab-btn" data-tab="layout">
              Layout
            </button>

            <button class="tab-btn" data-tab="effects">
              Effects
            </button>

            <button class="tab-btn" data-tab="templates">
              Templates
            </button>
          </nav>

          <div
            class="panel-container"
            id="active-panel-slot">
          </div>
        </aside>

        <section class="editor-stage">
          <div class="canvas-wrapper">
            <canvas id="verse-editor-canvas"></canvas>
          </div>
        </section>

      </main>

      <!-- MOBILE ONLY -->

      <nav
        class="mobile-editor-toolbar"
        id="mobile-editor-toolbar">

        <button
          type="button"
          class="mobile-tool-btn active"
          data-tab="text">

          <span class="mobile-tool-icon">T</span>
          <span>Text</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="fonts">

          <span class="mobile-tool-icon">Aa</span>
          <span>Fonts</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="color">

          <span class="mobile-tool-icon">●</span>
          <span>Color</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="bg">

          <span class="mobile-tool-icon">▧</span>
          <span>Background</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="layout">

          <span class="mobile-tool-icon">⌗</span>
          <span>Layout</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="effects">

          <span class="mobile-tool-icon">✦</span>
          <span>Effects</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="templates">

          <span class="mobile-tool-icon">▦</span>
          <span>Templates</span>

        </button>

      </nav>

      <section
        class="mobile-editor-sheet"
        id="mobile-editor-sheet">

        <div class="mobile-sheet-header">

          <strong id="mobile-sheet-title">
            Text
          </strong>

          <button
            type="button"
            class="mobile-sheet-close"
            id="mobile-sheet-close"
            aria-label="Close">

            ×

          </button>

        </div>

        <div
          class="mobile-sheet-content"
          id="mobile-panel-slot">
        </div>

      </section>
    `,setTimeout(()=>this.initEditor(),0),this.container}initEditor(){let e=this.container.querySelector(`#verse-editor-canvas`);if(!e)return;this.editor=new je(e);let t={text:new z(this.editor).getElement(),fonts:new B(this.editor).getElement(),color:new V(this.editor).getElement(),bg:new H(this.editor).getElement(),layout:new U(this.editor).getElement(),effects:new W(this.editor).getElement(),templates:new G(this.editor).getElement()},n=this.container.querySelector(`#active-panel-slot`);n.appendChild(t.text);let r=this.container.querySelectorAll(`.tab-btn`);r.forEach(e=>{e.addEventListener(`click`,()=>{r.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let i=e.getAttribute(`data-tab`)||`text`;n.innerHTML=``,t[i]&&n.appendChild(t[i])})});let i=this.container.querySelector(`#mobile-editor-toolbar`),a=this.container.querySelector(`#mobile-editor-sheet`),o=this.container.querySelector(`#mobile-panel-slot`),s=this.container.querySelector(`#mobile-sheet-title`),c=this.container.querySelector(`#mobile-sheet-close`),l={text:`Text`,fonts:`Fonts`,color:`Color`,bg:`Background`,layout:`Layout`,effects:`Effects`,templates:`Templates`},u={text:new z(this.editor).getElement(),fonts:new B(this.editor).getElement(),color:new V(this.editor).getElement(),bg:new H(this.editor).getElement(),layout:new U(this.editor).getElement(),effects:new W(this.editor).getElement(),templates:new G(this.editor).getElement()},d=e=>{let t=u[e];t&&(s.textContent=l[e]||e,o.innerHTML=``,o.appendChild(t),a.classList.add(`open`),this.container.classList.add(`sheet-open`))},f=()=>{a.classList.remove(`open`)},p=i.querySelectorAll(`.mobile-tool-btn`);p.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-tab`)||`text`,n=e.classList.contains(`active`)&&a.classList.contains(`open`);if(p.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),n){f();return}d(t)})}),c?.addEventListener(`click`,f),d(`text`);let m=this.container.querySelector(`#btn-undo`),h=this.container.querySelector(`#btn-redo`),g=this.container.querySelector(`#btn-export-png`);m?.addEventListener(`click`,()=>this.editor.undo()),h?.addEventListener(`click`,()=>this.editor.redo()),g?.addEventListener(`click`,()=>this.editor.exportImage({format:`png`})),this.editor.getEvents().on(`history_changed`,({canUndo:e,canRedo:t})=>{m&&(m.disabled=!e),h&&(h.disabled=!t)})}},Ne=[{order:1,name:`Genesis`,osis:`Gen`,testament:`OT`},{order:2,name:`Exodus`,osis:`Exod`,testament:`OT`},{order:3,name:`Leviticus`,osis:`Lev`,testament:`OT`},{order:4,name:`Numbers`,osis:`Num`,testament:`OT`},{order:5,name:`Deuteronomy`,osis:`Deut`,testament:`OT`},{order:6,name:`Joshua`,osis:`Josh`,testament:`OT`},{order:7,name:`Judges`,osis:`Judg`,testament:`OT`},{order:8,name:`Ruth`,osis:`Ruth`,testament:`OT`},{order:9,name:`1 Samuel`,osis:`1Sam`,testament:`OT`},{order:10,name:`2 Samuel`,osis:`2Sam`,testament:`OT`},{order:11,name:`1 Kings`,osis:`1Kgs`,testament:`OT`},{order:12,name:`2 Kings`,osis:`2Kgs`,testament:`OT`},{order:13,name:`1 Chronicles`,osis:`1Chr`,testament:`OT`},{order:14,name:`2 Chronicles`,osis:`2Chr`,testament:`OT`},{order:15,name:`Ezra`,osis:`Ezra`,testament:`OT`},{order:16,name:`Nehemiah`,osis:`Neh`,testament:`OT`},{order:17,name:`Esther`,osis:`Esth`,testament:`OT`},{order:18,name:`Job`,osis:`Job`,testament:`OT`},{order:19,name:`Psalms`,osis:`Ps`,testament:`OT`},{order:20,name:`Proverbs`,osis:`Prov`,testament:`OT`},{order:21,name:`Ecclesiastes`,osis:`Eccl`,testament:`OT`},{order:22,name:`Song of Solomon`,osis:`Song`,testament:`OT`},{order:23,name:`Isaiah`,osis:`Isa`,testament:`OT`},{order:24,name:`Jeremiah`,osis:`Jer`,testament:`OT`},{order:25,name:`Lamentations`,osis:`Lam`,testament:`OT`},{order:26,name:`Ezekiel`,osis:`Ezek`,testament:`OT`},{order:27,name:`Daniel`,osis:`Dan`,testament:`OT`},{order:28,name:`Hosea`,osis:`Hos`,testament:`OT`},{order:29,name:`Joel`,osis:`Joel`,testament:`OT`},{order:30,name:`Amos`,osis:`Amos`,testament:`OT`},{order:31,name:`Obadiah`,osis:`Obad`,testament:`OT`},{order:32,name:`Jonah`,osis:`Jonah`,testament:`OT`},{order:33,name:`Micah`,osis:`Mic`,testament:`OT`},{order:34,name:`Nahum`,osis:`Nah`,testament:`OT`},{order:35,name:`Habakkuk`,osis:`Hab`,testament:`OT`},{order:36,name:`Zephaniah`,osis:`Zeph`,testament:`OT`},{order:37,name:`Haggai`,osis:`Hag`,testament:`OT`},{order:38,name:`Zechariah`,osis:`Zech`,testament:`OT`},{order:39,name:`Malachi`,osis:`Mal`,testament:`OT`},{order:40,name:`Matthew`,osis:`Matt`,testament:`NT`},{order:41,name:`Mark`,osis:`Mark`,testament:`NT`},{order:42,name:`Luke`,osis:`Luke`,testament:`NT`},{order:43,name:`John`,osis:`John`,testament:`NT`},{order:44,name:`Acts`,osis:`Acts`,testament:`NT`},{order:45,name:`Romans`,osis:`Rom`,testament:`NT`},{order:46,name:`1 Corinthians`,osis:`1Cor`,testament:`NT`},{order:47,name:`2 Corinthians`,osis:`2Cor`,testament:`NT`},{order:48,name:`Galatians`,osis:`Gal`,testament:`NT`},{order:49,name:`Ephesians`,osis:`Eph`,testament:`NT`},{order:50,name:`Philippians`,osis:`Phil`,testament:`NT`},{order:51,name:`Colossians`,osis:`Col`,testament:`NT`},{order:52,name:`1 Thessalonians`,osis:`1Thess`,testament:`NT`},{order:53,name:`2 Thessalonians`,osis:`2Thess`,testament:`NT`},{order:54,name:`1 Timothy`,osis:`1Tim`,testament:`NT`},{order:55,name:`2 Timothy`,osis:`2Tim`,testament:`NT`},{order:56,name:`Titus`,osis:`Titus`,testament:`NT`},{order:57,name:`Philemon`,osis:`Phlm`,testament:`NT`},{order:58,name:`Hebrews`,osis:`Heb`,testament:`NT`},{order:59,name:`James`,osis:`Jas`,testament:`NT`},{order:60,name:`1 Peter`,osis:`1Pet`,testament:`NT`},{order:61,name:`2 Peter`,osis:`2Pet`,testament:`NT`},{order:62,name:`1 John`,osis:`1John`,testament:`NT`},{order:63,name:`2 John`,osis:`2John`,testament:`NT`},{order:64,name:`3 John`,osis:`3John`,testament:`NT`},{order:65,name:`Jude`,osis:`Jude`,testament:`NT`},{order:66,name:`Revelation`,osis:`Rev`,testament:`NT`}],Pe=class{container;searchTerm=``;testamentFilter=`All`;tbody;searchInput;filterSelect;exportBtn;constructor(){this.container=document.createElement(`div`),this.container.className=`osis-page`,this.buildStaticDOM(),this.cacheDOM(),this.attachEventListeners(),this.renderTable()}buildStaticDOM(){this.container.innerHTML=`
      <header class="osis-hero">
        <div style="max-width: 1000px; margin: 0 auto;">
          <h1>A Common Language for Bible Book Identifiers</h1>
          <p class="subtitle">One consistent reference. Thousands of languages. Greater compatibility.</p>
          <p style="color: #4B5563; font-size: 1.125rem;">
            Bible translations exist in many languages, and book names differ across languages and applications. OSIS book identifiers offer a common machine-readable naming approach that applications can use independently of the language used to display a book's name.
          </p>
        </div>
      </header>

      <main class="osis-section">
        <section class="osis-statement">
          "We believe Bible resources should be easier to connect across languages and platforms. By encouraging consistent use of established OSIS book identifiers, we aim to help developers build a more interoperable Bible ecosystem while preserving each language's unique traditions."
        </section>

        <section style="margin-bottom: 4rem;">
          <h2 class="osis-heading">Our Vision</h2>
          <p style="font-size: 1.125rem;">We encourage the international Bible software community to use established OSIS book identifiers as shared identifiers for Bible books. This initiative encourages adoption of existing conventions; the Shepherd Bible Community does not establish official worldwide standards.</p>
        </section>

        <section>
          <h2 class="osis-heading">Why a Shared Identifier Matters</h2>
          <div class="osis-cards">
            <div class="osis-card"><h3>International compatibility</h3><p>Help applications exchange references across language boundaries.</p></div>
            <div class="osis-card"><h3>Consistent data</h3><p>Reduce mismatches caused by different localized book names.</p></div>
            <div class="osis-card"><h3>Simpler integration</h3><p>Make Bible imports, exports, and APIs easier to integrate.</p></div>
            <div class="osis-card"><h3>Language independence</h3><p>Keep identifiers separate from localized interface text.</p></div>
          </div>
        </section>

        <section style="margin-bottom: 4rem;">
          <h2 class="osis-heading">How It Works</h2>
          <p>The identifier remains stable while the visible book name is translated. For example:</p>
          <div class="osis-table-container">
            <table class="osis-table">
              <thead>
                <tr><th>Language</th><th>Display Name</th><th>Shared OSIS ID</th></tr>
              </thead>
              <tbody>
                <tr><td>English</td><td>Genesis</td><td class="osis-id-text">Gen</td></tr>
                <tr><td>Filipino</td><td>Genesis / lokal na pangalan</td><td class="osis-id-text">Gen</td></tr>
                <tr><td>Spanish</td><td>Génesis</td><td class="osis-id-text">Gen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 class="osis-heading">Book Order and Identifiers (Protestant Canon)</h2>
          <div class="osis-controls">
            <div style="display: flex; gap: 1rem; flex: 1; flex-wrap: wrap;">
              <input type="text" class="osis-search" id="osis-search-input" placeholder="Search by book or OSIS ID..." />
              <select class="osis-filter" id="osis-testament-filter">
                <option value="All">All Testaments</option>
                <option value="OT">Old Testament</option>
                <option value="NT">New Testament</option>
              </select>
            </div>
            <button class="osis-btn" id="osis-export-btn">Export JSON</button>
          </div>
          <div class="osis-table-container">
            <table class="osis-table">
              <thead>
                <tr>
                  <th style="width: 10%">#</th>
                  <th style="width: 30%">English Name</th>
                  <th style="width: 30%">OSIS ID</th>
                  <th style="width: 20%">Testament</th>
                  <th style="width: 10%">Action</th>
                </tr>
              </thead>
              <tbody id="osis-dynamic-tbody"></tbody>
            </table>
          </div>
        </section>
      </main>
    `}cacheDOM(){this.searchInput=this.container.querySelector(`#osis-search-input`),this.filterSelect=this.container.querySelector(`#osis-testament-filter`),this.exportBtn=this.container.querySelector(`#osis-export-btn`),this.tbody=this.container.querySelector(`#osis-dynamic-tbody`)}attachEventListeners(){this.searchInput.addEventListener(`input`,e=>{this.searchTerm=e.target.value.toLowerCase(),this.renderTable()}),this.filterSelect.addEventListener(`change`,e=>{this.testamentFilter=e.target.value,this.renderTable()}),this.exportBtn.addEventListener(`click`,()=>{this.exportJSON()})}renderTable(){this.tbody.innerHTML=``;let e=Ne.filter(e=>{let t=e.name.toLowerCase().includes(this.searchTerm)||e.osis.toLowerCase().includes(this.searchTerm),n=this.testamentFilter===`All`||e.testament===this.testamentFilter;return t&&n});if(e.length===0){let e=document.createElement(`tr`),t=document.createElement(`td`);t.colSpan=5,t.textContent=`No books found matching your criteria.`,t.style.textAlign=`center`,e.appendChild(t),this.tbody.appendChild(e);return}e.forEach(e=>{let t=document.createElement(`tr`),n=document.createElement(`td`);n.textContent=e.order.toString(),t.appendChild(n);let r=document.createElement(`td`);r.textContent=e.name,t.appendChild(r);let i=document.createElement(`td`);i.className=`osis-id-text`,i.textContent=e.osis,t.appendChild(i);let a=document.createElement(`td`),o=document.createElement(`span`);o.className=e.testament===`OT`?`tag-ot`:`tag-nt`,o.textContent=e.testament===`OT`?`Old Testament`:`New Testament`,a.appendChild(o),t.appendChild(a);let s=document.createElement(`td`),c=document.createElement(`button`);c.className=`osis-copy-btn`,c.textContent=`Copy`,c.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(e.osis),c.textContent=`Copied!`,c.classList.add(`copied`),setTimeout(()=>{c.textContent=`Copy`,c.classList.remove(`copied`)},2e3)}catch(e){console.error(`Failed to copy`,e),c.textContent=`Error`}}),s.appendChild(c),t.appendChild(s),this.tbody.appendChild(t)})}exportJSON(){let e=JSON.stringify(Ne,null,2),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`osis-bible-book-identifiers.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}render(){return this.container}},K={gcashQrPath:`https://raw.githubusercontent.com/shepherdbible/shepherdbible.github.io/main/assets/images/support/gcash-qr.jpg`,gcashUrl:``,qrphQrPath:`https://raw.githubusercontent.com/shepherdbible/shepherdbible.github.io/main/assets/images/support/qrph-qr.jpg`,qrphUrl:`https://pm.link/org-WavBbKjcX6zzy1dVdWxHLFo5/gp8ThlC`,paypalQrPath:`https://raw.githubusercontent.com/shepherdbible/shepherdbible.github.io/main/assets/images/support/paypal-qr.jpg`,paypalUrl:`https://www.paypal.me/robelinghog`,buyMeACoffeeQrPath:`https://raw.githubusercontent.com/shepherdbible/shepherdbible.github.io/main/assets/images/support/buymeacoffee-qr.jpg`,buyMeACoffeeUrl:`https://buymeacoffee.com/nextsupportlab`,wiseQrPath:`https://raw.githubusercontent.com/shepherdbible/shepherdbible.github.io/main/assets/images/support/wise-qr.jpg`,wiseUrl:`https://wise.com/pay/r/HnGiUyRr9wIOzFk`};function Fe(e){try{return new URL(e).protocol===`https:`&&e.trim().length>0}catch{return!1}}function Ie(e,t){return Fe(e)?`
    <a
      href="${e}"
      target="_blank"
      rel="noopener noreferrer"
      class="payment-direct-link"
    >
      ${t}
    </a>
  `:`<p class="text-muted text-small">Payment link coming soon.</p>`}function Le(e,t){return`
    <div class="qr-container">
      <img
        src="${e}"
        alt="${t}"
        class="qr-image"
        loading="lazy"
        onerror="this.hidden = true; this.nextElementSibling.hidden = false;"
      />
      <div class="qr-placeholder" hidden>
        <p class="text-small">QR code unavailable</p>
      </div>
    </div>
  `}function q(e){return`
    <div
      id="${e.id}"
      class="card payment-card text-center"
    >
      <h3>${e.title}</h3>
      <p class="text-muted text-small">
        ${e.description}
      </p>

      ${Le(e.qrPath,e.qrAlt)}

      <p class="text-small qr-instruction">
        Scan the QR code with your phone camera.
      </p>

      <div class="payment-link-wrapper">
        ${Ie(e.url,e.linkLabel)}
      </div>
    </div>
  `}async function Re(){try{let e=await fetch(`https://ipapi.co/json/`,{signal:AbortSignal.timeout(4e3)});return e.ok?(await e.json()).country_code?.toUpperCase()??null:null}catch{return null}}var ze=class{render(){return`
      <div class="support-page container" data-country="unknown">

        <section class="hero-section">
          <h1>Support Shepherd Bible</h1>
         
          <p class="text-muted hero-subtitle">
             Support ongoing development, more Bible translations, new features, and bug fixes to make Shepherd Bible better for everyone.
          </p>
          
          <p class="reassurance-text">
            <span aria-hidden="true">♥</span>
            Every contribution is voluntary.
          </p>
        </section>

        <section class="section payments-section">
          <p
            id="support-payment-recommendation"
            class="text-muted text-center recommendation-text"
            aria-live="polite"
          >
            Choose the donation method that works best for you to support Shepherd Bible.
          </p>

          <div class="grid payments-grid">
            ${q({id:`ph-card`,title:`GCash`,description:`Support using GCash.`,qrPath:K.gcashQrPath,qrAlt:`GCash payment QR code`,url:K.gcashUrl,linkLabel:`Open GCash payment link`})}

     ${q({id:`phq-card`,title:`PHQ`,description:`Support using PHQ.`,qrPath:K.qrphQrPath,qrAlt:`PHQ payment QR code`,url:K.qrphUrl,linkLabel:`Open PHQ payment link`})}


            ${q({id:`paypal-card`,title:`PayPal`,description:`Support Shepherd Bible internationally.`,qrPath:K.paypalQrPath,qrAlt:`PayPal QR code`,url:K.paypalUrl,linkLabel:`Open PayPal`})}

            ${q({id:`bmc-card`,title:`Buy Me a Coffee`,description:`Contribute through our creator page.`,qrPath:K.buyMeACoffeeQrPath,qrAlt:`Buy Me a Coffee QR code`,url:K.buyMeACoffeeUrl,linkLabel:`Open Buy Me a Coffee`})}
     ${q({id:`wise-card`,title:`Wise`,description:`Support Shepherd Bible via Wise.`,qrPath:K.wiseQrPath,qrAlt:`Wise QR code`,url:K.wiseUrl,linkLabel:`Open Wise`})}
          </div>
        </section>

        <section class="section split-bottom-section">
          <div class="benefits-compact">
            <h2>How Contributions Help</h2>
            <ul class="benefits-list text-muted">
              <li><strong>Free Tools:</strong> Maintain and improve Bible-reading features.</li>
              <li><strong>Community:</strong> Support testimonies, feedback, and encouragement.</li>
              <li><strong>Updates:</strong> Fund ongoing development and maintenance.</li>
            </ul>
          </div>
        </section>

      </div>
    `}mount(){let e=document.querySelector(`.support-page`),t=document.getElementById(`support-payment-recommendation`);if(!e)return;let n=document.getElementById(`gcash-card`),r=document.getElementById(`qrph-card`),i=document.getElementById(`paypal-card`),a=document.getElementById(`bmc-card`),o=document.getElementById(`wise-card`),s=[n,r],c=[i,a,o];s.forEach(e=>{e&&(e.hidden=!0)}),Re().then(n=>{e.dataset.country=n??`unknown`,[...s,...c].forEach(e=>{e?.classList.remove(`payment-preferred`)}),n===`PH`?s.forEach(e=>{e&&(e.hidden=!1),e?.classList.add(`payment-preferred`)}):(s.forEach(e=>{e&&(e.hidden=!0)}),c.forEach(e=>{e?.classList.add(`payment-preferred`)})),t&&(t.textContent=`Choose the donation method that works best for you to support Shepherd Bible.`)})}},Be=JSON.parse(`[{"id":"kjv-bible-amazon","title":"KJV Holy Bible: Personal Size Giant Print with 43,000 Cross References, Black Bonded Leather, Red Letter, Comfort Print: King James Version","version":"KJV","description":"A reference Bible for everyday use containing giant print type in an easy-to-carry format. This edition is published in large KJV Comfort Print type, which was designed exclusively for Thomas Nelson to be the most readable at any size. The literary beauty of the King James Version with the readability of Thomas Nelson's custom KJV font, plus essential study resources, words of Christ in red, and an easy-to-read type size, all in a package that’s convenient to take anywhere. That’s the KJV Personal Size Giant Print Reference Bible. The giant print format and beautifully designed layout of this edition will add to your comfort as you dig deep into God’s Word. Additional features include an attractive end-of-page reference system, book introductions, a concordance, and full-color maps.","format":"Hardcover","images":["https://m.media-amazon.com/images/I/71HMcQa2erL._SY466_.jpg","https://m.media-amazon.com/images/I/61asmCht3AL._SL1200_.jpg","https://m.media-amazon.com/images/I/81PFudpN5xL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":23,"retailer":"Thomas Nelson (Amazon) ","productUrl":"https://link.amazon/B0iBoIjvk"}]},{"id":"kjv-bible-large-print-amazon","title":"KJV, Pew Bible, Large Print, Hardcover, Black, Red Letter, Comfort Print: Holy Bible, King James Version","version":"KJV","description":"The classic King James Version, one of the most influential and beautiful works of art in the English language, continues to be the standard translation for numerous churches and millions of Christians. This bestselling Bible translation has helped inspire, encourage, and strengthen people from all walks of life.\\n\\nInvite your eyes to linger and engage God’s Word with new, easy-to-read Comfort Print® KJV Bibles from Thomas Nelson. Blending modern technology with old-world craftsmanship, Comfort Print® KJV Bibles are designed with exclusive fonts, reflecting the beautiful and timeless character of the King James translation, to enhance your scripture reading experience.\\n\\nFeatures:\\n• Words of Christ in red help you quickly identify Jesus’ teachings and statements\\n• Miracles and parables of Jesus call out important events during Jesus’ earthly ministry\\n• Easy-to-read 12.5-point KJV Comfort Print","format":"Hardcover","images":["https://m.media-amazon.com/images/I/71gYH6YWY+L._SL1500_.jpg","https://m.media-amazon.com/images/I/81CR9XG0s9L._SL1500_.jpg","https://m.media-amazon.com/images/I/A1W2JNtC2qL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":10.7,"retailer":"Thomas Nelson (Amazon) ","productUrl":"https://link.amazon/B0fOEo7zt"}]},{"id":"esv-study-bible","title":"ESV Study Bible","version":"ESV","description":"The ESV Study Bible was designed to help you understand the Bible in a deeper way. Created by a diverse team of 95 leading Bible scholars and teachers―from 9 countries, nearly 20 denominations, and 50 seminaries, colleges, and universities―the ESV Study Bible features a wide array of study tools, including extensive study notes, 200 full-color maps, 40 full-color illustrations, charts, timelines, articles, and introductions, making it a valuable resource for serious readers, students, and teachers of God’s Word.","format":"Leather-bound","images":["https://m.media-amazon.com/images/I/51ljyhBsGcL._SL1500_.jpg","https://m.media-amazon.com/images/I/81sgs33IPxL._SL1500_.jpg","https://m.media-amazon.com/images/I/81odmehclbL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":24,"retailer":"ESV Bibles","productUrl":"https://link.amazon/B0gWsF5iv"}]},{"id":"niv-study-bible","title":"NIV Study Bible, Fully Revised Edition (Study Deeply. Believe Wholeheartedly.), Hardcover, Red Letter, Comfort Print","version":"NIV","description":"This stunning, full-color study Bible answers your pressing questions with just the right amount of information, placed in just the right location.\\n\\nWith a decades-long legacy of helping readers understand the Bible's meaning, the NIV Study Bible reflects the mission of the New International Version (NIV): to provide an accurate, readable, and clear guide to Scripture. Designed specifically to complement the NIV translation, its editorial team brings the same accuracy and clarity to every study note.\\n\\nFeatures:\\n\\n• Complete text of the accurate, readable, and clear New International Version (NIV)\\n• 21,000+ study notes, with icons that make important information easy to identify\\n• Extensive study resources, including 125+ topical articles, 16 pages of full-color maps, a comprehensive NIV concordance with nearly 4,800 entries, and a subject note index\\n• Book introductions and outlines for all 66 books, plus six section introductions providing valuable background information\\n• In-text visual aids, including maps, charts, diagrams, and illustrations that clarify biblical events and narratives\\n• Words of Jesus printed in red\\n• Exclusive Zondervan NIV Comfort Print® typeface\\n• Print size: 9-point\\n\\nNow fully revised and updated, this trusted study Bible offers an even richer learning experience. A committee of leading biblical scholars, including current and former NIV translators, has reviewed every note, article, chart, and essay to make the Bible's meaning clearer. Thousands of newly written or revised notes and articles, together with hundreds of full-color maps, charts, photographs, and illustrations, provide an extensive collection of study resources designed to deepen your understanding of Scripture and its application to daily life.","format":"Leather-bound","images":["https://m.media-amazon.com/images/I/71GKX8FKjHL._SL1500_.jpg","https://m.media-amazon.com/images/I/71yUztmiRIL._SL1200_.jpg","https://m.media-amazon.com/images/I/71EthwaC-sL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":26,"retailer":"Kenneth L. Barker","productUrl":"https://link.amazon/B0eSQ28f1"}]},{"id":"kjv-diglot-hardcover","title":"KJV 1611 BIBLE DIGLOT ENGLISH-TAGALOG ANG BIBLIA","version":"KJV 1611 BIBLE DIGLOT ENGLISH-TAGALOG ANG BIBLIA","description":"Parallel Bible English–Tagalog\\n\\n- Gold edge\\n- Very readable in both English and Tagalog\\n- Length: 8.5 inches\\n- Width: 5.75 inches\\n- Thickness: 1.25 inches\\n- Weight: 0.8 kg\\n- Old and New Testaments\\n- KJV 1611\\n- Soft leatherette cover\\n- For bilingual readers\\n- With thumb index\\n- Available in brown and black","format":"Hardcover","images":["https://down-ph.img.susercontent.com/file/ph-11134207-7r990-lvzdvy34yp29e2.webp","https://down-ph.img.susercontent.com/file/ph-11134207-81zth-mkrqcxyjsfeu4e.webp","https://m.media-amazon.com/images/I/91HBtuBeD2L._SL1500_.jpg"],"offers":[{"country":"PH","currency":"PHP","price":849,"retailer":"CONQUERORS BOOK SHOP","productUrl":"https://s.shopee.ph/8V9r4p3xyx"},{"country":"US","currency":"USD","price":125,"retailer":"American Bible Society (Amazon)","productUrl":"https://link.amazon/B07u3d9N9"}]},{"id":"purpose-driven-life-rick-warren","title":"The Purpose-Driven Life: What on Earth Am I Here For?","version":"Christian Living","description":"You are not an accident. Even before the universe was created, God had you in mind, and he planned you for his purposes. These purposes will extend far beyond the few years you will spend on earth. You were made to last forever! Self-help books often suggest that you try to discover the meaning and purpose of your life by looking within yourself, but Rick Warren says that is the wrong place to start. You must begin with God, your Creator, and his reasons for creating you. You were made by God and for God, and until you understand that, life will never make sense. This book will help you understand why you are alive and God's amazing plan for you---both here and now, and for eternity. Rick Warren will guide you through a personal 40-day spiritual journey that will transform your answer to life's most important question: What on earth am I here for? Knowing God's purpose for creating you will reduce your stress, focus your energy, simplify your decisions, give meaning to your life, and, most importantly, prepare you for eternity. The Purpose Driven Life is a blueprint for Christian living in the 21st century---a lifestyle based on God's eternal purposes, not cultural values. Using over 1,200 scriptural quotes and references, it challenges the conventional definitions of worship, fellowship, discipleship, ministry, and evangelism. In the tradition of Oswald Chambers, Rick Warren offers distilled wisdom on the essence of what life is all about. This is a book of hope and challenge that you will read and re-read, and it will be a classic treasured by generations to come.","format":"Hardcover","images":["https://m.media-amazon.com/images/I/91WhuCH3dFL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":15.92,"retailer":"Rick Warren (Amazon)","productUrl":"https://link.amazon/B02JlqBum"}]}]`),J=`https://via.placeholder.com/400x300?text=No+Image+Available`,Ve=[{code:`AF`,label:`Afghanistan (AF)`},{code:`AX`,label:`Aland Islands (AX)`},{code:`AL`,label:`Albania (AL)`},{code:`DZ`,label:`Algeria (DZ)`},{code:`AS`,label:`American Samoa (AS)`},{code:`AD`,label:`Andorra (AD)`},{code:`AO`,label:`Angola (AO)`},{code:`AI`,label:`Anguilla (AI)`},{code:`AQ`,label:`Antarctica (AQ)`},{code:`AG`,label:`Antigua and Barbuda (AG)`},{code:`AR`,label:`Argentina (AR)`},{code:`AM`,label:`Armenia (AM)`},{code:`AW`,label:`Aruba (AW)`},{code:`AU`,label:`Australia (AU)`},{code:`AT`,label:`Austria (AT)`},{code:`AZ`,label:`Azerbaijan (AZ)`},{code:`BS`,label:`Bahamas (BS)`},{code:`BH`,label:`Bahrain (BH)`},{code:`BD`,label:`Bangladesh (BD)`},{code:`BB`,label:`Barbados (BB)`},{code:`BY`,label:`Belarus (BY)`},{code:`BE`,label:`Belgium (BE)`},{code:`BZ`,label:`Belize (BZ)`},{code:`BJ`,label:`Benin (BJ)`},{code:`BM`,label:`Bermuda (BM)`},{code:`BT`,label:`Bhutan (BT)`},{code:`BO`,label:`Bolivia (BO)`},{code:`BA`,label:`Bosnia and Herzegovina (BA)`},{code:`BW`,label:`Botswana (BW)`},{code:`BR`,label:`Brazil (BR)`},{code:`IO`,label:`British Indian Ocean Territory (IO)`},{code:`BN`,label:`Brunei Darussalam (BN)`},{code:`BG`,label:`Bulgaria (BG)`},{code:`BF`,label:`Burkina Faso (BF)`},{code:`BI`,label:`Burundi (BI)`},{code:`KH`,label:`Cambodia (KH)`},{code:`CM`,label:`Cameroon (CM)`},{code:`CA`,label:`Canada (CA)`},{code:`CV`,label:`Cape Verde (CV)`},{code:`KY`,label:`Cayman Islands (KY)`},{code:`CF`,label:`Central African Republic (CF)`},{code:`TD`,label:`Chad (TD)`},{code:`CL`,label:`Chile (CL)`},{code:`CN`,label:`China (CN)`},{code:`CX`,label:`Christmas Island (CX)`},{code:`CC`,label:`Cocos (Keeling) Islands (CC)`},{code:`CO`,label:`Colombia (CO)`},{code:`KM`,label:`Comoros (KM)`},{code:`CG`,label:`Congo (CG)`},{code:`CD`,label:`Congo, Democratic Republic (CD)`},{code:`CK`,label:`Cook Islands (CK)`},{code:`CR`,label:`Costa Rica (CR)`},{code:`CI`,label:`Cote D'Ivoire (CI)`},{code:`HR`,label:`Croatia (HR)`},{code:`CU`,label:`Cuba (CU)`},{code:`CY`,label:`Cyprus (CY)`},{code:`CZ`,label:`Czech Republic (CZ)`},{code:`DK`,label:`Denmark (DK)`},{code:`DJ`,label:`Djibouti (DJ)`},{code:`DM`,label:`Dominica (DM)`},{code:`DO`,label:`Dominican Republic (DO)`},{code:`EC`,label:`Ecuador (EC)`},{code:`EG`,label:`Egypt (EG)`},{code:`SV`,label:`El Salvador (SV)`},{code:`GQ`,label:`Equatorial Guinea (GQ)`},{code:`ER`,label:`Eritrea (ER)`},{code:`EE`,label:`Estonia (EE)`},{code:`ET`,label:`Ethiopia (ET)`},{code:`FK`,label:`Falkland Islands (FK)`},{code:`FO`,label:`Faroe Islands (FO)`},{code:`FJ`,label:`Fiji (FJ)`},{code:`FI`,label:`Finland (FI)`},{code:`FR`,label:`France (FR)`},{code:`GF`,label:`French Guiana (GF)`},{code:`PF`,label:`French Polynesia (PF)`},{code:`GA`,label:`Gabon (GA)`},{code:`GM`,label:`Gambia (GM)`},{code:`GE`,label:`Georgia (GE)`},{code:`DE`,label:`Germany (DE)`},{code:`GH`,label:`Ghana (GH)`},{code:`GI`,label:`Gibraltar (GI)`},{code:`GR`,label:`Greece (GR)`},{code:`GL`,label:`Greenland (GL)`},{code:`GD`,label:`Grenada (GD)`},{code:`GP`,label:`Guadeloupe (GP)`},{code:`GU`,label:`Guam (GU)`},{code:`GT`,label:`Guatemala (GT)`},{code:`GG`,label:`Guernsey (GG)`},{code:`GN`,label:`Guinea (GN)`},{code:`GW`,label:`Guinea-Bissau (GW)`},{code:`GY`,label:`Guyana (GY)`},{code:`HT`,label:`Haiti (HT)`},{code:`VA`,label:`Holy See (Vatican City) (VA)`},{code:`HN`,label:`Honduras (HN)`},{code:`HK`,label:`Hong Kong (HK)`},{code:`HU`,label:`Hungary (HU)`},{code:`IS`,label:`Iceland (IS)`},{code:`IN`,label:`India (IN)`},{code:`ID`,label:`Indonesia (ID)`},{code:`IR`,label:`Iran (IR)`},{code:`IQ`,label:`Iraq (IQ)`},{code:`IE`,label:`Ireland (IE)`},{code:`IM`,label:`Isle of Man (IM)`},{code:`IL`,label:`Israel (IL)`},{code:`IT`,label:`Italy (IT)`},{code:`JM`,label:`Jamaica (JM)`},{code:`JP`,label:`Japan (JP)`},{code:`JE`,label:`Jersey (JE)`},{code:`JO`,label:`Jordan (JO)`},{code:`KZ`,label:`Kazakhstan (KZ)`},{code:`KE`,label:`Kenya (KE)`},{code:`KI`,label:`Kiribati (KI)`},{code:`KP`,label:`Korea, North (KP)`},{code:`KR`,label:`Korea, South (KR)`},{code:`KW`,label:`Kuwait (KW)`},{code:`KG`,label:`Kyrgyzstan (KG)`},{code:`LA`,label:`Laos (LA)`},{code:`LV`,label:`Latvia (LV)`},{code:`LB`,label:`Lebanon (LB)`},{code:`LS`,label:`Lesotho (LS)`},{code:`LR`,label:`Liberia (LR)`},{code:`LY`,label:`Libya (LY)`},{code:`LI`,label:`Liechtenstein (LI)`},{code:`LT`,label:`Lithuania (LT)`},{code:`LU`,label:`Luxembourg (LU)`},{code:`MO`,label:`Macao (MO)`},{code:`MK`,label:`North Macedonia (MK)`},{code:`MG`,label:`Madagascar (MG)`},{code:`MW`,label:`Malawi (MW)`},{code:`MY`,label:`Malaysia (MY)`},{code:`MV`,label:`Maldives (MV)`},{code:`ML`,label:`Mali (ML)`},{code:`MT`,label:`Malta (MT)`},{code:`MH`,label:`Marshall Islands (MH)`},{code:`MQ`,label:`Martinique (MQ)`},{code:`MR`,label:`Mauritania (MR)`},{code:`MU`,label:`Mauritius (MU)`},{code:`YT`,label:`Mayotte (YT)`},{code:`MX`,label:`Mexico (MX)`},{code:`FM`,label:`Micronesia (FM)`},{code:`MD`,label:`Moldova (MD)`},{code:`MC`,label:`Monaco (MC)`},{code:`MN`,label:`Mongolia (MN)`},{code:`ME`,label:`Montenegro (ME)`},{code:`MS`,label:`Montserrat (MS)`},{code:`MA`,label:`Morocco (MA)`},{code:`MZ`,label:`Mozambique (MZ)`},{code:`MM`,label:`Myanmar (MM)`},{code:`NA`,label:`Namibia (NA)`},{code:`NR`,label:`Nauru (NR)`},{code:`NP`,label:`Nepal (NP)`},{code:`NL`,label:`Netherlands (NL)`},{code:`NC`,label:`New Caledonia (NC)`},{code:`NZ`,label:`New Zealand (NZ)`},{code:`NI`,label:`Nicaragua (NI)`},{code:`NE`,label:`Niger (NE)`},{code:`NG`,label:`Nigeria (NG)`},{code:`NU`,label:`Niue (NU)`},{code:`NF`,label:`Norfolk Island (NF)`},{code:`MP`,label:`Northern Mariana Islands (MP)`},{code:`NO`,label:`Norway (NO)`},{code:`OM`,label:`Oman (OM)`},{code:`PK`,label:`Pakistan (PK)`},{code:`PW`,label:`Palau (PW)`},{code:`PS`,label:`Palestine (PS)`},{code:`PA`,label:`Panama (PA)`},{code:`PG`,label:`Papua New Guinea (PG)`},{code:`PY`,label:`Paraguay (PY)`},{code:`PE`,label:`Peru (PE)`},{code:`PH`,label:`Philippines (PH)`},{code:`PN`,label:`Pitcairn (PN)`},{code:`PL`,label:`Poland (PL)`},{code:`PT`,label:`Portugal (PT)`},{code:`PR`,label:`Puerto Rico (PR)`},{code:`QA`,label:`Qatar (QA)`},{code:`RE`,label:`Reunion (RE)`},{code:`RO`,label:`Romania (RO)`},{code:`RU`,label:`Russia (RU)`},{code:`RW`,label:`Rwanda (RW)`},{code:`BL`,label:`Saint Barthelemy (BL)`},{code:`SH`,label:`Saint Helena (SH)`},{code:`KN`,label:`Saint Kitts and Nevis (KN)`},{code:`LC`,label:`Saint Lucia (LC)`},{code:`MF`,label:`Saint Martin (MF)`},{code:`PM`,label:`Saint Pierre and Miquelon (PM)`},{code:`VC`,label:`Saint Vincent and the Grenadines (VC)`},{code:`WS`,label:`Samoa (WS)`},{code:`SM`,label:`San Marino (SM)`},{code:`ST`,label:`Sao Tome and Principe (ST)`},{code:`SA`,label:`Saudi Arabia (SA)`},{code:`SN`,label:`Senegal (SN)`},{code:`RS`,label:`Serbia (RS)`},{code:`SC`,label:`Seychelles (SC)`},{code:`SL`,label:`Sierra Leone (SL)`},{code:`SG`,label:`Singapore (SG)`},{code:`SX`,label:`Sint Maarten (SX)`},{code:`SK`,label:`Slovakia (SK)`},{code:`SI`,label:`Slovenia (SI)`},{code:`SB`,label:`Solomon Islands (SB)`},{code:`SO`,label:`Somalia (SO)`},{code:`ZA`,label:`South Africa (ZA)`},{code:`GS`,label:`South Georgia and the South Sandwich Islands (GS)`},{code:`SS`,label:`South Sudan (SS)`},{code:`ES`,label:`Spain (ES)`},{code:`LK`,label:`Sri Lanka (LK)`},{code:`SD`,label:`Sudan (SD)`},{code:`SR`,label:`Suriname (SR)`},{code:`SJ`,label:`Svalbard and Jan Mayen (SJ)`},{code:`SZ`,label:`Eswatini (SZ)`},{code:`SE`,label:`Sweden (SE)`},{code:`CH`,label:`Switzerland (CH)`},{code:`SY`,label:`Syria (SY)`},{code:`TW`,label:`Taiwan (TW)`},{code:`TJ`,label:`Tajikistan (TJ)`},{code:`TZ`,label:`Tanzania (TZ)`},{code:`TH`,label:`Thailand (TH)`},{code:`TL`,label:`Timor-Leste (TL)`},{code:`TG`,label:`Togo (TG)`},{code:`TK`,label:`Tokelau (TK)`},{code:`TO`,label:`Tonga (TO)`},{code:`TT`,label:`Trinidad and Tobago (TT)`},{code:`TN`,label:`Tunisia (TN)`},{code:`TR`,label:`Turkey (TR)`},{code:`TM`,label:`Turkmenistan (TM)`},{code:`TC`,label:`Turks and Caicos Islands (TC)`},{code:`TV`,label:`Tuvalu (TV)`},{code:`UG`,label:`Uganda (UG)`},{code:`UA`,label:`Ukraine (UA)`},{code:`AE`,label:`United Arab Emirates (AE)`},{code:`GB`,label:`United Kingdom (GB)`},{code:`US`,label:`United States (US)`},{code:`UM`,label:`United States Minor Outlying Islands (UM)`},{code:`UY`,label:`Uruguay (UY)`},{code:`UZ`,label:`Uzbekistan (UZ)`},{code:`VU`,label:`Vanuatu (VU)`},{code:`VE`,label:`Venezuela (VE)`},{code:`VN`,label:`Vietnam (VN)`},{code:`VG`,label:`Virgin Islands, British (VG)`},{code:`VI`,label:`Virgin Islands, U.S. (VI)`},{code:`WF`,label:`Wallis and Futuna (WF)`},{code:`EH`,label:`Western Sahara (EH)`},{code:`YE`,label:`Yemen (YE)`},{code:`ZM`,label:`Zambia (ZM)`},{code:`ZW`,label:`Zimbabwe (ZW)`}],He=class{products=Be;activeModalProduct=null;filters={searchQuery:``,selectedVersion:`ALL`,selectedFormat:`ALL`,selectedCountry:this.detectSyncCountryFallback(),sortBy:`featured`};detectSyncCountryFallback(){let e=localStorage.getItem(`shepherd_store_country`);if(e)return e;let t=navigator.language||``;return t.includes(`PH`)?`PH`:t.includes(`GB`)?`GB`:t.includes(`CA`)?`CA`:t.includes(`AU`)?`AU`:`US`}async detectLocalCountryViaAPI(){if(!localStorage.getItem(`shepherd_store_country`))try{let e=await fetch(`https://ipapi.co/json/`);if(e.ok){let t=await e.json(),n=t.country_code||t.country;if(Ve.some(e=>e.code===n)){this.filters.selectedCountry=n,localStorage.setItem(`shepherd_store_country`,n);let e=document.getElementById(`store-country`);e&&(e.value=n),this.updateGrid()}}}catch(e){console.warn(`Could not detect country via IP API. Falling back to default.`,e)}}render(){return`
      <div class="store-container" id="store-page-root">
       <header class="store-header">
          <h1>Bible Store Catalog</h1>
          <p class="store-subtitle">Discover physical Bibles and find retailer options for your region.</p>

          <p class="store-motto">
            Let Us Bring a Bible to Every Home
          </p>

          <blockquote class="store-quote">
            “Thy word is a lamp unto my feet, and a light unto my path.”
            <footer class="store-quote-author">
              — Psalm 119:105 (KJV)
            </footer>
          </blockquote>
        </header>

        <section class="store-controls" aria-label="Catalog Filters">
          <input 
            type="search" 
            class="store-search-input" 
            id="store-search" 
            placeholder="Search title, version, description..." 
            value="${this.filters.searchQuery}"
          />

          <select class="store-select" id="store-country">
            ${Ve.map(e=>`
              <option value="${e.code}" ${e.code===this.filters.selectedCountry?`selected`:``}>
                ${e.label}
              </option>
            `).join(``)}
          </select>

          <select class="store-select" id="store-version">
  <option value="ALL">All Books</option>

  <optgroup label="Bible Translations (Worldwide)">
  <!-- Major English Translations -->
  <option value="KJV">King James Version (KJV)</option>
  <option value="NIV">New International Version (NIV)</option>
  <option value="ESV">English Standard Version (ESV)</option>
  <option value="NKJV">New King James Version (NKJV)</option>
  <option value="NLT">New Living Translation (NLT)</option>
  <option value="CSB">Christian Standard Bible (CSB)</option>
  <option value="NASB">New American Standard Bible (NASB)</option>
  <option value="NRSV">New Revised Standard Version (NRSV)</option>
  <option value="ASV">American Standard Version (ASV)</option>
  <option value="WEB">World English Bible (WEB)</option>
  <option value="AMP">Amplified Bible (AMP)</option>
  <option value="MSG">The Message (MSG)</option>
  <option value="GNT">Good News Translation (GNT)</option>
  <option value="RSV">Revised Standard Version (RSV)</option>
  <option value="YLT">Young's Literal Translation (YLT)</option>
  <option value="DRB">Douay-Rheims Bible (DRB)</option>
  <option value="CEV">Contemporary English Version (CEV)</option>
  <option value="NCV">New Century Version (NCV)</option>
  <option value="TLB">The Living Bible (TLB)</option>

  <!-- Spanish Translations -->
  <option value="RVR1960">Reina-Valera 1960 (RVR1960)</option>
  <option value="NTV">Nueva Traducción Viviente (NTV)</option>
  <option value="LBLA">La Biblia de las Américas (LBLA)</option>
  <option value="DHH">Dios Habla Hoy (DHH)</option>
  <option value="PDT">Palabra de Dios para Todos (PDT)</option>

  <!-- Portuguese Translations -->
  <option value="ARC">Almeida Corrigida Fiel (ARC)</option>
  <option value="NVI-PT">Nova Versão Internacional (NVI - Português)</option>
  <option value="NTLH">Nova Tradução na Linguagem de Hoje (NTLH)</option>

  <!-- French Translations -->
  <option value="LSG">Louis Segond (LSG)</option>
  <option value="BFC">Bible en français courant (BFC)</option>
  <option value="SG21">Segond 21 (SG21)</option>

  <!-- German Translations -->
  <option value="LUT">Lutherbibel (LUT)</option>
  <option value="HFA">Hoffnung für alle (HFA)</option>
  <option value="SCH">Schlachter (SCH)</option>

  <!-- Chinese Translations -->
  <option value="CUVS">Chinese Union Version - Simplified (CUVS)</option>
  <option value="CUVT">Chinese Union Version - Traditional (CUVT)</option>
  <option value="CNV">Chinese New Version (CNV)</option>

  <!-- Korean Translations -->
  <option value="KRV">Korean Revised Version (KRV)</option>
  <option value="KLB">Korean Living Bible (KLB)</option>

  <!-- Tagalog / Filipino Translations -->
  <option value="ADB">Ang Dating Biblia (ADB)</option>
  <option value="RTPV">Magandang Balita Biblia (MBB)</option>

  <!-- Other Global / Historical Translations -->
  <option value="IRV">Indian Revised Version (IRV)</option>
  <option value="JLB">Japanese Living Bible (JLB)</option>
  <option value="SV1977">Statenvertaling (Dutch)</option>
  <option value="RST">Russian Synodal Translation (RST)</option>
</optgroup>

  <optgroup label="Christian Books">
    <option value="CHRISTIAN_LIVING">Christian Living</option>
    <option value="DEVOTIONAL">Devotionals</option>
    <option value="BIBLE_STUDY">Bible Study</option>
    <option value="CHURCH_LEADERSHIP">Church & Leadership</option>
  </optgroup>
</select>

          <select class="store-select" id="store-format">
            <option value="ALL">All Formats</option>
            <option value="Hardcover">Hardcover</option>
            <option value="Paperback">Paperback</option>
            <option value="Leather-bound">Leather-bound</option>
            <option value="Study Bible">Study Bible</option>
          </select>

          <select class="store-select" id="store-sort">
            <option value="featured">Featured Order</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </section>

        <section class="store-grid" id="store-grid-container"></section>
        <div id="store-modal-container"></div>
      </div>
    `}mount(){this.attachEventListeners(),this.updateGrid(),this.detectLocalCountryViaAPI()}attachEventListeners(){let e=document.getElementById(`store-page-root`);e&&(e.querySelector(`#store-search`)?.addEventListener(`input`,e=>{this.filters.searchQuery=e.target.value,this.updateGrid()}),e.querySelector(`#store-country`)?.addEventListener(`change`,e=>{this.filters.selectedCountry=e.target.value,localStorage.setItem(`shepherd_store_country`,this.filters.selectedCountry),this.updateGrid()}),e.querySelector(`#store-version`)?.addEventListener(`change`,e=>{this.filters.selectedVersion=e.target.value,this.updateGrid()}),e.querySelector(`#store-format`)?.addEventListener(`change`,e=>{this.filters.selectedFormat=e.target.value,this.updateGrid()}),e.querySelector(`#store-sort`)?.addEventListener(`change`,e=>{this.filters.sortBy=e.target.value,this.updateGrid()}))}getFilteredProducts(){return this.products.filter(e=>{let t=this.filters.searchQuery.toLowerCase(),n=!t||e.title.toLowerCase().includes(t)||e.version.toLowerCase().includes(t)||e.description.toLowerCase().includes(t),r=this.filters.selectedVersion===`ALL`||e.version===this.filters.selectedVersion,i=this.filters.selectedFormat===`ALL`||e.format===this.filters.selectedFormat;return n&&r&&i}).sort((e,t)=>{if(this.filters.sortBy===`featured`)return 0;let n=e.offers.find(e=>e.country===this.filters.selectedCountry),r=t.offers.find(e=>e.country===this.filters.selectedCountry),i=n?.price??1/0,a=r?.price??1/0;return this.filters.sortBy===`price-asc`?i-a:a-i})}updateGrid(){let e=document.getElementById(`store-grid-container`);if(!e)return;let t=this.getFilteredProducts();if(t.length===0){e.innerHTML=`<p class="no-results">No Bibles matched your search criteria. Try relaxing your filters.</p>`;return}e.innerHTML=t.map(e=>{let t=e.offers.find(e=>e.country===this.filters.selectedCountry),n=e.offers.length>0?e.offers[0]:null,r=t||n,i=e.images[0]||J;return`
        <article class="product-card" data-id="${e.id}">
          <div class="product-img-wrapper view-details-img" data-id="${e.id}" style="cursor: pointer;">
            <img 
              src="${i}" 
              alt="${e.title}" 
              class="product-img" 
              loading="lazy"
              onerror="this.onerror=null;this.src='${J}';"
            />
          </div>
          <div class="product-info">
            <span class="product-badge">${e.version} ${e.format?`• ${e.format}`:``}</span>
            <h2 class="product-title" style="cursor: pointer;" data-id="${e.id}">${e.title}</h2>
            <p class="product-desc">${e.description}</p>
            <div class="product-price-section">
              <span class="product-price">
                ${r&&r.price!==null?`${r.currency} ${r.price.toFixed(2)}${t?``:`<span style="font-size: 0.75rem; color: var(--color-text-muted, #666); font-weight: normal;">(${r.country})</span>`}`:`Not available`}
              </span>
              <div style="display: flex; gap: 0.5rem;">
                ${r?`<a href="${r.productUrl}" target="_blank"
          rel="noopener noreferrer"
          class="product-btn"
          style="text-decoration: none;">
          ${t?`View Store`:`Buy in ${r.country}`}
       </a>
       <button
          type="button"
          style="padding: 4px; min-width: 0; min-height: 0;"
          class="product-btn2 qr-code-btn"
          data-id="${e.id}"
          aria-label="Show QR code for ${e.title}"
          title="Scan to open product on your phone">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <path d="M14 14h3v3h-3zM20 14v2M20 20h-3M14 20v-1"/>
          </svg>
       </button>
       <button class="product-btn2 view-details-btn"
        style="padding: 4px; min-width: 0; min-height: 0;"
          data-id="${e.id}"
          style="border: 1px solid var(--color-border, #ccc); align-items: center;">
          Details
       </button>`:`<button  style="padding: 4px; min-width: 0; min-height: 0;" class="product-btn2 view-details-btn"
          data-id="${e.id}">Details</button>`}
              </div>
            </div>
          </div>
        </article>
      `}).join(``),e.querySelectorAll(`.view-details-img, .product-title, .view-details-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-id`);if(!t)return;let n=this.products.find(e=>e.id===t);n&&this.openDetailModal(n)})}),e.querySelectorAll(`.qr-code-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id;if(!t)return;let n=this.products.find(e=>e.id===t);if(!n)return;let r=n.offers.find(e=>e.country===this.filters.selectedCountry)||(n.offers.length>0?n.offers[0]:null);r?.productUrl&&this.openQrModal(n.title,r.productUrl)})})}openDetailModal(e){this.activeModalProduct=e;let t=document.getElementById(`store-modal-container`);if(!t)return;let n=e.images.length>0?e.images:[J];t.innerHTML=`
      <div class="modal-overlay" id="modal-overlay">
        <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button class="modal-close" id="modal-close">&times;</button>
          
          <div class="modal-body">
            <div class="modal-gallery">
              <img 
                id="modal-main-img" 
                src="${n[0]}" 
                alt="${e.title}" 
                style="width: 100%; aspect-ratio: 4/3; object-fit: contain; border-radius: 6px;"
                onerror="this.onerror=null;this.src='${J}';"
              />
              ${n.length>1?`
                <div class="gallery-thumbnails">
                  ${n.map((e,t)=>`
                    <img 
                      src="${e}" 
                      class="gallery-thumb ${t===0?`active`:``}" 
                      data-idx="${t}"
                      onerror="this.onerror=null;this.src='${J}';"
                    />
                  `).join(``)}
                </div>
              `:``}
            </div>

            <h2 id="modal-title" style="margin-top: 1rem;">${e.title} (${e.version})</h2>
            <!-- Added white-space: pre-line to preserve JSON line breaks -->
<p style="white-space: pre-line; line-height: 1.6; color: var(--color-text-muted, #475569);">
  ${e.description}
</p>

            <h3 style="margin-top: 1.5rem; margin-bottom: 0.5rem;">Retailer Offers</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${e.offers.map(e=>`
                <li style="padding: 1rem 0; border-bottom: 1px solid var(--color-border-subtle, #eee); display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; align-items: center;">
                  <span><strong>[${e.country}]</strong>${e.retailer}<br/>
                  <small style="color: var(--color-text-muted, #666);">${e.price===null?`Check Site for Pricing`:`${e.currency} ${e.price.toFixed(2)}`}</small></span>
                  <a href="${e.productUrl}" target="_blank" rel="noopener noreferrer" class="product-btn" style="text-decoration: none;">
                    Shop at Retailer &rarr;
                  </a>
                </li>
              `).join(``)}
            </ul>
          </div>
        </div>
      </div>
    `,t.querySelector(`#modal-close`)?.addEventListener(`click`,()=>this.closeModal()),t.querySelector(`#modal-overlay`)?.addEventListener(`click`,e=>{e.target.id===`modal-overlay`&&this.closeModal()}),t.querySelectorAll(`.gallery-thumb`).forEach(e=>{e.addEventListener(`click`,e=>{let r=parseInt(e.currentTarget.getAttribute(`data-idx`)||`0`),i=t.querySelector(`#modal-main-img`);i&&(i.src=n[r]),t.querySelectorAll(`.gallery-thumb`).forEach(e=>e.classList.remove(`active`)),e.currentTarget.classList.add(`active`)})})}async openQrModal(e,t){document.getElementById(`product-qr-modal`)?.remove();let n=document.createElement(`div`);n.id=`product-qr-modal`,Object.assign(n.style,{position:`fixed`,inset:`0`,zIndex:`2147483647`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`16px`,background:`rgba(0, 0, 0, 0.55)`,boxSizing:`border-box`});let r=document.createElement(`div`);Object.assign(r.style,{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,width:`100%`,maxWidth:`340px`,padding:`24px`,borderRadius:`12px`,background:`#ffffff`,color:`#222222`,boxShadow:`0 12px 40px rgba(0,0,0,0.3)`,textAlign:`center`,boxSizing:`border-box`});let i=document.createElement(`button`);i.type=`button`,i.textContent=`×`,i.setAttribute(`aria-label`,`Close QR code`),Object.assign(i.style,{position:`absolute`,top:`6px`,right:`10px`,border:`none`,background:`transparent`,color:`#222`,fontSize:`28px`,cursor:`pointer`});let a=document.createElement(`h2`);a.textContent=e,Object.assign(a.style,{margin:`8px 20px 12px`,color:`#222`,fontSize:`20px`});let o=document.createElement(`p`);o.textContent=`Scan this QR code to open the product page.`,o.style.color=`#555`;let s=document.createElement(`div`);Object.assign(s.style,{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`240px`,height:`240px`,background:`#fff`,color:`#222`}),s.textContent=`Generating QR code...`;let c=document.createElement(`button`);c.type=`button`,c.textContent=`Copy product link`,Object.assign(c.style,{marginTop:`16px`,padding:`10px 16px`,border:`none`,borderRadius:`6px`,background:`#800020`,color:`#fff`,cursor:`pointer`}),r.append(i,a,o,s,c),n.appendChild(r),document.body.appendChild(n);let l=()=>n.remove();i.addEventListener(`click`,l),n.addEventListener(`click`,e=>{e.target===n&&l()}),c.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(t),c.textContent=`Link copied!`}catch{c.textContent=`Copy failed`}});try{let r=await ue.toDataURL(t,{width:240,margin:2,errorCorrectionLevel:`M`});if(!n.isConnected)return;let i=document.createElement(`img`);i.src=r,i.alt=`QR code for ${e}`,i.width=240,i.height=240,i.style.display=`block`,s.replaceChildren(i)}catch(e){console.error(`QR generation failed:`,e),s.textContent=`QR generation failed. Check the console.`}}closeModal(){let e=document.getElementById(`store-modal-container`);e&&(e.innerHTML=``),this.activeModalProduct=null}},Y=(e,t,n)=>`
  <section class="suggestions-section">
    <div class="suggestions-section-number">${e}</div>
    <div class="suggestions-section-content">
      <h2>${t}</h2>
      ${n}
    </div>
  </section>
`,Ue={render:()=>`
    <main class="suggestions-page">
      <header class="suggestions-hero">
        <span class="suggestions-eyebrow">FAITH · FELLOWSHIP · AGAPE LOVE</span>
        <h1>Brotherly Suggestions</h1>
        <p>
          SHALOM, Brothers and Sisters, here are just a few brotherly suggestions.
        </p>
      </header>

      <article class="suggestions-content">
        ${Y(1,`Modesty and Reverence in Church Gatherings`,`
          <p>
            Suggestions for our church leaders, it is good to minimize disco like lights in church gathering. For our veteran sisters, good suggestion are modesty apparel dress choices, favoring dresses that echo reverence. For our longstanding brothers, I suggest selecting attire that is more appropriate than shorts, aligning with the occasion's significance
            <span class="scripture-ref">1 Timothy 2:9-10</span>
            <span class="scripture-ref">Romans 12:2</span>
            <span class="scripture-ref">1 Peter 3:3-4</span>
            <span class="scripture-ref">Isaiah 3:16-23</span>
            <span class="scripture-ref">1 John 2:16</span>
            <span class="scripture-ref">Revelation 17:4</span>
          </p>
          <p>
            When sharing God's Word online—whether through reels, posts, or live readings—let's also reflect His holiness in our appearance and presentation.
          </p>
          <blockquote>
            “So whether you eat or drink or whatever you do, do it all for the glory of God.”
            <cite>1 Corinthians 10:31</cite>
          </blockquote>
          <p>
            As followers of Christ, we are called to be models(lights) to the world—not only through our inner being, but also through our outward holiness. Our appearance should reflect the reverence we have for God's Word and the message we share.
          </p>
          <p>
            Let us honor the sacredness of the Bible by <strong>DRESSING MODESTLY AND REVERENTLY</strong>, even in casual or online settings. Our bodies are temples of the Holy Spirit
            <span class="scripture-ref">1 Corinthians 6:19</span>,
            and our online presence can inspire others toward deeper respect for God.
          </p>
          <h3>White upper clothes are also suitable for church gatherings.</h3>
          <img
            class="suggestions-image"
            src="https://raw.githubusercontent.com/nextcodelab/data-base-server/refs/heads/main/host_data/bible/images/modest5.png"
            alt="Children of the Light"
            loading="lazy"
          />
        `)}

        ${Y(2,`Repentance, Confession, and Forgiveness`,`
          <p>
            Embrace Repentance, Confession, Forgiveness, and Cleansing before Presenting Ourselves to the Lord
            <span class="scripture-ref">Matthew 5:23-24</span>.
          </p>
        `)}

        ${Y(3,`Encourage Bible Study and Sharing`,`
          <p>
            Promote learning and sharing by allowing others to express their opinions on topics such, as Bible study, meetings or fellowships. This will enable them to expand their knowledge and effectively convey the Good News to others. Lets teach them how to seek and apply the guidance of the Lord when spreading the Good News; it shouldn't be limited to leaders or teachers who have this knowledge. Encourage others to engage in reading the Bible so they can acquire the knowledge to share the Gospel
            <span class="scripture-ref">Colossians 3:16-17</span>.
          </p>
        `)}

        ${Y(4,`Encourage Everyone to Share the Gospel`,`
          <h3>
            PLEASE ENCOURAGE MEMBERS, THAT THEY CAN ALSO SHARE THE GOSPEL TO OTHERS FOR THE SALVATION FOR ETERNITY. JESUS IS COMING; LET'S CARRY THE BURDEN FOR THE LOST SOULS.
          </h3>
          <p>
            <em>Individually engaging with the Bible under the guidance of the Holy Spirit can assist individuals in building a solid foundation, ensuring they acquire a personal grasp of the truth. This footing can then shield them from falling easily for others' teachings, thereby upholding the truth for the succeeding generation.</em>
            <span class="scripture-ref">1 John 2:27</span>
          </p>
          <p>
            <em>The One and Only worthy Pioneer, Author and Finisher of our faith, spiritual lives</em>
            <span class="scripture-ref">Hebrews 12:2</span>.
            <br />
            *The Lord was showing me like a bright spotlight when we no longer see Jesus Christ as THE Pioneer and we all as His fellow spiritual pioneers along the Heavenly way He uniquely and personally leads us on from day one, then we are no longer on His way, since HE is the way; no other man is the way.
          </p>
          <blockquote>
            Blessed is he that readeth, and they that hear the words of this prophecy, and keep those things which are written therein: for the time is at hand.
            <cite>Revelation 1:3</cite>
          </blockquote>
        `)}

        ${Y(5,`Help Those in Need`,`
          <p>
            The Church follows in the footsteps of Lord Jesus and the Apostles by extending help to those, in need just as mentioned in
            <span class="scripture-ref">John 13:29</span>
            and Acts of Assistance
            <span class="scripture-ref">Romans 15:25-26</span>,
            <span class="scripture-ref">James 1:27</span>.
            This showcases the Churchs nature as it attends to the needs of the fortunate particularly widows and widowers. The act of providing assistance is done with humility with the purpose of bringing honor to God the Father and our Lord and Savior Jesus Christ
            <span class="scripture-ref">1 Peter 1:3</span>.
          </p>
        `)}

        ${Y(6,`Anonymous Giving for Generous Hearts`,`
          <p>
            A Guideline Inspired by our Lord Jesus's Teachings
            <span class="scripture-ref">Matthew 6:2-4</span>
          </p>
          <blockquote>
            When you give to the poor, don't let your left hand know what your right hand is doing.
            <cite>Matthew 6:3</cite>
          </blockquote>
          <p>
            When offering financial help to our fellow brethren within the Church, consider the example of placing the assistance in an envelope. Specify the recipient's name without indicating the source of the aid. This envelope can then be securely placed into the Offering Box.
          </p>
          <img
            class="suggestions-image suggestions-image-small"
            src="https://raw.githubusercontent.com/nextcodelab/data-base-server/refs/heads/main/host_data/bible/images/giving.png"
            alt="Anonymous Giving"
            loading="lazy"
          />
        `)}

        ${Y(7,`Welcoming Newcomers to the Church`,`
          <p>
            As followers of Christ, it is essential to show love and hospitality to newcomers in the church. Approach them with <strong>AGAPE</strong> love, acknowledging their presence and making them feel valued. Pray for them, extending blessings over their lives, and warmly welcome them into the church community.
          </p>
          <p>
            Encourage others in the congregation to help them feel at home, offering support and friendship. By doing so, we reflect the love of Christ, who calls us to welcome strangers as we would welcome Him:
          </p>
          <blockquote>
            Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it.
            <cite>Hebrews 13:2</cite>
          </blockquote>
          <blockquote>
            Therefore welcome one another as Christ has welcomed you, for the glory of God.
            <cite>Romans 15:7</cite>
          </blockquote>
          <p>
            When visiting homes, take the time to pray for the entire household. By doing so, we demonstrate that we care not just about an individual, but about the whole family. This invites God’s peace and blessings into their home and fosters unity and faith within the household. Jesus Himself emphasized the importance of bringing peace to homes:
          </p>
          <blockquote>
            Whatever house you enter, first say, 'Peace to this house!' If a man of peace is there, your peace will rest on him; if not, it will return to you.
            <cite>Luke 10:5-6</cite>
          </blockquote>
          <p>
            Let us be intentional in creating a space where everyone feels accepted, loved, and part of God’s family.
          </p>
        `)}

        ${Y(8,`Avoid Secret Societies and Cultic Practices`,`
          <p>
            Do not join secret societies such as Freemasonry, the Illuminati, or any other cultic organizations or fraternities. Our bodies and lives belong solely to Jesus Christ, who purchased us with His blood
            <span class="scripture-ref">1 Corinthians 6:19-20</span>.
          </p>
          <p>
            Furthermore, refrain from pursuing worldly ambitions, fame, money, or the approval of people, as these often lead to pride and idolatry.
            <span class="scripture-ref">Matthew 16:26</span>
            <span class="scripture-ref">Galatians 1:10</span>
            <span class="scripture-ref">Matthew 6:33</span>.
          </p>
          <p>
            Instead, pursue <strong>FAITH</strong> and <strong>AGAPE LOVE</strong> and live humbly, recognizing that every achievement, blessing, and success is solely due to God's grace and mercy
            <span class="scripture-ref">Ephesians 2:8-9</span>
            <span class="scripture-ref">Lamentations 3:22-23</span>.
            Always give glory to God in all things, saying:
          </p>
          <blockquote>
            Not to us, O Lord, not to us, but to Your name give glory because of Your steadfast love and faithfulness.
            <cite>Psalm 115:1</cite>
          </blockquote>
          <p>
            <span class="scripture-ref">Luke 10:17-20</span>
          </p>
          <p>
            Let us dedicate our lives to honoring God in humility and obedience.
          </p>
        `)}

        <section class="suggestions-section suggestions-section-plain">
          <div class="suggestions-section-content">
            <h2>Care for God's Creation</h2>
            <p>
              In addition to our responsibility to care for natures, animals
              <span class="scripture-ref">Proverbs 12:10</span>
              and creations. In a world dominated by technology and endless hours spent staring at technologies, artificials and screens, nature offers a profound alternative for relaxation and renewal.
            </p>
            <p>
              <span class="scripture-ref">Psalm 19:1</span> states:
            </p>
            <blockquote>
              The heavens declare the glory of God; the skies proclaim the work of his hands.
              <cite>Psalm 19:1</cite>
            </blockquote>
            <p>
              This encourages us to step outside, marvel at the beauty of creation, and find peace away from the busyness of modern life. Whether it’s a walk in a quiet forest, watching a sunset, or listening to the gentle sounds of birds. which God created for us. Explore the beautiful nature and surroundings of God’s creation.
            </p>
            <p>
              By immersing ourselves in nature, we can find a deeper sense of calm, reduce stress, and gain a renewed perspective on life. Through this, we honor God’s intention for creation—not only as stewards but also as beneficiaries of its beauty and tranquility.
            </p>
          </div>
        </section>

        <section class="suggestions-peace">
          <span class="suggestions-eyebrow">OUR CALLING</span>
          <h2>Be an Ambassador of Peace and AGAPE Love</h2>
          <p>
            In a world filled with conflict, division, and noise, <strong>we</strong> have a higher calling — to be an <strong>Ambassador of Peace, bringing AGAPE to the world</strong>.
            <span class="scripture-ref">Matthew 5:9</span>
          </p>
          <blockquote>
            Blessed are the peacemakers, for they will be called children of God.
            <cite>Matthew 5:9</cite>
          </blockquote>
          <p>
            God has entrusted us with the message of reconciliation, to shine as a light in dark places, and to carry His "peace" wherever we go.
            Let these verses remind us of that mission and stir our heart to walk in it boldly.
          </p>

          <div class="suggestions-verse-list">
            <div>
              <span class="scripture-ref">Matthew 5:9</span>
              <p>Blessed are the peacemakers, for they will be called children of God.</p>
            </div>
            <div>
              <span class="scripture-ref">Romans 12:18</span>
              <p>If it is possible, as far as it depends on you, live at peace with everyone.</p>
            </div>
            <div>
              <span class="scripture-ref">Hebrews 12:14</span>
              <p>Make every effort to live in peace with everyone and to be holy...</p>
            </div>
            <div>
              <span class="scripture-ref">James 3:18</span>
              <p>Peacemakers who sow in peace reap a harvest of righteousness.</p>
            </div>
          </div>
        </section>

        <section class="suggestions-section suggestions-section-plain">
          <div class="suggestions-section-content">
            <h2>Use the Bible in Everyday Life</h2>
            <p>
              The digital Bible is created to help us view or read in any language anytime and anywhere, and it is also helpful for personal notes or sermon outlines. However, when sharing the Word with others — especially in fellowship, teaching, evangelism, or mission work such as walking house-to-house — we encourage using a printed Bible. Having a physical Bible makes the sharing more meaningful and focused.
            </p>
            <p class="suggestions-emphasis">
              Serve GOD with HOLINESS and RIGHTEOUSNESS.
            </p>
            <p>
              These suggestions are not for newcomers to our gatherings; our desire is to ensure everyone feels equally embraced. Please remember, these are just suggestions, out of love for the <strong>BODY OF CHRIST</strong>.
            </p>
          </div>
        </section>

        <section class="suggestions-doctrine">
          <span class="suggestions-eyebrow">A REFLECTION ON FAITH</span>
          <h2>Our God Is One</h2>
          <p>
            Our God is <strong>ONE GOD</strong>, yet He manifests in many ways. He is not divided; He is the same God who:
          </p>
          <ul>
            <li>Moves and works as the <strong>Holy Spirit</strong>.</li>
            <li>
              Manifested in <strong>flesh</strong>, as <strong>Christ Jesus</strong>, who is fully <strong>human</strong> (Son of Man) and fully <strong>divine</strong> (Son of God).
            </li>
            <li>
              Appeared in various forms in the Old Testament:
              <ul>
                <li>
                  As <strong>angels or other forms</strong>:
                  <ul>
                    <li>
                      <span class="scripture-ref">Genesis 18:1-2</span>
                      — God appeared to Abraham by the oaks of Mamre, and three men (angels) came to him.
                    </li>
                    <li>
                      <span class="scripture-ref">Genesis 32:24-30</span>
                      — God (the Angel of the Lord) wrestled with Jacob; Jacob called the place Peniel, saying he saw God face to face.
                    </li>
                  </ul>
                </li>
                <li>
                  As a <strong>man</strong> appearing to people:
                  <ul>
                    <li>
                      <span class="scripture-ref">Exodus 3:2-4</span>
                      — God appeared to Moses in the burning bush.
                    </li>
                    <li>
                      <span class="scripture-ref">Judges 13:3-22</span>
                      — The Angel of the Lord appeared to Manoah and his wife.
                    </li>
                  </ul>
                </li>
                <li>
                  Appeared in miraculous signs:
                  <ul>
                    <li>
                      <span class="scripture-ref">Exodus 3:2</span>
                      — Burning bush that was not consumed.
                    </li>
                    <li>
                      <span class="scripture-ref">Genesis 16:7-14</span>
                      — The Angel of the Lord met Hagar in the desert.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Is <strong>all-encompassing and present everywhere</strong>, as affirmed in the New Testament:
          </p>
          <ul class="suggestions-reference-list">
            <li><span class="scripture-ref">Colossians 1:17</span> — "He is before all things, and in Him all things hold together."</li>
            <li><span class="scripture-ref">Ephesians 4:6</span> — "One God and Father of all, who is over all and through all and in all."</li>
            <li><span class="scripture-ref">1 Kings 8:27</span> — "But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?"</li>
          </ul>
          <p>
            Finally, in history, He came as <strong>the Son of Man</strong> (fully human) and <strong>the Son of God</strong> (fully divine), fulfilling His plan of salvation.
          </p>
          <p>
            When God visited Abraham, it was the <strong>same One</strong> who is in all, and all-encompassing.
          </p>
          <p>
            <strong>God is one in essence</strong>, yet He can reveal Himself in different ways, showing His power, presence, and love throughout history.
          </p>
          <p>
            He lives in believers’ body as temple <span class="scripture-ref">1 Corinthians 3:16</span>.
            Christ lives in me <span class="scripture-ref">Galatians 2:20</span>.
            And Jesus Christ is the image of the invisible God <span class="scripture-ref">Colossians 1:15</span>,
            the infinite God fully manifested in Jesus Christ bodily <span class="scripture-ref">Colossians 2:9</span>,
            fulfilling the meaning of Emmanuel <span class="scripture-ref">Matthew 1:23</span>.
            God’s presence fills the universe, yet His Spirit is not limited by it <span class="scripture-ref">Psalm 139:7-10</span>.
          </p>
        </section>

        <section class="suggestions-closing">
          <h2>Spreading Kindness and Blessing</h2>
          <p>
            Spreading Kindness and Blessing to Everyone with Words:
            <em>'The Grace of the Lord Jesus Be With You'</em>,
            <span class="scripture-ref">John 20:19</span>
            <span class="scripture-ref">1 Corinthians 16:23</span>
            <span class="scripture-ref">Philippians 4:23</span>.
          </p>
          <p class="suggestions-shalom">SHALOM</p>
          <p class="suggestions-closing-note">
            “The Lord watch between you and me, when we are absent one from another.”
          </p>
          <span class="scripture-ref">Genesis 31:49</span>
        </section>
      </article>
    </main>

    <style>
      .suggestions-page {
        --suggestions-accent: var(--color-primary, #800020);
        --suggestions-gold: var(--color-accent, #d4af37);
        max-width: 980px;
        margin: 0 auto;
        padding: 24px 20px 64px;
        color: var(--text-color, var(--color-text, inherit));
      }

      .suggestions-hero {
        padding: clamp(28px, 6vw, 64px) 0 36px;
        border-bottom: 1px solid var(--border-color, #ded8d0);
      }

      .suggestions-eyebrow {
        display: inline-block;
        margin-bottom: 12px;
        color: var(--suggestions-accent);
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.14em;
      }

      .suggestions-hero h1 {
        margin: 0 0 16px;
        font-size: clamp(2rem, 5vw, 3.4rem);
        line-height: 1.12;
        letter-spacing: -0.035em;
      }

      .suggestions-hero > p {
        max-width: 720px;
        margin: 0;
        font-size: 1.08rem;
        line-height: 1.8;
        opacity: 0.82;
      }

      .suggestions-content {
        padding-top: 12px;
      }

      .suggestions-intro {
        padding: 28px 0;
      }

      .suggestions-intro h2,
      .suggestions-section h2,
      .suggestions-peace h2,
      .suggestions-doctrine h2,
      .suggestions-closing h2 {
        margin: 0 0 14px;
        font-size: clamp(1.35rem, 3vw, 1.8rem);
        line-height: 1.3;
      }

      .suggestions-section {
        display: grid;
        grid-template-columns: 44px minmax(0, 1fr);
        gap: 20px;
        padding: 30px 0;
        border-top: 1px solid var(--border-color, #ded8d0);
      }

      .suggestions-section-number {
        display: grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--suggestions-accent);
        color: white;
        font-weight: 700;
      }

      .suggestions-section-content {
        min-width: 0;
      }

      /* Keep unnumbered sections aligned with the text column above. */
      .suggestions-section-plain > .suggestions-section-content {
        grid-column: 2;
      }

      .suggestions-page p,
      .suggestions-page li {
        line-height: 1.85;
      }

      .suggestions-page p {
        margin: 0 0 16px;
        overflow-wrap: anywhere;
      }

      .suggestions-section-content,
      .suggestions-page li,
      .suggestions-page blockquote,
      .suggestions-page img {
        max-width: 100%;
        min-width: 0;
        box-sizing: border-box;
      }

      .suggestions-page h3 {
        margin: 20px 0 10px;
        font-size: 1.12rem;
        line-height: 1.5;
      }

      .suggestions-page ul {
        padding-left: 24px;
      }

      .suggestions-page li {
        margin-bottom: 8px;
      }

      .scripture-ref {
        display: inline-block;
        margin: 2px 4px 2px 0;
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--surface-secondary, rgba(128, 0, 32, 0.07));
        color: var(--suggestions-accent);
        font-size: 0.86em;
        font-weight: 650;
        white-space: normal;
      }

      .suggestions-page blockquote {
        margin: 22px 0;
        padding: 18px 22px;
        border-left: 3px solid var(--suggestions-gold);
        border-radius: 0 8px 8px 0;
        background: var(--surface-secondary, rgba(128, 0, 32, 0.045));
        font-size: 1.04rem;
        line-height: 1.85;
      }

      .suggestions-page blockquote cite {
        display: block;
        margin-top: 8px;
        color: var(--suggestions-accent);
        font-size: 0.88rem;
        font-style: normal;
        font-weight: 700;
      }

      .suggestions-image {
        display: block;
        width: 100%;
        max-width: 720px;
        height: auto;
        margin: 22px auto;
        border-radius: 12px;
      }

      .suggestions-image-small {
        max-width: 440px;
      }

      .suggestions-peace,
      .suggestions-doctrine,
      .suggestions-closing {
        margin-top: 28px;
        padding: clamp(22px, 4vw, 40px);
        border: 1px solid var(--border-color, #ded8d0);
        border-radius: 16px;
      }

      .suggestions-peace {
        border-top: 4px solid var(--suggestions-gold);
      }

      .suggestions-verse-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        margin-top: 24px;
      }

      .suggestions-verse-list > div {
        padding: 16px;
        border-radius: 10px;
        background: var(--surface-secondary, rgba(128, 0, 32, 0.045));
      }

      .suggestions-verse-list p {
        margin: 8px 0 0;
      }

      .suggestions-reference-list li {
        margin-bottom: 12px;
      }

      .suggestions-emphasis {
        color: var(--suggestions-accent);
        font-size: 1.1rem;
        font-weight: 800;
      }

      .suggestions-shalom {
        display: block;
        margin: 16px 0;
        color: var(--suggestions-accent);
        font-size: 1.3rem;
        font-weight: 800;
        letter-spacing: 0.2em;
      }

      .suggestions-closing-note {
        font-style: italic;
      }

      .suggestions-world {
        padding: 44px 16px 20px;
        text-align: center;
      }

      .suggestions-world img {
        display: block;
        width: 100%;
        max-width: 560px;
        height: auto;
        margin: 0 auto 24px;
        border-radius: 12px;
      }

      .suggestions-world h2 {
        font-size: clamp(1.5rem, 4vw, 2.2rem);
      }

      .suggestions-world > p {
        font-weight: 700;
      }

      @media (max-width: 600px) {
        .suggestions-page {
          padding: 16px 16px 40px;
        }

        .suggestions-section {
          grid-template-columns: 32px minmax(0, 1fr);
          gap: 12px;
          padding: 24px 0;
        }

        .suggestions-section-number {
          width: 32px;
          height: 32px;
          font-size: 0.9rem;
        }

        .suggestions-page blockquote {
          padding: 14px 16px;
        }

        .suggestions-verse-list {
          grid-template-columns: 1fr;
        }
      }
    </style>
  `},We=JSON.parse(`[{"title":"I Saw Jesus and Was Terrified | This Is What He Showed Me","notes":"","thumbnail":"https://i.ytimg.com/vi/SAql-vsXS2U/hqdefault.jpg","link":"SAql-vsXS2U","group":"","readonly":true,"row_number":2},{"title":"A Muslim gets saved by Jesus Christ! Powerful Testimony!","notes":"","thumbnail":"https://i.ytimg.com/vi/PnGxckE5AUs/hqdefault.jpg","link":"PnGxckE5AUs","group":1,"readonly":true,"row_number":3},{"title":"I murdered him for Allah but God raised him up to forgive me.... SHOCKING STORY OF REDEMPTION!!","notes":"","thumbnail":"https://i.ytimg.com/vi/mtjMANw2hCA/hqdefault.jpg","link":"mtjMANw2hCA","group":1,"readonly":true,"row_number":4},{"title":"Should Christians keep the Sabbath? What about Mixed Fabric Clothes and Forbidden Foods??","notes":"","thumbnail":"https://i.ytimg.com/vi/1W5OYDqQXq0/hqdefault.jpg","link":"1W5OYDqQXq0","group":"","readonly":true,"row_number":5},{"title":"Muslim meets Jesus in dream and gets marked with an incredible sign for the rest of his life","notes":"","thumbnail":"https://i.ytimg.com/vi/8SldfaGZtLU/hqdefault.jpg","link":"8SldfaGZtLU","group":1,"readonly":true,"row_number":6},{"title":"What God Told Me About Tithe Clears My Doubt | Hosanna David","notes":"Start giving to the works of God.\\rIt is not a LAW but the LOVE of GOD.\\rGIVE TITHES AND OFFERINGS BASE ON LOVE.","thumbnail":"https://i.ytimg.com/vi/heC7LZ84iKg/hqdefault.jpg","link":"heC7LZ84iKg","group":"","readonly":true,"row_number":7},{"title":"Take It from Someone Who Used to Talk to Satan: Halloween Is a Bad Idea","notes":"On Halloween, some kids will dress up as devils and go trick-or-treating. But an ex-Satanist is warning Christians against doing that.\\r\\rOTHER STORIES\\rThe founder of the church of Satan said that by dressing up, either by wearing a costume or coloring oneself for Halloween, is tantamount to worshipping the devil.\\r\\rDON'T PARTICIPATE HALLOWEN!","thumbnail":"https://i.ytimg.com/vi/q369iQJ49cY/hqdefault.jpg","link":"q369iQJ49cY","group":"","readonly":true,"row_number":8},{"title":"What Jesus Taught Me About Prayer | Seeking and Finding Jesus (Read Description)","notes":"","thumbnail":"https://i.ytimg.com/vi/ocK18uFz5Ek/hqdefault.jpg","link":"ocK18uFz5Ek","group":"","readonly":true,"row_number":9},{"title":"Jesus Said 2 Words to Me in Heaven That Wrecked Me","notes":"","thumbnail":"https://i.ytimg.com/vi/fbf4sjQ2AxY/hqdefault.jpg","link":"fbf4sjQ2AxY","group":"","readonly":true,"row_number":10},{"title":"The Great Sifting Happening Right Now | Why Many are Called But Few Chose.Rise  of False Prophets","notes":"","thumbnail":"https://i.ytimg.com/vi/pYmTuS-Ptig/hqdefault.jpg","link":"pYmTuS-Ptig","group":"","readonly":true,"row_number":11},{"title":"Why God Led Me to Stop Wearing Makeup and Jewelry","notes":"","thumbnail":"https://i.ytimg.com/vi/KAXl62qrzM0/hqdefault.jpg","link":"KAXl62qrzM0","group":6,"readonly":true,"row_number":12},{"title":"An Angel Came with a Word from the Throne","notes":"","thumbnail":"https://i.ytimg.com/vi/VrTrLO300Sw/hqdefault.jpg","link":"VrTrLO300Sw","group":"","readonly":true,"row_number":13},{"title":"Shocking truth of how i got Secret Powers as a Fake Pastor| I've Been Through The Most| Ps Makhado","notes":"False Prophets can Performs:\\rDeliverance, Speaking in tongues, Healing & Miracles, They can also teach holiness.\\r\\r(c) When people are hungry for power and prophecy and not hungry for the Word of God  just there you know they're in danger.","thumbnail":"https://i.ytimg.com/vi/jH7ZTcT3ev4/hqdefault.jpg","link":"jH7ZTcT3ev4","group":"","readonly":true,"row_number":14},{"title":"Testimony | Max grew up Jewish but Jesus reveals Himself to him","notes":"","thumbnail":"https://i.ytimg.com/vi/tUNj_Zpr8yM/hqdefault.jpg","link":"tUNj_Zpr8yM","group":"","readonly":true,"row_number":15},{"title":"This Satanic Curse is Keeping You Sick!","notes":"","thumbnail":"https://i.ytimg.com/vi/cWnHOBnwb90/hqdefault.jpg","link":"cWnHOBnwb90","group":"","readonly":true,"row_number":16},{"title":"I Stood Before Jesus. What He Asked Me Will Wreck You!","notes":"","thumbnail":"https://i.ytimg.com/vi/dDCcv7jXMJs/hqdefault.jpg","link":"dDCcv7jXMJs","group":"","readonly":true,"row_number":17},{"title":"He Was Crucified for Believing in Jesus","notes":"","thumbnail":"https://i.ytimg.com/vi/eKvMR_hNG_E/hqdefault.jpg","link":"eKvMR_hNG_E","group":"","readonly":true,"row_number":18},{"title":"Afshin - muslim converted to christianity","notes":"","thumbnail":"https://i.ytimg.com/vi/uTDM6Ji-fD0/hqdefault.jpg","link":"uTDM6Ji-fD0","group":1,"readonly":true,"row_number":19},{"title":"I Saw My Wife in Heaven, But She Wouldn't Look At Me!","notes":"","thumbnail":"https://i.ytimg.com/vi/bKPFwvb9eBE/hqdefault.jpg","link":"bKPFwvb9eBE","group":"","readonly":true,"row_number":20},{"title":"Why This Atheist Scientist Became a Believing Christian","notes":"","thumbnail":"https://i.ytimg.com/vi/OMBQwGzn_TE/hqdefault.jpg","link":"OMBQwGzn_TE","group":2,"readonly":true,"row_number":21},{"title":"Powerful testimony of Ex-Muslim Samer Mohammed | Palestinian who became Christian | Messenger TV","notes":"","thumbnail":"https://i.ytimg.com/vi/seWlkGCqcrc/hqdefault.jpg","link":"seWlkGCqcrc","group":"","readonly":true,"row_number":22},{"title":"English: Muslim Terrorist Khalil meets Jesus, Muslim Dreams","notes":"","thumbnail":"https://i.ytimg.com/vi/HdMVxhBJDQQ/hqdefault.jpg","link":"HdMVxhBJDQQ","group":1,"readonly":true,"row_number":23},{"title":"HOW TO KNOW A FALSE PROPHET | Very important, God wants you to know this!","notes":"","thumbnail":"https://i.ytimg.com/vi/yIfqhqP27As/hqdefault.jpg","link":"yIfqhqP27As","group":5,"readonly":true,"row_number":24},{"title":"DREAMS AND VISIONS: Muslims Miraculously Coming to Jesus in Dreams","notes":"","thumbnail":"https://i.ytimg.com/vi/4ORr0f0JsZ0/hqdefault.jpg","link":"4ORr0f0JsZ0","group":1,"readonly":true,"row_number":25},{"title":"God Said THIS About Wealth Transfer - Prophecy | Troy Black","notes":"Matthew 25\\rThe Parable of the Talents\\r14 “For it will be like a man going on a journey, who called his servants[c] and entrusted to them his property. 15 To one he gave five talents,[d] to another two, to another one, to each according to his ability. Then he went away. 16 He who had received the five talents went at once and traded with them, and he made five talents more. 17 So also he who had the two talents made two talents more. 18 But he who had received the one talent went and dug in the ground and hid his master's money. 19 Now after a long time the master of those servants came and settled accounts with them. 20 And he who had received the five talents came forward, bringing five talents more, saying, ‘Master, you delivered to me five talents; here, I have made five talents more.’ 21 His master said to him, ‘Well done, good and faithful servant.[e] You have been faithful over a little; I will set you over much. Enter into the joy of your master.’ 22 And he also who had the two talents came forward, saying, ‘Master, you delivered to me two talents; here, I have made two talents more.’ 23 His master said to him, ‘Well done, good and faithful servant. You have been faithful over a little; I will set you over much. Enter into the joy of your master.’ 24 He also who had received the one talent came forward, saying, ‘Master, I knew you to be a hard man, reaping where you did not sow, and gathering where you scattered no seed, 25 so I was afraid, and I went and hid your talent in the ground. Here, you have what is yours.’ 26 But his master answered him, ‘You wicked and slothful servant! You knew that I reap where I have not sown and gather where I scattered no seed? 27 Then you ought to have invested my money with the bankers, and at my coming I should have received what was my own with interest. 28 So take the talent from him and give it to him who has the ten talents. 29 For to everyone who has will more be given, and he will have an abundance. But from the one who has not, even what he has will be taken away. 30 And cast the worthless servant into the outer darkness. In that place there will be weeping and gnashing of teeth.’","thumbnail":"https://i.ytimg.com/vi/8Z5O2c9xyx4/hqdefault.jpg","link":"8Z5O2c9xyx4","group":"","readonly":true,"row_number":26},{"title":"Sunni Muslim Doctor : met  Jesus & Accept her Lord & Savior :: Lovely Testimony","notes":"","thumbnail":"https://i.ytimg.com/vi/_QlO5mEqozU/hqdefault.jpg","link":"_QlO5mEqozU","group":1,"readonly":true,"row_number":27},{"title":"Muslim Sees Jesus In His Dream | Jahir Israel's Testimony // OneWayGospel","notes":"","thumbnail":"https://i.ytimg.com/vi/EMNq9PQyYlA/hqdefault.jpg","link":"EMNq9PQyYlA","group":1,"readonly":true,"row_number":28},{"title":"Iranian Muslim chanted “death to Israel” Now speaks life!","notes":"","thumbnail":"https://i.ytimg.com/vi/6-oCaOmyQcc/hqdefault.jpg","link":"6-oCaOmyQcc","group":1,"readonly":true,"row_number":29},{"title":"The Devil's Plot to Lead Many \\"Christians\\" to Hell, The True Definition of Grace","notes":"","thumbnail":"https://i.ytimg.com/vi/otMLkzYKgb8/hqdefault.jpg","link":"otMLkzYKgb8","group":6,"readonly":true,"row_number":30},{"title":"Vision of a demon working in a church","notes":"","thumbnail":"https://i.ytimg.com/vi/KRjNxdP44w4/hqdefault.jpg","link":"KRjNxdP44w4","group":"","readonly":true,"row_number":31},{"title":"WHY YOU NEED TO STAY AWAY FROM SECULAR ENTERTAINMENT","notes":"1.\\rWhen I was blinded by my love for sin,I used to think I could continue doing things that were clearly sinful just because no scripture directly gave a command on it.\\rI used to think on the day of judgement I would simply tell God,\\"but You didn't write this in the bible!\\"\\rAnd I truly believed that would save me from condemnation.\\rBut then I realized the Bible is a collection of books written by people who walked closely with God.\\rIt contains the fundamentals of salvation but still not a substitute for the HolySpirit who is the ultimate teacher promised to believers.\\rJesus wanted believers to receive the Holyspirit so that He may lead them in all truth.\\rHe said I have so much to tell you but you cannot bear it now but when the Holyspirit comes He will lead you in all truth.\\rWe too need to walk with God so that we may be taught by God Himself.\\rYou can have the Bible but without the Holyspirit you will not understand what is in the Bible.\\rThe Holyspirit will never contradict what is written in the Bible, because He authored it.\\rBut even sin that isn't directly written down,He will tell you to stay away from it.\\rWhatever doesn't glorify God but brings shame to God's name,the Holyspirit will tell you to stay away from it.\\rOne way Satan has captured Christians is with worldly entertainment of ungodly soap operas,movies, ungodly music that glorify and normalize everything God hates.\\rMany will justify it to say the Bible does not condemn it.\\rBut they can clearly see that participating in it only brings shame to God's name,grieves the Holyspirit and brainwashes you into longing for a godless life.\\rIt's not directly written but God's Spirit can show you whether it's pleasing to God for you to grieve the Holyspirit by entertaining yourself through watching people commit fornication, adultery,incest, cussing and portray a life of sin as attractive.\\rSercular entertainment will still take people to hell because it will be fruit that shows that a person did not have the life of Christ in them that is why they found sin entertaining, instead of grieving.\\rIt's a sleeping pill to lure you into slumber and capture your soul.(video explaining in detail why Christians should stay away from sercular entertainment https://youtu.be/QupytTVKJmY)\\r\\rAnything that will defile God's holy temple,He will tell you to stay away from it.\\rWhatever new ways of sinning that will be invented and were not directly recorded,the Holyspirit will still teach you.\\rHe has been given to believers to be their teacher, telling them which way to go and not to go.\\rWe need to make sure that we are baptized with the Holyspirit and follow Him as He leads us to eternal life and gives us power over sin.\\rWithout the Holyspirit,you can read the entire bible and still not find life because even understanding of written scripture comes from the Holyspirit.\\rThe Pharisees had all the scripture and thoroughly read it,yet they failed to recognize the Messiah.\\rWe need the Spirit of God to help us understand the things of God.\\rThey're not understood by human intellect.\\rThat is why Jesus is called \\"The Word of God.\\"\\rHe comes to live in us and clearly teaches us how to live a life pleasing to God, seperate from the world.\\rJesus is the Good Shepherd who leads His sheep to eternal life.\\rWe need to be connected to Jesus,who is the true vine so that we may bear fruit for God's kingdom and not love our sin.\\rWe need to stay in fellowship with God and the Holyspirit will make sin and righteousness extremely clear to us and we will not be deceived by deceptive spirits that are operating in the world.\\rWe need to know Jesus for ourselves and not just hear of Him.\\rIt doesn't mean seeing Him.\\rIt means to be filled and led by the Holyspirit.\\rThe Holyspirit will make everything clear to us and teach us how to walk with God.\\rStart seeking God daily and get rid of sin.\\rBecome like a little child and depend on Jesus.\\rHe will teach you how to live a holy life pleasing to God.\\r\\rJohn 16:12-14\\r“I still have many things to say to you, but you cannot bear them now.\\r\\rHowever, when He, the Spirit of truth, has come, He will guide you into all truth; for He will not speak on His own authority, but whatever He hears He will speak; and He will tell you things to come.\\r\\rHe will glorify Me, for He will take of what is Mine and declare it to you.\\"\\r\\rRevelation 19:11-13\\r\\"Now I saw heaven opened, and behold, a white horse. And He who sat on him was called Faithful and True, and in righteousness He judges and makes war.\\r\\rHis eyes were like a flame of fire, and on His head were many crowns. He had a name written that no one knew except Himself.\\r\\rHe was clothed with a robe dipped in blood, and His name is called The Word of God.\\"\\r\\r2.\\rWitchcraft, Perversion & Rebellion against God\\r\\rThe Lord had shown me a vision I shared earlier how many children,some as young as 3 years,2 years were all running to Satan and God showed me satan was attracting the children through the entertainment they watched.\\rSatan welcomed them like a loving parent and the little children clung to his legs, holding him tightly, while he patted the backs of other very young children who stood near him.\\rSatan is extremely desperate for the little children because he knows if he can make the children grow up embracing his ways, they're likely to continue in that path all their lives!\\rThe Lord Jesus Christ wants parents to take responsibility for what your children are watching.\\rThe Lord showed me how when Satan and his demons had a meeting on how they could bring many more people to hell,they decided they were going to use television entertainment.\\rAnd Jesus showed me that satan himself would write some story lines and then give his agents who are in the entertainment industry to produce the movies and cartoons.\\rThe Lord showed me that sometimes satan would instruct one of his agents on what stories to write.\\rThis is the reason why the entertainment industry is so morally rotten and full of complete rebellion against God.\\rThis is the real reason they are so obsessed about promoting fornication, adultery,lust in music and movies.\\rThis is the reason why they try to make a life of rebellion against  God seem so \\"modern\\" and \\"progressive.\\"\\rSatan is on a mission,he knows his time is short.\\rHe wants to lure you to Spiritual slumber through ungodly entertainment then steal your soul and your children's souls.\\rThe Lord showed me that it's not really about making money from the movies,it's the human souls they can harvest,that is what they're after!\\rThe actors who many of them are satanists exchange their souls for money and fame and promote whatever satan commands them.\\rBut satan is not after making money from all that.\\rThe most prescious thing he's after is the human souls.\\rSo he created movies and cartoons to promote and normalize witchcraft.\\rTo teach people to participate in incantations like \\"abracadabra\\" and make it seem like it's some meaningless words just for fun.\\rThe Lord had shown me how the writer of the witchcraft Harry Potter movie was a real practicing witch but they wanted everything to look like it was just fiction.\\rThe Lord told me that they do not make all those movies, music and cartoons to entertain you.\\rThey do not care about entertaining you.\\rThey want you to perish with satan and so want you to participate in his rebellion against God.\\rThis is why the Lord has been warning us about watching sercular entertainment whether cartoons,movies, music etc.\\rIt's just bait but they want your soul and your little children's souls.\\rSometimes parents feel sorry for their little children and say,the children will be bored if they do not let them watch all these sercular cartoons.\\rYour children have an eternal soul that will either go to heaven or hell.\\rShow your children real love by caring about their soul.\\rSatan wants to teach them that witchcraft is normal, and they will start wishing to be mermaids which are actual water demons.\\rYour children will embrace satan and hate God.\\rSatan will teach them homosexuality and trans gender lifestyles are normal.\\rHe will teach them it's okay to lie if necessary.\\rHe will teach them witchcraft is fun.\\rDo not entertain yourself by watching evil.\\rPurify your heart by meditating on God's word.\\rDo not waste your life on sinful entertainment.\\rRedeem the time God has give you on earth and become fruitful for the Kingdom of God.\\rTake responsibility for your children and bring them to Jesus Christ.\\rThe Lord Jesus told me,\\"do not neglect the little children.\\rTeach them about holiness.I am talking about 4 year olds,tell them about holiness.\\r3 year olds, holiness.Let them grow knowing holiness is important.Let everyone know I am holy, from the little children.\\"\\rThe Lord gave the children of Israel a command to teach His commandments to their children.\\rTo tell them about what God instructed all the time, whether at home, or on the road.\\rJesus wants the little children to be saved.\\rSave your children from perversion and rebellion against God.\\rThis world will be destroyed because of its rebellion against the One true God.\\rSave your children from the wrath to come by bringing them to Jesus Christ,the only Saviour.\\rLet them grow up consecrated to Jesus and a light to the world.\\rJesus loves your children.\\rSatan only pretends to entertain them but all he's actually doing is brainwash them into a life of hating God and embracing sin and rebellion against God.\\r\\rDo not say you will teach your children about God later because you're not the owner of their lives.\\rIf they die in sin at an age they already know right from wrong your children will perish but God will hold you accountable.\\rTeach your children that loving Jesus and obeying Him is the normal life.\\rTeach them not to love the world.\\rTeach them to be seperate from the world in their lifestyle and to bear fruit of righteousness.\\rDo not leave your children at satan's mercy,God entrusted them to you to teach them His ways and for you to give them a good example.\\r\\rDeuteronomy 11:18-20\\r“Therefore you shall lay up these words of mine in your heart and in your soul, and bind them as a sign on your hand, and they shall be as frontlets between your eyes.\\r\\rYou shall teach them to your children, speaking of them when you sit in your house, when you walk by the way, when you lie down, and when you rise up.\\r\\rAnd you shall write them on the doorposts of your house and on your gates\\"\\r\\r3.\\rWhen the Lord Jesus told me to warn people about the reality of hell,He said to me,\\"Why is it that every year so many church meetings are held.\\rSo many church conferences are held.\\rYet I see these very people who attend these meetings filling up hell.\\rPeople are falling straight from church into hell.\\"\\rAnd the Lord said,\\"I blame the preachers because they're not telling My people the truth.\\rThey cannot tell the truth because they fear to be hated by people.\\rBut have you never read that a servant is not greater than the Master?\\rIf they hated Me,they will hate you.\\rThe prosperity preachers do not care about the souls of my people and only care about money and fame.\\rAll they talk about is prosperity yet My people are perishing.\\rTell them the prosperity gospel will only land them in hell.\\rI will require the blood of My people from their hands,but those who follow prosperity preachers will perish. \\rTell them I am waiting for them with open loving arms.\\rWarn them about hell and do not fear anyone.\\rMany will hate you, and even many of your family members will hate you but do not\\rbe afraid to lose anyone's love because My love will make up for all the love they would have given you.\\rMy love is purer than gold!\\rPeople argue and say there's no hell.\\rBut how can they talk about My judgement when they don't even know Me?\\rWhen they have never even known My power?\\rThere's a real hell and you must warn mankind about it.\\rDon't judge anyone and say they cannot repent.\\rAnyone can repent.\\rWarn them and let them make their own choice.\\rTell them I am the only way to escape hell into eternal life.\\rIslam is not the way, Hinduism is not the way,I AM the only way.\\"\\rThe Lord said the reason many Christians still ended up in hell is because they thought they could follow Jesus while continuing in sin.\\rThe Lord said many are in hell because they lived a double life, pretending to be holy at church but going back to their sins at home and in secret.\\rThey only came to the Lord to seek His blessing.\\rAnd the Lord said,these people fasted and prayed,but were unwilling to get rid of their sin.\\rThey only fasted to get answers for things they wanted but never surrendered their lives to Jesus.\\rIn the Bible Jesus warned that MANY who try to enter the narrow way will fail because of sin.\\rWhen the disciples asked if few will be saved, Jesus said strive to enter through the narrow gate because many will try to enter but will fail.\\rThis is referring to Christians.\\rThey're the ones trying to enter the narrow gate,not Atheists or Muslims.\\rJesus said when the Master of the house has risen up to shut the door those closed outside will begin to tell Him,\\"We ate in your presence, and you taught in our streets!\\"\\rBut Jesus will say,\\"I never knew you,get away from Me you workers of iniquity.\\"(Luke 13:23-28)\\rThis is talking about Christians who continue in their sin.\\rThey will be rejected and denied by Jesus because they lived in sin and never repented.\\rThe Bible says the unrighteous will not inherit the Kingdom of heaven.1 Corinthians 6:9-11\\rTo be saved we must believe in Jesus and that faith must be evidenced by a change of lifestyle to become obedient to God.\\rWhen we continue in sin,the wage we will receive is eternal damnation in hell.\\rThe Bible says when you hear the Lord's voice do not harden your heart.\\rNo one ever knows when it's the last chance to repent.\\rPeople in hell thought they will repent later and needed to enjoy their sins first.\\rMany thought they will repent on their deathbed but no one can outsmart God.\\rPeople in hell keep begging for just one second to come back to earth and repent.\\rThey want a second chance but it's too late.\\rThe Lord is giving us many seconds,many hours,many chances to repent.\\rPlease do not waste this time because once you go to hell,not even one second will be given to you to come back to earth to repent.\\rThere's no repentance in death,once you die in sin it's too late forever.\\rThe day to repent and never return to sin is today.\\rRepent then start seeking God consistently and He will give you power over sin.\\rThe Lord has laid before us life and death.\\rChoose life while you still have the chance.","thumbnail":"https://i.ytimg.com/vi/QupytTVKJmY/hqdefault.jpg","link":"QupytTVKJmY","group":6,"readonly":true,"row_number":32},{"title":"I Grew up Buddhist, Demons Followed Me, then JESUS did this… 😳(Testimony)","notes":"","thumbnail":"https://i.ytimg.com/vi/FAsCMaqSrmY/hqdefault.jpg","link":"FAsCMaqSrmY","group":3,"readonly":true,"row_number":33},{"title":"Muslim Imam , saw Jesus on Cross @ Mecca , Saudi...Rare Testimony(subtitles@CC)","notes":"","thumbnail":"https://i.ytimg.com/vi/fzLD5SzdjHs/hqdefault.jpg","link":"fzLD5SzdjHs","group":1,"readonly":true,"row_number":34},{"title":"Too many christians are ending up in hell.Crucify your flesh 😭","notes":"","thumbnail":"https://i.ytimg.com/vi/bh0Evv75eys/hqdefault.jpg","link":"bh0Evv75eys","group":6,"readonly":true,"row_number":35},{"title":"THE SIN LEADING SO MANY CHRISTIANS TO HELL(A warning from Jesus)","notes":"","thumbnail":"https://i.ytimg.com/vi/jGy7Rz6Rut8/hqdefault.jpg","link":"jGy7Rz6Rut8","group":6,"readonly":true,"row_number":36},{"title":"Muslim woman who hated the Jews and ended up falling in love with their King - JESUS!","notes":"","thumbnail":"https://i.ytimg.com/vi/wzfVAb4q8ZU/hqdefault.jpg","link":"wzfVAb4q8ZU","group":1,"readonly":true,"row_number":37},{"title":"Jesus showed me someone almost went to hell for this | WARNING FROM JESUS PREPARE FOR ETERNITY","notes":"","thumbnail":"https://i.ytimg.com/vi/W1o7lOV7QSI/hqdefault.jpg","link":"W1o7lOV7QSI","group":6,"readonly":true,"row_number":38},{"title":"A word for those seeking Baptism of the Holy Spirit","notes":"","thumbnail":"https://i.ytimg.com/vi/PZSgrgZcybg/hqdefault.jpg","link":"PZSgrgZcybg","group":"","readonly":true,"row_number":39},{"title":"God Told Me This About Tithing - Prophecy + Teaching | Troy Black","notes":"","thumbnail":"https://i.ytimg.com/vi/suasg8j_bR4/hqdefault.jpg","link":"suasg8j_bR4","group":"","readonly":true,"row_number":40},{"title":"Guardian Angel Tells Man What It Was Like When Lucifer Fell & Was Schooled About  the Supernatural","notes":"","thumbnail":"https://i.ytimg.com/vi/w9AR1Wt3ASc/hqdefault.jpg","link":"w9AR1Wt3ASc","group":"","readonly":true,"row_number":41},{"title":"Near Death Experience I Hindu Man Dies & Faces Gate to Heaven & Hell - Ep. 28","notes":"","thumbnail":"https://i.ytimg.com/vi/Utcf052XGx8/hqdefault.jpg","link":"Utcf052XGx8","group":4,"readonly":true,"row_number":42},{"title":"Our Daughter's Heart Stopped, Then Jesus Walked In","notes":"","thumbnail":"https://i.ytimg.com/vi/y6uXGwO8lO8/hqdefault.jpg","link":"y6uXGwO8lO8","group":"","readonly":true,"row_number":43},{"title":"Pastor Given a Mind-Blowing, Detailed Tour of Heaven!","notes":"","thumbnail":"https://i.ytimg.com/vi/f-GiCk_U-tE/hqdefault.jpg","link":"f-GiCk_U-tE","group":"","readonly":true,"row_number":44},{"title":"Woman of God in hell for worldliness - by Rachael mushala chisulo | Jan 2018","notes":"","thumbnail":"https://i.ytimg.com/vi/Phv8RsGpF5k/hqdefault.jpg","link":"Phv8RsGpF5k","group":6,"readonly":true,"row_number":45},{"title":"What Jesus Told Me in Heaven Broke My Heart","notes":"","thumbnail":"https://i.ytimg.com/vi/HLGGEj-w9z8/hqdefault.jpg","link":"HLGGEj-w9z8","group":"","readonly":true,"row_number":46},{"title":"A MUSLIM DIED AND SAW MUHAMMAD IN HELL","notes":"","thumbnail":"https://i.ytimg.com/vi/wEdr0TwWdZs/hqdefault.jpg","link":"wEdr0TwWdZs","group":1,"readonly":true,"row_number":47},{"title":"Seeking Allah, Finding Jesus: The Christian Testimony of Nabeel Qureshi","notes":"","thumbnail":"https://i.ytimg.com/vi/k0D8Uz4oQck/hqdefault.jpg","link":"k0D8Uz4oQck","group":1,"readonly":true,"row_number":48},{"title":"You May Have the Tithe Wrong - What God Told Me About Tithing | Troy Black","notes":"Start giving to the works of God.\\rIt is not a LAW but the LOVE of GOD.\\rGIVE TITHES AND OFFERINGS BASE ON LOVE.","thumbnail":"https://i.ytimg.com/vi/DI_vZkTcejo/hqdefault.jpg","link":"DI_vZkTcejo","group":"","readonly":true,"row_number":49},{"title":"Vision: Mormon Sent To Hell (Here's Why)","notes":"IF YOU ARE A MORMON MEMBER, GET OUT THAT CULT NOW!!!\\rhttps://youtube.com/shorts/C6naL4R25wA","thumbnail":"https://i.ytimg.com/vi/QgkxR2jNNRw/hqdefault.jpg","link":"QgkxR2jNNRw","group":5,"readonly":true,"row_number":50},{"title":"WOW! This Jewish professor saw Jesus in a vision yet decided to run away. Until...","notes":"","thumbnail":"https://i.ytimg.com/vi/eu4BaZyweuE/hqdefault.jpg","link":"eu4BaZyweuE","group":"","readonly":true,"row_number":51},{"title":"A Muslim man sees a vision of hell, but Jesus rescues & saves him - Amer’s testimony!!","notes":"","thumbnail":"https://i.ytimg.com/vi/8A2V5lTPqKc/hqdefault.jpg","link":"8A2V5lTPqKc","group":1,"readonly":true,"row_number":52},{"title":"Changing Tracks: Mario Joseph, Muslim Imam convert","notes":"","thumbnail":"https://i.ytimg.com/vi/WjUXd4qW9mg/hqdefault.jpg","link":"WjUXd4qW9mg","group":1,"readonly":true,"row_number":53},{"title":"Muslim man has dream of Jesus telling him Islam leads to Hell then this happens...","notes":"","thumbnail":"https://i.ytimg.com/vi/67cF2bRGIUg/hqdefault.jpg","link":"67cF2bRGIUg","group":1,"readonly":true,"row_number":54},{"title":"Doctor has Near-Death Experience that transforms his life","notes":"","thumbnail":"https://i.ytimg.com/vi/sv0ZPnXU-9E/hqdefault.jpg","link":"sv0ZPnXU-9E","group":2,"readonly":true,"row_number":55},{"title":"MAKEUP,JEWELRY| Rabekah,Esther Wearing Jewelry & the Bride of Christ","notes":"","thumbnail":"https://i.ytimg.com/vi/bLZine4n2eI/hqdefault.jpg","link":"bLZine4n2eI","group":6,"readonly":true,"row_number":56},{"title":"What Jesus Showed Me in Heaven Angered Me!","notes":"","thumbnail":"https://i.ytimg.com/vi/caltl_n9gy8/hqdefault.jpg","link":"caltl_n9gy8","group":"","readonly":true,"row_number":57},{"title":"What God Told Me About Halloween May Surprise You - Prophecy | Troy Black","notes":"Christians should never celebrate HALLOWEN.","thumbnail":"https://i.ytimg.com/vi/MLlMJ740O2c/hqdefault.jpg","link":"MLlMJ740O2c","group":"","readonly":true,"row_number":58},{"title":"Hell Testimony - The Artist Who Was Taken To Hell - Graphic Paintings of Hell - Accept Jesus Today!","notes":"","thumbnail":"https://i.ytimg.com/vi/eT4aaKX8q8U/hqdefault.jpg","link":"eT4aaKX8q8U","group":"","readonly":true,"row_number":59},{"title":"Muslim Dies, Sees Hell, Meets Jesus as Savior","notes":"","thumbnail":"https://i.ytimg.com/vi/tYL__zlQba4/hqdefault.jpg","link":"tYL__zlQba4","group":1,"readonly":true,"row_number":60},{"title":"Last Days Prophecy is Fulfilled in our Eyes | Don't be Ashamed of Jesus in this Perverse Generation","notes":"","thumbnail":"https://i.ytimg.com/vi/PFPF5MvTLe8/hqdefault.jpg","link":"PFPF5MvTLe8","group":6,"readonly":true,"row_number":61},{"title":"NASA Astronaut WITNESSES God's Power From Outer Space | Jeffrey Williams | Kirk Cameron on TBN","notes":"","thumbnail":"https://i.ytimg.com/vi/24R3Cg9V3qE/hqdefault.jpg","link":"24R3Cg9V3qE","group":"","readonly":true,"row_number":62},{"title":"God Just Told Me This About Mother Mary - Prophecy | Troy Black","notes":"In a vision, the speaker, Troy, saw Mary with baby Jesus and received a message from the Holy Spirit. The message is about focusing on Jesus alone, not running after other things or people. The Holy Spirit emphasizes that only Jesus can satisfy our longings and is the way to the Father. The message cautions against idolizing anyone or anything, whether Mary, saints, preachers, or leaders, and highlights Jesus as the only source of salvation and worship. Troy addresses both Catholics and non-Catholics, urging self-examination, humility, and the need to seek Jesus in the scriptures. The message encourages everyone to be in a personal relationship with Jesus and avoid religious practices that may lead away from true faith. The speaker offers related prophetic content in videos for further reflection.","thumbnail":"https://i.ytimg.com/vi/e73mbLkL_6c/hqdefault.jpg","link":"e73mbLkL_6c","group":"","readonly":true,"row_number":63},{"title":"In Search of Allah, Muslim Found Jesus: A Yemeni's Remarkable Journey","notes":"I born and raised in Yemen into a Muslim family.  I want to Macca 🕋 to discover god (Allah) and to have spiritual connection,  I  end up to gave up Islam in capital of Islam Macca. The heart of Islam. \\r\\rI read the sermon of the mount It covered the God of love and salvation and I gave my life to Jesus. \\r\\rI lost everything, family, daughter, wife, and my country, but I gained the King of Heaven Jesus Christ. My Lord and savior. ","thumbnail":"https://i.ytimg.com/vi/ok7Q6j_FV4s/hqdefault.jpg","link":"ok7Q6j_FV4s","group":1,"readonly":true,"row_number":64},{"title":"Saudi Muslim Nasser al'Qahtani Sees Vision of Christ Crucified","notes":"My name is Nasser al'Qahtani.  I spent the first twenty years of my life following Islam, but in August of 1996, after two years of prayer from thousands of Christians, the Lord God gave me a vision of Christ crucified that broke my heart and changed my life.\\r\\rEver since that day, I've been following Jesus all over the world, making disciples by immersing them in the character and nature of the triune God of the Bible through teaching, preaching and, most importantly, modeling this new Spirit-filled life we have been given in Yeshua (Jesus), our Messiah and Savior.","thumbnail":"https://i.ytimg.com/vi/4m-pLpN0_QA/hqdefault.jpg","link":"4m-pLpN0_QA","group":1,"readonly":true,"row_number":65},{"title":"The whole world is in preparation  for the coming of the Jesus & the Anti Christ","notes":"","thumbnail":"https://i.ytimg.com/vi/vSyBgi4QhvI/hqdefault.jpg","link":"vSyBgi4QhvI","group":"","readonly":true,"row_number":66},{"title":"I Saw Christians in Hell for Believing This Lie","notes":"The tricks of enemy to comfort sinful lifestyles.\\r\\rOne of Satan’s most trusted lies in harvesting multitudes of human souls to hell daily is;\\r\\rSALVATION IS BY GRACE SO YOUR SIN DOESN’T MATTER.AFTER ALL NO ONE IS PERFECT AND IT IS GOD’S GRACE ALONE THAT WILL SAVE YOU.\\r\\rWhat truths are in that statement?\\r-Salvation is by grace alone.\\r\\rWhat lies are in that statement?\\r-Your sin doesn’t matter because no one is perfect.\\r\\rSatan deceives not with lies alone but He mixes truth and lies to make it seem convincing.\\r\\rWHY DOES YOUR SIN MATTER?\\r\\rYour sin matters because the Bible says the wages of sin is death.Romans 6:23\\r\\rYour sin matters because as long as you continue bearing bad fruit it’s proof of your rejection of Jesus and every tree that doesn’t bear good fruit will be chopped and thrown in the fire.Matthew 3:10\\r\\rYour sin matters because you will be judged according to your works.Revelation 20:12\\r\\rNot because your works will be the reason you will be saved but your works will be evidence of whether or not you rejected Jesus’ sacrifice on the cross.\\r\\rOver and over Jesus told people He forgave to go and sin no more.John 8:11\\r\\rYour sin matters because the Lord says unless you repent(leave your sins),you will perish.Luke 13:3\\r\\rGod says be perfect even as your Father is perfect.Matthew 5:48\\r\\rIs God therefore asking for something impossible?\\rWhat is godly perfection that God requires of us?\\rIt means to imitate Him by doing what He wants us to do,living how He wants us to live.It is obedience to God.\\r\\rDoes it mean we never make mistakes?No,we do make mistakes as human beings but when we are born of God we do not make a habit of sinning.\\r\\rWe are perfected by the blood of Jesus Christ that has covered our sins because we have repented and His blood continues to cover our sins even when we may make a mistake and sin on our journey on earth because whenever we realize our sin we repent and do not make a habit of sin.\\r\\rBut when we continue to live in sin because we think God’s grace gives us the license,then we will perish.\\r\\rTRUE MEANING OF SALVATION BY GRACE\\r\\rYou had no way of ever getting rid of your sins,but Jesus died for you to be freely forgiven.\\r\\rA murderer who is pardoned is shown grace by being forgiven without deserving the forgiveness.\\rBut that doesn’t give him the right to go and murder more people thinking he will continue to be shown this grace.If he does,the punishment will be stiffer than before because he failed to appreciate the gift given to him.\\r\\rSimilarly,grace is that Jesus died so that we may be freely forgiven of all our sins when we repent and believe in Him.\\rThis doesn’t give us a right to continue in a lifestyle of sin thinking grace will continue to be shown to us.\\rIf we do,a stiffer punishment awaits us.\\r\\rThe fate of a Christian who continues living in sin and dies in sin is much worse than an unbeliever!\\r\\rHebrews 10:26-31\\r“For if we sin willfully after we have received the knowledge of the truth, there no longer remains a sacrifice for sins, \\r\\rbut a certain fearful expectation of judgment, and fiery indignation which will devour the adversaries. \\r\\rAnyone who has rejected Moses’ law dies without mercy on the testimony of two or three witnesses. \\r\\rOf how much worse punishment, do you suppose, will he be thought worthy who has trampled the Son of God underfoot, counted the blood of the covenant by which he was sanctified a common thing, and insulted the Spirit of grace? \\r\\r For we know Him who said, ‘Vengeance is Mine, I will repay,’says the Lord. And again, ‘The Lord will judge His people.’\\r\\rIt is a fearful thing to fall into the hands of the living God.”\\r\\rThe Bible warns that false teachers promise people liberty yet they themselves are slaves of sin!\\r\\rThey teach people to live in sin freely because of the death of Jesus,yet it’s because they do not know God’s power to set men free from the bonds of sin.\\r\\rIn Jesus there is freedom from sin not freedom to sin.\\r\\r2 Peter 2:19-22,”While they promise them liberty, they themselves are slaves of corruption; for by whom a person is overcome, by him also he is brought into bondage. \\r\\rFor if, after they have escaped the pollutions of the world through the knowledge of the Lord and Savior Jesus Christ, they are again entangled in them and overcome, the latter end is worse for them than the beginning. \\rFor it would have been better for them not to have known the way of righteousness, than having known it, to turn from the holy commandment delivered to them. \\rBut it has happened to them according to the true proverb: “A dog returns to his own vomit,” and, “a sow, having washed, to her wallowing in the mire.”\\r\\rhttps://m.facebook.com/story.php?story_fbid=6226224470805535&id=100002541300391&mibextid=ZbWKwL","thumbnail":"https://i.ytimg.com/vi/DjEv5WD6fjo/hqdefault.jpg","link":"DjEv5WD6fjo","group":6,"readonly":true,"row_number":67},{"title":"Satan's Reward for his Servants","notes":"a few days ago the Lord Jesus Christ\\rgave me a vision where I saw a secular\\rmusician a very popular secular musician\\rand in that Vision what the Lord Jesus\\rChrist showed me is that this person\\rwas born with a gift to sing for the\\rLord\\rbut\\rSatan just took advantage of the gift\\rthat was already there\\rthis person was born with a gift that\\rwas meant to serve God\\rbut Satan took advantage of that gift\\rin order to twist the usage of that gift\\rto glorify Satan instead and now this\\rperson\\rcurrently sings a worldly music\\rthings that don't glorify Jesus\\rthings that are defiling and that is\\rwhat this person thinks about using the\\rgift that was given to them by the Lord\\rso Satan is now using them this person\\ris serving Satan\\rso in that Vision what the Lord showed\\rme was that\\rbecause this person has worked really\\rhard\\rfor the kingdom of darkness through his\\rmusic by singing about others and godly\\rthings\\rsecular music things that don't glorify\\rJesus Christ\\rso he has worked hard\\rby singing others and godly things\\rthings that are supposed to lead to lead\\rpeople things that are supposed to lead\\rpeople astray things that are supposed\\rto lead people as far away from the Lord\\ras possible\\rand\\rby singing that music\\rhe is glorifying Satan and is helping to\\rcapture he is helping Satan to capture\\rso many souls to hell\\rso what the Lord God showed me in that\\rvision\\ris that because this person has done a\\rreally great work for Satan\\rnow Satan was looking forward for him to\\rhave his reward\\rhere on Earth\\rthis person has been\\rrewarded for his service to Satan he has\\rbeen rewarded with Earthly wealth and\\rEarthly femme\\rbut in the vision the Lord God showed me\\rthat Satan is really really looking\\rforward\\rfor this person to get his reward\\rand when the Lord told me that Satan is\\rreally looking forward for this person\\rto finally get his his reward for all\\rhis service\\rthe lord gave me the understanding in\\rthat Vision that his real reward that\\rwas being referred to that Satan is\\rreally looking forward for him to have\\ris the destruction of his soul in hell\\rthat is the reward that Satan has for\\rthis person\\rwhom he has used so much to win so many\\rsouls for Satan\\rthat is the only that is the only reward\\rthat Satan is so anxiously waiting for\\rthis person to receive Satan cannot wait\\rto see this person burning in hell\\rafter having laid so many souls to hell\\rand one of the souls to Satan one thing\\rthat we can see from this Vision that\\rthe Lord Jesus Christ gave me about this\\rsecular musician\\ris that Satan does not love anyone he\\rdoes not have the ability to love anyone\\rthe only one whose love we can truly be\\rsure of all the time it's Jesus Christ\\rbecause he did not even withhold his own\\rlife\\rbut died for us that we may live\\rbut Satan shows us a lot of fake love\\rand so many people fall for the fake\\rlove here on the Earth\\ryou know like this person fell for the\\rfake love from Satan saying I'm going to\\rgive you money I'm going to give you all\\rthis popularity I'm going to give you\\rthis and that\\rin exchange for you to win souls to my\\rkingdom you need to sing about all these\\rthings\\rso in this person's mind this musician's\\rmind\\rhe thinks oh this is a good deal you\\rknow at least I'm going to get this he\\rdoesn't know that\\rnot only does Satan want to use him to\\rdestroy other Souls but Satan is so much\\rlooking forward\\rto the destruction of his own soul\\rso even the people that he's using he\\rdoesn't love them he doesn't have the\\rability to love them you know because\\robedience to God requires self-denial\\rmany people usually think that or maybe\\rGod is not a good father you know they\\rhave this negative impression about God\\rthe vision I just shared it just shows\\ryou Satan's true character which is you\\rknow so opposite to God's character of\\rgoodness and mercy always being willing\\rto forgive\\rbut those of you who know and who have\\rheard\\rof testimonies from people who are\\rsatanists you know that and and one\\rthing they're going to tell you is with\\rSatan there's no forgiveness if he tells\\ryou something you have to do it if you\\rdon't do it there is a punishment but\\rthe Bible tells us that Satan comes to\\rpeople like an angel of Light he has\\rdisguised himself okay he has made the\\rthings that lead you to his kingdom to\\rseem so innocent and attractive as\\rthough or Satan just cares so much about\\rentertaining you\\ryou know so he's making all these\\rinteresting movies all these interesting\\rcartoons\\rbut he's really looking forward to the\\rdestruction of your soul he cannot wait\\rto see your soul destroyed\\reverything is a bait all these worldly\\rthings they just Abate sometimes people\\rthink all these things are vanity\\rthey're just going to make me look more\\rbeautiful you know like Satan cares to\\rmake you look more beautiful that is all\\ra lie\\rthat is all a lie everything is a lie\\rthat is death wearing a mask\\rdeath wearing a friendly mask a\\rapproaching you pretending to be your\\rfriend\\rbut the Lord God wants us to see this\\rworld for what it really is that really\\rthere's nothing that Satan can offer us\\rthere's nothing that this world can\\roffer us the Bible says what shall we\\rprofit a man to gain the whole world yet\\rlose his soul\\ror what shall a man give in exchange for\\rhis soul there is nothing that we can\\rgive in exchange for our souls so sin\\rhas been designed in a way that it looks\\rso irresistible you know because it\\rsatisfies the desires of your flesh it\\rlooks irresistible sin has been designed\\rto look so irresistible it has been\\rdesigned to look like it's for your gold\\rlike it's meant to serve your needs like\\rit's meant it's meant to make your life\\rbetter yet we need to realize\\rthere is just death putting on a mask\\rso Jesus Christ\\ris the only true friend we can ever have\\rhere on the earth Satan was is using\\rcurrently because this person is alive\\rSatan is using this person\\rto trap so many people to hell\\ryet the Lord showed it to me in a vision\\rvery clearly that Satan is so anxiously\\rwaiting for this person to receive his\\rreal reward which is\\rdeath in Hell destruction in Hell\\rEternal destruction\\rhe cannot wait but this person is\\runaware here on the earth because it's\\rblinded by the fame and by the money\\rbecause that is how Satan comes to you\\rhe comes to you like an angel of Light\\rhe comes to you like a friend he comes\\rto you like he's the one who cares about\\ryou not God\\rokay he comes to you like he's the one\\rwho cares about your beauty more than\\rGod he comes to you like he's the one\\rwho cares about your entertainment more\\rthan God\\ryet it's all a lie\\rthe Bible says that Satan has been alive\\rfrom the beginning\\rand when he's picked a lie he only\\rspeaks what is natural to him so we need\\rto look to Jesus Christ and we need to\\robey Jesus because whatever the Lord\\rJesus Christ is warning us about Sin\\rit's because he cares about us it's\\rbecause he loves us he wants us to have\\reternal life\\r","thumbnail":"https://i.ytimg.com/vi/rvVSmKErSDo/hqdefault.jpg","link":"rvVSmKErSDo","group":6,"readonly":true,"row_number":68},{"title":"Shut Out the Brainwash, Find the REAL Jesus & Follow Him","notes":"","thumbnail":"http://i3.ytimg.com/vi/a0YHo3cVXHE/hqdefault.jpg","link":"a0YHo3cVXHE","group":6,"readonly":true,"row_number":69},{"title":"A Muslim's Encounter with Jesus (Powerful Testimony)","notes":"Muslim man who came on a mission to convert,  to revive Muslims in the United States,  \\nconvert those infidel Christians to Islam way,  Muslim way and then you know has a car accident,  \\nthe Christian doctors and other people are taking  care of him, showing generosity. He meets Jewish  \\npeople and then you know after a while they give  him even a car. He goes back to his place you know  \\nthe dust is already settled there and you know  he starts asking Allah, you know to speak to  \\nhim and you know he's noticing that Christians  have a different relationship with their God,  \\nwith the Father and of course Allah didn't answer.  He realized all of this was fake but in Islam, if   you doubt and challenge Allah you know you pretty  much are going to be killed and so and he wants  \\nto kill himself and it's that Jesus, he hears  the voice of the Father and then he hears the  \\nvoice of Jesus and gives his life to the Lord and  encounters this transformation in Jesus. Saleem,  ","thumbnail":"https://i3.ytimg.com/vi/kVYXmpMk84k/hqdefault.jpg","link":"kVYXmpMk84k","group":1,"readonly":true,"row_number":70},{"title":"I Died & Saw Osama Bin Ladin In Hell","notes":"","thumbnail":"https://i.ytimg.com/vi/9egQ9er0WrY/hqdefault.jpg","link":"9egQ9er0WrY","group":1,"readonly":true,"row_number":71},{"title":"CONSECRATION | Mind Your Business If You are Serious About Eternity","notes":"","thumbnail":"https://i.ytimg.com/vi/wITJsQQnOt0/hqdefault.jpg","link":"wITJsQQnOt0","group":6,"readonly":true,"row_number":73},{"title":"What it Means to be Dressed in Christ's Righteousness NOT Our Own","notes":"","thumbnail":"https://i.ytimg.com/vi/r_cZIKYOaBo/hqdefault.jpg","link":"r_cZIKYOaBo","group":6,"readonly":true,"row_number":74},{"title":"Escaping the Deception that Continues to Lead Many Christians to Hell","notes":"","thumbnail":"https://i.ytimg.com/vi/C8SURPNYBMY/hqdefault.jpg","link":"C8SURPNYBMY","group":6,"readonly":true,"row_number":75},{"title":"Can  One Sin Take You to Hell? Where does God's Grace come in? Truth from Scripture","notes":"","thumbnail":"https://i.ytimg.com/vi/1gPEOZvyhPk/hqdefault.jpg","link":"1gPEOZvyhPk","group":6,"readonly":true,"row_number":76},{"title":"JESUS showed me HOW this man made it to heaven and HOW you can too","notes":"","thumbnail":"https://i.ytimg.com/vi/DA2bGNNJed4/hqdefault.jpg","link":"DA2bGNNJed4","group":6,"readonly":true,"row_number":77},{"title":"Why does GOD hate pants(trousers) on a woman? + My husband's testimony on outward holiness for men","notes":"Will you be among the few that are saved? \\rPeople think they can dress immodestly because many Christians do it and even many pastors,and pastor's wives etc.\\rBut again the bible says many who try to enter the narrow way (Christians) will still end up in hell because they will fail to walk in the narrow way because it's difficult to walk in.\\rThey will try to enter the narrow gate but because they love their sin,many who try to enter (Christians) will fail because narrow and difficult is the way that leads to life.\\rNever look at the majority, instead keep your eyes on Jesus.\\r\\rImmodest dressing is a serious sin that leads to hell.\\r\\rBelow is an extract of a prophetic message given by the Lord Jesus.\\r\\r\\"Tell them this, tell them Jesus Christ said, stop dressing like prostitutes if you really are My daughters.\\rIt breaks My heart to pieces, tiny pieces.\\rFor how long is it going to be?\\rWho has bewitched you? Who is it? Tell Me now!\\rTell them I come, but tell them, I require holiness and righteousness.\\"\\r\\rDressing modestly is for both men and women.\\r\\rDressing modestly alone isn't holiness,it must be accompanied by inner holiness and that is very pleasing to Jesus.\\r\\rIt's NOT possible to be holy while dressing immodestly.\\rHoliness is a combination of everything.\\r\\rJesus is requiring holiness in everything and it's possible by the Holyspirit's power when we abide in Him.\\r\\rLuke 13:23-28\\r\\"Then one said to Him, 'Lord, are there few who are saved?'And He said to them,\\r\\rStrive to enter through the narrow gate, for many, I say to you, will seek to enter and will not be able.\\r\\rWhen once the Master of the house has risen up and shut the door, and you begin to stand outside and knock at the door, saying, ‘Lord, Lord, open for us,’ and He will answer and say to you, ‘I do not know you, where you are from,’\\rThen you will begin to say, ‘We ate and drank in Your presence, and You taught in our streets.’\\r\\rBut He will say, ‘I tell you I do not know you, where you are from. Depart from Me, all you workers of iniquity.’\\r\\rThere will be weeping and gnashing of teeth, when you see Abraham and Isaac and Jacob and all the prophets in the kingdom of God, and yourselves thrust out.\\"\\r\\rMatthew 7:13-14\\r“Enter by the narrow gate; for wide is the gate and broad is the way that leads to destruction, and there are many who go in by it.\\r\\rBecause narrow is the gate and difficult is the way which leads to life, and there are few who find it.\\"","thumbnail":"https://i.ytimg.com/vi/uJHoY7JhyE8/hqdefault.jpg","link":"uJHoY7JhyE8","group":6,"readonly":true,"row_number":78},{"title":"HEAVEN & HELL Testimony Charles Taze Russell   J W Founder in HELL","notes":"","thumbnail":"https://i.ytimg.com/vi/9H9oOsH2gRk/hqdefault.jpg","link":"9H9oOsH2gRk","group":5,"readonly":true,"row_number":79},{"title":"MANY so called \\"CHRISTIANS\\" are ON THEIR WAY to HELL because...","notes":"","thumbnail":"https://i.ytimg.com/vi/3gPiK9zCuOQ/hqdefault.jpg","link":"3gPiK9zCuOQ","group":6,"readonly":true,"row_number":80},{"title":"After Death Experience in Hell: Face-to-Face with Hitler","notes":"\\r\\rReal quickly I saw one\\rparticular person her name was deer\\rpudding and she arrived she died in a\\rcar wreck she died and she landed in\\rfront of me in this um uh in the tornado\\rVortex and he knocked on this door and\\rit opened as a cube or cell like her\\rgrandparents Farm she went in thought\\rshe saw all her dead relatives welcoming\\rher to paradise and she really thought\\rshe was there and maybe if she was\\rresuscitated too soon maybe she would be\\ron o for Winfrey and all those shows and\\rbut anyway she went in there and she\\rfound out that she wasn't in a nice\\rplace and it transpired that she was\\rum like she reaped what she swed and\\rthere's these these big creatur I saw\\rthere looked like trees and so her what\\rappeared to be her grandmother which was\\ra demon demonic being said go rest under\\rthe shade of the trees I'll bake you\\ryour favorite cookies and uh you're down\\rat your this new Farm here and it's your\\rfavorite place so she went over there\\rand there there's no water in hell but\\rshe re she thought there was water so\\rshe sat on this rock picked up a bunch\\rof sand and she realized this wasn't a\\rnice place CU she heard the noise and\\rfelt the Heat and these two tree like\\rthings were like uh tentacle\\r\\r\\rI look\\rdown a valley there's a house on the\\rother side and all these people come\\rrunning out of the house people who un\\rknown who have died or whatever and they\\rcame down to welcome me to paradise this\\rwasn't Paradise because the tree was\\rdilapidated things looked dead...","thumbnail":"https://i.ytimg.com/vi/KR2g3pFonpg/hqdefault.jpg","link":"KR2g3pFonpg","group":2,"readonly":true,"row_number":81},{"title":"The False Prophets with a Lying Spirit | Why many Christians end up on the broad way to hell","notes":"Woman in the Book of Revelation the Bible says that she was preserved by being taken into the Wilderness and when\\ryou look at the Wilderness the Wilderness is a place of intimacy with\\rGod it's a place of self-denial the Wilderness represents\\rthe place of prayer it represents when you deny yourself you know like Jesus\\rwent into the Wilderness to do prayer and fasting so when we see the Wilderness\\ryou know it means it's a place of withdrawing from the destructions of the\\rworld and then focusing on God that is the only way that woman was saved from\\rthe flood that was peed out of the mouth of the serpent who wanted to destroy\\rher and the Bible says that it now went after the rest of her Offspring who are\\rthe people who keep the Commandments of the Lord I remember Jesus showed me a vision\\rof his true church here on the earth and in that Vision what Jesus showed me was\\rhis church was in the wilderness I saw them in a place that looked like a\\rWilderness and then they were being taught by Jesus himself Jesus himself was standing on a rock and then his\\rfollowers surrounded him his followers right now you know they all surrounded\\rhim everyone was looking up to Jesus and Jesus was the one who was teaching his\\rpeople so God is showing us that the only\\rpeople who are going to be able to survive the flood of deception that has\\rflooded the Earth are those who are going to run into the\\rWilderness just as this woman was given the wings to fly away to the\\rWilderness it's the time to go into the Wilderness and\\rknowes Jesus for ourselves it's not a time to just look at someone and say oh look this person\\rperformed the miracle so they a prophet of God so let me do whatever they are doing you will find yourself in hell\\rwhen when I had you know the very day that I got the baptism of the Holy\\rSpirit and I had the uh the first encounter with the Lord Jesus I remember\\rthis is something that the Lord talked about and then he said don't be deceived\\rby Miracles because even Satan can perform\\rMiracles even Jesus said that how are you going to know the prophets how are you going to know the true prophet and\\rthe false prophet Jesus said you will know them by their fruit Jesus didn't say you will know them by their Mighty\\rMiracles or you will know them by their accurate prophecy or you will know them.","thumbnail":"https://i.ytimg.com/vi/9yuFpuCwxhI/hqdefault.jpg","link":"9yuFpuCwxhI","group":5,"readonly":true,"row_number":82},{"title":"I Died and Saw Muhammad in Hell: Ex-Muslim's Shocking NDE","notes":"The video is about a man named Kareem who was born and raised in a Muslim village. Kareem's father was the village Imam, and Kareem grew up learning the ways of Islam. As a young boy, Kareem memorized substantial portions of the Quran. He also began fasting during Ramadan at an early age.\\r\\rWhen Kareem was 18, he made his first pilgrimage to Mecca. After returning from Mecca, Kareem threw himself into religious studies with renewed vigor. He married Fatima a devout young woman from a neighboring Village and they soon had two children.\\r\\rOne day, Kareem fell down the well while trying to repair it. When he woke up, he found himself in Hell. He saw Muhammad being punished for his sins. Kareem was shocked and horrified by what he saw. He then saw Jesus and was told that he could choose to follow Jesus. Kareem chose to follow Jesus.\\r\\rWhen Kareem woke up, he found himself back in the village. He told his family and friends about his vision. Some people believed him, while others did not. Kareem continued to follow Jesus and share his story with others.\\r\\rEventually, Kareem's story spread far and wide. People from all over the world heard about his vision and were inspired to follow Jesus. Kareem's story is a powerful reminder of the love of God and the importance of seeking the truth.","thumbnail":"https://i.ytimg.com/vi/0YbYg8AXKz4/hqdefault.jpg","link":"0YbYg8AXKz4","group":1,"readonly":true,"row_number":83},{"title":"I SAW THE FOUNDER OF SEVENTH DAY ADVENTIST IN HELL","notes":"Ellen G. White inventing heresies.\\r\\rWe need to acknowledge that we are saved by His Grace, not by our own works, because our works cannot remove sin. Only what Christ accomplished on the cross redeems us from sin. God's Grace is the power that helps us do His will. Without Grace, it is impossible for us to fulfill His purposes. His Grace is our strength.\\r\\rFor by Grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast (Ephesians 2:8-9, NKJV).\\r\\rFor the Grace of God that brings salvation has appeared to all men, teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly in the present age (Titus 2:11-12, NKJV).\\r\\rI can do all things through Christ who strengthens me (Philippians 4:13, NKJV).","thumbnail":"https://i.ytimg.com/vi/s9az1G-CMDo/hqdefault.jpg","link":"s9az1G-CMDo","group":5,"readonly":true,"row_number":84},{"title":"A FOUNDER OF JEHOVAH’S WITNESSES CHARLES T RUSSELL IN HELL","notes":"Founder of Jehovah's witness in hell for...\\nDENYING THE DEITY OF JESUS CHRIST.\\nTOOK OUT HELL IN THE BIBLE.\\n\\nActs 4:12 (NKJV)\\n\\"Nor is there salvation in any other, for there is no other name under heaven given among men by which we must be saved.\\"","thumbnail":"https://i.ytimg.com/vi/kZOck2rrbkA/hqdefault.jpg","link":"kZOck2rrbkA","group":5,"readonly":true,"row_number":85},{"title":"God Revealed To Me Why We Exist During My NDE (It's Not What You Think)","notes":"","thumbnail":"https://i.ytimg.com/vi/VGpn2qOBfEY/hqdefault.jpg","link":"VGpn2qOBfEY","group":"","readonly":true,"row_number":86},{"title":"Here's a List of Some Churches that are run by Satan: A Warning from Jesus","notes":"","thumbnail":"https://i.ytimg.com/vi/rir1289HcL0/hqdefault.jpg","link":"rir1289HcL0","group":5,"readonly":true,"row_number":87},{"title":"Proof that no one with makeup,wigs,fake lashes etc can enter heaven (Listen w/open heart to the end)","notes":"","thumbnail":"https://i.ytimg.com/vi/hi4cIGnRpx4/hqdefault.jpg","link":"hi4cIGnRpx4","group":6,"readonly":true,"row_number":88},{"title":"Many Good Christians Won’t Go Up in the Rapture Because of This! - Jesus NDE Shocking Testimony","notes":"","thumbnail":"https://img.youtube.com/vi/k3OiCJVSzmo/sddefault.jpg","link":"k3OiCJVSzmo","group":6,"readonly":true,"row_number":89,"groups":"{\\"0\\":\\"Stories\\",\\"1\\":\\"Muslims Stories\\",\\"2\\":\\"Athiest Stories\\",\\"3\\":\\"Buddhist Stories\\",\\"4\\":\\"Hindu Stories\\",\\"5\\":\\"Examining Religious Doctrines\\",\\"6\\":\\"Narrow Path\\"}"}]`),X={1:`Muslims`,2:`Atheists`,3:`Buddhists`,4:`Hindus`,5:`Religious Doctrines`,6:`The Narrow Path`},Z=We,Ge={render:()=>{let e=Object.entries(X);return`
     <div class="stories-page-container">      
<!-- Stories Header -->
<header class="stories-header">
    <div class="stories-header-copy">
        <span class="stories-eyebrow">WATCH · LISTEN · REFLECT</span>
        <h1>Testimonies &amp; Stories</h1>
        <p>
            Explore personal testimonies, faith journeys, and stories
            that invite thoughtful reflection.
        </p>
    </div>

    <div class="stories-search">
        

        <div class="stories-search-field">
            <svg class="stories-search-icon"
                 aria-hidden="true"
                 viewBox="0 0 24 24"
                 fill="none">
                <circle cx="11" cy="11" r="7"
                        stroke="currentColor" stroke-width="1.8"/>
                <path d="m16 16 4 4"
                      stroke="currentColor" stroke-width="1.8"
                      stroke-linecap="round"/>
            </svg>

            <input
                type="search"
                id="storiesSearchInput"
                placeholder=" Search stories..."
                autocomplete="off"
            />

            <button
                id="clearSearchBtn"
                class="stories-search-clear"
                type="button"
                aria-label="Clear search"
                title="Clear search"
                hidden>
                <svg viewBox="0 0 24 24" fill="none"
                     aria-hidden="true">
                    <path d="m6 6 12 12M18 6 6 18"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    </div>
</header>

<!-- Category Filters -->
<section class="stories-browser" aria-label="Browse stories">
    <div class="stories-browser-heading">
        <h2>Browse by topic</h2>
        <span class="stories-total">
            ${Z.length} stories
        </span>
    </div>

    <nav class="filter-tabs-wrapper" aria-label="Story categories">
        <div class="stories-filter-tabs" id="groupTabsContainer">
            <button class="tab-btn active"
                    type="button"
                    data-group="all"
                    aria-pressed="true">
                <span>All Stories</span>
                <span class="tab-count">${Z.length}</span>
            </button>

            ${e.map(([e,t])=>`
                    <button class="tab-btn"
                            type="button"
                            data-group="${e}"
                            aria-pressed="false">
                        <span>${t}</span>
                        <span class="tab-count">${Z.filter(t=>String(t.group??0)===e).length}</span>
                    </button>
                `).join(``)}
        </div>
    </nav>
</section>


                <!-- Stories Grid Output -->
                 
                <div id="storiesGrid" class="story-grid">
                    ${Z.map(e=>{let t=e.group!==void 0&&e.group!==``?String(e.group):`0`,n=X[Number(t)]||`General Stories`;return`
                            <a 
                                href="${`https://www.youtube.com/watch?v=${e.link}`}" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="story-card group" 
                                data-group="${t}"
                                data-search="${(e.title+` `+(e.notes||``)).toLowerCase().replace(/"/g,`&quot;`)}"
                            >
                                <div class="story-thumbnail-wrapper">
                                    <img 
                                        src="${e.thumbnail}" 
                                        alt="${e.title.replace(/"/g,`&quot;`)}" 
                                        loading="lazy" 
                                        onerror="this.onerror=null; this.src='https://img.youtube.com/vi/${e.link}/hqdefault.jpg';"
                                    />
                                    <div class="category-badge">${n}</div>
                                    <div class="play-overlay">
                                        <div class="play-button-icon">
                                            <svg class="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="story-content">
                                    <h3 class="story-title" title="${e.title.replace(/"/g,`&quot;`)}">${e.title}</h3>${e.notes?`<p class="story-notes">${e.notes}</p>`:``}
                                </div>
                            </a>
                        `}).join(``)}
                </div>

               
<!-- Empty Search / Filter State -->
<div id="noResultsMessage" class="hidden no-results-message">
    <div class="no-results-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="10.5" cy="10.5" r="6.5"
                    stroke="currentColor" stroke-width="1.7" />
            <path d="m15.5 15.5 4 4"
                  stroke="currentColor" stroke-width="1.7"
                  stroke-linecap="round" />
        </svg>
    </div>
    <h3>No stories found</h3>
    <p>Try adjusting your filter or search terms.</p>
</div>

            </div>
        `},mount:()=>{let e=document.getElementById(`storiesSearchInput`),t=document.getElementById(`clearSearchBtn`),n=document.querySelectorAll(`.story-card`),r=document.querySelectorAll(`.tab-btn`),i=document.getElementById(`noResultsMessage`),a=`all`,o=``;function s(){let e=0;n.forEach(t=>{let n=t.getAttribute(`data-group`),r=t.getAttribute(`data-search`)||``,i=a===`all`||n===a,s=!o||r.includes(o);i&&s?(t.classList.remove(`hidden`),e++):t.classList.add(`hidden`)}),i&&(e===0?i.classList.remove(`hidden`):i.classList.add(`hidden`))}r.forEach(e=>{e.addEventListener(`click`,()=>{r.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),a=e.getAttribute(`data-group`)||`all`,s()})}),e&&e.addEventListener(`input`,e=>{o=e.target.value.toLowerCase().trim(),t&&(o.length>0?t.classList.remove(`hidden`):t.classList.add(`hidden`)),s()}),t&&e&&t.addEventListener(`click`,()=>{e.value=``,o=``,t.classList.add(`hidden`),e.focus(),s()})}},Ke={"/":()=>pe,"/about":()=>xe,"/faq":()=>he,"/community":()=>ge,"/changelog":()=>be,"/privacy":()=>Se,"/editor":()=>new Me,"/books":()=>new Pe,"/support":()=>new ze,"/store":()=>new He,"/brotherly":()=>Ue,"/stories":()=>Ge};function Q(e){return e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e||`/`}function $(){let e=document.getElementById(`app-content`);if(!e){console.error(`Router: #app-content was not found.`);return}let t=(Ke[Q(window.location.pathname)]??Ke[`/`])();window.scrollTo({top:0,behavior:`auto`});let n=t.render();e.innerHTML=``,typeof n==`string`?e.innerHTML=n:e.appendChild(n),t.mount?.()}function qe(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target;if(!t)return;let n=t.closest(`a[data-route]`);if(!n)return;let r=n.getAttribute(`href`);if(!r||!r.startsWith(`/`))return;e.preventDefault();let i=Q(window.location.pathname),a=Q(r);i!==a&&(history.pushState({},``,a),$())}function Je(){document.addEventListener(`click`,qe),window.addEventListener(`popstate`,$),$()}function Ye(){let e=localStorage.getItem(`sb-theme`),t=window.matchMedia(`(prefers-color-scheme: light)`).matches,n=e||(t?`dark`:`light`);document.documentElement.setAttribute(`data-theme`,n);let r=document.getElementById(`app-header`);r&&(r.innerHTML=d.render(),d.mount());let i=document.getElementById(`app-footer`);i&&(i.innerHTML=`
  <div class="container text-center site-footer">
   

    <p class="footer-copyright">
      &copy; ${new Date().getFullYear()} Shepherd Bible.
      Share a piece of your journey to inspire another.
    </p>

    <nav class="footer-links" aria-label="Footer navigation">
       <a href="/brotherly" data-route>Brotherly</a>
      <a href="/changelog" data-route>Changelog</a>
      <a href="/faq" data-route>FAQ</a>
      <a href="/books" data-route>Books</a>
      <a href="/about" data-route>About</a>
      <a href="/privacy" data-route>Privacy</a>
      <a href="mailto:shepherdbiblecommunity@gmail.com">
        Contact
      </a>
    </nav>
  </div>
`),Je()}document.addEventListener(`DOMContentLoaded`,Ye);