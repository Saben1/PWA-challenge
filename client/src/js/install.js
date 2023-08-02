const butInstall = document.getElementById('buttonInstall');

// Event for before installation prompt
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent immediate prompt
    window.installPromptEvent = event; // Save event for later use
    butInstall.style.display = 'block'; // Show install button
  });

// Click event handler for install button
butInstall.addEventListener('click', async () => {
    if (window.installPromptEvent) {
      window.installPromptEvent.prompt(); // Show prompt
      const choiceResult = await window.installPromptEvent.userChoice; // Get user choice
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted installation');
      }
      window.installPromptEvent = null; // Clear stored event
      butInstall.style.display = 'none'; // Hide install button
    }
  });

  // Event for app installed
window.addEventListener('appinstalled', (event) => {
    console.log('App was installed');
  })
