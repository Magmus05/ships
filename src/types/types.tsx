interface Iicons{
	large: string;
	medium: string;
	__typename: string;
}
interface IiconsType{
	default: string;
	__typename: string;
}
interface IiconsNation{
	small: string;
	medium: null;
	large: string;
	__typename: string;
}

interface Itype{
	name:string;
	title:string;
	icons:IiconsType;
	__typename: string;
}

interface Ination{
	name:string;
	title:string;
	color: string;
	icons:IiconsNation;
	__typename: string;
}

export interface Iships	{
	title: string;
	description: string;
	icons: Iicons;
	level: number;
	type:Itype;
	nation: Ination;
	__typename: string;
}