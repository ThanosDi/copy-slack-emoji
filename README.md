# Copy Slack Emoji 🎯

A browser extension that automatically converts Slack emoji shortcodes to actual emojis when copying text from Slack.

## ✨ Features

- **Automatic Conversion**: Converts `:smile:` to 😄 when copying from Slack
- **Seamless Integration**: Works automatically without any user interaction
- **Comprehensive Coverage**: Supports 1600+ Slack emoji shortcodes
- **Performance Optimized**: Uses efficient regex matching for fast processing
- **Non-Intrusive**: Only modifies clipboard when emoji shortcodes are detected

## 🚀 Installation

### From Source

1. **Clone the repository**

```bash
git clone https://github.com/thanosdi/copy-slack-emoji.git
cd copy-slack-emoji
```

2. **Install dependencies**

```bash
yarn install
```

3. **Build the extension**

```bash
yarn build
```

4. **Load in Chrome/Edge**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `copy-slack-emoji` folder

## 📖 Usage

1. **Navigate to Slack**
2. **Select text** containing emoji shortcodes
3. **Copy the text** (Ctrl+C / Cmd+C)
4. **Paste anywhere** - shortcodes are automatically converted to emojis!

### Examples

| Before                         | After                   |
| ------------------------------ | ----------------------- |
| `Hello :smile: how are you?`   | `Hello 😄 how are you?` |
| `Great job :thumbsup: :heart:` | `Great job 👍 ❤️`       |
| `Meeting at :clock3: today`    | `Meeting at 🕒 today`   |

## 🛠️ Development

### Build Commands

```bash
yarn build    # Compile TypeScript to JavaScript
```

### Adding New Emojis

1. Edit `src/emojies.json`
2. Add new shortcode mappings: `":new_emoji:": "🆕"`
3. Run `yarn build`
4. Reload the extension

## 🔧 How It Works

1. **Content Script Injection**: Runs on all Slack pages
2. **Copy Event Detection**: Listens for copy events
3. **Shortcode Recognition**: Uses regex to find `:shortcode:` patterns
4. **Emoji Mapping**: Looks up shortcodes in the emoji database
5. **Clipboard Modification**: Replaces shortcodes with actual emojis
6. **Seamless Paste**: User gets emojis instead of shortcodes

## 🎯 Supported Platforms

- ✅ Chrome
- ✅ Edge (Chromium-based)
- ✅ Other Chromium-based browsers

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-emoji`)
3. Commit your changes (`git commit -m 'Add amazing emoji'`)
4. Push to the branch (`git push origin feature/amazing-emoji`)
5. Open a Pull Request

## 🐛 Issues & Feedback

Found a bug or have a feature request? [Open an issue](https://github.com/thanosdi/copy-slack-emoji/issues)!

## ⭐ Star This Repo

If this extension helps you, consider giving it a star! ⭐

---

**Made with ❤️ for the Slack community**
