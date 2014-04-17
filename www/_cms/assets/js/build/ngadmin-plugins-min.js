!function(a,b){"use strict";function c(){n.addClass(r)}function d(){n.removeClass(r)}function e(){n.addClass(s)}function f(a){return j(a)&&k(a.then)}function g(a){if(!j(a))throw new Error("Bootstrap configuration must be an object.");if(!l(a.module))throw new Error("'config.module' must be a string.");if(!j(a.resolve))throw new Error("'config.resolve' must be an object.")}function h(a,c){angular.element(b).ready(function(){angular.bootstrap(a,[c])})}function i(a){function b(a,b){var c;if(s.push(b),!k(a))throw new Error("Resolve for '"+b+"' is not a function.");if(c=a(q,p,o),!f(c))throw new Error("Resolve function for '"+b+"' must return a promise.");r.push(c)}function i(a){m(a,function(a,b){var c=a&&a.data?a.data:a;angular.module(n).constant(s[b],c)}),h(l,n)}var j=a||{},l=j.element,n=j.module,r=[],s=[];c(),g(j),m(j.resolve,b),p.all(r).then(i,e).finally(d)}var j=angular.isObject,k=angular.isFunction,l=angular.isString,m=angular.forEach,n=angular.element(b.body),o=angular.injector(["ng"]),p=o.get("$q"),q=o.get("$http"),r="deferred-bootstrap-loading",s="deferred-bootstrap-error";a.deferredBootstrapper={bootstrap:i}}(window,document),window.log=function(){if(log.history=log.history||[],log.history.push(arguments),this.console){var a,b=arguments;b.callee=b.callee.caller,a=[].slice.call(b),"object"==typeof console.log?log.apply.call(console.log,console,a):console.log.apply(console,a)}},window.plog=function(){for(var a=arguments,b="",c=0;c<a.length;c++)b+=c+" "+a[c]+", ";$("#debug")?$("#debug").text(b):console.log("plog: "+b)},window.echo=function(){for(var a=arguments,b="",c=0;c<a.length;c++)b+=c+" "+a[c]+", ";alert(b)},function(a){function b(){}for(var c,d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");c=d.pop();)a[c]=a[c]||b}(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());var MD5=function(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=Array(),y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()},BinaryFile=function(a,b,c){var d=a,e=b||0,f=0;this.getRawData=function(){return d},"string"==typeof a?(f=c||d.length,this.getByteAt=function(a){return 255&d.charCodeAt(a+e)},this.getBytesAt=function(a,b){for(var c=[],f=0;b>f;f++)c[f]=255&d.charCodeAt(a+f+e);return c}):"unknown"==typeof a&&(f=c||IEBinary_getLength(d),this.getByteAt=function(a){return IEBinary_getByteAt(d,a+e)},this.getBytesAt=function(a,b){return new VBArray(IEBinary_getBytesAt(d,a+e,b)).toArray()}),this.getLength=function(){return f},this.getSByteAt=function(a){var b=this.getByteAt(a);return b>127?b-256:b},this.getShortAt=function(a,b){var c=b?(this.getByteAt(a)<<8)+this.getByteAt(a+1):(this.getByteAt(a+1)<<8)+this.getByteAt(a);return 0>c&&(c+=65536),c},this.getSShortAt=function(a,b){var c=this.getShortAt(a,b);return c>32767?c-65536:c},this.getLongAt=function(a,b){var c=this.getByteAt(a),d=this.getByteAt(a+1),e=this.getByteAt(a+2),f=this.getByteAt(a+3),g=b?(((c<<8)+d<<8)+e<<8)+f:(((f<<8)+e<<8)+d<<8)+c;return 0>g&&(g+=4294967296),g},this.getSLongAt=function(a,b){var c=this.getLongAt(a,b);return c>2147483647?c-4294967296:c},this.getStringAt=function(a,b){for(var c=[],d=this.getBytesAt(a,b),e=0;b>e;e++)c[e]=String.fromCharCode(d[e]);return c.join("")},this.getCharAt=function(a){return String.fromCharCode(this.getByteAt(a))},this.toBase64=function(){return window.btoa(d)},this.fromBase64=function(a){d=window.atob(a)}},BinaryAjax=function(){function a(){var a=null;return window.ActiveXObject?a=new ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest&&(a=new XMLHttpRequest),a}function b(b,c,d){var e=a();e?(c&&("undefined"!=typeof e.onload?e.onload=function(){"200"==e.status?c(this):d&&d(),e=null}:e.onreadystatechange=function(){4==e.readyState&&("200"==e.status?c(this):d&&d(),e=null)}),e.open("HEAD",b,!0),e.send(null)):d&&d()}function c(b,c,d,e,f,g){var h=a();if(h){var i=0;e&&!f&&(i=e[0]);var j=0;e&&(j=e[1]-e[0]+1),c&&("undefined"!=typeof h.onload?h.onload=function(){"200"==h.status||"206"==h.status||"0"==h.status?(h.binaryResponse=new BinaryFile(h.responseText,i,j),h.fileSize=g||h.getResponseHeader("Content-Length"),c(h)):d&&d(),h=null}:h.onreadystatechange=function(){if(4==h.readyState){if("200"==h.status||"206"==h.status||"0"==h.status){var a={status:h.status,binaryResponse:new BinaryFile("unknown"==typeof h.responseBody?h.responseBody:h.responseText,i,j),fileSize:g||h.getResponseHeader("Content-Length")};c(a)}else d&&d();h=null}}),h.open("GET",b,!0),h.overrideMimeType&&h.overrideMimeType("text/plain; charset=x-user-defined"),e&&f&&h.setRequestHeader("Range","bytes="+e[0]+"-"+e[1]),h.setRequestHeader("If-Modified-Since","Sat, 1 Jan 1970 00:00:00 GMT"),h.send(null)}else d&&d()}return function(a,d,e,f){f?b(a,function(b){var g,h,i=parseInt(b.getResponseHeader("Content-Length"),10),j=b.getResponseHeader("Accept-Ranges");g=f[0],f[0]<0&&(g+=i),h=g+f[1]-1,c(a,d,e,[g,h],"bytes"==j,i)}):c(a,d,e)}}();document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n	IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\nEnd Function\r\nFunction IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n  Dim aBytes()\r\n  ReDim aBytes(iLength - 1)\r\n  For i = 0 To iLength - 1\r\n   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n  Next\r\n  IEBinary_getBytesAt = aBytes\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n	IEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n</script>\r\n");var EXIF=function(){function a(a){return!!a.exifdata}function b(a,b){BinaryAjax(a.src,function(d){var e=c(d.binaryResponse);a.exifdata=e||{},b&&b.call(a)})}function c(a){if(255!=a.getByteAt(0)||216!=a.getByteAt(1))return!1;for(var b,c=2,d=a.getLength();d>c;){if(255!=a.getByteAt(c))return l&&console.log("Not a valid marker at offset "+c+", found: "+a.getByteAt(c)),!1;if(b=a.getByteAt(c+1),22400==b)return l&&console.log("Found 0xFFE1 marker"),f(a,c+4,a.getShortAt(c+2,!0)-2);if(225==b)return l&&console.log("Found 0xFFE1 marker"),f(a,c+4,a.getShortAt(c+2,!0)-2);c+=2+a.getShortAt(c+2,!0)}}function d(a,b,c,d,f){var g,h,i,j=a.getShortAt(c,f),k={};for(i=0;j>i;i++)g=c+12*i+2,h=d[a.getShortAt(g,f)],!h&&l&&console.log("Unknown tag: "+a.getShortAt(g,f)),k[h]=e(a,g,b,c,f);return k}function e(a,b,c,d,e){var f,g,h,i,j,k,l=a.getShortAt(b+2,e),m=a.getLongAt(b+4,e),n=a.getLongAt(b+8,e)+c;switch(l){case 1:case 7:if(1==m)return a.getByteAt(b+8,e);for(f=m>4?n:b+8,g=[],i=0;m>i;i++)g[i]=a.getByteAt(f+i);return g;case 2:return f=m>4?n:b+8,a.getStringAt(f,m-1);case 3:if(1==m)return a.getShortAt(b+8,e);for(f=m>2?n:b+8,g=[],i=0;m>i;i++)g[i]=a.getShortAt(f+2*i,e);return g;case 4:if(1==m)return a.getLongAt(b+8,e);g=[];for(var i=0;m>i;i++)g[i]=a.getLongAt(n+4*i,e);return g;case 5:if(1==m)return j=a.getLongAt(n,e),k=a.getLongAt(n+4,e),h=new Number(j/k),h.numerator=j,h.denominator=k,h;for(g=[],i=0;m>i;i++)j=a.getLongAt(n+8*i,e),k=a.getLongAt(n+4+8*i,e),g[i]=new Number(j/k),g[i].numerator=j,g[i].denominator=k;return g;case 9:if(1==m)return a.getSLongAt(b+8,e);for(g=[],i=0;m>i;i++)g[i]=a.getSLongAt(n+4*i,e);return g;case 10:if(1==m)return a.getSLongAt(n,e)/a.getSLongAt(n+4,e);for(g=[],i=0;m>i;i++)g[i]=a.getSLongAt(n+8*i,e)/a.getSLongAt(n+4+8*i,e);return g}}function f(a,b){if("Exif"!=a.getStringAt(b,4))return l&&console.log("Not valid EXIF data! "+a.getStringAt(b,4)),!1;var c,e,f,g,h,i=b+6;if(18761==a.getShortAt(i))c=!1;else{if(19789!=a.getShortAt(i))return l&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;c=!0}if(42!=a.getShortAt(i+2,c))return l&&console.log("Not valid TIFF data! (no 0x002A)"),!1;if(8!=a.getLongAt(i+4,c))return l&&console.log("Not valid TIFF data! (First offset not 8)",a.getShortAt(i+4,c)),!1;if(e=d(a,i,i+8,n,c),e.ExifIFDPointer){g=d(a,i,i+e.ExifIFDPointer,m,c);for(f in g){switch(f){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":g[f]=p[f][g[f]];break;case"ExifVersion":case"FlashpixVersion":g[f]=String.fromCharCode(g[f][0],g[f][1],g[f][2],g[f][3]);break;case"ComponentsConfiguration":g[f]=p.Components[g[f][0]]+p.Components[g[f][1]]+p.Components[g[f][2]]+p.Components[g[f][3]]}e[f]=g[f]}}if(e.GPSInfoIFDPointer){h=d(a,i,i+e.GPSInfoIFDPointer,o,c);for(f in h){switch(f){case"GPSVersionID":h[f]=h[f][0]+"."+h[f][1]+"."+h[f][2]+"."+h[f][3]}e[f]=h[f]}}return e}function g(c,d){return c.complete?(a(c)?d&&d.call(c):b(c,d),!0):!1}function h(b,c){return a(b)?b.exifdata[c]:void 0}function i(b){if(!a(b))return{};var c,d=b.exifdata,e={};for(c in d)d.hasOwnProperty(c)&&(e[c]=d[c]);return e}function j(b){if(!a(b))return"";var c,d=b.exifdata,e="";for(c in d)d.hasOwnProperty(c)&&(e+="object"==typeof d[c]?d[c]instanceof Number?c+" : "+d[c]+" ["+d[c].numerator+"/"+d[c].denominator+"]\r\n":c+" : ["+d[c].length+" values]\r\n":c+" : "+d[c]+"\r\n");return e}function k(a){return c(a)}var l=!1,m={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},n={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},o={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},p={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};return{readFromBinaryFile:k,pretty:j,getTag:h,getAllTags:i,getData:g,Tags:m,TiffTags:n,GPSTags:o,StringValues:p}}();!function(a){function b(a,b){this.file=a,this.options=d.extend({},e,b),this._defaults=e,this._name=c,this.init()}var c="canvasResize",d={newsize:function(a,b,c,d,e){var f=e?"h":"";if(c&&a>c||d&&b>d){var g=a/b;(g>=1||0===d)&&c&&!e?(a=c,b=c/g>>0):e&&c/d>=g?(a=c,b=c/g>>0,f="w"):(a=d*g>>0,b=d)}return{width:a,height:b,cropped:f}},dataURLtoBlob:function(a){for(var b=a.split(",")[0].split(":")[1].split(";")[0],c=atob(a.split(",")[1]),d=new ArrayBuffer(c.length),e=new Uint8Array(d),f=0;f<c.length;f++)e[f]=c.charCodeAt(f);var g=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder;return g?(g=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder),g.append(d),g.getBlob(b)):g=new Blob([d],{type:b})},detectSubsampling:function(a){var b=a.width,c=a.height;if(b*c>1048576){var d=document.createElement("canvas");d.width=d.height=1;var e=d.getContext("2d");return e.drawImage(a,-b+1,0),0===e.getImageData(0,0,1,1).data[3]}return!1},rotate:function(a,b){var c={1:{90:6,180:3,270:8},2:{90:7,180:4,270:5},3:{90:8,180:1,270:6},4:{90:5,180:2,270:7},5:{90:2,180:7,270:4},6:{90:3,180:8,270:1},7:{90:4,180:5,270:2},8:{90:1,180:6,270:3}};return c[a][b]?c[a][b]:a},transformCoordinate:function(a,b,c,d){switch(d){case 5:case 6:case 7:case 8:a.width=c,a.height=b;break;default:a.width=b,a.height=c}var e=a.getContext("2d");switch(d){case 1:break;case 2:e.translate(b,0),e.scale(-1,1);break;case 3:e.translate(b,c),e.rotate(Math.PI);break;case 4:e.translate(0,c),e.scale(1,-1);break;case 5:e.rotate(.5*Math.PI),e.scale(1,-1);break;case 6:e.rotate(.5*Math.PI),e.translate(0,-c);break;case 7:e.rotate(.5*Math.PI),e.translate(b,-c),e.scale(-1,1);break;case 8:e.rotate(-.5*Math.PI),e.translate(-b,0)}},detectVerticalSquash:function(a,b,c){var d=document.createElement("canvas");d.width=1,d.height=c;var e=d.getContext("2d");e.drawImage(a,0,0);for(var f=e.getImageData(0,0,1,c).data,g=0,h=c,i=c;i>g;){var j=f[4*(i-1)+3];0===j?h=i:g=i,i=h+g>>1}var k=i/c;return 0===k?1:k},callback:function(a){return a},extend:function(){var a=arguments[0]||{},b=1,c=arguments.length,e=!1;a.constructor===Boolean&&(e=a,a=arguments[1]||{}),1===c&&(a=this,b=0);for(var f;c>b;b++)if(null!==(f=arguments[b]))for(var g in f)a!==f[g]&&(e&&"object"==typeof f[g]&&a[g]?d.extend(a[g],f[g]):void 0!==f[g]&&(a[g]=f[g]));return a}},e={width:300,height:0,crop:!1,quality:80,rotate:0,callback:d.callback};b.prototype={init:function(){var a=this,b=this.file,c=new FileReader;c.onloadend=function(c){var e=c.target.result,f=atob(e.split(",")[1]),g=new BinaryFile(f,0,f.length),h=EXIF.readFromBinaryFile(g),i=new Image;i.onload=function(){var c=h.Orientation||1;c=d.rotate(c,a.options.rotate);var e=c>=5&&8>=c?d.newsize(i.height,i.width,a.options.width,a.options.height,a.options.crop):d.newsize(i.width,i.height,a.options.width,a.options.height,a.options.crop),f=i.width,g=i.height,j=e.width,k=e.height,l=document.createElement("canvas"),m=l.getContext("2d");m.save(),d.transformCoordinate(l,j,k,c),d.detectSubsampling(i)&&(f/=2,g/=2);var n=1024,o=document.createElement("canvas");o.width=o.height=n;for(var p=o.getContext("2d"),q=d.detectVerticalSquash(i,f,g),r=0;g>r;){for(var s=r+n>g?g-r:n,t=0;f>t;){var u=t+n>f?f-t:n;p.clearRect(0,0,n,n),p.drawImage(i,-t,-r);var v=Math.floor(t*j/f),w=Math.ceil(u*j/f),x=Math.floor(r*k/g/q),y=Math.ceil(s*k/g/q);m.drawImage(o,0,0,u,s,v,x,w,y),t+=n}r+=n}m.restore(),o=p=null;var z=document.createElement("canvas");z.width="h"===e.cropped?k:j,z.height="w"===e.cropped?j:k;var A="h"===e.cropped?.5*(k-j):0,B="w"===e.cropped?.5*(j-k):0;if(newctx=z.getContext("2d"),newctx.drawImage(l,A,B,j,k),console.log(b,b.type),"image/png"===b.type)var C=z.toDataURL(b.type);else var C=z.toDataURL("image/jpeg",.01*a.options.quality);a.options.callback(C,z.width,z.height)},i.src=e},c.readAsDataURL(b)}},a[c]=function(a,c){return"string"==typeof a?d[a](c):void new b(a,c)}}(window);