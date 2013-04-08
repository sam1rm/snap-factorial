findBlock = function() {
	var blocks = stage.globalBlocks
	var len = blocks.length
	for (var i = 0; i < len; i++) {
		if (blocks[i].spec == "factorial %'num'")
			alert("sup");
			return i;
	}
	return null;
}