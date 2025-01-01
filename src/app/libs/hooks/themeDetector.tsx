import { useState, useEffect } from "react";

export const useTailwindThemeDetector = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		// Check if the `html` tag has the `dark` class
		const isDark = document.body.classList.contains("dark");
		setIsDarkTheme(isDark);

		// Optional: Observe for changes to the `class` attribute
		const observer = new MutationObserver(() => {
			const updatedIsDark = document.body.classList.contains("dark");
			setIsDarkTheme(updatedIsDark);
		});

		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);

	return isDarkTheme;
};
