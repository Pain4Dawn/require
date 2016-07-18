({
    appDir: './',
    baseUrl: './js',
    dir: './dist',
    optimize:'none',
    modules: [
        {
            name: 'main'
        },{
            name:'apps/a/a'  
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        page: 'lib/page',
        alist:'apps/a/comps/list'
    }
})