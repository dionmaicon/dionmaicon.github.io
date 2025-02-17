// @vue/shared
"use strict";
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
Object.defineProperty(exports, "__esModule", { value: true });
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : false ? void 0 : typeof global !== "undefined" ? global : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function genCacheKey(source, options) {
  return source + JSON.stringify(
    options,
    (_, val) => typeof val === "function" ? val.toString() : val
  );
}
const PatchFlags = {
  "TEXT": 1,
  "1": "TEXT",
  "CLASS": 2,
  "2": "CLASS",
  "STYLE": 4,
  "4": "STYLE",
  "PROPS": 8,
  "8": "PROPS",
  "FULL_PROPS": 16,
  "16": "FULL_PROPS",
  "NEED_HYDRATION": 32,
  "32": "NEED_HYDRATION",
  "STABLE_FRAGMENT": 64,
  "64": "STABLE_FRAGMENT",
  "KEYED_FRAGMENT": 128,
  "128": "KEYED_FRAGMENT",
  "UNKEYED_FRAGMENT": 256,
  "256": "UNKEYED_FRAGMENT",
  "NEED_PATCH": 512,
  "512": "NEED_PATCH",
  "DYNAMIC_SLOTS": 1024,
  "1024": "DYNAMIC_SLOTS",
  "DEV_ROOT_FRAGMENT": 2048,
  "2048": "DEV_ROOT_FRAGMENT",
  "CACHED": -1,
  "-1": "CACHED",
  "BAIL": -2,
  "-2": "BAIL"
};
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `NEED_HYDRATION`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const ShapeFlags = {
  "ELEMENT": 1,
  "1": "ELEMENT",
  "FUNCTIONAL_COMPONENT": 2,
  "2": "FUNCTIONAL_COMPONENT",
  "STATEFUL_COMPONENT": 4,
  "4": "STATEFUL_COMPONENT",
  "TEXT_CHILDREN": 8,
  "8": "TEXT_CHILDREN",
  "ARRAY_CHILDREN": 16,
  "16": "ARRAY_CHILDREN",
  "SLOTS_CHILDREN": 32,
  "32": "SLOTS_CHILDREN",
  "TELEPORT": 64,
  "64": "TELEPORT",
  "SUSPENSE": 128,
  "128": "SUSPENSE",
  "COMPONENT_SHOULD_KEEP_ALIVE": 256,
  "256": "COMPONENT_SHOULD_KEEP_ALIVE",
  "COMPONENT_KEPT_ALIVE": 512,
  "512": "COMPONENT_KEPT_ALIVE",
  "COMPONENT": 6,
  "6": "COMPONENT"
};
const SlotFlags = {
  "STABLE": 1,
  "1": "STABLE",
  "DYNAMIC": 2,
  "2": "DYNAMIC",
  "FORWARDED": 3,
  "3": "FORWARDED"
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  start = Math.max(0, Math.min(start, source.length));
  end = Math.max(0, Math.min(end, source.length));
  if (start > end) return "";
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(
          `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
        );
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(
            1,
            end > count ? lineLength - pad : end - start
          );
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          };
          count += lineLength + newLineSeqLength;
        }
      };
      break;
    }
  };
  return res.join("\n");
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    };
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  if (!styles) return "";
  if (isString(styles)) return styles;
  let ret = "";
  for (const key in styles) {
    const value = styles[key];
    if (isString(value) || typeof value === "number") {
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      ret += `${normalizedKey}:${value};`;
    }
  };
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  };
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  };
  if (style) {
    props.style = normalizeStyle(style);
  };
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  };
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  };
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(
  `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(
  `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
);
const isKnownMathMLAttr = /* @__PURE__ */ makeMap(
  `accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`
);
function isRenderableAttrValue(value) {
  if (value == null) {
    return false;
  };
  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  };
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    };
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    };
    lastIndex = index + 1;
    html += escaped;
  };
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function getEscapedCssVarName(key, doubleEscape) {
  return key.replace(
    cssVarNameEscapeSymbolsRE,
    (s) => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`
  );
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  };
  return equal;
}
function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  };
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  };
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  };
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    };
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    };
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  };
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const isRef = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  };
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};
exports.EMPTY_ARR = EMPTY_ARR;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.NO = NO;
exports.NOOP = NOOP;
exports.PatchFlagNames = PatchFlagNames;
exports.PatchFlags = PatchFlags;
exports.ShapeFlags = ShapeFlags;
exports.SlotFlags = SlotFlags;
exports.camelize = camelize;
exports.capitalize = capitalize;
exports.cssVarNameEscapeSymbolsRE = cssVarNameEscapeSymbolsRE;
exports.def = def;
exports.escapeHtml = escapeHtml;
exports.escapeHtmlComment = escapeHtmlComment;
exports.extend = extend;
exports.genCacheKey = genCacheKey;
exports.genPropsAccessExp = genPropsAccessExp;
exports.generateCodeFrame = generateCodeFrame;
exports.getEscapedCssVarName = getEscapedCssVarName;
exports.getGlobalThis = getGlobalThis;
exports.hasChanged = hasChanged;
exports.hasOwn = hasOwn;
exports.hyphenate = hyphenate;
exports.includeBooleanAttr = includeBooleanAttr;
exports.invokeArrayFns = invokeArrayFns;
exports.isArray = isArray;
exports.isBooleanAttr = isBooleanAttr;
exports.isBuiltInDirective = isBuiltInDirective;
exports.isDate = isDate;
exports.isFunction = isFunction;
exports.isGloballyAllowed = isGloballyAllowed;
exports.isGloballyWhitelisted = isGloballyWhitelisted;
exports.isHTMLTag = isHTMLTag;
exports.isIntegerKey = isIntegerKey;
exports.isKnownHtmlAttr = isKnownHtmlAttr;
exports.isKnownMathMLAttr = isKnownMathMLAttr;
exports.isKnownSvgAttr = isKnownSvgAttr;
exports.isMap = isMap;
exports.isMathMLTag = isMathMLTag;
exports.isModelListener = isModelListener;
exports.isObject = isObject;
exports.isOn = isOn;
exports.isPlainObject = isPlainObject;
exports.isPromise = isPromise;
exports.isRegExp = isRegExp;
exports.isRenderableAttrValue = isRenderableAttrValue;
exports.isReservedProp = isReservedProp;
exports.isSSRSafeAttrName = isSSRSafeAttrName;
exports.isSVGTag = isSVGTag;
exports.isSet = isSet;
exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.isVoidTag = isVoidTag;
exports.looseEqual = looseEqual;
exports.looseIndexOf = looseIndexOf;
exports.looseToNumber = looseToNumber;
exports.makeMap = makeMap;
exports.normalizeClass = normalizeClass;
exports.normalizeProps = normalizeProps;
exports.normalizeStyle = normalizeStyle;
exports.objectToString = objectToString;
exports.parseStringStyle = parseStringStyle;
exports.propsToAttrMap = propsToAttrMap;
exports.remove = remove;
exports.slotFlagsText = slotFlagsText;
exports.stringifyStyle = stringifyStyle;
exports.toDisplayString = toDisplayString;
exports.toHandlerKey = toHandlerKey;
exports.toNumber = toNumber;
exports.toRawType = toRawType;
exports.toTypeString = toTypeString;

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXN0IjpbMF0sInNvdXJjZXMiOlsic2hhcmVkLmNqcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQHZ1ZS9zaGFyZWQgdjMuNS4xM1xuKiAoYykgMjAxOC1wcmVzZW50IFl1eGkgKEV2YW4pIFlvdSBhbmQgVnVlIGNvbnRyaWJ1dG9yc1xuKiBAbGljZW5zZSBNSVRcbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vKiEgI19fTk9fU0lERV9FRkZFQ1RTX18gKi9cbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5mdW5jdGlvbiBtYWtlTWFwKHN0cikge1xuICBjb25zdCBtYXAgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZm9yIChjb25zdCBrZXkgb2Ygc3RyLnNwbGl0KFwiLFwiKSkgbWFwW2tleV0gPSAxO1xuICByZXR1cm4gKHZhbCkgPT4gdmFsIGluIG1hcDtcbn1cblxuY29uc3QgRU1QVFlfT0JKID0gT2JqZWN0LmZyZWV6ZSh7fSkgO1xuY29uc3QgRU1QVFlfQVJSID0gT2JqZWN0LmZyZWV6ZShbXSkgO1xuY29uc3QgTk9PUCA9ICgpID0+IHtcbn07XG5jb25zdCBOTyA9ICgpID0+IGZhbHNlO1xuY29uc3QgaXNPbiA9IChrZXkpID0+IGtleS5jaGFyQ29kZUF0KDApID09PSAxMTEgJiYga2V5LmNoYXJDb2RlQXQoMSkgPT09IDExMCAmJiAvLyB1cHBlcmNhc2UgbGV0dGVyXG4oa2V5LmNoYXJDb2RlQXQoMikgPiAxMjIgfHwga2V5LmNoYXJDb2RlQXQoMikgPCA5Nyk7XG5jb25zdCBpc01vZGVsTGlzdGVuZXIgPSAoa2V5KSA9PiBrZXkuc3RhcnRzV2l0aChcIm9uVXBkYXRlOlwiKTtcbmNvbnN0IGV4dGVuZCA9IE9iamVjdC5hc3NpZ247XG5jb25zdCByZW1vdmUgPSAoYXJyLCBlbCkgPT4ge1xuICBjb25zdCBpID0gYXJyLmluZGV4T2YoZWwpO1xuICBpZiAoaSA+IC0xKSB7XG4gICAgYXJyLnNwbGljZShpLCAxKTtcbiAgfVxufTtcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmNvbnN0IGhhc093biA9ICh2YWwsIGtleSkgPT4gaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSk7XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzTWFwID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBNYXBdXCI7XG5jb25zdCBpc1NldCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgU2V0XVwiO1xuY29uc3QgaXNEYXRlID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBEYXRlXVwiO1xuY29uc3QgaXNSZWdFeHAgPSAodmFsKSA9PiB0b1R5cGVTdHJpbmcodmFsKSA9PT0gXCJbb2JqZWN0IFJlZ0V4cF1cIjtcbmNvbnN0IGlzRnVuY3Rpb24gPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCI7XG5jb25zdCBpc1N0cmluZyA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7XG5jb25zdCBpc1N5bWJvbCA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3ltYm9sXCI7XG5jb25zdCBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiO1xuY29uc3QgaXNQcm9taXNlID0gKHZhbCkgPT4ge1xuICByZXR1cm4gKGlzT2JqZWN0KHZhbCkgfHwgaXNGdW5jdGlvbih2YWwpKSAmJiBpc0Z1bmN0aW9uKHZhbC50aGVuKSAmJiBpc0Z1bmN0aW9uKHZhbC5jYXRjaCk7XG59O1xuY29uc3Qgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3QgdG9UeXBlU3RyaW5nID0gKHZhbHVlKSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbmNvbnN0IHRvUmF3VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdG9UeXBlU3RyaW5nKHZhbHVlKS5zbGljZSg4LCAtMSk7XG59O1xuY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xuY29uc3QgaXNJbnRlZ2VyS2V5ID0gKGtleSkgPT4gaXNTdHJpbmcoa2V5KSAmJiBrZXkgIT09IFwiTmFOXCIgJiYga2V5WzBdICE9PSBcIi1cIiAmJiBcIlwiICsgcGFyc2VJbnQoa2V5LCAxMCkgPT09IGtleTtcbmNvbnN0IGlzUmVzZXJ2ZWRQcm9wID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIC8vIHRoZSBsZWFkaW5nIGNvbW1hIGlzIGludGVudGlvbmFsIHNvIGVtcHR5IHN0cmluZyBcIlwiIGlzIGFsc28gaW5jbHVkZWRcbiAgXCIsa2V5LHJlZixyZWZfZm9yLHJlZl9rZXksb25Wbm9kZUJlZm9yZU1vdW50LG9uVm5vZGVNb3VudGVkLG9uVm5vZGVCZWZvcmVVcGRhdGUsb25Wbm9kZVVwZGF0ZWQsb25Wbm9kZUJlZm9yZVVubW91bnQsb25Wbm9kZVVubW91bnRlZFwiXG4pO1xuY29uc3QgaXNCdWlsdEluRGlyZWN0aXZlID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIFwiYmluZCxjbG9hayxlbHNlLWlmLGVsc2UsZm9yLGh0bWwsaWYsbW9kZWwsb24sb25jZSxwcmUsc2hvdyxzbG90LHRleHQsbWVtb1wiXG4pO1xuY29uc3QgY2FjaGVTdHJpbmdGdW5jdGlvbiA9IChmbikgPT4ge1xuICBjb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gKHN0cikgPT4ge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICB9O1xufTtcbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG5jb25zdCBjYW1lbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oXG4gIChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiBcIlwiKTtcbiAgfVxuKTtcbmNvbnN0IGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbmNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oXG4gIChzdHIpID0+IHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpXG4pO1xuY29uc3QgY2FwaXRhbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufSk7XG5jb25zdCB0b0hhbmRsZXJLZXkgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKFxuICAoc3RyKSA9PiB7XG4gICAgY29uc3QgcyA9IHN0ciA/IGBvbiR7Y2FwaXRhbGl6ZShzdHIpfWAgOiBgYDtcbiAgICByZXR1cm4gcztcbiAgfVxuKTtcbmNvbnN0IGhhc0NoYW5nZWQgPSAodmFsdWUsIG9sZFZhbHVlKSA9PiAhT2JqZWN0LmlzKHZhbHVlLCBvbGRWYWx1ZSk7XG5jb25zdCBpbnZva2VBcnJheUZucyA9IChmbnMsIC4uLmFyZykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIGZuc1tpXSguLi5hcmcpO1xuICB9XG59O1xuY29uc3QgZGVmID0gKG9iaiwga2V5LCB2YWx1ZSwgd3JpdGFibGUgPSBmYWxzZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGUsXG4gICAgdmFsdWVcbiAgfSk7XG59O1xuY29uc3QgbG9vc2VUb051bWJlciA9ICh2YWwpID0+IHtcbiAgY29uc3QgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogbjtcbn07XG5jb25zdCB0b051bWJlciA9ICh2YWwpID0+IHtcbiAgY29uc3QgbiA9IGlzU3RyaW5nKHZhbCkgPyBOdW1iZXIodmFsKSA6IE5hTjtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogbjtcbn07XG5sZXQgX2dsb2JhbFRoaXM7XG5jb25zdCBnZXRHbG9iYWxUaGlzID0gKCkgPT4ge1xuICByZXR1cm4gX2dsb2JhbFRoaXMgfHwgKF9nbG9iYWxUaGlzID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG59O1xuY29uc3QgaWRlbnRSRSA9IC9eW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bXyRhLXpBLVowLTlcXHhBMC1cXHVGRkZGXSokLztcbmZ1bmN0aW9uIGdlblByb3BzQWNjZXNzRXhwKG5hbWUpIHtcbiAgcmV0dXJuIGlkZW50UkUudGVzdChuYW1lKSA/IGBfX3Byb3BzLiR7bmFtZX1gIDogYF9fcHJvcHNbJHtKU09OLnN0cmluZ2lmeShuYW1lKX1dYDtcbn1cbmZ1bmN0aW9uIGdlbkNhY2hlS2V5KHNvdXJjZSwgb3B0aW9ucykge1xuICByZXR1cm4gc291cmNlICsgSlNPTi5zdHJpbmdpZnkoXG4gICAgb3B0aW9ucyxcbiAgICAoXywgdmFsKSA9PiB0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIgPyB2YWwudG9TdHJpbmcoKSA6IHZhbFxuICApO1xufVxuXG5jb25zdCBQYXRjaEZsYWdzID0ge1xuICBcIlRFWFRcIjogMSxcbiAgXCIxXCI6IFwiVEVYVFwiLFxuICBcIkNMQVNTXCI6IDIsXG4gIFwiMlwiOiBcIkNMQVNTXCIsXG4gIFwiU1RZTEVcIjogNCxcbiAgXCI0XCI6IFwiU1RZTEVcIixcbiAgXCJQUk9QU1wiOiA4LFxuICBcIjhcIjogXCJQUk9QU1wiLFxuICBcIkZVTExfUFJPUFNcIjogMTYsXG4gIFwiMTZcIjogXCJGVUxMX1BST1BTXCIsXG4gIFwiTkVFRF9IWURSQVRJT05cIjogMzIsXG4gIFwiMzJcIjogXCJORUVEX0hZRFJBVElPTlwiLFxuICBcIlNUQUJMRV9GUkFHTUVOVFwiOiA2NCxcbiAgXCI2NFwiOiBcIlNUQUJMRV9GUkFHTUVOVFwiLFxuICBcIktFWUVEX0ZSQUdNRU5UXCI6IDEyOCxcbiAgXCIxMjhcIjogXCJLRVlFRF9GUkFHTUVOVFwiLFxuICBcIlVOS0VZRURfRlJBR01FTlRcIjogMjU2LFxuICBcIjI1NlwiOiBcIlVOS0VZRURfRlJBR01FTlRcIixcbiAgXCJORUVEX1BBVENIXCI6IDUxMixcbiAgXCI1MTJcIjogXCJORUVEX1BBVENIXCIsXG4gIFwiRFlOQU1JQ19TTE9UU1wiOiAxMDI0LFxuICBcIjEwMjRcIjogXCJEWU5BTUlDX1NMT1RTXCIsXG4gIFwiREVWX1JPT1RfRlJBR01FTlRcIjogMjA0OCxcbiAgXCIyMDQ4XCI6IFwiREVWX1JPT1RfRlJBR01FTlRcIixcbiAgXCJDQUNIRURcIjogLTEsXG4gIFwiLTFcIjogXCJDQUNIRURcIixcbiAgXCJCQUlMXCI6IC0yLFxuICBcIi0yXCI6IFwiQkFJTFwiXG59O1xuY29uc3QgUGF0Y2hGbGFnTmFtZXMgPSB7XG4gIFsxXTogYFRFWFRgLFxuICBbMl06IGBDTEFTU2AsXG4gIFs0XTogYFNUWUxFYCxcbiAgWzhdOiBgUFJPUFNgLFxuICBbMTZdOiBgRlVMTF9QUk9QU2AsXG4gIFszMl06IGBORUVEX0hZRFJBVElPTmAsXG4gIFs2NF06IGBTVEFCTEVfRlJBR01FTlRgLFxuICBbMTI4XTogYEtFWUVEX0ZSQUdNRU5UYCxcbiAgWzI1Nl06IGBVTktFWUVEX0ZSQUdNRU5UYCxcbiAgWzUxMl06IGBORUVEX1BBVENIYCxcbiAgWzEwMjRdOiBgRFlOQU1JQ19TTE9UU2AsXG4gIFsyMDQ4XTogYERFVl9ST09UX0ZSQUdNRU5UYCxcbiAgWy0xXTogYEhPSVNURURgLFxuICBbLTJdOiBgQkFJTGBcbn07XG5cbmNvbnN0IFNoYXBlRmxhZ3MgPSB7XG4gIFwiRUxFTUVOVFwiOiAxLFxuICBcIjFcIjogXCJFTEVNRU5UXCIsXG4gIFwiRlVOQ1RJT05BTF9DT01QT05FTlRcIjogMixcbiAgXCIyXCI6IFwiRlVOQ1RJT05BTF9DT01QT05FTlRcIixcbiAgXCJTVEFURUZVTF9DT01QT05FTlRcIjogNCxcbiAgXCI0XCI6IFwiU1RBVEVGVUxfQ09NUE9ORU5UXCIsXG4gIFwiVEVYVF9DSElMRFJFTlwiOiA4LFxuICBcIjhcIjogXCJURVhUX0NISUxEUkVOXCIsXG4gIFwiQVJSQVlfQ0hJTERSRU5cIjogMTYsXG4gIFwiMTZcIjogXCJBUlJBWV9DSElMRFJFTlwiLFxuICBcIlNMT1RTX0NISUxEUkVOXCI6IDMyLFxuICBcIjMyXCI6IFwiU0xPVFNfQ0hJTERSRU5cIixcbiAgXCJURUxFUE9SVFwiOiA2NCxcbiAgXCI2NFwiOiBcIlRFTEVQT1JUXCIsXG4gIFwiU1VTUEVOU0VcIjogMTI4LFxuICBcIjEyOFwiOiBcIlNVU1BFTlNFXCIsXG4gIFwiQ09NUE9ORU5UX1NIT1VMRF9LRUVQX0FMSVZFXCI6IDI1NixcbiAgXCIyNTZcIjogXCJDT01QT05FTlRfU0hPVUxEX0tFRVBfQUxJVkVcIixcbiAgXCJDT01QT05FTlRfS0VQVF9BTElWRVwiOiA1MTIsXG4gIFwiNTEyXCI6IFwiQ09NUE9ORU5UX0tFUFRfQUxJVkVcIixcbiAgXCJDT01QT05FTlRcIjogNixcbiAgXCI2XCI6IFwiQ09NUE9ORU5UXCJcbn07XG5cbmNvbnN0IFNsb3RGbGFncyA9IHtcbiAgXCJTVEFCTEVcIjogMSxcbiAgXCIxXCI6IFwiU1RBQkxFXCIsXG4gIFwiRFlOQU1JQ1wiOiAyLFxuICBcIjJcIjogXCJEWU5BTUlDXCIsXG4gIFwiRk9SV0FSREVEXCI6IDMsXG4gIFwiM1wiOiBcIkZPUldBUkRFRFwiXG59O1xuY29uc3Qgc2xvdEZsYWdzVGV4dCA9IHtcbiAgWzFdOiBcIlNUQUJMRVwiLFxuICBbMl06IFwiRFlOQU1JQ1wiLFxuICBbM106IFwiRk9SV0FSREVEXCJcbn07XG5cbmNvbnN0IEdMT0JBTFNfQUxMT1dFRCA9IFwiSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTixwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCxNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsQmlnSW50LGNvbnNvbGUsRXJyb3IsU3ltYm9sXCI7XG5jb25zdCBpc0dsb2JhbGx5QWxsb3dlZCA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKEdMT0JBTFNfQUxMT1dFRCk7XG5jb25zdCBpc0dsb2JhbGx5V2hpdGVsaXN0ZWQgPSBpc0dsb2JhbGx5QWxsb3dlZDtcblxuY29uc3QgcmFuZ2UgPSAyO1xuZnVuY3Rpb24gZ2VuZXJhdGVDb2RlRnJhbWUoc291cmNlLCBzdGFydCA9IDAsIGVuZCA9IHNvdXJjZS5sZW5ndGgpIHtcbiAgc3RhcnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzdGFydCwgc291cmNlLmxlbmd0aCkpO1xuICBlbmQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihlbmQsIHNvdXJjZS5sZW5ndGgpKTtcbiAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gXCJcIjtcbiAgbGV0IGxpbmVzID0gc291cmNlLnNwbGl0KC8oXFxyP1xcbikvKTtcbiAgY29uc3QgbmV3bGluZVNlcXVlbmNlcyA9IGxpbmVzLmZpbHRlcigoXywgaWR4KSA9PiBpZHggJSAyID09PSAxKTtcbiAgbGluZXMgPSBsaW5lcy5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICUgMiA9PT0gMCk7XG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY291bnQgKz0gbGluZXNbaV0ubGVuZ3RoICsgKG5ld2xpbmVTZXF1ZW5jZXNbaV0gJiYgbmV3bGluZVNlcXVlbmNlc1tpXS5sZW5ndGggfHwgMCk7XG4gICAgaWYgKGNvdW50ID49IHN0YXJ0KSB7XG4gICAgICBmb3IgKGxldCBqID0gaSAtIHJhbmdlOyBqIDw9IGkgKyByYW5nZSB8fCBlbmQgPiBjb3VudDsgaisrKSB7XG4gICAgICAgIGlmIChqIDwgMCB8fCBqID49IGxpbmVzLmxlbmd0aCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBqICsgMTtcbiAgICAgICAgcmVzLnB1c2goXG4gICAgICAgICAgYCR7bGluZX0ke1wiIFwiLnJlcGVhdChNYXRoLm1heCgzIC0gU3RyaW5nKGxpbmUpLmxlbmd0aCwgMCkpfXwgICR7bGluZXNbal19YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsaW5lTGVuZ3RoID0gbGluZXNbal0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBuZXdMaW5lU2VxTGVuZ3RoID0gbmV3bGluZVNlcXVlbmNlc1tqXSAmJiBuZXdsaW5lU2VxdWVuY2VzW2pdLmxlbmd0aCB8fCAwO1xuICAgICAgICBpZiAoaiA9PT0gaSkge1xuICAgICAgICAgIGNvbnN0IHBhZCA9IHN0YXJ0IC0gKGNvdW50IC0gKGxpbmVMZW5ndGggKyBuZXdMaW5lU2VxTGVuZ3RoKSk7XG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgZW5kID4gY291bnQgPyBsaW5lTGVuZ3RoIC0gcGFkIDogZW5kIC0gc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlcy5wdXNoKGAgICB8ICBgICsgXCIgXCIucmVwZWF0KHBhZCkgKyBcIl5cIi5yZXBlYXQobGVuZ3RoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaiA+IGkpIHtcbiAgICAgICAgICBpZiAoZW5kID4gY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgubWF4KE1hdGgubWluKGVuZCAtIGNvdW50LCBsaW5lTGVuZ3RoKSwgMSk7XG4gICAgICAgICAgICByZXMucHVzaChgICAgfCAgYCArIFwiXlwiLnJlcGVhdChsZW5ndGgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnQgKz0gbGluZUxlbmd0aCArIG5ld0xpbmVTZXFMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzLmpvaW4oXCJcXG5cIik7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBpc1N0cmluZyhpdGVtKSA/IHBhcnNlU3RyaW5nU3R5bGUoaXRlbSkgOiBub3JtYWxpemVTdHlsZShpdGVtKTtcbiAgICAgIGlmIChub3JtYWxpemVkKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5vcm1hbGl6ZWQpIHtcbiAgICAgICAgICByZXNba2V5XSA9IG5vcm1hbGl6ZWRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSB8fCBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbmNvbnN0IGxpc3REZWxpbWl0ZXJSRSA9IC87KD8hW14oXSpcXCkpL2c7XG5jb25zdCBwcm9wZXJ0eURlbGltaXRlclJFID0gLzooW15dKykvO1xuY29uc3Qgc3R5bGVDb21tZW50UkUgPSAvXFwvXFwqW15dKj9cXCpcXC8vZztcbmZ1bmN0aW9uIHBhcnNlU3RyaW5nU3R5bGUoY3NzVGV4dCkge1xuICBjb25zdCByZXQgPSB7fTtcbiAgY3NzVGV4dC5yZXBsYWNlKHN0eWxlQ29tbWVudFJFLCBcIlwiKS5zcGxpdChsaXN0RGVsaW1pdGVyUkUpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlclJFKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXRbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5U3R5bGUoc3R5bGVzKSB7XG4gIGlmICghc3R5bGVzKSByZXR1cm4gXCJcIjtcbiAgaWYgKGlzU3RyaW5nKHN0eWxlcykpIHJldHVybiBzdHlsZXM7XG4gIGxldCByZXQgPSBcIlwiO1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkS2V5ID0ga2V5LnN0YXJ0c1dpdGgoYC0tYCkgPyBrZXkgOiBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIHJldCArPSBgJHtub3JtYWxpemVkS2V5fToke3ZhbHVlfTtgO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gbm9ybWFsaXplQ2xhc3ModmFsdWUpIHtcbiAgbGV0IHJlcyA9IFwiXCI7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICByZXMgPSB2YWx1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVDbGFzcyh2YWx1ZVtpXSk7XG4gICAgICBpZiAobm9ybWFsaXplZCkge1xuICAgICAgICByZXMgKz0gbm9ybWFsaXplZCArIFwiIFwiO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZVtuYW1lXSkge1xuICAgICAgICByZXMgKz0gbmFtZSArIFwiIFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzKHByb3BzKSB7XG4gIGlmICghcHJvcHMpIHJldHVybiBudWxsO1xuICBsZXQgeyBjbGFzczoga2xhc3MsIHN0eWxlIH0gPSBwcm9wcztcbiAgaWYgKGtsYXNzICYmICFpc1N0cmluZyhrbGFzcykpIHtcbiAgICBwcm9wcy5jbGFzcyA9IG5vcm1hbGl6ZUNsYXNzKGtsYXNzKTtcbiAgfVxuICBpZiAoc3R5bGUpIHtcbiAgICBwcm9wcy5zdHlsZSA9IG5vcm1hbGl6ZVN0eWxlKHN0eWxlKTtcbiAgfVxuICByZXR1cm4gcHJvcHM7XG59XG5cbmNvbnN0IEhUTUxfVEFHUyA9IFwiaHRtbCxib2R5LGJhc2UsaGVhZCxsaW5rLG1ldGEsc3R5bGUsdGl0bGUsYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaGdyb3VwLGgxLGgyLGgzLGg0LGg1LGg2LG5hdixzZWN0aW9uLGRpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLGEsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydWJ5LHMsc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLGVtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLGNhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLGJ1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSxkZXRhaWxzLGRpYWxvZyxtZW51LHN1bW1hcnksdGVtcGxhdGUsYmxvY2txdW90ZSxpZnJhbWUsdGZvb3RcIjtcbmNvbnN0IFNWR19UQUdTID0gXCJzdmcsYW5pbWF0ZSxhbmltYXRlTW90aW9uLGFuaW1hdGVUcmFuc2Zvcm0sY2lyY2xlLGNsaXBQYXRoLGNvbG9yLXByb2ZpbGUsZGVmcyxkZXNjLGRpc2NhcmQsZWxsaXBzZSxmZUJsZW5kLGZlQ29sb3JNYXRyaXgsZmVDb21wb25lbnRUcmFuc2ZlcixmZUNvbXBvc2l0ZSxmZUNvbnZvbHZlTWF0cml4LGZlRGlmZnVzZUxpZ2h0aW5nLGZlRGlzcGxhY2VtZW50TWFwLGZlRGlzdGFudExpZ2h0LGZlRHJvcFNoYWRvdyxmZUZsb29kLGZlRnVuY0EsZmVGdW5jQixmZUZ1bmNHLGZlRnVuY1IsZmVHYXVzc2lhbkJsdXIsZmVJbWFnZSxmZU1lcmdlLGZlTWVyZ2VOb2RlLGZlTW9ycGhvbG9neSxmZU9mZnNldCxmZVBvaW50TGlnaHQsZmVTcGVjdWxhckxpZ2h0aW5nLGZlU3BvdExpZ2h0LGZlVGlsZSxmZVR1cmJ1bGVuY2UsZmlsdGVyLGZvcmVpZ25PYmplY3QsZyxoYXRjaCxoYXRjaHBhdGgsaW1hZ2UsbGluZSxsaW5lYXJHcmFkaWVudCxtYXJrZXIsbWFzayxtZXNoLG1lc2hncmFkaWVudCxtZXNocGF0Y2gsbWVzaHJvdyxtZXRhZGF0YSxtcGF0aCxwYXRoLHBhdHRlcm4scG9seWdvbixwb2x5bGluZSxyYWRpYWxHcmFkaWVudCxyZWN0LHNldCxzb2xpZGNvbG9yLHN0b3Asc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRQYXRoLHRpdGxlLHRzcGFuLHVua25vd24sdXNlLHZpZXdcIjtcbmNvbnN0IE1BVEhfVEFHUyA9IFwiYW5ub3RhdGlvbixhbm5vdGF0aW9uLXhtbCxtYWN0aW9uLG1hbGlnbmdyb3VwLG1hbGlnbm1hcmssbWF0aCxtZW5jbG9zZSxtZXJyb3IsbWZlbmNlZCxtZnJhYyxtZnJhY3Rpb24sbWdseXBoLG1pLG1sYWJlbGVkdHIsbWxvbmdkaXYsbW11bHRpc2NyaXB0cyxtbixtbyxtb3ZlcixtcGFkZGVkLG1waGFudG9tLG1wcmVzY3JpcHRzLG1yb290LG1yb3csbXMsbXNjYXJyaWVzLG1zY2FycnksbXNncm91cCxtc2xpbmUsbXNwYWNlLG1zcXJ0LG1zcm93LG1zdGFjayxtc3R5bGUsbXN1Yixtc3Vic3VwLG1zdXAsbXRhYmxlLG10ZCxtdGV4dCxtdHIsbXVuZGVyLG11bmRlcm92ZXIsbm9uZSxzZW1hbnRpY3NcIjtcbmNvbnN0IFZPSURfVEFHUyA9IFwiYXJlYSxiYXNlLGJyLGNvbCxlbWJlZCxocixpbWcsaW5wdXQsbGluayxtZXRhLHBhcmFtLHNvdXJjZSx0cmFjayx3YnJcIjtcbmNvbnN0IGlzSFRNTFRhZyA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKEhUTUxfVEFHUyk7XG5jb25zdCBpc1NWR1RhZyA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKFNWR19UQUdTKTtcbmNvbnN0IGlzTWF0aE1MVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoTUFUSF9UQUdTKTtcbmNvbnN0IGlzVm9pZFRhZyA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKFZPSURfVEFHUyk7XG5cbmNvbnN0IHNwZWNpYWxCb29sZWFuQXR0cnMgPSBgaXRlbXNjb3BlLGFsbG93ZnVsbHNjcmVlbixmb3Jtbm92YWxpZGF0ZSxpc21hcCxub21vZHVsZSxub3ZhbGlkYXRlLHJlYWRvbmx5YDtcbmNvbnN0IGlzU3BlY2lhbEJvb2xlYW5BdHRyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoc3BlY2lhbEJvb2xlYW5BdHRycyk7XG5jb25zdCBpc0Jvb2xlYW5BdHRyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIHNwZWNpYWxCb29sZWFuQXR0cnMgKyBgLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjb250cm9scyxkZWZhdWx0LGRlZmVyLGRpc2FibGVkLGhpZGRlbixpbmVydCxsb29wLG9wZW4scmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLGNoZWNrZWQsbXV0ZWQsbXVsdGlwbGUsc2VsZWN0ZWRgXG4pO1xuZnVuY3Rpb24gaW5jbHVkZUJvb2xlYW5BdHRyKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlIHx8IHZhbHVlID09PSBcIlwiO1xufVxuY29uc3QgdW5zYWZlQXR0ckNoYXJSRSA9IC9bPi89XCInXFx1MDAwOVxcdTAwMGFcXHUwMDBjXFx1MDAyMF0vO1xuY29uc3QgYXR0clZhbGlkYXRpb25DYWNoZSA9IHt9O1xuZnVuY3Rpb24gaXNTU1JTYWZlQXR0ck5hbWUobmFtZSkge1xuICBpZiAoYXR0clZhbGlkYXRpb25DYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHJldHVybiBhdHRyVmFsaWRhdGlvbkNhY2hlW25hbWVdO1xuICB9XG4gIGNvbnN0IGlzVW5zYWZlID0gdW5zYWZlQXR0ckNoYXJSRS50ZXN0KG5hbWUpO1xuICBpZiAoaXNVbnNhZmUpIHtcbiAgICBjb25zb2xlLmVycm9yKGB1bnNhZmUgYXR0cmlidXRlIG5hbWU6ICR7bmFtZX1gKTtcbiAgfVxuICByZXR1cm4gYXR0clZhbGlkYXRpb25DYWNoZVtuYW1lXSA9ICFpc1Vuc2FmZTtcbn1cbmNvbnN0IHByb3BzVG9BdHRyTWFwID0ge1xuICBhY2NlcHRDaGFyc2V0OiBcImFjY2VwdC1jaGFyc2V0XCIsXG4gIGNsYXNzTmFtZTogXCJjbGFzc1wiLFxuICBodG1sRm9yOiBcImZvclwiLFxuICBodHRwRXF1aXY6IFwiaHR0cC1lcXVpdlwiXG59O1xuY29uc3QgaXNLbm93bkh0bWxBdHRyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIGBhY2NlcHQsYWNjZXB0LWNoYXJzZXQsYWNjZXNza2V5LGFjdGlvbixhbGlnbixhbGxvdyxhbHQsYXN5bmMsYXV0b2NhcGl0YWxpemUsYXV0b2NvbXBsZXRlLGF1dG9mb2N1cyxhdXRvcGxheSxiYWNrZ3JvdW5kLGJnY29sb3IsYm9yZGVyLGJ1ZmZlcmVkLGNhcHR1cmUsY2hhbGxlbmdlLGNoYXJzZXQsY2hlY2tlZCxjaXRlLGNsYXNzLGNvZGUsY29kZWJhc2UsY29sb3IsY29scyxjb2xzcGFuLGNvbnRlbnQsY29udGVudGVkaXRhYmxlLGNvbnRleHRtZW51LGNvbnRyb2xzLGNvb3Jkcyxjcm9zc29yaWdpbixjc3AsZGF0YSxkYXRldGltZSxkZWNvZGluZyxkZWZhdWx0LGRlZmVyLGRpcixkaXJuYW1lLGRpc2FibGVkLGRvd25sb2FkLGRyYWdnYWJsZSxkcm9wem9uZSxlbmN0eXBlLGVudGVya2V5aGludCxmb3IsZm9ybSxmb3JtYWN0aW9uLGZvcm1lbmN0eXBlLGZvcm1tZXRob2QsZm9ybW5vdmFsaWRhdGUsZm9ybXRhcmdldCxoZWFkZXJzLGhlaWdodCxoaWRkZW4saGlnaCxocmVmLGhyZWZsYW5nLGh0dHAtZXF1aXYsaWNvbixpZCxpbXBvcnRhbmNlLGluZXJ0LGludGVncml0eSxpc21hcCxpdGVtcHJvcCxrZXl0eXBlLGtpbmQsbGFiZWwsbGFuZyxsYW5ndWFnZSxsb2FkaW5nLGxpc3QsbG9vcCxsb3csbWFuaWZlc3QsbWF4LG1heGxlbmd0aCxtaW5sZW5ndGgsbWVkaWEsbWluLG11bHRpcGxlLG11dGVkLG5hbWUsbm92YWxpZGF0ZSxvcGVuLG9wdGltdW0scGF0dGVybixwaW5nLHBsYWNlaG9sZGVyLHBvc3RlcixwcmVsb2FkLHJhZGlvZ3JvdXAscmVhZG9ubHkscmVmZXJyZXJwb2xpY3kscmVsLHJlcXVpcmVkLHJldmVyc2VkLHJvd3Mscm93c3BhbixzYW5kYm94LHNjb3BlLHNjb3BlZCxzZWxlY3RlZCxzaGFwZSxzaXplLHNpemVzLHNsb3Qsc3BhbixzcGVsbGNoZWNrLHNyYyxzcmNkb2Msc3JjbGFuZyxzcmNzZXQsc3RhcnQsc3RlcCxzdHlsZSxzdW1tYXJ5LHRhYmluZGV4LHRhcmdldCx0aXRsZSx0cmFuc2xhdGUsdHlwZSx1c2VtYXAsdmFsdWUsd2lkdGgsd3JhcGBcbik7XG5jb25zdCBpc0tub3duU3ZnQXR0ciA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKFxuICBgeG1sbnMsYWNjZW50LWhlaWdodCxhY2N1bXVsYXRlLGFkZGl0aXZlLGFsaWdubWVudC1iYXNlbGluZSxhbHBoYWJldGljLGFtcGxpdHVkZSxhcmFiaWMtZm9ybSxhc2NlbnQsYXR0cmlidXRlTmFtZSxhdHRyaWJ1dGVUeXBlLGF6aW11dGgsYmFzZUZyZXF1ZW5jeSxiYXNlbGluZS1zaGlmdCxiYXNlUHJvZmlsZSxiYm94LGJlZ2luLGJpYXMsYnksY2FsY01vZGUsY2FwLWhlaWdodCxjbGFzcyxjbGlwLGNsaXBQYXRoVW5pdHMsY2xpcC1wYXRoLGNsaXAtcnVsZSxjb2xvcixjb2xvci1pbnRlcnBvbGF0aW9uLGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyxjb2xvci1wcm9maWxlLGNvbG9yLXJlbmRlcmluZyxjb250ZW50U2NyaXB0VHlwZSxjb250ZW50U3R5bGVUeXBlLGNyb3Nzb3JpZ2luLGN1cnNvcixjeCxjeSxkLGRlY2VsZXJhdGUsZGVzY2VudCxkaWZmdXNlQ29uc3RhbnQsZGlyZWN0aW9uLGRpc3BsYXksZGl2aXNvcixkb21pbmFudC1iYXNlbGluZSxkdXIsZHgsZHksZWRnZU1vZGUsZWxldmF0aW9uLGVuYWJsZS1iYWNrZ3JvdW5kLGVuZCxleHBvbmVudCxmaWxsLGZpbGwtb3BhY2l0eSxmaWxsLXJ1bGUsZmlsdGVyLGZpbHRlclJlcyxmaWx0ZXJVbml0cyxmbG9vZC1jb2xvcixmbG9vZC1vcGFjaXR5LGZvbnQtZmFtaWx5LGZvbnQtc2l6ZSxmb250LXNpemUtYWRqdXN0LGZvbnQtc3RyZXRjaCxmb250LXN0eWxlLGZvbnQtdmFyaWFudCxmb250LXdlaWdodCxmb3JtYXQsZnJvbSxmcixmeCxmeSxnMSxnMixnbHlwaC1uYW1lLGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwsZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwsZ2x5cGhSZWYsZ3JhZGllbnRUcmFuc2Zvcm0sZ3JhZGllbnRVbml0cyxoYW5naW5nLGhlaWdodCxocmVmLGhyZWZsYW5nLGhvcml6LWFkdi14LGhvcml6LW9yaWdpbi14LGlkLGlkZW9ncmFwaGljLGltYWdlLXJlbmRlcmluZyxpbixpbjIsaW50ZXJjZXB0LGssazEsazIsazMsazQsa2VybmVsTWF0cml4LGtlcm5lbFVuaXRMZW5ndGgsa2VybmluZyxrZXlQb2ludHMsa2V5U3BsaW5lcyxrZXlUaW1lcyxsYW5nLGxlbmd0aEFkanVzdCxsZXR0ZXItc3BhY2luZyxsaWdodGluZy1jb2xvcixsaW1pdGluZ0NvbmVBbmdsZSxsb2NhbCxtYXJrZXItZW5kLG1hcmtlci1taWQsbWFya2VyLXN0YXJ0LG1hcmtlckhlaWdodCxtYXJrZXJVbml0cyxtYXJrZXJXaWR0aCxtYXNrLG1hc2tDb250ZW50VW5pdHMsbWFza1VuaXRzLG1hdGhlbWF0aWNhbCxtYXgsbWVkaWEsbWV0aG9kLG1pbixtb2RlLG5hbWUsbnVtT2N0YXZlcyxvZmZzZXQsb3BhY2l0eSxvcGVyYXRvcixvcmRlcixvcmllbnQsb3JpZW50YXRpb24sb3JpZ2luLG92ZXJmbG93LG92ZXJsaW5lLXBvc2l0aW9uLG92ZXJsaW5lLXRoaWNrbmVzcyxwYW5vc2UtMSxwYWludC1vcmRlcixwYXRoLHBhdGhMZW5ndGgscGF0dGVybkNvbnRlbnRVbml0cyxwYXR0ZXJuVHJhbnNmb3JtLHBhdHRlcm5Vbml0cyxwaW5nLHBvaW50ZXItZXZlbnRzLHBvaW50cyxwb2ludHNBdFgscG9pbnRzQXRZLHBvaW50c0F0WixwcmVzZXJ2ZUFscGhhLHByZXNlcnZlQXNwZWN0UmF0aW8scHJpbWl0aXZlVW5pdHMscixyYWRpdXMscmVmZXJyZXJQb2xpY3kscmVmWCxyZWZZLHJlbCxyZW5kZXJpbmctaW50ZW50LHJlcGVhdENvdW50LHJlcGVhdER1cixyZXF1aXJlZEV4dGVuc2lvbnMscmVxdWlyZWRGZWF0dXJlcyxyZXN0YXJ0LHJlc3VsdCxyb3RhdGUscngscnksc2NhbGUsc2VlZCxzaGFwZS1yZW5kZXJpbmcsc2xvcGUsc3BhY2luZyxzcGVjdWxhckNvbnN0YW50LHNwZWN1bGFyRXhwb25lbnQsc3BlZWQsc3ByZWFkTWV0aG9kLHN0YXJ0T2Zmc2V0LHN0ZERldmlhdGlvbixzdGVtaCxzdGVtdixzdGl0Y2hUaWxlcyxzdG9wLWNvbG9yLHN0b3Atb3BhY2l0eSxzdHJpa2V0aHJvdWdoLXBvc2l0aW9uLHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzLHN0cmluZyxzdHJva2Usc3Ryb2tlLWRhc2hhcnJheSxzdHJva2UtZGFzaG9mZnNldCxzdHJva2UtbGluZWNhcCxzdHJva2UtbGluZWpvaW4sc3Ryb2tlLW1pdGVybGltaXQsc3Ryb2tlLW9wYWNpdHksc3Ryb2tlLXdpZHRoLHN0eWxlLHN1cmZhY2VTY2FsZSxzeXN0ZW1MYW5ndWFnZSx0YWJpbmRleCx0YWJsZVZhbHVlcyx0YXJnZXQsdGFyZ2V0WCx0YXJnZXRZLHRleHQtYW5jaG9yLHRleHQtZGVjb3JhdGlvbix0ZXh0LXJlbmRlcmluZyx0ZXh0TGVuZ3RoLHRvLHRyYW5zZm9ybSx0cmFuc2Zvcm0tb3JpZ2luLHR5cGUsdTEsdTIsdW5kZXJsaW5lLXBvc2l0aW9uLHVuZGVybGluZS10aGlja25lc3MsdW5pY29kZSx1bmljb2RlLWJpZGksdW5pY29kZS1yYW5nZSx1bml0cy1wZXItZW0sdi1hbHBoYWJldGljLHYtaGFuZ2luZyx2LWlkZW9ncmFwaGljLHYtbWF0aGVtYXRpY2FsLHZhbHVlcyx2ZWN0b3ItZWZmZWN0LHZlcnNpb24sdmVydC1hZHYteSx2ZXJ0LW9yaWdpbi14LHZlcnQtb3JpZ2luLXksdmlld0JveCx2aWV3VGFyZ2V0LHZpc2liaWxpdHksd2lkdGgsd2lkdGhzLHdvcmQtc3BhY2luZyx3cml0aW5nLW1vZGUseCx4LWhlaWdodCx4MSx4Mix4Q2hhbm5lbFNlbGVjdG9yLHhsaW5rOmFjdHVhdGUseGxpbms6YXJjcm9sZSx4bGluazpocmVmLHhsaW5rOnJvbGUseGxpbms6c2hvdyx4bGluazp0aXRsZSx4bGluazp0eXBlLHhtbG5zOnhsaW5rLHhtbDpiYXNlLHhtbDpsYW5nLHhtbDpzcGFjZSx5LHkxLHkyLHlDaGFubmVsU2VsZWN0b3Iseix6b29tQW5kUGFuYFxuKTtcbmNvbnN0IGlzS25vd25NYXRoTUxBdHRyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIGBhY2NlbnQsYWNjZW50dW5kZXIsYWN0aW9udHlwZSxhbGlnbixhbGlnbm1lbnRzY29wZSxhbHRpbWcsYWx0aW1nLWhlaWdodCxhbHRpbWctdmFsaWduLGFsdGltZy13aWR0aCxhbHR0ZXh0LGJldmVsbGVkLGNsb3NlLGNvbHVtbnNhbGlnbixjb2x1bW5saW5lcyxjb2x1bW5zcGFuLGRlbm9tYWxpZ24sZGVwdGgsZGlyLGRpc3BsYXksZGlzcGxheXN0eWxlLGVuY29kaW5nLGVxdWFsY29sdW1ucyxlcXVhbHJvd3MsZmVuY2UsZm9udHN0eWxlLGZvbnR3ZWlnaHQsZm9ybSxmcmFtZSxmcmFtZXNwYWNpbmcsZ3JvdXBhbGlnbixoZWlnaHQsaHJlZixpZCxpbmRlbnRhbGlnbixpbmRlbnRhbGlnbmZpcnN0LGluZGVudGFsaWdubGFzdCxpbmRlbnRzaGlmdCxpbmRlbnRzaGlmdGZpcnN0LGluZGVudHNoaWZ0bGFzdCxpbmRleHR5cGUsanVzdGlmeSxsYXJnZXRvcCxsYXJnZW9wLGxxdW90ZSxsc3BhY2UsbWF0aGJhY2tncm91bmQsbWF0aGNvbG9yLG1hdGhzaXplLG1hdGh2YXJpYW50LG1heHNpemUsbWlubGFiZWxzcGFjaW5nLG1vZGUsb3RoZXIsb3ZlcmZsb3cscG9zaXRpb24scm93YWxpZ24scm93bGluZXMscm93c3BhbixycXVvdGUscnNwYWNlLHNjcmlwdGxldmVsLHNjcmlwdG1pbnNpemUsc2NyaXB0c2l6ZW11bHRpcGxpZXIsc2VsZWN0aW9uLHNlcGFyYXRvcixzZXBhcmF0b3JzLHNoaWZ0LHNpZGUsc3JjLHN0YWNrYWxpZ24sc3RyZXRjaHksc3Vic2NyaXB0c2hpZnQsc3VwZXJzY3JpcHRzaGlmdCxzeW1tZXRyaWMsdm9mZnNldCx3aWR0aCx3aWR0aHMseGxpbms6aHJlZix4bGluazpzaG93LHhsaW5rOnR5cGUseG1sbnNgXG4pO1xuZnVuY3Rpb24gaXNSZW5kZXJhYmxlQXR0clZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGUgPT09IFwibnVtYmVyXCIgfHwgdHlwZSA9PT0gXCJib29sZWFuXCI7XG59XG5cbmNvbnN0IGVzY2FwZVJFID0gL1tcIicmPD5dLztcbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKSB7XG4gIGNvbnN0IHN0ciA9IFwiXCIgKyBzdHJpbmc7XG4gIGNvbnN0IG1hdGNoID0gZXNjYXBlUkUuZXhlYyhzdHIpO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBsZXQgaHRtbCA9IFwiXCI7XG4gIGxldCBlc2NhcGVkO1xuICBsZXQgaW5kZXg7XG4gIGxldCBsYXN0SW5kZXggPSAwO1xuICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XG4gICAgICBjYXNlIDM0OlxuICAgICAgICBlc2NhcGVkID0gXCImcXVvdDtcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICBlc2NhcGVkID0gXCImYW1wO1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6XG4gICAgICAgIGVzY2FwZWQgPSBcIiYjMzk7XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MDpcbiAgICAgICAgZXNjYXBlZCA9IFwiJmx0O1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjI6XG4gICAgICAgIGVzY2FwZWQgPSBcIiZndDtcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIGh0bWwgKz0gc3RyLnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpO1xuICAgIH1cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaHRtbCArPSBlc2NhcGVkO1xuICB9XG4gIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4ID8gaHRtbCArIHN0ci5zbGljZShsYXN0SW5kZXgsIGluZGV4KSA6IGh0bWw7XG59XG5jb25zdCBjb21tZW50U3RyaXBSRSA9IC9eLT8+fDwhLS18LS0+fC0tIT58PCEtJC9nO1xuZnVuY3Rpb24gZXNjYXBlSHRtbENvbW1lbnQoc3JjKSB7XG4gIHJldHVybiBzcmMucmVwbGFjZShjb21tZW50U3RyaXBSRSwgXCJcIik7XG59XG5jb25zdCBjc3NWYXJOYW1lRXNjYXBlU3ltYm9sc1JFID0gL1sgIVwiIyQlJicoKSorLC4vOjs8PT4/QFtcXFxcXFxdXmB7fH1+XS9nO1xuZnVuY3Rpb24gZ2V0RXNjYXBlZENzc1Zhck5hbWUoa2V5LCBkb3VibGVFc2NhcGUpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKFxuICAgIGNzc1Zhck5hbWVFc2NhcGVTeW1ib2xzUkUsXG4gICAgKHMpID0+IGRvdWJsZUVzY2FwZSA/IHMgPT09ICdcIicgPyAnXFxcXFxcXFxcXFxcXCInIDogYFxcXFxcXFxcJHtzfWAgOiBgXFxcXCR7c31gXG4gICk7XG59XG5cbmZ1bmN0aW9uIGxvb3NlQ29tcGFyZUFycmF5cyhhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgbGV0IGVxdWFsID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGVxdWFsICYmIGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgZXF1YWwgPSBsb29zZUVxdWFsKGFbaV0sIGJbaV0pO1xuICB9XG4gIHJldHVybiBlcXVhbDtcbn1cbmZ1bmN0aW9uIGxvb3NlRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gIGxldCBhVmFsaWRUeXBlID0gaXNEYXRlKGEpO1xuICBsZXQgYlZhbGlkVHlwZSA9IGlzRGF0ZShiKTtcbiAgaWYgKGFWYWxpZFR5cGUgfHwgYlZhbGlkVHlwZSkge1xuICAgIHJldHVybiBhVmFsaWRUeXBlICYmIGJWYWxpZFR5cGUgPyBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCkgOiBmYWxzZTtcbiAgfVxuICBhVmFsaWRUeXBlID0gaXNTeW1ib2woYSk7XG4gIGJWYWxpZFR5cGUgPSBpc1N5bWJvbChiKTtcbiAgaWYgKGFWYWxpZFR5cGUgfHwgYlZhbGlkVHlwZSkge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9XG4gIGFWYWxpZFR5cGUgPSBpc0FycmF5KGEpO1xuICBiVmFsaWRUeXBlID0gaXNBcnJheShiKTtcbiAgaWYgKGFWYWxpZFR5cGUgfHwgYlZhbGlkVHlwZSkge1xuICAgIHJldHVybiBhVmFsaWRUeXBlICYmIGJWYWxpZFR5cGUgPyBsb29zZUNvbXBhcmVBcnJheXMoYSwgYikgOiBmYWxzZTtcbiAgfVxuICBhVmFsaWRUeXBlID0gaXNPYmplY3QoYSk7XG4gIGJWYWxpZFR5cGUgPSBpc09iamVjdChiKTtcbiAgaWYgKGFWYWxpZFR5cGUgfHwgYlZhbGlkVHlwZSkge1xuICAgIGlmICghYVZhbGlkVHlwZSB8fCAhYlZhbGlkVHlwZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhS2V5c0NvdW50ID0gT2JqZWN0LmtleXMoYSkubGVuZ3RoO1xuICAgIGNvbnN0IGJLZXlzQ291bnQgPSBPYmplY3Qua2V5cyhiKS5sZW5ndGg7XG4gICAgaWYgKGFLZXlzQ291bnQgIT09IGJLZXlzQ291bnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYSkge1xuICAgICAgY29uc3QgYUhhc0tleSA9IGEuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgIGNvbnN0IGJIYXNLZXkgPSBiLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICBpZiAoYUhhc0tleSAmJiAhYkhhc0tleSB8fCAhYUhhc0tleSAmJiBiSGFzS2V5IHx8ICFsb29zZUVxdWFsKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKTtcbn1cbmZ1bmN0aW9uIGxvb3NlSW5kZXhPZihhcnIsIHZhbCkge1xuICByZXR1cm4gYXJyLmZpbmRJbmRleCgoaXRlbSkgPT4gbG9vc2VFcXVhbChpdGVtLCB2YWwpKTtcbn1cblxuY29uc3QgaXNSZWYgPSAodmFsKSA9PiB7XG4gIHJldHVybiAhISh2YWwgJiYgdmFsW1wiX192X2lzUmVmXCJdID09PSB0cnVlKTtcbn07XG5jb25zdCB0b0Rpc3BsYXlTdHJpbmcgPSAodmFsKSA9PiB7XG4gIHJldHVybiBpc1N0cmluZyh2YWwpID8gdmFsIDogdmFsID09IG51bGwgPyBcIlwiIDogaXNBcnJheSh2YWwpIHx8IGlzT2JqZWN0KHZhbCkgJiYgKHZhbC50b1N0cmluZyA9PT0gb2JqZWN0VG9TdHJpbmcgfHwgIWlzRnVuY3Rpb24odmFsLnRvU3RyaW5nKSkgPyBpc1JlZih2YWwpID8gdG9EaXNwbGF5U3RyaW5nKHZhbC52YWx1ZSkgOiBKU09OLnN0cmluZ2lmeSh2YWwsIHJlcGxhY2VyLCAyKSA6IFN0cmluZyh2YWwpO1xufTtcbmNvbnN0IHJlcGxhY2VyID0gKF9rZXksIHZhbCkgPT4ge1xuICBpZiAoaXNSZWYodmFsKSkge1xuICAgIHJldHVybiByZXBsYWNlcihfa2V5LCB2YWwudmFsdWUpO1xuICB9IGVsc2UgaWYgKGlzTWFwKHZhbCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BNYXAoJHt2YWwuc2l6ZX0pYF06IFsuLi52YWwuZW50cmllcygpXS5yZWR1Y2UoXG4gICAgICAgIChlbnRyaWVzLCBba2V5LCB2YWwyXSwgaSkgPT4ge1xuICAgICAgICAgIGVudHJpZXNbc3RyaW5naWZ5U3ltYm9sKGtleSwgaSkgKyBcIiA9PlwiXSA9IHZhbDI7XG4gICAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfSBlbHNlIGlmIChpc1NldCh2YWwpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgU2V0KCR7dmFsLnNpemV9KWBdOiBbLi4udmFsLnZhbHVlcygpXS5tYXAoKHYpID0+IHN0cmluZ2lmeVN5bWJvbCh2KSlcbiAgICB9O1xuICB9IGVsc2UgaWYgKGlzU3ltYm9sKHZhbCkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5U3ltYm9sKHZhbCk7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSAmJiAhaXNBcnJheSh2YWwpICYmICFpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbCk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn07XG5jb25zdCBzdHJpbmdpZnlTeW1ib2wgPSAodiwgaSA9IFwiXCIpID0+IHtcbiAgdmFyIF9hO1xuICByZXR1cm4gKFxuICAgIC8vIFN5bWJvbC5kZXNjcmlwdGlvbiBpbiBlczIwMTkrIHNvIHdlIG5lZWQgdG8gY2FzdCBoZXJlIHRvIHBhc3NcbiAgICAvLyB0aGUgbGliOiBlczIwMTYgY2hlY2tcbiAgICBpc1N5bWJvbCh2KSA/IGBTeW1ib2woJHsoX2EgPSB2LmRlc2NyaXB0aW9uKSAhPSBudWxsID8gX2EgOiBpfSlgIDogdlxuICApO1xufTtcblxuZXhwb3J0cy5FTVBUWV9BUlIgPSBFTVBUWV9BUlI7XG5leHBvcnRzLkVNUFRZX09CSiA9IEVNUFRZX09CSjtcbmV4cG9ydHMuTk8gPSBOTztcbmV4cG9ydHMuTk9PUCA9IE5PT1A7XG5leHBvcnRzLlBhdGNoRmxhZ05hbWVzID0gUGF0Y2hGbGFnTmFtZXM7XG5leHBvcnRzLlBhdGNoRmxhZ3MgPSBQYXRjaEZsYWdzO1xuZXhwb3J0cy5TaGFwZUZsYWdzID0gU2hhcGVGbGFncztcbmV4cG9ydHMuU2xvdEZsYWdzID0gU2xvdEZsYWdzO1xuZXhwb3J0cy5jYW1lbGl6ZSA9IGNhbWVsaXplO1xuZXhwb3J0cy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcbmV4cG9ydHMuY3NzVmFyTmFtZUVzY2FwZVN5bWJvbHNSRSA9IGNzc1Zhck5hbWVFc2NhcGVTeW1ib2xzUkU7XG5leHBvcnRzLmRlZiA9IGRlZjtcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGVzY2FwZUh0bWw7XG5leHBvcnRzLmVzY2FwZUh0bWxDb21tZW50ID0gZXNjYXBlSHRtbENvbW1lbnQ7XG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbmV4cG9ydHMuZ2VuQ2FjaGVLZXkgPSBnZW5DYWNoZUtleTtcbmV4cG9ydHMuZ2VuUHJvcHNBY2Nlc3NFeHAgPSBnZW5Qcm9wc0FjY2Vzc0V4cDtcbmV4cG9ydHMuZ2VuZXJhdGVDb2RlRnJhbWUgPSBnZW5lcmF0ZUNvZGVGcmFtZTtcbmV4cG9ydHMuZ2V0RXNjYXBlZENzc1Zhck5hbWUgPSBnZXRFc2NhcGVkQ3NzVmFyTmFtZTtcbmV4cG9ydHMuZ2V0R2xvYmFsVGhpcyA9IGdldEdsb2JhbFRoaXM7XG5leHBvcnRzLmhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkO1xuZXhwb3J0cy5oYXNPd24gPSBoYXNPd247XG5leHBvcnRzLmh5cGhlbmF0ZSA9IGh5cGhlbmF0ZTtcbmV4cG9ydHMuaW5jbHVkZUJvb2xlYW5BdHRyID0gaW5jbHVkZUJvb2xlYW5BdHRyO1xuZXhwb3J0cy5pbnZva2VBcnJheUZucyA9IGludm9rZUFycmF5Rm5zO1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbmV4cG9ydHMuaXNCb29sZWFuQXR0ciA9IGlzQm9vbGVhbkF0dHI7XG5leHBvcnRzLmlzQnVpbHRJbkRpcmVjdGl2ZSA9IGlzQnVpbHRJbkRpcmVjdGl2ZTtcbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNHbG9iYWxseUFsbG93ZWQgPSBpc0dsb2JhbGx5QWxsb3dlZDtcbmV4cG9ydHMuaXNHbG9iYWxseVdoaXRlbGlzdGVkID0gaXNHbG9iYWxseVdoaXRlbGlzdGVkO1xuZXhwb3J0cy5pc0hUTUxUYWcgPSBpc0hUTUxUYWc7XG5leHBvcnRzLmlzSW50ZWdlcktleSA9IGlzSW50ZWdlcktleTtcbmV4cG9ydHMuaXNLbm93bkh0bWxBdHRyID0gaXNLbm93bkh0bWxBdHRyO1xuZXhwb3J0cy5pc0tub3duTWF0aE1MQXR0ciA9IGlzS25vd25NYXRoTUxBdHRyO1xuZXhwb3J0cy5pc0tub3duU3ZnQXR0ciA9IGlzS25vd25TdmdBdHRyO1xuZXhwb3J0cy5pc01hcCA9IGlzTWFwO1xuZXhwb3J0cy5pc01hdGhNTFRhZyA9IGlzTWF0aE1MVGFnO1xuZXhwb3J0cy5pc01vZGVsTGlzdGVuZXIgPSBpc01vZGVsTGlzdGVuZXI7XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5leHBvcnRzLmlzT24gPSBpc09uO1xuZXhwb3J0cy5pc1BsYWluT2JqZWN0ID0gaXNQbGFpbk9iamVjdDtcbmV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuZXhwb3J0cy5pc1JlbmRlcmFibGVBdHRyVmFsdWUgPSBpc1JlbmRlcmFibGVBdHRyVmFsdWU7XG5leHBvcnRzLmlzUmVzZXJ2ZWRQcm9wID0gaXNSZXNlcnZlZFByb3A7XG5leHBvcnRzLmlzU1NSU2FmZUF0dHJOYW1lID0gaXNTU1JTYWZlQXR0ck5hbWU7XG5leHBvcnRzLmlzU1ZHVGFnID0gaXNTVkdUYWc7XG5leHBvcnRzLmlzU2V0ID0gaXNTZXQ7XG5leHBvcnRzLmlzU3BlY2lhbEJvb2xlYW5BdHRyID0gaXNTcGVjaWFsQm9vbGVhbkF0dHI7XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5leHBvcnRzLmlzVm9pZFRhZyA9IGlzVm9pZFRhZztcbmV4cG9ydHMubG9vc2VFcXVhbCA9IGxvb3NlRXF1YWw7XG5leHBvcnRzLmxvb3NlSW5kZXhPZiA9IGxvb3NlSW5kZXhPZjtcbmV4cG9ydHMubG9vc2VUb051bWJlciA9IGxvb3NlVG9OdW1iZXI7XG5leHBvcnRzLm1ha2VNYXAgPSBtYWtlTWFwO1xuZXhwb3J0cy5ub3JtYWxpemVDbGFzcyA9IG5vcm1hbGl6ZUNsYXNzO1xuZXhwb3J0cy5ub3JtYWxpemVQcm9wcyA9IG5vcm1hbGl6ZVByb3BzO1xuZXhwb3J0cy5ub3JtYWxpemVTdHlsZSA9IG5vcm1hbGl6ZVN0eWxlO1xuZXhwb3J0cy5vYmplY3RUb1N0cmluZyA9IG9iamVjdFRvU3RyaW5nO1xuZXhwb3J0cy5wYXJzZVN0cmluZ1N0eWxlID0gcGFyc2VTdHJpbmdTdHlsZTtcbmV4cG9ydHMucHJvcHNUb0F0dHJNYXAgPSBwcm9wc1RvQXR0ck1hcDtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5zbG90RmxhZ3NUZXh0ID0gc2xvdEZsYWdzVGV4dDtcbmV4cG9ydHMuc3RyaW5naWZ5U3R5bGUgPSBzdHJpbmdpZnlTdHlsZTtcbmV4cG9ydHMudG9EaXNwbGF5U3RyaW5nID0gdG9EaXNwbGF5U3RyaW5nO1xuZXhwb3J0cy50b0hhbmRsZXJLZXkgPSB0b0hhbmRsZXJLZXk7XG5leHBvcnRzLnRvTnVtYmVyID0gdG9OdW1iZXI7XG5leHBvcnRzLnRvUmF3VHlwZSA9IHRvUmF3VHlwZTtcbmV4cG9ydHMudG9UeXBlU3RyaW5nID0gdG9UeXBlU3RyaW5nO1xuIl0sImZpbGUiOiJAdnVlL3NoYXJlZCJ9
