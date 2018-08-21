### 从Redux 迁移到React 16.3的Context Api 实践(master==>dev)
1. contexts/ReminderContext.js: 存放数据，对数据进行增删,并把数据提供给其子组件
2. src/index.js: 子组件消费数据，通过函数返回的形式，所传的参数为整个源数据对象,并通过props将数据和事件回调传给它的子组件`/components/App.js`
3. App.js: 渲染数据