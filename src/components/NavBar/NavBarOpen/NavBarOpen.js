import React from 'react'
import './NavBarOpen.module.css'
import { observer } from 'mobx-react-lite'

import Close from "../../../img/header/close.svg" 	

const NavBarOpen = observer(() => {


	return (
		<header className='styles.header'>
			<nav className='styles.container'>
				<div>
					<a href=''>Университет</a>
					<a href=''>Образование</a>
					<a href=''>Наука</a>
					<a href=''>Сотрудничество</a>
					<a href=''>Вне учебы</a>
				</div>
				<img src={Close} alt="" className='styles.logo'/>
			</nav>
		</header>
	)
})

export default NavBarOpen
