##  `踩坑之路`

### `alias` 失效

- 如果是根路径就失效，`vue2.0`版本就失效，`vue2.5`版本就可以

  ```js
  // index.js
  {
        path: '/',
        name: 'Hello',
        component: Hello,
        alias: 'home1'
  },
  // App.vue
  <router-link to="/home1">home1</router-link>
  ```

  