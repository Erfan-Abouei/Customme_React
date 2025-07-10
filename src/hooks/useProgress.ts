import { useEffect } from 'react';
import { useNavigation } from 'react-router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Don't forget to import the CSS

export const useProgress = () => {
    const navigation = useNavigation();
    // Configure NProgress (optional settings)
    nProgress.configure({
        showSpinner: false, // Hide the spinner
    });

    useEffect(() => {
        // Show progress bar when loading or submitting
        if (navigation.state === 'loading' || navigation.state === 'submitting') {
            nProgress.start();
        } else {
            nProgress.done();
        }
        return () => {
            nProgress.done();
        };
    }, [navigation.state]); // Re-run the effect when navigation state changes
}
