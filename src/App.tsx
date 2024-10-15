import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Cast deferredPrompt to the correct type
      const promptEvent = deferredPrompt as any;
      // Show the install prompt
      promptEvent.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await promptEvent.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      // Clear the deferredPrompt so it can only be used once.
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  return (
    <div>
      <RouterProvider router={router} />

      {/* Your existing app content */}
      {showInstallPrompt && (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', padding: '10px', textAlign: 'center', boxShadow: '0 -2px 5px rgba(0,0,0,0.1)' }}>
          <button onClick={handleInstallClick}>Add to Home Screen</button>
        </div>
      )}
    </div>
  );
};

export default App;