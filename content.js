import * as InboxSDK from '@inboxsdk/core';

(async function() {
  // Ensure the page is Gmail before loading the SDK
  if (window.location.hostname === 'mail.google.com') {
    const sdk = await InboxSDK.load(2, 'YOUR_APP_ID_HERE'); // Replace 'YOUR_APP_ID_HERE' with your actual App ID

    // Use the SDK APIs to manipulate Gmail
    
    // Example: Register a handler for new compose views and add a button
    sdk.Compose.registerComposeViewHandler((composeView) => {
      // A compose view has come into existence, do something with it!
      composeView.addButton({
        title: 'My Nifty Button!',
        iconUrl: 'https://example.com/foo.png', // Replace with a valid icon URL or chrome runtime URL
        onClick(event) {
          event.composeView.insertTextIntoBodyAtCursor('Hello World!');
        },
      });
    });

    // You can use other SDK modules like Lists, Threads, Nav, etc. to interact with other parts of Gmail's UI
    // For example, to register a thread row view handler:
    /*
    sdk.Lists.registerThreadRowViewHandler((threadRowView) => {
      const subject = threadRowView.getSubject();
      console.log('Found thread with subject:', subject);
      // Add a custom label/indicator to the thread row
    });
    */

  }
})();
