export default class Selection {
	constructor() {
		this._table = document.querySelector('table');
		this._checkboxes = this._table.querySelectorAll('input[type="checkbox"]');
		this._formTranslate = document.querySelector('.translate-selected-btn');
		this._selectAll = document.getElementById('select-all-btn');

		if (this._checkboxes.length > 0) {
			this._btnTranslate = this._formTranslate.querySelector('.btn');

			this.init();
		}
	}

	init() {
		this.selectAll();

		//on change any checkbox get all checkboxes checked
		this._checkboxes.forEach((checkbox) => {
			checkbox.addEventListener('change', () => {
				let cbs = [];

				this._checkboxes.forEach((cb) => {
					if (cb.checked) {
						cbs.push(cb);
					}
				});

				this.updateBtnTranslate(cbs);
				this.updateInputHidden(cbs)
			});
		});
	}

	updateBtnTranslate(cbs) {
		if (cbs.length > 0) {
			this._btnTranslate.removeAttribute('disabled')
		} else {
			this._btnTranslate.setAttribute('disabled', 'disabled')
		}
	}

	updateInputHidden(cbs) {
		let inputHidden = this._formTranslate.querySelector('[name="original"]')

		let clonedHidden = this._formTranslate.querySelectorAll('[name="original[]"]')

		clonedHidden.forEach((cloned) => {
			cloned.remove();
		})

		cbs.forEach((cb) => {
			let clone = null;
			let value = null;
			let tr = cb.parentNode.parentNode;

			value = tr.getAttribute('data-word');

			clone = inputHidden.cloneNode(true);

			clone.setAttribute('name', 'original[]')
			clone.value = value;
			this._formTranslate.appendChild(clone)
		})
	}

	selectAll() {
		this._selectAll.addEventListener('click', () => {
			//check all checkboxes and trigger change event
			this._checkboxes.forEach((checkbox) => {
				checkbox.checked = true;
				checkbox.dispatchEvent(new Event('change'));
			})
		})
	}
}
