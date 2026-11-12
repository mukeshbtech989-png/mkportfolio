# Mukesh Kumar – Portfolio Website

Plain HTML, CSS and JavaScript. No build step. Works on GitHub Pages.

## Folder structure
```
index.html
css/style.css
js/script.js          <- all your content lives in `portfolioData` at the top
assets/images/profile.jpg
assets/documents/resume.pdf
assets/documents/ai-literacy-badge.pdf
```

## Update your content
Open `js/script.js` and edit the `portfolioData` object at the top. Add, change or delete entries.
A list left empty (`[]`) hides that section and its menu link. A link left as `""` hides its button.

## Replace files (keep the same file names)
- Photo: `assets/images/profile.jpg`
- Resume: `assets/documents/resume.pdf`
- Project image (optional): add `assets/images/ai-student-performance-analyzer.png`. Until then a coloured card is shown.

## Add your project link
In `portfolioData.projects[0].link`, paste your GitHub repo URL. The "View Project" button then appears.

## Deploy on GitHub Pages
1. Create a new public repository on GitHub (for example `portfolio`).
2. Upload everything inside this folder (not the folder itself) so `index.html` is at the top level.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then branch **main** and folder **/ (root)**, and click Save.
5. Wait 1–2 minutes. Your site will be at `https://mukeshbtech989-png.github.io/portfolio/`.

## Checklist
- [ ] Add your project GitHub link
- [ ] Add a project screenshot (optional)
- [ ] Check phone number and email are what you want to show publicly
- [ ] Test on your phone after publishing
