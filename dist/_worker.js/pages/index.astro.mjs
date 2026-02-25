globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, g as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, n as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CMfCNTxm.mjs';
/* empty css                                 */
import { a as reactExports } from '../chunks/_@astro-renderers_B8EeqeW1.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_B8EeqeW1.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Convert hex to text and text to hex."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/var/home/pmustafi/code/hex-to-text/src/layouts/Layout.astro", void 0);

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

function Home() {
  const [hex, setHex] = reactExports.useState("");
  const [text, setText] = reactExports.useState("");
  const hexToText = (hexInput) => {
    const cleanHex = hexInput.toString().trim().replace(/\s+/g, "");
    let str = "";
    for (let i = 0; i < cleanHex.length; i += 2) {
      const hexChar = cleanHex.slice(i, i + 2);
      if (hexChar.length === 2) {
        str += String.fromCharCode(parseInt(hexChar, 16));
      }
    }
    return str;
  };
  const textToHex = (strInput) => {
    let hexOutput = "";
    for (let i = 0; i < strInput.length; i++) {
      hexOutput += " " + strInput.charCodeAt(i).toString(16);
    }
    return hexOutput;
  };
  const handleConvert = () => {
    if (hex && text) {
      alert("Please enter only one value");
      setHex("");
      setText("");
    } else if (text) {
      setHex(textToHex(text));
    } else if (hex) {
      setText(hexToText(hex));
    } else {
      alert("Please enter a value");
    }
  };
  const handleClear = () => {
    if (!hex && !text) {
      alert("Nothing to clear");
    } else {
      setHex("");
      setText("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-center items-center justify-center p-10 mt-5 tracking-[20px] text-gray-500 text-3xl lg:text-4xl font-bold", children: [
      "Hex ",
      "<",
      "--",
      ">",
      " Text"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "text-gray-300 body-font", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container px-5 py-14 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-wrap -my-10 justify-center whitespace-pre-line", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-bold text-lg text-white", htmlFor: "hex", children: "Hex :- " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: "hex",
          cols: 40,
          rows: 5,
          placeholder: "Hex Here",
          className: "border rounded-lg py-3 px-3 mt-2 bg-black border-indigo-600 placeholder-white-500 text-white",
          value: hex,
          onChange: (e) => setHex(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-bold text-lg text-white", htmlFor: "text", children: "Text :- " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: "text",
          cols: 40,
          rows: 5,
          placeholder: "Text Here",
          className: "border rounded-lg py-3 px-3 mt-2 bg-black border-indigo-600 placeholder-white-500 text-white",
          value: text,
          onChange: (e) => setText(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap mx-auto justify-center transform transition-all mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleConvert,
            className: "border border-indigo-600 hover:bg-indigo-600 bg-black text-white rounded-lg font-semibold p-8 m-5 text-xl",
            children: "Convert"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleClear,
            className: "border border-indigo-600 hover:bg-indigo-600 bg-black text-white rounded-lg font-semibold p-8 m-5 text-xl",
            children: "Clear All"
          }
        )
      ] })
    ] }) }) }) })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hex To Text Converter" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-black min-h-screen"> ${renderComponent($$result2, "Home", Home, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/var/home/pmustafi/code/hex-to-text/src/components/Home", "client:component-export": "default" })} </main> ` })}`;
}, "/var/home/pmustafi/code/hex-to-text/src/pages/index.astro", void 0);

const $$file = "/var/home/pmustafi/code/hex-to-text/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
