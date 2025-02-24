import React from 'react'
import './Lesson.module.css'
import { observer } from 'mobx-react-lite'

// svg image
import location from "../../img/Global/location.svg" 	
import tabler_school from "../../img/Global/tabler_school.svg" 	
import AiOutlineTeam from "../../img/Global/AiOutlineTeam.svg" 	


const Lesson = observer(() => {


	return (	
		<div className='styles.lesson'>
			<p className='styles.lesson__title'>Прикладная физическая культура (элективный модуль)</p>	
			<p><img src={location} alt="" className='styles.icon'/> Ленс, спортзал</p>	
			<p><img src={tabler_school} alt="" className='styles.icon'/> А.М. Семенов</p>	
			<p><img src={AiOutlineTeam} alt="" className='styles.icon'/> 5 групп</p>	
		</div>
	)
})

export default Lesson
