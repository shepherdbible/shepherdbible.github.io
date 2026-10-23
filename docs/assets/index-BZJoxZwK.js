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
`);let l=re(n,r,o),d=new i(t.getSymbolSize(n));return S(d,n),w(d),T(d,n),O(d,r,0),n>=7&&D(d,n),ne(d,l),isNaN(a)&&(a=s.getBestMask(d,O.bind(null,d,r))),s.applyMask(a,d),O(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),oe(e,a,i,o)}})),k=o((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),se=o((e=>{var t=k();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),ce=o((e=>{var t=k();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),A=c(o((e=>{var t=f(),n=oe(),r=se(),i=ce();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1),j=[{id:`windows`,name:`Windows PC`,icon:`windows`,iconClass:`windows-icon`,status:`Live on Windows 10/11`,statusClass:`live`,description:`Fast, offline-first Bible study with multi-translation support.`,storeName:`Microsoft Store`,storeUrl:`https://apps.microsoft.com/detail/9pprws532n91`,installerUrl:`https://get.microsoft.com/installer/download/9pprws532n91?referrer=appbadge`,installerName:`Windows Installer (.exe)`,available:!0},{id:`android`,name:`Android`,icon:`android`,iconClass:`android-icon`,status:`Live on the Play Store`,statusClass:`live`,description:`Bible reading, quick verse navigation, audio options, and daily devotions.`,storeName:`Google Play`,storeUrl:`https://play.google.com/store/apps/details?id=com.nxtccode.biblenotebook`,available:!0},{id:`macos`,name:`macOS`,icon:`apple`,iconClass:`mac-icon`,status:`Planned`,statusClass:`preview`,description:`A desktop Bible reading experience planned for Apple Silicon and Intel Macs.`,storeName:`Coming in the future`,available:!1},{id:`ios`,name:`iOS & iPadOS`,icon:`apple`,iconClass:`ios-icon`,status:`Planned`,statusClass:`preview`,description:`A focused Bible reading experience planned for iPhone and iPad.`,storeName:`App Store`,available:!1},{id:`linux`,name:`Linux`,icon:`terminal`,iconClass:`linux-icon`,status:`Planned`,statusClass:`preview`,description:`A desktop Bible study experience planned for Linux distributions.`,storeName:`Coming in the future`,available:!1}],M={windows:`
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
  </svg>`};function le(e){let t=e.available&&e.storeUrl?`
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
        ${M[e.icon]??``}
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
  `}function N(){return`
    <section class="section platforms-section">
      <div class="container text-center">
        <h2>Available Everywhere You Are</h2>
        <p class="section-lead">
          Study Scripture seamlessly on desktop or mobile — online or offline.
        </p>

        <div class="grid grid-4 platform-grid">
          ${j.map(le).join(``)}
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
    </div>`}function ue(){let e=e=>{let t=document.querySelector(e);if(!t)throw Error(`Required element not found: ${e}`);return t},t,n,r,i,a,o,s,c;try{t=e(`#platform-qr-modal`),n=e(`#platform-qr-canvas`),r=e(`#platform-qr-title`),i=e(`#platform-qr-description`),a=e(`#platform-qr-store`),o=e(`#platform-qr-icon`),s=e(`#platform-qr-open`),c=t.querySelector(`.qr-modal-close`)}catch(e){console.error(`QR modal initialization failed:`,e);return}let l=null;async function u(e){let u=j.find(t=>t.id===e);if(u?.available&&u.storeUrl){l=document.activeElement instanceof HTMLElement?document.activeElement:null,r.textContent=`${u.name} QR Code`,i.textContent=`Scan with your phone to open the app listing.`,a.textContent=u.storeName,o.innerHTML=M[u.icon]??``,s.href=u.storeUrl,n.hidden=!1,t.classList.add(`is-open`),t.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`qr-modal-open`);try{await A.toCanvas(n,u.storeUrl,{width:260,margin:2,errorCorrectionLevel:`H`,color:{dark:`#211a1d`,light:`#ffffff`}})}catch(e){console.error(`QR code generation failed:`,e),n.hidden=!0,i.textContent=`Unable to generate the QR code. Use the Open Store link instead.`}c?.focus()}}function d(){t.classList.remove(`is-open`),t.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`qr-modal-open`),l?.focus()}document.addEventListener(`click`,e=>{let t=e.target;if(!(t instanceof Element))return;let n=t.closest(`[data-qr-platform]`);if(n){u(n.dataset.qrPlatform??``);return}t.closest(`[data-qr-close]`)&&d()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&t.classList.contains(`is-open`)&&d()})}var de={render:()=>`
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
        ${N()}
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

   
  `,mount:()=>{N(),ue()}},fe=[{id:`1`,category:`Getting Started`,question:`What is Shepherd Bible?`,answer:`Shepherd Bible is a Bible reading and study app designed to help you read God's Word, take notes, highlight verses, bookmark passages, and keep your personal Bible study organized.`},{id:`2`,category:`Getting Started`,question:`Is Shepherd Bible free?`,answer:`Yes. Shepherd Bible is available to use for Bible reading and study. Some features or services may vary by platform and version.`},{id:`3`,category:`Bible Versions`,question:`Which Bible versions are available?`,answer:`Shepherd Bible supports multiple Bible versions, including the King James Version (KJV) and other available editions. The available versions may vary depending on the platform and the current app release.`},{id:`4`,category:`Bible Versions`,question:`Can I read different Bible versions?`,answer:`Yes. Shepherd Bible is designed to let you work with multiple Bible versions so you can compare translations while studying a passage.`},{id:`5`,category:`Bible Reading`,question:`Can I read the Bible offline?`,answer:`Bible content available in Shepherd Bible is stored locally on your device, allowing you to access your downloaded Bible data without depending on an internet connection.`},{id:`6`,category:`Bible Study`,question:`Can I highlight Bible verses?`,answer:`Yes. Shepherd Bible provides highlighting tools so you can mark important verses and passages for personal Bible study.`},{id:`7`,category:`Bible Study`,question:`Can I bookmark Bible verses?`,answer:`Yes. You can bookmark passages that you want to quickly return to later.`},{id:`8`,category:`Notes`,question:`Can I add notes to Bible passages?`,answer:`Yes. Shepherd Bible allows you to create personal notes while reading and studying the Bible.`},{id:`9`,category:`Notes`,question:`Where are my notes and highlights stored?`,answer:`Your personal Bible study data, including notes, highlights, and bookmarks, is stored locally on your device. This allows the app to work with your study data without requiring an internet connection.`},{id:`10`,category:`Backup and Data`,question:`How can I back up my Bible study data?`,answer:`Shepherd Bible provides data backup and export functionality so you can protect your personal Bible study data. We recommend making regular backups, especially before major device or app changes.`},{id:`11`,category:`Backup and Data`,question:`What happens to my notes if I reinstall the app?`,answer:`Personal study data is stored locally on your device. Reinstalling or removing the app can affect locally stored data, so it is important to create a backup before uninstalling or resetting the application.`},{id:`12`,category:`Search`,question:`Can I search the Bible?`,answer:`Yes. Shepherd Bible includes Bible search functionality that helps you find words, phrases, and passages across the available Bible data.`},{id:`13`,category:`Community`,question:`What is the Shepherd Bible community?`,answer:`The Shepherd Bible community is a place for Bible readers to discuss Scripture, ask questions, share encouragement, and share personal testimonies with other believers.`},{id:`14`,category:`Community`,question:`Can I share my Bible study journey with others?`,answer:`Yes. The Shepherd Bible community is designed to give users a place to share thoughts, encouragement, questions, testimonies, and experiences from their Bible study journey.`},{id:`15`,category:`Verse Sharing`,question:`Can I share a specific Bible verse?`,answer:`Yes. Shepherd Bible's verse sharing features are designed to make it easy to share a specific Scripture passage with others.`},{id:`16`,category:`Verse Images`,question:`What is the Verse Image Creator?`,answer:`The Verse Image Creator lets you turn a Bible verse into a visual image that you can save and share. You can customize elements such as text, fonts, colors, backgrounds, layouts, effects, and templates.`},{id:`17`,category:`Verse Images`,question:`Can I create Bible verse images for social media?`,answer:`Yes. The Verse Image Creator is designed to help you create Scripture images in different layouts and sizes that can be shared on social media or with friends and family.`},{id:`18`,category:`Privacy`,question:`Does Shepherd Bible require an internet connection to read the Bible?`,answer:`No. Bible reading can work with locally available Bible data. Internet access may be required for online services and community-related features.`},{id:`19`,category:`Privacy`,question:`Is my personal Bible study data private?`,answer:`Personal study data such as notes, highlights, and bookmarks is stored locally on your device. Online community features are separate from your private local study data.`},{id:`20`,category:`Support`,question:`How can I report a problem or bug?`,answer:`If you encounter a problem, please report it through the available Shepherd Bible support or feedback channel. Include what you were doing when the problem occurred and, if possible, your device and app version. This information helps us investigate and fix issues.`},{id:`21`,category:`Support`,question:`How can I suggest a new feature?`,answer:`We welcome suggestions from Shepherd Bible users. Feature requests and feedback help us understand how people use the app and what would make Bible study more useful.`},{id:`22`,category:`Updates`,question:`How often is Shepherd Bible updated?`,answer:`Shepherd Bible is actively developed and updated as improvements, bug fixes, new features, and Bible study enhancements become available.`},{id:`23`,category:`Updates`,question:`Where can I see what changed in an update?`,answer:`You can check the Shepherd Bible changelog for information about new features, improvements, fixes, and other changes included in releases.`}],pe={render:()=>`
    <div class="section">
      <div class="container" style="max-width: 800px;">
        <h1 class="text-center" style="margin-bottom: 16px;">Help Center & FAQ</h1>
        <p class="text-center" style="color: var(--color-text-muted); margin-bottom: 40px;">Find answers to common questions about Shepherd Bible.</p>
        
        <div class="search-container" style="margin-bottom: 40px;">
          <input type="text" id="faq-search" placeholder="Search questions..." class="search-input" aria-label="Search FAQ" />
        </div>

        <div id="faq-list" class="faq-list">
          ${fe.map(e=>`
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
  `,mount:()=>{document.querySelectorAll(`.faq-question`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!t));let n=e.nextElementSibling;t?(n.setAttribute(`hidden`,`true`),e.querySelector(`.icon`).textContent=`+`):(n.removeAttribute(`hidden`),e.querySelector(`.icon`).textContent=`−`)})});let e=document.getElementById(`faq-search`),t=document.querySelectorAll(`.faq-item`);e?.addEventListener(`input`,e=>{let n=e.target.value.toLowerCase();t.forEach(e=>{let t=e.getAttribute(`data-question`)||``;e.style.display=t.includes(n)?`block`:`none`})})}},me={render:()=>`
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
  `},P=[{id:`v1.1.420.0`,version:`1.1.420.0`,date:`2026-09-21`,title:`Shepherd Bible Improvements`,description:`Continued improvements to Shepherd Bible with a focus on reliability, Bible study, and a better reading experience.`,changes:[`Improved application stability`,`Improved handling of Bible data and local storage`,`Improved Bible search reliability`,`Improved notes, highlights, and bookmarks handling`,`Improved error handling for damaged or unavailable local data`,`Continued performance improvements`],type:`improvement`},{id:`v1.1.416.0`,version:`1.1.416.0`,date:`2026-09-XX`,title:`Bible Study Improvements`,description:`Improvements to Bible reading and personal study features.`,changes:[`Improved Bible reading experience`,`Improved Bible search`,`Improved notes and annotation handling`,`Improved highlights and bookmarks`,`Improved application stability`],type:`improvement`},{id:`v1.1.405.0`,version:`1.1.405.0`,date:`2026-09-XX`,title:`Stability and Compatibility`,description:`Focused on compatibility, stability, and improving the reliability of Bible study data.`,changes:[`Improved application compatibility`,`Improved local data handling`,`Improved recovery from database-related problems`,`Improved error handling`,`Fixed several stability issues`],type:`fix`},{id:`community`,version:`Community`,date:`2026-09-21`,title:`Shepherd Bible Community`,description:`Introducing the Shepherd Bible community experience, created to give Bible readers a place to connect, encourage one another, and share their journey.`,changes:[`Added Bible discussion areas`,`Added encouragement posts`,`Added testimony sharing`,`Added community questions`,`Added replies and conversations`,`Added post and reply interactions`,`Added community reporting tools`],type:`feature`},{id:`verse-image`,version:`Verse Image Creator`,date:`2026-09-21`,title:`Create Scripture Images`,description:`A new creative experience for turning Bible verses into beautiful shareable images.`,changes:[`Added Bible verse image editor`,`Added customizable text`,`Added font controls`,`Added color controls`,`Added background customization`,`Added layout controls`,`Added visual effects`,`Added templates`,`Added PNG export`,`Added undo and redo support`],type:`feature`}],he={render:()=>`
      <div class="section">
        <div class="container" style="max-width: 800px;">
          
          <div class="text-center" style="margin-bottom: 56px;">
            <h1 style="margin-bottom: 16px;">Changelog & Updates</h1>
            <p style="color: var(--color-text-muted); font-size: 1.125rem;">
              Track continuous updates, fixes, and feature additions for Shepherd Bible.
            </p>
            <div style="margin-top: 20px; display: inline-block; padding: 10px 18px; background: var(--color-surface-muted); border-radius: var(--radius-md); font-size: 0.875rem;">
              <em>Demonstration release log. Official releases will be updated here live.</em>
            </div>
          </div>

          <div class="changelog-list">
            ${(P.length>0?P:[{id:`v1.0.0-preview`,version:`1.0.0 (Preview)`,date:`October 2026`,title:`Initial Web & Community Launch`,description:`The foundation for the Shepherd Bible web experience, help center, and community preview.`,changes:[`Distraction-free reading interface design and typography`,`Searchable FAQ & Help Center with accordion controls`,`Static Community Hub preview for future discussion platform`,`Light and dark peaceful themes with local preference storage`],type:`feature`},{id:`v0.9.0-beta`,version:`0.9.0 (Beta)`,date:`September 2026`,title:`Core Reading & Offline Support`,description:`Early beta build introducing local Bible caching and offline reading performance.`,changes:[`Added KJV and WEB translation support`,`Local storage caching for fast offline verse loading`,`Responsive layout optimizations for mobile and tablet readers`],type:`improvement`}]).map(e=>`
              <article class="changelog-card">
                <div class="changelog-header">
                  <div class="version-group">
                    <span class="version-tag">${e.version}</span>
                    <span class="type-badge badge-${e.type}">${e.type}</span>
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

        </div>
      </div>

      <style>
        .changelog-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .changelog-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }

        .changelog-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .version-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .version-tag {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 1.125rem;
          color: var(--color-primary);
        }

        .type-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .badge-feature {
          background: #e6f4ea;
          color: #137333;
        }

        .badge-improvement {
          background: #e8f0fe;
          color: #1a73e8;
        }

        .badge-fix {
          background: #fce8e6;
          color: #c5221f;
        }

        .badge-security {
          background: #fef7e0;
          color: #b06000;
        }

        [data-theme="dark"] .badge-feature {
          background: #132e1f;
          color: #81c995;
        }

        [data-theme="dark"] .badge-improvement {
          background: #172b4d;
          color: #8ab4f8;
        }

        [data-theme="dark"] .badge-fix {
          background: #3c1e1e;
          color: #f28b82;
        }

        [data-theme="dark"] .badge-security {
          background: #332a15;
          color: #fdd663;
        }

        .release-date {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }

        .changelog-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .changelog-description {
          color: var(--color-text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .changelog-changes h3 {
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }

        .changelog-changes ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .changelog-changes li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          color: var(--color-text);
          font-size: 1rem;
          line-height: 1.5;
        }

        .changelog-changes li::before {
          content: "•";
          position: absolute;
          left: 4px;
          color: var(--color-accent);
          font-weight: bold;
        }

        @media (max-width: 600px) {
          .changelog-card {
            padding: 24px;
          }
          .changelog-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      </style>
    `},ge={render:()=>`
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
  `},_e={render:()=>`
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
  `,mount:()=>{let e=document.querySelectorAll(`.policy-tab`),t=document.querySelectorAll(`.policy-content`);e.forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-target`);e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t.forEach(e=>{e.id===r?e.style.display=`block`:e.style.display=`none`})})})}};function ve(){let e=`elem_verse_text`;return{width:1080,height:1080,padding:60,preset:`square`,background:{type:`gradient`,color:`#2C1B18`,gradient:{type:`linear`,colors:[`#3D1E18`,`#1A0B08`],angle:135},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.2,blur:0},elements:[{id:e,type:`text`,text:`“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.”`,fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,letterSpacing:0,lineHeight:1.4,textTransform:`none`,color:`#FAF7F2`,gradient:{type:`linear`,colors:[`#FAF7F2`,`#FAF7F2`],angle:90},outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0, 0, 0, 0.4)`,shadowBlur:8,shadowOffsetX:2,shadowOffsetY:4,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0,x:90,y:360,width:900,height:300,rotation:0,opacity:1,isVerseText:!0},{id:`elem_verse_ref`,type:`text`,text:`JOHN 3:16`,fontFamily:`Montserrat`,fontSize:26,fontWeight:`600`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,letterSpacing:4,lineHeight:1.2,textTransform:`uppercase`,color:`#D4AF37`,gradient:{type:`linear`,colors:[`#D4AF37`,`#D4AF37`],angle:90},outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0, 0, 0, 0.3)`,shadowBlur:4,shadowOffsetX:1,shadowOffsetY:2,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0,x:90,y:720,width:900,height:60,rotation:0,opacity:1,isReference:!0}],selected_element_id:e}}var ye=class{listeners=new Map;on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n)),n.add(t)}off(e,t){let n=this.listeners.get(e);n&&(n.delete(t),n.size===0&&this.listeners.delete(e))}emit(e,t){let n=this.listeners.get(e);if(n)for(let e of n)e(t)}removeAll(){this.listeners.clear()}},be=class{undoStack=[];redoStack=[];maxHistorySize;constructor(e=50){this.maxHistorySize=e}deepClone(e){if(typeof structuredClone==`function`)try{return structuredClone(e)}catch{}return JSON.parse(JSON.stringify(e))}push(e){let t=this.deepClone(e);this.undoStack.push(t),this.undoStack.length>this.maxHistorySize&&this.undoStack.shift(),this.redoStack=[]}undo(e){if(!this.canUndo())return null;let t=this.undoStack.pop();return this.redoStack.push(this.deepClone(e)),this.deepClone(t)}redo(e){if(!this.canRedo())return null;let t=this.redoStack.pop();return this.undoStack.push(this.deepClone(e)),this.deepClone(t)}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}clear(){this.undoStack=[],this.redoStack=[]}},xe=class{imageCache=new Map;async render(e,t,n,r){if(e.save(),r.type===`solid`)e.fillStyle=r.color||`#1A1A1A`,e.fillRect(0,0,t,n);else if(r.type===`gradient`){let i=r.gradient,a;if(i.type===`radial`){let r=t/2,i=n/2,o=Math.max(t,n)/1.2;a=e.createRadialGradient(r,i,0,r,i,o)}else{let r=(i.angle||0)*Math.PI/180,o=t/2-Math.cos(r)*t/2,s=n/2-Math.sin(r)*n/2,c=t/2+Math.cos(r)*t/2,l=n/2+Math.sin(r)*n/2;a=e.createLinearGradient(o,s,c,l)}let o=i.colors&&i.colors.length>=2?i.colors:[`#3D1E18`,`#1A0B08`];o.forEach((e,t)=>{a.addColorStop(t/(o.length-1),e)}),e.fillStyle=a,e.fillRect(0,0,t,n)}else if(r.type===`image`&&r.imageUrl){e.fillStyle=r.color||`#000000`,e.fillRect(0,0,t,n);try{let i=await this.loadImage(r.imageUrl);e.save(),r.blur>0&&(e.filter=`blur(${r.blur}px)`),e.globalAlpha=Math.max(0,Math.min(1,r.imageOpacity??1));let a=i.width/i.height,o=t/n,s=t,c=n,l=0,u=0;a>o?(s=n*a,l=(t-s)/2):(c=t/a,u=(n-c)/2),e.drawImage(i,l,u,s,c),e.restore()}catch(e){console.warn(`Failed to render background image:`,e)}}r.overlayOpacity>0&&r.overlayColor&&(e.save(),e.globalAlpha=Math.max(0,Math.min(1,r.overlayOpacity)),e.fillStyle=r.overlayColor,e.fillRect(0,0,t,n),e.restore()),e.restore()}loadImage(e){return this.imageCache.has(e)?Promise.resolve(this.imageCache.get(e)):new Promise((t,n)=>{let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{this.imageCache.set(e,r),t(r)},r.onerror=e=>n(e),r.src=e})}clearCache(){this.imageCache.clear()}},F=class{static applyTextShadow(e,t){t.shadowBlur>0||t.shadowOffsetX!==0||t.shadowOffsetY!==0?(e.shadowColor=t.shadowColor||`rgba(0, 0, 0, 0.5)`,e.shadowBlur=t.shadowBlur||0,e.shadowOffsetX=t.shadowOffsetX||0,e.shadowOffsetY=t.shadowOffsetY||0):this.clearShadow(e)}static applyTextGlow(e,t){let n=t.glowColor,r=t.glowBlur??0,i=Math.max(0,Math.min(1,t.glowIntensity??0));if(!n||n===`transparent`||r<=0||i<=0){this.clearShadow(e);return}e.shadowColor=this.withAlpha(n,i),e.shadowBlur=r,e.shadowOffsetX=0,e.shadowOffsetY=0}static clearShadow(e){e.shadowColor=`transparent`,e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}static drawTextOutline(e,t,n,r,i){i.outlineWidth>0&&i.outlineColor&&i.outlineColor!==`transparent`&&(e.save(),e.strokeStyle=i.outlineColor,e.lineWidth=i.outlineWidth*2,e.lineJoin=`round`,e.lineCap=`round`,e.miterLimit=2,e.strokeText(t,n,r),e.restore())}static drawRoundedRect(e,t,n,r,i,a){let o=Math.max(0,Math.min(a,Math.min(r/2,i/2)));e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()}static withAlpha(e,t){let n=Math.max(0,Math.min(1,t));if(e.startsWith(`#`)){let t=e.substring(1);if(t.length===3&&(t=t.split(``).map(e=>e+e).join(``)),t.length===6)return`rgba(${parseInt(t.substring(0,2),16)}, ${parseInt(t.substring(2,4),16)}, ${parseInt(t.substring(4,6),16)}, ${n})`}if(e.startsWith(`rgba(`))return e.replace(/rgba\(([^)]+)\)/,(e,t)=>{let r=t.split(`,`).map(e=>e.trim());return`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${n})`});if(e.startsWith(`rgb(`)){let t=e.substring(4,e.length-1).split(`,`).map(e=>e.trim());return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${n})`}return e}static withTransform(e,t,n,r,i,a,o,s){e.save(),e.globalAlpha=Math.max(0,Math.min(1,o));let c=t+r/2,l=n+i/2;e.translate(c,l),a!==0&&e.rotate(a*Math.PI/180),e.translate(-c,-l),s(),e.restore()}},Se=class{render(e,t){F.withTransform(e,t.x,t.y,t.width,t.height,t.rotation,t.opacity,()=>{this.drawTextContent(e,t)})}fitToText(e,t,n){let r=t.padding??0,i=t.fontStyle===`italic`?`italic `:``;e.save(),e.font=`${i}${t.fontWeight||`400`} ${t.fontSize}px "${t.fontFamily}", serif, sans-serif`,`letterSpacing`in e&&(e.letterSpacing=`${t.letterSpacing||0}px`);let a=this.applyTextTransform(t.text,t.textTransform),o=this.wrapText(e,a,Math.max(1,t.width-r*2)),s=o.length?Math.max(...o.map(t=>e.measureText(t).width)):0;e.restore();let c=t.fontSize*(t.lineHeight||1.3),l=Math.max(1,o.length)*c+r*2,u=t.y+t.height/2;if(t.height=l,t.y=u-l/2,n&&s>0){let e=Math.min(t.width,s+r*2+4),n=t.x+t.width/2;t.width=e,t.x=n-e/2}}drawTextContent(e,t){e.save(),e.font=`${t.fontStyle===`italic`?`italic `:``}${t.fontWeight||`400`} ${t.fontSize}px "${t.fontFamily}", serif, sans-serif`,e.textAlign=t.textAlign||`center`,e.textBaseline=`middle`,`letterSpacing`in e&&(e.letterSpacing=`${t.letterSpacing||0}px`);let n=this.applyTextTransform(t.text,t.textTransform),r=this.wrapText(e,n,Math.max(1,t.width-(t.padding??0)*2));if(r.length===0){e.restore();return}let i=t.fontSize*(t.lineHeight||1.3),a=t.x+t.width/2;t.textAlign===`left`?a=t.x+(t.padding??0):t.textAlign===`right`&&(a=t.x+t.width-(t.padding??0));let o=r.length*i,s=t.y+t.height/2-o/2+i/2;t.verticalAlign===`top`?s=t.y+(t.padding??0)+i/2:t.verticalAlign===`bottom`&&(s=t.y+t.height-(t.padding??0)-o+i/2),this.drawTextBackground(e,t,r,i,a,s),r.forEach((n,r)=>{let o=s+r*i;F.applyTextGlow(e,t),this.drawTextFill(e,n,a,o,t),F.clearShadow(e),F.applyTextShadow(e,t),this.drawTextFill(e,n,a,o,t),F.clearShadow(e),F.drawTextOutline(e,n,a,o,t),this.drawTextFill(e,n,a,o,t)}),F.clearShadow(e),e.restore()}drawTextFill(e,t,n,r,i){e.fillStyle=i.gradient&&i.gradient.colors.length>=2?this.createTextGradient(e,i,n,r):i.color||`#FFFFFF`,e.fillText(t,n,r)}createTextGradient(e,t,n,r){let i=t.gradient;if(i.type===`radial`){let a=Math.max(t.width,t.height)/2,o=e.createRadialGradient(n,r,0,n,r,a);return this.addGradientStops(o,i.colors),o}let a=(i.angle||0)*Math.PI/180,o=Math.sqrt(t.width**2+t.height**2),s=t.x+t.width/2,c=t.y+t.height/2,l=s-Math.cos(a)*o/2,u=c-Math.sin(a)*o/2,d=s+Math.cos(a)*o/2,f=c+Math.sin(a)*o/2,p=e.createLinearGradient(l,u,d,f);return this.addGradientStops(p,i.colors),p}addGradientStops(e,t){let n=t.length;t.forEach((t,r)=>{let i=n<=1?0:r/(n-1);e.addColorStop(i,t)})}drawTextBackground(e,t,n,r,i,a){if(!t.backgroundColor||t.backgroundColor===`transparent`)return;let o=t.padding??0,s=Math.max(...n.map(t=>e.measureText(t).width))+o*2,c=n.length*r+o*2,l=t.x+t.width/2-s/2;t.textAlign===`left`?l=t.x:t.textAlign===`right`&&(l=t.x+t.width-s);let u=t.y+t.height/2-c/2;t.glowColor&&t.glowColor!==`transparent`&&(t.glowBlur??0)>0&&(e.save(),e.shadowColor=t.glowColor,e.shadowBlur=t.glowBlur??0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.fillStyle=t.backgroundColor,F.drawRoundedRect(e,l,u,s,c,t.backgroundRadius??0),e.fill(),e.restore()),e.save(),e.fillStyle=t.backgroundColor,F.drawRoundedRect(e,l,u,s,c,t.backgroundRadius??0),e.fill(),e.restore()}applyTextTransform(e,t){switch(t){case`uppercase`:return e.toUpperCase();case`lowercase`:return e.toLowerCase();case`capitalize`:return e.replace(/\b\w/g,e=>e.toUpperCase());default:return e}}wrapText(e,t,n){if(!t)return[];let r=t.split(`
`),i=[];return r.forEach(t=>{let r=t.split(` `),a=``;for(let t=0;t<r.length;t++){let o=a?`${a} ${r[t]}`:r[t];for(e.measureText(o).width>n&&a?(i.push(a),a=r[t]):a=o;e.measureText(a).width>n&&a.length>1;){let t=a.length-1;for(;t>1&&e.measureText(a.slice(0,t)).width>n;)t--;i.push(a.slice(0,t)),a=a.slice(t)}}i.push(a)}),i}},I=[{id:`merriweather`,family:`Merriweather`,category:`serif`,googleFontQuery:`Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700`},{id:`playfair-display`,family:`Playfair Display`,category:`serif`,googleFontQuery:`Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600`},{id:`lora`,family:`Lora`,category:`serif`,googleFontQuery:`Lora:ital,wght@0,400;0,600;0,700;1,400;1,600`},{id:`libre-baskerville`,family:`Libre Baskerville`,category:`serif`,googleFontQuery:`Libre+Baskerville:ital,wght@0,400;0,700;1,400`},{id:`cormorant-garamond`,family:`Cormorant Garamond`,category:`serif`,googleFontQuery:`Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400`},{id:`cinzel`,family:`Cinzel`,category:`display`,googleFontQuery:`Cinzel:wght@400;600;700`},{id:`inter`,family:`Inter`,category:`sans-serif`,googleFontQuery:`Inter:wght@300;400;500;600;700`},{id:`montserrat`,family:`Montserrat`,category:`sans-serif`,googleFontQuery:`Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400`},{id:`great-vibes`,family:`Great Vibes`,category:`handwriting`,googleFontQuery:`Great+Vibes`},{id:`caveat`,family:`Caveat`,category:`handwriting`,googleFontQuery:`Caveat:wght@400;600;700`}],L=new class{loadedFonts=new Set;loadingPromises=new Map;async loadFont(e){if(this.loadedFonts.has(e))return!0;if(this.loadingPromises.has(e))return this.loadingPromises.get(e);let t=I.find(t=>t.family.toLowerCase()===e.toLowerCase()),n=(async()=>{try{if(t){let e=`google-font-${t.id}`;if(!document.getElementById(e)){let n=document.createElement(`link`);n.id=e,n.rel=`stylesheet`,n.href=`https://fonts.googleapis.com/css2?family=${t.googleFontQuery}&display=swap`,document.head.appendChild(n)}}return`fonts`in document&&await document.fonts.load(`16px "${e}"`),this.loadedFonts.add(e),!0}catch(t){return console.warn(`Font load warning for "${e}":`,t),this.loadedFonts.add(e),!1}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,n),n}isLoaded(e){return this.loadedFonts.has(e)}getAvailableFonts(){return I}},R=class{baseHandleSize=12;baseRotateDistance=50;baseRotateRadius=12;baseRotateHitRadius=24;uiScale=1;get handleSize(){return this.baseHandleSize*this.uiScale}get rotateRadius(){return this.baseRotateRadius*this.uiScale}get rotateDistance(){return this.baseRotateDistance*this.uiScale}render(e,t){e.save();let n=t.x+t.width/2,r=t.y+t.height/2;e.translate(n,r),t.rotation!==0&&e.rotate(t.rotation*Math.PI/180),e.translate(-n,-r);let i=t.x-4,a=t.x+t.width+4,o=t.y-4,s=t.y+t.height+4,c=t.x+t.width/2,l=t.y+t.height/2;e.strokeStyle=`#D4AF37`,e.lineWidth=2*this.uiScale,e.setLineDash([6*this.uiScale,6*this.uiScale]),e.strokeRect(i,o,a-i,s-o),e.setLineDash([]),[{x:i,y:o},{x:a,y:o},{x:a,y:s},{x:i,y:s},{x:c,y:o},{x:a,y:l},{x:c,y:s},{x:i,y:l}].forEach(t=>{this.drawHandle(e,t.x,t.y)}),this.drawDeleteHandle(e,a+14*this.uiScale,o-14*this.uiScale);let u=o-this.rotateDistance;e.beginPath(),e.moveTo(c,o),e.lineTo(c,u+7),e.strokeStyle=`#D4AF37`,e.lineWidth=2*this.uiScale,e.stroke(),this.drawRotateHandle(e,c,u),e.restore()}drawHandle(e,t,n){let r=this.handleSize;e.save(),e.fillStyle=`#FAF7F2`,e.strokeStyle=`#3D1E18`,e.lineWidth=2*this.uiScale,e.fillRect(t-r/2,n-r/2,r,r),e.strokeRect(t-r/2,n-r/2,r,r),e.restore()}drawDeleteHandle(e,t,n){let r=11*this.uiScale;e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=`#D93025`,e.fill(),e.strokeStyle=`#FFFFFF`,e.lineWidth=2*this.uiScale,e.stroke();let i=r*.45;e.beginPath(),e.moveTo(t-i,n-i),e.lineTo(t+i,n+i),e.moveTo(t+i,n-i),e.lineTo(t-i,n+i),e.stroke(),e.restore()}drawRotateHandle(e,t,n){let r=this.rotateRadius;e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=`#D4AF37`,e.fill(),e.strokeStyle=`#3D1E18`,e.lineWidth=2*this.uiScale,e.stroke(),e.beginPath(),e.arc(t,n,r*.72,0,Math.PI*2),e.fillStyle=`#FAF7F2`,e.fill(),e.beginPath(),e.arc(t,n,r*.42,-Math.PI*.8,Math.PI*.8),e.strokeStyle=`#3D1E18`,e.lineWidth=2*this.uiScale,e.lineCap=`round`,e.stroke();let i=t+r*.3,a=n-r*.3;e.beginPath(),e.moveTo(i-r*.12,a-r*.08),e.lineTo(i+r*.12,a-r*.08),e.lineTo(i+r*.06,a+r*.14),e.strokeStyle=`#3D1E18`,e.lineWidth=2*this.uiScale,e.lineJoin=`round`,e.stroke(),e.restore()}getHandlePoint(e,t){let n=e.x-4,r=e.x+e.width+4,i=e.y-4,a=e.y+e.height+4,o=e.x+e.width/2,s=e.y+e.height/2;switch(t){case`top-left`:return{x:n,y:i};case`top`:return{x:o,y:i};case`top-right`:return{x:r,y:i};case`right`:return{x:r,y:s};case`bottom-right`:return{x:r,y:a};case`bottom`:return{x:o,y:a};case`bottom-left`:return{x:n,y:a};case`left`:return{x:n,y:s};case`delete`:return{x:r+14*this.uiScale,y:i-14*this.uiScale};case`rotate`:return{x:o,y:i-this.rotateDistance}}}hitTest(e,t,n){let r=[`top-left`,`top`,`top-right`,`right`,`bottom-right`,`bottom`,`bottom-left`,`left`,`rotate`,`delete`],i=e.x+e.width/2,a=e.y+e.height/2,o=-(e.rotation*Math.PI)/180,s=t-i,c=n-a,l=s*Math.cos(o)-c*Math.sin(o)+i,u=s*Math.sin(o)+c*Math.cos(o)+a,d=12*Math.max(this.uiScale,1)+(this.uiScale>1?6*this.uiScale:0),f=this.getHandlePoint(e,`rotate`),p=Math.max(this.baseRotateHitRadius*this.uiScale,24);if(Math.hypot(l-f.x,u-f.y)<=p)return`rotate`;for(let t of r){let n=this.getHandlePoint(e,t);if(Math.abs(l-n.x)<=d&&Math.abs(u-n.y)<=d)return t}return null}getCursor(e){switch(e){case`left`:case`right`:return`ew-resize`;case`top`:case`bottom`:return`ns-resize`;case`top-left`:case`bottom-right`:return`nwse-resize`;case`top-right`:case`bottom-left`:return`nesw-resize`;case`rotate`:return`grab`;case`delete`:return`pointer`;default:return`default`}}},z=class{canvas;ctx;backgroundRenderer=new xe;textRenderer=new Se;fitWidth=!0;autoFit=!0;selectionHandles=new R;showSelectionControls=!0;constructor(e){this.canvas=e;let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)throw Error(`Unable to obtain 2D Canvas Context`);this.ctx=t}async render(e,t=!0){this.showSelectionControls=t,(this.canvas.width!==e.width||this.canvas.height!==e.height)&&(this.canvas.width=e.width,this.canvas.height=e.height);let n=e.elements.filter(e=>e.type===`text`).map(e=>L.loadFont(e.fontFamily));if(await Promise.all(n),this.ctx.clearRect(0,0,e.width,e.height),await this.backgroundRenderer.render(this.ctx,e.width,e.height,e.background),e.elements.forEach(e=>{e.type===`text`?(this.autoFit&&this.textRenderer.fitToText(this.ctx,e,this.fitWidth),this.textRenderer.render(this.ctx,e)):e.type===`shape`&&this.renderShape(e)}),this.showSelectionControls&&e.selected_element_id){let t=e.elements.find(t=>t.id===e.selected_element_id);t&&this.renderSelectionOverlay(t)}}renderShape(e){F.withTransform(this.ctx,e.x,e.y,e.width,e.height,e.rotation,e.opacity,()=>{if(this.ctx.save(),this.ctx.fillStyle=e.fillColor||`transparent`,this.ctx.strokeStyle=e.strokeColor||`#D4AF37`,this.ctx.lineWidth=e.strokeWidth||2,e.shapeType===`divider`||e.shapeType===`line`)this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y+e.height/2),this.ctx.lineTo(e.x+e.width,e.y+e.height/2),this.ctx.stroke();else if(e.shapeType===`rectangle`)this.ctx.fillRect(e.x,e.y,e.width,e.height),e.strokeWidth>0&&this.ctx.strokeRect(e.x,e.y,e.width,e.height);else if(e.shapeType===`circle`){this.ctx.beginPath();let t=e.width/2,n=e.height/2;this.ctx.ellipse(e.x+t,e.y+n,t,n,0,0,Math.PI*2),this.ctx.fill(),e.strokeWidth>0&&this.ctx.stroke()}this.ctx.restore()})}renderSelectionOverlay(e){let t=this.canvas.getBoundingClientRect();this.selectionHandles.uiScale=t.width>0?Math.max(1,this.canvas.width/t.width):1,this.selectionHandles.render(this.ctx,e)}getCanvas(){return this.canvas}},B=[{id:`classic`,name:`Classic Shepherd`,description:`Rich burgundy with warm gold accents and traditional serif typography.`,presetState:{background:{type:`gradient`,color:`#2C1B18`,gradient:{type:`linear`,colors:[`#4A241B`,`#160A07`],angle:135},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.22,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#FAF7F2`,letterSpacing:0,lineHeight:1.4,outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0,0,0,0.45)`,shadowBlur:10,shadowOffsetX:2,shadowOffsetY:4,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:26,fontWeight:`600`,fontStyle:`normal`,textAlign:`center`,color:`#D4AF37`,letterSpacing:4,lineHeight:1.2}},{id:`midnight-glow`,name:`Midnight Scripture`,description:`Deep midnight background with bright scripture and a subtle atmospheric glow.`,presetState:{background:{type:`gradient`,color:`#080B12`,gradient:{type:`radial`,colors:[`#20283A`,`#05070C`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:44,fontWeight:`400`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,shadowColor:`rgba(0,0,0,0.6)`,shadowBlur:12,shadowOffsetX:0,shadowOffsetY:4,glowColor:`#B9D8FF`,glowBlur:18,glowIntensity:.7,outlineColor:`transparent`,outlineWidth:0,letterSpacing:0,lineHeight:1.45,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:24,fontWeight:`600`,color:`#B9D8FF`,letterSpacing:4,textAlign:`center`}},{id:`modern-card`,name:`Modern Card`,description:`Contemporary scripture typography placed over a soft translucent text panel.`,presetState:{background:{type:`gradient`,color:`#171717`,gradient:{type:`linear`,colors:[`#3A3A3A`,`#111111`],angle:145},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Inter`,fontSize:40,fontWeight:`500`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,letterSpacing:0,lineHeight:1.4,backgroundColor:`rgba(255,255,255,0.10)`,backgroundRadius:24,padding:32,shadowColor:`rgba(0,0,0,0.35)`,shadowBlur:12,shadowOffsetX:0,shadowOffsetY:6,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,blur:0},referenceStyle:{fontFamily:`Inter`,fontSize:22,fontWeight:`700`,color:`#D4AF37`,letterSpacing:3,textAlign:`center`}},{id:`forest-psalm`,name:`Forest Psalm`,description:`Deep forest green with warm cream typography inspired by nature and the Psalms.`,presetState:{background:{type:`gradient`,color:`#10251D`,gradient:{type:`radial`,colors:[`#28533D`,`#07130E`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#F5EFE2`,letterSpacing:0,lineHeight:1.45,shadowColor:`rgba(0,0,0,0.5)`,shadowBlur:10,shadowOffsetX:1,shadowOffsetY:4,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:25,fontWeight:`600`,color:`#D8C58A`,letterSpacing:4,textAlign:`center`}},{id:`bold-proclamation`,name:`Bold Proclamation`,description:`Large bold typography designed for powerful scripture statements.`,presetState:{background:{type:`solid`,color:`#F4F0E8`,gradient:{type:`linear`,colors:[`#F4F0E8`,`#DDD4C4`],angle:180},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:0,blur:0}},textStyle:{fontFamily:`Montserrat`,fontSize:54,fontWeight:`800`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#241B18`,letterSpacing:-1,lineHeight:1.2,shadowColor:`transparent`,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:22,fontWeight:`700`,color:`#8A6330`,letterSpacing:3,textAlign:`center`}},{id:`royal-word`,name:`Royal Word`,description:`Rich purple tones with elegant gold typography and a luxurious presentation.`,presetState:{background:{type:`gradient`,color:`#21112F`,gradient:{type:`radial`,colors:[`#5A3277`,`#160A20`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.12,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:43,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,gradient:{type:`linear`,colors:[`#FFF3B0`,`#D4AF37`],angle:90},color:`#D4AF37`,letterSpacing:0,lineHeight:1.4,shadowColor:`rgba(0,0,0,0.55)`,shadowBlur:10,shadowOffsetX:0,shadowOffsetY:4,glowColor:`#D4AF37`,glowBlur:8,glowIntensity:.25,outlineColor:`transparent`,outlineWidth:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:25,fontWeight:`700`,color:`#F7E7A9`,letterSpacing:4,textAlign:`center`}},{id:`text-glow`,name:`Text Glow`,description:`Bright scripture with a strong dark glow behind the letters for clear visibility on any background.`,presetState:{background:{type:`solid`,color:`#2A1515`,gradient:{type:`linear`,colors:[`#BC6565`,`#C3A9A9`],angle:180},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:0,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,letterSpacing:0,lineHeight:1.4,glowColor:`#000000`,glowBlur:14,glowIntensity:.9,shadowColor:`rgba(0, 0, 0, 0.85)`,shadowBlur:8,shadowOffsetX:0,shadowOffsetY:2,outlineColor:`rgba(0, 0, 0, 0.75)`,outlineWidth:1,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:24,fontWeight:`700`,fontStyle:`normal`,textAlign:`center`,color:`#FFFFFF`,letterSpacing:4,glowColor:`#000000`,glowBlur:10,glowIntensity:.85,shadowColor:`rgba(0, 0, 0, 0.8)`,shadowBlur:6,shadowOffsetX:0,shadowOffsetY:2,outlineColor:`rgba(0, 0, 0, 0.7)`,outlineWidth:1}}],Ce=class{static getTemplates(){return B}static applyTemplate(e,t){let n=B.find(t=>t.id===e);if(!n)return t;let r=JSON.parse(JSON.stringify(t));return n.presetState.background&&(r.background=JSON.parse(JSON.stringify(n.presetState.background))),n.presetState.width!==void 0&&(r.width=n.presetState.width),n.presetState.height!==void 0&&(r.height=n.presetState.height),n.presetState.padding!==void 0&&(r.padding=n.presetState.padding),n.presetState.preset!==void 0&&(r.preset=n.presetState.preset),r.elements=r.elements.map(e=>{if(e.type!==`text`)return e;let t=e;return t.isReference&&n.referenceStyle?{...t,...n.referenceStyle}:n.textStyle?{...t,...n.textStyle}:t}),r}},we={format:`png`,quality:.95,fileName:`bible-verse`},Te=class{static async exportDesign(e,t={}){let n={...we,...t},r=document.createElement(`canvas`);r.width=e.width,r.height=e.height,await new z(r).render(e,!1);let i=this.getMimeType(n.format),a=r.toDataURL(i,n.quality),o=`${n.fileName||`bible-verse`}.${n.format}`,s=document.createElement(`a`);s.download=o,s.href=a,document.body.appendChild(s),s.click(),document.body.removeChild(s)}static getMimeType(e){switch(e.toLowerCase()){case`jpeg`:case`jpg`:return`image/jpeg`;case`webp`:return`image/webp`;default:return`image/png`}}},V=`shepherd_bible_verse_image_editor`,Ee=class{state;events;history;renderer;canvasElement;selectionHandles=new R;shiftPressed=!1;activeHandle=null;isDragging=!1;isTransforming=!1;dragStartX=0;dragStartY=0;elementInitialX=0;elementInitialY=0;elementInitialWidth=0;elementInitialHeight=0;elementInitialRotation=0;elementInitialFontSize=0;operationHistoryStarted=!1;constructor(e){this.canvasElement=e,this.events=new ye,this.history=new be,this.renderer=new z(e),this.state=this.loadLocalState()||ve(),this.initPointerInteractions(),this.requestRender(),window.addEventListener(`keydown`,e=>{e.key===`Shift`&&(this.shiftPressed=!0)}),window.addEventListener(`keyup`,e=>{e.key===`Shift`&&(this.shiftPressed=!1)})}getState(){return this.state}getEvents(){return this.events}getHistory(){return this.history}updateState(e){this.history.push(this.state),e(this.state),this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender()}updateElement(e,t){this.updateState(n=>{let r=n.elements.findIndex(t=>t.id===e);r!==-1&&(n.elements[r]={...n.elements[r],...t})})}increaseTextSize(e,t=2){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);n&&this.updateTextFontSize(e,Math.min(n.fontSize+t,150))}decreaseTextSize(e,t=2){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);n&&this.updateTextFontSize(e,Math.max(n.fontSize-t,12))}updateTextFontSize(e,t){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);if(!n)return;let r=n.fontSize;if(r<=0)return;let i=t/r;this.updateElement(e,{fontSize:t,width:n.width*i,height:n.height*i})}updateBackground(e){this.updateState(t=>{t.background={...e}})}updateCanvasDimensions(e,t){this.updateState(n=>{let r=n.width,i=n.height;n.width=e,n.height=t,n.elements.forEach(n=>{let a=n.x+n.width/2,o=n.y+n.height/2,s=Math.abs(a-r/2)<2,c=Math.abs(o-i/2)<2;s&&(n.x=(e-n.width)/2),c&&(n.y=(t-n.height)/2)})})}addTextElement(e=`New Text`){let t=`elem_${Date.now()}`,n={id:t,type:`text`,text:e,fontFamily:`Inter`,fontSize:32,fontWeight:`400`,fontStyle:`normal`,textAlign:`center`,color:`#FAF7F2`,letterSpacing:0,lineHeight:1.3,shadowColor:`rgba(0,0,0,0.4)`,shadowBlur:4,shadowOffsetX:1,shadowOffsetY:2,outlineColor:`transparent`,outlineWidth:0,x:this.state.width/2-300,y:this.state.height/2-40,width:600,height:80,rotation:0,opacity:1};this.updateState(e=>{e.elements.push(n),e.selected_element_id=t}),this.events.emit(`element_selected`,{elementId:t})}deleteElement(e){this.updateState(t=>{t.elements=t.elements.filter(t=>t.id!==e),t.selected_element_id===e&&(t.selected_element_id=null)}),this.events.emit(`element_selected`,{elementId:null})}selectElement(e){this.state.selected_element_id=e,this.events.emit(`element_selected`,{elementId:e}),this.requestRender()}applyTemplate(e){this.history.push(this.state),this.state=Ce.applyTemplate(e,this.state),this.saveLocalState(),this.events.emit(`template_applied`,{templateId:e}),this.events.emit(`state_changed`,{state:this.state}),this.requestRender()}undo(){let e=this.history.undo(this.state);e&&(this.state=e,this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender())}redo(){let e=this.history.redo(this.state);e&&(this.state=e,this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender())}exportImage(e={}){return Te.exportDesign(this.state,e)}requestRender(){this.renderer.render(this.state,!0)}initPointerInteractions(){this.canvasElement.style.touchAction=`none`;let e=e=>{let t=this.canvasElement.getBoundingClientRect(),n=this.state.width/t.width,r=this.state.height/t.height;return{x:(e.clientX-t.left)*n,y:(e.clientY-t.top)*r}};this.canvasElement.addEventListener(`pointerdown`,t=>{let n=e(t),r=this.state.selected_element_id;if(r){let e=this.state.elements.find(e=>e.id===r);if(e){let r=this.selectionHandles.hitTest(e,n.x,n.y);if(r){if(r===`delete`){this.deleteElement(e.id);return}this.activeHandle=r,this.elementInitialFontSize=e.type===`text`?e.fontSize:0,this.renderer.fitWidth=!1,this.isTransforming=!0,this.dragStartX=n.x,this.dragStartY=n.y,this.elementInitialX=e.x,this.elementInitialY=e.y,this.elementInitialWidth=e.width,this.elementInitialHeight=e.height,this.elementInitialRotation=e.rotation,this.history.push(this.state),this.operationHistoryStarted=!0,this.canvasElement.setPointerCapture(t.pointerId);return}}}let i=[...this.state.elements].reverse().find(e=>this.hitTestElement(e,n.x,n.y));i?(this.selectElement(i.id),this.isDragging=!0,this.dragStartX=n.x,this.dragStartY=n.y,this.elementInitialX=i.x,this.elementInitialY=i.y,this.elementInitialWidth=i.width,this.elementInitialHeight=i.height,this.elementInitialRotation=i.rotation,this.history.push(this.state),this.operationHistoryStarted=!0,this.canvasElement.setPointerCapture(t.pointerId)):this.selectElement(null)}),this.canvasElement.addEventListener(`pointermove`,t=>{let n=e(t);if(this.isTransforming&&this.state.selected_element_id&&this.activeHandle){let e=this.state.elements.find(e=>e.id===this.state.selected_element_id);if(!e)return;this.activeHandle===`rotate`?this.rotateElement(e,n.x,n.y):this.resizeElement(e,n.x,n.y,this.activeHandle),this.requestRender();return}if(this.isDragging&&this.state.selected_element_id){let e=this.state.elements.find(e=>e.id===this.state.selected_element_id);if(!e)return;let t=n.x-this.dragStartX,r=n.y-this.dragStartY;e.x=this.elementInitialX+t,e.y=this.elementInitialY+r,this.requestRender();return}this.updateHoverCursor(n.x,n.y)});let t=e=>{let t=this.isDragging||this.isTransforming;if(this.isDragging=!1,this.isTransforming=!1,this.activeHandle=null,this.renderer.fitWidth=!0,this.requestRender(),t){try{this.canvasElement.releasePointerCapture(e.pointerId)}catch{}this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.operationHistoryStarted=!1}this.canvasElement.style.cursor=`default`};this.canvasElement.addEventListener(`pointerup`,t),this.canvasElement.addEventListener(`pointercancel`,t)}saveLocalState(){try{localStorage.setItem(V,JSON.stringify(this.state))}catch(e){console.warn(`Unable to save Verse Image State to localStorage:`,e)}}loadLocalState(){try{let e=localStorage.getItem(V);if(!e)return null;let t=JSON.parse(e);if(t&&typeof t.width==`number`&&Array.isArray(t.elements))return t}catch(e){console.warn(`Invalid local state found in localStorage, clearing:`,e),localStorage.removeItem(V)}return null}hitTestElement(e,t,n){let r=e.x+e.width/2,i=e.y+e.height/2,a=-(e.rotation*Math.PI)/180,o=t-r,s=n-i,c=o*Math.cos(a)-s*Math.sin(a)+r,l=o*Math.sin(a)+s*Math.cos(a)+i;return c>=e.x&&c<=e.x+e.width&&l>=e.y&&l<=e.y+e.height}resizeElement(e,t,n,r){let i=this.elementInitialX+this.elementInitialWidth/2,a=this.elementInitialY+this.elementInitialHeight/2,o=-(this.elementInitialRotation*Math.PI)/180,s=t-i,c=n-a,l=s*Math.cos(o)-c*Math.sin(o)+i,u=s*Math.sin(o)+c*Math.cos(o)+a,d=this.elementInitialX,f=this.elementInitialX+this.elementInitialWidth,p=this.elementInitialY,m=this.elementInitialY+this.elementInitialHeight;if((r===`left`||r===`top-left`||r===`bottom-left`)&&(d=Math.min(l,f-40)),(r===`right`||r===`top-right`||r===`bottom-right`)&&(f=Math.max(l,d+40)),(r===`top`||r===`top-left`||r===`top-right`)&&(p=Math.min(u,m-30)),(r===`bottom`||r===`bottom-left`||r===`bottom-right`)&&(m=Math.max(u,p+30)),e.x=d,e.y=p,e.width=Math.max(40,f-d),e.height=Math.max(30,m-p),e.type===`text`&&this.elementInitialFontSize>0){let t=r.includes(`-`),n=(f-d)/this.elementInitialWidth,i=(m-p)/this.elementInitialHeight,a=t?Math.max(n,i):r===`left`||r===`right`?n:i,o=Math.min(400,Math.max(12,this.elementInitialFontSize*a));if(e.fontSize=o,t){let t=o/this.elementInitialFontSize,n=this.elementInitialWidth*t,i=this.elementInitialHeight*t,a=this.elementInitialX+this.elementInitialWidth,s=this.elementInitialY+this.elementInitialHeight;e.x=r.includes(`left`)?a-n:this.elementInitialX,e.y=r.includes(`top`)?s-i:this.elementInitialY,e.width=n,e.height=i,e.rotation=this.elementInitialRotation;return}}e.rotation=this.elementInitialRotation}rotateElement(e,t,n){let r=this.elementInitialX+this.elementInitialWidth/2,i=this.elementInitialY+this.elementInitialHeight/2,a=Math.atan2(n-i,t-r)*180/Math.PI+90;this.isShiftPressed()&&(a=Math.round(a/15)*15),e.rotation=a}updateHoverCursor(e,t){let n=this.state.selected_element_id;if(!n){this.canvasElement.style.cursor=`default`;return}let r=this.state.elements.find(e=>e.id===n);if(!r){this.canvasElement.style.cursor=`default`;return}let i=this.selectionHandles.hitTest(r,e,t);if(i){this.canvasElement.style.cursor=this.selectionHandles.getCursor(i);return}if(this.hitTestElement(r,e,t)){this.canvasElement.style.cursor=`move`;return}this.canvasElement.style.cursor=`default`}isShiftPressed(){return!1}},H=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel text-panel`,this.render(),this.editor.getEvents().on(`element_selected`,()=>this.updateControls()),this.editor.getEvents().on(`state_changed`,()=>this.updateControls())}getElement(){return this.container}render(){this.container.innerHTML=`
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
    `,this.bindEvents(),this.updateControls()}bindEvents(){let e=this.container.querySelector(`#input-verse-text`),t=this.container.querySelector(`#input-verse-ref`),n=this.container.querySelector(`#input-font-size`),r=this.container.querySelector(`#input-line-height`),i=this.container.querySelector(`#input-letter-spacing`),a=this.container.querySelector(`#btn-font-size-minus`),o=this.container.querySelector(`#btn-font-size-plus`);e?.addEventListener(`input`,()=>{let t=this.getSelectedTextElement();t&&this.editor.updateElement(t.id,{text:e.value})}),t?.addEventListener(`input`,()=>{let e=this.editor.getState().elements.find(e=>e.isReference);e&&this.editor.updateElement(e.id,{text:t.value})}),n?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=parseFloat(n.value);if(!Number.isFinite(t))return;let r=Math.min(Math.max(t,12),150);this.editor.updateTextFontSize(e.id,r)}),a?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=this.getFontSizeStep();this.editor.decreaseTextSize(e.id,t)}),o?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=this.getFontSizeStep();this.editor.increaseTextSize(e.id,t)}),r?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{lineHeight:parseFloat(r.value)||1.3})}),i?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{letterSpacing:parseInt(i.value,10)||0})}),this.container.querySelector(`#btn-align-left`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`left`})}),this.container.querySelector(`#btn-align-center`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`center`})}),this.container.querySelector(`#btn-align-right`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`right`})}),this.container.querySelector(`#btn-toggle-bold`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(e){let t=e.fontWeight===`700`||e.fontWeight===`bold`;this.editor.updateElement(e.id,{fontWeight:t?`400`:`700`})}}),this.container.querySelector(`#btn-toggle-italic`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(e){let t=e.fontStyle===`italic`;this.editor.updateElement(e.id,{fontStyle:t?`normal`:`italic`})}}),this.container.querySelector(`#btn-add-text`)?.addEventListener(`click`,()=>{this.editor.addTextElement(`New Scripture Line`)})}getFontSizeStep(){let e=this.editor.getState().width;return e>=3e3?8:e>=2e3?4:2}getSelectedTextElement(){let e=this.editor.getState();if(!e.selected_element_id)return null;let t=e.elements.find(t=>t.id===e.selected_element_id);return t&&t.type===`text`?t:null}updateControls(){let e=this.getSelectedTextElement(),t=this.container.querySelector(`#input-verse-text`),n=this.container.querySelector(`#input-verse-ref`),r=this.container.querySelector(`#input-font-size`),i=this.container.querySelector(`#input-line-height`),a=this.container.querySelector(`#input-letter-spacing`),o=this.container.querySelector(`#btn-font-size-minus`),s=this.container.querySelector(`#btn-font-size-plus`),c=this.editor.getState().elements.find(e=>e.isReference);c&&n&&(n.value=c.text),e?(t&&(t.value=e.text),r&&(r.value=e.fontSize.toString()),i&&(i.value=e.lineHeight.toString()),a&&(a.value=e.letterSpacing.toString()),o&&(o.disabled=e.fontSize<=12),s&&(s.disabled=e.fontSize>=150)):(r&&(r.value=``),i&&(i.value=``),a&&(a.value=``),o&&(o.disabled=!0),s&&(s.disabled=!0))}},U=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel font-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Typography Style</label>
        <div class="font-list" id="font-list-container"></div>
      </div>
    `;let e=this.container.querySelector(`#font-list-container`);I.forEach(t=>{let n=document.createElement(`button`);n.className=`font-item-card`,n.innerHTML=`
        <span class="font-name" style="font-family: '${t.family}', serif">${t.family}</span>
        <span class="font-category">${t.category}</span>
      `,n.addEventListener(`click`,async()=>{await L.loadFont(t.family);let e=this.editor.getState();e.selected_element_id&&this.editor.updateElement(e.selected_element_id,{fontFamily:t.family})}),e.appendChild(n)})}},W=class{element;editor;constructor(e){this.editor=e,this.element=document.createElement(`div`),this.element.className=`panel-content color-panel`,this.render(),this.editor.getEvents().on(`element_selected`,()=>{this.updateControls()}),this.editor.getEvents().on(`state_changed`,()=>{this.updateControls()})}getElement(){return this.element}render(){let e=[`#ffffff`,`#000000`,`#f43f5e`,`#3b82f6`,`#10b981`,`#f59e0b`,`#8b5cf6`];this.element.innerHTML=`
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
    `,this.attachEvents(),this.updateControls()}attachEvents(){let e=this.element.querySelector(`#text-color-input`),t=this.element.querySelectorAll(`.color-swatch`);e.addEventListener(`input`,()=>{this.updateColor(e.value)}),t.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.color;n&&(e.value=n,this.updateColor(n))})})}getSelectedTextElement(){let e=this.editor.getState(),t=e.selected_element_id;if(!t)return null;let n=e.elements.find(e=>e.id===t);return!n||n.type!==`text`?null:n}updateColor(e){let t=this.editor.getState(),n=t.selected_element_id;if(!n){console.warn(`No selected element`);return}let r=t.elements.find(e=>e.id===n);if(!r||r.type!==`text`){console.warn(`Selected element is not text`,r);return}console.log(`Updating text color:`,r.id,e),this.editor.updateElement(r.id,{color:e,gradient:void 0}),console.log(`Updated element color:`,this.editor.getState().elements.find(e=>e.id===n))}updateControls(){let e=this.element.querySelector(`#text-color-input`),t=this.element.querySelector(`#color-hex-display`),n=this.getSelectedTextElement()?.color||`#332624`;/^#[0-9a-f]{6}$/i.test(n)?(e.value=n,t.textContent=n):(e.value=`#332624`,t.textContent=n)}},G=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel background-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#bg-grad-1`),t=this.container.querySelector(`#bg-grad-2`),n=this.container.querySelector(`#bg-file-input`),r=this.container.querySelector(`#bg-blur-slider`),i=this.container.querySelector(`#bg-overlay-color`),a=this.container.querySelector(`#bg-overlay-opacity`),o=this.container.querySelector(`#bg-gradient-controls`),s=this.container.querySelector(`#bg-image-controls`);this.container.querySelector(`#bg-mode-gradient`)?.addEventListener(`click`,()=>{o.style.display=`block`,s.style.display=`none`;let e=this.editor.getState().background;e.type=`gradient`,this.editor.updateBackground(e)}),this.container.querySelector(`#bg-mode-solid`)?.addEventListener(`click`,()=>{o.style.display=`none`,s.style.display=`none`;let e=this.editor.getState().background;e.type=`solid`,this.editor.updateBackground(e)}),this.container.querySelector(`#bg-mode-image`)?.addEventListener(`click`,()=>{o.style.display=`none`,s.style.display=`block`});let c=()=>{let n=this.editor.getState().background;n.type=`gradient`,n.gradient.colors=[e.value,t.value],this.editor.updateBackground(n)};e?.addEventListener(`input`,c),t?.addEventListener(`input`,c),n?.addEventListener(`change`,e=>{let t=e.target.files?.[0];if(t){let e=URL.createObjectURL(t),n=this.editor.getState().background;n.type=`image`,n.imageUrl=e,this.editor.updateBackground(n)}}),r?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.blur=parseFloat(r.value)||0,this.editor.updateBackground(e)}),i?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.overlayColor=i.value,this.editor.updateBackground(e)}),a?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.overlayOpacity=parseFloat(a.value)||0,this.editor.updateBackground(e)})}},K=class{editor;container;presets={square:{label:`Square`,description:`1080 × 1080`,width:1080,height:1080},portrait:{label:`Portrait`,description:`1080 × 1350`,width:1080,height:1350},story:{label:`Story`,description:`1080 × 1920`,width:1080,height:1920},landscape:{label:`Landscape`,description:`1200 × 630`,width:1200,height:630},phone:{label:`Phone`,description:`1170 × 2532`,width:1170,height:2532},"phone-landscape":{label:`Phone Landscape`,description:`2532 × 1170`,width:2532,height:1170},"tablet-portrait":{label:`Tablet Portrait`,description:`1536 × 2048`,width:1536,height:2048},"tablet-landscape":{label:`Tablet Landscape`,description:`2048 × 1536`,width:2048,height:1536},"desktop-hd":{label:`Desktop HD`,description:`1920 × 1080`,width:1920,height:1080},"desktop-qhd":{label:`Desktop QHD`,description:`2560 × 1440`,width:2560,height:1440},"desktop-4k":{label:`Desktop 4K`,description:`3840 × 2160`,width:3840,height:2160},presentation:{label:`Presentation`,description:`1920 × 1080`,width:1920,height:1080},"a4-portrait":{label:`A4 Portrait`,description:`2480 × 3508`,width:2480,height:3508},"a4-landscape":{label:`A4 Landscape`,description:`3508 × 2480`,width:3508,height:2480},"three-four":{label:`3 : 4`,description:`1200 × 1600`,width:1200,height:1600},"four-three":{label:`4 : 3`,description:`1600 × 1200`,width:1600,height:1200},"two-three":{label:`2 : 3`,description:`1200 × 1800`,width:1200,height:1800},"three-two":{label:`3 : 2`,description:`1800 × 1200`,width:1800,height:1200},"five-four":{label:`5 : 4`,description:`1500 × 1200`,width:1500,height:1200},"four-five":{label:`4 : 5`,description:`1200 × 1500`,width:1200,height:1500},ultrawide:{label:`Ultrawide`,description:`2560 × 1080`,width:2560,height:1080},cinema:{label:`Cinema`,description:`2560 × 1080`,width:2560,height:1080}};constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel layout-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#canvas-width-input`),t=this.container.querySelector(`#canvas-height-input`);this.container.querySelectorAll(`[data-preset]`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-preset`);if(!r)return;let i=this.presets[r];i&&(e.value=i.width.toString(),t.value=i.height.toString(),this.editor.updateCanvasDimensions(i.width,i.height),this.container.querySelectorAll(`[data-preset]`).forEach(e=>{e.classList.remove(`active`)}),n.classList.add(`active`))})});let n=()=>{let n=parseInt(e.value,10),r=parseInt(t.value,10);!Number.isFinite(n)||!Number.isFinite(r)||n<=0||r<=0||(this.editor.updateCanvasDimensions(n,r),this.container.querySelectorAll(`[data-preset]`).forEach(e=>{e.classList.remove(`active`)}))};e.addEventListener(`change`,n),t.addEventListener(`change`,n)}},q=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel effects-panel`,this.render(),this.editor.getEvents().on(`element_selected`,()=>{this.syncFromSelectedElement()}),this.editor.getEvents().on(`state_changed`,()=>{this.syncFromSelectedElement()}),this.syncFromSelectedElement()}getElement(){return this.container}render(){this.container.innerHTML=`
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
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#shadow-color-picker`),t=this.container.querySelector(`#shadow-blur-range`),n=this.container.querySelector(`#glow-color-picker`),r=this.container.querySelector(`#glow-blur-range`),i=this.container.querySelector(`#glow-intensity-range`),a=this.container.querySelector(`#outline-color-picker`),o=this.container.querySelector(`#outline-width-range`),s=this.container.querySelector(`#rotation-range`),c=this.container.querySelector(`#opacity-range`),l=()=>this.editor.getState().selected_element_id;e?.addEventListener(`input`,()=>{let t=l();t&&this.editor.updateElement(t,{shadowColor:e.value})}),t?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{shadowBlur:parseInt(t.value,10)||0})}),n?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowColor:n.value})}),r?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowBlur:parseInt(r.value,10)||0})}),i?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowIntensity:parseFloat(i.value)||0})}),a?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{outlineColor:a.value})}),o?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{outlineWidth:parseInt(o.value,10)||0})}),s?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{rotation:parseInt(s.value,10)||0})}),c?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{opacity:parseFloat(c.value)||1})})}syncFromSelectedElement(){let e=this.editor.getState(),t=e.selected_element_id;if(!t)return;let n=e.elements.find(e=>e.id===t);if(n){if(n.type===`text`){let e=n;this.setInputValue(`#shadow-color-picker`,this.toHexColor(e.shadowColor,`#000000`)),this.setInputValue(`#shadow-blur-range`,String(e.shadowBlur??0)),this.setInputValue(`#glow-color-picker`,this.toHexColor(e.glowColor,`#000000`)),this.setInputValue(`#glow-blur-range`,String(e.glowBlur??0)),this.setInputValue(`#glow-intensity-range`,String(e.glowIntensity??0)),this.setInputValue(`#outline-color-picker`,this.toHexColor(e.outlineColor,`#000000`)),this.setInputValue(`#outline-width-range`,String(e.outlineWidth??0))}this.setInputValue(`#rotation-range`,String(n.rotation??0)),this.setInputValue(`#opacity-range`,String(n.opacity??1))}}setInputValue(e,t){let n=this.container.querySelector(e);n&&(n.value=t)}toHexColor(e,t){if(!e)return t;if(/^#[0-9a-f]{6}$/i.test(e))return e;if(/^#[0-9a-f]{3}$/i.test(e)){let t=e.substring(1);return`#${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`}let n=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);return n?`#`+[Number(n[1]),Number(n[2]),Number(n[3])].map(e=>e.toString(16).padStart(2,`0`)).join(``):t}},De=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel template-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Built-in Themes</label>
        <div class="template-grid" id="template-cards-grid"></div>
      </div>
    `;let e=this.container.querySelector(`#template-cards-grid`);B.forEach(t=>{let n=document.createElement(`div`);n.className=`template-card`,n.innerHTML=`
        <div class="template-title">${t.name}</div>
        <div class="template-desc">${t.description}</div>
      `,n.addEventListener(`click`,()=>{this.editor.applyTemplate(t.id)}),e.appendChild(n)})}},Oe=class{container;editor;constructor(){this.container=document.createElement(`div`),this.container.className=`verse-image-editor-page`}render(){return this.container.innerHTML=`
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
    `,setTimeout(()=>this.initEditor(),0),this.container}initEditor(){let e=this.container.querySelector(`#verse-editor-canvas`);if(!e)return;this.editor=new Ee(e);let t={text:new H(this.editor).getElement(),fonts:new U(this.editor).getElement(),color:new W(this.editor).getElement(),bg:new G(this.editor).getElement(),layout:new K(this.editor).getElement(),effects:new q(this.editor).getElement(),templates:new De(this.editor).getElement()},n=this.container.querySelector(`#active-panel-slot`);n.appendChild(t.text);let r=this.container.querySelectorAll(`.tab-btn`);r.forEach(e=>{e.addEventListener(`click`,()=>{r.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let i=e.getAttribute(`data-tab`)||`text`;n.innerHTML=``,t[i]&&n.appendChild(t[i])})});let i=this.container.querySelector(`#mobile-editor-toolbar`),a=this.container.querySelector(`#mobile-editor-sheet`),o=this.container.querySelector(`#mobile-panel-slot`),s=this.container.querySelector(`#mobile-sheet-title`),c=this.container.querySelector(`#mobile-sheet-close`),l={text:`Text`,fonts:`Fonts`,color:`Color`,bg:`Background`,layout:`Layout`,effects:`Effects`,templates:`Templates`},u={text:new H(this.editor).getElement(),fonts:new U(this.editor).getElement(),color:new W(this.editor).getElement(),bg:new G(this.editor).getElement(),layout:new K(this.editor).getElement(),effects:new q(this.editor).getElement(),templates:new De(this.editor).getElement()},d=e=>{let t=u[e];t&&(s.textContent=l[e]||e,o.innerHTML=``,o.appendChild(t),a.classList.add(`open`),this.container.classList.add(`sheet-open`))},f=()=>{a.classList.remove(`open`)},p=i.querySelectorAll(`.mobile-tool-btn`);p.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-tab`)||`text`,n=e.classList.contains(`active`)&&a.classList.contains(`open`);if(p.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),n){f();return}d(t)})}),c?.addEventListener(`click`,f),d(`text`);let m=this.container.querySelector(`#btn-undo`),h=this.container.querySelector(`#btn-redo`),g=this.container.querySelector(`#btn-export-png`);m?.addEventListener(`click`,()=>this.editor.undo()),h?.addEventListener(`click`,()=>this.editor.redo()),g?.addEventListener(`click`,()=>this.editor.exportImage({format:`png`})),this.editor.getEvents().on(`history_changed`,({canUndo:e,canRedo:t})=>{m&&(m.disabled=!e),h&&(h.disabled=!t)})}},ke=[{order:1,name:`Genesis`,osis:`Gen`,testament:`OT`},{order:2,name:`Exodus`,osis:`Exod`,testament:`OT`},{order:3,name:`Leviticus`,osis:`Lev`,testament:`OT`},{order:4,name:`Numbers`,osis:`Num`,testament:`OT`},{order:5,name:`Deuteronomy`,osis:`Deut`,testament:`OT`},{order:6,name:`Joshua`,osis:`Josh`,testament:`OT`},{order:7,name:`Judges`,osis:`Judg`,testament:`OT`},{order:8,name:`Ruth`,osis:`Ruth`,testament:`OT`},{order:9,name:`1 Samuel`,osis:`1Sam`,testament:`OT`},{order:10,name:`2 Samuel`,osis:`2Sam`,testament:`OT`},{order:11,name:`1 Kings`,osis:`1Kgs`,testament:`OT`},{order:12,name:`2 Kings`,osis:`2Kgs`,testament:`OT`},{order:13,name:`1 Chronicles`,osis:`1Chr`,testament:`OT`},{order:14,name:`2 Chronicles`,osis:`2Chr`,testament:`OT`},{order:15,name:`Ezra`,osis:`Ezra`,testament:`OT`},{order:16,name:`Nehemiah`,osis:`Neh`,testament:`OT`},{order:17,name:`Esther`,osis:`Esth`,testament:`OT`},{order:18,name:`Job`,osis:`Job`,testament:`OT`},{order:19,name:`Psalms`,osis:`Ps`,testament:`OT`},{order:20,name:`Proverbs`,osis:`Prov`,testament:`OT`},{order:21,name:`Ecclesiastes`,osis:`Eccl`,testament:`OT`},{order:22,name:`Song of Solomon`,osis:`Song`,testament:`OT`},{order:23,name:`Isaiah`,osis:`Isa`,testament:`OT`},{order:24,name:`Jeremiah`,osis:`Jer`,testament:`OT`},{order:25,name:`Lamentations`,osis:`Lam`,testament:`OT`},{order:26,name:`Ezekiel`,osis:`Ezek`,testament:`OT`},{order:27,name:`Daniel`,osis:`Dan`,testament:`OT`},{order:28,name:`Hosea`,osis:`Hos`,testament:`OT`},{order:29,name:`Joel`,osis:`Joel`,testament:`OT`},{order:30,name:`Amos`,osis:`Amos`,testament:`OT`},{order:31,name:`Obadiah`,osis:`Obad`,testament:`OT`},{order:32,name:`Jonah`,osis:`Jonah`,testament:`OT`},{order:33,name:`Micah`,osis:`Mic`,testament:`OT`},{order:34,name:`Nahum`,osis:`Nah`,testament:`OT`},{order:35,name:`Habakkuk`,osis:`Hab`,testament:`OT`},{order:36,name:`Zephaniah`,osis:`Zeph`,testament:`OT`},{order:37,name:`Haggai`,osis:`Hag`,testament:`OT`},{order:38,name:`Zechariah`,osis:`Zech`,testament:`OT`},{order:39,name:`Malachi`,osis:`Mal`,testament:`OT`},{order:40,name:`Matthew`,osis:`Matt`,testament:`NT`},{order:41,name:`Mark`,osis:`Mark`,testament:`NT`},{order:42,name:`Luke`,osis:`Luke`,testament:`NT`},{order:43,name:`John`,osis:`John`,testament:`NT`},{order:44,name:`Acts`,osis:`Acts`,testament:`NT`},{order:45,name:`Romans`,osis:`Rom`,testament:`NT`},{order:46,name:`1 Corinthians`,osis:`1Cor`,testament:`NT`},{order:47,name:`2 Corinthians`,osis:`2Cor`,testament:`NT`},{order:48,name:`Galatians`,osis:`Gal`,testament:`NT`},{order:49,name:`Ephesians`,osis:`Eph`,testament:`NT`},{order:50,name:`Philippians`,osis:`Phil`,testament:`NT`},{order:51,name:`Colossians`,osis:`Col`,testament:`NT`},{order:52,name:`1 Thessalonians`,osis:`1Thess`,testament:`NT`},{order:53,name:`2 Thessalonians`,osis:`2Thess`,testament:`NT`},{order:54,name:`1 Timothy`,osis:`1Tim`,testament:`NT`},{order:55,name:`2 Timothy`,osis:`2Tim`,testament:`NT`},{order:56,name:`Titus`,osis:`Titus`,testament:`NT`},{order:57,name:`Philemon`,osis:`Phlm`,testament:`NT`},{order:58,name:`Hebrews`,osis:`Heb`,testament:`NT`},{order:59,name:`James`,osis:`Jas`,testament:`NT`},{order:60,name:`1 Peter`,osis:`1Pet`,testament:`NT`},{order:61,name:`2 Peter`,osis:`2Pet`,testament:`NT`},{order:62,name:`1 John`,osis:`1John`,testament:`NT`},{order:63,name:`2 John`,osis:`2John`,testament:`NT`},{order:64,name:`3 John`,osis:`3John`,testament:`NT`},{order:65,name:`Jude`,osis:`Jude`,testament:`NT`},{order:66,name:`Revelation`,osis:`Rev`,testament:`NT`}],Ae=class{container;searchTerm=``;testamentFilter=`All`;tbody;searchInput;filterSelect;exportBtn;constructor(){this.container=document.createElement(`div`),this.container.className=`osis-page`,this.buildStaticDOM(),this.cacheDOM(),this.attachEventListeners(),this.renderTable()}buildStaticDOM(){this.container.innerHTML=`
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
    `}cacheDOM(){this.searchInput=this.container.querySelector(`#osis-search-input`),this.filterSelect=this.container.querySelector(`#osis-testament-filter`),this.exportBtn=this.container.querySelector(`#osis-export-btn`),this.tbody=this.container.querySelector(`#osis-dynamic-tbody`)}attachEventListeners(){this.searchInput.addEventListener(`input`,e=>{this.searchTerm=e.target.value.toLowerCase(),this.renderTable()}),this.filterSelect.addEventListener(`change`,e=>{this.testamentFilter=e.target.value,this.renderTable()}),this.exportBtn.addEventListener(`click`,()=>{this.exportJSON()})}renderTable(){this.tbody.innerHTML=``;let e=ke.filter(e=>{let t=e.name.toLowerCase().includes(this.searchTerm)||e.osis.toLowerCase().includes(this.searchTerm),n=this.testamentFilter===`All`||e.testament===this.testamentFilter;return t&&n});if(e.length===0){let e=document.createElement(`tr`),t=document.createElement(`td`);t.colSpan=5,t.textContent=`No books found matching your criteria.`,t.style.textAlign=`center`,e.appendChild(t),this.tbody.appendChild(e);return}e.forEach(e=>{let t=document.createElement(`tr`),n=document.createElement(`td`);n.textContent=e.order.toString(),t.appendChild(n);let r=document.createElement(`td`);r.textContent=e.name,t.appendChild(r);let i=document.createElement(`td`);i.className=`osis-id-text`,i.textContent=e.osis,t.appendChild(i);let a=document.createElement(`td`),o=document.createElement(`span`);o.className=e.testament===`OT`?`tag-ot`:`tag-nt`,o.textContent=e.testament===`OT`?`Old Testament`:`New Testament`,a.appendChild(o),t.appendChild(a);let s=document.createElement(`td`),c=document.createElement(`button`);c.className=`osis-copy-btn`,c.textContent=`Copy`,c.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(e.osis),c.textContent=`Copied!`,c.classList.add(`copied`),setTimeout(()=>{c.textContent=`Copy`,c.classList.remove(`copied`)},2e3)}catch(e){console.error(`Failed to copy`,e),c.textContent=`Error`}}),s.appendChild(c),t.appendChild(s),this.tbody.appendChild(t)})}exportJSON(){let e=JSON.stringify(ke,null,2),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`osis-bible-book-identifiers.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}render(){return this.container}},J={phQrPath:`https://raw.githubusercontent.com/shepherdbible/shepherdbible.github.io/main/assets/images/support/phqr.jpg`,phUrl:``,paypalQrPath:`https://raw.githubusercontent.com/shepherdbible/shepherdbible.github.io/main/assets/images/support/paypal-qr.jpg`,paypalUrl:`https://www.paypal.me/robelinghog`,buyMeACoffeeQrPath:`https://raw.githubusercontent.com/shepherdbible/shepherdbible.github.io/main/assets/images/support/buymeacoffee-qr.jpg`,buyMeACoffeeUrl:`https://buymeacoffee.com/nextsupportlab`};function je(e){try{return new URL(e).protocol===`https:`&&e.trim().length>0}catch{return!1}}function Me(e,t){return je(e)?`
    <a
      href="${e}"
      target="_blank"
      rel="noopener noreferrer"
      class="payment-direct-link"
    >
      ${t}
    </a>
  `:`<p class="text-muted text-small">Payment link coming soon.</p>`}function Ne(e,t){return`
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
  `}function Y(e){return`
    <div
      id="${e.id}"
      class="card payment-card text-center"
    >
      <h3>${e.title}</h3>
      <p class="text-muted text-small">
        ${e.description}
      </p>

      ${Ne(e.qrPath,e.qrAlt)}

      <p class="text-small qr-instruction">
        Scan the QR code with your phone camera.
      </p>

      <div class="payment-link-wrapper">
        ${Me(e.url,e.linkLabel)}
      </div>
    </div>
  `}async function Pe(){try{let e=await fetch(`https://ipapi.co/json/`,{signal:AbortSignal.timeout(4e3)});return e.ok?(await e.json()).country_code?.toUpperCase()??null:null}catch{return null}}var Fe=class{render(){return`
      <div class="support-page container" data-country="unknown">

        <section class="hero-section">
          <h1>Support Shepherd Bible</h1>
          <p class="text-muted hero-subtitle">
            Help us continue building free Bible-reading tools
            and a welcoming community.
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
            Choose the payment option that works best for you.
          </p>

          <div class="grid payments-grid">
            ${Y({id:`ph-card`,title:`GCash`,description:`Support locally using GCash.`,qrPath:J.phQrPath,qrAlt:`GCash payment QR code`,url:J.phUrl,linkLabel:`Open GCash payment link`})}

            ${Y({id:`paypal-card`,title:`PayPal`,description:`Support Shepherd Bible internationally.`,qrPath:J.paypalQrPath,qrAlt:`PayPal QR code`,url:J.paypalUrl,linkLabel:`Open PayPal`})}

            ${Y({id:`bmc-card`,title:`Buy Me a Coffee`,description:`Contribute through our creator page.`,qrPath:J.buyMeACoffeeQrPath,qrAlt:`Buy Me a Coffee QR code`,url:J.buyMeACoffeeUrl,linkLabel:`Open Buy Me a Coffee`})}
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
    `}mount(){let e=document.querySelector(`.support-page`),t=document.getElementById(`support-payment-recommendation`);if(!e)return;let n=document.getElementById(`ph-card`),r=document.getElementById(`paypal-card`),i=document.getElementById(`bmc-card`);Pe().then(a=>{if(!a){e.dataset.country=`unknown`,t&&(t.textContent=`Choose the payment option that works best for you.`);return}e.dataset.country=a,a===`PH`?(n&&(n.hidden=!1),n?.classList.add(`payment-preferred`),t&&(t.textContent=`GCash is available.`)):(n&&(n.hidden=!0),r?.classList.add(`payment-preferred`),i?.classList.add(`payment-preferred`),t&&(t.textContent=`Choose PayPal or Buy Me a Coffee to support Shepherd Bible.`))})}},Ie=JSON.parse(`[{"id":"kjv-bible-amazon","title":"KJV Holy Bible: Personal Size Giant Print with 43,000 Cross References, Black Bonded Leather, Red Letter, Comfort Print: King James Version","version":"KJV","description":"A reference Bible for everyday use containing giant print type in an easy-to-carry format. This edition is published in large KJV Comfort Print type, which was designed exclusively for Thomas Nelson to be the most readable at any size. The literary beauty of the King James Version with the readability of Thomas Nelson's custom KJV font, plus essential study resources, words of Christ in red, and an easy-to-read type size, all in a package that’s convenient to take anywhere. That’s the KJV Personal Size Giant Print Reference Bible. The giant print format and beautifully designed layout of this edition will add to your comfort as you dig deep into God’s Word. Additional features include an attractive end-of-page reference system, book introductions, a concordance, and full-color maps.","format":"Hardcover","images":["https://m.media-amazon.com/images/I/71HMcQa2erL._SY466_.jpg","https://m.media-amazon.com/images/I/61asmCht3AL._SL1200_.jpg","https://m.media-amazon.com/images/I/81PFudpN5xL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":23,"retailer":"Thomas Nelson (Amazon) ","productUrl":"https://link.amazon/B0iBoIjvk"}]},{"id":"kjv-bible-large-print-amazon","title":"KJV, Pew Bible, Large Print, Hardcover, Black, Red Letter, Comfort Print: Holy Bible, King James Version","version":"KJV","description":"The classic King James Version, one of the most influential and beautiful works of art in the English language, continues to be the standard translation for numerous churches and millions of Christians. This bestselling Bible translation has helped inspire, encourage, and strengthen people from all walks of life.\\n\\nInvite your eyes to linger and engage God’s Word with new, easy-to-read Comfort Print® KJV Bibles from Thomas Nelson. Blending modern technology with old-world craftsmanship, Comfort Print® KJV Bibles are designed with exclusive fonts, reflecting the beautiful and timeless character of the King James translation, to enhance your scripture reading experience.\\n\\nFeatures:\\n• Words of Christ in red help you quickly identify Jesus’ teachings and statements\\n• Miracles and parables of Jesus call out important events during Jesus’ earthly ministry\\n• Easy-to-read 12.5-point KJV Comfort Print","format":"Hardcover","images":["https://m.media-amazon.com/images/I/71gYH6YWY+L._SL1500_.jpg","https://m.media-amazon.com/images/I/81CR9XG0s9L._SL1500_.jpg","https://m.media-amazon.com/images/I/A1W2JNtC2qL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":10.7,"retailer":"Thomas Nelson (Amazon) ","productUrl":"https://link.amazon/B0fOEo7zt"}]},{"id":"esv-study-bible","title":"ESV Study Bible","version":"ESV","description":"The ESV Study Bible was designed to help you understand the Bible in a deeper way. Created by a diverse team of 95 leading Bible scholars and teachers―from 9 countries, nearly 20 denominations, and 50 seminaries, colleges, and universities―the ESV Study Bible features a wide array of study tools, including extensive study notes, 200 full-color maps, 40 full-color illustrations, charts, timelines, articles, and introductions, making it a valuable resource for serious readers, students, and teachers of God’s Word.","format":"Leather-bound","images":["https://m.media-amazon.com/images/I/51ljyhBsGcL._SL1500_.jpg","https://m.media-amazon.com/images/I/81sgs33IPxL._SL1500_.jpg","https://m.media-amazon.com/images/I/81odmehclbL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":24,"retailer":"ESV Bibles","productUrl":"https://link.amazon/B0gWsF5iv"}]},{"id":"niv-study-bible","title":"NIV Study Bible, Fully Revised Edition (Study Deeply. Believe Wholeheartedly.), Hardcover, Red Letter, Comfort Print","version":"NIV","description":"This stunning, full-color study Bible answers your pressing questions with just the right amount of information, placed in just the right location.\\n\\nWith a decades-long legacy of helping readers understand the Bible's meaning, the NIV Study Bible reflects the mission of the New International Version (NIV): to provide an accurate, readable, and clear guide to Scripture. Designed specifically to complement the NIV translation, its editorial team brings the same accuracy and clarity to every study note.\\n\\nFeatures:\\n\\n• Complete text of the accurate, readable, and clear New International Version (NIV)\\n• 21,000+ study notes, with icons that make important information easy to identify\\n• Extensive study resources, including 125+ topical articles, 16 pages of full-color maps, a comprehensive NIV concordance with nearly 4,800 entries, and a subject note index\\n• Book introductions and outlines for all 66 books, plus six section introductions providing valuable background information\\n• In-text visual aids, including maps, charts, diagrams, and illustrations that clarify biblical events and narratives\\n• Words of Jesus printed in red\\n• Exclusive Zondervan NIV Comfort Print® typeface\\n• Print size: 9-point\\n\\nNow fully revised and updated, this trusted study Bible offers an even richer learning experience. A committee of leading biblical scholars, including current and former NIV translators, has reviewed every note, article, chart, and essay to make the Bible's meaning clearer. Thousands of newly written or revised notes and articles, together with hundreds of full-color maps, charts, photographs, and illustrations, provide an extensive collection of study resources designed to deepen your understanding of Scripture and its application to daily life.","format":"Leather-bound","images":["https://m.media-amazon.com/images/I/71GKX8FKjHL._SL1500_.jpg","https://m.media-amazon.com/images/I/71yUztmiRIL._SL1200_.jpg","https://m.media-amazon.com/images/I/71EthwaC-sL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":26,"retailer":"Kenneth L. Barker","productUrl":"https://link.amazon/B0eSQ28f1"}]},{"id":"kjv-diglot-hardcover","title":"KJV 1611 BIBLE DIGLOT ENGLISH-TAGALOG ANG BIBLIA","version":"KJV 1611 BIBLE DIGLOT ENGLISH-TAGALOG ANG BIBLIA","description":"Parallel Bible English–Tagalog\\n\\n- Gold edge\\n- Very readable in both English and Tagalog\\n- Length: 8.5 inches\\n- Width: 5.75 inches\\n- Thickness: 1.25 inches\\n- Weight: 0.8 kg\\n- Old and New Testaments\\n- KJV 1611\\n- Soft leatherette cover\\n- For bilingual readers\\n- With thumb index\\n- Available in brown and black","format":"Hardcover","images":["https://down-ph.img.susercontent.com/file/ph-11134207-7r990-lvzdvy34yp29e2.webp","https://down-ph.img.susercontent.com/file/ph-11134207-81zth-mkrqcxyjsfeu4e.webp","https://m.media-amazon.com/images/I/91HBtuBeD2L._SL1500_.jpg"],"offers":[{"country":"PH","currency":"PHP","price":849,"retailer":"CONQUERORS BOOK SHOP","productUrl":"https://s.shopee.ph/8V9r4p3xyx"},{"country":"US","currency":"USD","price":125,"retailer":"American Bible Society (Amazon)","productUrl":"https://link.amazon/B07u3d9N9"}]},{"id":"purpose-driven-life-rick-warren","title":"The Purpose-Driven Life: What on Earth Am I Here For?","version":"Christian Living","description":"You are not an accident. Even before the universe was created, God had you in mind, and he planned you for his purposes. These purposes will extend far beyond the few years you will spend on earth. You were made to last forever! Self-help books often suggest that you try to discover the meaning and purpose of your life by looking within yourself, but Rick Warren says that is the wrong place to start. You must begin with God, your Creator, and his reasons for creating you. You were made by God and for God, and until you understand that, life will never make sense. This book will help you understand why you are alive and God's amazing plan for you---both here and now, and for eternity. Rick Warren will guide you through a personal 40-day spiritual journey that will transform your answer to life's most important question: What on earth am I here for? Knowing God's purpose for creating you will reduce your stress, focus your energy, simplify your decisions, give meaning to your life, and, most importantly, prepare you for eternity. The Purpose Driven Life is a blueprint for Christian living in the 21st century---a lifestyle based on God's eternal purposes, not cultural values. Using over 1,200 scriptural quotes and references, it challenges the conventional definitions of worship, fellowship, discipleship, ministry, and evangelism. In the tradition of Oswald Chambers, Rick Warren offers distilled wisdom on the essence of what life is all about. This is a book of hope and challenge that you will read and re-read, and it will be a classic treasured by generations to come.","format":"Hardcover","images":["https://m.media-amazon.com/images/I/91WhuCH3dFL._SL1500_.jpg"],"offers":[{"country":"US","currency":"USD","price":15.92,"retailer":"Rick Warren (Amazon)","productUrl":"https://link.amazon/B02JlqBum"}]}]`),X=`https://via.placeholder.com/400x300?text=No+Image+Available`,Z=[{code:`AF`,label:`Afghanistan (AF)`},{code:`AX`,label:`Aland Islands (AX)`},{code:`AL`,label:`Albania (AL)`},{code:`DZ`,label:`Algeria (DZ)`},{code:`AS`,label:`American Samoa (AS)`},{code:`AD`,label:`Andorra (AD)`},{code:`AO`,label:`Angola (AO)`},{code:`AI`,label:`Anguilla (AI)`},{code:`AQ`,label:`Antarctica (AQ)`},{code:`AG`,label:`Antigua and Barbuda (AG)`},{code:`AR`,label:`Argentina (AR)`},{code:`AM`,label:`Armenia (AM)`},{code:`AW`,label:`Aruba (AW)`},{code:`AU`,label:`Australia (AU)`},{code:`AT`,label:`Austria (AT)`},{code:`AZ`,label:`Azerbaijan (AZ)`},{code:`BS`,label:`Bahamas (BS)`},{code:`BH`,label:`Bahrain (BH)`},{code:`BD`,label:`Bangladesh (BD)`},{code:`BB`,label:`Barbados (BB)`},{code:`BY`,label:`Belarus (BY)`},{code:`BE`,label:`Belgium (BE)`},{code:`BZ`,label:`Belize (BZ)`},{code:`BJ`,label:`Benin (BJ)`},{code:`BM`,label:`Bermuda (BM)`},{code:`BT`,label:`Bhutan (BT)`},{code:`BO`,label:`Bolivia (BO)`},{code:`BA`,label:`Bosnia and Herzegovina (BA)`},{code:`BW`,label:`Botswana (BW)`},{code:`BR`,label:`Brazil (BR)`},{code:`IO`,label:`British Indian Ocean Territory (IO)`},{code:`BN`,label:`Brunei Darussalam (BN)`},{code:`BG`,label:`Bulgaria (BG)`},{code:`BF`,label:`Burkina Faso (BF)`},{code:`BI`,label:`Burundi (BI)`},{code:`KH`,label:`Cambodia (KH)`},{code:`CM`,label:`Cameroon (CM)`},{code:`CA`,label:`Canada (CA)`},{code:`CV`,label:`Cape Verde (CV)`},{code:`KY`,label:`Cayman Islands (KY)`},{code:`CF`,label:`Central African Republic (CF)`},{code:`TD`,label:`Chad (TD)`},{code:`CL`,label:`Chile (CL)`},{code:`CN`,label:`China (CN)`},{code:`CX`,label:`Christmas Island (CX)`},{code:`CC`,label:`Cocos (Keeling) Islands (CC)`},{code:`CO`,label:`Colombia (CO)`},{code:`KM`,label:`Comoros (KM)`},{code:`CG`,label:`Congo (CG)`},{code:`CD`,label:`Congo, Democratic Republic (CD)`},{code:`CK`,label:`Cook Islands (CK)`},{code:`CR`,label:`Costa Rica (CR)`},{code:`CI`,label:`Cote D'Ivoire (CI)`},{code:`HR`,label:`Croatia (HR)`},{code:`CU`,label:`Cuba (CU)`},{code:`CY`,label:`Cyprus (CY)`},{code:`CZ`,label:`Czech Republic (CZ)`},{code:`DK`,label:`Denmark (DK)`},{code:`DJ`,label:`Djibouti (DJ)`},{code:`DM`,label:`Dominica (DM)`},{code:`DO`,label:`Dominican Republic (DO)`},{code:`EC`,label:`Ecuador (EC)`},{code:`EG`,label:`Egypt (EG)`},{code:`SV`,label:`El Salvador (SV)`},{code:`GQ`,label:`Equatorial Guinea (GQ)`},{code:`ER`,label:`Eritrea (ER)`},{code:`EE`,label:`Estonia (EE)`},{code:`ET`,label:`Ethiopia (ET)`},{code:`FK`,label:`Falkland Islands (FK)`},{code:`FO`,label:`Faroe Islands (FO)`},{code:`FJ`,label:`Fiji (FJ)`},{code:`FI`,label:`Finland (FI)`},{code:`FR`,label:`France (FR)`},{code:`GF`,label:`French Guiana (GF)`},{code:`PF`,label:`French Polynesia (PF)`},{code:`GA`,label:`Gabon (GA)`},{code:`GM`,label:`Gambia (GM)`},{code:`GE`,label:`Georgia (GE)`},{code:`DE`,label:`Germany (DE)`},{code:`GH`,label:`Ghana (GH)`},{code:`GI`,label:`Gibraltar (GI)`},{code:`GR`,label:`Greece (GR)`},{code:`GL`,label:`Greenland (GL)`},{code:`GD`,label:`Grenada (GD)`},{code:`GP`,label:`Guadeloupe (GP)`},{code:`GU`,label:`Guam (GU)`},{code:`GT`,label:`Guatemala (GT)`},{code:`GG`,label:`Guernsey (GG)`},{code:`GN`,label:`Guinea (GN)`},{code:`GW`,label:`Guinea-Bissau (GW)`},{code:`GY`,label:`Guyana (GY)`},{code:`HT`,label:`Haiti (HT)`},{code:`VA`,label:`Holy See (Vatican City) (VA)`},{code:`HN`,label:`Honduras (HN)`},{code:`HK`,label:`Hong Kong (HK)`},{code:`HU`,label:`Hungary (HU)`},{code:`IS`,label:`Iceland (IS)`},{code:`IN`,label:`India (IN)`},{code:`ID`,label:`Indonesia (ID)`},{code:`IR`,label:`Iran (IR)`},{code:`IQ`,label:`Iraq (IQ)`},{code:`IE`,label:`Ireland (IE)`},{code:`IM`,label:`Isle of Man (IM)`},{code:`IL`,label:`Israel (IL)`},{code:`IT`,label:`Italy (IT)`},{code:`JM`,label:`Jamaica (JM)`},{code:`JP`,label:`Japan (JP)`},{code:`JE`,label:`Jersey (JE)`},{code:`JO`,label:`Jordan (JO)`},{code:`KZ`,label:`Kazakhstan (KZ)`},{code:`KE`,label:`Kenya (KE)`},{code:`KI`,label:`Kiribati (KI)`},{code:`KP`,label:`Korea, North (KP)`},{code:`KR`,label:`Korea, South (KR)`},{code:`KW`,label:`Kuwait (KW)`},{code:`KG`,label:`Kyrgyzstan (KG)`},{code:`LA`,label:`Laos (LA)`},{code:`LV`,label:`Latvia (LV)`},{code:`LB`,label:`Lebanon (LB)`},{code:`LS`,label:`Lesotho (LS)`},{code:`LR`,label:`Liberia (LR)`},{code:`LY`,label:`Libya (LY)`},{code:`LI`,label:`Liechtenstein (LI)`},{code:`LT`,label:`Lithuania (LT)`},{code:`LU`,label:`Luxembourg (LU)`},{code:`MO`,label:`Macao (MO)`},{code:`MK`,label:`North Macedonia (MK)`},{code:`MG`,label:`Madagascar (MG)`},{code:`MW`,label:`Malawi (MW)`},{code:`MY`,label:`Malaysia (MY)`},{code:`MV`,label:`Maldives (MV)`},{code:`ML`,label:`Mali (ML)`},{code:`MT`,label:`Malta (MT)`},{code:`MH`,label:`Marshall Islands (MH)`},{code:`MQ`,label:`Martinique (MQ)`},{code:`MR`,label:`Mauritania (MR)`},{code:`MU`,label:`Mauritius (MU)`},{code:`YT`,label:`Mayotte (YT)`},{code:`MX`,label:`Mexico (MX)`},{code:`FM`,label:`Micronesia (FM)`},{code:`MD`,label:`Moldova (MD)`},{code:`MC`,label:`Monaco (MC)`},{code:`MN`,label:`Mongolia (MN)`},{code:`ME`,label:`Montenegro (ME)`},{code:`MS`,label:`Montserrat (MS)`},{code:`MA`,label:`Morocco (MA)`},{code:`MZ`,label:`Mozambique (MZ)`},{code:`MM`,label:`Myanmar (MM)`},{code:`NA`,label:`Namibia (NA)`},{code:`NR`,label:`Nauru (NR)`},{code:`NP`,label:`Nepal (NP)`},{code:`NL`,label:`Netherlands (NL)`},{code:`NC`,label:`New Caledonia (NC)`},{code:`NZ`,label:`New Zealand (NZ)`},{code:`NI`,label:`Nicaragua (NI)`},{code:`NE`,label:`Niger (NE)`},{code:`NG`,label:`Nigeria (NG)`},{code:`NU`,label:`Niue (NU)`},{code:`NF`,label:`Norfolk Island (NF)`},{code:`MP`,label:`Northern Mariana Islands (MP)`},{code:`NO`,label:`Norway (NO)`},{code:`OM`,label:`Oman (OM)`},{code:`PK`,label:`Pakistan (PK)`},{code:`PW`,label:`Palau (PW)`},{code:`PS`,label:`Palestine (PS)`},{code:`PA`,label:`Panama (PA)`},{code:`PG`,label:`Papua New Guinea (PG)`},{code:`PY`,label:`Paraguay (PY)`},{code:`PE`,label:`Peru (PE)`},{code:`PH`,label:`Philippines (PH)`},{code:`PN`,label:`Pitcairn (PN)`},{code:`PL`,label:`Poland (PL)`},{code:`PT`,label:`Portugal (PT)`},{code:`PR`,label:`Puerto Rico (PR)`},{code:`QA`,label:`Qatar (QA)`},{code:`RE`,label:`Reunion (RE)`},{code:`RO`,label:`Romania (RO)`},{code:`RU`,label:`Russia (RU)`},{code:`RW`,label:`Rwanda (RW)`},{code:`BL`,label:`Saint Barthelemy (BL)`},{code:`SH`,label:`Saint Helena (SH)`},{code:`KN`,label:`Saint Kitts and Nevis (KN)`},{code:`LC`,label:`Saint Lucia (LC)`},{code:`MF`,label:`Saint Martin (MF)`},{code:`PM`,label:`Saint Pierre and Miquelon (PM)`},{code:`VC`,label:`Saint Vincent and the Grenadines (VC)`},{code:`WS`,label:`Samoa (WS)`},{code:`SM`,label:`San Marino (SM)`},{code:`ST`,label:`Sao Tome and Principe (ST)`},{code:`SA`,label:`Saudi Arabia (SA)`},{code:`SN`,label:`Senegal (SN)`},{code:`RS`,label:`Serbia (RS)`},{code:`SC`,label:`Seychelles (SC)`},{code:`SL`,label:`Sierra Leone (SL)`},{code:`SG`,label:`Singapore (SG)`},{code:`SX`,label:`Sint Maarten (SX)`},{code:`SK`,label:`Slovakia (SK)`},{code:`SI`,label:`Slovenia (SI)`},{code:`SB`,label:`Solomon Islands (SB)`},{code:`SO`,label:`Somalia (SO)`},{code:`ZA`,label:`South Africa (ZA)`},{code:`GS`,label:`South Georgia and the South Sandwich Islands (GS)`},{code:`SS`,label:`South Sudan (SS)`},{code:`ES`,label:`Spain (ES)`},{code:`LK`,label:`Sri Lanka (LK)`},{code:`SD`,label:`Sudan (SD)`},{code:`SR`,label:`Suriname (SR)`},{code:`SJ`,label:`Svalbard and Jan Mayen (SJ)`},{code:`SZ`,label:`Eswatini (SZ)`},{code:`SE`,label:`Sweden (SE)`},{code:`CH`,label:`Switzerland (CH)`},{code:`SY`,label:`Syria (SY)`},{code:`TW`,label:`Taiwan (TW)`},{code:`TJ`,label:`Tajikistan (TJ)`},{code:`TZ`,label:`Tanzania (TZ)`},{code:`TH`,label:`Thailand (TH)`},{code:`TL`,label:`Timor-Leste (TL)`},{code:`TG`,label:`Togo (TG)`},{code:`TK`,label:`Tokelau (TK)`},{code:`TO`,label:`Tonga (TO)`},{code:`TT`,label:`Trinidad and Tobago (TT)`},{code:`TN`,label:`Tunisia (TN)`},{code:`TR`,label:`Turkey (TR)`},{code:`TM`,label:`Turkmenistan (TM)`},{code:`TC`,label:`Turks and Caicos Islands (TC)`},{code:`TV`,label:`Tuvalu (TV)`},{code:`UG`,label:`Uganda (UG)`},{code:`UA`,label:`Ukraine (UA)`},{code:`AE`,label:`United Arab Emirates (AE)`},{code:`GB`,label:`United Kingdom (GB)`},{code:`US`,label:`United States (US)`},{code:`UM`,label:`United States Minor Outlying Islands (UM)`},{code:`UY`,label:`Uruguay (UY)`},{code:`UZ`,label:`Uzbekistan (UZ)`},{code:`VU`,label:`Vanuatu (VU)`},{code:`VE`,label:`Venezuela (VE)`},{code:`VN`,label:`Vietnam (VN)`},{code:`VG`,label:`Virgin Islands, British (VG)`},{code:`VI`,label:`Virgin Islands, U.S. (VI)`},{code:`WF`,label:`Wallis and Futuna (WF)`},{code:`EH`,label:`Western Sahara (EH)`},{code:`YE`,label:`Yemen (YE)`},{code:`ZM`,label:`Zambia (ZM)`},{code:`ZW`,label:`Zimbabwe (ZW)`}],Le=class{products=Ie;activeModalProduct=null;filters={searchQuery:``,selectedVersion:`ALL`,selectedFormat:`ALL`,selectedCountry:this.detectSyncCountryFallback(),sortBy:`featured`};detectSyncCountryFallback(){let e=localStorage.getItem(`shepherd_store_country`);if(e)return e;let t=navigator.language||``;return t.includes(`PH`)?`PH`:t.includes(`GB`)?`GB`:t.includes(`CA`)?`CA`:t.includes(`AU`)?`AU`:`US`}async detectLocalCountryViaAPI(){if(!localStorage.getItem(`shepherd_store_country`))try{let e=await fetch(`https://ipapi.co/json/`);if(e.ok){let t=await e.json(),n=t.country_code||t.country;if(Z.some(e=>e.code===n)){this.filters.selectedCountry=n,localStorage.setItem(`shepherd_store_country`,n);let e=document.getElementById(`store-country`);e&&(e.value=n),this.updateGrid()}}}catch(e){console.warn(`Could not detect country via IP API. Falling back to default.`,e)}}render(){return`
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
            ${Z.map(e=>`
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
    `}mount(){this.attachEventListeners(),this.updateGrid(),this.detectLocalCountryViaAPI()}attachEventListeners(){let e=document.getElementById(`store-page-root`);e&&(e.querySelector(`#store-search`)?.addEventListener(`input`,e=>{this.filters.searchQuery=e.target.value,this.updateGrid()}),e.querySelector(`#store-country`)?.addEventListener(`change`,e=>{this.filters.selectedCountry=e.target.value,localStorage.setItem(`shepherd_store_country`,this.filters.selectedCountry),this.updateGrid()}),e.querySelector(`#store-version`)?.addEventListener(`change`,e=>{this.filters.selectedVersion=e.target.value,this.updateGrid()}),e.querySelector(`#store-format`)?.addEventListener(`change`,e=>{this.filters.selectedFormat=e.target.value,this.updateGrid()}),e.querySelector(`#store-sort`)?.addEventListener(`change`,e=>{this.filters.sortBy=e.target.value,this.updateGrid()}))}getFilteredProducts(){return this.products.filter(e=>{let t=this.filters.searchQuery.toLowerCase(),n=!t||e.title.toLowerCase().includes(t)||e.version.toLowerCase().includes(t)||e.description.toLowerCase().includes(t),r=this.filters.selectedVersion===`ALL`||e.version===this.filters.selectedVersion,i=this.filters.selectedFormat===`ALL`||e.format===this.filters.selectedFormat;return n&&r&&i}).sort((e,t)=>{if(this.filters.sortBy===`featured`)return 0;let n=e.offers.find(e=>e.country===this.filters.selectedCountry),r=t.offers.find(e=>e.country===this.filters.selectedCountry),i=n?.price??1/0,a=r?.price??1/0;return this.filters.sortBy===`price-asc`?i-a:a-i})}updateGrid(){let e=document.getElementById(`store-grid-container`);if(!e)return;let t=this.getFilteredProducts();if(t.length===0){e.innerHTML=`<p class="no-results">No Bibles matched your search criteria. Try relaxing your filters.</p>`;return}e.innerHTML=t.map(e=>{let t=e.offers.find(e=>e.country===this.filters.selectedCountry),n=e.offers.length>0?e.offers[0]:null,r=t||n,i=e.images[0]||X;return`
        <article class="product-card" data-id="${e.id}">
          <div class="product-img-wrapper view-details-img" data-id="${e.id}" style="cursor: pointer;">
            <img 
              src="${i}" 
              alt="${e.title}" 
              class="product-img" 
              loading="lazy"
              onerror="this.onerror=null;this.src='${X}';"
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
      `}).join(``),e.querySelectorAll(`.view-details-img, .product-title, .view-details-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-id`);if(!t)return;let n=this.products.find(e=>e.id===t);n&&this.openDetailModal(n)})}),e.querySelectorAll(`.qr-code-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.id;if(!t)return;let n=this.products.find(e=>e.id===t);if(!n)return;let r=n.offers.find(e=>e.country===this.filters.selectedCountry)||(n.offers.length>0?n.offers[0]:null);r?.productUrl&&this.openQrModal(n.title,r.productUrl)})})}openDetailModal(e){this.activeModalProduct=e;let t=document.getElementById(`store-modal-container`);if(!t)return;let n=e.images.length>0?e.images:[X];t.innerHTML=`
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
                onerror="this.onerror=null;this.src='${X}';"
              />
              ${n.length>1?`
                <div class="gallery-thumbnails">
                  ${n.map((e,t)=>`
                    <img 
                      src="${e}" 
                      class="gallery-thumb ${t===0?`active`:``}" 
                      data-idx="${t}"
                      onerror="this.onerror=null;this.src='${X}';"
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
    `,t.querySelector(`#modal-close`)?.addEventListener(`click`,()=>this.closeModal()),t.querySelector(`#modal-overlay`)?.addEventListener(`click`,e=>{e.target.id===`modal-overlay`&&this.closeModal()}),t.querySelectorAll(`.gallery-thumb`).forEach(e=>{e.addEventListener(`click`,e=>{let r=parseInt(e.currentTarget.getAttribute(`data-idx`)||`0`),i=t.querySelector(`#modal-main-img`);i&&(i.src=n[r]),t.querySelectorAll(`.gallery-thumb`).forEach(e=>e.classList.remove(`active`)),e.currentTarget.classList.add(`active`)})})}async openQrModal(e,t){document.getElementById(`product-qr-modal`)?.remove();let n=document.createElement(`div`);n.id=`product-qr-modal`,Object.assign(n.style,{position:`fixed`,inset:`0`,zIndex:`2147483647`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`16px`,background:`rgba(0, 0, 0, 0.55)`,boxSizing:`border-box`});let r=document.createElement(`div`);Object.assign(r.style,{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,width:`100%`,maxWidth:`340px`,padding:`24px`,borderRadius:`12px`,background:`#ffffff`,color:`#222222`,boxShadow:`0 12px 40px rgba(0,0,0,0.3)`,textAlign:`center`,boxSizing:`border-box`});let i=document.createElement(`button`);i.type=`button`,i.textContent=`×`,i.setAttribute(`aria-label`,`Close QR code`),Object.assign(i.style,{position:`absolute`,top:`6px`,right:`10px`,border:`none`,background:`transparent`,color:`#222`,fontSize:`28px`,cursor:`pointer`});let a=document.createElement(`h2`);a.textContent=e,Object.assign(a.style,{margin:`8px 20px 12px`,color:`#222`,fontSize:`20px`});let o=document.createElement(`p`);o.textContent=`Scan this QR code to open the product page.`,o.style.color=`#555`;let s=document.createElement(`div`);Object.assign(s.style,{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`240px`,height:`240px`,background:`#fff`,color:`#222`}),s.textContent=`Generating QR code...`;let c=document.createElement(`button`);c.type=`button`,c.textContent=`Copy product link`,Object.assign(c.style,{marginTop:`16px`,padding:`10px 16px`,border:`none`,borderRadius:`6px`,background:`#800020`,color:`#fff`,cursor:`pointer`}),r.append(i,a,o,s,c),n.appendChild(r),document.body.appendChild(n);let l=()=>n.remove();i.addEventListener(`click`,l),n.addEventListener(`click`,e=>{e.target===n&&l()}),c.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(t),c.textContent=`Link copied!`}catch{c.textContent=`Copy failed`}});try{let r=await A.toDataURL(t,{width:240,margin:2,errorCorrectionLevel:`M`});if(!n.isConnected)return;let i=document.createElement(`img`);i.src=r,i.alt=`QR code for ${e}`,i.width=240,i.height=240,i.style.display=`block`,s.replaceChildren(i)}catch(e){console.error(`QR generation failed:`,e),s.textContent=`QR generation failed. Check the console.`}}closeModal(){let e=document.getElementById(`store-modal-container`);e&&(e.innerHTML=``),this.activeModalProduct=null}},Re={"/":()=>de,"/about":()=>ge,"/faq":()=>pe,"/community":()=>me,"/changelog":()=>he,"/privacy":()=>_e,"/editor":()=>new Oe,"/books":()=>new Ae,"/support":()=>new Fe,"/store":()=>new Le};function Q(e){return e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e||`/`}function $(){let e=document.getElementById(`app-content`);if(!e){console.error(`Router: #app-content was not found.`);return}let t=(Re[Q(window.location.pathname)]??Re[`/`])();window.scrollTo({top:0,behavior:`auto`});let n=t.render();e.innerHTML=``,typeof n==`string`?e.innerHTML=n:e.appendChild(n),t.mount?.()}function ze(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target;if(!t)return;let n=t.closest(`a[data-route]`);if(!n)return;let r=n.getAttribute(`href`);if(!r||!r.startsWith(`/`))return;e.preventDefault();let i=Q(window.location.pathname),a=Q(r);i!==a&&(history.pushState({},``,a),$())}function Be(){document.addEventListener(`click`,ze),window.addEventListener(`popstate`,$),$()}function Ve(){let e=localStorage.getItem(`sb-theme`),t=window.matchMedia(`(prefers-color-scheme: light)`).matches,n=e||(t?`dark`:`light`);document.documentElement.setAttribute(`data-theme`,n);let r=document.getElementById(`app-header`);r&&(r.innerHTML=d.render(),d.mount());let i=document.getElementById(`app-footer`);i&&(i.innerHTML=`
  <div class="container text-center site-footer">
    <div class="footer-support">
      <p class="footer-support-title">
        Help Shepherd Bible grow
      </p>
      <p class="footer-support-description">
        Your voluntary support helps us maintain and improve
        free Bible-reading tools and our community.
      </p>
      <a
        href="/support"
        data-route
        class="support-project-button"
      >
        <span aria-hidden="true">♥</span>
        Support the Project
      </a>
    </div>

    <p class="footer-copyright">
      &copy; ${new Date().getFullYear()} Shepherd Bible.
      Share a piece of your journey to inspire another.
    </p>

    <nav class="footer-links" aria-label="Footer navigation">
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
`),Be()}document.addEventListener(`DOMContentLoaded`,Ve);