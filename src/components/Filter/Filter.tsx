import React from 'react'
import "./Filter.css"
type FiltersProps = {
	title: string;
	name: string ;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void ;
	filtersClass?: string[];
	filtersNation?: string[];
	filtersLevel?: number[] ;
	titleLevel: number;
}

function Filter({title, name, handleChange, filtersLevel, filtersNation ,filtersClass, titleLevel}:FiltersProps) {


	return (
		<label className='form-filters__list-block'>
					<span className='form-filters__list-title'>{title}</span> 
					{/* <img className='form-filters__list-image' src="" alt="" /> */}
						<input name={name} onChange={(e)=>{
							handleChange(e);
				
						}} value={title} className='form-filters__list-input' type='checkbox' checked={filtersClass?.includes(title) || filtersNation?.includes(title) || filtersLevel?.includes(titleLevel) ? true: false} ></input>
						
					</label>
	)
}

export default Filter