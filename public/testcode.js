findBlock = function() {
	var blocks = stage.globalBlocks
	var len = blocks.length
	for (var i = 0; i < len; i++) {
		if (blocks[i].spec == "factorial of %'num'")
			return i;
	}
	return null;
}