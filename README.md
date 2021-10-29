# Bookmarklet-to-Prototype-Google-Font

A small bookmarklet I use to quickly prototype how fonts from Google Font looks on my website.

## Install `bookmarklet.js` as a bookmarklet.

- Create a random bookmark.
- Right click on the bookmark you just created and select "Edit"
- In the URL field, paste the contents of `bookmarklet.js`

## Workflow

- Go to [Google Font](https://fonts.google.com/).
- Click on the bookmarklet when on the Google Font homepage. This enables you to copy the font name by right-clicking on font cards.
- Right-click on any font cards to copy its filename.
- Go to your website and click on the bookmarklet. A prompt will appear.
- Paste the font name in the pop up that appears.
- The font file is added to your website and the font family of the body is set to that font.

## Note

- You can also enter the corresponding number to switch to previously added font family.

## Details

- Font names are case-sensitive
- Leading and trailing whitespaces will automatically be trimmed from the input.
- All font styles and weights are added (100 to 900 weight for both normal and italic) to the webpage.
- You can enter local font names too. It will make an invalid request to Google Font but will still set the font name of the body correctly.
