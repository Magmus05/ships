import React from 'react'
import "./Filter.css"
interface FiltersProps {
	title: string | number;
	name: string ;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void ;
}
function Filter({title, name, handleChange}:FiltersProps) {
	return (
		<label className='form-filters__list-block'>
					<span className='form-filters__list-title'>{title}</span> 
					<img className='form-filters__list-image' src="" alt="" />
						<input name={name} onChange={handleChange} value={title} className='form-filters__list-input' type='checkbox'></input>
					</label>
	)
}

export default Filter