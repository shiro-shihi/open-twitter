chrome.commands.onCommand.addListener(function(command) {
  if (command === "open-twitter") {
      chrome.tabs.create({ url: "https://x.com" });
  }
});
