export class Recipe {
	public name: string;
	public description: string;
	public imagePath: string;

	constructor(initName: string , initDescription: string , initImagePath: string) {
		this.name = initName;
		this.description = initDescription;
		this.imagePath = initImagePath;
	}
}