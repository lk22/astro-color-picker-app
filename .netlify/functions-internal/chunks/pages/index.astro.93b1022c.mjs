import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, _ as __astro_tag_component__, f as renderComponent, m as maybeRenderHead } from '../astro.9840b353.mjs';
import 'html-escaper';
/* empty css                           */import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/leoknudsen/projects/nodejs/astro-color-picker-app/src/layouts/Layout.astro");

const initialColors = {
  current: '',
  selected: [],
  availableColors: [
    {hex: '#FF0000', name: 'Red'},
    {hex: '#00FF00', name: 'Green'},
    {hex: '#0000FF', name: 'Blue'},
    {hex: '#FFFF00', name: 'Yellow'},
    {hex: '#FF00FF', name: 'Magenta'},
    {hex: '#00FFFF', name: 'Cyan'},
    {hex: '#000000', name: 'Black'},
    {hex: '#FFFFFF', name: 'White'},
  ],
  isCopied: false
};

const colors = atom(initialColors);

const selectColor = (color) => {
  colors.set({ ...colors.get(), current: color });
  colors.set({ ...colors.get(), selected: [...colors.get() .selected, color]});
};

const copyColor = () => {
  colors.set({ ...colors.get(), isCopied: true });
};

const getAvailableColors = () => {
  return colors.get().availableColors
};

const getCurrentColor = () => {
  return colors.get().current
};

function ColorPicker() {
  const availableColors = getAvailableColors();
  getCurrentColor();
  useStore(colors);
  const styles = {
    row: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    },
    color: {
      height: "100px",
      width: "18%",
      flex: "0 0 18%",
      cursor: "pointer",
      borderRadius: "5px"
    }
  };
  const handleSelectColor = (color) => {
    selectColor(color);
    navigator.clipboard.writeText(color).then(() => {
      copyColor();
    });
  };
  const renderColors = () => {
    return availableColors.map((color) => {
      return /* @__PURE__ */ jsx("div", {
        className: "col-3 color",
        style: {
          ...styles.color,
          backgroundColor: color.hex
        },
        onClick: () => handleSelectColor(color.hex)
      }, color.color);
    });
  };
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("div", {
      className: "row",
      style: styles.row,
      children: renderColors()
    })
  });
}
__astro_tag_component__(ColorPicker, "@astrojs/react");

function SelectedColor() {
  const selectedColor = useStore(colors).current;
  const styles = {
    currentColor: {
      height: "200px",
      width: "100%",
      borderRadius: "5px",
      backgroundColor: selectedColor,
      transition: "background-color 0.25s ease-in-out"
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("h3", {
      children: ["Selected color: ", selectedColor]
    }), /* @__PURE__ */ jsx("div", {
      style: styles.currentColor
    })]
  });
}
__astro_tag_component__(SelectedColor, "@astrojs/react");

function SelectedColorList() {
  const selectedColors = useStore(colors).selected;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("h3", {
      children: "Selected colors"
    }), selectedColors.map((color) => /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("p", {
        children: color
      })
    }, color))]
  });
}
__astro_tag_component__(SelectedColorList, "@astrojs/react");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
		<h1 class="astro-J7PV25F6"><span class="text-gradient astro-J7PV25F6">Color Selector</span></h1>
		<p class="instructions astro-J7PV25F6">
			Select a color below to copy to clipboard and use whereever you need it.
		</p>
		${renderComponent($$result2, "ColorPicker", ColorPicker, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/leoknudsen/projects/nodejs/astro-color-picker-app/src/components/React/ColorPicker.jsx", "client:component-export": "default", "class": "astro-J7PV25F6" })}
		${renderComponent($$result2, "SelectedColor", SelectedColor, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/leoknudsen/projects/nodejs/astro-color-picker-app/src/components/React/SelectedColor.jsx", "client:component-export": "default", "class": "astro-J7PV25F6" })}
		${renderComponent($$result2, "SelectedColorList", SelectedColorList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/leoknudsen/projects/nodejs/astro-color-picker-app/src/components/React/SelectedColorList.jsx", "client:component-export": "default", "class": "astro-J7PV25F6" })}
	</main>
` })}`;
}, "/Users/leoknudsen/projects/nodejs/astro-color-picker-app/src/pages/index.astro");

const $$file = "/Users/leoknudsen/projects/nodejs/astro-color-picker-app/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
