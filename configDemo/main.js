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
		lib:"../lib",
		pathTest:"path/path"

	}
});
require(["baseUrls/baseUrl","lib/jquery-2.2.0.min","pathTest"],function(baseUrl,$,path){
	baseUrl.print();
	path.print();
	// console.info(require.toUrl(path));
	// console.info(require.toUrl($));
});