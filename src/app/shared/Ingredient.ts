export class Ingredient {
	name: string = '';
	amount: number = 0;

	constructor(initName: string, initAmount: number) {
		this.name = initName;
		this.amount = initAmount;
	}
}