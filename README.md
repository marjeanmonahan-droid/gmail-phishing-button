# gmail-phishing-button
A Chrome extension that adds a "Report Phishing" button to web version of Gmail

Step-by-Step Guide
1. Set Up the Extension Project
- Create a new directory for your extension and a manifest.json file. Modern Chrome extensions use Manifest V3. 
- "run_at": "document_start" is important for ensuring the content script loads correctly with Gmail's complex interface.
- The web_accessible_resources section is crucial for Manifest V3 compatibility when using the InboxSDK's required files (as per their official MV3 example). 

2. Install InboxSDK https://inboxsdk.github.io/inboxsdk-docs/ via npm
- Register with InboxSDK here https://register.inboxsdk.com/
- Download the InboxSDK JS file https://build.inboxsdk.com/inboxsdk.js
- Navigate to your project directory in the terminal and install the core SDK package within you shell environment, e.g. bash
- npm install @inboxsdk/core

3. Content Script will inject the InboxSDK and run your application code. 

4. Bundle Your Code
- Because Chrome extensions require all logic to be included in the package (especially with Manifest V3), you need a bundler like Webpack or Parcel to combine your modules into a single content.js file and include the necessary InboxSDK background files. The InboxSDK MV3 example on GitHub provides a simple Webpack setup you can use as a starting point. 

5. Load and Test Your Extension
- Open Chrome and navigate to chrome://extensions.
- Enable Developer mode (usually a toggle in the top-right corner).
- Click Load unpacked.
- Select your extension's directory.
- Navigate to Gmail.com to see your extension in action. Open a compose window to test the button you added. 

This process gives you the foundation for building your custom Gmail extension using the reliable InboxSDK APIs, abstracting away Gmail's constantly changing DOM
