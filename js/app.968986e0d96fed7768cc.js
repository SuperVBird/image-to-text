(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"./src/index.js":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/react/index.js"),a=r.n(n),o=r("./node_modules/react-dom/index.js"),i=r.n(o);function l(){return a.a.createElement("div",{className:"divide"})}var s=r("./node_modules/classnames/index.js"),c=r.n(s),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function f(e){var t=e.children,r=e.className,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","className"]);return r=c()(r,"btn"),a.a.createElement("button",u({},n,{type:"button",className:r}),t)}var p=r("./node_modules/gif.js/dist/gif.js"),h=r.n(p),m={PNG:/image\/png/,JPG:/image\/jpe?g/,GIF:/image\/gif/};function d(e){for(var t in m){if(m.hasOwnProperty(t))if(m[t].test(e))return t}}var g=12,v=6,y="normal normal 400 normal 12px / 12px monospace, monospace",b="rgba(0,0,0,1)",w="rgba(255,255,255,1)";function E(e,t,r){var n=document.createElement("canvas");n.width=e.scrollWidth,n.height=e.scrollHeight;var a=n.getContext("2d");a.fillStyle=r.bgColor,a.fillRect(0,0,n.width,n.height),a.fillStyle=r.color,a.font=r.font;for(var o=0;o<t.length;o++)for(var i=0;i<t[o].length;i++)a.fillText(t[o][i],i*v,o*g);return n}var O={bgColor:w,color:b,font:y,delay:300};var x={bgColor:w,color:b,font:y};function I(e){var t=e.div,r=e.frames,n=e.file,a=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["div","frames","file"]),o=d(n.type),i=document.createElement("a"),l=n.name.split(".");l[l.length-2]=l[l.length-2]+"-text",l=l.join("."),i.download=l,"GIF"===o?function(e,t,r,n){r=Object.assign({},O,r);var a=e.scrollWidth,o=e.scrollHeight,i=new h.a({quality:10,workers:2,workerScript:"./js/gif.worker.js",width:a,height:o});i.on("finished",function(e){n(e)});for(var l=0;l<t.length;l++){var s=E(e,t[l],r);i.addFrame(s,{delay:r.delay})}i.render(),console.log(i)}(t,r,a,function(e){var t=URL.createObjectURL(e);console.log(t),i.href=t,i.click(),URL.revokeObjectURL(t)}):(i.href=function(e,t,r){return E(e,t,r=Object.assign({},x,r)).toDataURL("image/png")}(t,r[0],a),i.click())}r("./src/style/modal.css");var j=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var k=300,P=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.savePic=function(){I({div:r.outputRef.current,frames:r.props.frames,file:r.props.file,delay:r.state.playDelay})},r.updatePlayDelay=function(){var e=r.playDelayInput.current.value,t=e.length?parseInt(e,10):k;isNaN(t)&&(t=k),r.setState({playDelay:t})},r.close=function(e){e.preventDefault(),r.stop(),r.setState({open:!1})},r.open=function(){r.play(),r.setState({open:!0})},r.state={open:!1,frameIndex:0,playDelay:k},r.playTimer=null,r.playDelayInput=a.a.createRef(),r.outputRef=a.a.createRef(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.PureComponent),j(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"play",value:function(){var e=this;if(!(this.props.frames.length<=1)){!function t(){e.playTimer=setTimeout(function(){var r=e.state.frameIndex+1;r===e.props.frames.length&&(r=0),e.setState({frameIndex:r}),t()},e.state.playDelay)}()}}},{key:"stop",value:function(){this.playTimer&&clearTimeout(this.playTimer)}},{key:"render",value:function(){var e=c()({modal:!0,open:this.state.open});return a.a.createElement("div",{className:e},a.a.createElement("div",{className:"modal-overlay"}),a.a.createElement("div",{className:"modal-box"},a.a.createElement("div",{className:"modal-header"},a.a.createElement("a",{href:"#",className:"modal-close",onClick:this.close},"X"),a.a.createElement("h3",{className:"modal-title"},"图片转化结果")),a.a.createElement(l,null),a.a.createElement("div",{className:"output-options"},this.props.file&&"image/gif"===this.props.file.type?a.a.createElement("span",null,a.a.createElement("input",{defaultValue:k,className:"play-delay-input",ref:this.playDelayInput,placeholder:"播放帧间隔(ms)"}),a.a.createElement(f,{className:"update-btn",onClick:this.updatePlayDelay},"更新间隔时间(ms)")):null,a.a.createElement(f,{className:"save-btn",onClick:this.savePic},"保存为图片")),a.a.createElement(l,null),a.a.createElement("div",{className:"output-text-wrapper"},a.a.createElement("div",{id:"output-text-block",className:"output-text-block",ref:this.outputRef},this.props.frames.length?this.props.frames[this.state.frameIndex].map(function(e,t){return a.a.createElement("pre",{key:t},e)}):null))))}}],[{key:"getDerivedStateFromProps",value:function(e){return e.file?{frameIndex:0}:null}}]),t}(),_=r("./node_modules/prop-types/index.js"),C=r.n(_),D=(r("./src/style/transformSetting.css"),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}());var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.PureComponent),D(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"transform-setting"},this.props.label?a.a.createElement("label",{htmlFor:this.props.labelFor},this.props.label):null,this.props.children)}}]),t}();N.propTypes={label:C.a.string,labelFor:C.a.string},N.defaultProps={label:"",labelFor:""};var R=N,S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function T(e){var t=e.children,r=e.className,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","className"]);return r=c()(r,"row"),a.a.createElement("div",S({},n,{className:r}),t)}r("./src/style/imagePreviewUpload.css");var F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var W=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.size=function(){return{width:r.state.width,height:r.state.height}},r.dragEnter=function(e){e.preventDefault(),r.setState({isDragging:!0})},r.dragOver=function(e){e.preventDefault()},r.dragLeave=function(e){e.preventDefault(),r.setState({isDragging:!1})},r.drop=function(e){e.preventDefault(),r.setState({isDragging:!1});var t=e.dataTransfer.files[0];r.previewImage(t)},r.openFileInput=function(){r.fileUpload.current.click()},r.setFile=function(e){var t=e.target.files[0];t&&r.previewImage(t)},r.state={isDragging:!1,width:400,height:250},r.fileUpload=a.a.createRef(),r.currentImageRef=a.a.createRef(),r.componentRef=a.a.createRef(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),F(t,[{key:"getCurrentImage",value:function(){return this.currentImageRef.current}},{key:"previewImage",value:function(e){var t=this;if(function(e){for(var t in m)if(m.hasOwnProperty(t)&&m[t].test(e))return!0;return!1}(e.type)){var r=new FileReader;r.readAsDataURL(e),r.addEventListener("load",function(){var n=new Image;n.addEventListener("load",function(){t.scaleImageContainer(n),t.props.setImageAndFile(n,e)}),n.src=r.result})}else alert("不支持该格式的文件")}},{key:"scaleImageContainer",value:function(e){e||(e=this.props.image);var t=this.componentRef.current.parentElement,r=this.props.previewWidth;if(r){if(r>t.clientWidth)return void alert("超过容器大小！请重新输入图片宽度")}else r=t.clientWidth,e.width<r&&(r=e.width);var n=e.width/r,a=e.height/n;this.setState({width:r,height:a})}},{key:"render",value:function(){var e=c()("upload-image-block",{active:this.state.isDragging},this.props.className);return a.a.createElement("div",{onDragEnter:this.dragEnter,onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDrop:this.drop,onClick:this.openFileInput,className:e,style:{width:this.state.width,height:this.state.height},ref:this.componentRef},a.a.createElement("input",{type:"file",style:{display:"none"},accept:"image/*",ref:this.fileUpload,onChange:this.setFile}),a.a.createElement("span",{className:"upload-label"},"上传图片"),this.props.image?a.a.createElement("img",{ref:this.currentImageRef,src:this.props.image.src,className:"preview-image"}):null)}}]),t}();var U=255,L="@#&$%O!~;*^+-. ";function z(e){for(var t,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return function(t){var r=U/e.length;return e[t/r>>0][0]}}(),o=e.data,i=e.width,l=e.height,s=[],c=0;c<l;c+=12){for(var u="",f=0;f<i;f+=6){var p=4*(f+i*c);u+=a((t=o[p],r=o[p+1],n=o[p+2],.299*t+.578*r+.114*n))}s.push(u)}return s}function A(e){var t,r,n=new Uint8Array(e),a=0,o={header:"",w:0,h:0,m:0,cr:0,s:0,pixel:0,bgIndex:0,radio:1,colorTable:[],frames:[],comment:""},i=void 0;function l(e){return n.slice(a,a+=e)}function s(){var e=l(1);!function(){switch(e[0]){case 33:!function(){var e=l(1);switch(e[0]){case 255:if(11!=l(1)[0])throw new Error("解析出错");for(o.appVersion="",l(11).forEach(function(e){o.appVersion+=String.fromCharCode(e)});;){if(!(e=l(1))[0]){s();break}l(e[0])}break;case 249:if(4!==l(1)[0])throw new Error("解析出错");if(e=l(4),(i={}).extension={disp:7&e[0]>>2,i:1&e[0]>>1,t:1&e[0],delay:10*(e[1]+(e[2]<<8)),tranIndex:e[3]},o.frames.push(i),0!=l(1)[0])throw new Error("解析出错");s();break;case 254:(e=l(1))[0]&&(l(e[0]).forEach(function(e){o.comment+=String.fromCharCode(e)}),0==l(1)[0]&&s());break;default:console.log(e)}}();break;case 44:e=l(9),i.img={x:e[0]+(e[1]<<8),y:e[2]+(e[3]<<8),w:e[4]+(e[5]<<8),h:e[6]+(e[7]<<8),m:1&e[8]>>7,i:1&e[8]>>6,s:1&e[8]>>5,r:3&e[8]>>3,pixel:7&e[8],colorTable:[]},i.img.m&&(i.img.colorTable=l(3*(2<<i.img.pixel))),i.img.encodeSize=l(1)[0];for(var t=[];;){if(!(e=l(1))[0]){i.img.encodeBuf=t,s();break}l(e[0]).forEach(function(e){t.push(e)})}break;case 59:console.log("Parse Finish.");break;default:throw new Error("Unknow Byte Flag:"+e[0])}}()}return function(){if(o.header="",l(6).forEach(function(e){o.header+=String.fromCharCode(e)}),!o.header.match(/^GIF8[79]a$/))throw new Error("GIF署名错误")}(),t=l(7),o.w=t[0]+(t[1]<<8),o.h=t[2]+(t[3]<<8),o.m=1&t[4]>>7,o.cr=7&t[4]>>4,o.s=1&t[4]>>3,o.pixel=7&t[4],o.bgIndex=t[5],o.radio=t[6],o.m&&(o.colorTable=l(3*(2<<o.pixel))),s(),r=void 0,o.frames.forEach(function(e){var t=document.createElement("canvas"),n=t.getContext("2d"),a=e.img.m?e.img.colorTable:o.colorTable;t.width=o.w,t.height=o.h;var i=n.getImageData(0,0,o.w,o.h);if(G(e.img.encodeBuf,e.img.encodeSize).decode().forEach(function(t,r){i.data[4*r]=a[3*t],i.data[4*r+1]=a[3*t+1],i.data[4*r+2]=a[3*t+2],i.data[4*r+3]=255,e.extension.t&&t==e.extension.tranIndex&&(i.data[4*r+3]=0)}),n.putImageData(i,e.img.x,e.img.y,0,0,e.img.w,e.img.h),i=n.getImageData(0,0,o.w,o.h),r)for(var l=0;l<i.data.length;l+=4)0==i.data[l+3]&&(i.data[l]=r.data[l],i.data[l+1]=r.data[l+1],i.data[l+2]=r.data[l+2],i.data[l+3]=r.data[l+3]);1!==e.extension.disp&&0!==e.extension.disp||(r=i),e.data=i.data}),{width:o.w,height:o.h,frames:o.frames.map(function(e){return{data:e.data,delay:e.extension.delay}})}}var G=function(e,t){var r=1<<t,n=r+1,a=t+1,o=[],i=0;function l(){o=[],a=t+1;for(var e=0;e<r;e++)o[e]=[e];o[r]=[],o[n]=null}function s(t){for(var r=0,n=0;n<t;n++)e[i>>3]&1<<(7&i)&&(r|=1<<n),i++;return r}return{decode:function(){for(var e=[],t=void 0,i=void 0;;)if(t=i,(i=s(a))!=r){if(i==n)break;if(i<o.length)t!==r&&o.push(o[t].concat(o[i][0]));else{if(i!==o.length)throw new Error("LZW解析出错");o.push(o[t].concat(o[t][0]))}e.push.apply(e,o[i]),o.length===1<<a&&a<12&&a++}else l();return e}}};function B(e,t){var r=document.createElement("canvas"),n=r.getContext("2d");r.width=t.naturalWidth,r.height=t.naturalHeight,n.putImageData(e,0,0);var a=document.createElement("canvas"),o=a.getContext("2d");a.width=t.width,a.height=t.height;var i=t.width/t.naturalWidth;return o.scale(i,i),o.drawImage(r,0,0),o.getImageData(0,0,t.width,t.height)}function H(e){for(var t=A(function(e){var t=e.indexOf(","),r=e.substring(5,t).split(";"),n=r[0]||"text/plain",a=e.substring(t+1),o=void 0;o=r.indexOf("base64")>=0?atob(a):unescape(a);for(var i=new Uint8Array(o.length),l=0;l<o.length;l++)i[l]=o.charCodeAt(l);return i.type=n,i}(e.src)),r=t.width,n=t.height,a=t.frames,o=[],i=0;i<a.length;i++){var l=new ImageData(a[i].data,r,n);o.push(B(l,e))}return o}function J(e,t){return"GIF"===d(t.type)?H(e):function(e){var t=document.createElement("canvas"),r=t.getContext("2d"),n=e.width/e.naturalWidth;return t.width=e.width,t.height=e.height,r.scale(n,n),r.drawImage(e,0,0),[r.getImageData(0,0,e.width,e.height)]}(e)}var M=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var V=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.setImageAndFile=function(t,r){e.setState({rawImage:t,file:r})},e.setTransformType=function(t){e.setState({transformType:t.target.value})},e.setTransformWidth=function(t){var r=t.target.value,n=r.length?parseInt(r,10):0;isNaN(n)||e.setState({transformWidth:n.toString()})},e.rescale=function(){e.imagePreview.current.scaleImageContainer()},e.transform=function(){var t=J(e.imagePreview.current.getCurrentImage(),e.state.file).map(function(e){return z(e)});e.setState({transformResult:t},function(){e.framesModal.current.open()})},e.state={transformWidth:"",transformResult:[],rawImage:null,file:null},e.imagePreview=a.a.createRef(),e.framesModal=a.a.createRef(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),M(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("h1",{className:"text-center"},"图片转字符画工具")),a.a.createElement(l,null),a.a.createElement(T,{className:"transform-settings-wrapper"},a.a.createElement(R,{label:"目标图片宽度:",labelFor:"transform-size"},a.a.createElement("input",{type:"number",id:"transform-size",className:"transform-size-input",name:"transform-size",value:this.state.transformWidth,onChange:this.setTransformWidth})),a.a.createElement(f,{onClick:this.rescale},"重新缩放"),a.a.createElement(f,{onClick:this.transform},"开始转化")),a.a.createElement(l,null),a.a.createElement(T,null,a.a.createElement(W,{file:this.state.file,image:this.state.rawImage,setImageAndFile:this.setImageAndFile,previewWidth:parseInt(this.state.transformWidth),ref:this.imagePreview})),a.a.createElement(P,{ref:this.framesModal,frames:this.state.transformResult,file:this.state.file}))}}]),t}();r("./src/style/normalize.css"),r("./src/style/index.css");i.a.render(a.a.createElement(V,null),document.getElementById("app"))},"./src/style/imagePreviewUpload.css":function(e,t,r){},"./src/style/index.css":function(e,t,r){},"./src/style/modal.css":function(e,t,r){},"./src/style/normalize.css":function(e,t,r){},"./src/style/transformSetting.css":function(e,t,r){}},[["./src/index.js","manifest","vendors"]]]);
//# sourceMappingURL=app.968986e0d96fed7768cc.js.map