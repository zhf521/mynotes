---
title: Vue核心-slot插槽
order: 18
---

> 本文示例代码：[NoteDemoCode/Vue/18-Vue核心-slot插槽](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/18-Vue核心-slot插槽)

什么是插槽：子组件提供给父组件的占位符，用slot元素来表示，父组件可以在这个占位符里面填充各种模板代码（HTML结构、组件等），简而言之，就是子组件留个坑，父组件可以使用指定的内容来填坑

分类：默认插槽、具名插槽、作用域插槽  

## 1. 默认插槽

父组件中：
```vue
<Category>
    <!--我将用下面的内容来填坑-->
	<div>html结构1</div>
</Category>
```

子组件中：
```vue
<template>
	<div>
		<!-- 定义插槽，我是一个坑 -->
		<slot>插槽默认内容...</slot>
	</div>
</template>
```

案例：

`src/App.vue`
```vue
<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://th.bing.com/th/id/R.61124cb94372f970f23008fcfbf7373a?rik=evdzDUm5XRN1kw&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190714%2fd9047f685b61469e942ba1a1588f71e6.jpeg&ehk=i%2bBUrdSzG3ZPjDf%2bA3YLsz5oAW9x2a%2b6uV%2bFpUZRnFs%3d&risl=&pid=ImgRaw&r=0"
        alt="">
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: {
    Category
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《哈哈哈》']
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
```

`src/components/Category.vue`
```vue
<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--定义一个插槽 （挖个坑，等着组件的使用者进行填充）-->
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']
}
</script>
<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>
```

效果：

![Vue核心-slot插槽01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-slot插槽01.png)

## 2. 具名插槽

父组件指明放入子组件的哪个插槽 `slot="footer"`

还可以在一个 `<template>` 元素上使用 `v-slot:footer` 指令，并以 slot 的参数的形式提供其名称（可以简写为：`#footer`）

父组件中：
```vue
<Category>
	<template slot="center">
		<div>html结构1</div>
	</template>
	
	<template v-slot:footer>
	<template #footer>
		<div>html结构2</div>
	</template>
</Category>
```

子组件中：
```vue
<template>
	<div>
		<!-- 定义插槽,使用name来定义 -->
		<slot name="center">插槽默认内容...</slot>
		<slot name="footer">插槽默认内容...</slot>
	</div>
</template>
```

例：

`src/App.vue`
```vue
<template>
  <div class="container">
    <Category title="美食">
      <img slot="center"
        src="https://th.bing.com/th/id/R.61124cb94372f970f23008fcfbf7373a?rik=evdzDUm5XRN1kw&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190714%2fd9047f685b61469e942ba1a1588f71e6.jpeg&ehk=i%2bBUrdSzG3ZPjDf%2bA3YLsz5oAW9x2a%2b6uV%2bFpUZRnFs%3d&risl=&pid=ImgRaw&r=0"
        alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《哈哈哈》']
    }
  },
}
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>

```

`src/components/Category.vue`
```vue
<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>
```

效果：

![Vue核心-slot插槽02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-slot插槽02.png)

## 3. 作用域插槽

作用：能够传递数据，父组件可以接收子组件传递的参数

理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定 

如：games 数据在 Category 组件中，但使用数据所遍历出来的结构由 App 组件决定

父组件中：
```vue
<Category>
	<template scope="scopeData">
		<!-- 生成的是ul列表 -->
		<ul>
			<li v-for="g in scopeData.games" :key="g">{{g}}</li>
		</ul>
	</template>
</Category>

<Category>
	<template slot-scope="scopeData">
		<!-- 生成的是h4标题 -->
		<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
	</template>
</Category>
	
<Category>
	<template v-slot="scopeData">
		<!-- 生成的是h4标题 -->
		<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
	</template>
</Category>
```

`slot` 和 `slot-scope`目前已被`v-slot`指令代替

子组件中：

```vue
<template>
	<div>
		<slot :games="games"></slot>
	</div>
</template>
		
<script>
	export default {
		name:'Category',
		props:['title'],
		//数据在子组件自身
		data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽']
			}
		},
	}
</script>
```

==注意：关于样式，既可以写在父组件中，解析后放入子组件插槽；也可以放在子组件中，传给子组件再解析==

例：

`src/App.vue`

```vue
<template>
  <div class="container">
    <Category title="游戏">
      <template scope="zhf">
        <ul>
          <li v-for="(g, index) in zhf.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li style="color:red" v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template v-slot="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  }
}
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
```

`src/components/Category.vue`

```vue
<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games" msg="hello">我是默认的一些内容</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    }
  },
}
</script>
<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>
```

效果：

![Vue核心-slot插槽03.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-slot插槽03.png)

