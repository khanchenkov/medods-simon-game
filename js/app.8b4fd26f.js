(function(e){function t(t){for(var n,c,s=t[0],l=t[1],o=t[2],f=0,d=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=i[0]))}return e}var n={},a={app:0},r=[];function c(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=e,c.c=n,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(i,n,function(t){return e[t]}.bind(null,n));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0603":function(e,t,i){"use strict";i("fcfb")},"29f0":function(e,t,i){},"4ecf":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Header"),i("Board")],1)},r=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header__logo"},[n("img",{attrs:{alt:"Medods logo",src:i("cf05")}}),n("span",[e._v("Medods")])])])])}],l=(i("0603"),i("2877")),o={},u=Object(l["a"])(o,c,s,!1,null,"0399755a",null),f=u.exports,d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"game"},[i("div",{staticClass:"board"},[i("div",{staticClass:"board__part board__part-red",class:{active:e.isTileActive[1],clickable:e.isFieldClickable},on:{click:function(t){return e.clicked(1)}}}),i("div",{staticClass:"board__part board__part-lime",class:{active:e.isTileActive[2],clickable:e.isFieldClickable},on:{click:function(t){return e.clicked(2)}}}),i("div",{staticClass:"board__part board__part-blue",class:{active:e.isTileActive[3],clickable:e.isFieldClickable},on:{click:function(t){return e.clicked(3)}}}),i("div",{staticClass:"board__part board__part-violet",class:{active:e.isTileActive[4],clickable:e.isFieldClickable},on:{click:function(t){return e.clicked(4)}}})]),i("ControlPanel",{attrs:{level:e.level,isGameStarted:e.isGameStarted},on:{startGame:e.startGame,stopGame:function(t){return e.stopGame()},setDifficulty:e.updateParent}})],1)])])},h=[],v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"control-panel"},[i("div",{staticClass:"control-panel__button"},[i("button",{directives:[{name:"show",rawName:"v-show",value:!e.isGameStarted,expression:"!isGameStarted"}],on:{click:function(t){return e.startGame()}}},[e._v("Начать")]),i("button",{directives:[{name:"show",rawName:"v-show",value:e.isGameStarted,expression:" isGameStarted"}],on:{click:function(t){return e.stopGame()}}},[e._v("Закончить")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isGameStarted,expression:"isGameStarted"}],staticClass:"control-panel__heading"},[i("h1",[e._v("Уровень "+e._s(e.level))])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isGameStarted,expression:"!isGameStarted"}],staticClass:"control-panel__settings"},[i("button",{staticClass:"easy",class:{active:"easy"==e.difficultyName},on:{click:function(t){return e.setDifficulty("easy",1500)}}},[e._v("Легко")]),i("button",{staticClass:"normal",class:{active:"medium"==e.difficultyName},on:{click:function(t){return e.setDifficulty("medium",1e3)}}},[e._v("Средне")]),i("button",{staticClass:"hard",class:{active:"hard"==e.difficultyName},on:{click:function(t){return e.setDifficulty("hard",400)}}},[e._v("Сложно")])])])},m=[],p=(i("a9e3"),{name:"ControlPanel",props:{level:Number,isGameStarted:Boolean,currDifficulty:Number},data:function(){return{startedLocal:this.isGameStarted,localDifficulty:1500,difficultyName:"easy"}},methods:{startGame:function(){this.$emit("startGame")},stopGame:function(){this.startedLocal=!1,this.$emit("stopGame")},setDifficulty:function(e,t){this.difficultyName=e,this.localDifficulty=t,this.$emit("setDifficulty",this.localDifficulty)}}}),b=p,_=(i("d0ad"),Object(l["a"])(b,v,m,!1,null,"6fc73294",null)),y=_.exports,G={name:"Board",props:{},components:{ControlPanel:y},data:function(){return{level:0,isGameLost:!1,currentGameSequence:[],currentUserSequence:[],currDifficulty:1500,isFieldClickable:!1,isGameStarted:!1,isTileActive:{1:!1,2:!1,3:!1,4:!1}}},methods:{updateParent:function(e){this.currDifficulty=e},startGame:function(){clearInterval(this.currentInterval),this.isGameStarted=!0,this.isFieldClickable=!1,this.currentUserSequence=[],this.currentGameSequence=[],this.level++,this.showLevel(this.level)},stopGame:function(){clearInterval(this.currentInterval),this.isGameStarted=this.isFieldClickable=!1,this.level=0},generate:function(e){for(var t=[],i=0;i<e;i++)t.push(Math.floor(4*Math.random()+1));return t},clicked:function(e){this.isFieldClickable&&this.isGameStarted&&(this.currentUserSequence.push(e),this.lightUp(e),this.checkSequences())},checkSequences:function(){for(var e=this,t=0;t<this.currentUserSequence.length;t++)this.currentUserSequence[t]!==this.currentGameSequence[t]&&(this.isGameLost=!0,setTimeout((function(){alert("Неправильно")}),350),setTimeout((function(){e.stopGame()}),this.currDifficulty));if(this.currentUserSequence.length===this.currentGameSequence.length&&!this.isGameLost){var i=this.level;setTimeout((function(){alert("Уровень ".concat(i," пройден"))}),350),setTimeout((function(){e.startGame()}),this.currDifficulty)}},lightUp:function(e){var t=this;this.playSound(e),this.isTileActive[e]=!0,setTimeout((function(){t.isTileActive[e]=!1}),200)},playSound:function(e){var t=new Audio("./sounds/".concat(e,".mp3"));return t.loop=!1,t.play()},showLevel:function(e){var t=this;this.currentGameSequence=this.generate(e);var i=0;this.isFieldClickable=!1,this.currentInterval=setInterval((function(){i>=t.currentGameSequence.length&&(clearInterval(t.currentInterval),t.isFieldClickable=!0),t.lightUp(t.currentGameSequence[i]),i++}),this.currDifficulty)}}},S=G,k=(i("dbd7"),Object(l["a"])(S,d,h,!1,null,"33f3917a",null)),g=k.exports,C={name:"App",components:{Header:f,Board:g}},w=C,q=(i("cf25"),Object(l["a"])(w,a,r,!1,null,null,null)),x=q.exports;n["a"].config.productionTip=!1,n["a"].config.devtools=!0,new n["a"]({render:function(e){return e(x)}}).$mount("#app")},cf05:function(e,t,i){e.exports=i.p+"img/logo.fd37ce01.png"},cf25:function(e,t,i){"use strict";i("fea6")},d0ad:function(e,t,i){"use strict";i("29f0")},dbd7:function(e,t,i){"use strict";i("4ecf")},fcfb:function(e,t,i){},fea6:function(e,t,i){}});
//# sourceMappingURL=app.8b4fd26f.js.map