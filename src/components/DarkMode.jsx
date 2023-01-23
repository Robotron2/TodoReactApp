import React from "react"

import { useState } from "react"

const DarkMode = () => {
	const [checkLightTheme, setCheckLightTheme] = useState(true)

	const body = document.body
	console.log(body)

	let clickedClass = "clicked"
	let lightTheme = "light"
	let darkTheme = "dark"
	let theme

	if (localStorage) {
		theme = localStorage.getItem("theme")
	}

	if (theme === lightTheme || theme === darkTheme) {
		body.classList.add(theme)
	} else {
		body.classList.add(lightTheme)
	}

	const switchTheme = (e) => {
		if (theme === darkTheme) {
			body.classList.replace(darkTheme, lightTheme)
			e.target.classList.remove(clickedClass)
			localStorage.setItem("theme", "light")
			theme = lightTheme
			setCheckLightTheme(true)
		} else {
			body.classList.replace(lightTheme, darkTheme)
			e.target.classList.add(clickedClass)
			localStorage.setItem("theme", "dark")
			theme = darkTheme
			setCheckLightTheme(false)
		}
	}

	return (
		<div className={theme === "dark" ? clickedClass : ""} onClick={(e) => switchTheme(e)}>
			{checkLightTheme && <i className="fa fa-moon-o" aria-hidden="true"></i>}

			{!checkLightTheme && <i className="fa fa-sun-o" aria-hidden="true"></i>}
		</div>
	)
}

export default DarkMode
