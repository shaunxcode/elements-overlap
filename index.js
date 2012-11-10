function getDims(elem) {
	return [
		elem.offsetTop,
		elem.offsetLeft,
		elem.offsetWidth,
		elem.offsetHeight
	];
}

//Derived from https://github.com/brandonaaron/jquery-overlaps
function checkOverlap(dims1, dims2) {
	var x1 = dims1[1], y1 = dims1[0],
		w1 = dims1[2], h1 = dims1[3],
		x2 = dims2[1], y2 = dims2[0],
		w2 = dims2[2], h2 = dims2[3];
	return !(y2 + h2 < y1 || y1 + h1 < y2 || x2 + w2 < x1 || x1 + w1 < x2);
}

function elementsOverlap(elem1, elem2) {
	return checkOverlap(getDims(elem1), getDims(elem2));
}

module.exports = elementsOverlap;