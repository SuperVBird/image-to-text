(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"./src/index.js":function(e,t,r){"use strict";r.r(t);var a=r("./node_modules/react/index.js"),n=r.n(a),o=r("./node_modules/react-dom/index.js"),i=r.n(o);function l(){return n.a.createElement("div",{className:"divide"})}var s=r("./node_modules/classnames/index.js"),c=r.n(s),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};function u(e){var t=e.children,r=e.className,a=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["children","className"]);return r=c()(r,"btn"),n.a.createElement("button",f({},a,{type:"button",className:r}),t)}var h=r("./node_modules/gif.js/dist/gif.js"),m=r.n(h),p={PNG:/image\/png/,JPG:/image\/jpe?g/,GIF:/image\/gif/};function d(e){for(var t in p){if(p.hasOwnProperty(t))if(p[t].test(e))return t}}var g=6,v=12,b="@#&$%863!i1uazvno~;*^+-. ";var y="normal normal 400 normal "+v+"px / "+v+"px monospace, monospace",w="rgba(0,0,0,1)",E="rgba(255,255,255,1)";function x(e,t,r){var a=document.createElement("canvas");a.width=e.scrollWidth,a.height=e.scrollHeight;var n=a.getContext("2d");n.fillStyle=r.bgColor,n.fillRect(0,0,a.width,a.height),n.fillStyle=r.color,n.font=r.font;for(var o=0;o<t.length;o++)for(var i=0;i<t[o].length;i++)n.fillText(t[o][i],i*g,o*v);return a}var O={bgColor:E,color:w,font:y};var k={bgColor:E,color:w,font:y};function C(e){var t=e.div,r=e.frames,a=e.file,n=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["div","frames","file"]),o=d(a.type),i=document.createElement("a"),l=a.name.split(".");l[l.length-2]=l[l.length-2]+"-text",l=l.join("."),i.download=l,"GIF"===o?function(e,t,r,a){r=Object.assign({},O,r);var n=e.scrollWidth,o=e.scrollHeight,i=new m.a({quality:10,workers:2,workerScript:"./js/gif.worker.js",width:n,height:o});i.on("finished",function(e){a(e)});for(var l=0;l<t.length;l++){var s=x(e,t[l].text,r);i.addFrame(s,{delay:t[l].delay})}i.render()}(t,r,n,function(e){var t=URL.createObjectURL(e);i.href=t,i.click(),URL.revokeObjectURL(t)}):(i.href=function(e,t,r){return r=Object.assign({},k,r),x(e,t.text,r).toDataURL("image/png")}(t,r[0],n),i.click())}r("./src/style/modal.css");var I=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.savePic=function(){C({div:r.outputRef.current,frames:r.props.frames,file:r.props.file,color:r.state.color,bgColor:r.state.bgColor})},r.setColor=function(e){r.setState({color:e.target.value})},r.setBgColor=function(e){r.setState({bgColor:e.target.value})},r.close=function(e){e.preventDefault(),r.stop(),r.setState({open:!1})},r.open=function(){r.play(),r.setState({open:!0})},r.state={open:!1,color:"#000000",bgColor:"#ffffff",frameIndex:0},r.playTimer=null,r.outputRef=n.a.createRef(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.PureComponent),I(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"play",value:function(){var e=this;if(!(this.props.frames.length<=1)){!function t(){var r=e.props.frames[e.state.frameIndex].delay;e.playTimer=setTimeout(function(){var r=e.state.frameIndex+1;r===e.props.frames.length&&(r=0),e.setState({frameIndex:r},t)},r)}()}}},{key:"stop",value:function(){this.playTimer&&clearTimeout(this.playTimer)}},{key:"render",value:function(){var e=c()({modal:!0,open:this.state.open});return n.a.createElement("div",{className:e},n.a.createElement("div",{className:"modal-overlay"}),n.a.createElement("div",{className:"modal-box"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("a",{href:"#",className:"modal-close",onClick:this.close},"X"),n.a.createElement("h3",{className:"modal-title"},"图片转化结果")),n.a.createElement(l,null),n.a.createElement("div",{className:"output-options"},n.a.createElement("label",{htmlFor:"color"},"文字颜色:"),n.a.createElement("input",{type:"color",id:"color",name:"color",value:this.state.color,onChange:this.setColor}),n.a.createElement("label",{htmlFor:"color"},"背景颜色:"),n.a.createElement("input",{type:"color",id:"bgColor",name:"bgColor",value:this.state.bgColor,onChange:this.setBgColor}),n.a.createElement(u,{className:"save-btn",onClick:this.savePic},"保存为图片")),n.a.createElement(l,null),n.a.createElement("div",{className:"output-text-wrapper"},n.a.createElement("div",{id:"output-text-block",className:"output-text-block",style:{color:this.state.color,backgroundColor:this.state.bgColor},ref:this.outputRef},this.props.frames.length?this.props.frames[this.state.frameIndex].text.map(function(e,t){return n.a.createElement("pre",{key:t},e)}):null))))}}],[{key:"getDerivedStateFromProps",value:function(e){return e.file?{frameIndex:0}:null}}]),t}(),P=(r("./src/style/transformSetting.css"),function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}());var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.PureComponent),P(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"transform-setting"},this.props.label?n.a.createElement("label",{htmlFor:this.props.labelFor},this.props.label):null,this.props.children)}}]),t}();_.defaultProps={label:"",labelFor:""};var N=_,R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};function S(e){var t=e.children,r=e.className,a=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["children","className"]);return r=c()(r,"row"),n.a.createElement("div",R({},a,{className:r}),t)}r("./src/style/imagePreviewUpload.css");var T=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var F=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.size=function(){return{width:r.state.width,height:r.state.height}},r.dragEnter=function(e){e.preventDefault(),r.setState({isDragging:!0})},r.dragOver=function(e){e.preventDefault()},r.dragLeave=function(e){e.preventDefault(),r.setState({isDragging:!1})},r.drop=function(e){e.preventDefault(),r.setState({isDragging:!1});var t=e.dataTransfer.files[0];r.previewImage(t)},r.openFileInput=function(){r.fileUpload.current.click()},r.setFile=function(e){var t=e.target.files[0];t&&r.previewImage(t)},r.state={isDragging:!1,width:400,height:250},r.fileUpload=n.a.createRef(),r.currentImageRef=n.a.createRef(),r.componentRef=n.a.createRef(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),T(t,[{key:"getCurrentImage",value:function(){return this.currentImageRef.current}},{key:"previewImage",value:function(e){var t=this;if(function(e){for(var t in p)if(p.hasOwnProperty(t)&&p[t].test(e))return!0;return!1}(e.type)){var r=new FileReader;r.readAsDataURL(e),r.addEventListener("load",function(){var a=new Image;a.addEventListener("load",function(){t.scaleImageContainer(a),t.props.setImageAndFile(a,e)}),a.src=r.result})}else alert("不支持该格式的文件")}},{key:"scaleImageContainer",value:function(e){e||(e=this.props.image);var t=this.componentRef.current.parentElement,r=this.props.previewWidth;if(r){if(r>t.clientWidth)return void alert("超过容器大小！请重新输入图片宽度")}else r=t.clientWidth,e.width<r&&(r=e.width);var a=e.width/r,n=e.height/a;this.setState({width:r,height:n})}},{key:"render",value:function(){var e=c()("upload-image-block",{active:this.state.isDragging},this.props.className);return n.a.createElement("div",{onDragEnter:this.dragEnter,onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDrop:this.drop,onClick:this.openFileInput,className:e,style:{width:this.state.width,height:this.state.height},ref:this.componentRef},n.a.createElement("input",{type:"file",style:{display:"none"},accept:"image/*",ref:this.fileUpload,onChange:this.setFile}),n.a.createElement("span",{className:"upload-label"},"上传图片"),this.props.image?n.a.createElement("img",{ref:this.currentImageRef,src:this.props.image.src,className:"preview-image"}):null)}}]),t}();var D=255;function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=D/e.length;return function(r){var a=r/t>>0;return a>=e.length&&(a=e.length-1),e[a]}}function U(e){var t,r,a=new Uint8Array(e),n=0,o={header:"",w:0,h:0,m:0,cr:0,s:0,pixel:0,bgIndex:0,radio:1,colorTable:[],frames:[],comment:""},i=void 0;function l(e){return a.slice(n,n+=e)}function s(){var e=l(1);!function(){switch(e[0]){case 33:!function(){var e=l(1);switch(e[0]){case 255:if(11!=l(1)[0])throw new Error("解析出错");for(o.appVersion="",l(11).forEach(function(e){o.appVersion+=String.fromCharCode(e)});;){if(!(e=l(1))[0]){s();break}l(e[0])}break;case 249:if(4!==l(1)[0])throw new Error("解析出错");if(e=l(4),(i={}).extension={disp:7&e[0]>>2,i:1&e[0]>>1,t:1&e[0],delay:10*(e[1]+(e[2]<<8)),tranIndex:e[3]},o.frames.push(i),0!=l(1)[0])throw new Error("解析出错");s();break;case 254:(e=l(1))[0]&&(l(e[0]).forEach(function(e){o.comment+=String.fromCharCode(e)}),0==l(1)[0]&&s());break;default:console.log(e)}}();break;case 44:e=l(9),i.img={x:e[0]+(e[1]<<8),y:e[2]+(e[3]<<8),w:e[4]+(e[5]<<8),h:e[6]+(e[7]<<8),m:1&e[8]>>7,i:1&e[8]>>6,s:1&e[8]>>5,r:3&e[8]>>3,pixel:7&e[8],colorTable:[]},i.img.m&&(i.img.colorTable=l(3*(2<<i.img.pixel))),i.img.encodeSize=l(1)[0];for(var t=[];;){if(!(e=l(1))[0]){i.img.encodeBuf=t,s();break}l(e[0]).forEach(function(e){t.push(e)})}break;case 59:console.log("Parse Finish.");break;default:throw new Error("Unknow Byte Flag:"+e[0])}}()}return function(){if(o.header="",l(6).forEach(function(e){o.header+=String.fromCharCode(e)}),!o.header.match(/^GIF8[79]a$/))throw new Error("GIF署名错误")}(),t=l(7),o.w=t[0]+(t[1]<<8),o.h=t[2]+(t[3]<<8),o.m=1&t[4]>>7,o.cr=7&t[4]>>4,o.s=1&t[4]>>3,o.pixel=7&t[4],o.bgIndex=t[5],o.radio=t[6],o.m&&(o.colorTable=l(3*(2<<o.pixel))),s(),r=void 0,o.frames.forEach(function(e){var t=document.createElement("canvas"),a=t.getContext("2d"),n=e.img.m?e.img.colorTable:o.colorTable;t.width=o.w,t.height=o.h;var i=a.getImageData(0,0,o.w,o.h);if(L(e.img.encodeBuf,e.img.encodeSize).decode().forEach(function(t,r){i.data[4*r]=n[3*t],i.data[4*r+1]=n[3*t+1],i.data[4*r+2]=n[3*t+2],i.data[4*r+3]=255,e.extension.t&&t==e.extension.tranIndex&&(i.data[4*r+3]=0)}),a.putImageData(i,e.img.x,e.img.y,0,0,e.img.w,e.img.h),i=a.getImageData(0,0,o.w,o.h),r)for(var l=0;l<i.data.length;l+=4)0==i.data[l+3]&&(i.data[l]=r.data[l],i.data[l+1]=r.data[l+1],i.data[l+2]=r.data[l+2],i.data[l+3]=r.data[l+3]);1!==e.extension.disp&&0!==e.extension.disp||(r=i),e.data=i.data}),{width:o.w,height:o.h,frames:o.frames.map(function(e){return{data:e.data,delay:e.extension.delay}})}}var L=function(e,t){var r=1<<t,a=r+1,n=t+1,o=[],i=0;function l(){o=[],n=t+1;for(var e=0;e<r;e++)o[e]=[e];o[r]=[],o[a]=null}function s(t){for(var r=0,a=0;a<t;a++)e[i>>3]&1<<(7&i)&&(r|=1<<a),i++;return r}return{decode:function(){for(var e=[],t=void 0,i=void 0;;)if(t=i,(i=s(n))!=r){if(i==a)break;if(i<o.length)t!==r&&o.push(o[t].concat(o[i][0]));else{if(i!==o.length)throw new Error("LZW解析出错");o.push(o[t].concat(o[t][0]))}e.push.apply(e,o[i]),o.length===1<<n&&n<12&&n++}else l();return e}}};function z(e,t){var r=document.createElement("canvas"),a=r.getContext("2d");r.width=t.naturalWidth,r.height=t.naturalHeight,a.putImageData(e,0,0);var n=document.createElement("canvas"),o=n.getContext("2d");n.width=t.width,n.height=t.height;var i=t.width/t.naturalWidth;return o.scale(i,i),o.drawImage(r,0,0),o.getImageData(0,0,t.width,t.height)}function A(e){for(var t=U(function(e){var t=e.indexOf(","),r=e.substring(5,t).split(";"),a=r[0]||"text/plain",n=e.substring(t+1),o=void 0;o=r.indexOf("base64")>=0?atob(n):unescape(n);for(var i=new Uint8Array(o.length),l=0;l<o.length;l++)i[l]=o.charCodeAt(l);return i.type=a,i}(e.src)),r=t.width,a=t.height,n=t.frames,o=[],i=0;i<n.length;i++){var l=new ImageData(n[i].data,r,a);o.push({data:z(l,e),delay:n[i].delay})}return o}function G(e,t){return"GIF"===d(t.type)?A(e):function(e){var t=document.createElement("canvas"),r=t.getContext("2d"),a=e.width/e.naturalWidth;return t.width=e.width,t.height=e.height,r.scale(a,a),r.drawImage(e,0,0),[{data:r.getImageData(0,0,e.width,e.height),delay:null}]}(e)}var B=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var H=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.setImageAndFile=function(t,r){e.setState({rawImage:t,file:r})},e.setTransformType=function(t){e.setState({transformType:t.target.value})},e.setTransformPlaceholder=function(t){e.setState({transformPlaceholder:t.target.value})},e.setTransformWidth=function(t){var r=t.target.value,a=r.length?parseInt(r,10):0;isNaN(a)||e.setState({transformWidth:a.toString()})},e.rescale=function(){e.state.file&&e.imagePreview.current.scaleImageContainer()},e.transform=function(){var t=e.state.file;if(t){e.setState({isParsing:!0});var r=G(e.imagePreview.current.getCurrentImage(),t);r.forEach(function(t){t.text=function(e){for(var t,r,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W(),o=e.data,i=e.width,l=e.height,s=[],c=0;c<l;c+=v){for(var f="",u=0;u<i;u+=g){var h=4*(u+i*c);f+=n((t=o[h],r=o[h+1],a=o[h+2],(299*t+587*r+114*a+500)/1e3))}s.push(f)}return s}(t.data,W(e.state.transformPlaceholder))}),e.setState({transformResult:r},function(){e.framesModal.current.open()})}},e.state={transformWidth:"",transformResult:[],transformPlaceholder:b,rawImage:null,file:null},e.imagePreview=n.a.createRef(),e.framesModal=n.a.createRef(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),B(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("header",{className:"clear"},n.a.createElement("h1",{className:"text-center"},"图片转字符画工具")),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kainstar/image-to-text"},n.a.createElement("img",{style:{position:"absolute",top:0,right:0,border:0},src:"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png",alt:"Fork me on GitHub"})),n.a.createElement(l,null),n.a.createElement(S,{className:"transform-settings-wrapper"},n.a.createElement(N,{label:"目标图片宽度:",labelFor:"transform-size"},n.a.createElement("input",{type:"number",id:"transform-size",className:"transform-size-input",name:"transform-size",value:this.state.transformWidth,onChange:this.setTransformWidth})),n.a.createElement(u,{onClick:this.rescale},"重新缩放"),n.a.createElement(N,{label:"转换字符:",labelFor:"transform-placeholder"},n.a.createElement("input",{type:"text",id:"transform-placeholder",className:"transform-placeholder-input",name:"transform-placeholder",value:this.state.transformPlaceholder,onChange:this.setTransformPlaceholder})),n.a.createElement(u,{onClick:this.transform},"开始转化")),n.a.createElement(l,null),n.a.createElement(S,null,n.a.createElement(F,{file:this.state.file,image:this.state.rawImage,setImageAndFile:this.setImageAndFile,previewWidth:parseInt(this.state.transformWidth),ref:this.imagePreview})),n.a.createElement(j,{ref:this.framesModal,frames:this.state.transformResult,file:this.state.file}),n.a.createElement("p",{className:"helps"},"转化GIF或较大的图片时，可能会出现一定程度的卡顿，属于正常现象，请耐心等待。"),n.a.createElement("p",{className:"copyright text-center"},n.a.createElement("a",{href:"https://github.com/kainstar"},"Author: kainstar"),", ",n.a.createElement("a",{href:"https://github.com/kainstar/image-to-text"},"Project Repository")))}}]),t}();r("./src/style/normalize.css"),r("./src/style/index.css");i.a.render(n.a.createElement(H,null),document.getElementById("app"))},"./src/style/imagePreviewUpload.css":function(e,t,r){},"./src/style/index.css":function(e,t,r){},"./src/style/modal.css":function(e,t,r){},"./src/style/normalize.css":function(e,t,r){},"./src/style/transformSetting.css":function(e,t,r){}},[["./src/index.js","manifest","vendors"]]]);
//# sourceMappingURL=app.ba792f23fb0351bbbf69.js.map