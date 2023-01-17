import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// "scripts": {
// 	"vite": "vite --open",
// 	"host": "vite --host",
// 	"start": "vite",
// 	"build": "react-scripts build",
// 	"test": "react-scripts test",
// 	"eject": "react-scripts eject"
// },

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
