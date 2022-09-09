# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```javascript
import {Button, Tabs, Tab , Switch, Dialog , openDialog } from "yuyuan-ui-one"
```
为了样式的正常显示，需要引入一下css文件：
```javascript
import 'yuyuan-ui-one/dist/lib/style.css'
```
然后就可以参考下面的组件部分的代码，使用我提供的组件了。

## Vue 单文件组件

代码示例：

```html
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import { Switch, Button, Tabs, Dialog, openDialog, Tab } from "yuyuan-ui-one";
import "yuyuan-ui-one/dist/lib/style.css";
export default {
  components: {Button}
}
</script>
```

## 注意事项
可以按照下面章节中组件的示范去使用，组件的示范代码中的引入路径需要更改
```
import { Switch, Button, Tabs, Dialog, openDialog, Tab } from "yuyuan-ui-one";
import "yuyuan-ui-one/dist/lib/style.css";
```

有任何问题，可以在[我的GitHub](https://github.com/YuyuanW/yuyuan-ui)上留言