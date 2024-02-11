export const Animate = (
	animationType: string,
	delay = 1000,
	transition = 'ease-in'
	// duration = 1500
) => {
	const animationObj = {
		'data-aos': animationType,
		'data-aos-delay': delay,
		'data-aos-easing': transition,
		'data-aos-duration': 1000,
	};
	return animationObj;
};