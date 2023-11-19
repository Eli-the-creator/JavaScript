var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},o=n.parcelRequire7e89;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in i){var n=i[t];delete i[t];var o={id:t,exports:{}};return e[t]=o,n.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,n){i[t]=n},n.parcelRequire7e89=o),o.register("g8yc8",function(t,e){(function(){/** Error message constants. */var i,o="Expected a function",r="__lodash_hash_undefined__",s="__lodash_placeholder__",a=1/0,u=0/0,h=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],l="[object Arguments]",c="[object Array]",f="[object Boolean]",_="[object Date]",p="[object Error]",d="[object Function]",m="[object GeneratorFunction]",v="[object Map]",g="[object Number]",y="[object Object]",x="[object Promise]",w="[object RegExp]",b="[object Set]",P="[object String]",T="[object Symbol]",z="[object WeakMap]",M="[object ArrayBuffer]",C="[object DataView]",S="[object Float32Array]",k="[object Float64Array]",E="[object Int8Array]",A="[object Int16Array]",O="[object Int32Array]",Z="[object Uint8Array]",I="[object Uint8ClampedArray]",B="[object Uint16Array]",R="[object Uint32Array]",j=/\b__p \+= '';/g,N=/\b(__p \+=) '' \+/g,D=/(__e\(.*?\)|\b__t\)) \+\n'';/g,W=/&(?:amp|lt|gt|quot|#39);/g,F=/[&<>"']/g,H=RegExp(W.source),U=RegExp(F.source),q=/<%-([\s\S]+?)%>/g,V=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/,$=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,J=/[\\^$.*+?()[\]{}|]/g,X=RegExp(J.source),Q=/^\s+/,tt=/\s/,tn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,te=/\{\n\/\* \[wrapped with (.+)\] \*/,ti=/,? & /,to=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tr=/[()=,{}\[\]\/\s]/,ts=/\\(\\)?/g,ta=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,tu=/\w*$/,th=/^[-+]0x[0-9a-f]+$/i,tl=/^0b[01]+$/i,tc=/^\[object .+?Constructor\]$/,tf=/^0o[0-7]+$/i,t_=/^(?:0|[1-9]\d*)$/,tp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,td=/($^)/,tm=/['\n\r\u2028\u2029\\]/g,tv="\ud800-\udfff",tg="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",ty="\\u2700-\\u27bf",tx="a-z\\xdf-\\xf6\\xf8-\\xff",tw="A-Z\\xc0-\\xd6\\xd8-\\xde",tb="\\ufe0e\\ufe0f",tL="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tP="['’]",tT="["+tL+"]",tz="["+tg+"]",tM="["+tx+"]",tC="[^"+tv+tL+"\\d+"+ty+tx+tw+"]",tS="\ud83c[\udffb-\udfff]",tk="[^"+tv+"]",tE="(?:\ud83c[\udde6-\uddff]){2}",tA="[\ud800-\udbff][\udc00-\udfff]",tO="["+tw+"]",tZ="\\u200d",tI="(?:"+tM+"|"+tC+")",tB="(?:"+tP+"(?:d|ll|m|re|s|t|ve))?",tR="(?:"+tP+"(?:D|LL|M|RE|S|T|VE))?",tj="(?:"+tz+"|"+tS+")?",tN="["+tb+"]?",tD="(?:"+tZ+"(?:"+[tk,tE,tA].join("|")+")"+tN+tj+")*",tW=tN+tj+tD,tF="(?:"+["["+ty+"]",tE,tA].join("|")+")"+tW,tH="(?:"+[tk+tz+"?",tz,tE,tA,"["+tv+"]"].join("|")+")",tU=RegExp(tP,"g"),tq=RegExp(tz,"g"),tV=RegExp(tS+"(?="+tS+")|"+tH+tW,"g"),tG=RegExp([tO+"?"+tM+"+"+tB+"(?="+[tT,tO,"$"].join("|")+")","(?:"+tO+"|"+tC+")+"+tR+"(?="+[tT,tO+tI,"$"].join("|")+")",tO+"?"+tI+"+"+tB,tO+"+"+tR,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",tF].join("|"),"g"),tK=RegExp("["+tZ+tv+tg+tb+"]"),tY=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,t$=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tJ=-1,tX={};tX[S]=tX[k]=tX[E]=tX[A]=tX[O]=tX[Z]=tX[I]=tX[B]=tX[R]=!0,tX[l]=tX[c]=tX[M]=tX[f]=tX[C]=tX[_]=tX[p]=tX[d]=tX[v]=tX[g]=tX[y]=tX[w]=tX[b]=tX[P]=tX[z]=!1;/** Used to identify `toStringTag` values supported by `_.clone`. */var tQ={};tQ[l]=tQ[c]=tQ[M]=tQ[C]=tQ[f]=tQ[_]=tQ[S]=tQ[k]=tQ[E]=tQ[A]=tQ[O]=tQ[v]=tQ[g]=tQ[y]=tQ[w]=tQ[b]=tQ[P]=tQ[T]=tQ[Z]=tQ[I]=tQ[B]=tQ[R]=!0,tQ[p]=tQ[d]=tQ[z]=!1;/** Used to escape characters for inclusion in compiled string literals. */var t0={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},t1=parseFloat,t2=parseInt,t3="object"==typeof n&&n&&n.Object===Object&&n,t9="object"==typeof self&&self&&self.Object===Object&&self,t4=t3||t9||Function("return this")(),t8=e&&!e.nodeType&&e,t5=t8&&t&&!t.nodeType&&t,t7=t5&&t5.exports===t8,t6=t7&&t3.process,nt=function(){try{// Use `util.types` for Node.js 10+.
var t=t5&&t5.require&&t5.require("util").types;if(t)return t;// Legacy `process.binding('util')` for Node.js < 10.
return t6&&t6.binding&&t6.binding("util")}catch(t){}}(),nn=nt&&nt.isArrayBuffer,ne=nt&&nt.isDate,ni=nt&&nt.isMap,no=nt&&nt.isRegExp,nr=nt&&nt.isSet,ns=nt&&nt.isTypedArray;/*--------------------------------------------------------------------------*//**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */function na(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */function nu(t,n,e,i){for(var o=-1,r=null==t?0:t.length;++o<r;){var s=t[o];n(i,s,e(s),t)}return i}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function nh(t,n){for(var e=-1,i=null==t?0:t.length;++e<i&&!1!==n(t[e],e,t););return t}/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */function nl(t,n){for(var e=-1,i=null==t?0:t.length;++e<i;)if(!n(t[e],e,t))return!1;return!0}/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */function nc(t,n){for(var e=-1,i=null==t?0:t.length,o=0,r=[];++e<i;){var s=t[e];n(s,e,t)&&(r[o++]=s)}return r}/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function nf(t,n){return!!(null==t?0:t.length)&&nb(t,n,0)>-1}/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function n_(t,n,e){for(var i=-1,o=null==t?0:t.length;++i<o;)if(e(n,t[i]))return!0;return!1}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function np(t,n){for(var e=-1,i=null==t?0:t.length,o=Array(i);++e<i;)o[e]=n(t[e],e,t);return o}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */function nd(t,n){for(var e=-1,i=n.length,o=t.length;++e<i;)t[o+e]=n[e];return t}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function nm(t,n,e,i){var o=-1,r=null==t?0:t.length;for(i&&r&&(e=t[++o]);++o<r;)e=n(e,t[o],o,t);return e}/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function nv(t,n,e,i){var o=null==t?0:t.length;for(i&&o&&(e=t[--o]);o--;)e=n(e,t[o],o,t);return e}/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */function ng(t,n){for(var e=-1,i=null==t?0:t.length;++e<i;)if(n(t[e],e,t))return!0;return!1}/**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */var ny=nz("length");/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */function nx(t,n,e){var i;return e(t,function(t,e,o){if(n(t,e,o))return i=e,!1}),i}/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function nw(t,n,e,i){for(var o=t.length,r=e+(i?1:-1);i?r--:++r<o;)if(n(t[r],r,t))return r;return -1}/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function nb(t,n,e){return n==n?/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function(t,n,e){for(var i=e-1,o=t.length;++i<o;)if(t[i]===n)return i;return -1}(t,n,e):nw(t,nP,e)}/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function nL(t,n,e,i){for(var o=e-1,r=t.length;++o<r;)if(i(t[o],n))return o;return -1}/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */function nP(t){return t!=t}/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */function nT(t,n){var e=null==t?0:t.length;return e?nS(t,n)/e:u}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function nz(t){return function(n){return null==n?i:n[t]}}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function nM(t){return function(n){return null==t?i:t[n]}}/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */function nC(t,n,e,i,o){return o(t,function(t,o,r){e=i?(i=!1,t):n(e,t,o,r)}),e}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */function nS(t,n){for(var e,o=-1,r=t.length;++o<r;){var s=n(t[o]);s!==i&&(e=e===i?s:e+s)}return e}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function nk(t,n){for(var e=-1,i=Array(t);++e<t;)i[e]=n(e);return i}/**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */function nE(t){return t?t.slice(0,nG(t)+1).replace(Q,""):t}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function nA(t){return function(n){return t(n)}}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function nO(t,n){return np(n,function(n){return t[n]})}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function nZ(t,n){return t.has(n)}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function nI(t,n){for(var e=-1,i=t.length;++e<i&&nb(n,t[e],0)>-1;);return e}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function nB(t,n){for(var e=t.length;e--&&nb(n,t[e],0)>-1;);return e}/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var nR=nM({// Latin-1 Supplement block.
À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",// Latin Extended-A block.
Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),nj=nM({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function nN(t){return"\\"+t0[t]}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function nD(t){return tK.test(t)}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function nW(t){var n=-1,e=Array(t.size);return t.forEach(function(t,i){e[++n]=[i,t]}),e}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function nF(t,n){return function(e){return t(n(e))}}/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */function nH(t,n){for(var e=-1,i=t.length,o=0,r=[];++e<i;){var a=t[e];(a===n||a===s)&&(t[e]=s,r[o++]=e)}return r}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function nU(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function nq(t){return nD(t)?/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */function(t){for(var n=tV.lastIndex=0;tV.test(t);)++n;return n}(t):ny(t)}/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function nV(t){return nD(t)?t.match(tV)||[]:t.split("")}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */function nG(t){for(var n=t.length;n--&&tt.test(t.charAt(n)););return n}/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var nK=nM({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),nY=function t(n){/** Built-in constructor references. */var e,tt,tv,tg,ty=(n=null==n?t4:nY.defaults(t4.Object(),n,nY.pick(t4,t$))).Array,tx=n.Date,tw=n.Error,tb=n.Function,tL=n.Math,tP=n.Object,tT=n.RegExp,tz=n.String,tM=n.TypeError,tC=ty.prototype,tS=tb.prototype,tk=tP.prototype,tE=n["__core-js_shared__"],tA=tS.toString,tO=tk.hasOwnProperty,tZ=0,tI=(e=/[^.]+$/.exec(tE&&tE.keys&&tE.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"",tB=tk.toString,tR=tA.call(tP),tj=t4._,tN=tT("^"+tA.call(tO).replace(J,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tD=t7?n.Buffer:i,tW=n.Symbol,tF=n.Uint8Array,tH=tD?tD.allocUnsafe:i,tV=nF(tP.getPrototypeOf,tP),tK=tP.create,t0=tk.propertyIsEnumerable,t3=tC.splice,t9=tW?tW.isConcatSpreadable:i,t8=tW?tW.iterator:i,t5=tW?tW.toStringTag:i,t6=function(){try{var t=od(tP,"defineProperty");return t({},"",{}),t}catch(t){}}(),nt=n.clearTimeout!==t4.clearTimeout&&n.clearTimeout,ny=tx&&tx.now!==t4.Date.now&&tx.now,nM=n.setTimeout!==t4.setTimeout&&n.setTimeout,n$=tL.ceil,nJ=tL.floor,nX=tP.getOwnPropertySymbols,nQ=tD?tD.isBuffer:i,n0=n.isFinite,n1=tC.join,n2=nF(tP.keys,tP),n3=tL.max,n9=tL.min,n4=tx.now,n8=n.parseInt,n5=tL.random,n7=tC.reverse,n6=od(n,"DataView"),et=od(n,"Map"),en=od(n,"Promise"),ee=od(n,"Set"),ei=od(n,"WeakMap"),eo=od(tP,"create"),er=ei&&new ei,es={},ea=oD(n6),eu=oD(et),eh=oD(en),el=oD(ee),ec=oD(ei),ef=tW?tW.prototype:i,e_=ef?ef.valueOf:i,ep=ef?ef.toString:i;/*------------------------------------------------------------------------*//**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */function ed(t){if(rG(t)&&!rB(t)&&!(t instanceof ey)){if(t instanceof eg)return t;if(tO.call(t,"__wrapped__"))return oW(t)}return new eg(t)}/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */var em=function(){function t(){}return function(n){if(!rV(n))return{};if(tK)return tK(n);t.prototype=n;var e=new t;return t.prototype=i,e}}();/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function ev(){// No operation performed.
}/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */function eg(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}/*------------------------------------------------------------------------*//**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */function ey(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}/*------------------------------------------------------------------------*//**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ex(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}/*------------------------------------------------------------------------*//**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ew(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}/*------------------------------------------------------------------------*//**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function eb(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}/*------------------------------------------------------------------------*//**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */function eL(t){var n=-1,e=null==t?0:t.length;for(this.__data__=new eb;++n<e;)this.add(t[n])}/*------------------------------------------------------------------------*//**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function eP(t){var n=this.__data__=new ew(t);this.size=n.size}/*------------------------------------------------------------------------*//**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */function eT(t,n){var e=rB(t),i=!e&&rI(t),o=!e&&!i&&rD(t),r=!e&&!i&&!o&&r1(t),s=e||i||o||r,a=s?nk(t.length,tz):[],u=a.length;for(var h in t)(n||tO.call(t,h))&&!(s&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==h||// Node.js 0.10 has enumerable non-index properties on buffers.
o&&("offset"==h||"parent"==h)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
r&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||// Skip index properties.
ob(h,u)))&&a.push(h);return a}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */function ez(t){var n=t.length;return n?t[ic(0,n-1)]:i}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function eM(t,n,e){(e===i||rA(t[n],e))&&(e!==i||n in t)||eA(t,n,e)}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function eC(t,n,e){var o=t[n];tO.call(t,n)&&rA(o,e)&&(e!==i||n in t)||eA(t,n,e)}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function eS(t,n){for(var e=t.length;e--;)if(rA(t[e][0],n))return e;return -1}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function ek(t,n,e,i){return eN(t,function(t,o,r){n(i,t,e(t),r)}),i}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function eE(t,n){return t&&iU(n,s_(n),t)}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function eA(t,n,e){"__proto__"==n&&t6?t6(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */function eO(t,n){for(var e=-1,o=n.length,r=ty(o),s=null==t;++e<o;)r[e]=s?i:su(t,n[e]);return r}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */function eZ(t,n,e){return t==t&&(e!==i&&(t=t<=e?t:e),n!==i&&(t=t>=n?t:n)),t}/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */function eI(t,n,e,o,r,s){var a,u=1&n,h=2&n,c=4&n;if(e&&(a=r?e(t,o,r,s):e(t)),a!==i)return a;if(!rV(t))return t;var p=rB(t);if(p){if(x=t.length,z=new t.constructor(x),x&&"string"==typeof t[0]&&tO.call(t,"index")&&(z.index=t.index,z.input=t.input),a=z,!u)return iH(t,a)}else{var x,z,j,N,D,W=og(t),F=W==d||W==m;if(rD(t))return iR(t,u);if(W==y||W==l||F&&!r){if(a=h||F?{}:ox(t),!u)return h?(j=(D=a)&&iU(t,sp(t),D),iU(t,ov(t),j)):(N=eE(a,t),iU(t,om(t),N))}else{if(!tQ[W])return r?t:{};a=/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */function(t,n,e){var i,o,r=t.constructor;switch(n){case M:return ij(t);case f:case _:return new r(+t);case C:return i=e?ij(t.buffer):t.buffer,new t.constructor(i,t.byteOffset,t.byteLength);case S:case k:case E:case A:case O:case Z:case I:case B:case R:return iN(t,e);case v:return new r;case g:case P:return new r(t);case w:return(o=new t.constructor(t.source,tu.exec(t))).lastIndex=t.lastIndex,o;case b:return new r;case T:return e_?tP(e_.call(t)):{}}}(t,W,u)}}// Check for circular references and return its corresponding clone.
s||(s=new eP);var H=s.get(t);if(H)return H;s.set(t,a),rX(t)?t.forEach(function(i){a.add(eI(i,n,e,i,t,s))}):rK(t)&&t.forEach(function(i,o){a.set(o,eI(i,n,e,o,t,s))});var U=c?h?ou:oa:h?sp:s_,q=p?i:U(t);return nh(q||t,function(i,o){q&&(i=t[o=i]),// Recursively populate clone (susceptible to call stack limits).
eC(a,o,eI(i,n,e,o,t,s))}),a}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */function eB(t,n,e){var o=e.length;if(null==t)return!o;for(t=tP(t);o--;){var r=e[o],s=n[r],a=t[r];if(a===i&&!(r in t)||!s(a))return!1}return!0}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */function eR(t,n,e){if("function"!=typeof t)throw new tM(o);return oO(function(){t.apply(i,e)},n)}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */function ej(t,n,e,i){var o=-1,r=nf,s=!0,a=t.length,u=[],h=n.length;if(!a)return u;e&&(n=np(n,nA(e))),i?(r=n_,s=!1):n.length>=200&&(r=nZ,s=!1,n=new eL(n));t:for(;++o<a;){var l=t[o],c=null==e?l:e(l);if(l=i||0!==l?l:0,s&&c==c){for(var f=h;f--;)if(n[f]===c)continue t;u.push(l)}else r(n,c,i)||u.push(l)}return u}/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */ed.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */escape:q,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */evaluate:V,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */interpolate:G,/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */variable:"",/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */imports:{/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */_:ed}},// Ensure wrappers are instances of `baseLodash`.
ed.prototype=ev.prototype,ed.prototype.constructor=ed,eg.prototype=em(ev.prototype),eg.prototype.constructor=eg,// Ensure `LazyWrapper` is an instance of `baseLodash`.
ey.prototype=em(ev.prototype),ey.prototype.constructor=ey,// Add methods to `Hash`.
ex.prototype.clear=/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */function(){this.__data__=eo?eo(null):{},this.size=0},ex.prototype.delete=/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},ex.prototype.get=/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(t){var n=this.__data__;if(eo){var e=n[t];return e===r?i:e}return tO.call(n,t)?n[t]:i},ex.prototype.has=/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(t){var n=this.__data__;return eo?n[t]!==i:tO.call(n,t)},ex.prototype.set=/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=eo&&n===i?r:n,this},// Add methods to `ListCache`.
ew.prototype.clear=/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */function(){this.__data__=[],this.size=0},ew.prototype.delete=/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(t){var n=this.__data__,e=eS(n,t);return!(e<0)&&(e==n.length-1?n.pop():t3.call(n,e,1),--this.size,!0)},ew.prototype.get=/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(t){var n=this.__data__,e=eS(n,t);return e<0?i:n[e][1]},ew.prototype.has=/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(t){return eS(this.__data__,t)>-1},ew.prototype.set=/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */function(t,n){var e=this.__data__,i=eS(e,t);return i<0?(++this.size,e.push([t,n])):e[i][1]=n,this},// Add methods to `MapCache`.
eb.prototype.clear=/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */function(){this.size=0,this.__data__={hash:new ex,map:new(et||ew),string:new ex}},eb.prototype.delete=/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(t){var n=o_(this,t).delete(t);return this.size-=n?1:0,n},eb.prototype.get=/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(t){return o_(this,t).get(t)},eb.prototype.has=/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(t){return o_(this,t).has(t)},eb.prototype.set=/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */function(t,n){var e=o_(this,t),i=e.size;return e.set(t,n),this.size+=e.size==i?0:1,this},// Add methods to `SetCache`.
eL.prototype.add=eL.prototype.push=/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */function(t){return this.__data__.set(t,r),this},eL.prototype.has=/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function(t){return this.__data__.has(t)},// Add methods to `Stack`.
eP.prototype.clear=/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */function(){this.__data__=new ew,this.size=0},eP.prototype.delete=/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e},eP.prototype.get=/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(t){return this.__data__.get(t)},eP.prototype.has=/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(t){return this.__data__.has(t)},eP.prototype.set=/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */function(t,n){var e=this.__data__;if(e instanceof ew){var i=e.__data__;if(!et||i.length<199)return i.push([t,n]),this.size=++e.size,this;e=this.__data__=new eb(i)}return e.set(t,n),this.size=e.size,this};/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var eN=iG(eG),eD=iG(eK,!0);/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */function eW(t,n){var e=!0;return eN(t,function(t,i,o){return e=!!n(t,i,o)}),e}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */function eF(t,n,e){for(var o=-1,r=t.length;++o<r;){var s=t[o],a=n(s);if(null!=a&&(u===i?a==a&&!r0(a):e(a,u)))var u=a,h=s}return h}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function eH(t,n){var e=[];return eN(t,function(t,i,o){n(t,i,o)&&e.push(t)}),e}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */function eU(t,n,e,i,o){var r=-1,s=t.length;for(e||(e=ow),o||(o=[]);++r<s;){var a=t[r];n>0&&e(a)?n>1?eU(a,n-1,e,i,o):nd(o,a):i||(o[o.length]=a)}return o}/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var eq=iK(),eV=iK(!0);/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function eG(t,n){return t&&eq(t,n,s_)}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function eK(t,n){return t&&eV(t,n,s_)}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */function eY(t,n){return nc(n,function(n){return rH(t[n])})}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */function e$(t,n){n=iZ(n,t);for(var e=0,o=n.length;null!=t&&e<o;)t=t[oN(n[e++])];return e&&e==o?t:i}/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */function eJ(t,n,e){var i=n(t);return rB(t)?i:nd(i,e(t))}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */function eX(t){return null==t?t===i?"[object Undefined]":"[object Null]":t5&&t5 in tP(t)?/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */function(t){var n=tO.call(t,t5),e=t[t5];try{t[t5]=i;var o=!0}catch(t){}var r=tB.call(t);return o&&(n?t[t5]=e:delete t[t5]),r}(t):tB.call(t)}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */function eQ(t,n){return t>n}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function e0(t,n){return null!=t&&tO.call(t,n)}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function e1(t,n){return null!=t&&n in tP(t)}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */function e2(t,n,e){for(var o=e?n_:nf,r=t[0].length,s=t.length,a=s,u=ty(s),h=1/0,l=[];a--;){var c=t[a];a&&n&&(c=np(c,nA(n))),h=n9(c.length,h),u[a]=!e&&(n||r>=120&&c.length>=120)?new eL(a&&c):i}c=t[0];var f=-1,_=u[0];t:for(;++f<r&&l.length<h;){var p=c[f],d=n?n(p):p;if(p=e||0!==p?p:0,!(_?nZ(_,d):o(l,d,e))){for(a=s;--a;){var m=u[a];if(!(m?nZ(m,d):o(t[a],d,e)))continue t}_&&_.push(d),l.push(p)}}return l}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */function e3(t,n,e){n=iZ(n,t);var o=null==(t=ok(t,n))?t:t[oN(oX(n))];return null==o?i:na(o,t,e)}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function e9(t){return rG(t)&&eX(t)==l}/**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */function e4(t,n,e,o,r){return t===n||(null!=t&&null!=n&&(rG(t)||rG(n))?/**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function(t,n,e,o,r,s){var a=rB(t),u=rB(n),h=a?c:og(t),d=u?c:og(n);h=h==l?y:h,d=d==l?y:d;var m=h==y,x=d==y,z=h==d;if(z&&rD(t)){if(!rD(n))return!1;a=!0,m=!1}if(z&&!m)return s||(s=new eP),a||r1(t)?or(t,n,e,o,r,s):/**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function(t,n,e,i,o,r,s){switch(e){case C:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)break;t=t.buffer,n=n.buffer;case M:if(t.byteLength!=n.byteLength||!r(new tF(t),new tF(n)))break;return!0;case f:case _:case g:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return rA(+t,+n);case p:return t.name==n.name&&t.message==n.message;case w:case P:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return t==n+"";case v:var a=nW;case b:var u=1&i;if(a||(a=nU),t.size!=n.size&&!u)break;// Assume cyclic values are equal.
var h=s.get(t);if(h)return h==n;i|=2,// Recursively compare objects (susceptible to call stack limits).
s.set(t,n);var l=or(a(t),a(n),i,o,r,s);return s.delete(t),l;case T:if(e_)return e_.call(t)==e_.call(n)}return!1}(t,n,h,e,o,r,s);if(!(1&e)){var S=m&&tO.call(t,"__wrapped__"),k=x&&tO.call(n,"__wrapped__");if(S||k){var E=S?t.value():t,A=k?n.value():n;return s||(s=new eP),r(E,A,e,o,s)}}return!!z&&(s||(s=new eP),/**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function(t,n,e,o,r,s){var a=1&e,u=oa(t),h=u.length;if(h!=oa(n).length&&!a)return!1;for(var l=h;l--;){var c=u[l];if(!(a?c in n:tO.call(n,c)))return!1}// Check that cyclic values are equal.
var f=s.get(t),_=s.get(n);if(f&&_)return f==n&&_==t;var p=!0;s.set(t,n),s.set(n,t);for(var d=a;++l<h;){var m=t[c=u[l]],v=n[c];if(o)var g=a?o(v,m,c,n,t,s):o(m,v,c,t,n,s);// Recursively compare objects (susceptible to call stack limits).
if(!(g===i?m===v||r(m,v,e,o,s):g)){p=!1;break}d||(d="constructor"==c)}if(p&&!d){var y=t.constructor,x=n.constructor;y!=x&&"constructor"in t&&"constructor"in n&&!("function"==typeof y&&y instanceof y&&"function"==typeof x&&x instanceof x)&&(p=!1)}return s.delete(t),s.delete(n),p}(t,n,e,o,r,s))}(t,n,e,o,e4,r):t!=t&&n!=n)}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */function e8(t,n,e,o){var r=e.length,s=r,a=!o;if(null==t)return!s;for(t=tP(t);r--;){var u=e[r];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++r<s;){var h=(u=e[r])[0],l=t[h],c=u[1];if(a&&u[2]){if(l===i&&!(h in t))return!1}else{var f=new eP;if(o)var _=o(l,c,h,t,n,f);if(!(_===i?e4(c,l,3,o,f):_))return!1}}return!0}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */function e5(t){return!(!rV(t)||tI&&tI in t)&&(rH(t)?tN:tc).test(oD(t))}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */function e7(t){return(// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
"function"==typeof t?t:null==t?sN:"object"==typeof t?rB(t)?io(t[0],t[1]):ii(t):sK(t))}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function e6(t){if(!oM(t))return n2(t);var n=[];for(var e in tP(t))tO.call(t,e)&&"constructor"!=e&&n.push(e);return n}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */function it(t,n){return t<n}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function ie(t,n){var e=-1,i=rj(t)?ty(t.length):[];return eN(t,function(t,o,r){i[++e]=n(t,o,r)}),i}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */function ii(t){var n=op(t);return 1==n.length&&n[0][2]?oC(n[0][0],n[0][1]):function(e){return e===t||e8(e,t,n)}}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function io(t,n){var e;return oP(t)&&(e=n)==e&&!rV(e)?oC(oN(t),n):function(e){var o=su(e,t);return o===i&&o===n?sh(e,t):e4(n,o,3)}}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function ir(t,n,e,o,r){t!==n&&eq(n,function(s,a){if(r||(r=new eP),rV(s))/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */(function(t,n,e,o,r,s,a){var u=oE(t,e),h=oE(n,e),l=a.get(h);if(l){eM(t,e,l);return}var c=s?s(u,h,e+"",t,n,a):i,f=c===i;if(f){var _=rB(h),p=!_&&rD(h),d=!_&&!p&&r1(h);c=h,_||p||d?rB(u)?c=u:rN(u)?c=iH(u):p?(f=!1,c=iR(h,!0)):d?(f=!1,c=iN(h,!0)):c=[]:r$(h)||rI(h)?(c=u,rI(u)?c=r6(u):(!rV(u)||rH(u))&&(c=ox(h))):f=!1}f&&(// Recursively merge objects and arrays (susceptible to call stack limits).
a.set(h,c),r(c,h,o,s,a),a.delete(h)),eM(t,e,c)})(t,n,a,e,ir,o,r);else{var u=o?o(oE(t,a),s,a+"",t,n,r):i;u===i&&(u=s),eM(t,a,u)}},sp)}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */function is(t,n){var e=t.length;if(e)return ob(n+=n<0?e:0,e)?t[n]:i}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */function ia(t,n,e){n=n.length?np(n,function(t){return rB(t)?function(n){return e$(n,1===t.length?t[0]:t)}:t}):[sN];var i=-1;return n=np(n,nA(of())),/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */function(t,n){var e=t.length;for(t.sort(n);e--;)t[e]=t[e].value;return t}(ie(t,function(t,e,o){return{criteria:np(n,function(n){return n(t)}),index:++i,value:t}}),function(t,n){return(/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */function(t,n,e){for(var i=-1,o=t.criteria,r=n.criteria,s=o.length,a=e.length;++i<s;){var u=iD(o[i],r[i]);if(u){if(i>=a)return u;return u*("desc"==e[i]?-1:1)}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return t.index-n.index}(t,n,e))})}/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */function iu(t,n,e){for(var i=-1,o=n.length,r={};++i<o;){var s=n[i],a=e$(t,s);e(a,s)&&id(r,iZ(s,t),a)}return r}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */function ih(t,n,e,i){var o=i?nL:nb,r=-1,s=n.length,a=t;for(t===n&&(n=iH(n)),e&&(a=np(t,nA(e)));++r<s;)for(var u=0,h=n[r],l=e?e(h):h;(u=o(a,l,u,i))>-1;)a!==t&&t3.call(a,u,1),t3.call(t,u,1);return t}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */function il(t,n){for(var e=t?n.length:0,i=e-1;e--;){var o=n[e];if(e==i||o!==r){var r=o;ob(o)?t3.call(t,o,1):iz(t,o)}}return t}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */function ic(t,n){return t+nJ(n5()*(n-t+1))}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */function i_(t,n){var e="";if(!t||n<1||n>9007199254740991)return e;// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do n%2&&(e+=t),(n=nJ(n/2))&&(t+=t);while(n)return e}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */function ip(t,n){return oZ(oS(t,n,sN),t+"")}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function id(t,n,e,o){if(!rV(t))return t;n=iZ(n,t);for(var r=-1,s=n.length,a=s-1,u=t;null!=u&&++r<s;){var h=oN(n[r]),l=e;if("__proto__"===h||"constructor"===h||"prototype"===h)break;if(r!=a){var c=u[h];(l=o?o(c,h,u):i)===i&&(l=rV(c)?c:ob(n[r+1])?[]:{})}eC(u,h,l),u=u[h]}return t}/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var im=er?function(t,n){return er.set(t,n),t}:sN,iv=t6?function(t,n){return t6(t,"toString",{configurable:!0,enumerable:!1,value:sB(n),writable:!0})}:sN;/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function ig(t,n,e){var i=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(e=e>o?o:e)<0&&(e+=o),o=n>e?0:e-n>>>0,n>>>=0;for(var r=ty(o);++i<o;)r[i]=t[i+n];return r}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function iy(t,n){var e;return eN(t,function(t,i,o){return!(e=n(t,i,o))}),!!e}/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function ix(t,n,e){var i=0,o=null==t?i:t.length;if("number"==typeof n&&n==n&&o<=2147483647){for(;i<o;){var r=i+o>>>1,s=t[r];null!==s&&!r0(s)&&(e?s<=n:s<n)?i=r+1:o=r}return o}return iw(t,n,sN,e)}/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function iw(t,n,e,o){var r=0,s=null==t?0:t.length;if(0===s)return 0;for(var a=(n=e(n))!=n,u=null===n,h=r0(n),l=n===i;r<s;){var c=nJ((r+s)/2),f=e(t[c]),_=f!==i,p=null===f,d=f==f,m=r0(f);if(a)var v=o||d;else v=l?d&&(o||_):u?d&&_&&(o||!p):h?d&&_&&!p&&(o||!m):!p&&!m&&(o?f<=n:f<n);v?r=c+1:s=c}return n9(s,4294967294)}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function ib(t,n){for(var e=-1,i=t.length,o=0,r=[];++e<i;){var s=t[e],a=n?n(s):s;if(!e||!rA(a,u)){var u=a;r[o++]=0===s?0:s}}return r}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */function iL(t){return"number"==typeof t?t:r0(t)?u:+t}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */function iP(t){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof t)return t;if(rB(t))return np(t,iP)+"";if(r0(t))return ep?ep.call(t):"";var n=t+"";return"0"==n&&1/t==-a?"-0":n}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function iT(t,n,e){var i=-1,o=nf,r=t.length,s=!0,a=[],u=a;if(e)s=!1,o=n_;else if(r>=200){var h=n?null:i6(t);if(h)return nU(h);s=!1,o=nZ,u=new eL}else u=n?[]:a;t:for(;++i<r;){var l=t[i],c=n?n(l):l;if(l=e||0!==l?l:0,s&&c==c){for(var f=u.length;f--;)if(u[f]===c)continue t;n&&u.push(c),a.push(l)}else o(u,c,e)||(u!==a&&u.push(c),a.push(l))}return a}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */function iz(t,n){return n=iZ(n,t),null==(t=ok(t,n))||delete t[oN(oX(n))]}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function iM(t,n,e,i){return id(t,n,e(e$(t,n)),i)}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */function iC(t,n,e,i){for(var o=t.length,r=i?o:-1;(i?r--:++r<o)&&n(t[r],r,t););return e?ig(t,i?0:r,i?r+1:o):ig(t,i?r+1:0,i?o:r)}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */function iS(t,n){var e=t;return e instanceof ey&&(e=e.value()),nm(n,function(t,n){return n.func.apply(n.thisArg,nd([t],n.args))},e)}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */function ik(t,n,e){var i=t.length;if(i<2)return i?iT(t[0]):[];for(var o=-1,r=ty(i);++o<i;)for(var s=t[o],a=-1;++a<i;)a!=o&&(r[o]=ej(r[o]||s,t[a],n,e));return iT(eU(r,1),n,e)}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */function iE(t,n,e){for(var o=-1,r=t.length,s=n.length,a={};++o<r;){var u=o<s?n[o]:i;e(a,t[o],u)}return a}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */function iA(t){return rN(t)?t:[]}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */function iO(t){return"function"==typeof t?t:sN}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */function iZ(t,n){return rB(t)?t:oP(t,n)?[t]:oj(st(t))}/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */function iI(t,n,e){var o=t.length;return e=e===i?o:e,!n&&e>=o?t:ig(t,n,e)}/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var iB=nt||function(t){return t4.clearTimeout(t)};/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */function iR(t,n){if(n)return t.slice();var e=t.length,i=tH?tH(e):new t.constructor(e);return t.copy(i),i}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */function ij(t){var n=new t.constructor(t.byteLength);return new tF(n).set(new tF(t)),n}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */function iN(t,n){var e=n?ij(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */function iD(t,n){if(t!==n){var e=t!==i,o=null===t,r=t==t,s=r0(t),a=n!==i,u=null===n,h=n==n,l=r0(n);if(!u&&!l&&!s&&t>n||s&&a&&h&&!u&&!l||o&&a&&h||!e&&h||!r)return 1;if(!o&&!s&&!l&&t<n||l&&e&&r&&!o&&!s||u&&e&&r||!a&&r||!h)return -1}return 0}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function iW(t,n,e,i){for(var o=-1,r=t.length,s=e.length,a=-1,u=n.length,h=n3(r-s,0),l=ty(u+h),c=!i;++a<u;)l[a]=n[a];for(;++o<s;)(c||o<r)&&(l[e[o]]=t[o]);for(;h--;)l[a++]=t[o++];return l}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function iF(t,n,e,i){for(var o=-1,r=t.length,s=-1,a=e.length,u=-1,h=n.length,l=n3(r-a,0),c=ty(l+h),f=!i;++o<l;)c[o]=t[o];for(var _=o;++u<h;)c[_+u]=n[u];for(;++s<a;)(f||o<r)&&(c[_+e[s]]=t[o++]);return c}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */function iH(t,n){var e=-1,i=t.length;for(n||(n=ty(i));++e<i;)n[e]=t[e];return n}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */function iU(t,n,e,o){var r=!e;e||(e={});for(var s=-1,a=n.length;++s<a;){var u=n[s],h=o?o(e[u],t[u],u,e,t):i;h===i&&(h=t[u]),r?eA(e,u,h):eC(e,u,h)}return e}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */function iq(t,n){return function(e,i){var o=rB(e)?nu:ek,r=n?n():{};return o(e,t,of(i,2),r)}}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */function iV(t){return ip(function(n,e){var o=-1,r=e.length,s=r>1?e[r-1]:i,a=r>2?e[2]:i;for(s=t.length>3&&"function"==typeof s?(r--,s):i,a&&oL(e[0],e[1],a)&&(s=r<3?i:s,r=1),n=tP(n);++o<r;){var u=e[o];u&&t(n,u,o,s)}return n})}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function iG(t,n){return function(e,i){if(null==e)return e;if(!rj(e))return t(e,i);for(var o=e.length,r=n?o:-1,s=tP(e);(n?r--:++r<o)&&!1!==i(s[r],r,s););return e}}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function iK(t){return function(n,e,i){for(var o=-1,r=tP(n),s=i(n),a=s.length;a--;){var u=s[t?a:++o];if(!1===e(r[u],u,r))break}return n}}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */function iY(t){return function(n){var e=nD(n=st(n))?nV(n):i,o=e?e[0]:n.charAt(0),r=e?iI(e,1).join(""):n.slice(1);return o[t]()+r}}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */function i$(t){return function(n){return nm(sO(sT(n).replace(tU,"")),t,"")}}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */function iJ(t){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var e=em(t.prototype),i=t.apply(e,n);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return rV(i)?i:e}}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */function iX(t){return function(n,e,o){var r=tP(n);if(!rj(n)){var s=of(e,3);n=s_(n),e=function(t){return s(r[t],t,r)}}var a=t(n,e,o);return a>-1?r[s?n[a]:a]:i}}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */function iQ(t){return os(function(n){var e=n.length,r=e,s=eg.prototype.thru;for(t&&n.reverse();r--;){var a=n[r];if("function"!=typeof a)throw new tM(o);if(s&&!u&&"wrapper"==ol(a))var u=new eg([],!0)}for(r=u?r:e;++r<e;){var h=ol(a=n[r]),l="wrapper"==h?oh(a):i;u=l&&oT(l[0])&&424==l[1]&&!l[4].length&&1==l[9]?u[ol(l[0])].apply(u,l[3]):1==a.length&&oT(a)?u[h]():u.thru(a)}return function(){var t=arguments,i=t[0];if(u&&1==t.length&&rB(i))return u.plant(i).value();for(var o=0,r=e?n[o].apply(this,t):i;++o<e;)r=n[o].call(this,r);return r}})}/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function i0(t,n,e,o,r,s,a,u,h,l){var c=128&n,f=1&n,_=2&n,p=24&n,d=512&n,m=_?i:iJ(t);return function v(){for(var g=arguments.length,y=ty(g),x=g;x--;)y[x]=arguments[x];if(p)var w=oc(v),b=/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */function(t,n){for(var e=t.length,i=0;e--;)t[e]===n&&++i;return i}(y,w);if(o&&(y=iW(y,o,r,p)),s&&(y=iF(y,s,a,p)),g-=b,p&&g<l){var P=nH(y,w);return i5(t,n,i0,v.placeholder,e,y,P,u,h,l-g)}var T=f?e:this,z=_?T[t]:t;return g=y.length,u?y=/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */function(t,n){for(var e=t.length,o=n9(n.length,e),r=iH(t);o--;){var s=n[o];t[o]=ob(s,e)?r[s]:i}return t}(y,u):d&&g>1&&y.reverse(),c&&h<g&&(y.length=h),this&&this!==t4&&this instanceof v&&(z=m||iJ(z)),z.apply(T,y)}}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */function i1(t,n){return function(e,i){var o,r;return o=n(i),r={},eG(e,function(n,e,i){t(r,o(n),e,i)}),r}}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */function i2(t,n){return function(e,o){var r;if(e===i&&o===i)return n;if(e!==i&&(r=e),o!==i){if(r===i)return o;"string"==typeof e||"string"==typeof o?(e=iP(e),o=iP(o)):(e=iL(e),o=iL(o)),r=t(e,o)}return r}}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */function i3(t){return os(function(n){return n=np(n,nA(of())),ip(function(e){var i=this;return t(n,function(t){return na(t,i,e)})})})}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */function i9(t,n){var e=(n=n===i?" ":iP(n)).length;if(e<2)return e?i_(n,t):n;var o=i_(n,n$(t/nq(n)));return nD(n)?iI(nV(o),0,t).join(""):o.slice(0,t)}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */function i4(t){return function(n,e,o){return o&&"number"!=typeof o&&oL(n,e,o)&&(e=o=i),// Ensure the sign of `-0` is preserved.
n=r4(n),e===i?(e=n,n=0):e=r4(e),o=o===i?n<e?1:-1:r4(o),/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */function(t,n,e,i){for(var o=-1,r=n3(n$((n-t)/(e||1)),0),s=ty(r);r--;)s[i?r:++o]=t,t+=e;return s}(n,e,o,t)}}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */function i8(t){return function(n,e){return"string"==typeof n&&"string"==typeof e||(n=r7(n),e=r7(e)),t(n,e)}}/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function i5(t,n,e,o,r,s,a,u,h,l){var c=8&n,f=c?a:i,_=c?i:a,p=c?s:i,d=c?i:s;n|=c?32:64,4&(n&=~(c?64:32))||(n&=-4);var m=[t,n,r,p,f,d,_,u,h,l],v=e.apply(i,m);return oT(t)&&oA(v,m),v.placeholder=o,oI(v,t,n)}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */function i7(t){var n=tL[t];return function(t,e){if(t=r7(t),(e=null==e?0:n9(r8(e),292))&&n0(t)){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var i=(st(t)+"e").split("e");return+((i=(st(n(i[0]+"e"+(+i[1]+e)))+"e").split("e"))[0]+"e"+(+i[1]-e))}return n(t)}}/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var i6=ee&&1/nU(new ee([,-0]))[1]==a?function(t){return new ee(t)}:sU;/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */function ot(t){return function(n){var e,i,o=og(n);return o==v?nW(n):o==b?(e=-1,i=Array(n.size),n.forEach(function(t){i[++e]=[t,t]}),i):np(t(n),function(t){return[t,n[t]]})}}/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function on(t,n,e,r,a,u,h,l){var c=2&n;if(!c&&"function"!=typeof t)throw new tM(o);var f=r?r.length:0;if(f||(n&=-97,r=a=i),h=h===i?h:n3(r8(h),0),l=l===i?l:r8(l),f-=a?a.length:0,64&n){var _=r,p=a;r=a=i}var d=c?i:oh(t),m=[t,n,e,r,a,_,p,u,h,l];if(d&&/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */function(t,n){var e=t[1],i=n[1],o=e|i,r=o<131,a=128==i&&8==e||128==i&&256==e&&t[7].length<=n[8]||384==i&&n[7].length<=n[8]&&8==e;// Exit early if metadata can't be merged.
if(r||a){1&i&&(t[2]=n[2],// Set when currying a bound function.
o|=1&e?0:4);// Compose partial arguments.
var u=n[3];if(u){var h=t[3];t[3]=h?iW(h,u,n[4]):u,t[4]=h?nH(t[3],s):n[4]}// Compose partial right arguments.
(u=n[5])&&(h=t[5],t[5]=h?iF(h,u,n[6]):u,t[6]=h?nH(t[5],s):n[6]),// Use source `argPos` if available.
(u=n[7])&&(t[7]=u),128&i&&(t[8]=null==t[8]?n[8]:n9(t[8],n[8])),null==t[9]&&(t[9]=n[9]),// Use source `func` and merge bitmasks.
t[0]=n[0],t[1]=o}}(m,d),t=m[0],n=m[1],e=m[2],r=m[3],a=m[4],(l=m[9]=m[9]===i?c?0:t.length:n3(m[9]-f,0))||!(24&n)||(n&=-25),n&&1!=n)8==n||16==n?(v=t,g=n,y=l,x=iJ(v),O=function t(){for(var n=arguments.length,e=ty(n),o=n,r=oc(t);o--;)e[o]=arguments[o];var s=n<3&&e[0]!==r&&e[n-1]!==r?[]:nH(e,r);return(n-=s.length)<y?i5(v,g,i0,t.placeholder,i,e,s,i,i,y-n):na(this&&this!==t4&&this instanceof t?x:v,this,e)}):32!=n&&33!=n||a.length?O=i0.apply(i,m):(w=t,b=n,P=e,T=r,z=1&b,M=iJ(w),O=function t(){for(var n=-1,e=arguments.length,i=-1,o=T.length,r=ty(o+e),s=this&&this!==t4&&this instanceof t?M:w;++i<o;)r[i]=T[i];for(;e--;)r[i++]=arguments[++n];return na(s,z?P:this,r)});else var v,g,y,x,w,b,P,T,z,M,C,S,k,E,A,O=(C=t,S=n,k=e,E=1&S,A=iJ(C),function t(){return(this&&this!==t4&&this instanceof t?A:C).apply(E?k:this,arguments)});return oI((d?im:oA)(O,m),t,n)}/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */function oe(t,n,e,o){return t===i||rA(t,tk[e])&&!tO.call(o,e)?n:t}/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */function oi(t,n,e,o,r,s){return rV(t)&&rV(n)&&(// Recursively merge objects and arrays (susceptible to call stack limits).
s.set(n,t),ir(t,n,i,oi,s),s.delete(n)),t}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */function oo(t){return r$(t)?i:t}/**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */function or(t,n,e,o,r,s){var a=1&e,u=t.length,h=n.length;if(u!=h&&!(a&&h>u))return!1;// Check that cyclic values are equal.
var l=s.get(t),c=s.get(n);if(l&&c)return l==n&&c==t;var f=-1,_=!0,p=2&e?new eL:i;// Ignore non-index properties.
for(s.set(t,n),s.set(n,t);++f<u;){var d=t[f],m=n[f];if(o)var v=a?o(m,d,f,n,t,s):o(d,m,f,t,n,s);if(v!==i){if(v)continue;_=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(p){if(!ng(n,function(t,n){if(!nZ(p,n)&&(d===t||r(d,t,e,o,s)))return p.push(n)})){_=!1;break}}else if(!(d===m||r(d,m,e,o,s))){_=!1;break}}return s.delete(t),s.delete(n),_}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */function os(t){return oZ(oS(t,i,oG),t+"")}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function oa(t){return eJ(t,s_,om)}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function ou(t){return eJ(t,sp,ov)}/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */var oh=er?function(t){return er.get(t)}:sU;/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */function ol(t){for(var n=t.name+"",e=es[n],i=tO.call(es,n)?e.length:0;i--;){var o=e[i],r=o.func;if(null==r||r==t)return o.name}return n}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */function oc(t){return(tO.call(ed,"placeholder")?ed:t).placeholder}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */function of(){var t=ed.iteratee||sD;return t=t===sD?e7:t,arguments.length?t(arguments[0],arguments[1]):t}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */function o_(t,n){var e,i=t.__data__;return("string"==(e=typeof n)||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?i["string"==typeof n?"string":"hash"]:i.map}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */function op(t){for(var n=s_(t),e=n.length;e--;){var i=n[e],o=t[i];n[e]=[i,o,o==o&&!rV(o)]}return n}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */function od(t,n){var e=null==t?i:t[n];return e5(e)?e:i}/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var om=nX?function(t){return null==t?[]:nc(nX(t=tP(t)),function(n){return t0.call(t,n)})}:sJ,ov=nX?function(t){for(var n=[];t;)nd(n,om(t)),t=tV(t);return n}:sJ,og=eX;/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */function oy(t,n,e){n=iZ(n,t);for(var i=-1,o=n.length,r=!1;++i<o;){var s=oN(n[i]);if(!(r=null!=t&&e(t,s)))break;t=t[s]}return r||++i!=o?r:!!(o=null==t?0:t.length)&&rq(o)&&ob(s,o)&&(rB(t)||rI(t))}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */function ox(t){return"function"!=typeof t.constructor||oM(t)?{}:em(tV(t))}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */function ow(t){return rB(t)||rI(t)||!!(t9&&t&&t[t9])}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */function ob(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&t_.test(t))&&t>-1&&t%1==0&&t<n}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */function oL(t,n,e){if(!rV(e))return!1;var i=typeof n;return("number"==i?!!(rj(e)&&ob(n,e.length)):"string"==i&&n in e)&&rA(e[n],t)}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */function oP(t,n){if(rB(t))return!1;var e=typeof t;return!!("number"==e||"symbol"==e||"boolean"==e||null==t||r0(t))||Y.test(t)||!K.test(t)||null!=n&&t in tP(n)}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */function oT(t){var n=ol(t),e=ed[n];if("function"!=typeof e||!(n in ey.prototype))return!1;if(t===e)return!0;var i=oh(e);return!!i&&t===i[0]}(n6&&og(new n6(new ArrayBuffer(1)))!=C||et&&og(new et)!=v||en&&og(en.resolve())!=x||ee&&og(new ee)!=b||ei&&og(new ei)!=z)&&(og=function(t){var n=eX(t),e=n==y?t.constructor:i,o=e?oD(e):"";if(o)switch(o){case ea:return C;case eu:return v;case eh:return x;case el:return b;case ec:return z}return n});/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var oz=tE?rH:sX;/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */function oM(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||tk)}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function oC(t,n){return function(e){return null!=e&&e[t]===n&&(n!==i||t in tP(e))}}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */function oS(t,n,e){return n=n3(n===i?t.length-1:n,0),function(){for(var i=arguments,o=-1,r=n3(i.length-n,0),s=ty(r);++o<r;)s[o]=i[n+o];o=-1;for(var a=ty(n+1);++o<n;)a[o]=i[o];return a[n]=e(s),na(t,this,a)}}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */function ok(t,n){return n.length<2?t:e$(t,ig(n,0,-1))}/**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */function oE(t,n){if(("constructor"!==n||"function"!=typeof t[n])&&"__proto__"!=n)return t[n]}/**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var oA=oB(im),oO=nM||function(t,n){return t4.setTimeout(t,n)},oZ=oB(iv);/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */function oI(t,n,e){var i,o,r=n+"";return oZ(t,/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */function(t,n){var e=n.length;if(!e)return t;var i=e-1;return n[i]=(e>1?"& ":"")+n[i],n=n.join(e>2?", ":" "),t.replace(tn,"{\n/* [wrapped with "+n+"] */\n")}(r,(i=(o=r.match(te))?o[1].split(ti):[],nh(h,function(t){var n="_."+t[0];e&t[1]&&!nf(i,n)&&i.push(n)}),i.sort())))}/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */function oB(t){var n=0,e=0;return function(){var o=n4(),r=16-(o-e);if(e=o,r>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(i,arguments)}}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */function oR(t,n){var e=-1,o=t.length,r=o-1;for(n=n===i?o:n;++e<n;){var s=ic(e,r),a=t[s];t[s]=t[e],t[e]=a}return t.length=n,t}/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */var oj=(tv=(tt=rz(function(t){var n=[];return 46/* . */===t.charCodeAt(0)&&n.push(""),t.replace($,function(t,e,i,o){n.push(i?o.replace(ts,"$1"):e||t)}),n},function(t){return 500===tv.size&&tv.clear(),t})).cache,tt);/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */function oN(t){if("string"==typeof t||r0(t))return t;var n=t+"";return"0"==n&&1/t==-a?"-0":n}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */function oD(t){if(null!=t){try{return tA.call(t)}catch(t){}try{return t+""}catch(t){}}return""}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */function oW(t){if(t instanceof ey)return t.clone();var n=new eg(t.__wrapped__,t.__chain__);return n.__actions__=iH(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}/**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */var oF=ip(function(t,n){return rN(t)?ej(t,eU(n,1,rN,!0)):[]}),oH=ip(function(t,n){var e=oX(n);return rN(e)&&(e=i),rN(t)?ej(t,eU(n,1,rN,!0),of(e,2)):[]}),oU=ip(function(t,n){var e=oX(n);return rN(e)&&(e=i),rN(t)?ej(t,eU(n,1,rN,!0),i,e):[]});/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */function oq(t,n,e){var i=null==t?0:t.length;if(!i)return -1;var o=null==e?0:r8(e);return o<0&&(o=n3(i+o,0)),nw(t,of(n,3),o)}/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */function oV(t,n,e){var o=null==t?0:t.length;if(!o)return -1;var r=o-1;return e!==i&&(r=r8(e),r=e<0?n3(o+r,0):n9(r,o-1)),nw(t,of(n,3),r,!0)}/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */function oG(t){return(null==t?0:t.length)?eU(t,1):[]}/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */function oK(t){return t&&t.length?t[0]:i}/**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */var oY=ip(function(t){var n=np(t,iA);return n.length&&n[0]===t[0]?e2(n):[]}),o$=ip(function(t){var n=oX(t),e=np(t,iA);return n===oX(e)?n=i:e.pop(),e.length&&e[0]===t[0]?e2(e,of(n,2)):[]}),oJ=ip(function(t){var n=oX(t),e=np(t,iA);return(n="function"==typeof n?n:i)&&e.pop(),e.length&&e[0]===t[0]?e2(e,i,n):[]});/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */function oX(t){var n=null==t?0:t.length;return n?t[n-1]:i}/**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */var oQ=ip(o0);/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */function o0(t,n){return t&&t.length&&n&&n.length?ih(t,n):t}/**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */var o1=os(function(t,n){var e=null==t?0:t.length,i=eO(t,n);return il(t,np(n,function(t){return ob(t,e)?+t:t}).sort(iD)),i});/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function o2(t){return null==t?t:n7.call(t)}/**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */var o3=ip(function(t){return iT(eU(t,1,rN,!0))}),o9=ip(function(t){var n=oX(t);return rN(n)&&(n=i),iT(eU(t,1,rN,!0),of(n,2))}),o4=ip(function(t){var n=oX(t);return n="function"==typeof n?n:i,iT(eU(t,1,rN,!0),i,n)});/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */function o8(t){if(!(t&&t.length))return[];var n=0;return t=nc(t,function(t){if(rN(t))return n=n3(t.length,n),!0}),nk(n,function(n){return np(t,nz(n))})}/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */function o5(t,n){if(!(t&&t.length))return[];var e=o8(t);return null==n?e:np(e,function(t){return na(n,i,t)})}/**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */var o7=ip(function(t,n){return rN(t)?ej(t,n):[]}),o6=ip(function(t){return ik(nc(t,rN))}),rt=ip(function(t){var n=oX(t);return rN(n)&&(n=i),ik(nc(t,rN),of(n,2))}),rn=ip(function(t){var n=oX(t);return n="function"==typeof n?n:i,ik(nc(t,rN),i,n)}),re=ip(o8),ri=ip(function(t){var n=t.length,e=n>1?t[n-1]:i;return e="function"==typeof e?(t.pop(),e):i,o5(t,e)});/*------------------------------------------------------------------------*//**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */function ro(t){var n=ed(t);return n.__chain__=!0,n}/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */function rr(t,n){return n(t)}/**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */var rs=os(function(t){var n=t.length,e=n?t[0]:0,o=this.__wrapped__,r=function(n){return eO(n,t)};return!(n>1)&&!this.__actions__.length&&o instanceof ey&&ob(e)?((o=o.slice(e,+e+(n?1:0))).__actions__.push({func:rr,args:[r],thisArg:i}),new eg(o,this.__chain__).thru(function(t){return n&&!t.length&&t.push(i),t})):this.thru(r)}),ra=iq(function(t,n,e){tO.call(t,e)?++t[e]:eA(t,e,1)}),ru=iX(oq),rh=iX(oV);/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function rl(t,n){return(rB(t)?nh:eN)(t,of(n,3))}/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */function rc(t,n){return(rB(t)?/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function(t,n){for(var e=null==t?0:t.length;e--&&!1!==n(t[e],e,t););return t}:eD)(t,of(n,3))}/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */var rf=iq(function(t,n,e){tO.call(t,e)?t[e].push(n):eA(t,e,[n])}),r_=ip(function(t,n,e){var i=-1,o="function"==typeof n,r=rj(t)?ty(t.length):[];return eN(t,function(t){r[++i]=o?na(n,t,e):e3(t,n,e)}),r}),rp=iq(function(t,n,e){eA(t,e,n)});/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */function rd(t,n){return(rB(t)?np:ie)(t,of(n,3))}/**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */var rm=iq(function(t,n,e){t[e?0:1].push(n)},function(){return[[],[]]}),rv=ip(function(t,n){if(null==t)return[];var e=n.length;return e>1&&oL(t,n[0],n[1])?n=[]:e>2&&oL(n[0],n[1],n[2])&&(n=[n[0]]),ia(t,eU(n,1),[])}),rg=ny||function(){return t4.Date.now()};/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */function ry(t,n,e){return n=e?i:n,n=t&&null==n?t.length:n,on(t,128,i,i,i,i,n)}/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */function rx(t,n){var e;if("function"!=typeof n)throw new tM(o);return t=r8(t),function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=i),e}}/**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */var rw=ip(function(t,n,e){var i=1;if(e.length){var o=nH(e,oc(rw));i|=32}return on(t,i,n,e,o)}),rb=ip(function(t,n,e){var i=3;if(e.length){var o=nH(e,oc(rb));i|=32}return on(n,i,t,e,o)});/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */function rL(t,n,e){var r,s,a,u,h,l,c=0,f=!1,_=!1,p=!0;if("function"!=typeof t)throw new tM(o);function d(n){var e=r,o=s;return r=s=i,c=n,u=t.apply(o,e)}function m(t){var e=t-l,o=t-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return l===i||e>=n||e<0||_&&o>=a}function v(){var t,e,i,o=rg();if(m(o))return g(o);// Restart the timer.
h=oO(v,(t=o-l,e=o-c,i=n-t,_?n9(i,a-e):i))}function g(t){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(h=i,p&&r)?d(t):(r=s=i,u))}function y(){var t,e=rg(),o=m(e);if(r=arguments,s=this,l=e,o){if(h===i)return(// Reset any `maxWait` timer.
c=t=l,// Start the timer for the trailing edge.
h=oO(v,n),f?d(t):u);if(_)return(// Handle invocations in a tight loop.
iB(h),h=oO(v,n),d(l))}return h===i&&(h=oO(v,n)),u}return n=r7(n)||0,rV(e)&&(f=!!e.leading,a=(_="maxWait"in e)?n3(r7(e.maxWait)||0,n):a,p="trailing"in e?!!e.trailing:p),y.cancel=function(){h!==i&&iB(h),c=0,r=l=s=h=i},y.flush=function(){return h===i?u:g(rg())},y}/**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */var rP=ip(function(t,n){return eR(t,1,n)}),rT=ip(function(t,n,e){return eR(t,r7(n)||0,e)});/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */function rz(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new tM(o);var e=function(){var i=arguments,o=n?n.apply(this,i):i[0],r=e.cache;if(r.has(o))return r.get(o);var s=t.apply(this,i);return e.cache=r.set(o,s)||r,s};return e.cache=new(rz.Cache||eb),e}/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */function rM(t){if("function"!=typeof t)throw new tM(o);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}// Expose `MapCache`.
rz.Cache=eb;/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */var rC=ip(function(t,n){var e=(n=1==n.length&&rB(n[0])?np(n[0],nA(of())):np(eU(n,1),nA(of()))).length;return ip(function(i){for(var o=-1,r=n9(i.length,e);++o<r;)i[o]=n[o].call(this,i[o]);return na(t,this,i)})}),rS=ip(function(t,n){var e=nH(n,oc(rS));return on(t,32,i,n,e)}),rk=ip(function(t,n){var e=nH(n,oc(rk));return on(t,64,i,n,e)}),rE=os(function(t,n){return on(t,256,i,i,i,n)});/**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */function rA(t,n){return t===n||t!=t&&n!=n}/**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */var rO=i8(eQ),rZ=i8(function(t,n){return t>=n}),rI=e9(function(){return arguments}())?e9:function(t){return rG(t)&&tO.call(t,"callee")&&!t0.call(t,"callee")},rB=ty.isArray,rR=nn?nA(nn):/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function(t){return rG(t)&&eX(t)==M};/**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */function rj(t){return null!=t&&rq(t.length)&&!rH(t)}/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */function rN(t){return rG(t)&&rj(t)}/**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */var rD=nQ||sX,rW=ne?nA(ne):/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function(t){return rG(t)&&eX(t)==_};/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */function rF(t){if(!rG(t))return!1;var n=eX(t);return n==p||"[object DOMException]"==n||"string"==typeof t.message&&"string"==typeof t.name&&!r$(t)}/**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */function rH(t){if(!rV(t))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var n=eX(t);return n==d||n==m||"[object AsyncFunction]"==n||"[object Proxy]"==n}/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */function rU(t){return"number"==typeof t&&t==r8(t)}/**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */function rq(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}/**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */function rV(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}/**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */function rG(t){return null!=t&&"object"==typeof t}/**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */var rK=ni?nA(ni):/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function(t){return rG(t)&&og(t)==v};/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */function rY(t){return"number"==typeof t||rG(t)&&eX(t)==g}/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */function r$(t){if(!rG(t)||eX(t)!=y)return!1;var n=tV(t);if(null===n)return!0;var e=tO.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&tA.call(e)==tR}/**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */var rJ=no?nA(no):/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function(t){return rG(t)&&eX(t)==w},rX=nr?nA(nr):/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function(t){return rG(t)&&og(t)==b};/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */function rQ(t){return"string"==typeof t||!rB(t)&&rG(t)&&eX(t)==P}/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */function r0(t){return"symbol"==typeof t||rG(t)&&eX(t)==T}/**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */var r1=ns?nA(ns):/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */function(t){return rG(t)&&rq(t.length)&&!!tX[eX(t)]},r2=i8(it),r3=i8(function(t,n){return t<=n});/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */function r9(t){if(!t)return[];if(rj(t))return rQ(t)?nV(t):iH(t);if(t8&&t[t8])return(/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */function(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}(t[t8]()));var n=og(t);return(n==v?nW:n==b?nU:sb)(t)}/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */function r4(t){return t?(t=r7(t))===a||t===-a?(t<0?-1:1)*17976931348623157e292:t==t?t:0:0===t?t:0}/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */function r8(t){var n=r4(t),e=n%1;return n==n?e?n-e:n:0}/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */function r5(t){return t?eZ(r8(t),0,4294967295):0}/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */function r7(t){if("number"==typeof t)return t;if(r0(t))return u;if(rV(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=rV(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=nE(t);var e=tl.test(t);return e||tf.test(t)?t2(t.slice(2),e?2:8):th.test(t)?u:+t}/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */function r6(t){return iU(t,sp(t))}/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */function st(t){return null==t?"":iP(t)}/*------------------------------------------------------------------------*//**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */var sn=iV(function(t,n){if(oM(n)||rj(n)){iU(n,s_(n),t);return}for(var e in n)tO.call(n,e)&&eC(t,e,n[e])}),se=iV(function(t,n){iU(n,sp(n),t)}),si=iV(function(t,n,e,i){iU(n,sp(n),t,i)}),so=iV(function(t,n,e,i){iU(n,s_(n),t,i)}),sr=os(eO),ss=ip(function(t,n){t=tP(t);var e=-1,o=n.length,r=o>2?n[2]:i;for(r&&oL(n[0],n[1],r)&&(o=1);++e<o;)for(var s=n[e],a=sp(s),u=-1,h=a.length;++u<h;){var l=a[u],c=t[l];(c===i||rA(c,tk[l])&&!tO.call(t,l))&&(t[l]=s[l])}return t}),sa=ip(function(t){return t.push(i,oi),na(sm,i,t)});/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */function su(t,n,e){var o=null==t?i:e$(t,n);return o===i?e:o}/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */function sh(t,n){return null!=t&&oy(t,n,e1)}/**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */var sl=i1(function(t,n,e){null!=n&&"function"!=typeof n.toString&&(n=tB.call(n)),t[n]=e},sB(sN)),sc=i1(function(t,n,e){null!=n&&"function"!=typeof n.toString&&(n=tB.call(n)),tO.call(t,n)?t[n].push(e):t[n]=[e]},of),sf=ip(e3);/**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */function s_(t){return rj(t)?eT(t):e6(t)}/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */function sp(t){return rj(t)?eT(t,!0):/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function(t){if(!rV(t))return(/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function(t){var n=[];if(null!=t)for(var e in tP(t))n.push(e);return n}(t));var n=oM(t),e=[];for(var i in t)"constructor"==i&&(n||!tO.call(t,i))||e.push(i);return e}(t)}/**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */var sd=iV(function(t,n,e){ir(t,n,e)}),sm=iV(function(t,n,e,i){ir(t,n,e,i)}),sv=os(function(t,n){var e={};if(null==t)return e;var i=!1;n=np(n,function(n){return n=iZ(n,t),i||(i=n.length>1),n}),iU(t,ou(t),e),i&&(e=eI(e,7,oo));for(var o=n.length;o--;)iz(e,n[o]);return e}),sg=os(function(t,n){return null==t?{}:iu(t,n,function(n,e){return sh(t,e)})});/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */function sy(t,n){if(null==t)return{};var e=np(ou(t),function(t){return[t]});return n=of(n),iu(t,e,function(t,e){return n(t,e[0])})}/**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */var sx=ot(s_),sw=ot(sp);/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */function sb(t){return null==t?[]:nO(t,s_(t))}/*------------------------------------------------------------------------*//**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */var sL=i$(function(t,n,e){return n=n.toLowerCase(),t+(e?sP(n):n)});/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */function sP(t){return sA(st(t).toLowerCase())}/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */function sT(t){return(t=st(t))&&t.replace(tp,nR).replace(tq,"")}/**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */var sz=i$(function(t,n,e){return t+(e?"-":"")+n.toLowerCase()}),sM=i$(function(t,n,e){return t+(e?" ":"")+n.toLowerCase()}),sC=iY("toLowerCase"),sS=i$(function(t,n,e){return t+(e?"_":"")+n.toLowerCase()}),sk=i$(function(t,n,e){return t+(e?" ":"")+sA(n)}),sE=i$(function(t,n,e){return t+(e?" ":"")+n.toUpperCase()}),sA=iY("toUpperCase");/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */function sO(t,n,e){if(t=st(t),(n=e?i:n)===i){var o;return(o=t,tY.test(o))?t.match(tG)||[]:t.match(to)||[]}return t.match(n)||[]}/*------------------------------------------------------------------------*//**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */var sZ=ip(function(t,n){try{return na(t,i,n)}catch(t){return rF(t)?t:new tw(t)}}),sI=os(function(t,n){return nh(n,function(n){eA(t,n=oN(n),rw(t[n],t))}),t});/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */function sB(t){return function(){return t}}/**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */var sR=iQ(),sj=iQ(!0);/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */function sN(t){return t}/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */function sD(t){return e7("function"==typeof t?t:eI(t,1))}/**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */var sW=ip(function(t,n){return function(e){return e3(e,t,n)}}),sF=ip(function(t,n){return function(e){return e3(t,e,n)}});/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */function sH(t,n,e){var i=s_(n),o=eY(n,i);null!=e||rV(n)&&(o.length||!i.length)||(e=n,n=t,t=this,o=eY(n,s_(n)));var r=!(rV(e)&&"chain"in e)||!!e.chain,s=rH(t);return nh(o,function(e){var i=n[e];t[e]=i,s&&(t.prototype[e]=function(){var n=this.__chain__;if(r||n){var e=t(this.__wrapped__);return(e.__actions__=iH(this.__actions__)).push({func:i,args:arguments,thisArg:t}),e.__chain__=n,e}return i.apply(t,nd([this.value()],arguments))})}),t}/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */function sU(){// No operation performed.
}/**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */var sq=i3(np),sV=i3(nl),sG=i3(ng);/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */function sK(t){return oP(t)?nz(oN(t)):function(n){return e$(n,t)}}/**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */var sY=i4(),s$=i4(!0);/**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */function sJ(){return[]}/**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */function sX(){return!1}/*------------------------------------------------------------------------*//**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */var sQ=i2(function(t,n){return t+n},0),s0=i7("ceil"),s1=i2(function(t,n){return t/n},1),s2=i7("floor"),s3=i2(function(t,n){return t*n},1),s9=i7("round"),s4=i2(function(t,n){return t-n},0);return(/*------------------------------------------------------------------------*/// Add methods that return wrapped values in chain sequences.
ed.after=/*------------------------------------------------------------------------*//**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */function(t,n){if("function"!=typeof n)throw new tM(o);return t=r8(t),function(){if(--t<1)return n.apply(this,arguments)}},ed.ary=ry,ed.assign=sn,ed.assignIn=se,ed.assignInWith=si,ed.assignWith=so,ed.at=sr,ed.before=rx,ed.bind=rw,ed.bindAll=sI,ed.bindKey=rb,ed.castArray=/*------------------------------------------------------------------------*//**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */function(){if(!arguments.length)return[];var t=arguments[0];return rB(t)?t:[t]},ed.chain=ro,ed.chunk=/*------------------------------------------------------------------------*//**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */function(t,n,e){n=(e?oL(t,n,e):n===i)?1:n3(r8(n),0);var o=null==t?0:t.length;if(!o||n<1)return[];for(var r=0,s=0,a=ty(n$(o/n));r<o;)a[s++]=ig(t,r,r+=n);return a},ed.compact=/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */function(t){for(var n=-1,e=null==t?0:t.length,i=0,o=[];++n<e;){var r=t[n];r&&(o[i++]=r)}return o},ed.concat=/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */function(){var t=arguments.length;if(!t)return[];for(var n=ty(t-1),e=arguments[0],i=t;i--;)n[i-1]=arguments[i];return nd(rB(e)?iH(e):[e],eU(n,1))},ed.cond=/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */function(t){var n=null==t?0:t.length,e=of();return t=n?np(t,function(t){if("function"!=typeof t[1])throw new tM(o);return[e(t[0]),t[1]]}):[],ip(function(e){for(var i=-1;++i<n;){var o=t[i];if(na(o[0],this,e))return na(o[1],this,e)}})},ed.conforms=/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */function(t){var n,e;return e=s_(n=eI(t,1)),function(t){return eB(t,n,e)}},ed.constant=sB,ed.countBy=ra,ed.create=/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */function(t,n){var e=em(t);return null==n?e:eE(e,n)},ed.curry=/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */function t(n,e,o){e=o?i:e;var r=on(n,8,i,i,i,i,i,e);return r.placeholder=t.placeholder,r},ed.curryRight=/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */function t(n,e,o){e=o?i:e;var r=on(n,16,i,i,i,i,i,e);return r.placeholder=t.placeholder,r},ed.debounce=rL,ed.defaults=ss,ed.defaultsDeep=sa,ed.defer=rP,ed.delay=rT,ed.difference=oF,ed.differenceBy=oH,ed.differenceWith=oU,ed.drop=/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function(t,n,e){var o=null==t?0:t.length;return o?ig(t,(n=e||n===i?1:r8(n))<0?0:n,o):[]},ed.dropRight=/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function(t,n,e){var o=null==t?0:t.length;return o?ig(t,0,(n=o-(n=e||n===i?1:r8(n)))<0?0:n):[]},ed.dropRightWhile=/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function(t,n){return t&&t.length?iC(t,of(n,3),!0,!0):[]},ed.dropWhile=/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function(t,n){return t&&t.length?iC(t,of(n,3),!0):[]},ed.fill=/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */function(t,n,e,o){var r=null==t?0:t.length;return r?(e&&"number"!=typeof e&&oL(t,n,e)&&(e=0,o=r),/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */function(t,n,e,o){var r=t.length;for((e=r8(e))<0&&(e=-e>r?0:r+e),(o=o===i||o>r?r:r8(o))<0&&(o+=r),o=e>o?0:r5(o);e<o;)t[e++]=n;return t}(t,n,e,o)):[]},ed.filter=/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */function(t,n){return(rB(t)?nc:eH)(t,of(n,3))},ed.flatMap=/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function(t,n){return eU(rd(t,n),1)},ed.flatMapDeep=/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function(t,n){return eU(rd(t,n),a)},ed.flatMapDepth=/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */function(t,n,e){return e=e===i?1:r8(e),eU(rd(t,n),e)},ed.flatten=oG,ed.flattenDeep=/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */function(t){return(null==t?0:t.length)?eU(t,a):[]},ed.flattenDepth=/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */function(t,n){return(null==t?0:t.length)?eU(t,n=n===i?1:r8(n)):[]},ed.flip=/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */function(t){return on(t,512)},ed.flow=sR,ed.flowRight=sj,ed.fromPairs=/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */function(t){for(var n=-1,e=null==t?0:t.length,i={};++n<e;){var o=t[n];i[o[0]]=o[1]}return i},ed.functions=/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */function(t){return null==t?[]:eY(t,s_(t))},ed.functionsIn=/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */function(t){return null==t?[]:eY(t,sp(t))},ed.groupBy=rf,ed.initial=/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */function(t){return(null==t?0:t.length)?ig(t,0,-1):[]},ed.intersection=oY,ed.intersectionBy=o$,ed.intersectionWith=oJ,ed.invert=sl,ed.invertBy=sc,ed.invokeMap=r_,ed.iteratee=sD,ed.keyBy=rp,ed.keys=s_,ed.keysIn=sp,ed.map=rd,ed.mapKeys=/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */function(t,n){var e={};return n=of(n,3),eG(t,function(t,i,o){eA(e,n(t,i,o),t)}),e},ed.mapValues=/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */function(t,n){var e={};return n=of(n,3),eG(t,function(t,i,o){eA(e,i,n(t,i,o))}),e},ed.matches=/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */function(t){return ii(eI(t,1))},ed.matchesProperty=/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */function(t,n){return io(t,eI(n,1))},ed.memoize=rz,ed.merge=sd,ed.mergeWith=sm,ed.method=sW,ed.methodOf=sF,ed.mixin=sH,ed.negate=rM,ed.nthArg=/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */function(t){return t=r8(t),ip(function(n){return is(n,t)})},ed.omit=sv,ed.omitBy=/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */function(t,n){return sy(t,rM(of(n)))},ed.once=/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */function(t){return rx(2,t)},ed.orderBy=/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */function(t,n,e,o){return null==t?[]:(rB(n)||(n=null==n?[]:[n]),rB(e=o?i:e)||(e=null==e?[]:[e]),ia(t,n,e))},ed.over=sq,ed.overArgs=rC,ed.overEvery=sV,ed.overSome=sG,ed.partial=rS,ed.partialRight=rk,ed.partition=rm,ed.pick=sg,ed.pickBy=sy,ed.property=sK,ed.propertyOf=/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */function(t){return function(n){return null==t?i:e$(t,n)}},ed.pull=oQ,ed.pullAll=o0,ed.pullAllBy=/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */function(t,n,e){return t&&t.length&&n&&n.length?ih(t,n,of(e,2)):t},ed.pullAllWith=/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */function(t,n,e){return t&&t.length&&n&&n.length?ih(t,n,i,e):t},ed.pullAt=o1,ed.range=sY,ed.rangeRight=s$,ed.rearg=rE,ed.reject=/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */function(t,n){return(rB(t)?nc:eH)(t,rM(of(n,3)))},ed.remove=/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */function(t,n){var e=[];if(!(t&&t.length))return e;var i=-1,o=[],r=t.length;for(n=of(n,3);++i<r;){var s=t[i];n(s,i,t)&&(e.push(s),o.push(i))}return il(t,o),e},ed.rest=/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */function(t,n){if("function"!=typeof t)throw new tM(o);return ip(t,n=n===i?n:r8(n))},ed.reverse=o2,ed.sampleSize=/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */function(t,n,e){return n=(e?oL(t,n,e):n===i)?1:r8(n),(rB(t)?/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function(t,n){return oR(iH(t),eZ(n,0,t.length))}:/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function(t,n){var e=sb(t);return oR(e,eZ(n,0,e.length))})(t,n)},ed.set=/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */function(t,n,e){return null==t?t:id(t,n,e)},ed.setWith=/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */function(t,n,e,o){return o="function"==typeof o?o:i,null==t?t:id(t,n,e,o)},ed.shuffle=/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */function(t){return(rB(t)?/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function(t){return oR(iH(t))}:/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function(t){return oR(sb(t))})(t)},ed.slice=/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function(t,n,e){var o=null==t?0:t.length;return o?(e&&"number"!=typeof e&&oL(t,n,e)?(n=0,e=o):(n=null==n?0:r8(n),e=e===i?o:r8(e)),ig(t,n,e)):[]},ed.sortBy=rv,ed.sortedUniq=/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */function(t){return t&&t.length?ib(t):[]},ed.sortedUniqBy=/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */function(t,n){return t&&t.length?ib(t,of(n,2)):[]},ed.split=/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */function(t,n,e){return(e&&"number"!=typeof e&&oL(t,n,e)&&(n=e=i),e=e===i?4294967295:e>>>0)?(t=st(t))&&("string"==typeof n||null!=n&&!rJ(n))&&!(n=iP(n))&&nD(t)?iI(nV(t),0,e):t.split(n,e):[]},ed.spread=/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */function(t,n){if("function"!=typeof t)throw new tM(o);return n=null==n?0:n3(r8(n),0),ip(function(e){var i=e[n],o=iI(e,0,n);return i&&nd(o,i),na(t,this,o)})},ed.tail=/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */function(t){var n=null==t?0:t.length;return n?ig(t,1,n):[]},ed.take=/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */function(t,n,e){return t&&t.length?ig(t,0,(n=e||n===i?1:r8(n))<0?0:n):[]},ed.takeRight=/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */function(t,n,e){var o=null==t?0:t.length;return o?ig(t,(n=o-(n=e||n===i?1:r8(n)))<0?0:n,o):[]},ed.takeRightWhile=/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */function(t,n){return t&&t.length?iC(t,of(n,3),!1,!0):[]},ed.takeWhile=/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */function(t,n){return t&&t.length?iC(t,of(n,3)):[]},ed.tap=/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */function(t,n){return n(t),t},ed.throttle=/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */function(t,n,e){var i=!0,r=!0;if("function"!=typeof t)throw new tM(o);return rV(e)&&(i="leading"in e?!!e.leading:i,r="trailing"in e?!!e.trailing:r),rL(t,n,{leading:i,maxWait:n,trailing:r})},ed.thru=rr,ed.toArray=r9,ed.toPairs=sx,ed.toPairsIn=sw,ed.toPath=/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */function(t){return rB(t)?np(t,oN):r0(t)?[t]:iH(oj(st(t)))},ed.toPlainObject=r6,ed.transform=/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */function(t,n,e){var i=rB(t),o=i||rD(t)||r1(t);if(n=of(n,4),null==e){var r=t&&t.constructor;e=o?i?new r:[]:rV(t)&&rH(r)?em(tV(t)):{}}return(o?nh:eG)(t,function(t,i,o){return n(e,t,i,o)}),e},ed.unary=/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */function(t){return ry(t,1)},ed.union=o3,ed.unionBy=o9,ed.unionWith=o4,ed.uniq=/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */function(t){return t&&t.length?iT(t):[]},ed.uniqBy=/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */function(t,n){return t&&t.length?iT(t,of(n,2)):[]},ed.uniqWith=/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */function(t,n){return n="function"==typeof n?n:i,t&&t.length?iT(t,i,n):[]},ed.unset=/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */function(t,n){return null==t||iz(t,n)},ed.unzip=o8,ed.unzipWith=o5,ed.update=/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */function(t,n,e){return null==t?t:iM(t,n,iO(e))},ed.updateWith=/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */function(t,n,e,o){return o="function"==typeof o?o:i,null==t?t:iM(t,n,iO(e),o)},ed.values=sb,ed.valuesIn=/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */function(t){return null==t?[]:nO(t,sp(t))},ed.without=o7,ed.words=sO,ed.wrap=/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */function(t,n){return rS(iO(n),t)},ed.xor=o6,ed.xorBy=rt,ed.xorWith=rn,ed.zip=re,ed.zipObject=/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */function(t,n){return iE(t||[],n||[],eC)},ed.zipObjectDeep=/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */function(t,n){return iE(t||[],n||[],id)},ed.zipWith=ri,// Add aliases.
ed.entries=sx,ed.entriesIn=sw,ed.extend=se,ed.extendWith=si,// Add methods to `lodash.prototype`.
sH(ed,ed),/*------------------------------------------------------------------------*/// Add methods that return unwrapped values in chain sequences.
ed.add=sQ,ed.attempt=sZ,ed.camelCase=sL,ed.capitalize=sP,ed.ceil=s0,ed.clamp=/*------------------------------------------------------------------------*//**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */function(t,n,e){return e===i&&(e=n,n=i),e!==i&&(e=(e=r7(e))==e?e:0),n!==i&&(n=(n=r7(n))==n?n:0),eZ(r7(t),n,e)},ed.clone=/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */function(t){return eI(t,4)},ed.cloneDeep=/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */function(t){return eI(t,5)},ed.cloneDeepWith=/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */function(t,n){return eI(t,5,n="function"==typeof n?n:i)},ed.cloneWith=/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */function(t,n){return eI(t,4,n="function"==typeof n?n:i)},ed.conformsTo=/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */function(t,n){return null==n||eB(t,n,s_(n))},ed.deburr=sT,ed.defaultTo=/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */function(t,n){return null==t||t!=t?n:t},ed.divide=s1,ed.endsWith=/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */function(t,n,e){t=st(t),n=iP(n);var o=t.length,r=e=e===i?o:eZ(r8(e),0,o);return(e-=n.length)>=0&&t.slice(e,r)==n},ed.eq=rA,ed.escape=/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */function(t){return(t=st(t))&&U.test(t)?t.replace(F,nj):t},ed.escapeRegExp=/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */function(t){return(t=st(t))&&X.test(t)?t.replace(J,"\\$&"):t},ed.every=/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */function(t,n,e){var o=rB(t)?nl:eW;return e&&oL(t,n,e)&&(n=i),o(t,of(n,3))},ed.find=ru,ed.findIndex=oq,ed.findKey=/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */function(t,n){return nx(t,of(n,3),eG)},ed.findLast=rh,ed.findLastIndex=oV,ed.findLastKey=/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */function(t,n){return nx(t,of(n,3),eK)},ed.floor=s2,ed.forEach=rl,ed.forEachRight=rc,ed.forIn=/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */function(t,n){return null==t?t:eq(t,of(n,3),sp)},ed.forInRight=/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */function(t,n){return null==t?t:eV(t,of(n,3),sp)},ed.forOwn=/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function(t,n){return t&&eG(t,of(n,3))},ed.forOwnRight=/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */function(t,n){return t&&eK(t,of(n,3))},ed.get=su,ed.gt=rO,ed.gte=rZ,ed.has=/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */function(t,n){return null!=t&&oy(t,n,e0)},ed.hasIn=sh,ed.head=oK,ed.identity=sN,ed.includes=/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */function(t,n,e,i){t=rj(t)?t:sb(t),e=e&&!i?r8(e):0;var o=t.length;return e<0&&(e=n3(o+e,0)),rQ(t)?e<=o&&t.indexOf(n,e)>-1:!!o&&nb(t,n,e)>-1},ed.indexOf=/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */function(t,n,e){var i=null==t?0:t.length;if(!i)return -1;var o=null==e?0:r8(e);return o<0&&(o=n3(i+o,0)),nb(t,n,o)},ed.inRange=/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */function(t,n,e){var o,r,s;return n=r4(n),e===i?(e=n,n=0):e=r4(e),(o=t=r7(t))>=n9(r=n,s=e)&&o<n3(r,s)},ed.invoke=sf,ed.isArguments=rI,ed.isArray=rB,ed.isArrayBuffer=rR,ed.isArrayLike=rj,ed.isArrayLikeObject=rN,ed.isBoolean=/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */function(t){return!0===t||!1===t||rG(t)&&eX(t)==f},ed.isBuffer=rD,ed.isDate=rW,ed.isElement=/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */function(t){return rG(t)&&1===t.nodeType&&!r$(t)},ed.isEmpty=/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */function(t){if(null==t)return!0;if(rj(t)&&(rB(t)||"string"==typeof t||"function"==typeof t.splice||rD(t)||r1(t)||rI(t)))return!t.length;var n=og(t);if(n==v||n==b)return!t.size;if(oM(t))return!e6(t).length;for(var e in t)if(tO.call(t,e))return!1;return!0},ed.isEqual=/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */function(t,n){return e4(t,n)},ed.isEqualWith=/**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */function(t,n,e){var o=(e="function"==typeof e?e:i)?e(t,n):i;return o===i?e4(t,n,i,e):!!o},ed.isError=rF,ed.isFinite=/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */function(t){return"number"==typeof t&&n0(t)},ed.isFunction=rH,ed.isInteger=rU,ed.isLength=rq,ed.isMap=rK,ed.isMatch=/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */function(t,n){return t===n||e8(t,n,op(n))},ed.isMatchWith=/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */function(t,n,e){return e="function"==typeof e?e:i,e8(t,n,op(n),e)},ed.isNaN=/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */function(t){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return rY(t)&&t!=+t},ed.isNative=/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */function(t){if(oz(t))throw new tw("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return e5(t)},ed.isNil=/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */function(t){return null==t},ed.isNull=/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */function(t){return null===t},ed.isNumber=rY,ed.isObject=rV,ed.isObjectLike=rG,ed.isPlainObject=r$,ed.isRegExp=rJ,ed.isSafeInteger=/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */function(t){return rU(t)&&t>=-9007199254740991&&t<=9007199254740991},ed.isSet=rX,ed.isString=rQ,ed.isSymbol=r0,ed.isTypedArray=r1,ed.isUndefined=/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */function(t){return t===i},ed.isWeakMap=/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */function(t){return rG(t)&&og(t)==z},ed.isWeakSet=/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */function(t){return rG(t)&&"[object WeakSet]"==eX(t)},ed.join=/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */function(t,n){return null==t?"":n1.call(t,n)},ed.kebabCase=sz,ed.last=oX,ed.lastIndexOf=/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */function(t,n,e){var o=null==t?0:t.length;if(!o)return -1;var r=o;return e!==i&&(r=(r=r8(e))<0?n3(o+r,0):n9(r,o-1)),n==n?/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function(t,n,e){for(var i=e+1;i--&&t[i]!==n;);return i}(t,n,r):nw(t,nP,r,!0)},ed.lowerCase=sM,ed.lowerFirst=sC,ed.lt=r2,ed.lte=r3,ed.max=/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */function(t){return t&&t.length?eF(t,sN,eQ):i},ed.maxBy=/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */function(t,n){return t&&t.length?eF(t,of(n,2),eQ):i},ed.mean=/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */function(t){return nT(t,sN)},ed.meanBy=/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */function(t,n){return nT(t,of(n,2))},ed.min=/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */function(t){return t&&t.length?eF(t,sN,it):i},ed.minBy=/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */function(t,n){return t&&t.length?eF(t,of(n,2),it):i},ed.stubArray=sJ,ed.stubFalse=sX,ed.stubObject=/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */function(){return{}},ed.stubString=/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */function(){return""},ed.stubTrue=/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */function(){return!0},ed.multiply=s3,ed.nth=/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */function(t,n){return t&&t.length?is(t,r8(n)):i},ed.noConflict=/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */function(){return t4._===this&&(t4._=tj),this},ed.noop=sU,ed.now=rg,ed.pad=/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */function(t,n,e){t=st(t);var i=(n=r8(n))?nq(t):0;if(!n||i>=n)return t;var o=(n-i)/2;return i9(nJ(o),e)+t+i9(n$(o),e)},ed.padEnd=/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */function(t,n,e){t=st(t);var i=(n=r8(n))?nq(t):0;return n&&i<n?t+i9(n-i,e):t},ed.padStart=/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */function(t,n,e){t=st(t);var i=(n=r8(n))?nq(t):0;return n&&i<n?i9(n-i,e)+t:t},ed.parseInt=/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */function(t,n,e){return e||null==n?n=0:n&&(n=+n),n8(st(t).replace(Q,""),n||0)},ed.random=/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */function(t,n,e){if(e&&"boolean"!=typeof e&&oL(t,n,e)&&(n=e=i),e===i&&("boolean"==typeof n?(e=n,n=i):"boolean"==typeof t&&(e=t,t=i)),t===i&&n===i?(t=0,n=1):(t=r4(t),n===i?(n=t,t=0):n=r4(n)),t>n){var o=t;t=n,n=o}if(e||t%1||n%1){var r=n5();return n9(t+r*(n-t+t1("1e-"+((r+"").length-1))),n)}return ic(t,n)},ed.reduce=/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */function(t,n,e){var i=rB(t)?nm:nC,o=arguments.length<3;return i(t,of(n,4),e,o,eN)},ed.reduceRight=/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */function(t,n,e){var i=rB(t)?nv:nC,o=arguments.length<3;return i(t,of(n,4),e,o,eD)},ed.repeat=/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */function(t,n,e){return n=(e?oL(t,n,e):n===i)?1:r8(n),i_(st(t),n)},ed.replace=/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */function(){var t=arguments,n=st(t[0]);return t.length<3?n:n.replace(t[1],t[2])},ed.result=/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */function(t,n,e){n=iZ(n,t);var o=-1,r=n.length;for(r||(r=1,t=i);++o<r;){var s=null==t?i:t[oN(n[o])];s===i&&(o=r,s=e),t=rH(s)?s.call(t):s}return t},ed.round=s9,ed.runInContext=t,ed.sample=/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */function(t){return(rB(t)?ez:/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function(t){return ez(sb(t))})(t)},ed.size=/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */function(t){if(null==t)return 0;if(rj(t))return rQ(t)?nq(t):t.length;var n=og(t);return n==v||n==b?t.size:e6(t).length},ed.snakeCase=sS,ed.some=/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */function(t,n,e){var o=rB(t)?ng:iy;return e&&oL(t,n,e)&&(n=i),o(t,of(n,3))},ed.sortedIndex=/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */function(t,n){return ix(t,n)},ed.sortedIndexBy=/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */function(t,n,e){return iw(t,n,of(e,2))},ed.sortedIndexOf=/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */function(t,n){var e=null==t?0:t.length;if(e){var i=ix(t,n);if(i<e&&rA(t[i],n))return i}return -1},ed.sortedLastIndex=/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */function(t,n){return ix(t,n,!0)},ed.sortedLastIndexBy=/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */function(t,n,e){return iw(t,n,of(e,2),!0)},ed.sortedLastIndexOf=/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */function(t,n){if(null==t?0:t.length){var e=ix(t,n,!0)-1;if(rA(t[e],n))return e}return -1},ed.startCase=sk,ed.startsWith=/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */function(t,n,e){return t=st(t),e=null==e?0:eZ(r8(e),0,t.length),n=iP(n),t.slice(e,e+n.length)==n},ed.subtract=s4,ed.sum=/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */function(t){return t&&t.length?nS(t,sN):0},ed.sumBy=/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */function(t,n){return t&&t.length?nS(t,of(n,2)):0},ed.template=/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */function(t,n,e){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var o=ed.templateSettings;e&&oL(t,n,e)&&(n=i),t=st(t),n=si({},n,o,oe);var r,s,a=si({},n.imports,o.imports,oe),u=s_(a),h=nO(a,u),l=0,c=n.interpolate||td,f="__p += '",_=tT((n.escape||td).source+"|"+c.source+"|"+(c===G?ta:td).source+"|"+(n.evaluate||td).source+"|$","g"),p="//# sourceURL="+(tO.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tJ+"]")+"\n";t.replace(_,function(n,e,i,o,a,u){// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return i||(i=o),// Escape characters that can't be included in string literals.
f+=t.slice(l,u).replace(tm,nN),e&&(r=!0,f+="' +\n__e("+e+") +\n'"),a&&(s=!0,f+="';\n"+a+";\n__p += '"),i&&(f+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),l=u+n.length,n}),f+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var d=tO.call(n,"variable")&&n.variable;if(d){if(tr.test(d))throw new tw("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";// Cleanup code by stripping empty strings.
f=(s?f.replace(j,""):f).replace(N,"$1").replace(D,"$1;"),// Frame code as the function body.
f="function("+(d||"obj")+") {\n"+(d?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(r?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=sZ(function(){return tb(u,p+"return "+f).apply(i,h)});if(// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
m.source=f,rF(m))throw m;return m},ed.times=/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */function(t,n){if((t=r8(t))<1||t>9007199254740991)return[];var e=4294967295,i=n9(t,4294967295);n=of(n),t-=4294967295;for(var o=nk(i,n);++e<t;)n(e);return o},ed.toFinite=r4,ed.toInteger=r8,ed.toLength=r5,ed.toLower=/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */function(t){return st(t).toLowerCase()},ed.toNumber=r7,ed.toSafeInteger=/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */function(t){return t?eZ(r8(t),-9007199254740991,9007199254740991):0===t?t:0},ed.toString=st,ed.toUpper=/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */function(t){return st(t).toUpperCase()},ed.trim=/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */function(t,n,e){if((t=st(t))&&(e||n===i))return nE(t);if(!t||!(n=iP(n)))return t;var o=nV(t),r=nV(n),s=nI(o,r),a=nB(o,r)+1;return iI(o,s,a).join("")},ed.trimEnd=/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */function(t,n,e){if((t=st(t))&&(e||n===i))return t.slice(0,nG(t)+1);if(!t||!(n=iP(n)))return t;var o=nV(t),r=nB(o,nV(n))+1;return iI(o,0,r).join("")},ed.trimStart=/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */function(t,n,e){if((t=st(t))&&(e||n===i))return t.replace(Q,"");if(!t||!(n=iP(n)))return t;var o=nV(t),r=nI(o,nV(n));return iI(o,r).join("")},ed.truncate=/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */function(t,n){var e=30,o="...";if(rV(n)){var r="separator"in n?n.separator:r;e="length"in n?r8(n.length):e,o="omission"in n?iP(n.omission):o}var s=(t=st(t)).length;if(nD(t)){var a=nV(t);s=a.length}if(e>=s)return t;var u=e-nq(o);if(u<1)return o;var h=a?iI(a,0,u).join(""):t.slice(0,u);if(r===i)return h+o;if(a&&(u+=h.length-u),rJ(r)){if(t.slice(u).search(r)){var l,c=h;for(r.global||(r=tT(r.source,st(tu.exec(r))+"g")),r.lastIndex=0;l=r.exec(c);)var f=l.index;h=h.slice(0,f===i?u:f)}}else if(t.indexOf(iP(r),u)!=u){var _=h.lastIndexOf(r);_>-1&&(h=h.slice(0,_))}return h+o},ed.unescape=/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */function(t){return(t=st(t))&&H.test(t)?t.replace(W,nK):t},ed.uniqueId=/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */function(t){var n=++tZ;return st(t)+n},ed.upperCase=sE,ed.upperFirst=sA,// Add aliases.
ed.each=rl,ed.eachRight=rc,ed.first=oK,sH(ed,(tg={},eG(ed,function(t,n){tO.call(ed.prototype,n)||(tg[n]=t)}),tg),{chain:!1}),/*------------------------------------------------------------------------*//**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */ed.VERSION="4.17.21",// Assign default placeholders.
nh(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){ed[t].placeholder=ed}),// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
nh(["drop","take"],function(t,n){ey.prototype[t]=function(e){e=e===i?1:n3(r8(e),0);var o=this.__filtered__&&!n?new ey(this):this.clone();return o.__filtered__?o.__takeCount__=n9(e,o.__takeCount__):o.__views__.push({size:n9(e,4294967295),type:t+(o.__dir__<0?"Right":"")}),o},ey.prototype[t+"Right"]=function(n){return this.reverse()[t](n).reverse()}}),// Add `LazyWrapper` methods that accept an `iteratee` value.
nh(["filter","map","takeWhile"],function(t,n){var e=n+1,i=1==e||3==e;ey.prototype[t]=function(t){var n=this.clone();return n.__iteratees__.push({iteratee:of(t,3),type:e}),n.__filtered__=n.__filtered__||i,n}}),// Add `LazyWrapper` methods for `_.head` and `_.last`.
nh(["head","last"],function(t,n){var e="take"+(n?"Right":"");ey.prototype[t]=function(){return this[e](1).value()[0]}}),// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
nh(["initial","tail"],function(t,n){var e="drop"+(n?"":"Right");ey.prototype[t]=function(){return this.__filtered__?new ey(this):this[e](1)}}),ey.prototype.compact=function(){return this.filter(sN)},ey.prototype.find=function(t){return this.filter(t).head()},ey.prototype.findLast=function(t){return this.reverse().find(t)},ey.prototype.invokeMap=ip(function(t,n){return"function"==typeof t?new ey(this):this.map(function(e){return e3(e,t,n)})}),ey.prototype.reject=function(t){return this.filter(rM(of(t)))},ey.prototype.slice=function(t,n){t=r8(t);var e=this;return e.__filtered__&&(t>0||n<0)?new ey(e):(t<0?e=e.takeRight(-t):t&&(e=e.drop(t)),n!==i&&(e=(n=r8(n))<0?e.dropRight(-n):e.take(n-t)),e)},ey.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},ey.prototype.toArray=function(){return this.take(4294967295)},// Add `LazyWrapper` methods to `lodash.prototype`.
eG(ey.prototype,function(t,n){var e=/^(?:filter|find|map|reject)|While$/.test(n),o=/^(?:head|last)$/.test(n),r=ed[o?"take"+("last"==n?"Right":""):n],s=o||/^find/.test(n);r&&(ed.prototype[n]=function(){var n=this.__wrapped__,a=o?[1]:arguments,u=n instanceof ey,h=a[0],l=u||rB(n),c=function(t){var n=r.apply(ed,nd([t],a));return o&&f?n[0]:n};l&&e&&"function"==typeof h&&1!=h.length&&(u=l=!1);var f=this.__chain__,_=!!this.__actions__.length,p=s&&!f,d=u&&!_;if(!s&&l){n=d?n:new ey(this);var m=t.apply(n,a);return m.__actions__.push({func:rr,args:[c],thisArg:i}),new eg(m,f)}return p&&d?t.apply(this,a):(m=this.thru(c),p?o?m.value()[0]:m.value():m)})}),// Add `Array` methods to `lodash.prototype`.
nh(["pop","push","shift","sort","splice","unshift"],function(t){var n=tC[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|shift)$/.test(t);ed.prototype[t]=function(){var t=arguments;if(i&&!this.__chain__){var o=this.value();return n.apply(rB(o)?o:[],t)}return this[e](function(e){return n.apply(rB(e)?e:[],t)})}}),// Map minified method names to their real names.
eG(ey.prototype,function(t,n){var e=ed[n];if(e){var i=e.name+"";tO.call(es,i)||(es[i]=[]),es[i].push({name:n,func:e})}}),es[i0(i,2).name]=[{name:"wrapper",func:i}],// Add methods to `LazyWrapper`.
ey.prototype.clone=/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */function(){var t=new ey(this.__wrapped__);return t.__actions__=iH(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=iH(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=iH(this.__views__),t},ey.prototype.reverse=/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */function(){if(this.__filtered__){var t=new ey(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t},ey.prototype.value=/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */function(){var t=this.__wrapped__.value(),n=this.__dir__,e=rB(t),i=n<0,o=e?t.length:0,r=/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */function(t,n,e){for(var i=-1,o=e.length;++i<o;){var r=e[i],s=r.size;switch(r.type){case"drop":t+=s;break;case"dropRight":n-=s;break;case"take":n=n9(n,t+s);break;case"takeRight":t=n3(t,n-s)}}return{start:t,end:n}}(0,o,this.__views__),s=r.start,a=r.end,u=a-s,h=i?a:s-1,l=this.__iteratees__,c=l.length,f=0,_=n9(u,this.__takeCount__);if(!e||!i&&o==u&&_==u)return iS(t,this.__actions__);var p=[];t:for(;u--&&f<_;){for(var d=-1,m=t[h+=n];++d<c;){var v=l[d],g=v.iteratee,y=v.type,x=g(m);if(2==y)m=x;else if(!x){if(1==y)continue t;break t}}p[f++]=m}return p},// Add chain sequence methods to the `lodash` wrapper.
ed.prototype.at=rs,ed.prototype.chain=/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */function(){return ro(this)},ed.prototype.commit=/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */function(){return new eg(this.value(),this.__chain__)},ed.prototype.next=/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */function(){this.__values__===i&&(this.__values__=r9(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}},ed.prototype.plant=/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */function(t){for(var n,e=this;e instanceof ev;){var o=oW(e);o.__index__=0,o.__values__=i,n?r.__wrapped__=o:n=o;var r=o;e=e.__wrapped__}return r.__wrapped__=t,n},ed.prototype.reverse=/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function(){var t=this.__wrapped__;if(t instanceof ey){var n=t;return this.__actions__.length&&(n=new ey(this)),(n=n.reverse()).__actions__.push({func:rr,args:[o2],thisArg:i}),new eg(n,this.__chain__)}return this.thru(o2)},ed.prototype.toJSON=ed.prototype.valueOf=ed.prototype.value=/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */function(){return iS(this.__wrapped__,this.__actions__)},// Add lazy aliases.
ed.prototype.first=ed.prototype.head,t8&&(ed.prototype[t8]=/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */function(){return this}),ed)}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
t4._=nY,// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
define(function(){return nY})):t5?(// Export for Node.js.
(t5.exports=nY)._=nY,// Export for CommonJS support.
t8._=nY):t4._=nY}).call(this)}),// // Импорт live-conect to export
// //
// // Importing module (all mosule are execute in strict mode by default)
// //
// // For 'Name' import
// Exporting module
console.log("expo");const r=[];(function(t){/*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function n(t){var n,e,i,o;for(e=1,i=arguments.length;e<i;e++)for(n in o=arguments[e])t[n]=o[n];return t}// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var e,i,o,r,s,a,u,h,l,c,f=Object.create||function(){function t(){}return function(n){return t.prototype=n,new t}}();// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function _(t,n){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var i=e.call(arguments,2);return function(){return t.apply(n,i.length?i.concat(e.call(arguments)):arguments)}}// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var p=0;// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function d(t){return"_leaflet_id"in t||(t._leaflet_id=++p),t._leaflet_id}// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function m(t,n,e){var i,o,r,s;return s=function(){// reset lock and call if queued
i=!1,o&&(r.apply(e,o),o=!1)},r=function(){i?o=arguments:(// call and lock until later
t.apply(e,arguments),setTimeout(s,n),i=!0)}}// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function v(t,n,e){var i=n[1],o=n[0],r=i-o;return t===i&&e?t:((t-o)%r+r)%r+o}// @function falseFn(): Function
// Returns a function which always returns `false`.
function g(){return!1}// @function formatNum(num: Number, precision?: Number|false): Number
// Returns the number `num` rounded with specified `precision`.
// The default `precision` value is 6 decimal places.
// `false` can be passed to skip any processing (can be useful to avoid round-off errors).
function y(t,n){if(!1===n)return t;var e=Math.pow(10,void 0===n?6:n);return Math.round(t*e)/e}// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function x(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function w(t){return x(t).split(/\s+/)}// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function b(t,n){for(var e in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?f(t.options):{}),n)t.options[e]=n[e];return t.options}// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function P(t,n,e){var i=[];for(var o in t)i.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(n&&-1!==n.indexOf("?")?"&":"?")+i.join("&")}var T=/\{ *([\w_ -]+) *\}/g;// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function z(t,n){return t.replace(T,function(t,e){var i=n[e];if(void 0===i)throw Error("No value provided for variable "+t);return"function"==typeof i&&(i=i(n)),i})}// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var M=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function C(t,n){for(var e=0;e<t.length;e++)if(t[e]===n)return e;return -1}// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var S="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";// inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
function k(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var E=0;// fallback for IE 7-8
function A(t){var n=+new Date,e=Math.max(0,16-(n-E));return E=n+e,window.setTimeout(t,e)}var O=window.requestAnimationFrame||k("RequestAnimationFrame")||A,Z=window.cancelAnimationFrame||k("CancelAnimationFrame")||k("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function I(t,n,e){if(!e||O!==A)return O.call(window,_(t,n));t.call(n)}// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function B(t){t&&Z.call(window,t)}// @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!
function R(){}R.extend=function(t){// @function extend(props: Object): Function
// [Extends the current class](#class-inheritance) given the properties to be included.
// Returns a Javascript function that is a class constructor (to be called with `new`).
var e=function(){b(this),this.initialize&&this.initialize.apply(this,arguments),// call all constructor hooks
this.callInitHooks()},i=e.__super__=this.prototype,o=f(i);// inherit parent's statics
for(var r in o.constructor=e,e.prototype=o,this)Object.prototype.hasOwnProperty.call(this,r)&&"prototype"!==r&&"__super__"!==r&&(e[r]=this[r]);return t.statics&&n(e,t.statics),t.includes&&(function(t){/* global L: true */if("undefined"!=typeof L&&L&&L.Mixin){t=M(t)?t:[t];for(var n=0;n<t.length;n++)t[n]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",Error().stack)}}(t.includes),n.apply(null,[o].concat(t.includes))),// mix given properties into the prototype
n(o,t),delete o.statics,delete o.includes,o.options&&(o.options=i.options?f(i.options):{},n(o.options,t.options)),o._initHooks=[],// add method for calling all hooks
o.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,n=o._initHooks.length;t<n;t++)o._initHooks[t].call(this)}},e},// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
R.include=function(t){var e=this.prototype.options;return n(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
R.mergeOptions=function(t){return n(this.prototype.options,t),this},// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
R.addInitHook=function(t){var n=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,n)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};/*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */var j={/* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */on:function(t,n,e){// types can be a map of types/handlers
if("object"==typeof t)for(var i in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(i,t[i],n);else{// types can be a string of space-separated words
t=w(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],n,e)}return this},/* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */off:function(t,n,e){if(arguments.length){if("object"==typeof t)for(var i in t)this._off(i,t[i],n);else{t=w(t);for(var o=1==arguments.length,r=0,s=t.length;r<s;r++)o?this._off(t[r]):this._off(t[r],n,e)}}else delete this._events;return this},// attach listener (without syntactic sugar now)
_on:function(t,n,e,i){if("function"!=typeof n){console.warn("wrong listener type: "+typeof n);return}// check if fn already there
if(!1===this._listens(t,n,e)){e===this&&(e=void 0);var o={fn:n,ctx:e};i&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,n,e){if(this._events&&(i=this._events[t])){if(1==arguments.length){if(this._firingCount)// so they are not called if remove happens in fire
for(o=0,r=i.length;o<r;o++)i[o].fn=g;// clear all listeners for a type if function isn't specified
delete this._events[t];return}if("function"!=typeof n){console.warn("wrong listener type: "+typeof n);return}// find fn and remove it
var i,o,r,s=this._listens(t,n,e);if(!1!==s){var a=i[s];this._firingCount&&(// set the removed listener to noop so that's not called if remove happens in fire
a.fn=g,/* copy array in case events are being fired */this._events[t]=i=i.slice()),i.splice(s,1)}}},// @method fire(type: String, data?: Object, propagate?: Boolean): this
// Fires an event of the specified type. You can optionally provide a data
// object — the first argument of the listener function will contain its
// properties. The event can optionally be propagated to event parents.
fire:function(t,e,i){if(!this.listens(t,i))return this;var o=n({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var r=this._events[t];if(r){this._firingCount=this._firingCount+1||1;for(var s=0,a=r.length;s<a;s++){var u=r[s],h=u.fn;u.once&&this.off(t,h,u.ctx),h.call(u.ctx||this,o)}this._firingCount--}}return i&&this._propagateEvent(o),this},// @method listens(type: String, propagate?: Boolean): Boolean
// @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
// Returns `true` if a particular event type has any listeners attached to it.
// The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
listens:function(t,n,e,i){"string"!=typeof t&&console.warn('"string" type argument expected');// we don't overwrite the input `fn` value, because we need to use it for propagation
var o=n;"function"!=typeof n&&(i=!!n,o=void 0,e=void 0);var r=this._events&&this._events[t];if(r&&r.length&&!1!==this._listens(t,o,e))return!0;if(i){for(var s in this._eventParents)if(this._eventParents[s].listens(t,n,e,i))return!0}return!1},// returns the index (number) or false
_listens:function(t,n,e){if(!this._events)return!1;var i=this._events[t]||[];if(!n)return!!i.length;e===this&&(e=void 0);for(var o=0,r=i.length;o<r;o++)if(i[o].fn===n&&i[o].ctx===e)return o;return!1},// @method once(…): this
// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
once:function(t,n,e){// types can be a map of types/handlers
if("object"==typeof t)for(var i in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(i,t[i],n,!0);else{// types can be a string of space-separated words
t=w(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],n,e,!0)}return this},// @method addEventParent(obj: Evented): this
// Adds an event parent - an `Evented` that will receive propagated events
addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[d(t)]=t,this},// @method removeEventParent(obj: Evented): this
// Removes an event parent, so it will stop receiving propagated events
removeEventParent:function(t){return this._eventParents&&delete this._eventParents[d(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,n({layer:t.target,propagatedFrom:t.target},t),!0)}};// aliases; we should ditch those eventually
// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
j.addEventListener=j.on,// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)
// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
j.removeEventListener=j.clearAllEventListeners=j.off,// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
j.addOneTimeEventListener=j.once,// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
j.fireEvent=j.fire,// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
j.hasEventListeners=j.listens;var N=R.extend(j);/*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function D(t,n,e){// @property x: Number; The `x` coordinate of the point
this.x=e?Math.round(t):t,// @property y: Number; The `y` coordinate of the point
this.y=e?Math.round(n):n}var W=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.
// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function F(t,n,e){return t instanceof D?t:M(t)?new D(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new D(t.x,t.y):new D(t,n,e)}/*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function H(t,n){if(t)for(var e=n?[t,n]:t,i=0,o=e.length;i<o;i++)this.extend(e[i])}// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function U(t,n){return!t||t instanceof H?t:new H(t,n)}/*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function q(t,n){if(t)for(var e=n?[t,n]:t,i=0,o=e.length;i<o;i++)this.extend(e[i])}// TODO International date line?
// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function V(t,n){return t instanceof q?t:new q(t,n)}/* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function G(t,n,e){if(isNaN(t)||isNaN(n))throw Error("Invalid LatLng object: ("+t+", "+n+")");// @property lat: Number
// Latitude in degrees
this.lat=+t,// @property lng: Number
// Longitude in degrees
this.lng=+n,void 0!==e&&(this.alt=+e)}// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
function K(t,n,e){return t instanceof G?t:M(t)&&"object"!=typeof t[0]?3===t.length?new G(t[0],t[1],t[2]):2===t.length?new G(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new G(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===n?null:new G(t,n,e)}D.prototype={// @method clone(): Point
// Returns a copy of the current point.
clone:function(){return new D(this.x,this.y)},// @method add(otherPoint: Point): Point
// Returns the result of addition of the current and the given points.
add:function(t){// non-destructive, returns a new point
return this.clone()._add(F(t))},_add:function(t){return(// destructive, used directly for performance in situations where it's safe to modify existing point
this.x+=t.x,this.y+=t.y,this)},// @method subtract(otherPoint: Point): Point
// Returns the result of subtraction of the given point from the current.
subtract:function(t){return this.clone()._subtract(F(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},// @method divideBy(num: Number): Point
// Returns the result of division of the current point by the given number.
divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},// @method multiplyBy(num: Number): Point
// Returns the result of multiplication of the current point by the given number.
multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},// @method scaleBy(scale: Point): Point
// Multiply each coordinate of the current point by each coordinate of
// `scale`. In linear algebra terms, multiply the point by the
// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
// defined by `scale`.
scaleBy:function(t){return new D(this.x*t.x,this.y*t.y)},// @method unscaleBy(scale: Point): Point
// Inverse of `scaleBy`. Divide each coordinate of the current point by
// each coordinate of `scale`.
unscaleBy:function(t){return new D(this.x/t.x,this.y/t.y)},// @method round(): Point
// Returns a copy of the current point with rounded coordinates.
round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},// @method floor(): Point
// Returns a copy of the current point with floored coordinates (rounded down).
floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},// @method ceil(): Point
// Returns a copy of the current point with ceiled coordinates (rounded up).
ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},// @method trunc(): Point
// Returns a copy of the current point with truncated coordinates (rounded towards zero).
trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=W(this.x),this.y=W(this.y),this},// @method distanceTo(otherPoint: Point): Number
// Returns the cartesian distance between the current and the given points.
distanceTo:function(t){var n=(t=F(t)).x-this.x,e=t.y-this.y;return Math.sqrt(n*n+e*e)},// @method equals(otherPoint: Point): Boolean
// Returns `true` if the given point has the same coordinates.
equals:function(t){return(t=F(t)).x===this.x&&t.y===this.y},// @method contains(otherPoint: Point): Boolean
// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
contains:function(t){return Math.abs((t=F(t)).x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},// @method toString(): String
// Returns a string representation of the point for debugging purposes.
toString:function(){return"Point("+y(this.x)+", "+y(this.y)+")"}},H.prototype={// @method extend(point: Point): this
// Extends the bounds to contain the given point.
// @alternative
// @method extend(otherBounds: Bounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var n,e;if(!t)return this;if(t instanceof D||"number"==typeof t[0]||"x"in t)n=e=F(t);else if(n=(t=U(t)).min,e=t.max,!n||!e)return this;return this.min||this.max?(this.min.x=Math.min(n.x,this.min.x),this.max.x=Math.max(e.x,this.max.x),this.min.y=Math.min(n.y,this.min.y),this.max.y=Math.max(e.y,this.max.y)):(this.min=n.clone(),this.max=e.clone()),this},// @method getCenter(round?: Boolean): Point
// Returns the center point of the bounds.
getCenter:function(t){return F((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},// @method getBottomLeft(): Point
// Returns the bottom-left point of the bounds.
getBottomLeft:function(){return F(this.min.x,this.max.y)},// @method getTopRight(): Point
// Returns the top-right point of the bounds.
getTopRight:function(){return F(this.max.x,this.min.y)},// @method getTopLeft(): Point
// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
getTopLeft:function(){return this.min;// left, top
},// @method getBottomRight(): Point
// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
getBottomRight:function(){return this.max;// right, bottom
},// @method getSize(): Point
// Returns the size of the given bounds
getSize:function(){return this.max.subtract(this.min)},// @method contains(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains(point: Point): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){var n,e;return(t="number"==typeof t[0]||t instanceof D?F(t):U(t))instanceof H?(n=t.min,e=t.max):n=e=t,n.x>=this.min.x&&e.x<=this.max.x&&n.y>=this.min.y&&e.y<=this.max.y},// @method intersects(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds
// intersect if they have at least one point in common.
intersects:function(t){t=U(t);var n=this.min,e=this.max,i=t.min,o=t.max,r=o.x>=n.x&&i.x<=e.x,s=o.y>=n.y&&i.y<=e.y;return r&&s},// @method overlaps(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds
// overlap if their intersection is an area.
overlaps:function(t){t=U(t);var n=this.min,e=this.max,i=t.min,o=t.max,r=o.x>n.x&&i.x<e.x,s=o.y>n.y&&i.y<e.y;return r&&s},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this.min&&this.max)},// @method pad(bufferRatio: Number): Bounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var n=this.min,e=this.max,i=Math.abs(n.x-e.x)*t,o=Math.abs(n.y-e.y)*t;return U(F(n.x-i,n.y-o),F(e.x+i,e.y+o))},// @method equals(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle is equivalent to the given bounds.
equals:function(t){return!!t&&(t=U(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},q.prototype={// @method extend(latlng: LatLng): this
// Extend the bounds to contain the given point
// @alternative
// @method extend(otherBounds: LatLngBounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var n,e,i=this._southWest,o=this._northEast;if(t instanceof G)n=t,e=t;else if(!(t instanceof q))return t?this.extend(K(t)||V(t)):this;else if(n=t._southWest,e=t._northEast,!n||!e)return this;return i||o?(i.lat=Math.min(n.lat,i.lat),i.lng=Math.min(n.lng,i.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new G(n.lat,n.lng),this._northEast=new G(e.lat,e.lng)),this},// @method pad(bufferRatio: Number): LatLngBounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var n=this._southWest,e=this._northEast,i=Math.abs(n.lat-e.lat)*t,o=Math.abs(n.lng-e.lng)*t;return new q(new G(n.lat-i,n.lng-o),new G(e.lat+i,e.lng+o))},// @method getCenter(): LatLng
// Returns the center point of the bounds.
getCenter:function(){return new G((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},// @method getSouthWest(): LatLng
// Returns the south-west point of the bounds.
getSouthWest:function(){return this._southWest},// @method getNorthEast(): LatLng
// Returns the north-east point of the bounds.
getNorthEast:function(){return this._northEast},// @method getNorthWest(): LatLng
// Returns the north-west point of the bounds.
getNorthWest:function(){return new G(this.getNorth(),this.getWest())},// @method getSouthEast(): LatLng
// Returns the south-east point of the bounds.
getSouthEast:function(){return new G(this.getSouth(),this.getEast())},// @method getWest(): Number
// Returns the west longitude of the bounds
getWest:function(){return this._southWest.lng},// @method getSouth(): Number
// Returns the south latitude of the bounds
getSouth:function(){return this._southWest.lat},// @method getEast(): Number
// Returns the east longitude of the bounds
getEast:function(){return this._northEast.lng},// @method getNorth(): Number
// Returns the north latitude of the bounds
getNorth:function(){return this._northEast.lat},// @method contains(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains (latlng: LatLng): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){t="number"==typeof t[0]||t instanceof G||"lat"in t?K(t):V(t);var n,e,i=this._southWest,o=this._northEast;return t instanceof q?(n=t.getSouthWest(),e=t.getNorthEast()):n=e=t,n.lat>=i.lat&&e.lat<=o.lat&&n.lng>=i.lng&&e.lng<=o.lng},// @method intersects(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
intersects:function(t){t=V(t);var n=this._southWest,e=this._northEast,i=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=n.lat&&i.lat<=e.lat,s=o.lng>=n.lng&&i.lng<=e.lng;return r&&s},// @method overlaps(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
overlaps:function(t){t=V(t);var n=this._southWest,e=this._northEast,i=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>n.lat&&i.lat<e.lat,s=o.lng>n.lng&&i.lng<e.lng;return r&&s},// @method toBBoxString(): String
// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,n){return!!t&&(t=V(t),this._southWest.equals(t.getSouthWest(),n)&&this._northEast.equals(t.getNorthEast(),n))},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this._southWest&&this._northEast)}},G.prototype={// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,n){return!!t&&(t=K(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===n?1e-9:n))},// @method toString(): String
// Returns a string representation of the point (for debugging purposes).
toString:function(t){return"LatLng("+y(this.lat,t)+", "+y(this.lng,t)+")"},// @method distanceTo(otherLatLng: LatLng): Number
// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
distanceTo:function(t){return $.distance(this,K(t))},// @method wrap(): LatLng
// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
wrap:function(){return $.wrapLatLng(this)},// @method toBounds(sizeInMeters: Number): LatLngBounds
// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
toBounds:function(t){var n=180*t/40075017,e=n/Math.cos(Math.PI/180*this.lat);return V([this.lat-n,this.lng-e],[this.lat+n,this.lng+e])},clone:function(){return new G(this.lat,this.lng,this.alt)}};/*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */var Y={// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
// Projects geographical coordinates into pixel coordinates for a given zoom.
latLngToPoint:function(t,n){var e=this.projection.project(t),i=this.scale(n);return this.transformation._transform(e,i)},// @method pointToLatLng(point: Point, zoom: Number): LatLng
// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
// zoom into geographical coordinates.
pointToLatLng:function(t,n){var e=this.scale(n),i=this.transformation.untransform(t,e);return this.projection.unproject(i)},// @method project(latlng: LatLng): Point
// Projects geographical coordinates into coordinates in units accepted for
// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
project:function(t){return this.projection.project(t)},// @method unproject(point: Point): LatLng
// Given a projected coordinate returns the corresponding LatLng.
// The inverse of `project`.
unproject:function(t){return this.projection.unproject(t)},// @method scale(zoom: Number): Number
// Returns the scale used when transforming projected coordinates into
// pixel coordinates for a particular zoom. For example, it returns
// `256 * 2^zoom` for Mercator-based CRS.
scale:function(t){return 256*Math.pow(2,t)},// @method zoom(scale: Number): Number
// Inverse of `scale()`, returns the zoom level corresponding to a scale
// factor of `scale`.
zoom:function(t){return Math.log(t/256)/Math.LN2},// @method getProjectedBounds(zoom: Number): Bounds
// Returns the projection's bounds scaled and transformed for the provided `zoom`.
getProjectedBounds:function(t){if(this.infinite)return null;var n=this.projection.bounds,e=this.scale(t),i=this.transformation.transform(n.min,e),o=this.transformation.transform(n.max,e);return new H(i,o)},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates.
// @property code: String
// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
//
// @property wrapLng: Number[]
// An array of two numbers defining whether the longitude (horizontal) coordinate
// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
//
// @property wrapLat: Number[]
// Like `wrapLng`, but for the latitude (vertical) axis.
// wrapLng: [min, max],
// wrapLat: [min, max],
// @property infinite: Boolean
// If true, the coordinate space will be unbounded (infinite in both axes)
infinite:!1,// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where lat and lng has been wrapped according to the
// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
wrapLatLng:function(t){var n=this.wrapLng?v(t.lng,this.wrapLng,!0):t.lng,e=this.wrapLat?v(t.lat,this.wrapLat,!0):t.lat,i=t.alt;return new G(e,n,i)},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring
// that its center is within the CRS's bounds.
// Only accepts actual `L.LatLngBounds` instances, not arrays.
wrapLatLngBounds:function(t){var n=t.getCenter(),e=this.wrapLatLng(n),i=n.lat-e.lat,o=n.lng-e.lng;if(0===i&&0===o)return t;var r=t.getSouthWest(),s=t.getNorthEast(),a=new G(r.lat-i,r.lng-o),u=new G(s.lat-i,s.lng-o);return new q(a,u)}},$=n({},Y,{wrapLng:[-180,180],// Mean Earth Radius, as recommended for use by
// the International Union of Geodesy and Geophysics,
// see https://rosettacode.org/wiki/Haversine_formula
R:6371e3,// distance between two geographical points using spherical law of cosines approximation
distance:function(t,n){var e=Math.PI/180,i=t.lat*e,o=n.lat*e,r=Math.sin((n.lat-t.lat)*e/2),s=Math.sin((n.lng-t.lng)*e/2),a=r*r+Math.cos(i)*Math.cos(o)*s*s;return this.R*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))}}),J={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var n=Math.PI/180,e=this.MAX_LATITUDE,i=Math.sin(Math.max(Math.min(e,t.lat),-e)*n);return new D(this.R*t.lng*n,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(t){var n=180/Math.PI;return new G((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*n,t.x*n/this.R)},bounds:(u=6378137*Math.PI,new H([-u,-u],[u,u]))};/*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function X(t,n,e,i){if(M(t)){// use array properties
this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=n,this._c=e,this._d=i}// factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.
// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.
function Q(t,n,e,i){return new X(t,n,e,i)}X.prototype={// @method transform(point: Point, scale?: Number): Point
// Returns a transformed point, optionally multiplied by the given scale.
// Only accepts actual `L.Point` instances, not arrays.
transform:function(t,n){return this._transform(t.clone(),n)},// destructive transform (faster)
_transform:function(t,n){return n=n||1,t.x=n*(this._a*t.x+this._b),t.y=n*(this._c*t.y+this._d),t},// @method untransform(point: Point, scale?: Number): Point
// Returns the reverse transformation of the given point, optionally divided
// by the given scale. Only accepts actual `L.Point` instances, not arrays.
untransform:function(t,n){return n=n||1,new D((t.x/n-this._b)/this._a,(t.y/n-this._d)/this._c)}};/*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */var tt=n({},$,{code:"EPSG:3857",projection:J,transformation:Q(h=.5/(Math.PI*J.R),.5,-h,.5)}),tn=n({},tt,{code:"EPSG:900913"});// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:
// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function te(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function ti(t,n){var e,i,o,r,s,a,u="";for(e=0,o=t.length;e<o;e++){for(i=0,r=(s=t[e]).length;i<r;i++)a=s[i],u+=(i?"L":"M")+a.x+" "+a.y;// closes the ring for polygons; "x" is VML syntax
u+=n?tB.svg?"z":"x":""}// SVG complains about empty path strings
return u||"M0 0"}/*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */var to=document.documentElement.style,tr="ActiveXObject"in window,ts=tr&&!document.addEventListener,ta="msLaunchUri"in navigator&&!("documentMode"in document),tu=tI("webkit"),th=tI("android"),tl=tI("android 2")||tI("android 3"),tc=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),tf=th&&tI("Google")&&tc<537&&!("AudioNode"in window),t_=!!window.opera,tp=!ta&&tI("chrome"),td=tI("gecko")&&!tu&&!t_&&!tr,tm=!tp&&tI("safari"),tv=tI("phantom"),tg="OTransition"in to,ty=0===navigator.platform.indexOf("Win"),tx=tr&&"transition"in to,tw="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!tl,tb="MozPerspective"in to,tL=!window.L_DISABLE_3D&&(tx||tw||tb)&&!tg&&!tv,tP="undefined"!=typeof orientation||tI("mobile"),tT=!window.PointerEvent&&window.MSPointerEvent,tz=!!(window.PointerEvent||tT),tM="ontouchstart"in window||!!window.TouchEvent,tC=!window.L_NO_TOUCH&&(tM||tz),tS=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,tk=function(){var t=!1;try{var n=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",g,n),window.removeEventListener("testPassiveEventSupport",g,n)}catch(t){// Errors can safely be ignored since this is only a browser support test.
}return t}(),tE=!!document.createElement("canvas").getContext,tA=!!(document.createElementNS&&te("svg").createSVGRect),tO=!!tA&&((l=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(l.firstChild&&l.firstChild.namespaceURI)),tZ=!tA&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var n=t.firstChild;return n.style.behavior="url(#default#VML)",n&&"object"==typeof n.adj}catch(t){return!1}}();function tI(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var tB={ie:tr,ielt9:ts,edge:ta,webkit:tu,android:th,android23:tl,androidStock:tf,opera:t_,chrome:tp,gecko:td,safari:tm,phantom:tv,opera12:tg,win:ty,ie3d:tx,webkit3d:tw,gecko3d:tb,any3d:tL,mobile:tP,mobileWebkit:tP&&tu,mobileWebkit3d:tP&&tw,msPointer:tT,pointer:tz,touch:tC,touchNative:tM,mobileOpera:tP&&t_,mobileGecko:tP&&td,retina:tS,passiveEvents:tk,canvas:tE,svg:tA,vml:tZ,inlineSvg:tO,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},tR=tB.msPointer?"MSPointerDown":"pointerdown",tj=tB.msPointer?"MSPointerMove":"pointermove",tN=tB.msPointer?"MSPointerUp":"pointerup",tD=tB.msPointer?"MSPointerCancel":"pointercancel",tW={touchstart:tR,touchmove:tj,touchend:tN,touchcancel:tD},tF={touchstart:function(t,n){n.MSPOINTER_TYPE_TOUCH&&n.pointerType===n.MSPOINTER_TYPE_TOUCH&&nb(n),tK(t,n)},touchmove:tK,touchend:tK,touchcancel:tK},tH={},tU=!1;function tq(t){tH[t.pointerId]=t}function tV(t){tH[t.pointerId]&&(tH[t.pointerId]=t)}function tG(t){delete tH[t.pointerId]}function tK(t,n){if(n.pointerType!==(n.MSPOINTER_TYPE_MOUSE||"mouse")){for(var e in n.touches=[],tH)n.touches.push(tH[e]);n.changedTouches=[n],t(n)}}/*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var tY=nn(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),t$=nn(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),tJ="webkitTransition"===t$||"OTransition"===t$?t$+"End":"transitionend";// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function tX(t){return"string"==typeof t?document.getElementById(t):t}// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function tQ(t,n){var e=t.style[n]||t.currentStyle&&t.currentStyle[n];if((!e||"auto"===e)&&document.defaultView){var i=document.defaultView.getComputedStyle(t,null);e=i?i[n]:null}return"auto"===e?null:e}// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function t0(t,n,e){var i=document.createElement(t);return i.className=n||"",e&&e.appendChild(i),i}// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function t1(t){var n=t.parentNode;n&&n.removeChild(t)}// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function t2(t){for(;t.firstChild;)t.removeChild(t.firstChild)}// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function t3(t){var n=t.parentNode;n&&n.lastChild!==t&&n.appendChild(t)}// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function t9(t){var n=t.parentNode;n&&n.firstChild!==t&&n.insertBefore(t,n.firstChild)}// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function t4(t,n){if(void 0!==t.classList)return t.classList.contains(n);var e=t6(t);return e.length>0&&RegExp("(^|\\s)"+n+"(\\s|$)").test(e)}// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function t8(t,n){if(void 0!==t.classList)for(var e=w(n),i=0,o=e.length;i<o;i++)t.classList.add(e[i]);else if(!t4(t,n)){var r=t6(t);t7(t,(r?r+" ":"")+n)}}// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function t5(t,n){void 0!==t.classList?t.classList.remove(n):t7(t,x((" "+t6(t)+" ").replace(" "+n+" "," ")))}// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function t7(t,n){void 0===t.className.baseVal?t.className=n:t.className.baseVal=n}// @function getClass(el: HTMLElement): String
// Returns the element's class.
function t6(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function nt(t,n){"opacity"in t.style?t.style.opacity=n:"filter"in t.style&&function(t,n){var e=!1,i="DXImageTransform.Microsoft.Alpha";// filters collection throws an error if we try to retrieve a filter that doesn't exist
try{e=t.filters.item(i)}catch(t){// don't set opacity to 1 if we haven't already set an opacity,
// it isn't needed and breaks transparent pngs.
if(1===n)return}n=Math.round(100*n),e?(e.Enabled=100!==n,e.Opacity=n):t.style.filter+=" progid:"+i+"(opacity="+n+")"}(t,n)}// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function nn(t){for(var n=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in n)return t[e];return!1}// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function ne(t,n,e){var i=n||new D(0,0);t.style[tY]=(tB.ie3d?"translate("+i.x+"px,"+i.y+"px)":"translate3d("+i.x+"px,"+i.y+"px,0)")+(e?" scale("+e+")":"")}// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function ni(t,n){/*eslint-disable */t._leaflet_pos=n,tB.any3d?ne(t,n):(t.style.left=n.x+"px",t.style.top=n.y+"px")}// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function no(t){// this method is only used for elements previously positioned using setPosition,
// so it's safe to cache the position for performance
return t._leaflet_pos||new D(0,0)}if("onselectstart"in document)e=function(){nf(window,"selectstart",nb)},i=function(){np(window,"selectstart",nb)};else{var nr=nn(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);e=function(){if(nr){var t=document.documentElement.style;o=t[nr],t[nr]="none"}},i=function(){nr&&(document.documentElement.style[nr]=o,o=void 0)}}// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function ns(){nf(window,"dragstart",nb)}// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function na(){np(window,"dragstart",nb)}// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function nu(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(nh(),r=t,s=t.style.outlineStyle,t.style.outlineStyle="none",nf(window,"keydown",nh))}// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function nh(){r&&(r.style.outlineStyle=s,r=void 0,s=void 0,np(window,"keydown",nh))}// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function nl(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body)return t}// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function nc(t){var n=t.getBoundingClientRect();// Read-only in old browsers.
return{x:n.width/t.offsetWidth||1,y:n.height/t.offsetHeight||1,boundingClientRect:n}}/*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).
// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function nf(t,n,e,i){if(n&&"object"==typeof n)for(var o in n)nv(t,o,n[o],e);else{n=w(n);for(var r=0,s=n.length;r<s;r++)nv(t,n[r],e,i)}return this}var n_="_leaflet_events";// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.
// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
// @alternative
// @function off(el: HTMLElement, types: String): this
// Removes all previously added listeners of given types.
// @alternative
// @function off(el: HTMLElement): this
// Removes all previously added listeners from given HTMLElement
function np(t,n,e,i){if(1==arguments.length)nd(t),delete t[n_];else if(n&&"object"==typeof n)for(var o in n)ng(t,o,n[o],e);else if(n=w(n),2==arguments.length)nd(t,function(t){return -1!==C(n,t)});else for(var r=0,s=n.length;r<s;r++)ng(t,n[r],e,i);return this}function nd(t,n){for(var e in t[n_]){var i=e.split(/\d/)[0];(!n||n(i))&&ng(t,i,null,null,e)}}var nm={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function nv(t,n,e,i){var o=n+d(e)+(i?"_"+d(i):"");if(t[n_]&&t[n_][o])return this;var r=function(n){return e.call(i||t,n||window.event)},s=r;!tB.touchNative&&tB.pointer&&0===n.indexOf("touch")?r=// Provides a touch events wrapper for (ms)pointer events.
// ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
function(t,n,e){return("touchstart"===n&&(tU||(// we listen document as any drags that end by moving the touch off the screen get fired there
document.addEventListener(tR,tq,!0),document.addEventListener(tj,tV,!0),document.addEventListener(tN,tG,!0),document.addEventListener(tD,tG,!0),tU=!0)),tF[n])?(e=tF[n].bind(this,e),t.addEventListener(tW[n],e,!1),e):(console.warn("wrong event specified:",n),g)}(t,n,r):tB.touch&&"dblclick"===n?r=function(t,n){// Most browsers handle double tap natively
t.addEventListener("dblclick",n);// On some platforms the browser doesn't fire native dblclicks for touch events.
// It seems that in all such cases `detail` property of `click` event is always `1`.
// So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
var e,i=0;function o(t){if(1!==t.detail){e=t.detail;// keep in sync to avoid false dblclick in some cases
return}if("mouse"!==t.pointerType&&(!t.sourceCapabilities||t.sourceCapabilities.firesTouchEvents)){// When clicking on an <input>, the browser generates a click on its
// <label> (and vice versa) triggering two clicks in quick succession.
// This ignores clicks on elements which are a label with a 'for'
// attribute (or children of such a label), but not children of
// a <input>.
var o=nP(t);if(!o.some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})||o.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})){var r=Date.now();r-i<=200?2==++e&&n(/*
   * Extends the event handling code with double tap support for mobile browsers.
   *
   * Note: currently most browsers fire native dblclick, with only a few exceptions
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
   */function(t){// in modern browsers `type` cannot be just overridden:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
var n,e,i={};for(e in t)n=t[e],i[e]=n&&n.bind?n.bind(t):n;return t=i,i.type="dblclick",i.detail=2,i.isTrusted=!1,i._simulated=!0,i}(t)):e=1,i=r}}}return t.addEventListener("click",o),{dblclick:n,simDblclick:o}}(t,r):"addEventListener"in t?"touchstart"===n||"touchmove"===n||"wheel"===n||"mousewheel"===n?t.addEventListener(nm[n]||n,r,!!tB.passiveEvents&&{passive:!1}):"mouseenter"===n||"mouseleave"===n?(r=function(n){nC(t,n=n||window.event)&&s(n)},t.addEventListener(nm[n],r,!1)):t.addEventListener(n,s,!1):t.attachEvent("on"+n,r),t[n_]=t[n_]||{},t[n_][o]=r}function ng(t,n,e,i,o){o=o||n+d(e)+(i?"_"+d(i):"");var r=t[n_]&&t[n_][o];if(!r)return this;!tB.touchNative&&tB.pointer&&0===n.indexOf("touch")?function(t,n,e){if(!tW[n]){console.warn("wrong event specified:",n);return}t.removeEventListener(tW[n],e,!1)}(t,n,r):tB.touch&&"dblclick"===n?(t.removeEventListener("dblclick",r.dblclick),t.removeEventListener("click",r.simDblclick)):"removeEventListener"in t?t.removeEventListener(nm[n]||n,r,!1):t.detachEvent("on"+n,r),t[n_][o]=null}// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function ny(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
function nx(t){return nv(t,"wheel",ny),this}// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function nw(t){return nf(t,"mousedown touchstart dblclick contextmenu",ny),t._leaflet_disable_click=!0,this}// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function nb(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function nL(t){return nb(t),ny(t),this}// @function getPropagationPath(ev: DOMEvent): Array
// Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
// Returns an array containing the `HTMLElement`s that the given DOM event
// should propagate to (if not stopped).
function nP(t){if(t.composedPath)return t.composedPath();for(var n=[],e=t.target;e;)n.push(e),e=e.parentNode;return n}// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function nT(t,n){if(!n)return new D(t.clientX,t.clientY);var e=nc(n),i=e.boundingClientRect;// left and top  values are in page scale (like the event clientX/Y)
return new D(// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
(t.clientX-i.left)/e.x-n.clientLeft,(t.clientY-i.top)/e.y-n.clientTop)}//  except , Safari and
// We need double the scroll pixels (see #7403 and #4538) for all Browsers
// except OSX (Mac) -> 3x, Chrome running on Linux 1x
var nz=tB.linux&&tB.chrome?window.devicePixelRatio:tB.mac?3*window.devicePixelRatio:window.devicePixelRatio>0?2*window.devicePixelRatio:1;// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a wheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function nM(t){return tB.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/nz:t.deltaY&&1===t.deltaMode?-(20*t.deltaY):t.deltaY&&2===t.deltaMode?-(60*t.deltaY):t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&32765>Math.abs(t.detail)?-(20*t.detail):t.detail?-(60*(t.detail/32765)):0}// check if element really left/entered the event target (for mouseenter/mouseleave)
function nC(t,n){var e=n.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}/*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */var nS=N.extend({// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
// Run an animation of a given element to a new position, optionally setting
// duration in seconds (`0.25` by default) and easing linearity factor (3rd
// argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
// `0.5` by default).
run:function(t,n,e,i){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(i||.5,.2),this._startPos=no(t),this._offset=n.subtract(this._startPos),this._startTime=+new Date,// @event start: Event
// Fired when the animation starts
this.fire("start"),this._animate()},// @method stop()
// Stops the animation (if currently running).
stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){// animation loop
this._animId=I(this._animate,this),this._step()},_step:function(t){var n=+new Date-this._startTime,e=1e3*this._duration;n<e?this._runFrame(this._easeOut(n/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,n){var e=this._startPos.add(this._offset.multiplyBy(t));n&&e._round(),ni(this._el,e),// @event step: Event
// Fired continuously during the animation.
this.fire("step")},_complete:function(){B(this._animId),this._inProgress=!1,// @event end: Event
// Fired when the animation ends.
this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),nk=N.extend({options:{// @section Map State Options
// @option crs: CRS = L.CRS.EPSG3857
// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
// sure what it means.
crs:tt,// @option center: LatLng = undefined
// Initial geographic center of the map
center:void 0,// @option zoom: Number = undefined
// Initial map zoom level
zoom:void 0,// @option minZoom: Number = *
// Minimum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the lowest of their `minZoom` options will be used instead.
minZoom:void 0,// @option maxZoom: Number = *
// Maximum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the highest of their `maxZoom` options will be used instead.
maxZoom:void 0,// @option layers: Layer[] = []
// Array of layers that will be added to the map initially
layers:[],// @option maxBounds: LatLngBounds = null
// When this option is set, the map restricts the view to the given
// geographical bounds, bouncing the user back if the user tries to pan
// outside the view. To set the restriction dynamically, use
// [`setMaxBounds`](#map-setmaxbounds) method.
maxBounds:void 0,// @option renderer: Renderer = *
// The default method for drawing vector layers on the map. `L.SVG`
// or `L.Canvas` by default depending on browser support.
renderer:void 0,// @section Animation Options
// @option zoomAnimation: Boolean = true
// Whether the map zoom animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
zoomAnimation:!0,// @option zoomAnimationThreshold: Number = 4
// Won't animate zoom if the zoom difference exceeds this value.
zoomAnimationThreshold:4,// @option fadeAnimation: Boolean = true
// Whether the tile fade animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
fadeAnimation:!0,// @option markerZoomAnimation: Boolean = true
// Whether markers animate their zoom with the zoom animation, if disabled
// they will disappear for the length of the animation. By default it's
// enabled in all browsers that support CSS3 Transitions except Android.
markerZoomAnimation:!0,// @option transform3DLimit: Number = 2^23
// Defines the maximum size of a CSS translation transform. The default
// value should not be changed unless a web browser positions layers in
// the wrong place after doing a large `panBy`.
transform3DLimit:8388608,// @section Interaction Options
// @option zoomSnap: Number = 1
// Forces the map's zoom level to always be a multiple of this, particularly
// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
// By default, the zoom level snaps to the nearest integer; lower values
// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
zoomSnap:1,// @option zoomDelta: Number = 1
// Controls how much the map's zoom level will change after a
// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
zoomDelta:1,// @option trackResize: Boolean = true
// Whether the map automatically handles browser window resize to update itself.
trackResize:!0},initialize:function(t,n){n=b(this,n),// Make sure to assign internal flags at the beginning,
// to avoid inconsistent state in some edge cases.
this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),// hack for https://github.com/Leaflet/Leaflet/issues/1980
this._onResize=_(this._onResize,this),this._initEvents(),n.maxBounds&&this.setMaxBounds(n.maxBounds),void 0!==n.zoom&&(this._zoom=this._limitZoom(n.zoom)),n.center&&void 0!==n.zoom&&this.setView(K(n.center),n.zoom,{reset:!0}),this.callInitHooks(),// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
this._zoomAnimated=t$&&tB.any3d&&!tB.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),nf(this._proxy,tJ,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},// @section Methods for modifying map state
// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) with the given
// animation options.
setView:function(t,e,i){return(e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(K(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i&&(void 0!==i.animate&&(i.zoom=n({animate:i.animate},i.zoom),i.pan=n({animate:i.animate,duration:i.duration},i.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan)))?// prevent resize handler call, the view will refresh after animation anyway
clearTimeout(this._sizeTimer):// animation didn't start, just reset the map view
this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},// @method setZoom(zoom: Number, options?: Zoom/pan options): this
// Sets the zoom of the map.
setZoom:function(t,n){return this._loaded?this.setView(this.getCenter(),t,{zoom:n}):(this._zoom=t,this)},// @method zoomIn(delta?: Number, options?: Zoom options): this
// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomIn:function(t,n){return t=t||(tB.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,n)},// @method zoomOut(delta?: Number, options?: Zoom options): this
// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomOut:function(t,n){return t=t||(tB.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,n)},// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified geographical point on the map
// stationary (e.g. used internally for scroll zoom and double-click zoom).
// @alternative
// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
setZoomAround:function(t,n,e){var i=this.getZoomScale(n),o=this.getSize().divideBy(2),r=(t instanceof D?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/i),s=this.containerPointToLatLng(o.add(r));return this.setView(s,n,{zoom:e})},_getBoundsCenterZoom:function(t,n){n=n||{},t=t.getBounds?t.getBounds():V(t);var e=F(n.paddingTopLeft||n.padding||[0,0]),i=F(n.paddingBottomRight||n.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(i));if((o="number"==typeof n.maxZoom?Math.min(n.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var r=i.subtract(e).divideBy(2),s=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(s.add(a).divideBy(2).add(r),o),zoom:o}},// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets a map view that contains the given geographical bounds with the
// maximum zoom level possible.
fitBounds:function(t,n){if(!(t=V(t)).isValid())throw Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,n);return this.setView(e.center,e.zoom,n)},// @method fitWorld(options?: fitBounds options): this
// Sets a map view that mostly contains the whole world with the maximum
// zoom level possible.
fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},// @method panTo(latlng: LatLng, options?: Pan options): this
// Pans the map to a given center.
panTo:function(t,n){return this.setView(t,this._zoom,{pan:n})},// @method panBy(offset: Point, options?: Pan options): this
// Pans the map by a given number of pixels (animated).
panBy:function(t,n){if(t=F(t).round(),n=n||{},!t.x&&!t.y)return this.fire("moveend");// If we pan too far, Chrome gets issues with tiles
// and makes them disappear or appear in the wrong place (slightly offset) #2602
if(!0!==n.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;// animate pan unless animate: false specified
if(this._panAnim||(this._panAnim=new nS,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),n.noMoveStart||this.fire("movestart"),!1!==n.animate){t8(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,n.duration||.25,n.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) performing a smooth
// pan-zoom animation.
flyTo:function(t,n,e){if(!1===(e=e||{}).animate||!tB.any3d)return this.setView(t,n,e);this._stop();var i=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),s=this._zoom;t=K(t),n=void 0===n?s:n;var a=Math.max(r.x,r.y),u=a*this.getZoomScale(s,n),h=o.distanceTo(i)||1;function l(t){var n=t?u:a,e=(u*u-a*a+(t?-1:1)*4.0658689599999995*h*h)/(2*n*2.0164*h),i=Math.sqrt(e*e+1)-e;return i<1e-9?-18:Math.log(i)}function c(t){return(Math.exp(t)-Math.exp(-t))/2}function f(t){return(Math.exp(t)+Math.exp(-t))/2}var _=l(0),p=Date.now(),d=(l(1)-_)/1.42,m=e.duration?1e3*e.duration:1e3*d*.8;return this._moveStart(!0,e.noMoveStart),(function e(){var r,u=(Date.now()-p)/m,l=(1-Math.pow(1-u,1.5))*d;u<=1?(this._flyToFrame=I(e,this),this._move(this.unproject(i.add(o.subtract(i).multiplyBy(a*(f(_)*(c(r=_+1.42*l)/f(r))-c(_))/2.0164/h)),s),this.getScaleZoom(a/(a*(f(_)/f(_+1.42*l))),s),{flyTo:!0})):this._move(t,n)._moveEnd(!0)}).call(this),this},// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
flyToBounds:function(t,n){var e=this._getBoundsCenterZoom(t,n);return this.flyTo(e.center,e.zoom,n)},// @method setMaxBounds(bounds: LatLngBounds): this
// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
setMaxBounds:function(t){return(t=V(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid())?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},// @method setMinZoom(zoom: Number): this
// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
setMinZoom:function(t){var n=this.options.minZoom;return(this.options.minZoom=t,this._loaded&&n!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom))?this.setZoom(t):this},// @method setMaxZoom(zoom: Number): this
// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
setMaxZoom:function(t){var n=this.options.maxZoom;return(this.options.maxZoom=t,this._loaded&&n!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom))?this.setZoom(t):this},// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
panInsideBounds:function(t,n){this._enforcingBounds=!0;var e=this.getCenter(),i=this._limitCenter(e,this._zoom,V(t));return e.equals(i)||this.panTo(i,n),this._enforcingBounds=!1,this},// @method panInside(latlng: LatLng, options?: padding options): this
// Pans the map the minimum amount to make the `latlng` visible. Use
// padding options to fit the display to more restricted bounds.
// If `latlng` is already within the (optionally padded) display bounds,
// the map will not be panned.
panInside:function(t,n){var e=F((n=n||{}).paddingTopLeft||n.padding||[0,0]),i=F(n.paddingBottomRight||n.padding||[0,0]),o=this.project(this.getCenter()),r=this.project(t),s=this.getPixelBounds(),a=U([s.min.add(e),s.max.subtract(i)]),u=a.getSize();if(!a.contains(r)){this._enforcingBounds=!0;var h=r.subtract(a.getCenter()),l=a.extend(r).getSize().subtract(u);o.x+=h.x<0?-l.x:l.x,o.y+=h.y<0?-l.y:l.y,this.panTo(this.unproject(o),n),this._enforcingBounds=!1}return this},// @method invalidateSize(options: Zoom/pan options): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default. If `options.pan` is `false`, panning will not occur.
// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
// that it doesn't happen often even if the method is called many
// times in a row.
// @alternative
// @method invalidateSize(animate: Boolean): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default.
invalidateSize:function(t){if(!this._loaded)return this;t=n({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),o=e.divideBy(2).round(),r=i.divideBy(2).round(),s=o.subtract(r);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(_(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},// @section Methods for modifying map state
// @method stop(): this
// Stops the currently running `panTo` or `flyTo` animation, if any.
stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},// @section Geolocation methods
// @method locate(options?: Locate options): this
// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
// and optionally sets the map view to the user's location with respect to
// detection accuracy (or to the world view if geolocation failed).
// Note that, if your page doesn't use HTTPS, this method will fail in
// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
// See `Locate options` for more details.
locate:function(t){if(t=this._locateOptions=n({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=_(this._handleGeolocationResponse,this),i=_(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},// @method stopLocate(): this
// Stops watching location previously initiated by `map.locate({watch: true})`
// and aborts resetting the map view if map.locate was called with
// `{setView: true}`.
stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var n=t.code,e=t.message||(1===n?"permission denied":2===n?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),// @section Location events
// @event locationerror: ErrorEvent
// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
this.fire("locationerror",{code:n,message:"Geolocation error: "+e+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var n=t.coords.latitude,e=t.coords.longitude,i=new G(n,e),o=i.toBounds(2*t.coords.accuracy),r=this._locateOptions;if(r.setView){var s=this.getBoundsZoom(o);this.setView(i,r.maxZoom?Math.min(s,r.maxZoom):s)}var a={latlng:i,bounds:o,timestamp:t.timestamp};for(var u in t.coords)"number"==typeof t.coords[u]&&(a[u]=t.coords[u]);// @event locationfound: LocationEvent
// Fired when geolocation (using the [`locate`](#map-locate) method)
// went successfully.
this.fire("locationfound",a)}},// TODO Appropriate docs section?
// @section Other Methods
// @method addHandler(name: String, HandlerClass: Function): this
// Adds a new `Handler` to the map, given its name and constructor function.
addHandler:function(t,n){if(!n)return this;var e=this[t]=new n(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},// @method remove(): this
// Destroys the map and clears all related event listeners.
remove:function(){var t;if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error("Map container is being reused by another instance");try{// throws error in IE6-8
delete this._container._leaflet_id,delete this._containerId}catch(t){/*eslint-disable */this._container._leaflet_id=void 0,/* eslint-enable */this._containerId=void 0}for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),t1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(B(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&// @event unload: Event
// Fired when the map is destroyed with [remove](#map-remove) method.
this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)t1(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},// @section Other Methods
// @method createPane(name: String, container?: HTMLElement): HTMLElement
// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
// then returns it. The pane is created as a child of `container`, or
// as a child of the main map pane if not set.
createPane:function(t,n){var e=t0("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n||this._mapPane);return t&&(this._panes[t]=e),e},// @section Methods for Getting Map State
// @method getCenter(): LatLng
// Returns the geographical center of the map view
getCenter:function(){return(this._checkIfLoaded(),this._lastCenter&&!this._moved())?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},// @method getZoom(): Number
// Returns the current zoom level of the map view
getZoom:function(){return this._zoom},// @method getBounds(): LatLngBounds
// Returns the geographical bounds visible in the current map view
getBounds:function(){var t=this.getPixelBounds(),n=this.unproject(t.getBottomLeft()),e=this.unproject(t.getTopRight());return new q(n,e)},// @method getMinZoom(): Number
// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},// @method getMaxZoom(): Number
// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
// Returns the maximum zoom level on which the given bounds fit to the map
// view in its entirety. If `inside` (optional) is set to `true`, the method
// instead returns the minimum zoom level on which the map view fits into
// the given bounds in its entirety.
getBoundsZoom:function(t,n,e){t=V(t),e=F(e||[0,0]);var i=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),s=t.getNorthWest(),a=t.getSouthEast(),u=this.getSize().subtract(e),h=U(this.project(a,i),this.project(s,i)).getSize(),l=tB.any3d?this.options.zoomSnap:1,c=u.x/h.x,f=u.y/h.y,_=n?Math.max(c,f):Math.min(c,f);return i=this.getScaleZoom(_,i),l&&(i=Math.round(i/(l/100))*(l/100),i=n?Math.ceil(i/l)*l:Math.floor(i/l)*l),Math.max(o,Math.min(r,i))},// @method getSize(): Point
// Returns the current size of the map container (in pixels).
getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new D(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},// @method getPixelBounds(): Bounds
// Returns the bounds of the current map view in projected pixel
// coordinates (sometimes useful in layer and overlay implementations).
getPixelBounds:function(t,n){var e=this._getTopLeftPoint(t,n);return new H(e,e.add(this.getSize()))},// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
// the map pane? "left point of the map layer" can be confusing, specially
// since there can be negative offsets.
// @method getPixelOrigin(): Point
// Returns the projected pixel coordinates of the top left point of
// the map layer (useful in custom layer and overlay implementations).
getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},// @method getPixelWorldBounds(zoom?: Number): Bounds
// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
// If `zoom` is omitted, the map's current zoom level is used.
getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},// @section Other Methods
// @method getPane(pane: String|HTMLElement): HTMLElement
// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
getPane:function(t){return"string"==typeof t?this._panes[t]:t},// @method getPanes(): Object
// Returns a plain object containing the names of all [panes](#map-pane) as keys and
// the panes as values.
getPanes:function(){return this._panes},// @method getContainer: HTMLElement
// Returns the HTML element that contains the map.
getContainer:function(){return this._container},// @section Conversion Methods
// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
// Returns the scale factor to be applied to a map transition from zoom level
// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
getZoomScale:function(t,n){// TODO replace with universal implementation after refactoring projections
var e=this.options.crs;return n=void 0===n?this._zoom:n,e.scale(t)/e.scale(n)},// @method getScaleZoom(scale: Number, fromZoom: Number): Number
// Returns the zoom level that the map would end up at, if it is at `fromZoom`
// level and everything is scaled by a factor of `scale`. Inverse of
// [`getZoomScale`](#map-getZoomScale).
getScaleZoom:function(t,n){var e=this.options.crs;n=void 0===n?this._zoom:n;var i=e.zoom(t*e.scale(n));return isNaN(i)?1/0:i},// @method project(latlng: LatLng, zoom: Number): Point
// Projects a geographical coordinate `LatLng` according to the projection
// of the map's CRS, then scales it according to `zoom` and the CRS's
// `Transformation`. The result is pixel coordinate relative to
// the CRS origin.
project:function(t,n){return n=void 0===n?this._zoom:n,this.options.crs.latLngToPoint(K(t),n)},// @method unproject(point: Point, zoom: Number): LatLng
// Inverse of [`project`](#map-project).
unproject:function(t,n){return n=void 0===n?this._zoom:n,this.options.crs.pointToLatLng(F(t),n)},// @method layerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding geographical coordinate (for the current zoom level).
layerPointToLatLng:function(t){var n=F(t).add(this.getPixelOrigin());return this.unproject(n)},// @method latLngToLayerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the [origin pixel](#map-getpixelorigin).
latLngToLayerPoint:function(t){return this.project(K(t))._round()._subtract(this.getPixelOrigin())},// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
// CRS's bounds.
// By default this means longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees.
wrapLatLng:function(t){return this.options.crs.wrapLatLng(K(t))},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring that
// its center is within the CRS's bounds.
// By default this means the center longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees, and the majority of the bounds
// overlaps the CRS's bounds.
wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(V(t))},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates according to
// the map's CRS. By default this measures distance in meters.
distance:function(t,n){return this.options.crs.distance(K(t),K(n))},// @method containerPointToLayerPoint(point: Point): Point
// Given a pixel coordinate relative to the map container, returns the corresponding
// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
containerPointToLayerPoint:function(t){return F(t).subtract(this._getMapPanePos())},// @method layerPointToContainerPoint(point: Point): Point
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding pixel coordinate relative to the map container.
layerPointToContainerPoint:function(t){return F(t).add(this._getMapPanePos())},// @method containerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the map container, returns
// the corresponding geographical coordinate (for the current zoom level).
containerPointToLatLng:function(t){var n=this.containerPointToLayerPoint(F(t));return this.layerPointToLatLng(n)},// @method latLngToContainerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the map container.
latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(K(t)))},// @method mouseEventToContainerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to the
// map container where the event took place.
mouseEventToContainerPoint:function(t){return nT(t,this._container)},// @method mouseEventToLayerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to
// the [origin pixel](#map-getpixelorigin) where the event took place.
mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},// @method mouseEventToLatLng(ev: MouseEvent): LatLng
// Given a MouseEvent object, returns geographical coordinate where the
// event took place.
mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},// map initialization methods
_initContainer:function(t){var n=this._container=tX(t);if(n){if(n._leaflet_id)throw Error("Map container is already initialized.")}else throw Error("Map container not found.");nf(n,"scroll",this._onScroll,this),this._containerId=d(n)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&tB.any3d,t8(t,"leaflet-container"+(tB.touch?" leaflet-touch":"")+(tB.retina?" leaflet-retina":"")+(tB.ielt9?" leaflet-oldie":"")+(tB.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var n=tQ(t,"position");"absolute"!==n&&"relative"!==n&&"fixed"!==n&&"sticky"!==n&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},// @section
//
// Panes are DOM elements used to control the ordering of layers on the map. You
// can access panes with [`map.getPane`](#map-getpane) or
// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
// [`map.createPane`](#map-createpane) method.
//
// Every map has the following default panes that differ only in zIndex.
//
// @pane mapPane: HTMLElement = 'auto'
// Pane that contains all other map panes
this._mapPane=this.createPane("mapPane",this._container),ni(this._mapPane,new D(0,0)),// @pane tilePane: HTMLElement = 200
// Pane for `GridLayer`s and `TileLayer`s
this.createPane("tilePane"),// @pane overlayPane: HTMLElement = 400
// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
this.createPane("overlayPane"),// @pane shadowPane: HTMLElement = 500
// Pane for overlay shadows (e.g. `Marker` shadows)
this.createPane("shadowPane"),// @pane markerPane: HTMLElement = 600
// Pane for `Icon`s of `Marker`s
this.createPane("markerPane"),// @pane tooltipPane: HTMLElement = 650
// Pane for `Tooltip`s.
this.createPane("tooltipPane"),// @pane popupPane: HTMLElement = 700
// Pane for `Popup`s.
this.createPane("popupPane"),this.options.markerZoomAnimation||(t8(t.markerPane,"leaflet-zoom-hide"),t8(t.shadowPane,"leaflet-zoom-hide"))},// private methods that modify map state
// @section Map state change events
_resetView:function(t,n,e){ni(this._mapPane,new D(0,0));var i=!this._loaded;this._loaded=!0,n=this._limitZoom(n),this.fire("viewprereset");var o=this._zoom!==n;this._moveStart(o,e)._move(t,n)._moveEnd(o),// @event viewreset: Event
// Fired when the map needs to redraw its content (this usually happens
// on map zoom or load). Very useful for creating custom overlays.
this.fire("viewreset"),i&&this.fire("load")},_moveStart:function(t,n){return t&&this.fire("zoomstart"),n||this.fire("movestart"),this},_move:function(t,n,e,i){void 0===n&&(n=this._zoom);var o=this._zoom!==n;return this._zoom=n,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),i?e&&e.pinch&&this.fire("zoom",e):((o||e&&e.pinch)&&this.fire("zoom",e),// @event move: Event
// Fired repeatedly during any movement of the map,
// including pan and fly animations.
this.fire("move",e)),this},_moveEnd:function(t){// @event moveend: Event
// Fired when the center of the map stops changing
// (e.g. user stopped dragging the map or after non-centered zoom).
return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return B(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){ni(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error("Set map center and zoom first.")},// DOM event handling
// @section Interaction events
_initEvents:function(t){this._targets={},this._targets[d(this._container)]=this;var n=t?np:nf;// @event click: MouseEvent
// Fired when the user clicks (or taps) the map.
// @event dblclick: MouseEvent
// Fired when the user double-clicks (or double-taps) the map.
// @event mousedown: MouseEvent
// Fired when the user pushes the mouse button on the map.
// @event mouseup: MouseEvent
// Fired when the user releases the mouse button on the map.
// @event mouseover: MouseEvent
// Fired when the mouse enters the map.
// @event mouseout: MouseEvent
// Fired when the mouse leaves the map.
// @event mousemove: MouseEvent
// Fired while the mouse moves over the map.
// @event contextmenu: MouseEvent
// Fired when the user pushes the right mouse button on the map, prevents
// default browser context menu from showing if there are listeners on
// this event. Also fired on mobile when the user holds a single touch
// for a second (also called long press).
// @event keypress: KeyboardEvent
// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
// @event keydown: KeyboardEvent
// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
// the `keydown` event is fired for keys that produce a character value and for keys
// that do not produce a character value.
// @event keyup: KeyboardEvent
// Fired when the user releases a key from the keyboard while the map is focused.
n(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&n(window,"resize",this._onResize,this),tB.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){B(this._resizeRequest),this._resizeRequest=I(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&// a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,n){for(var e,i=[],o="mouseout"===n||"mouseover"===n,r=t.target||t.srcElement,s=!1;r;){if((e=this._targets[d(r)])&&("click"===n||"preclick"===n)&&this._draggableMoved(e)){// Prevent firing click after you just dragged an object.
s=!0;break}if(e&&e.listens(n,!0)&&(o&&!nC(r,t)||(i.push(e),o))||r===this._container)break;r=r.parentNode}return!i.length&&!s&&!o&&this.listens(n,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var n=t.target||t.srcElement;if(!(!this._loaded||n._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(n))){var e=t.type;"mousedown"===e&&nu(n),this._fireDOMEvent(t,e)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if("click"===t.type){// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
// @event preclick: MouseEvent
// Fired before mouse click on the map (sometimes useful when you
// want something to happen on click before any existing click
// handlers start running).
var o=n({},t);o.type="preclick",this._fireDOMEvent(o,o.type,i)}// Find the layer the event is propagating from and its parents.
var r=this._findEventTargets(t,e);if(i){for(var s=[],a=0;a<i.length;a++)i[a].listens(e,!0)&&s.push(i[a]);r=s.concat(r)}if(r.length){"contextmenu"===e&&nb(t);var u=r[0],h={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var l=u.getLatLng&&(!u._radius||u._radius<=10);h.containerPoint=l?this.latLngToContainerPoint(u.getLatLng()):this.mouseEventToContainerPoint(t),h.layerPoint=this.containerPointToLayerPoint(h.containerPoint),h.latlng=l?u.getLatLng():this.layerPointToLatLng(h.layerPoint)}for(a=0;a<r.length;a++)if(r[a].fire(e,h,!0),h.originalEvent._stopped||!1===r[a].options.bubblingMouseEvents&&-1!==C(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,n=this._handlers.length;t<n;t++)this._handlers[t].disable()},// @section Other Methods
// @method whenReady(fn: Function, context?: Object): this
// Runs the given function `fn` when the map gets initialized with
// a view (center and zoom) and at least one layer, or immediately
// if it's already initialized, optionally passing a function context.
whenReady:function(t,n){return this._loaded?t.call(n||this,{target:this}):this.on("load",t,n),this},// private methods for getting map state
_getMapPanePos:function(){return no(this._mapPane)||new D(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,n){return(t&&void 0!==n?this._getNewPixelOrigin(t,n):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,n){var e=this.getSize()._divideBy(2);return this.project(t,n)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,n,e){var i=this._getNewPixelOrigin(e,n);return this.project(t,n)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,n,e){var i=this._getNewPixelOrigin(e,n);return U([this.project(t.getSouthWest(),n)._subtract(i),this.project(t.getNorthWest(),n)._subtract(i),this.project(t.getSouthEast(),n)._subtract(i),this.project(t.getNorthEast(),n)._subtract(i)])},// layer point of the current center
_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},// offset of the specified place to the current center in pixels
_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},// adjust center for view to get inside bounds
_limitCenter:function(t,n,e){if(!e)return t;var i=this.project(t,n),o=this.getSize().divideBy(2),r=new H(i.subtract(o),i.add(o)),s=this._getBoundsOffset(r,e,n);return(// If offset is less than a pixel, ignore.
// This prevents unstable projections from getting into
// an infinite loop of tiny offsets.
1>=Math.abs(s.x)&&1>=Math.abs(s.y)?t:this.unproject(i.add(s),n))},// adjust offset for view to get inside bounds
_limitOffset:function(t,n){if(!n)return t;var e=this.getPixelBounds(),i=new H(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(i,n))},// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
_getBoundsOffset:function(t,n,e){var i=U(this.project(n.getNorthEast(),e),this.project(n.getSouthWest(),e)),o=i.min.subtract(t.min),r=i.max.subtract(t.max),s=this._rebound(o.x,-r.x),a=this._rebound(o.y,-r.y);return new D(s,a)},_rebound:function(t,n){return t+n>0?Math.round(t-n)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(n))},_limitZoom:function(t){var n=this.getMinZoom(),e=this.getMaxZoom(),i=tB.any3d?this.options.zoomSnap:1;return i&&(t=Math.round(t/i)*i),Math.max(n,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){t5(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,n){// difference between the new and current centers in pixels
var e=this._getCenterOffset(t)._trunc();return(// don't animate too far unless animate: true specified in options
!!(!0===(n&&n.animate)||this.getSize().contains(e))&&(this.panBy(e,n),!0))},_createAnimProxy:function(){var t=this._proxy=t0("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var n=this._proxy.style[tY];ne(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),n===this._proxy.style[tY]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){t1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),n=this.getZoom();ne(this._proxy,this.project(t,n),this.getZoomScale(n,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,n,e){if(this._animatingZoom)return!0;// don't animate if disabled, not supported or zoom difference is too large
if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(n-this._zoom)>this.options.zoomAnimationThreshold)return!1;// offset is the pixel coords of the zoom origin relative to the current center
var i=this.getZoomScale(n),o=this._getCenterOffset(t)._divideBy(1-1/i);return(// don't animate if the zoom origin isn't within one screen from the current center, unless forced
!!(!0===e.animate||this.getSize().contains(o))&&(I(function(){this._moveStart(!0,e.noMoveStart||!1)._animateZoom(t,n,!0)},this),!0))},_animateZoom:function(t,n,e,i){this._mapPane&&(e&&(this._animatingZoom=!0,// remember what center/zoom to set after animation
this._animateToCenter=t,this._animateToZoom=n,t8(this._mapPane,"leaflet-zoom-anim")),// @section Other Events
// @event zoomanim: ZoomAnimEvent
// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
this.fire("zoomanim",{center:t,zoom:n,noUpdate:i}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
setTimeout(_(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&t5(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}}),nE=R.extend({// @section
// @aka Control Options
options:{// @option position: String = 'topright'
// The position of the control (one of the map corners). Possible values are `'topleft'`,
// `'topright'`, `'bottomleft'` or `'bottomright'`
position:"topright"},initialize:function(t){b(this,t)},/* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */getPosition:function(){return this.options.position},// @method setPosition(position: string): this
// Sets the position of the control.
setPosition:function(t){var n=this._map;return n&&n.removeControl(this),this.options.position=t,n&&n.addControl(this),this},// @method getContainer: HTMLElement
// Returns the HTMLElement that contains the control.
getContainer:function(){return this._container},// @method addTo(map: Map): this
// Adds the control to the given map.
addTo:function(t){this.remove(),this._map=t;var n=this._container=this.onAdd(t),e=this.getPosition(),i=t._controlCorners[e];return t8(n,"leaflet-control"),-1!==e.indexOf("bottom")?i.insertBefore(n,i.firstChild):i.appendChild(n),this._map.on("unload",this.remove,this),this},// @method remove: this
// Removes the control from the map it is currently active on.
remove:function(){return this._map&&(t1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),nA=function(t){return new nE(t)};/* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   *//* @namespace Map
   * @section Methods for Layers and Controls
   */nk.include({// @method addControl(control: Control): this
// Adds the given control to the map
addControl:function(t){return t.addTo(this),this},// @method removeControl(control: Control): this
// Removes the given control from the map
removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},n="leaflet-",e=this._controlContainer=t0("div",n+"control-container",this._container);function i(i,o){var r=n+i+" "+n+o;t[i+o]=t0("div",r,e)}i("top","left"),i("top","right"),i("bottom","left"),i("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)t1(this._controlCorners[t]);t1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});/*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */var nO=nE.extend({// @section
// @aka Control.Layers options
options:{// @option collapsed: Boolean = true
// If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
collapsed:!0,position:"topright",// @option autoZIndex: Boolean = true
// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
autoZIndex:!0,// @option hideSingleBase: Boolean = false
// If `true`, the base layers in the control will be hidden when there is only one.
hideSingleBase:!1,// @option sortLayers: Boolean = false
// Whether to sort the layers. When `false`, layers will keep the order
// in which they were added to the control.
sortLayers:!1,// @option sortFunction: Function = *
// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// that will be used for sorting the layers, when `sortLayers` is `true`.
// The function receives both the `L.Layer` instances and their names, as in
// `sortFunction(layerA, layerB, nameA, nameB)`.
// By default, it sorts layers alphabetically by their name.
sortFunction:function(t,n,e,i){return e<i?-1:i<e?1:0}},initialize:function(t,n,e){for(var i in b(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[i],i);for(i in n)this._addLayer(n[i],i,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
return nE.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},// @method addBaseLayer(layer: Layer, name: String): this
// Adds a base layer (radio button entry) with the given name to the control.
addBaseLayer:function(t,n){return this._addLayer(t,n),this._map?this._update():this},// @method addOverlay(layer: Layer, name: String): this
// Adds an overlay (checkbox entry) with the given name to the control.
addOverlay:function(t,n){return this._addLayer(t,n,!0),this._map?this._update():this},// @method removeLayer(layer: Layer): this
// Remove the given layer from the control.
removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var n=this._getLayer(d(t));return n&&this._layers.splice(this._layers.indexOf(n),1),this._map?this._update():this},// @method expand(): this
// Expand the control container if collapsed.
expand:function(){t8(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(t8(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):t5(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},// @method collapse(): this
// Collapse the control container if expanded.
collapse:function(){return t5(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",n=this._container=t0("div",t),e=this.options.collapsed;// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
n.setAttribute("aria-haspopup",!0),nw(n),nx(n);var i=this._section=t0("section",t+"-list");e&&(this._map.on("click",this.collapse,this),nf(n,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=t0("a",t+"-toggle",n);o.href="#",o.title="Layers",o.setAttribute("role","button"),nf(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},// Certain screen readers intercept the key event and instead send a click event
click:function(t){nb(t),this._expandSafely()}},this),e||this.expand(),this._baseLayersList=t0("div",t+"-base",i),this._separator=t0("div",t+"-separator",i),this._overlaysList=t0("div",t+"-overlays",i),n.appendChild(i)},_getLayer:function(t){for(var n=0;n<this._layers.length;n++)if(this._layers[n]&&d(this._layers[n].layer)===t)return this._layers[n]},_addLayer:function(t,n,e){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:n,overlay:e}),this.options.sortLayers&&this._layers.sort(_(function(t,n){return this.options.sortFunction(t.layer,n.layer,t.name,n.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;t2(this._baseLayersList),t2(this._overlaysList),this._layerControlInputs=[];var t,n,e,i,o=0;for(e=0;e<this._layers.length;e++)i=this._layers[e],this._addItem(i),n=n||i.overlay,t=t||!i.overlay,o+=i.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=n&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var n=this._getLayer(d(t.target)),e=n.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,n)},// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
_createRadioElement:function(t,n){var e=document.createElement("div");return e.innerHTML='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(n?' checked="checked"':"")+"/>",e.firstChild},_addItem:function(t){var n,e=document.createElement("label"),i=this._map.hasLayer(t.layer);t.overlay?((n=document.createElement("input")).type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+d(this),i),this._layerControlInputs.push(n),n.layerId=d(t.layer),nf(n,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;// Helps from preventing layer control flicker when checkboxes are disabled
// https://github.com/Leaflet/Leaflet/issues/2771
var r=document.createElement("span");return e.appendChild(r),r.appendChild(n),r.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){// expanding the control on mobile with a click can cause adding a layer - we don't want this
if(!this._preventClick){var t,n,e=this._layerControlInputs,i=[],o=[];this._handlingClick=!0;for(var r=e.length-1;r>=0;r--)t=e[r],n=this._getLayer(t.layerId).layer,t.checked?i.push(n):t.checked||o.push(n);// Bugfix issue 2318: Should remove all old layers before readding new ones
for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<i.length;r++)this._map.hasLayer(i[r])||this._map.addLayer(i[r]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,n,e=this._layerControlInputs,i=this._map.getZoom(),o=e.length-1;o>=0;o--)t=e[o],n=this._getLayer(t.layerId).layer,t.disabled=void 0!==n.options.minZoom&&i<n.options.minZoom||void 0!==n.options.maxZoom&&i>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,nf(t,"click",nb),this.expand();var n=this;setTimeout(function(){np(t,"click",nb),n._preventClick=!1})}}),nZ=nE.extend({// @section
// @aka Control.Zoom options
options:{position:"topleft",// @option zoomInText: String = '<span aria-hidden="true">+</span>'
// The text set on the 'zoom in' button.
zoomInText:'<span aria-hidden="true">+</span>',// @option zoomInTitle: String = 'Zoom in'
// The title set on the 'zoom in' button.
zoomInTitle:"Zoom in",// @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
// The text set on the 'zoom out' button.
zoomOutText:'<span aria-hidden="true">&#x2212;</span>',// @option zoomOutTitle: String = 'Zoom out'
// The title set on the 'zoom out' button.
zoomOutTitle:"Zoom out"},onAdd:function(t){var n="leaflet-control-zoom",e=t0("div",n+" leaflet-bar"),i=this.options;return this._zoomInButton=this._createButton(i.zoomInText,i.zoomInTitle,n+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(i.zoomOutText,i.zoomOutTitle,n+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,n,e,i,o){var r=t0("a",e,i);return r.innerHTML=t,r.href="#",r.title=n,/*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */r.setAttribute("role","button"),r.setAttribute("aria-label",n),nw(r),nf(r,"click",nL),nf(r,"click",o,this),nf(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,n="leaflet-disabled";t5(this._zoomInButton,n),t5(this._zoomOutButton,n),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(t8(this._zoomOutButton,n),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(t8(this._zoomInButton,n),this._zoomInButton.setAttribute("aria-disabled","true"))}});// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
nk.mergeOptions({zoomControl:!0}),nk.addInitHook(function(){this.options.zoomControl&&(// @section Controls
// @property zoomControl: Control.Zoom
// The default zoom control (only available if the
// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
this.zoomControl=new nZ,this.addControl(this.zoomControl))});/*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */var nI=nE.extend({// @section
// @aka Control.Scale options
options:{position:"bottomleft",// @option maxWidth: Number = 100
// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
maxWidth:100,// @option metric: Boolean = True
// Whether to show the metric scale line (m/km).
metric:!0,// @option imperial: Boolean = True
// Whether to show the imperial scale line (mi/ft).
imperial:!0},onAdd:function(t){var n="leaflet-control-scale",e=t0("div",n),i=this.options;return this._addScales(i,n+"-line",e),t.on(i.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,n,e){t.metric&&(this._mScale=t0("div",n,e)),t.imperial&&(this._iScale=t0("div",n,e))},_update:function(){var t=this._map,n=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,n]),t.containerPointToLatLng([this.options.maxWidth,n]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var n=this._getRoundNum(t),e=n<1e3?n+" m":n/1e3+" km";this._updateScale(this._mScale,e,n/t)},_updateImperial:function(t){var n,e,i,o=3.2808399*t;o>5280?(n=o/5280,e=this._getRoundNum(n),this._updateScale(this._iScale,e+" mi",e/n)):(i=this._getRoundNum(o),this._updateScale(this._iScale,i+" ft",i/o))},_updateScale:function(t,n,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=n},_getRoundNum:function(t){var n=Math.pow(10,(Math.floor(t)+"").length-1),e=t/n;return n*(e=e>=10?10:e>=5?5:e>=3?3:e>=2?2:1)}}),nB=nE.extend({// @section
// @aka Control.Attribution options
options:{position:"bottomright",// @option prefix: String|false = 'Leaflet'
// The HTML text shown before the attributions. Pass `false` to disable.
prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(tB.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){b(this,t),this._attributions={}},onAdd:function(t){// TODO ugly, refactor
for(var n in t.attributionControl=this,this._container=t0("div","leaflet-control-attribution"),nw(this._container),t._layers)t._layers[n].getAttribution&&this.addAttribution(t._layers[n].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},// @method setPrefix(prefix: String|false): this
// The HTML text shown before the attributions. Pass `false` to disable.
setPrefix:function(t){return this.options.prefix=t,this._update(),this},// @method addAttribution(text: String): this
// Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},// @method removeAttribution(text: String): this
// Removes an attribution text.
removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var n in this._attributions)this._attributions[n]&&t.push(n);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(' <span aria-hidden="true">|</span> ')}}});// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
nk.mergeOptions({attributionControl:!0}),nk.addInitHook(function(){this.options.attributionControl&&new nB().addTo(this)}),nE.Layers=nO,nE.Zoom=nZ,nE.Scale=nI,nE.Attribution=nB,nA.layers=function(t,n,e){return new nO(t,n,e)},nA.zoom=function(t){return new nZ(t)},nA.scale=function(t){return new nI(t)},nA.attribution=function(t){return new nB(t)};/*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers
var nR=R.extend({initialize:function(t){this._map=t},// @method enable(): this
// Enables the handler
enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},// @method disable(): this
// Disables the handler
disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},// @method enabled(): Boolean
// Returns `true` if the handler is enabled
enabled:function(){return!!this._enabled}});// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
nR.addTo=function(t,n){return t.addHandler(n,this),this};/*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */var nj=tB.touch?"touchstart mousedown":"mousedown",nN=N.extend({options:{// @section
// @aka Draggable options
// @option clickTolerance: Number = 3
// The max number of pixels a user can shift the mouse pointer during a click
// for it to be considered a valid click (as opposed to a mouse drag).
clickTolerance:3},// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
initialize:function(t,n,e,i){b(this,i),this._element=t,this._dragStartTarget=n||t,this._preventOutline=e},// @method enable()
// Enables the dragging ability
enable:function(){this._enabled||(nf(this._dragStartTarget,nj,this._onDown,this),this._enabled=!0)},// @method disable()
// Disables the dragging ability
disable:function(){this._enabled&&(nN._dragging===this&&this.finishDrag(!0),np(this._dragStartTarget,nj,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(!(!this._enabled||(this._moved=!1,t4(this._element,"leaflet-zoom-anim")))){if(t.touches&&1!==t.touches.length){nN._dragging===this&&this.finishDrag();return}if(!nN._dragging&&!t.shiftKey&&(1===t.which||1===t.button||t.touches)&&(nN._dragging=this,this._preventOutline&&nu(this._element),ns(),e(),!this._moving)){// @event down: Event
// Fired when a drag is about to start.
this.fire("down");var n=t.touches?t.touches[0]:t,i=nl(this._element);this._startPoint=new D(n.clientX,n.clientY),this._startPos=no(this._element),// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
this._parentScale=nc(i);var o="mousedown"===t.type;nf(document,o?"mousemove":"touchmove",this._onMove,this),nf(document,o?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var n=t.touches&&1===t.touches.length?t.touches[0]:t,e=new D(n.clientX,n.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(// We assume that the parent container's position, border and scale do not change for the duration of the drag.
// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
// and we can use the cached value for the scale.
e.x/=this._parentScale.x,e.y/=this._parentScale.y,nb(t),this._moved||(// @event dragstart: Event
// Fired when a drag starts
this.fire("dragstart"),this._moved=!0,t8(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),t8(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,this._lastEvent=t,this._updatePosition()))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};// @event predrag: Event
// Fired continuously during dragging *before* each corresponding
// update of the element's position.
this.fire("predrag",t),ni(this._element,this._newPos),// @event drag: Event
// Fired continuously during dragging.
this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){t5(document.body,"leaflet-dragging"),this._lastTarget&&(t5(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),np(document,"mousemove touchmove",this._onMove,this),np(document,"mouseup touchend touchcancel",this._onUp,this),na(),i();var n=this._moved&&this._moving;this._moving=!1,nN._dragging=!1,n&&// Fired when the drag ends.
this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});/*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   *//* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */function nD(t,n,e){var i,o,r,s,a,u,h,l,c,f=[1,4,2,8];for(o=0,h=t.length;o<h;o++)t[o]._code=nG(t[o],n);// for each edge (left, bottom, right, top)
for(s=0;s<4;s++){for(o=0,l=f[s],i=[],r=(h=t.length)-1;o<h;r=o++)a=t[o],u=t[r],a._code&l?u._code&l||((c=nV(u,a,l,n,e))._code=nG(c,n),i.push(c)):(u._code&l&&((c=nV(u,a,l,n,e))._code=nG(c,n),i.push(c)),i.push(a));t=i}return t}/* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.
   */function nW(t,n){if(!t||0===t.length)throw Error("latlngs not passed");nY(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var e,i,o,r,s,a,u,h,l,c=K([0,0]),f=V(t);f.getNorthWest().distanceTo(f.getSouthWest())*f.getNorthEast().distanceTo(f.getNorthWest())<1700&&(c=nF(t));var _=t.length,p=[];for(e=0;e<_;e++){var d=K(t[e]);p.push(n.project(K([d.lat-c.lat,d.lng-c.lng])))}// polygon centroid algorithm;
for(e=0,a=u=h=0,i=_-1;e<_;i=e++)o=p[e],r=p[i],s=o.y*r.x-r.y*o.x,u+=(o.x+r.x)*s,h+=(o.y+r.y)*s,a+=3*s;l=0===a?p[0]:[u/a,h/a];var m=n.unproject(F(l));return K([m.lat+c.lat,m.lng+c.lng])}/* @function centroid(latlngs: LatLng[]): LatLng
   * Returns the 'center of mass' of the passed LatLngs.
   */function nF(t){for(var n=0,e=0,i=0,o=0;o<t.length;o++){var r=K(t[o]);n+=r.lat,e+=r.lng,i++}return K([n/i,e/i])}/*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.
// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).
function nH(t,n){if(!n||!t.length)return t.slice();var e=n*n;return(// stage 2: Douglas-Peucker simplification
t=// Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
function(t,n){var e=t.length,i=new("undefined"!=typeof Uint8Array?Uint8Array:Array)(e);i[0]=i[e-1]=1,function t(n,e,i,o,r){var s,a,u,h=0;for(a=o+1;a<=r-1;a++)(u=nK(n[a],n[o],n[r],!0))>h&&(s=a,h=u);h>i&&(e[s]=1,t(n,e,i,o,s),t(n,e,i,s,r))}(t,i,n,0,e-1);var o,r=[];for(o=0;o<e;o++)i[o]&&r.push(t[o]);return r}(// stage 1: vertex reduction
t=// reduce points that are too close to each other to a single point
function(t,n){for(var e=[t[0]],i=1,o=0,r=t.length;i<r;i++)// square distance (to avoid unnecessary Math.sqrt calls)
(function(t,n){var e=n.x-t.x,i=n.y-t.y;return e*e+i*i})(t[i],t[o])>n&&(e.push(t[i]),o=i);return o<r-1&&e.push(t[r-1]),e}(t,e),e))}// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function nU(t,n,e){return Math.sqrt(nK(t,n,e,!0))}// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function nq(t,n,e,i,o){var r,s,u,h=i?a:nG(t,e),l=nG(n,e);for(// save 2nd code to avoid calculating it on the next segment
a=l;;){// if a,b is inside the clip window (trivial accept)
if(!(h|l))return[t,n];// if a,b is outside the clip window (trivial reject)
if(h&l)return!1;u=nG(s=nV(t,n,// other cases
r=h||l,e,o),e),r===h?(t=s,h=u):(n=s,l=u)}}function nV(t,n,e,i,o){var r,s,a=n.x-t.x,u=n.y-t.y,h=i.min,l=i.max;return 8&e?(r=t.x+a*(l.y-t.y)/u,s=l.y):4&e?(r=t.x+a*(h.y-t.y)/u,s=h.y):2&e?(r=l.x,s=t.y+u*(l.x-t.x)/a):1&e&&(r=h.x,s=t.y+u*(h.x-t.x)/a),new D(r,s,o)}function nG(t,n){var e=0;return t.x<n.min.x?e|=1:t.x>n.max.x&&(e|=2),t.y<n.min.y?e|=4:t.y>n.max.y&&(e|=8),e}// return closest point on segment or distance to that point
function nK(t,n,e,i){var o,r=n.x,s=n.y,a=e.x-r,u=e.y-s,h=a*a+u*u;return h>0&&((o=((t.x-r)*a+(t.y-s)*u)/h)>1?(r=e.x,s=e.y):o>0&&(r+=a*o,s+=u*o)),a=t.x-r,u=t.y-s,i?a*a+u*u:new D(r,s)}// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function nY(t){return!M(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function n$(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),nY(t)}/* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.
   */function nJ(t,n){if(!t||0===t.length)throw Error("latlngs not passed");nY(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var e,i,o,r,s,a,u,h,l=K([0,0]),c=V(t);c.getNorthWest().distanceTo(c.getSouthWest())*c.getNorthEast().distanceTo(c.getNorthWest())<1700&&(l=nF(t));var f=t.length,_=[];for(e=0;e<f;e++){var p=K(t[e]);_.push(n.project(K([p.lat-l.lat,p.lng-l.lng])))}for(e=0,i=0;e<f-1;e++)i+=_[e].distanceTo(_[e+1])/2;// The line is so small in the current view that all points are on the same pixel.
if(0===i)h=_[0];else for(e=0,r=0;e<f-1;e++)if(s=_[e],a=_[e+1],(r+=o=s.distanceTo(a))>i){u=(r-i)/o,h=[a.x-u*(a.x-s.x),a.y-u*(a.y-s.y)];break}var d=n.unproject(F(h));return K([d.lat+l.lat,d.lng+l.lng])}/*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */var nX={project:function(t){return new D(t.lng,t.lat)},unproject:function(t){return new G(t.y,t.x)},bounds:new H([-180,-90],[180,90])},nQ={R:6378137,R_MINOR:6356752.314245179,bounds:new H([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var n=Math.PI/180,e=this.R,i=t.lat*n,o=this.R_MINOR/e,r=Math.sqrt(1-o*o),s=r*Math.sin(i);return i=-e*Math.log(Math.max(Math.tan(Math.PI/4-i/2)/Math.pow((1-s)/(1+s),r/2),1e-10)),new D(t.lng*n*e,i)},unproject:function(t){for(var n,e=180/Math.PI,i=this.R,o=this.R_MINOR/i,r=Math.sqrt(1-o*o),s=Math.exp(-t.y/i),a=Math.PI/2-2*Math.atan(s),u=0,h=.1;u<15&&Math.abs(h)>1e-7;u++)h=Math.PI/2-2*Math.atan(s*(n=Math.pow((1-(n=r*Math.sin(a)))/(1+n),r/2)))-a,a+=h;return new G(a*e,t.x*e/i)}},n0=n({},$,{code:"EPSG:3395",projection:nQ,transformation:Q(c=.5/(Math.PI*nQ.R),.5,-c,.5)}),n1=n({},$,{code:"EPSG:4326",projection:nX,transformation:Q(1/180,1,-1/180,.5)}),n2=n({},Y,{projection:nX,transformation:Q(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,n){var e=n.lng-t.lng,i=n.lat-t.lat;return Math.sqrt(e*e+i*i)},infinite:!0});Y.Earth=$,Y.EPSG3395=n0,Y.EPSG3857=tt,Y.EPSG900913=tn,Y.EPSG4326=n1,Y.Simple=n2;/*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */var n3=N.extend({// Classes extending `L.Layer` will inherit the following options:
options:{// @option pane: String = 'overlayPane'
// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
pane:"overlayPane",// @option attribution: String = null
// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
attribution:null,bubblingMouseEvents:!0},/* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */addTo:function(t){return t.addLayer(this),this},// @method remove: this
// Removes the layer from the map it is currently active on.
remove:function(){return this.removeFrom(this._map||this._mapToAdd)},// @method removeFrom(map: Map): this
// Removes the layer from the given map
//
// @alternative
// @method removeFrom(group: LayerGroup): this
// Removes the layer from the given `LayerGroup`
removeFrom:function(t){return t&&t.removeLayer(this),this},// @method getPane(name? : String): HTMLElement
// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[d(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[d(t)],this},// @method getAttribution: String
// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var n=t.target;// check in case layer gets added and then removed before the map is ready
if(n.hasLayer(this)){if(this._map=n,this._zoomAnimated=n._zoomAnimated,this.getEvents){var e=this.getEvents();n.on(e,this),this.once("remove",function(){n.off(e,this)},this)}this.onAdd(n),this.fire("add"),n.fire("layeradd",{layer:this})}}});/* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   *//* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */nk.include({// @method addLayer(layer: Layer): this
// Adds the given layer to the map
addLayer:function(t){if(!t._layerAdd)throw Error("The provided object is not a Layer.");var n=d(t);return this._layers[n]||(this._layers[n]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the map.
removeLayer:function(t){var n=d(t);return this._layers[n]&&(this._loaded&&t.onRemove(this),delete this._layers[n],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the map
hasLayer:function(t){return d(t) in this._layers},/* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */eachLayer:function(t,n){for(var e in this._layers)t.call(n,this._layers[e]);return this},_addLayers:function(t){t=t?M(t)?t:[t]:[];for(var n=0,e=t.length;n<e;n++)this.addLayer(t[n])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[d(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var n=d(t);this._zoomBoundLayers[n]&&(delete this._zoomBoundLayers[n],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,n=-1/0,e=this._getZoomSpan();for(var i in this._zoomBoundLayers){var o=this._zoomBoundLayers[i].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),n=void 0===o.maxZoom?n:Math.max(n,o.maxZoom)}this._layersMaxZoom=n===-1/0?void 0:n,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});/*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Interactive layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */var n9=n3.extend({initialize:function(t,n){var e,i;if(b(this,n),this._layers={},t)for(e=0,i=t.length;e<i;e++)this.addLayer(t[e])},// @method addLayer(layer: Layer): this
// Adds the given layer to the group.
addLayer:function(t){var n=this.getLayerId(t);return this._layers[n]=t,this._map&&this._map.addLayer(t),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the group.
// @alternative
// @method removeLayer(id: Number): this
// Removes the layer with the given internal ID from the group.
removeLayer:function(t){var n=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[n]&&this._map.removeLayer(this._layers[n]),delete this._layers[n],this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the group.
// @alternative
// @method hasLayer(id: Number): Boolean
// Returns `true` if the given internal ID is currently added to the group.
hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},// @method clearLayers(): this
// Removes all the layers from the group.
clearLayers:function(){return this.eachLayer(this.removeLayer,this)},// @method invoke(methodName: String, …): this
// Calls `methodName` on every layer contained in this group, passing any
// additional parameters. Has no effect if the layers contained do not
// implement `methodName`.
invoke:function(t){var n,e,i=Array.prototype.slice.call(arguments,1);for(n in this._layers)(e=this._layers[n])[t]&&e[t].apply(e,i);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},// @method eachLayer(fn: Function, context?: Object): this
// Iterates over the layers of the group, optionally specifying context of the iterator function.
// ```js
// group.eachLayer(function (layer) {
// 	layer.bindPopup('Hello');
// });
// ```
eachLayer:function(t,n){for(var e in this._layers)t.call(n,this._layers[e]);return this},// @method getLayer(id: Number): Layer
// Returns the layer with the given internal ID.
getLayer:function(t){return this._layers[t]},// @method getLayers(): Layer[]
// Returns an array of all the layers added to the group.
getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},// @method setZIndex(zIndex: Number): this
// Calls `setZIndex` on every layer contained in this group, passing the z-index.
setZIndex:function(t){return this.invoke("setZIndex",t)},// @method getLayerId(layer: Layer): Number
// Returns the internal ID for a layer
getLayerId:function(t){return d(t)}}),n4=n9.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),n9.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),n9.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},// @method setStyle(style: Path options): this
// Sets the given path options to each layer of the group that has a `setStyle` method.
setStyle:function(t){return this.invoke("setStyle",t)},// @method bringToFront(): this
// Brings the layer group to the top of all other layers
bringToFront:function(){return this.invoke("bringToFront")},// @method bringToBack(): this
// Brings the layer group to the back of all other layers
bringToBack:function(){return this.invoke("bringToBack")},// @method getBounds(): LatLngBounds
// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
getBounds:function(){var t=new q;for(var n in this._layers){var e=this._layers[n];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),n8=R.extend({/* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */options:{popupAnchor:[0,0],tooltipAnchor:[0,0],// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1},initialize:function(t){b(this,t)},// @method createIcon(oldIcon?: HTMLElement): HTMLElement
// Called internally when the icon has to be shown, returns a `<img>` HTML element
// styled according to the options.
createIcon:function(t){return this._createIcon("icon",t)},// @method createShadow(oldIcon?: HTMLElement): HTMLElement
// As `createIcon`, but for the shadow beneath it.
createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,n){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw Error("iconUrl not set in Icon options (see the docs).");return null}var i=this._createImg(e,n&&"IMG"===n.tagName?n:null);return this._setIconStyles(i,t),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i},_setIconStyles:function(t,n){var e=this.options,i=e[n+"Size"];"number"==typeof i&&(i=[i,i]);var o=F(i),r=F("shadow"===n&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+n+" "+(e.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,n){return(n=n||document.createElement("img")).src=t,n},_getIconUrl:function(t){return tB.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),n5=n8.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){// @option imagePath: String
// `Icon.Default` will try to auto-detect the location of the
// blue icon images. If you are placing these images in a non-standard
// way, set this option to point to the right path.
return"string"!=typeof n5.imagePath&&(n5.imagePath=this._detectIconPath()),(this.options.imagePath||n5.imagePath)+n8.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var n=function(t,n,e){var i=n.exec(t);return i&&i[e]};return(t=n(t,/^url\((['"])?(.+)\1\)$/,2))&&n(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=t0("div","leaflet-default-icon-path",document.body),n=tQ(t,"background-image")||tQ(t,"backgroundImage");if(document.body.removeChild(t),n=this._stripUrl(n))return n;var e=document.querySelector('link[href$="leaflet.css"]');return e?e.href.substring(0,e.href.length-11-1):""}}),n7=nR.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new nN(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),t8(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&t5(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var n=this._marker,e=n._map,i=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=no(n._icon),s=e.getPixelBounds(),a=e.getPixelOrigin(),u=U(s.min._subtract(a).add(o),s.max._subtract(a).subtract(o));if(!u.contains(r)){// Compute incremental movement
var h=F((Math.max(u.max.x,r.x)-u.max.x)/(s.max.x-u.max.x)-(Math.min(u.min.x,r.x)-u.min.x)/(s.min.x-u.min.x),(Math.max(u.max.y,r.y)-u.max.y)/(s.max.y-u.max.y)-(Math.min(u.min.y,r.y)-u.min.y)/(s.min.y-u.min.y)).multiplyBy(i);e.panBy(h,{animate:!1}),this._draggable._newPos._add(h),this._draggable._startPos._add(h),ni(n._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=I(this._adjustPan.bind(this,t))}},_onDragStart:function(){// @section Dragging events
// @event dragstart: Event
// Fired when the user starts dragging the marker.
// @event movestart: Event
// Fired when the marker starts moving (because of dragging).
this._oldLatLng=this._marker.getLatLng(),// When using ES6 imports it could not be set when `Popup` was not imported as well
this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(B(this._panRequest),this._panRequest=I(this._adjustPan.bind(this,t)))},_onDrag:function(t){var n=this._marker,e=n._shadow,i=no(n._icon),o=n._map.layerPointToLatLng(i);e&&ni(e,i),n._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,// @event drag: Event
// Fired repeatedly while the user drags the marker.
n.fire("move",t).fire("drag",t)},_onDragEnd:function(t){// @event dragend: DragEndEvent
// Fired when the user stops dragging the marker.
B(this._panRequest),// @event moveend: Event
// Fired when the marker stops moving (because of dragging).
delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),n6=n3.extend({// @section
// @aka Marker options
options:{// @option icon: Icon = *
// Icon instance to use for rendering the marker.
// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
// If not specified, a common instance of `L.Icon.Default` is used.
icon:new n5,// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option keyboard: Boolean = true
// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
keyboard:!0,// @option title: String = ''
// Text for the browser tooltip that appear on marker hover (no tooltip by default).
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
title:"",// @option alt: String = 'Marker'
// Text for the `alt` attribute of the icon image.
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
alt:"Marker",// @option zIndexOffset: Number = 0
// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
zIndexOffset:0,// @option opacity: Number = 1.0
// The opacity of the marker.
opacity:1,// @option riseOnHover: Boolean = false
// If `true`, the marker will get on top of others when you hover the mouse over it.
riseOnHover:!1,// @option riseOffset: Number = 250
// The z-index offset used for the `riseOnHover` feature.
riseOffset:250,// @option pane: String = 'markerPane'
// `Map pane` where the markers icon will be added.
pane:"markerPane",// @option shadowPane: String = 'shadowPane'
// `Map pane` where the markers shadow will be added.
shadowPane:"shadowPane",// @option bubblingMouseEvents: Boolean = false
// When `true`, a mouse event on this marker will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!1,// @option autoPanOnFocus: Boolean = true
// When `true`, the map will pan whenever the marker is focused (via
// e.g. pressing `tab` on the keyboard) to ensure the marker is
// visible within the map's bounds
autoPanOnFocus:!0,// @section Draggable marker options
// @option draggable: Boolean = false
// Whether the marker is draggable with mouse/touch or not.
draggable:!1,// @option autoPan: Boolean = false
// Whether to pan the map when dragging this marker near its edge or not.
autoPan:!1,// @option autoPanPadding: Point = Point(50, 50)
// Distance (in pixels to the left/right and to the top/bottom) of the
// map edge to start panning the map.
autoPanPadding:[50,50],// @option autoPanSpeed: Number = 10
// Number of pixels the map should pan by.
autoPanSpeed:10},/* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */initialize:function(t,n){b(this,n),this._latlng=K(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},// @method getLatLng: LatLng
// Returns the current geographical position of the marker.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Changes the marker position to the given point.
setLatLng:function(t){var n=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=K(t),this.update(),this.fire("move",{oldLatLng:n,latlng:this._latlng})},// @method setZIndexOffset(offset: Number): this
// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},// @method getIcon: Icon
// Returns the current icon used by the marker
getIcon:function(){return this.options.icon},// @method setIcon(icon: Icon): this
// Changes the marker icon.
setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,n="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),i=!1;e!==this._icon&&(this._icon&&this._removeIcon(),i=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),t8(e,n),t.keyboard&&(e.tabIndex="0",e.setAttribute("role","button")),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&nf(e,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(t8(o,n),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),i&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&np(this._icon,"focus",this._panOnFocus,this),t1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&t1(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&ni(this._icon,t),this._shadow&&ni(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var n=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(n)},_initInteraction:function(){if(this.options.interactive&&(t8(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),n7)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new n7(this),t&&this.dragging.enable()}},// @method setOpacity(opacity: Number): this
// Changes the opacity of the marker.
setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&nt(this._icon,t),this._shadow&&nt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var n=this.options.icon.options,e=n.iconSize?F(n.iconSize):F(0,0),i=n.iconAnchor?F(n.iconAnchor):F(0,0);t.panInside(this._latlng,{paddingTopLeft:i,paddingBottomRight:e.subtract(i)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),et=n3.extend({// @section
// @aka Path options
options:{// @option stroke: Boolean = true
// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
stroke:!0,// @option color: String = '#3388ff'
// Stroke color
color:"#3388ff",// @option weight: Number = 3
// Stroke width in pixels
weight:3,// @option opacity: Number = 1.0
// Stroke opacity
opacity:1,// @option lineCap: String= 'round'
// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
lineCap:"round",// @option lineJoin: String = 'round'
// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
lineJoin:"round",// @option dashArray: String = null
// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashArray:null,// @option dashOffset: String = null
// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashOffset:null,// @option fill: Boolean = depends
// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
fill:!1,// @option fillColor: String = *
// Fill color. Defaults to the value of the [`color`](#path-color) option
fillColor:null,// @option fillOpacity: Number = 0.2
// Fill opacity.
fillOpacity:.2,// @option fillRule: String = 'evenodd'
// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
fillRule:"evenodd",// className: '',
// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option bubblingMouseEvents: Boolean = true
// When `true`, a mouse event on this path will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!0},beforeAdd:function(t){// Renderer is set here because we need to call renderer.getEvents
// before this.getEvents.
this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},// @method redraw(): this
// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
redraw:function(){return this._map&&this._renderer._updatePath(this),this},// @method setStyle(style: Path options): this
// Changes the appearance of a Path based on the options in the `Path options` object.
setStyle:function(t){return b(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},// @method bringToFront(): this
// Brings the layer to the top of all path layers.
bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},// @method bringToBack(): this
// Brings the layer to the bottom of all path layers.
bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){// defined in child classes
this._project(),this._update()},_clickTolerance:function(){// used when doing hit detection for Canvas layers
return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),en=et.extend({// @section
// @aka CircleMarker options
options:{fill:!0,// @option radius: Number = 10
// Radius of the circle marker, in pixels
radius:10},initialize:function(t,n){b(this,n),this._latlng=K(t),this._radius=this.options.radius},// @method setLatLng(latLng: LatLng): this
// Sets the position of a circle marker to a new location.
setLatLng:function(t){var n=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=K(t),this.redraw(),this.fire("move",{oldLatLng:n,latlng:this._latlng})},// @method getLatLng(): LatLng
// Returns the current geographical position of the circle marker
getLatLng:function(){return this._latlng},// @method setRadius(radius: Number): this
// Sets the radius of a circle marker. Units are in pixels.
setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of the circle
getRadius:function(){return this._radius},setStyle:function(t){var n=t&&t.radius||this._radius;return et.prototype.setStyle.call(this,t),this.setRadius(n),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,n=this._radiusY||t,e=this._clickTolerance(),i=[t+e,n+e];this._pxBounds=new H(this._point.subtract(i),this._point.add(i))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),ee=en.extend({initialize:function(t,e,i){if("number"==typeof e&&(e=n({},i,{radius:e})),b(this,e),this._latlng=K(t),isNaN(this.options.radius))throw Error("Circle radius cannot be NaN");// @section
// @aka Circle options
// @option radius: Number; Radius of the circle, in meters.
this._mRadius=this.options.radius},// @method setRadius(radius: Number): this
// Sets the radius of a circle. Units are in meters.
setRadius:function(t){return this._mRadius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of a circle. Units are in meters.
getRadius:function(){return this._mRadius},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new q(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:et.prototype.setStyle,_project:function(){var t=this._latlng.lng,n=this._latlng.lat,e=this._map,i=e.options.crs;if(i.distance===$.distance){var o=Math.PI/180,r=this._mRadius/$.R/o,s=e.project([n+r,t]),a=e.project([n-r,t]),u=s.add(a).divideBy(2),h=e.unproject(u).lat,l=Math.acos((Math.cos(r*o)-Math.sin(n*o)*Math.sin(h*o))/(Math.cos(n*o)*Math.cos(h*o)))/o;(isNaN(l)||0===l)&&(l=r/Math.cos(Math.PI/180*n)),this._point=u.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:u.x-e.project([h,t-l]).x,this._radiusY=u.y-s.y}else{var c=i.unproject(i.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}}),ei=et.extend({// @section
// @aka Polyline options
options:{// @option smoothFactor: Number = 1.0
// How much to simplify the polyline on each zoom level. More means
// better performance and smoother look, and less means more accurate representation.
smoothFactor:1,// @option noClip: Boolean = false
// Disable polyline clipping.
noClip:!1},initialize:function(t,n){b(this,n),this._setLatLngs(t)},// @method getLatLngs(): LatLng[]
// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
getLatLngs:function(){return this._latlngs},// @method setLatLngs(latlngs: LatLng[]): this
// Replaces all the points in the polyline with the given array of geographical points.
setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},// @method isEmpty(): Boolean
// Returns `true` if the Polyline has no LatLngs.
isEmpty:function(){return!this._latlngs.length},// @method closestLayerPoint(p: Point): Point
// Returns the point closest to `p` on the Polyline.
closestLayerPoint:function(t){for(var n,e,i=1/0,o=null,r=nK,s=0,a=this._parts.length;s<a;s++)for(var u=this._parts[s],h=1,l=u.length;h<l;h++){var c=r(t,n=u[h-1],e=u[h],!0);c<i&&(i=c,o=r(t,n,e))}return o&&(o.distance=Math.sqrt(i)),o},// @method getCenter(): LatLng
// Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return nJ(this._defaultShape(),this._map.options.crs)},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){return this._bounds},// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
// Adds a given point to the polyline. By default, adds to the first ring of
// the polyline in case of a multi-polyline, but can be overridden by passing
// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
addLatLng:function(t,n){return n=n||this._defaultShape(),t=K(t),n.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new q,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return nY(this._latlngs)?this._latlngs:this._latlngs[0]},// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
_convertLatLngs:function(t){for(var n=[],e=nY(t),i=0,o=t.length;i<o;i++)e?(n[i]=K(t[i]),this._bounds.extend(n[i])):n[i]=this._convertLatLngs(t[i]);return n},_project:function(){var t=new H;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),n=new D(t,t);this._rawPxBounds&&(this._pxBounds=new H([this._rawPxBounds.min.subtract(n),this._rawPxBounds.max.add(n)]))},// recursively turns latlngs into a set of rings with projected coordinates
_projectLatlngs:function(t,n,e){var i,o,r=t[0]instanceof G,s=t.length;if(r){for(i=0,o=[];i<s;i++)o[i]=this._map.latLngToLayerPoint(t[i]),e.extend(o[i]);n.push(o)}else for(i=0;i<s;i++)this._projectLatlngs(t[i],n,e)},// clip polyline by renderer bounds so that we have less to render for performance
_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}var n,e,i,o,r,s,a,u=this._parts;for(n=0,i=0,o=this._rings.length;n<o;n++)for(e=0,r=(a=this._rings[n]).length;e<r-1;e++)(s=nq(a[e],a[e+1],t,e,!0))&&(u[i]=u[i]||[],u[i].push(s[0]),(s[1]!==a[e+1]||e===r-2)&&(u[i].push(s[1]),i++))}},// simplify each clipped part of the polyline for performance
_simplifyPoints:function(){for(var t=this._parts,n=this.options.smoothFactor,e=0,i=t.length;e<i;e++)t[e]=nH(t[e],n)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t,n){var e,i,o,r,s,a,u=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// hit detection for polylines
for(e=0,r=this._parts.length;e<r;e++)for(i=0,o=(s=(a=this._parts[e]).length)-1;i<s;o=i++)if((n||0!==i)&&nU(t,a[o],a[i])<=u)return!0;return!1}});// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
ei._flat=n$;/*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */var eo=ei.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},// @method getCenter(): LatLng
// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return nW(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var n=ei.prototype._convertLatLngs.call(this,t),e=n.length;return e>=2&&n[0]instanceof G&&n[0].equals(n[e-1])&&n.pop(),n},_setLatLngs:function(t){ei.prototype._setLatLngs.call(this,t),nY(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return nY(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){// polygons need a different clipping algorithm so we redefine that
var t=this._renderer._bounds,n=this.options.weight,e=new D(n,n);if(// increase clip padding by stroke width to avoid stroke on clip edges
t=new H(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}for(var i,o=0,r=this._rings.length;o<r;o++)(i=nD(this._rings[o],t,!0)).length&&this._parts.push(i)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){var n,e,i,o,r,s,a,u,h=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// ray casting algorithm for detecting if point is in polygon
for(o=0,a=this._parts.length;o<a;o++)for(r=0,s=(u=(n=this._parts[o]).length)-1;r<u;s=r++)e=n[r],i=n[s],e.y>t.y!=i.y>t.y&&t.x<(i.x-e.x)*(t.y-e.y)/(i.y-e.y)+e.x&&(h=!h);// also check if it's on polygon stroke
return h||ei.prototype._containsPoint.call(this,t,!0)}}),er=n4.extend({/* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */initialize:function(t,n){b(this,n),this._layers={},t&&this.addData(t)},// @method addData( <GeoJSON> data ): this
// Adds a GeoJSON object to the layer.
addData:function(t){var n,e,i,o=M(t)?t:t.features;if(o){for(n=0,e=o.length;n<e;n++)(// only add this if geometry or geometries are set and not null
(i=o[n]).geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var s=es(t,r);return s?(s.feature=e_(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},// @method resetStyle( <Path> layer? ): this
// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
// If `layer` is omitted, the style of all features in the current layer is reset.
resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(// reset any custom styles
t.options=n({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},// @method setStyle( <Function> style ): this
// Changes styles of GeoJSON vector layers with the given style function.
setStyle:function(t){return this.eachLayer(function(n){this._setLayerStyle(n,t)},this)},_setLayerStyle:function(t,n){t.setStyle&&("function"==typeof n&&(n=n(t.feature)),t.setStyle(n))}});// @section
// There are several static functions which can be called without instantiating L.GeoJSON:
// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function es(t,n){var e,i,o,r,s="Feature"===t.type?t.geometry:t,a=s?s.coordinates:null,u=[],h=n&&n.pointToLayer,l=n&&n.coordsToLatLng||eu;if(!a&&!s)return null;switch(s.type){case"Point":return ea(h,t,e=l(a),n);case"MultiPoint":for(o=0,r=a.length;o<r;o++)e=l(a[o]),u.push(ea(h,t,e,n));return new n4(u);case"LineString":case"MultiLineString":return i=eh(a,"LineString"===s.type?0:1,l),new ei(i,n);case"Polygon":case"MultiPolygon":return i=eh(a,"Polygon"===s.type?1:2,l),new eo(i,n);case"GeometryCollection":for(o=0,r=s.geometries.length;o<r;o++){var c=es({geometry:s.geometries[o],type:"Feature",properties:t.properties},n);c&&u.push(c)}return new n4(u);case"FeatureCollection":for(o=0,r=s.features.length;o<r;o++){var f=es(s.features[o],n);f&&u.push(f)}return new n4(u);default:throw Error("Invalid GeoJSON object.")}}function ea(t,n,e,i){return t?t(n,e):new n6(e,i&&i.markersInheritOptions&&i)}// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function eu(t){return new G(t[1],t[0],t[2])}// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function eh(t,n,e){for(var i=[],o=0,r=t.length;o<r;o++)i.push(n?eh(t[o],n-1,e):(e||eu)(t[o]));return i}// @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function el(t,n){return void 0!==(t=K(t)).alt?[y(t.lng,n),y(t.lat,n),y(t.alt,n)]:[y(t.lng,n),y(t.lat,n)]}// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function ec(t,n,e,i){for(var o=[],r=0,s=t.length;r<s;r++)o.push(n?ec(t[r],nY(t[r])?0:n-1,e,i):el(t[r],i));return!n&&e&&o.length>0&&o.push(o[0].slice()),o}function ef(t,e){return t.feature?n({},t.feature,{geometry:e}):e_(e)}// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function e_(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var ep={toGeoJSON:function(t){return ef(this,{type:"Point",coordinates:el(this.getLatLng(),t)})}};// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function ed(t,n){return new er(t,n)}// @namespace Marker
// @section Other methods
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
n6.include(ep),// @namespace CircleMarker
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
ee.include(ep),en.include(ep),// @namespace Polyline
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
ei.include({toGeoJSON:function(t){var n=!nY(this._latlngs),e=ec(this._latlngs,n?1:0,!1,t);return ef(this,{type:(n?"Multi":"")+"LineString",coordinates:e})}}),// @namespace Polygon
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
eo.include({toGeoJSON:function(t){var n=!nY(this._latlngs),e=n&&!nY(this._latlngs[0]),i=ec(this._latlngs,e?2:n?1:0,!0,t);return n||(i=[i]),ef(this,{type:(e?"Multi":"")+"Polygon",coordinates:i})}}),// @namespace LayerGroup
n9.include({toMultiPoint:function(t){var n=[];return this.eachLayer(function(e){n.push(e.toGeoJSON(t).geometry.coordinates)}),ef(this,{type:"MultiPoint",coordinates:n})},// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
toGeoJSON:function(t){var n=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===n)return this.toMultiPoint(t);var e="GeometryCollection"===n,i=[];return(this.eachLayer(function(n){if(n.toGeoJSON){var o=n.toGeoJSON(t);if(e)i.push(o.geometry);else{var r=e_(o);"FeatureCollection"===r.type?i.push.apply(i,r.features):i.push(r)}}}),e)?ef(this,{geometries:i,type:"GeometryCollection"}):{type:"FeatureCollection",features:i}}});/*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */var em=n3.extend({// @section
// @aka ImageOverlay options
options:{// @option opacity: Number = 1.0
// The opacity of the image overlay.
opacity:1,// @option alt: String = ''
// Text for the `alt` attribute of the image (useful for accessibility).
alt:"",// @option interactive: Boolean = false
// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
interactive:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the image.
// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option errorOverlayUrl: String = ''
// URL to the overlay image to show in place of the overlay that failed to load.
errorOverlayUrl:"",// @option zIndex: Number = 1
// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
zIndex:1,// @option className: String = ''
// A custom class name to assign to the image. Empty by default.
className:""},initialize:function(t,n,e){this._url=t,this._bounds=V(n),b(this,e)},onAdd:function(){!this._image&&(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(t8(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){t1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},// @method setOpacity(opacity: Number): this
// Sets the opacity of the overlay.
setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},// @method bringToFront(): this
// Brings the layer to the top of all overlays.
bringToFront:function(){return this._map&&t3(this._image),this},// @method bringToBack(): this
// Brings the layer to the bottom of all overlays.
bringToBack:function(){return this._map&&t9(this._image),this},// @method setUrl(url: String): this
// Changes the URL of the image.
setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},// @method setBounds(bounds: LatLngBounds): this
// Update the bounds that this ImageOverlay covers
setBounds:function(t){return this._bounds=V(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method setZIndex(value: Number): this
// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method getBounds(): LatLngBounds
// Get the bounds that this ImageOverlay covers
getBounds:function(){return this._bounds},// @method getElement(): HTMLElement
// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
// used by this overlay.
getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,n=this._image=t?this._url:t0("img");if(t8(n,"leaflet-image-layer"),this._zoomAnimated&&t8(n,"leaflet-zoom-animated"),this.options.className&&t8(n,this.options.className),n.onselectstart=g,n.onmousemove=g,// @event load: Event
// Fired when the ImageOverlay layer has loaded its image
n.onload=_(this.fire,this,"load"),n.onerror=_(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=n.src;return}n.src=this._url,n.alt=this.options.alt},_animateZoom:function(t){var n=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;ne(this._image,e,n)},_reset:function(){var t=this._image,n=new H(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=n.getSize();ni(t,n.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){nt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){// @event error: Event
// Fired when the ImageOverlay layer fails to load its image
this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},// @method getCenter(): LatLng
// Returns the center of the ImageOverlay.
getCenter:function(){return this._bounds.getCenter()}}),ev=em.extend({// @section
// @aka VideoOverlay options
options:{// @option autoplay: Boolean = true
// Whether the video starts playing automatically when loaded.
// On some browsers autoplay will only work with `muted: true`
autoplay:!0,// @option loop: Boolean = true
// Whether the video will loop back to the beginning when played.
loop:!0,// @option keepAspectRatio: Boolean = true
// Whether the video will save aspect ratio after the projection.
// Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
keepAspectRatio:!0,// @option muted: Boolean = false
// Whether the video starts on mute when loaded.
muted:!1,// @option playsInline: Boolean = true
// Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,n=this._image=t?this._url:t0("video");if(t8(n,"leaflet-image-layer"),this._zoomAnimated&&t8(n,"leaflet-zoom-animated"),this.options.className&&t8(n,this.options.className),n.onselectstart=g,n.onmousemove=g,// @event load: Event
// Fired when the video has finished loading the first frame
n.onloadeddata=_(this.fire,this,"load"),t){for(var e=n.getElementsByTagName("source"),i=[],o=0;o<e.length;o++)i.push(e[o].src);this._url=e.length>0?i:[n.src];return}M(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(n.style,"objectFit")&&(n.style.objectFit="fill"),n.autoplay=!!this.options.autoplay,n.loop=!!this.options.loop,n.muted=!!this.options.muted,n.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var s=t0("source");s.src=this._url[r],n.appendChild(s)}}}),eg=em.extend({_initImage:function(){var t=this._image=this._url;t8(t,"leaflet-image-layer"),this._zoomAnimated&&t8(t,"leaflet-zoom-animated"),this.options.className&&t8(t,this.options.className),t.onselectstart=g,t.onmousemove=g}}),ey=n3.extend({// @section
// @aka DivOverlay options
options:{// @option interactive: Boolean = false
// If true, the popup/tooltip will listen to the mouse events.
interactive:!1,// @option offset: Point = Point(0, 0)
// The offset of the overlay position.
offset:[0,0],// @option className: String = ''
// A custom CSS class name to assign to the overlay.
className:"",// @option pane: String = undefined
// `Map pane` where the overlay will be added.
pane:void 0,// @option content: String|HTMLElement|Function = ''
// Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
// passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
content:""},initialize:function(t,n){t&&(t instanceof G||M(t))?(this._latlng=K(t),b(this,n)):(b(this,t),this._source=n),this.options.content&&(this._content=this.options.content)},// @method openOn(map: Map): this
// Adds the overlay to the map.
// Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},// @method close(): this
// Closes the overlay.
// Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
// and `layer.closePopup()`/`.closeTooltip()`.
close:function(){return this._map&&this._map.removeLayer(this),this},// @method toggle(layer?: Layer): this
// Opens or closes the overlay bound to layer depending on its current state.
// Argument may be omitted only for overlay bound to layer.
// Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),// open the overlay on the map
this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&nt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&nt(this._container,1),this.bringToFront(),this.options.interactive&&(t8(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(nt(this._container,0),this._removeTimeout=setTimeout(_(t1,void 0,this._container),200)):t1(this._container),this.options.interactive&&(t5(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},// @namespace DivOverlay
// @method getLatLng: LatLng
// Returns the geographical point of the overlay.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Sets the geographical point where the overlay will open.
setLatLng:function(t){return this._latlng=K(t),this._map&&(this._updatePosition(),this._adjustPan()),this},// @method getContent: String|HTMLElement
// Returns the content of the overlay.
getContent:function(){return this._content},// @method setContent(htmlContent: String|HTMLElement|Function): this
// Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
// The function should return a `String` or `HTMLElement` to be used in the overlay.
setContent:function(t){return this._content=t,this.update(),this},// @method getElement: String|HTMLElement
// Returns the HTML container of the overlay.
getElement:function(){return this._container},// @method update: null
// Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method isOpen: Boolean
// Returns `true` when the overlay is visible on the map.
isOpen:function(){return!!this._map&&this._map.hasLayer(this)},// @method bringToFront: this
// Brings this overlay in front of other overlays (in the same map pane).
bringToFront:function(){return this._map&&t3(this._container),this},// @method bringToBack: this
// Brings this overlay to the back of other overlays (in the same map pane).
bringToBack:function(){return this._map&&t9(this._container),this},// prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
_prepareOpen:function(t){var n=this._source;if(!n._map)return!1;if(n instanceof n4){n=null;var e=this._source._layers;for(var i in e)if(e[i]._map){n=e[i];break}if(!n)return!1;// Unable to get source layer.
// set overlay source to this layer
this._source=n}if(!t){if(n.getCenter)t=n.getCenter();else if(n.getLatLng)t=n.getLatLng();else if(n.getBounds)t=n.getBounds().getCenter();else throw Error("Unable to get source layer LatLng.")}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,n="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof n)t.innerHTML=n;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(n)}// @namespace DivOverlay
// @section DivOverlay events
// @event contentupdate: Event
// Fired when the content of the overlay is updated
this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),n=F(this.options.offset),e=this._getAnchor();this._zoomAnimated?ni(this._container,t.add(e)):n=n.add(t).add(e);var i=this._containerBottom=-n.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+n.x;// bottom position the overlay in case the height of the overlay changes (images loading etc)
this._container.style.bottom=i+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});nk.include({_initOverlay:function(t,n,e,i){var o=n;return o instanceof t||(o=new t(i).setContent(n)),e&&o.setLatLng(e),o}}),n3.include({_initOverlay:function(t,n,e,i){var o=e;return o instanceof t?(b(o,i),o._source=this):(o=n&&!i?n:new t(i,this)).setContent(e),o}});/*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   *
   * A popup can be also standalone:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   * or
   * ```js
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */// @namespace Popup
var ex=ey.extend({// @section
// @aka Popup options
options:{// @option pane: String = 'popupPane'
// `Map pane` where the popup will be added.
pane:"popupPane",// @option offset: Point = Point(0, 7)
// The offset of the popup position.
offset:[0,7],// @option maxWidth: Number = 300
// Max width of the popup, in pixels.
maxWidth:300,// @option minWidth: Number = 50
// Min width of the popup, in pixels.
minWidth:50,// @option maxHeight: Number = null
// If set, creates a scrollable container of the given height
// inside a popup if its content exceeds it.
// The scrollable container can be styled using the
// `leaflet-popup-scrolled` CSS class selector.
maxHeight:null,// @option autoPan: Boolean = true
// Set it to `false` if you don't want the map to do panning animation
// to fit the opened popup.
autoPan:!0,// @option autoPanPaddingTopLeft: Point = null
// The margin between the popup and the top left corner of the map
// view after autopanning was performed.
autoPanPaddingTopLeft:null,// @option autoPanPaddingBottomRight: Point = null
// The margin between the popup and the bottom right corner of the map
// view after autopanning was performed.
autoPanPaddingBottomRight:null,// @option autoPanPadding: Point = Point(5, 5)
// Equivalent of setting both top left and bottom right autopan padding to the same value.
autoPanPadding:[5,5],// @option keepInView: Boolean = false
// Set it to `true` if you want to prevent users from panning the popup
// off of the screen while it is open.
keepInView:!1,// @option closeButton: Boolean = true
// Controls the presence of a close button in the popup.
closeButton:!0,// @option autoClose: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the popup closing when another popup is opened.
autoClose:!0,// @option closeOnEscapeKey: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the ESC key for closing of the popup.
closeOnEscapeKey:!0,// @option closeOnClick: Boolean = *
// Set it if you want to override the default behavior of the popup closing when user clicks
// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
// @option className: String = ''
// A custom CSS class name to assign to the popup.
className:""},// @namespace Popup
// @method openOn(map: Map): this
// Alternative to `map.openPopup(popup)`.
// Adds the popup to the map and closes the previous one.
openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ey.prototype.openOn.call(this,t)},onAdd:function(t){ey.prototype.onAdd.call(this,t),// @namespace Map
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup is opened in the map
t.fire("popupopen",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup bound to this layer is opened
this._source.fire("popupopen",{popup:this},!0),this._source instanceof et||this._source.on("preclick",ny))},onRemove:function(t){ey.prototype.onRemove.call(this,t),// @namespace Map
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup in the map is closed
t.fire("popupclose",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup bound to this layer is closed
this._source.fire("popupclose",{popup:this},!0),this._source instanceof et||this._source.off("preclick",ny))},getEvents:function(){var t=ey.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",n=this._container=t0("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=t0("div",t+"-content-wrapper",n);if(this._contentNode=t0("div",t+"-content",e),nw(n),nx(this._contentNode),nf(n,"contextmenu",ny),this._tipContainer=t0("div",t+"-tip-container",n),this._tip=t0("div",t+"-tip",this._tipContainer),this.options.closeButton){var i=this._closeButton=t0("a",t+"-close-button",n);i.setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',nf(i,"click",function(t){nb(t),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,n=t.style;n.width="",n.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.max(e=Math.min(e,this.options.maxWidth),this.options.minWidth),n.width=e+1+"px",n.whiteSpace="",n.height="";var i=t.offsetHeight,o=this.options.maxHeight,r="leaflet-popup-scrolled";o&&i>o?(n.height=o+"px",t8(t,r)):t5(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var n=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();ni(this._container,n.add(e))},_adjustPan:function(){if(this.options.autoPan){// We can endlessly recurse if keepInView is set and the view resets.
// Let's guard against that by exiting early if we're responding to our own autopan.
if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,n=parseInt(tQ(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+n,i=this._containerWidth,o=new D(this._containerLeft,-e-this._containerBottom);o._add(no(this._container));var r=t.layerPointToContainerPoint(o),s=F(this.options.autoPanPadding),a=F(this.options.autoPanPaddingTopLeft||s),u=F(this.options.autoPanPaddingBottomRight||s),h=t.getSize(),l=0,c=0;r.x+i+u.x>h.x&&(l=r.x+i-h.x+u.x),r.x-l-a.x<0&&(l=r.x-a.x),r.y+e+u.y>h.y&&(c=r.y+e-h.y+u.y),r.y-c-a.y<0&&(c=r.y-a.y),(l||c)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([l,c]))}},_getAnchor:function(){// Where should we anchor the popup on the source layer?
return F(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});/* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */nk.mergeOptions({closePopupOnClick:!0}),// @namespace Map
// @section Methods for Layers and Controls
nk.include({// @method openPopup(popup: Popup): this
// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
// @alternative
// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
// Creates a popup with the specified content and options and opens it in the given point on a map.
openPopup:function(t,n,e){return this._initOverlay(ex,t,n,e).openOn(this),this},// @method closePopup(popup?: Popup): this
// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),/*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */// @section Popup methods
n3.include({// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
// Binds a popup to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindPopup:function(t,n){return this._popup=this._initOverlay(ex,this._popup,t,n),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},// @method unbindPopup(): this
// Removes the popup previously bound with `bindPopup`.
unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},// @method openPopup(latlng?: LatLng): this
// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
openPopup:function(t){return this._popup&&(this instanceof n4||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},// @method closePopup(): this
// Closes the popup bound to this layer if it is open.
closePopup:function(){return this._popup&&this._popup.close(),this},// @method togglePopup(): this
// Opens or closes the popup bound to this layer depending on its current state.
togglePopup:function(){return this._popup&&this._popup.toggle(this),this},// @method isPopupOpen(): boolean
// Returns `true` if the popup bound to this layer is currently open.
isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},// @method setPopupContent(content: String|HTMLElement|Popup): this
// Sets the content of the popup bound to this layer.
setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},// @method getPopup(): Popup
// Returns the popup bound to this layer.
getPopup:function(){return this._popup},_openPopup:function(t){if(this._popup&&this._map){// prevent map click
nL(t);var n=t.layer||t.target;if(this._popup._source===n&&!(n instanceof et)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=n,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});/*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Path overlays like polylines also have a `bindTooltip` method.
   *
   * A tooltip can be also standalone:
   *
   * ```js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * ```
   * or
   * ```js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * ```
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */// @namespace Tooltip
var ew=ey.extend({// @section
// @aka Tooltip options
options:{// @option pane: String = 'tooltipPane'
// `Map pane` where the tooltip will be added.
pane:"tooltipPane",// @option offset: Point = Point(0, 0)
// Optional offset of the tooltip position.
offset:[0,0],// @option direction: String = 'auto'
// Direction where to open the tooltip. Possible values are: `right`, `left`,
// `top`, `bottom`, `center`, `auto`.
// `auto` will dynamically switch between `right` and `left` according to the tooltip
// position on the map.
direction:"auto",// @option permanent: Boolean = false
// Whether to open the tooltip permanently or only on mouseover.
permanent:!1,// @option sticky: Boolean = false
// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
sticky:!1,// @option opacity: Number = 0.9
// Tooltip container opacity.
opacity:.9},onAdd:function(t){ey.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),// @namespace Map
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip is opened in the map.
t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip bound to this layer is opened.
this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ey.prototype.onRemove.call(this,t),// @namespace Map
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip in the map is closed.
t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip bound to this layer is closed.
this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ey.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=t0("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var n,e,i=this._map,o=this._container,r=i.latLngToContainerPoint(i.getCenter()),s=i.layerPointToContainerPoint(t),a=this.options.direction,u=o.offsetWidth,h=o.offsetHeight,l=F(this.options.offset),c=this._getAnchor();"top"===a?(n=u/2,e=h):"bottom"===a?(n=u/2,e=0):("center"===a?n=u/2:"right"===a?n=0:"left"===a?n=u:s.x<r.x?(a="right",n=0):(a="left",n=u+(l.x+c.x)*2),e=h/2),t=t.subtract(F(n,e,!0)).add(l).add(c),t5(o,"leaflet-tooltip-right"),t5(o,"leaflet-tooltip-left"),t5(o,"leaflet-tooltip-top"),t5(o,"leaflet-tooltip-bottom"),t8(o,"leaflet-tooltip-"+a),ni(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&nt(this._container,t)},_animateZoom:function(t){var n=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(n)},_getAnchor:function(){// Where should we anchor the tooltip on the source layer?
return F(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});// @namespace Map
// @section Methods for Layers and Controls
nk.include({// @method openTooltip(tooltip: Tooltip): this
// Opens the specified tooltip.
// @alternative
// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
// Creates a tooltip with the specified content and options and open it.
openTooltip:function(t,n,e){return this._initOverlay(ew,t,n,e).openOn(this),this},// @method closeTooltip(tooltip: Tooltip): this
// Closes the tooltip given as parameter.
closeTooltip:function(t){return t.close(),this}}),/*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */// @section Tooltip methods
n3.include({// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
// Binds a tooltip to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindTooltip:function(t,n){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ew,this._tooltip,t,n),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},// @method unbindTooltip(): this
// Removes the tooltip previously bound with `bindTooltip`.
unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[t?"off":"on"](n),this._tooltipHandlersAdded=!t}},// @method openTooltip(latlng?: LatLng): this
// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
openTooltip:function(t){return this._tooltip&&(this instanceof n4||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(// open the tooltip on the map
this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},// @method closeTooltip(): this
// Closes the tooltip bound to this layer if it is open.
closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},// @method toggleTooltip(): this
// Opens or closes the tooltip bound to this layer depending on its current state.
toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},// @method isTooltipOpen(): boolean
// Returns `true` if the tooltip bound to this layer is currently open.
isTooltipOpen:function(){return this._tooltip.isOpen()},// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
// Sets the content of the tooltip bound to this layer.
setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},// @method getTooltip(): Tooltip
// Returns the tooltip bound to this layer.
getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var n="function"==typeof t.getElement&&t.getElement();n&&(nf(n,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),nf(n,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var n="function"==typeof t.getElement&&t.getElement();n&&n.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(this._tooltip&&this._map){// If the map is moving, we will show the tooltip after it's done.
if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var n=this;this._map.once("moveend",function(){n._openOnceFlag=!1,n._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var n,e,i=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(n=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(n),i=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(i)}});/*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */var eb=n8.extend({options:{// @section
// @aka DivIcon options
iconSize:[12,12],// iconAnchor: (Point),
// popupAnchor: (Point),
// @option html: String|HTMLElement = ''
// Custom HTML code to put inside the div element, empty by default. Alternatively,
// an instance of `HTMLElement`.
html:!1,// @option bgPos: Point = [0, 0]
// Optional relative position of the background, in pixels
bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var n=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(e.html instanceof Element?(t2(n),n.appendChild(e.html)):n.innerHTML=!1!==e.html?e.html:"",e.bgPos){var i=F(e.bgPos);n.style.backgroundPosition=-i.x+"px "+-i.y+"px"}return this._setIconStyles(n,"icon"),n},createShadow:function(){return null}});n8.Default=n5;/*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */var eL=n3.extend({// @section
// @aka GridLayer options
options:{// @option tileSize: Number|Point = 256
// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
tileSize:256,// @option opacity: Number = 1.0
// Opacity of the tiles. Can be used in the `createTile()` function.
opacity:1,// @option updateWhenIdle: Boolean = (depends)
// Load new tiles only when panning ends.
// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
updateWhenIdle:tB.mobile,// @option updateWhenZooming: Boolean = true
// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
updateWhenZooming:!0,// @option updateInterval: Number = 200
// Tiles will not update more than once every `updateInterval` milliseconds when panning.
updateInterval:200,// @option zIndex: Number = 1
// The explicit zIndex of the tile layer.
zIndex:1,// @option bounds: LatLngBounds = undefined
// If set, tiles will only be loaded inside the set `LatLngBounds`.
bounds:null,// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = undefined
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:void 0,// @option maxNativeZoom: Number = undefined
// Maximum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
// from `maxNativeZoom` level and auto-scaled.
maxNativeZoom:void 0,// @option minNativeZoom: Number = undefined
// Minimum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
// from `minNativeZoom` level and auto-scaled.
minNativeZoom:void 0,// @option noWrap: Boolean = false
// Whether the layer is wrapped around the antimeridian. If `true`, the
// GridLayer will only be displayed once at low zoom levels. Has no
// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
// tiles outside the CRS limits.
noWrap:!1,// @option pane: String = 'tilePane'
// `Map pane` where the grid layer will be added.
pane:"tilePane",// @option className: String = ''
// A custom class name to assign to the tile layer. Empty by default.
className:"",// @option keepBuffer: Number = 2
// When panning the map, keep this many rows and columns of tiles before unloading them.
keepBuffer:2},initialize:function(t){b(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),t1(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},// @method bringToFront: this
// Brings the tile layer to the top of all tile layers.
bringToFront:function(){return this._map&&(t3(this._container),this._setAutoZIndex(Math.max)),this},// @method bringToBack: this
// Brings the tile layer to the bottom of all tile layers.
bringToBack:function(){return this._map&&(t9(this._container),this._setAutoZIndex(Math.min)),this},// @method getContainer: HTMLElement
// Returns the HTML element that contains the tiles for this layer.
getContainer:function(){return this._container},// @method setOpacity(opacity: Number): this
// Changes the [opacity](#gridlayer-opacity) of the grid layer.
setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},// @method setZIndex(zIndex: Number): this
// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method isLoading: Boolean
// Returns `true` if any tile in the grid layer has not finished loading.
isLoading:function(){return this._loading},// @method redraw: this
// Causes the layer to clear all the tiles and request them again.
redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @section Extension methods
// Layers extending `GridLayer` shall reimplement the following method.
// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, must be overridden by classes extending `GridLayer`.
// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
// is specified, it must be called when the tile has finished loading and drawing.
createTile:function(){return document.createElement("div")},// @section
// @method getTileSize: Point
// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
getTileSize:function(){var t=this.options.tileSize;return t instanceof D?t:new D(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var n,e=this.getPane().children,i=-t(-1/0,1/0),o=0,r=e.length;o<r;o++)n=e[o].style.zIndex,e[o]!==this._container&&n&&(i=t(i,+n));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!tB.ielt9){nt(this._container,this.options.opacity);var t=+new Date,n=!1,e=!1;for(var i in this._tiles){var o=this._tiles[i];if(o.current&&o.loaded){var r=Math.min(1,(t-o.loaded)/200);nt(o.el,r),r<1?n=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),n&&(B(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=t0("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,n=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)e=Number(e),this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=n-Math.abs(t-e),this._onUpdateLevel(e)):(t1(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var i=this._levels[t],o=this._map;return i||((i=this._levels[t]={}).el=t0("div","leaflet-tile-container leaflet-zoom-animated",this._container),i.el.style.zIndex=n,i.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),i.zoom=t,this._setZoomTransform(i,o.getCenter(),o.getZoom()),// force the browser to consider the newly added element for transition
g(i.el.offsetWidth),this._onCreateLevel(i)),this._level=i,i}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var t,n,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)(n=this._tiles[t]).retain=n.current;for(t in this._tiles)if((n=this._tiles[t]).current&&!n.active){var i=n.coords;this._retainParent(i.x,i.y,i.z,i.z-5)||this._retainChildren(i.x,i.y,i.z,i.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var n in this._tiles)this._tiles[n].coords.z===t&&this._removeTile(n)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)t1(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,n,e,i){var o=Math.floor(t/2),r=Math.floor(n/2),s=e-1,a=new D(+o,+r);a.z=+s;var u=this._tileCoordsToKey(a),h=this._tiles[u];return h&&h.active?(h.retain=!0,!0):(h&&h.loaded&&(h.retain=!0),s>i&&this._retainParent(o,r,s,i))},_retainChildren:function(t,n,e,i){for(var o=2*t;o<2*t+2;o++)for(var r=2*n;r<2*n+2;r++){var s=new D(o,r);s.z=e+1;var a=this._tileCoordsToKey(s),u=this._tiles[a];if(u&&u.active){u.retain=!0;continue}u&&u.loaded&&(u.retain=!0),e+1<i&&this._retainChildren(o,r,e+1,i)}},_resetView:function(t){var n=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),n,n)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var n=this.options;return void 0!==n.minNativeZoom&&t<n.minNativeZoom?n.minNativeZoom:void 0!==n.maxNativeZoom&&n.maxNativeZoom<t?n.maxNativeZoom:t},_setView:function(t,n,e,i){var o=Math.round(n);o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o);var r=this.options.updateWhenZooming&&o!==this._tileZoom;(!i||r)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),// Flag to prevent _updateOpacity from pruning tiles during
// a zoom anim or a pinch gesture
this._noPrune=!!e),this._setZoomTransforms(t,n)},_setZoomTransforms:function(t,n){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,n)},_setZoomTransform:function(t,n,e){var i=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(n,e)).round();tB.any3d?ne(t.el,o,i):ni(t.el,o)},_resetGrid:function(){var t=this._map,n=t.options.crs,e=this._tileSize=this.getTileSize(),i=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=n.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,n.wrapLng[0]],i).x/e.x),Math.ceil(t.project([0,n.wrapLng[1]],i).x/e.y)],this._wrapY=n.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([n.wrapLat[0],0],i).y/e.x),Math.ceil(t.project([n.wrapLat[1],0],i).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var n=this._map,e=n._animatingZoom?Math.max(n._animateToZoom,n.getZoom()):n.getZoom(),i=n.getZoomScale(e,this._tileZoom),o=n.project(t,this._tileZoom).floor(),r=n.getSize().divideBy(2*i);return new H(o.subtract(r),o.add(r))},// Private method to load tiles in the grid's active zoom level according to map bounds
_update:function(t){var n=this._map;if(n){var e=this._clampZoom(n.getZoom());if(void 0===t&&(t=n.getCenter()),void 0!==this._tileZoom){// if out of minzoom/maxzoom
var i=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(i),r=o.getCenter(),s=[],a=this.options.keepBuffer,u=new H(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));// Sanity check: panic if the tile range contains Infinity somewhere.
if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw Error("Attempted to load an infinite number of tiles");for(var h in this._tiles){var l=this._tiles[h].coords;l.z===this._tileZoom&&u.contains(new D(l.x,l.y))||(this._tiles[h].current=!1)}// _update just loads more tiles. If the tile zoom level differs too much
// from the map's, let _setView reset levels and prune old tiles.
if(Math.abs(e-this._tileZoom)>1){this._setView(t,e);return}// create a queue of coordinates to load tiles from
for(var c=o.min.y;c<=o.max.y;c++)for(var f=o.min.x;f<=o.max.x;f++){var _=new D(f,c);if(_.z=this._tileZoom,this._isValidTile(_)){var p=this._tiles[this._tileCoordsToKey(_)];p?p.current=!0:s.push(_)}}if(// sort tile queue to load tiles in order of their distance to center
s.sort(function(t,n){return t.distanceTo(r)-n.distanceTo(r)}),0!==s.length){this._loading||(this._loading=!0,// @event loading: Event
// Fired when the grid layer starts loading tiles.
this.fire("loading"));// create DOM fragment to append tiles in one batch
var d=document.createDocumentFragment();for(f=0;f<s.length;f++)this._addTile(s[f],d);this._level.el.appendChild(d)}}}},_isValidTile:function(t){var n=this._map.options.crs;if(!n.infinite){// don't load tile if it's out of bounds and not wrapped
var e=this._globalTileRange;if(!n.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!n.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;// don't load tile if it doesn't intersect the bounds in options
var i=this._tileCoordsToBounds(t);return V(this.options.bounds).overlaps(i)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var n=this._map,e=this.getTileSize(),i=t.scaleBy(e),o=i.add(e);return[n.unproject(i,t.z),n.unproject(o,t.z)]},// converts tile coordinates to its geographical bounds
_tileCoordsToBounds:function(t){var n=this._tileCoordsToNwSe(t),e=new q(n[0],n[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},// converts tile coordinates to key for the tile cache
_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},// converts tile cache key to coordinates
_keyToTileCoords:function(t){var n=t.split(":"),e=new D(+n[0],+n[1]);return e.z=+n[2],e},_removeTile:function(t){var n=this._tiles[t];n&&(t1(n.el),delete this._tiles[t],// @event tileunload: TileEvent
// Fired when a tile is removed (e.g. when a tile goes off the screen).
this.fire("tileunload",{tile:n.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){t8(t,"leaflet-tile");var n=this.getTileSize();t.style.width=n.x+"px",t.style.height=n.y+"px",t.onselectstart=g,t.onmousemove=g,tB.ielt9&&this.options.opacity<1&&nt(t,this.options.opacity)},_addTile:function(t,n){var e=this._getTilePos(t),i=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),_(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&I(_(this._tileReady,this,t,null,o)),ni(o,e),// save tile in cache
this._tiles[i]={el:o,coords:t,current:!0},n.appendChild(o),// @event tileloadstart: TileEvent
// Fired when a tile is requested and starts loading.
this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,n,e){n&&// Fired when there is an error loading a tile.
this.fire("tileerror",{error:n,tile:e,coords:t});var i=this._tileCoordsToKey(t);(e=this._tiles[i])&&(e.loaded=+new Date,this._map._fadeAnimated?(nt(e.el,0),B(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this)):(e.active=!0,this._pruneTiles()),n||(t8(e.el,"leaflet-tile-loaded"),// @event tileload: TileEvent
// Fired when a tile loads.
this.fire("tileload",{tile:e.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,// @event load: Event
// Fired when the grid layer loaded all visible tiles.
this.fire("load"),tB.ielt9||!this._map._fadeAnimated?I(this._pruneTiles,this):// to trigger a pruning.
setTimeout(_(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var n=new D(this._wrapX?v(t.x,this._wrapX):t.x,this._wrapY?v(t.y,this._wrapY):t.y);return n.z=t.z,n},_pxBoundsToTileRange:function(t){var n=this.getTileSize();return new H(t.min.unscaleBy(n).floor(),t.max.unscaleBy(n).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),eP=eL.extend({// @section
// @aka TileLayer options
options:{// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = 18
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:18,// @option subdomains: String|String[] = 'abc'
// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
subdomains:"abc",// @option errorTileUrl: String = ''
// URL to the tile image to show in place of the tile that failed to load.
errorTileUrl:"",// @option zoomOffset: Number = 0
// The zoom number used in tile URLs will be offset with this value.
zoomOffset:0,// @option tms: Boolean = false
// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
tms:!1,// @option zoomReverse: Boolean = false
// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
zoomReverse:!1,// @option detectRetina: Boolean = false
// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
detectRetina:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option referrerPolicy: Boolean|String = false
// Whether the referrerPolicy attribute will be added to the tiles.
// If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
// This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
// (e.g. to validate an API token).
// Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
referrerPolicy:!1},initialize:function(t,n){this._url=t,(n=b(this,n)).detectRetina&&tB.retina&&n.maxZoom>0?(n.tileSize=Math.floor(n.tileSize/2),n.zoomReverse?(n.zoomOffset--,n.minZoom=Math.min(n.maxZoom,n.minZoom+1)):(n.zoomOffset++,n.maxZoom=Math.max(n.minZoom,n.maxZoom-1)),n.minZoom=Math.max(0,n.minZoom)):n.zoomReverse?n.minZoom=Math.min(n.maxZoom,n.minZoom):n.maxZoom=Math.max(n.minZoom,n.maxZoom),"string"==typeof n.subdomains&&(n.subdomains=n.subdomains.split("")),this.on("tileunload",this._onTileRemove)},// @method setUrl(url: String, noRedraw?: Boolean): this
// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
// If the URL does not change, the layer will not be redrawn unless
// the noRedraw parameter is set to false.
setUrl:function(t,n){return this._url===t&&void 0===n&&(n=!0),this._url=t,n||this.redraw(),this},// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
// callback is called when the tile has been loaded.
createTile:function(t,n){var e=document.createElement("img");return nf(e,"load",_(this._tileOnLoad,this,n,e)),nf(e,"error",_(this._tileOnError,this,n,e)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(e.referrerPolicy=this.options.referrerPolicy),// The alt attribute is set to the empty string,
// allowing screen readers to ignore the decorative image tiles.
// https://www.w3.org/WAI/tutorials/images/decorative/
// https://www.w3.org/TR/html-aria/#el-img-empty-alt
e.alt="",e.src=this.getTileUrl(t),e},// @section Extension methods
// @uninheritable
// Layers extending `TileLayer` might reimplement the following method.
// @method getTileUrl(coords: Object): String
// Called only internally, returns the URL for a tile given its coordinates.
// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
getTileUrl:function(t){var e={r:tB.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return z(this._url,n(e,this.options))},_tileOnLoad:function(t,n){tB.ielt9?setTimeout(_(t,this,null,n),0):t(null,n)},_tileOnError:function(t,n,e){var i=this.options.errorTileUrl;i&&n.getAttribute("src")!==i&&(n.src=i),t(e,n)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,n=this.options.maxZoom,e=this.options.zoomReverse,i=this.options.zoomOffset;return e&&(t=n-t),t+i},_getSubdomain:function(t){var n=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[n]},// stops loading all tiles in the background layer
_abortLoading:function(){var t,n;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&((n=this._tiles[t].el).onload=g,n.onerror=g,!n.complete)){n.src=S;var e=this._tiles[t].coords;t1(n),delete this._tiles[t],// @event tileabort: TileEvent
// Fired when a tile was loading but is now not wanted.
this.fire("tileabort",{tile:n,coords:e})}},_removeTile:function(t){var n=this._tiles[t];if(n)return(// Cancels any pending http requests associated with the tile
n.el.setAttribute("src",S),eL.prototype._removeTile.call(this,t))},_tileReady:function(t,n,e){if(this._map&&(!e||e.getAttribute("src")!==S))return eL.prototype._tileReady.call(this,t,n,e)}});// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.
function eT(t,n){return new eP(t,n)}/*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */var ez=eP.extend({// @section
// @aka TileLayer.WMS options
// If any custom options not documented here are used, they will be sent to the
// WMS server as extra parameters in each request URL. This can be useful for
// [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
defaultWmsParams:{service:"WMS",request:"GetMap",// @option layers: String = ''
// **(required)** Comma-separated list of WMS layers to show.
layers:"",// @option styles: String = ''
// Comma-separated list of WMS styles.
styles:"",// @option format: String = 'image/jpeg'
// WMS image format (use `'image/png'` for layers with transparency).
format:"image/jpeg",// @option transparent: Boolean = false
// If `true`, the WMS service will return images with transparency.
transparent:!1,// @option version: String = '1.1.1'
// Version of the WMS service to use
version:"1.1.1"},options:{// @option crs: CRS = null
// Coordinate Reference System to use for the WMS requests, defaults to
// map CRS. Don't change this if you're not sure what it means.
crs:null,// @option uppercase: Boolean = false
// If `true`, WMS request parameter keys will be uppercase.
uppercase:!1},initialize:function(t,e){this._url=t;var i=n({},this.defaultWmsParams);// all keys that are not TileLayer options go to WMS params
for(var o in e)o in this.options||(i[o]=e[o]);var r=(e=b(this,e)).detectRetina&&tB.retina?2:1,s=this.getTileSize();i.width=s.x*r,i.height=s.y*r,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var n=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[n]=this._crs.code,eP.prototype.onAdd.call(this,t)},getTileUrl:function(t){var n=this._tileCoordsToNwSe(t),e=this._crs,i=U(e.project(n[0]),e.project(n[1])),o=i.min,r=i.max,s=(this._wmsVersion>=1.3&&this._crs===n1?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(","),a=eP.prototype.getTileUrl.call(this,t);return a+P(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+s},// @method setParams(params: Object, noRedraw?: Boolean): this
// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
setParams:function(t,e){return n(this.wmsParams,t),e||this.redraw(),this}});eP.WMS=ez,eT.wms=// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function(t,n){return new ez(t,n)};/*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */var eM=n3.extend({// @section
// @aka Renderer options
options:{// @option padding: Number = 0.1
// How much to extend the clip area around the map view (relative to its size)
// e.g. 0.1 would be 10% of map view in each direction
padding:.1},initialize:function(t){b(this,t),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),// always keep transform-origin as 0 0
t8(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,n){var e=this._map.getZoomScale(n,this._zoom),i=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,n),r=i.multiplyBy(-e).add(o).subtract(this._map._getNewPixelOrigin(t,n));tB.any3d?ne(this._container,r,e):ni(this._container,r)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
// Subclasses are responsible of firing the 'update' event.
var t=this.options.padding,n=this._map.getSize(),e=this._map.containerPointToLayerPoint(n.multiplyBy(-t)).round();this._bounds=new H(e,e.add(n.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),eC=eM.extend({// @section
// @aka Canvas options
options:{// @option tolerance: Number = 0
// How much to extend the click tolerance around a path/object on the map.
tolerance:0},getEvents:function(){var t=eM.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
this._postponeUpdatePaths=!0},onAdd:function(){eM.prototype.onAdd.call(this),// Redraw vectors since canvas is cleared upon removal,
// in case of removing the renderer itself from the map.
this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");nf(t,"mousemove",this._onMouseMove,this),nf(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),nf(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){B(this._redrawRequest),delete this._ctx,t1(this._container),np(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){eM.prototype._update.call(this);var t=this._bounds,n=this._container,e=t.getSize(),i=tB.retina?2:1;ni(n,t.min),// set canvas size (also clearing it); use double size on retina
n.width=i*e.x,n.height=i*e.y,n.style.width=e.x+"px",n.style.height=e.y+"px",tB.retina&&this._ctx.scale(2,2),// translate so we use the same path coordinates after canvas element moves
this._ctx.translate(-t.min.x,-t.min.y),// Tell paths to redraw themselves
this.fire("update")}},_reset:function(){eM.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[d(t)]=t;var n=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=n),this._drawLast=n,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var n=t._order,e=n.next,i=n.prev;e?e.prev=i:this._drawLast=i,i?i.next=e:this._drawFirst=e,delete t._order,delete this._layers[d(t)],this._requestRedraw(t)},_updatePath:function(t){// Redraw the union of the layer's old pixel
// bounds and the new pixel bounds.
this._extendRedrawBounds(t),t._project(),t._update(),// The redraw will extend the redraw bounds
// with the new pixel bounds.
this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var n,e,i=t.options.dashArray.split(/[, ]+/),o=[];for(e=0;e<i.length;e++){// Ignore dash array containing invalid lengths
if(isNaN(n=Number(i[e])))return;o.push(n)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||I(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var n=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new H,this._redrawBounds.extend(t._pxBounds.min.subtract([n,n])),this._redrawBounds.extend(t._pxBounds.max.add([n,n]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var n=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,n.x,n.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,n=this._redrawBounds;if(this._ctx.save(),n){var e=n.getSize();this._ctx.beginPath(),this._ctx.rect(n.min.x,n.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var i=this._drawFirst;i;i=i.next)t=i.layer,(!n||t._pxBounds&&t._pxBounds.intersects(n))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,n){if(this._drawing){var e,i,o,r,s=t._parts,a=s.length,u=this._ctx;if(a){for(u.beginPath(),e=0;e<a;e++){for(i=0,o=s[e].length;i<o;i++)r=s[e][i],u[i?"lineTo":"moveTo"](r.x,r.y);n&&u.closePath()}this._fillStroke(u,t)}}// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var n=t._point,e=this._ctx,i=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||i)/i;1!==o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(n.x,n.y/o,i,0,2*Math.PI,!1),1!==o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,n){var e=n.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(n.options&&n.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},// Canvas obviously doesn't have mouse events for individual drawn objects,
// so we emulate that by calculating what's under the mouse on mousemove/click manually
_onClick:function(t){for(var n,e,i=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(n=o.layer).options.interactive&&n._containsPoint(i)&&(!("click"===t.type||"preclick"===t.type)||!this._map._draggableMoved(n))&&(e=n);this._fireEvent(!!e&&[e],t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving())&&!this._map._animatingZoom){var n=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,n)}},_handleMouseOut:function(t){var n=this._hoveredLayer;n&&(// if we're leaving the layer, fire mouseout
t5(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,n){if(!this._mouseHoverThrottled){for(var e,i,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(i=e);i!==this._hoveredLayer&&(this._handleMouseOut(t),i&&(t8(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseover"),this._hoveredLayer=i)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(_(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,n,e){this._map._fireDOMEvent(n,e||n.type,t)},_bringToFront:function(t){var n=t._order;if(n){var e=n.next,i=n.prev;if(!e)return;e.prev=i,i?i.next=e:e&&// single entry
(this._drawFirst=e),n.prev=this._drawLast,this._drawLast.next=n,n.next=null,this._drawLast=n,this._requestRedraw(t)}},_bringToBack:function(t){var n=t._order;if(n){var e=n.next,i=n.prev;if(!i)return;i.next=e,e?e.prev=i:i&&// single entry
(this._drawLast=i),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(t)}}});// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function eS(t){return tB.canvas?new eC(t):null}/*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */var ek=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){// Do not return fn from catch block so `e` can be garbage collected
// See https://github.com/Leaflet/Leaflet/pull/7279
}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),eE=tB.vml?ek:te,eA=eM.extend({_initContainer:function(){this._container=eE("svg"),// makes it possible to click through svg root; we'll reset it back in individual paths
this._container.setAttribute("pointer-events","none"),this._rootGroup=eE("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){t1(this._container),np(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!this._map._animatingZoom||!this._bounds){eM.prototype._update.call(this);var t=this._bounds,n=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(n)||(this._svgSize=n,e.setAttribute("width",n.x),e.setAttribute("height",n.y)),// movement: update container viewBox so that we don't have to change coordinates of individual layers
ni(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,n.x,n.y].join(" ")),this.fire("update")}},// methods below are called by vector layers implementations
_initPath:function(t){var n=t._path=eE("path");t.options.className&&t8(n,t.options.className),t.options.interactive&&t8(n,"leaflet-interactive"),this._updateStyle(t),this._layers[d(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){t1(t._path),t.removeInteractiveTarget(t._path),delete this._layers[d(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var n=t._path,e=t.options;n&&(e.stroke?(n.setAttribute("stroke",e.color),n.setAttribute("stroke-opacity",e.opacity),n.setAttribute("stroke-width",e.weight),n.setAttribute("stroke-linecap",e.lineCap),n.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?n.setAttribute("stroke-dasharray",e.dashArray):n.removeAttribute("stroke-dasharray"),e.dashOffset?n.setAttribute("stroke-dashoffset",e.dashOffset):n.removeAttribute("stroke-dashoffset")):n.setAttribute("stroke","none"),e.fill?(n.setAttribute("fill",e.fillColor||e.color),n.setAttribute("fill-opacity",e.fillOpacity),n.setAttribute("fill-rule",e.fillRule||"evenodd")):n.setAttribute("fill","none"))},_updatePoly:function(t,n){this._setPath(t,ti(t._parts,n))},_updateCircle:function(t){var n=t._point,e=Math.max(Math.round(t._radius),1),i=Math.max(Math.round(t._radiusY),1)||e,o="a"+e+","+i+" 0 1,0 ",r=t._empty()?"M0 0":"M"+(n.x-e)+","+n.y+o+2*e+",0 "+o+-(2*e)+",0 ";this._setPath(t,r)},_setPath:function(t,n){t._path.setAttribute("d",n)},// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
_bringToFront:function(t){t3(t._path)},_bringToBack:function(t){t9(t._path)}});// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function eO(t){return tB.svg||tB.vml?new eA(t):null}tB.vml&&eA.include({_initContainer:function(){this._container=t0("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(eM.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var n=t._container=ek("shape");t8(n,"leaflet-vml-shape "+(this.options.className||"")),n.coordsize="1 1",t._path=ek("path"),n.appendChild(t._path),this._updateStyle(t),this._layers[d(t)]=t},_addPath:function(t){var n=t._container;this._container.appendChild(n),t.options.interactive&&t.addInteractiveTarget(n)},_removePath:function(t){var n=t._container;t1(n),t.removeInteractiveTarget(n),delete this._layers[d(t)]},_updateStyle:function(t){var n=t._stroke,e=t._fill,i=t.options,o=t._container;o.stroked=!!i.stroke,o.filled=!!i.fill,i.stroke?(n||(n=t._stroke=ek("stroke")),o.appendChild(n),n.weight=i.weight+"px",n.color=i.color,n.opacity=i.opacity,i.dashArray?n.dashStyle=M(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):n.dashStyle="",n.endcap=i.lineCap.replace("butt","flat"),n.joinstyle=i.lineJoin):n&&(o.removeChild(n),t._stroke=null),i.fill?(e||(e=t._fill=ek("fill")),o.appendChild(e),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var n=t._point.round(),e=Math.round(t._radius),i=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+n.x+","+n.y+" "+e+","+i+" 0,23592600")},_setPath:function(t,n){t._path.v=n},_bringToFront:function(t){t3(t._container)},_bringToBack:function(t){t9(t._container)}}),nk.include({// @namespace Map; @method getRenderer(layer: Path): Renderer
// Returns the instance of `Renderer` that should be used to render the given
// `Path`. It will ensure that the `renderer` options of the map and paths
// are respected, and that the renderers do exist on the map.
getRenderer:function(t){// @namespace Path; @option renderer: Renderer
// Use this specific instance of `Renderer` for this path. Takes
// precedence over the map's [default renderer](#map-renderer).
var n=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return n||(n=this._renderer=this._createRenderer()),this.hasLayer(n)||this.addLayer(n),n},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var n=this._paneRenderers[t];return void 0===n&&(n=this._createRenderer({pane:t}),this._paneRenderers[t]=n),n},_createRenderer:function(t){// @namespace Map; @option preferCanvas: Boolean = false
// Whether `Path`s should be rendered on a `Canvas` renderer.
// By default, all `Path`s are rendered in a `SVG` renderer.
return this.options.preferCanvas&&eS(t)||eO(t)}});/*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   *//*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */var eZ=eo.extend({initialize:function(t,n){eo.prototype.initialize.call(this,this._boundsToLatLngs(t),n)},// @method setBounds(latLngBounds: LatLngBounds): this
// Redraws the rectangle with the passed bounds.
setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=V(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});eA.create=eE,eA.pointsToPath=ti,er.geometryToLayer=es,er.coordsToLatLng=eu,er.coordsToLatLngs=eh,er.latLngToCoords=el,er.latLngsToCoords=ec,er.getFeature=ef,er.asFeature=e_,/*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */// @namespace Map
// @section Interaction Options
nk.mergeOptions({// @option boxZoom: Boolean = true
// Whether the map can be zoomed to a rectangular area specified by
// dragging the mouse while pressing the shift key.
boxZoom:!0});var eI=nR.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){nf(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){np(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){t1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;// Clear the deferred resetState if it hasn't executed yet, otherwise it
// will interrupt the interaction and orphan a box element in the container.
this._clearDeferredResetState(),this._resetState(),e(),ns(),this._startPoint=this._map.mouseEventToContainerPoint(t),nf(document,{contextmenu:nL,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=t0("div","leaflet-zoom-box",this._container),t8(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var n=new H(this._point,this._startPoint),e=n.getSize();ni(this._box,n.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(t1(this._box),t5(this._container,"leaflet-crosshair")),i(),na(),np(document,{contextmenu:nL,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){// Postpone to next JS tick so internal click event handling
// still see it as "moved".
this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(_(this._resetState,this),0);var n=new q(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(n).fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
nk.addInitHook("addHandler","boxZoom",eI),/*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */// @namespace Map
// @section Interaction Options
nk.mergeOptions({// @option doubleClickZoom: Boolean|String = true
// Whether the map can be zoomed in by double clicking on it and
// zoomed out by double clicking while holding shift. If passed
// `'center'`, double-click zoom will zoom to the center of the
//  view regardless of where the mouse was.
doubleClickZoom:!0});var eB=nR.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var n=this._map,e=n.getZoom(),i=n.options.zoomDelta,o=t.originalEvent.shiftKey?e-i:e+i;"center"===n.options.doubleClickZoom?n.setZoom(o):n.setZoomAround(t.containerPoint,o)}});// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
nk.addInitHook("addHandler","doubleClickZoom",eB),/*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */// @namespace Map
// @section Interaction Options
nk.mergeOptions({// @option dragging: Boolean = true
// Whether the map is draggable with mouse/touch or not.
dragging:!0,// @section Panning Inertia Options
// @option inertia: Boolean = *
// If enabled, panning of the map will have an inertia effect where
// the map builds momentum while dragging and continues moving in
// the same direction for some time. Feels especially nice on touch
// devices. Enabled by default.
inertia:!0,// @option inertiaDeceleration: Number = 3000
// The rate with which the inertial movement slows down, in pixels/second².
inertiaDeceleration:3400,// @option inertiaMaxSpeed: Number = Infinity
// Max speed of the inertial movement, in pixels/second.
inertiaMaxSpeed:1/0,// @option easeLinearity: Number = 0.2
easeLinearity:.2,// TODO refactor, move to CRS
// @option worldCopyJump: Boolean = false
// With this option enabled, the map tracks when you pan to another "copy"
// of the world and seamlessly jumps to the original one so that all overlays
// like markers and vector layers are still visible.
worldCopyJump:!1,// @option maxBoundsViscosity: Number = 0.0
// If `maxBounds` is set, this option will control how solid the bounds
// are when dragging the map around. The default value of `0.0` allows the
// user to drag outside the bounds at normal speed, higher values will
// slow down map dragging outside bounds, and `1.0` makes the bounds fully
// solid, preventing the user from dragging outside the bounds.
maxBoundsViscosity:0});var eR=nR.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new nN(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}t8(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){t5(this._map._container,"leaflet-grab"),t5(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var n=V(this._map.options.maxBounds);this._offsetLimit=U(this._map.latLngToContainerPoint(n.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(n.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var n=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(n),this._prunePositions(n)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),n=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=n.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,n){return t-(t-n)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),n=this._offsetLimit;t.x<n.min.x&&(t.x=this._viscousLimit(t.x,n.min.x)),t.y<n.min.y&&(t.y=this._viscousLimit(t.y,n.min.y)),t.x>n.max.x&&(t.x=this._viscousLimit(t.x,n.max.x)),t.y>n.max.y&&(t.y=this._viscousLimit(t.y,n.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){// TODO refactor to be able to adjust map pane position after zoom
var t=this._worldWidth,n=Math.round(t/2),e=this._initialWorldOffset,i=this._draggable._newPos.x,o=(i-n+e)%t+n-e,r=(i+n+e)%t-n-e;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=Math.abs(o+e)<Math.abs(r+e)?o:r},_onDragEnd:function(t){var n=this._map,e=n.options,i=!e.inertia||t.noInertia||this._times.length<2;if(n.fire("dragend",t),i)n.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,s=e.easeLinearity,a=o.multiplyBy(s/r),u=a.distanceTo([0,0]),h=Math.min(e.inertiaMaxSpeed,u),l=a.multiplyBy(h/u),c=h/(e.inertiaDeceleration*s),f=l.multiplyBy(-c/2).round();f.x||f.y?(f=n._limitOffset(f,n.options.maxBounds),I(function(){n.panBy(f,{duration:c,easeLinearity:s,noMoveStart:!0,animate:!0})})):n.fire("moveend")}}});// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
nk.addInitHook("addHandler","dragging",eR),/*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */// @namespace Map
// @section Keyboard Navigation Options
nk.mergeOptions({// @option keyboard: Boolean = true
// Makes the map focusable and allows users to navigate the map with keyboard
// arrows and `+`/`-` keys.
keyboard:!0,// @option keyboardPanDelta: Number = 80
// Amount of pixels to pan when pressing an arrow key.
keyboardPanDelta:80});var ej=nR.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),nf(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),np(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,n=document.documentElement,e=t.scrollTop||n.scrollTop,i=t.scrollLeft||n.scrollLeft;this._map._container.focus(),window.scrollTo(i,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var n,e,i=this._panKeys={},o=this.keyCodes;for(n=0,e=o.left.length;n<e;n++)i[o.left[n]]=[-1*t,0];for(n=0,e=o.right.length;n<e;n++)i[o.right[n]]=[t,0];for(n=0,e=o.down.length;n<e;n++)i[o.down[n]]=[0,t];for(n=0,e=o.up.length;n<e;n++)i[o.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var n,e,i=this._zoomKeys={},o=this.keyCodes;for(n=0,e=o.zoomIn.length;n<e;n++)i[o.zoomIn[n]]=t;for(n=0,e=o.zoomOut.length;n<e;n++)i[o.zoomOut[n]]=-t},_addHooks:function(){nf(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){np(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var n,e=t.keyCode,i=this._map;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress){if(n=this._panKeys[e],t.shiftKey&&(n=F(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(F(n),i.options.maxBounds)),i.options.worldCopyJump){var o=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(o)}else i.panBy(n)}}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!i._popup||!i._popup.options.closeOnEscapeKey)return;i.closePopup()}nL(t)}}});// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
nk.addInitHook("addHandler","keyboard",ej),/*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */// @namespace Map
// @section Interaction Options
nk.mergeOptions({// @section Mouse wheel options
// @option scrollWheelZoom: Boolean|String = true
// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
// it will zoom to the center of the view regardless of where the mouse was.
scrollWheelZoom:!0,// @option wheelDebounceTime: Number = 40
// Limits the rate at which a wheel can fire (in milliseconds). By default
// user can't zoom via wheel more often than once per 40 ms.
wheelDebounceTime:40,// @option wheelPxPerZoomLevel: Number = 60
// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
// mean a change of one full zoom level. Smaller values will make wheel-zooming
// faster (and vice versa).
wheelPxPerZoomLevel:60});var eN=nR.extend({addHooks:function(){nf(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){np(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var n=nM(t),e=this._map.options.wheelDebounceTime;this._delta+=n,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(e-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(_(this._performZoom,this),i),nL(t)},_performZoom:function(){var t=this._map,n=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();// map the delta with a sigmoid function to -4..4 range leaning on -1..1
var i=4*Math.log(2/(1+Math.exp(-Math.abs(this._delta/(4*this._map.options.wheelPxPerZoomLevel)))))/Math.LN2,o=e?Math.ceil(i/e)*e:i,r=t._limitZoom(n+(this._delta>0?o:-o))-n;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(n+r):t.setZoomAround(this._lastMousePos,n+r))}});// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
nk.addInitHook("addHandler","scrollWheelZoom",eN),// @namespace Map
// @section Interaction Options
nk.mergeOptions({// @section Touch interaction options
// @option tapHold: Boolean
// Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
tapHold:tB.touchNative&&tB.safari&&tB.mobile,// @option tapTolerance: Number = 15
// The max number of pixels a user can shift his finger during touch
// for it to be considered a valid tap.
tapTolerance:15});var eD=nR.extend({addHooks:function(){nf(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){np(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),1===t.touches.length){var n=t.touches[0];this._startPos=this._newPos=new D(n.clientX,n.clientY),this._holdTimeout=setTimeout(_(function(){this._cancel(),this._isTapValid()&&(// prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
nf(document,"touchend",nb),nf(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",n))},this),600),nf(document,"touchend touchcancel contextmenu",this._cancel,this),nf(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){np(document,"touchend",nb),np(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),np(document,"touchend touchcancel contextmenu",this._cancel,this),np(document,"touchmove",this._onMove,this)},_onMove:function(t){var n=t.touches[0];this._newPos=new D(n.clientX,n.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,n){var e=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,// detail: 1,
screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY});e._simulated=!0,n.target.dispatchEvent(e)}});// @section Handlers
// @property tapHold: Handler
// Long tap handler to simulate `contextmenu` event (useful in mobile Safari).
nk.addInitHook("addHandler","tapHold",eD),/*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */// @namespace Map
// @section Interaction Options
nk.mergeOptions({// @section Touch interaction options
// @option touchZoom: Boolean|String = *
// Whether the map can be zoomed by touch-dragging with two fingers. If
// passed `'center'`, it will zoom to the center of the view regardless of
// where the touch events (fingers) were. Enabled for touch-capable web
// browsers.
touchZoom:tB.touch,// @option bounceAtZoomLimits: Boolean = true
// Set it to false if you don't want the map to zoom beyond min/max zoom
// and then bounce back when pinch-zooming.
bounceAtZoomLimits:!0});var eW=nR.extend({addHooks:function(){t8(this._map._container,"leaflet-touch-zoom"),nf(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){t5(this._map._container,"leaflet-touch-zoom"),np(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var n=this._map;if(t.touches&&2===t.touches.length&&!n._animatingZoom&&!this._zooming){var e=n.mouseEventToContainerPoint(t.touches[0]),i=n.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),"center"!==n.options.touchZoom&&(this._pinchStartLatLng=n.containerPointToLatLng(e.add(i)._divideBy(2))),this._startDist=e.distanceTo(i),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),nf(document,"touchmove",this._onTouchMove,this),nf(document,"touchend touchcancel",this._onTouchEnd,this),nb(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var n=this._map,e=n.mouseEventToContainerPoint(t.touches[0]),i=n.mouseEventToContainerPoint(t.touches[1]),o=e.distanceTo(i)/this._startDist;if(this._zoom=n.getScaleZoom(o,this._startZoom),!n.options.bounceAtZoomLimits&&(this._zoom<n.getMinZoom()&&o<1||this._zoom>n.getMaxZoom()&&o>1)&&(this._zoom=n._limitZoom(this._zoom)),"center"===n.options.touchZoom){if(this._center=this._startLatLng,1===o)return}else{// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
var r=e._add(i)._divideBy(2)._subtract(this._centerPoint);if(1===o&&0===r.x&&0===r.y)return;this._center=n.unproject(n.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(n._moveStart(!0,!1),this._moved=!0),B(this._animRequest);var s=_(n._move,n,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=I(s,this,!0),nb(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,B(this._animRequest),np(document,"touchmove",this._onTouchMove,this),np(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
nk.addInitHook("addHandler","touchZoom",eW),nk.BoxZoom=eI,nk.DoubleClickZoom=eB,nk.Drag=eR,nk.Keyboard=ej,nk.ScrollWheelZoom=eN,nk.TapHold=eD,nk.TouchZoom=eW,t.Bounds=H,t.Browser=tB,t.CRS=Y,t.Canvas=eC,t.Circle=ee,t.CircleMarker=en,t.Class=R,t.Control=nE,t.DivIcon=eb,t.DivOverlay=ey,t.DomEvent={__proto__:null,on:nf,off:np,stopPropagation:ny,disableScrollPropagation:nx,disableClickPropagation:nw,preventDefault:nb,stop:nL,getPropagationPath:nP,getMousePosition:nT,getWheelDelta:nM,isExternalTarget:nC,addListener:nf,removeListener:np},t.DomUtil={__proto__:null,TRANSFORM:tY,TRANSITION:t$,TRANSITION_END:tJ,get:tX,getStyle:tQ,create:t0,remove:t1,empty:t2,toFront:t3,toBack:t9,hasClass:t4,addClass:t8,removeClass:t5,setClass:t7,getClass:t6,setOpacity:nt,testProp:nn,setTransform:ne,setPosition:ni,getPosition:no,get disableTextSelection(){return e},get enableTextSelection(){return i},disableImageDrag:ns,enableImageDrag:na,preventOutline:nu,restoreOutline:nh,getSizedParentNode:nl,getScale:nc},t.Draggable=nN,t.Evented=N,t.FeatureGroup=n4,t.GeoJSON=er,t.GridLayer=eL,t.Handler=nR,t.Icon=n8,t.ImageOverlay=em,t.LatLng=G,t.LatLngBounds=q,t.Layer=n3,t.LayerGroup=n9,t.LineUtil={__proto__:null,simplify:nH,pointToSegmentDistance:nU,closestPointOnSegment:// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function(t,n,e){return nK(t,n,e)},clipSegment:nq,_getEdgeIntersection:nV,_getBitCode:nG,_sqClosestPointOnSegment:nK,isFlat:nY,_flat:n$,polylineCenter:nJ},t.Map=nk,t.Marker=n6,t.Mixin={Events:j},t.Path=et,t.Point=D,t.PolyUtil={__proto__:null,clipPolygon:nD,polygonCenter:nW,centroid:nF},t.Polygon=eo,t.Polyline=ei,t.Popup=ex,t.PosAnimation=nS,t.Projection={__proto__:null,LonLat:nX,Mercator:nQ,SphericalMercator:J},t.Rectangle=eZ,t.Renderer=eM,t.SVG=eA,t.SVGOverlay=eg,t.TileLayer=eP,t.Tooltip=ew,t.Transformation=X,t.Util={__proto__:null,extend:n,create:f,bind:_,get lastId(){return p},stamp:d,throttle:m,wrapNum:v,falseFn:g,formatNum:y,trim:x,splitWords:w,setOptions:b,getParamString:P,template:z,isArray:M,indexOf:C,emptyImageUrl:S,requestFn:O,cancelFn:Z,requestAnimFrame:I,cancelAnimFrame:B},t.VideoOverlay=ev,t.bind=_,t.bounds=U,t.canvas=eS,t.circle=// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function(t,n,e){return new ee(t,n,e)},t.circleMarker=// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function(t,n){return new en(t,n)},t.control=nA,t.divIcon=// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function(t){return new eb(t)},t.extend=n,t.featureGroup=function(t,n){return new n4(t,n)},t.geoJSON=ed,t.geoJson=ed,t.gridLayer=// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function(t){return new eL(t)},t.icon=// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function(t){return new n8(t)},t.imageOverlay=function(t,n,e){return new em(t,n,e)},t.latLng=K,t.latLngBounds=V,t.layerGroup=function(t,n){return new n9(t,n)},t.map=// @section
// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function(t,n){return new nk(t,n)},t.marker=// factory L.marker(latlng: LatLng, options? : Marker options)
// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function(t,n){return new n6(t,n)},t.point=F,t.polygon=// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function(t,n){return new eo(t,n)},t.polyline=// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function(t,n){return new ei(t,n)},t.popup=function(t,n){return new ex(t,n)},t.rectangle=// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function(t,n){return new eZ(t,n)},t.setOptions=b,t.stamp=d,t.svg=eO,t.svgOverlay=// @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
// Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
// A viewBox attribute is required on the SVG element to zoom in and out properly.
function(t,n,e){return new eg(t,n,e)},t.tileLayer=eT,t.tooltip=function(t,n){return new ew(t,n)},t.transformation=Q,t.version="1.9.4",t.videoOverlay=// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.
function(t,n,e){return new ev(t,n,e)};var eF=window.L;t.noConflict=function(){return window.L=eF,this},// Always export us to window global (see #2364)
window.L=t})({}),r.push({product:5,quantity:t="pizza"}),console.log(`${t} 5 added to cart`),console.log(1234),console.log(2);var s=o("g8yc8");////////////////////////////////////////////////////////////////////////////////////
//
//
const a={cat:[{product:"bread",quantyti:5},{product:"bread",quantyti:5}],user:{loggeIn:!0}};console.log(a);//
// const stateClone = Object.assign(state);
const u=s.cloneDeep(a);//
// stateClone.user.loggeIn = false;
// console.log(stateClone);
//
u.user.loggeIn=!1,console.log(u),/////////////////////////////////////////////////////
console.log(r);//# sourceMappingURL=index.e66e59fa.js.map

//# sourceMappingURL=index.e66e59fa.js.map
