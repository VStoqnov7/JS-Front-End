function browser(browser, actions) {
  const {
    "Browser Name": browserName,
    "Open Tabs": openTabs,
    "Recently Closed": recentlyClosed,
    "Browser Logs": browserLogs,
  } = browser;

  actions.forEach((action) => {
    const [command, ...args] = action.split(" ");

    if (command === "Open") {
      const siteToOpen = args.join(" ");
      openTabs.push(siteToOpen);
      browserLogs.push(action);
    } else if (command === "Close") {
      const siteToClose = args.join(" ");
      const index = openTabs.indexOf(siteToClose);

      if (index !== -1) {
        openTabs.splice(index, 1);
        recentlyClosed.push(siteToClose);
        browserLogs.push(action);
      }
    } else if (action === "Clear History and Cache") {
      openTabs.length = 0;
      recentlyClosed.length = 0;
      browserLogs.length = 0;
    }
  });

  console.log(browserName);
  console.log(`Open Tabs: ${openTabs.join(", ")}`);
  console.log(`Recently Closed: ${recentlyClosed.join(", ")}`);
  console.log(`Browser Logs: ${browserLogs.join(", ")}`);
}

browser(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
