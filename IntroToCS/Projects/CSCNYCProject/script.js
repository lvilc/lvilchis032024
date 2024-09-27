window.addEventListener("resize", checkMenu);
        const showTopNav = window.document.querySelector('#topnav')

        function checkMenu()
        {
            // Get breakpoint of 1041 from media query
            if(window.innerWidth>1041)
            {
            showTopNav.style.display = "block";
            }
            else
            {
            showTopNav.style.display = "none";
            closeX.style.display = "none";
            hamburgermenu.style.display = "block";
            }
        }


// Create variables for hamburger menu and set it to a value
        const hamburgermenu = window.document.querySelector('#hamburgermenu');
        // Make hamburgermenu interactive by adding a click event
        hamburgermenu.addEventListener('click', showModalMenu);


        function showModalMenu()
        {
            // Create and set variable for modalmenu
            const displayModalMenu = window.document.querySelector('#topnav');
            // Make modalmenu visible
            displayModalMenu.style.display = "block";
            hamburgermenu.style.display = "none";
            closeX.style.display = "block";
        }

        // Create variable for closing x and set the value
        const closeX = window.document.querySelector('#closex');
        // Make closing x interactive by adding click value
        closeX.addEventListener('click', closeModalMenu);

        function closeModalMenu()
        {
            // Create and set variable for modalmenu
            const hideModalMenu = window.document.querySelector('#topnav');
            
            
            //Hide the modal menu
            hideModalMenu.style.display = "none";
            hamburgermenu.style.display = "block";
            closeX.style.display = "none";
        }
        


        // Display
        // Create a variable and assing at once
        const locationPin = window.document.querySelector('#locationpin');
        locationPin.addEventListener('click', displayModalMap);

        function displayModalMap()
        {
            // Create a variable and assign at once
            const showModalMap = window.document.querySelector('#modalmap');
            showModalMap.style.display = "flex";
        }

        // Hide
        // Create a variable and assign value
        const closeMenu = window.document.querySelector('#closexmap');
        closeMenu.addEventListener('click', closeModalMap);


        // Hide the map with the escape key (esc which is keyCode 27)
        window.document.addEventListener('keydown', function(e)
    {
        if(e.keyCode == 27)
        {
            closeModalMap();
        }
    }
    );

        function closeModalMap()
        {
            const closeModal = window.document.querySelector('#modalmap');
            closeModal.style.display = "none";
        }