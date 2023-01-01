export default function activeNav(){
	const url = window.location.href;
	const $nav = document.getElementById('js-nav');
	const $navItems = $nav.getElementsByTagName('a');
	for (let index = 0; index < $navItems.length; index++) {

		const $thisNavItem = $navItems[index];
		const pageKey = $thisNavItem.dataset.page;
		if(url.indexOf(pageKey) !== -1){
			$thisNavItem.className += ' is-active';
		}
	}
}