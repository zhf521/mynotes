---
title: Vue核心-slot插槽
order: 18
---

> 本文示例代码：[NoteDemoCode/Vue/18-Vue核心-slot插槽](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/18-Vue核心-slot插槽)

作用：`<slot>` 插槽让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于 `父组件 ===> 子组件`  

分类：默认插槽、具名插槽、作用域插槽  

## 1. 默认插槽

父组件中：
```vue
<Category>
	<div>html结构1</div>
</Category>
```

子组件中：
```vue
<template>
	<div>
		<!-- 定义插槽 -->
		<slot>插槽默认内容...</slot>
	</div>
</template>
```

案例：

`src/App.vue`
```vue
<template>
	<div class="container">
		<Category title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category>

		<Category title="游戏" >
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
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
		name:'App',
		components:{ Category },
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
	}
</script>

<style scoped>.container{display: flex;justify-content: space-around;}</style>
```

`src/components/Category.vue`
```vue
<template>
	<div class="category">
		<h3>{{ title }}分类</h3>
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title']
	}
</script>

<style scoped>
	.category {background-color: skyblue;width: 200px;height: 300px;}
	h3 {text-align: center;background-color: orange;}
	video {width: 100%;}
	img {width: 100%;}
</style>
```

效果：

## 2. 具名插槽

父组件指明放入子组件的哪个插槽 `slot="footer"`，如果是 `template` 可以写成 `v-slot:footer`

父组件中：
```vue
<Category>
	<template slot="center">
		<div>html结构1</div>
	</template>
	
	<template v-slot:footer>
		<div>html结构2</div>
	</template>
</Category>
```

子组件中：
```vue
<template>
	<div>
		<!-- 定义插槽 -->
		<slot name="center">插槽默认内容...</slot>
		<slot name="footer">插槽默认内容...</slot>
	</div>
</template>
```

案例：

`src/App.vue`
```vue
<template>
	<div class="container">
		<Category title="美食" >
			<img slot="conter" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<a slot="footer" href="http://www.atguigu.com">更多美食</a>
		</Category>

		<Category title="游戏" >
			<ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
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
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
	}
</script>

<style scoped>
	.container,.foot{display: flex;justify-content: space-around;}
	h4{text-align: center;}
</style>
```

`src/components/Category.vue`
```vue
<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
		<slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title']
	}
</script>

<style scoped>
	.category{background-color: skyblue;width: 200px;height: 300px;}
	h3{text-align: center;background-color: orange;}
	video{width: 100%;}
	img{width: 100%;}
</style>
```

## 3. 作用域插槽

scope 用于父组件往子组件插槽放的 html 结构接收子组件的数据  

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
```

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

案例：

`src/App.vue`
```vue
<template>
	<div class="container">

		<Category title="游戏">
			<template scope="atguigu">
				<ul>
					<li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<template scope="{games}">
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{ Category },
	}
</script>

<style scoped>
	.container,.foot{display: flex;justify-content: space-around;}
	h4{text-align: center;}
</style>
```

`src/components/Category.vue`
```vue
<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot :games="games" msg="hello">我是默认的一些内容</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title'],
		data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			}
		},
	}
</script>

<style scoped>
	.category{background-color: skyblue;width: 200px;height: 300px;}
	h3{text-align: center;background-color: orange;}
	video{width: 100%;}
  img{width: 100%;}
</style>
```
