

## postcss-loader
在 webpack 的中，用来解析匹配的特定的文件，按照一定的规则解析该文件。

## PostCSS
PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。

**猜测 PostCSS 原理

source css => ast => generate code 在这个过程中，根据插件进行转换

## postcss.config.js
postcss.config.js 是 postcss-loader 的配置文件。

## postcss-cssnext

postcss-preset-env is a PostCSS plugin that helps you to use the latest CSS syntax today. It transforms new CSS specs into more compatible CSS so you don't need to wait for browser support.

## cssnext syntax

### automatic vendor prefixes

根据指定的浏览器版本，添加某些样式前缀

### custom properties & var()

自定义属性的当前转换旨在提供一种面向未来的方式，使用本地 CSS 自定义属性提供的功能的受限于 :root 选择器。

```css

:root {
  --mainColor: red;
}

a {
  color: var(--mainColor);
}

```


**Note:The definitions are limited to :root selector.**

### custom properties set & @apply

允许您在命名的自定义属性中存储一组属性，然后在其他样式规则中引用它们。

```css

:root {
  --tag-primary: {
    color: '#fff';
    background-color: yellowgreen;
  }
}

.tag {
  &.is-primary {
    @apply --tag-primary;
  }
}
```

**Note: the definitions are limited;
**Note to: root selector.**;


### reduced calc()

允许您通过优化先前解析的 var() 引用来安全地将 calc 与自定义属性一起使用。


```css
:root {
  --fontSize: 1rem;
}

h1 {
  font-size: calc(var(--fontSize) * 2);
}
```

### custom media queries

一种进行语义媒体查询的好方法。

```css
@custom-media --small-viewport (max-width: 30em);

/* check out media queries ranges for a better syntax ! */

@media (--small-viewport) {
  /* styles for small viewport */
}
```

### media queries ranges
允许用 <= & >= 替换 min-/max- （语法更容易阅读）。

```css

@media (width >= 500px) and (width <= 1200px) {
  /* your styles */
}

/* or coupled with custom media queries */
@custom-media --only-medium-screen (width >= 500px) and (width <= 1200px);

@media (--only-medium-screen) {
  /* your styles */
}
```

### custom selectors

允许您创建自定义选择器。

```css
@custom-selector :--test .test1,.test2;

:--test {
  color: '#fff';
}

```

### nesting

允许你使用选择器嵌套

```css
a {
  /* direct nesting (& MUST be the first part of selector) */
  & span {
    color: white;
  }

  /* @nest rule (for complex nesting) */
  @nest span & {
    color: blue;
  }

  /* media query automatic nesting */
  @media (min-width: 30em) {
    color: yellow;
  }
}

```

### image-set() function

允许您为用户设备的每种分辨率设置不同的图像

```css
.foo {
  background-image:
    image-set(
      url(img/test.png) 1x,
      url(img/test-2x.png) 2x,
      url(my-img-print.png) 600dpi
    );
}

```
