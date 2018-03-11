# Vue component support in Atom

Adds syntax highlighting and snippets to Vue component files in Atom.

Originally [converted](http://flight-manual.atom.io/hacking-atom/sections/converting-from-textmate/) from [vuejs/vue-syntax-highlight](https://github.com/vuejs/vue-syntax-highlight/tree/479672799b4162996e3c3c7e09583fb6d98e1e6c).

## Working with SCSS/Sass

Since vue-loader redirects `language=x` to loader `style!css!x` and sass-loader is using **SCSS** as default, you need to remap them in *webpack.config.js*:

```
vue: {
  loaders: {
    sass: 'style!css!sass?indentedSyntax',
    scss: 'style!css!sass'
  }
}
```

This is so that this package can support both old Sass and new SCSS. Refer to [hedefalk/atom-vue#5](https://github.com/hedefalk/atom-vue/issues/5) and [the official solution](https://github.com/vuejs-templates/webpack/blob/45c5ee5531a6f649c21aa2ec05472fb459247927/template/build/utils.js#L37-L38) for more info.

## Usage

Just press `TAB` or `ENTER` to unfold a snippet

### Single file template
```html
template          <!--Single file component template-->
```

### HTML snippets
```html
router-view       <!--Vuejs router-view component-->
router-link       <!--Vuejs router-link component with named route-->
component         <!--Include component in HTML-->
i18n              <!--Include internationalization component-->
```
### HTML tags
```html
v-for             <!--Vuejs binding for list rendering-->
v-if              <!--Vuejs binding for if conditional rendering-->
v-else-if         <!--Vuejs binding for else if rendering-->
v-else            <!--Vuejs binding for else conditional rendering-->
v-show            <!--Vuejs binding for show conditional rendering-->
v-model           <!--Vuejs binding for model binding-->
```

### Javascript
```javascript
beforeCreate      // Vuejs instance lifecycle hook for beforeCreate
created           // Vuejs instance lifecycle hook for created
beforeMount       // Vuejs instance lifecycle hook for beforeMount
mounted           // Vuejs instance lifecycle hook for mounted
beforeUpdate      // Vuejs instance lifecycle hook for beforeUpdate
updated           // Vuejs instance lifecycle hook for updated
beforeUpdate      // Vuejs instance lifecycle hook for beforeUpdate
updated           // Vuejs instance lifecycle hook for updated
beforeDestroy     // Vuejs instance lifecycle hook for beforeDestroy
destroyed         // Vuejs instance lifecycle hook for destroyed
vwatch            // Vuejs way to watch instance properties
methods           // Vuejs methods event handlers
components        // Use it when you want to add child components to parent component.
props             // Vuejs way to pass data to child components
vprops            // Vuejs way to pass data to child components with validation
vcomputed         // Vuejs computed property
```

### Vuex
```javascript
vstore            // Vuex template for a complete store with state,getters,actions and mutations
vmut              // Vuex mutation snippet
vact              // Vuex action snippet
vget              // Vuex getter snippet
vtype             // Vuex constant type snipppet
```

## 巨人的肩膀

- [language-vue](https://atom.io/packages/language-vue)
- [vuejs2-snippets](https://atom.io/packages/vuejs2-snippets)
- [vue2-autocomplete](https://atom.io/packages/vue2-autocomplete)
