import React from 'react'
import styles from './TextField.module.css'

import { observer } from 'mobx-react-lite'

const TextField = observer(() => {


	return (
		<div className={`${styles.input__wrapper}`}>
			<img className={`${styles.image}`} src="" alt="serch" />
			<input type="text" className={`${styles.input}`}/>
		</div>
	)
})

export default TextField
