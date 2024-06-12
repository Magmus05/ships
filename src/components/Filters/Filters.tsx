import React from 'react'
import "./Filters.css"
import Filter from '../Filter/Filter'
import {romanLevel} from '../../utils/Variables'
interface FiltersProps {
	shipClass: string[];
	shipNation: string[];
	shiplevel: number[];
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void ;
	handleReset: (e: React.FormEvent<HTMLFormElement>) => void ;
	filtersClass: string[];
	filtersNation: string[];
	filtersLevel: number[];
}

function Filters ({shipClass, shipNation, shiplevel, handleChange, handleReset, filtersClass, filtersNation, filtersLevel} : FiltersProps) {

	return (
		<section className='filters' >
		<form className='filters__form' onSubmit={(e)=>handleReset(e)}>
			<div className='filters__form-list'>
				<fieldset  className='filters__form-list-item'>
					<p className='filters__form-list-variant'> Сортировать по классу:</p>
					<ul className='filters__form-list-filters'>
					{shipClass.map((title, i) => <Filter handleChange={handleChange} filtersClass={filtersClass} key={i} title={title} titleLevel={100} name='class'/> )}
					</ul>
					
				</fieldset>
				<fieldset  className='filters__form-list-item width-nation'>
				<p className='filters__form-list-variant'> Сортировать по нации:</p>
				<ul className='filters__form-list-filters'>
					{shipNation.map((title, i) => <Filter handleChange={handleChange} filtersNation={filtersNation} key={i} title={title} titleLevel={100} name='nation' /> )}
					</ul>
				</fieldset>
				<fieldset  className='filters__form-list-item '>
				<p className='filters__form-list-variant'> Сортировать по уровню:</p>
				<ul className='filters__form-list-filters width-level'>
					{shiplevel.map((title, i) => <Filter handleChange={handleChange} filtersLevel={filtersLevel} key={i} title={romanLevel[title-1]} titleLevel={title} name='level'/> )}
					</ul>
				</fieldset>
			</div>
		<button type="submit" className='filters__form-reset'> Сбросить всё</button>

		</form>
		</section>
	)
}

export default Filters