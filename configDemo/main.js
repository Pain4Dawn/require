require.config({
	urlArgs:"v10",
	/**
	1.js baseurl无效可以加参数。
	2.js baseurl有效 默认加载requirejs路径 如果有data－main的默认为data-main地址
	*/
	baseUrl:"js",
	/**
	path:
		1.path相对于baseUrl 除非／ http
		2.path可以是文件夹和文件。后面自动加js
		3.在require.toUrl找到对应的路径
	*/
	paths:{
		pathTest:"path/path",
		"jquery":"../lib/jquery-2.2.0.min",
		"exportsTest":"shim/exports",
		"config1":"config/config1"
	},
	/**
	shim:
		为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。
		shim 只是配置 必须引用
		exports:当不是define定义的 使用

		exportsTest:{
			exports:"hello"
		}
		多函数
		exportsTest:{
			init: function() {
		        return {
		          hello: hello,
		          hello2: hello2
		        }
		    }
		}
	*/

	shim:{ 
		"jquery":{ 
			deps:['shim/shim','map/module'], 
		},
		"exportsTest":{
			exports:"hello"
		}
	},
	/**
		map:
			对于给定的模块前缀，使用一个不同的模块ID来加载该模块。
			只能拦截具体文件不能拦截文件夹（如map）
	*/
	map:{
		"*":{
			"foo":"map/foo/foo1.1"
		},
		"map/oldmodule":{
			"foo":"map/foo/foo1.2"
		}
	},
	/**
		config
			模块加载的对应参数
	*/
	config:{
		"config1":{
			"name":"jude"
		},
		"config/config2":{
			"name":"hello"
		}
	},
	/**
		deps:
			指定要加载的一个依赖数组。当将require设置为一个config object在加载require.js之前使用时很有用。一旦require.js被定义，这些依赖就已加载。
	*/
	deps:["jquery"],
	/**
		waitSeconds:
			在放弃加载一个脚本之前等待的秒数。设为0禁用等待超时。默认为7秒。
	*/
	waitSeconds:0

});

require(["baseUrls/baseUrl","pathTest","exportsTest"],function(baseUrl,path,exportsTest){
	baseUrl.print();
	path.print();

	exportsTest();
	require(["map/oldmodule"],function(){
		console.info("oldmodule end");
	});
	require(["map/module"],function(){
		console.info("module end");
	});

	require(["config1","config/config2"],function(config1,config2){
		console.info("config end");
	});
});