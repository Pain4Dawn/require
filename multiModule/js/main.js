// Require.js allows us to configure shortcut alias
require.config({
	paths: {
		page: 'lib/page',
		a:'apps/a/a',
		b:'apps/b/b',
		alist:'apps/a/comps/list'
	}
});

require([
	'page'
], function( page ) {
	page.base("/requireSoc");
	page("/a",function(){
		require(['a'],function(){
			console.info("a end");
		});
	});
	page("/b",function(){
		require(['b'],function(){
			console.info("b end");
		});
	});
	page();
});