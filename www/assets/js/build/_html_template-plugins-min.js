window.log=function(){if(log.history=log.history||[],log.history.push(arguments),this.console){var a,b=arguments;b.callee=b.callee.caller,a=[].slice.call(b),"object"==typeof console.log?log.apply.call(console.log,console,a):console.log.apply(console,a)}},window.plog=function(){for(var a=arguments,b="",c=0;c<a.length;c++)b+=c+" "+a[c]+", ";$("#debug")?$("#debug").text(b):console.log("plog: "+b)},window.echo=function(){for(var a=arguments,b="",c=0;c<a.length;c++)b+=c+" "+a[c]+", ";alert(b)},function(a){function b(){}for(var c,d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");c=d.pop();)a[c]=a[c]||b}(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());