# JJS Portfolio

Personal engineering portfolio site, adapted from [hwg3154/hwg-portfolio](https://github.com/hwg3154/hwg-portfolio). It is a static GitHub Pages site — no build step required to publish.

**Live (once Pages is enabled):** https://jasonsayah75.github.io/JJS-portfolio/

## Quick start (local preview)

```bash
# From this folder
python3 -m http.server 8765
```

Open http://127.0.0.1:8765 in your browser.

## Customize your info

Almost everything lives in **`projects.js`**:

1. Edit `SITE_CONFIG` at the bottom — name, LinkedIn, email, phone, bio, hero photos.
2. Replace the example project (or add more) in the `PROJECTS` array.
3. Drop your photos into `images/<project-name>/` and point the paths at them.
4. Put your resume PDF at `images/resume/resume.pdf` and a preview image at `images/resume/resume-preview.jpg`.
5. Optionally run `python3 optimize-images.py` (needs Pillow) to generate smaller WebP versions.

For off-center crops, open `crop-helper.html` in a browser, click the focus point, and paste the generated snippet into `projects.js`.

## Publish on GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. Save. After a minute or two the site is at  
   `https://jasonsayah75.github.io/JJS-portfolio/`.

No custom domain is set. If you add one later, create a `CNAME` file in the repo root with your domain name.

## Credit

Layout, styling, and editing workflow originally by [Harrison Grant](https://github.com/hwg3154/hwg-portfolio). Placeholder images and copy in this repo are yours to replace.
