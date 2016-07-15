requireJS2
=========================================================================================================================
配置
-------------------------------------------
###用法
    require.config({
      baseUrl: "/another/path",
      paths: {
          "some": "some/v1.0"
      },
      waitSeconds: 15
    });
###baseUrl
>所有模块的查找根路径
###paths
>path映射那些不直接放置于baseUrl下的模块名
###shim
为那些没有使用define()来声明依赖关系
        requirejs.config({
            'backbone': {
                 deps: ['underscore', 'jquery'],
                 exports: 'Backbone'
            }
        })
简写
        requirejs.config({
            shim: {
                'jquery.colorize': ['jquery'],
                'jquery.scroll': ['jquery'],
                'backbone.layoutmanager': ['backbone']
            }
        });
"shim"配置的重要注意事项:



