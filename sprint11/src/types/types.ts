export type TItem = {
	id: string;
	name: string;
	description: string;
	images: string[];
	price: number;
	favoriteCount: number;
}

export interface IProductInputs {
	name: string;
	description: string;
	price: number;
	images: string[];
	tags: string[];
}

export interface IProductFull extends IProductInputs {
	id: string;
	favoriteCount: number;
	createdAt: Date;
	updatedAt: Date;
	owner: {
		id: number;
		nickname: string;
	}
	isFavorite: boolean;
}

export type TProduct = IProductFull | IProductInputs;

export type TArticle = {
	id: string;
	title: string;
	description: string;
	images: string[];
	price: number;
	tags: string[];
	favoriteCount: number;
	createdAt: Date;
	author: {
		id: number;
		nickname: string;
	}
}
