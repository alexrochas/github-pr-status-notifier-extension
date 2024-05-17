# GitHub PR Status Notifier Extension

This Chrome extension changes the favicon of a GitHub pull request page to indicate the status of the pull request. The icon changes when the pull request is approved or merged.

![images/demo.png](images/demo.png)
> A screenshot of the GitHub PR Status Notifier Extension in action.


## Features

- Detects when a pull request is approved and changes the favicon to indicate approval.
- Detects when a pull request is merged and changes the favicon to indicate merging.

## Installation

1. Clone the repository or download the ZIP file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right.
4. Click "Load unpacked" and select the directory containing the extension files.

## File Structure

```
my-extension/
├── background.js
├── content.js
├── images/
│   ├── approved_icon.png
│   ├── merged_icon.png
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json
└── README.md
```

## Usage

1. After loading the extension, navigate to a GitHub pull request page.
2. When the pull request is approved, the favicon will change to the approved icon.
3. When the pull request is merged, the favicon will change to the merged icon.

## Contributing

Feel free to fork the repository and submit pull requests with enhancements or bug fixes.

## License

This project is licensed under the MIT License.

---

This README provides a comprehensive overview of the project, including installation instructions, usage, and development details. It should be helpful for anyone looking to understand or contribute to the project.