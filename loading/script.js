window.addEventListener('load', () => {
    // Set a flag in localStorage indicating the loading screen has been shown
    localStorage.setItem('hasVisitedLoading', 'true');
    // Delay for the loading screen (e.g., 3 seconds)
    setTimeout(function () {
        // Redirect to index.html after the delay
        window.location.href = localStorage.getItem('load');
    }, 3000);
});

    // Check if dark mode or light mode was saved in localStorage
    const currentMode = localStorage.getItem('theme');

    if (currentMode === 'dark') {
        setDarkMode();
        darkModeRadio.checked = true;
    } else {
        setLightMode();
        lightModeRadio.checked = true;
    }

    function setDarkMode() {
        document.documentElement.style.setProperty('--background-colours', '#121212');
    }

    function setLightMode() {
        document.documentElement.style.setProperty('--background-colours', '#fff');
    }