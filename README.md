# Neos Website Archive
An archive of the neos.com website. Running automatically every 3rd hour
### Last scrape status
[![Website scrape](https://github.com/Wazbat/neos-website-archive/actions/workflows/scrape.yaml/badge.svg)](https://github.com/Wazbat/neos-website-archive/actions/workflows/scrape.yaml)

### How to use

A local viewing friendly scrape output is located inside the neos-local folder. If you wish to browse a specific historical revision you can use the commit history to find the revision you want. This folder should also contain any PDFs or images that were uploaded to the page.

There is also a raw unmodified version of the website html in the neos-raw folder, should httrack break the website when scraping it.

If you wish can clone the repo locally and navigate to a specific commit hash using the following command:

```
git checkout <commit hash>
```

When trying to view the neos-local website, you might run into some CORS errors, causing jQuery to not load, and subsequently the *fancy scrolling* text to not show.
To fix that, just edit the `neos-local/neos.com/index.html` file and remove the following properties from the jQuery script tag.
```
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"
```
(Just ctrl + f for the word jquery and you'll find it)

Then just save and reload the page and it should display

### PRs welcome!
