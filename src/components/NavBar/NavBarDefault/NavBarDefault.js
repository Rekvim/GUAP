import React from 'react'
import styles from './NavBarDefault.module.css'

import { observer } from 'mobx-react-lite'

// svg image
import LogoDesktop from "../../../img/Logo/Description=no-Platform=desktop.svg" 	
import PrimeSitemap from "../../../img/header/Prime_sitemap.svg" 	
import Search from "../../../img/header/Search.svg" 	
import OutlineMenu from "../../../img/header/OutlineMenu.svg" 	

const NavBarDefault = observer(() => {
	return (	
		<header className={styles.header}>
			<nav className={`container ${styles.menu}`}>
				<div className={`${styles.leftBar}`}>
					<img src={LogoDesktop} alt="Logo" className={`${styles.logo}`}/> 
				</div>
				<div className={`${styles.rightBar}`}>
					<img src={PrimeSitemap} alt="PrimeSitemap" className={`${styles.icon}`}/>
					<img src={Search} alt="Search" className={styles.icon}/>
					<img src={OutlineMenu} alt="OutlineMenu" className={styles.icon}/>
				</div>
			</nav>
		</header>
	)
})

export default NavBarDefault
