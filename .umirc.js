export default {
    //     routes: [
    //       { exact: true, path: '/', component: 'index' },
    //       { exact: true, path: '/home', component: 'home' },
    //       { exact: true, path: '/about', component: 'about' },
    //     ],
    // title: 'My Umi',
    // 使用Helmet插件 要将配置文件的title改为true
    title: false,
    locale:{
        default:'zh-CN',
        // 默认情况下，当前语言环境的识别按照：localStorage 中 umi_locale 值 > 浏览器检测 > default 设置的默认语言 > 中文
        baseNavigator:false
    }
}
// 如果手动配置了路由那么 umi默认的约定则失效