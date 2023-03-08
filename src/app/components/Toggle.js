"use client"
import { useState } from "react"

const Toggle = ({setToggleHandler}) => {
	let [toggle, setToggle] =useState(false)
	const onClickHandler = (e) => {
		setToggle(()=> {
			setToggleHandler(e.target.innerHTML)
			
		})
	}
	return(
		<>
		<div>
			<button onClick={onClickHandler}>gender</button>
			<button onClick={onClickHandler}>religion</button>
			<button onClick={onClickHandler}>sexuality</button>
		</div>
		</>
	)
}

export default Toggle