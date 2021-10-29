# Bookmarklet-to-Prototype-Google-Font

A small bookmarklet I use to quickly prototype how fonts from Google Font looks on my website.

## Workflow

- Install `bookmarklet.js` as a bookmarklet.
- Go to [Google Font](https://fonts.google.com/) to look for suitable fonts.
- Click on the bookmarklet to enable right-click on font cards to copy.
- Copy the font name.
- Go to your website and click on the bookmarklet.
- Paste the font name in the pop up that appears.
- The font file is added to your website and the font family of the body is set to the font you entered.

## Note

- You can also enter the corresponding number to switch to previously added font family.

- Font names are case-sensitive
- leading and trailing whitespaces will automatically be trimmed from the input.
- All font styles and weights are added (100 to 900 weight for both normal and italic).
- You can enter local font names too. It will make an invalid request to Google Font but still set the font name of the body correctly.
