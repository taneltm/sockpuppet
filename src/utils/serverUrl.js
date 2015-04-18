define(function() {
	var result = "{proto}{serv}{port}";

	result = result.replace("{proto}", location.protocol + "//");
	result = result.replace("{serv}", location.hostname);
	result = result.replace("{port}", (location.port ? ':'+location.port: ''));

	return result;
});