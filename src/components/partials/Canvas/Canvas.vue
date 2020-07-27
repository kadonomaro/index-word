<template>
	<canvas ref="canvas" id="canvas"></canvas>
</template>

<script>
import { words } from './words';

export default {
	name: 'AppCanvas',
	data() {
		return {
			context: ''
		}
	},
	mounted() {
		this.initialSettings();
		this.drawText({
			font: 'bold 16px Roboto',
			ASCIICharRange: [65, 122],
			cell: {
				width: 20,
				height: 20
			},
			colors: ['#9b9b9b','#828282', '#696969', '#505050'],
			delay: window.innerWidth <= 767 ? 1000 : 500
		})
	},
	methods: {
		initialSettings() {
			this.context = this.$refs.canvas.getContext('2d')
			this.$refs.canvas.width = document.body.clientWidth;
			this.$refs.canvas.height = 450;
		},

		drawText({font, ASCIICharRange, colors, cell= {width: 1, height: 1}, delay}) {
			const maxCount = words.length;
			let counter = 0;
			const positions = [];

			this.context.font = font;

			const interval = setInterval(() => {
					const position = {
							x: Math.ceil(this.getRandomRange(0, this.$refs.canvas.width) / cell.width) * cell.width,
							y: Math.ceil(this.getRandomRange(0, this.$refs.canvas.height) / cell.height) * cell.height,
							width: words[counter].length
					};

					if (!positions.some(pos => pos.x === position.x && pos.y === position.y)) {
							this.context.fillStyle = colors[this.getRandomRange(0, colors.length - 1)];
							this.context.fillText(words[counter], position.x, position.y);
							console.log(position.width);
							counter++;
					}
					positions.push(position);

					if (counter >= maxCount) {
							clearInterval(interval);
					}
			}, delay);
		},

		getRandomRange(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},

		getRandomSymbol(start, end) {
			return String.fromCharCode(this.getRandomRange(start, end));
		}
	}
}
</script>
