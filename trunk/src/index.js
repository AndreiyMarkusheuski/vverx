import './styles/index.scss';
import './scripts';

new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

    menu: '#menu',
	navigation: true,
	showActiveTooltip: true,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',


    //css
    css3: true,
    scrollingSpeed: 700,
    scrollOverflow: true,

    easing: 'easeInOutCubic',
});

//move to https://github.com/Mobius1/Pageable

const main = () => {};

export default main