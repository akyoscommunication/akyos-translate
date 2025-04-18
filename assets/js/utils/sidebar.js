export class Sidebar {
	constructor() {
		this._sidebar = document.querySelector('.aky_sidebar')

		if (!this._sidebar) return

		this.init()
	}

	init() {
		let li = this._sidebar.querySelectorAll('li')

		li.forEach(function (e) {
			let link = e.querySelector('a')
			if (link.getAttribute('href') === window.location.href) {
				link.classList.add('active')
			}
		})
	}
}
