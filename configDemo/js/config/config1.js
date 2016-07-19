define(["module"],function(module){
	console.info("module"+module);
	console.info("moduleConfig"+module.config());
	console.info("moduleValue"+module.config().name);
});