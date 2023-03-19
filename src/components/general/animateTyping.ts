const text = 'Demon Slayer Movie';
let index = 0;
let

export function animateTyping(node) {
	if (index < text.length) {
		node.textContent += text.charAt(index);
		index++;
		setTimeout(animateTyping, 500);
	} else {
		setTimeout(eraseTyping, 1000);
	}

	return () => {
		index = 0;
		node.textContent = '';
		setTimeout(animateTyping, 1000);
	};
}

function eraseTyping() {
	if (index > 0) {
		span.textContent = text.substring(0, index - 1);
		index--;
		setTimeout(eraseTyping, 500);
	} else {
		setTimeout(animateTyping, 1000);
	}
}
