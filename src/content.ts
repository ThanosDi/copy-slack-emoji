let emojiMap: Record<string, string> = {};

const shortcodeRegex = /:[a-zA-Z0-9_+-]+:/g;

// Load emoji map
fetch(chrome.runtime.getURL("dist/emojies.json"))
  .then((response) => response.json())
  .then((data) => (emojiMap = data))
  .catch((error) => console.error("Failed to load emoji data:", error));

// Function to replace emoji shortcodes in text
function replaceEmojiShortcodes(text: string): string {
  return text.replace(
    shortcodeRegex,
    (shortcode) => emojiMap[shortcode] || shortcode
  );
}

// Listen for copy events
document.addEventListener(
  "copy",
  async () => {
    // Get the current clipboard content
    const clipboardText = await navigator.clipboard.readText();

    // Update the clipboard with our modified text
    await navigator.clipboard.writeText(replaceEmojiShortcodes(clipboardText));
  },
  false
);
