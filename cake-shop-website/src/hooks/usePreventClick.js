import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

/**
 * Custom hook that shows the correct alert when a user
 * clicks outside the Navbar (or profile icon) if they are not logged in.
 *
 * @param {string[]} excludedClassNames - An array of HTML class names whose click events should be ignored.
 */
export const usePreventClick = (excludedClassNames = []) => {
    // Get isLoggedIn and getAuthAlertMessage from useAppContext
    const { isLoggedIn, getAuthAlertMessage } = useAppContext();

    useEffect(() => {
        // If the user is logged in, this hook does nothing.
        if (isLoggedIn) {
            return;
        }

        const handleDocumentClick = (e) => {
            // Check if the clicked area is inside Navbar or the profile icon.
            const isInsideNavbar = e.target.closest('nav');
            const isProfileIcon = e.target.closest('.profile-icon-wrapper');

            // Check for excluded classes
            const isExcluded = excludedClassNames.some(className =>
                e.target.closest(`.${className}`)
            );

            // Show an alert if the click is not in the above areas.
            if (!isInsideNavbar && !isProfileIcon && !isExcluded) {
                // Here we use the getAuthAlertMessage function
                const alertMessage = getAuthAlertMessage();
                if (alertMessage) { // Show alert only if there is a message
                    alert(alertMessage);
                }
            }
        };

        // Listen for click events on the document
        document.addEventListener('click', handleDocumentClick);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isLoggedIn, excludedClassNames, getAuthAlertMessage]); 
};