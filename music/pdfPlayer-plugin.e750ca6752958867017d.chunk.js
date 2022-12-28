(self.webpackChunk=self.webpackChunk||[]).push([[7058,4942],{57216:function(e,t,n){"use strict";n.r(t),n.d(t,{PdfPlayer:function(){return h}}),n(63238),n(61418),n(32081),n(95623),n(61514),n(95289),n(99785);var i=n(53913),o=n(56705),s=n(74783),a=n(90914),r=n(83094),u=n(86628),l=(n(27120),n(21865),n(47005)),c=n(58233);function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="PDF Player",this.type="mediaplayer",this.id="pdfplayer",this.priority=1,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this)}var t,n;return t=e,(n=[{key:"play",value:function(e){this.progress=0,this.loaded=!1,this.cancellationToken=!1,this.pages={},o.ZP.show();var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){this.unbindEvents();var e={src:this.item};l.Events.trigger(this,"stopped",[e]);var t=this.mediaElement;t&&(a.default.close(t),this.mediaElement=null),o.ZP.hide(),this.cancellationToken=!0}},{key:"destroy",value:function(){}},{key:"currentItem",value:function(){return this.item}},{key:"currentTime",value:function(){return this.progress}},{key:"duration",value:function(){return this.book?this.book.numPages:0}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onWindowKeyUp",value:function(e){var t=s.ZP.getKeyName(e);if(this.loaded)switch(t){case"l":case"ArrowRight":case"Right":this.next();break;case"j":case"ArrowLeft":case"Left":this.previous();break;case"Escape":this.stop()}}},{key:"onTouchStart",value:function(e){this.loaded&&e.touches&&0!==e.touches.length&&(e.touches[0].clientX<r.ZP.getWindowSize().innerWidth/2?this.previous():this.next())}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp),document.addEventListener("touchstart",this.onTouchStart)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed)}},{key:"unbindEvents",value:function(){this.mediaElement&&this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp),document.removeEventListener("touchstart",this.onTouchStart)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("pdfPlayer"))||((e=a.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="pdfPlayer",e.innerHTML='<canvas id="canvas"></canvas><div class="actionButtons"><button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1"><span class="material-icons actionButtonIcon close" aria-hidden="true"></span></button></div>',a.default.open(e)),this.mediaElement=e,e)}},{key:"setCurrentSrc",value:function(e,t){var n=this,o=t.items[0];this.item=o,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:o.Id}};var s=o.ServerId,a=i.Z.getApiClient(s);return new Promise((function(e){var i=a.getItemDownloadUrl(o.Id);n.bindEvents(),c.GlobalWorkerOptions.workerSrc=u.appRouter.baseUrl()+"/libraries/pdf.worker.js",(0,c.getDocument)(i).promise.then((function(i){if(!n.cancellationToken){n.book=i,n.loaded=!0;var o=t.startPositionTicks/1e4;return 0!==o?(n.loadPage(o+1),n.progress=o):n.loadPage(1),e()}}))}))}},{key:"next",value:function(){this.progress!==this.duration()-1&&(this.loadPage(this.progress+2),this.progress=this.progress+1,l.Events.trigger(this,"pause"))}},{key:"previous",value:function(){0!==this.progress&&(this.loadPage(this.progress),this.progress=this.progress-1,l.Events.trigger(this,"pause"))}},{key:"replaceCanvas",value:function(e){var t=document.getElementById("canvas");e.id="canvas",t.parentNode.replaceChild(e,t)}},{key:"loadPage",value:function(e){for(var t="page",n=[t+e],i=1;i<=2;i++)e-i>0&&n.push(t+(e-i)),e+i<this.duration()&&n.push(t+(e+i));for(var o=0,s=n;o<s.length;o++){var a=s[o];this.pages[a]||(this.pages[a]=document.createElement("canvas"),this.renderPage(this.pages[a],parseInt(a.substr(4))))}for(var r in this.replaceCanvas(this.pages[t+e],e),this.pages)n.includes(r)||delete this.pages[r]}},{key:"renderPage",value:function(e,t){this.book.getPage(t).then((function(t){var n=t.getViewport({scale:1}),i=e.getContext("2d"),s=r.ZP.getWindowSize().innerWidth/n.width,a=r.ZP.getWindowSize().innerHeight/n.height,u=Math.min(a,s),l=t.getViewport({scale:u});e.width=l.width,e.height=l.height;var c={canvasContext:i,viewport:l};t.render(c).promise.then((function(){o.ZP.hide()}))}))}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return!(!e.Path||!e.Path.endsWith("pdf"))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=h},37350:function(e,t,n){"use strict";var i=n(54933),o=n.n(i),s=n(93476),a=n.n(s)()(o());a.push([e.id,"#pdfPlayer{background:#fff;height:100%;overflow:none;position:relative;width:100%;z-index:100}#canvas{display:block;margin:auto}.actionButtons{position:absolute;right:.5vh;top:.5vh;z-index:1002}.actionButtonIcon{color:#000;opacity:.7}",""]),t.Z=a},27120:function(e,t,n){"use strict";n.r(t);var i=n(1892),o=n.n(i),s=n(95760),a=n.n(s),r=n(38311),u=n.n(r),l=n(58192),c=n.n(l),d=n(38060),h=n.n(d),v=n(54865),p=n.n(v),f=n(37350),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=u().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=h(),o()(f.Z,g),t.default=f.Z&&f.Z.locals?f.Z.locals:void 0},86788:function(){},2754:function(){},56391:function(){},5001:function(){},35496:function(){},51566:function(){}}]);