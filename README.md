# Guangyu Hao — Personal website

A quiet, English-language personal website built with plain HTML, CSS, and JavaScript. No build step, dependencies, backend, analytics, or external fonts.

## Deploy to GitHub Pages

1. Create a GitHub repository. Use `YOUR_USERNAME.github.io` for a personal domain, or any other name for a project site.
2. Upload the **contents** of this folder to the repository root, including `.nojekyll`. The root should contain `index.html` directly.
3. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**.
4. Select your branch (usually `main`) and **/(root)**, then save.
5. GitHub will display your website address when deployment completes.

All links are relative, so the same files work at both a personal domain and a repository subpath. No configuration changes are required.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Preview locally

Open `index.html` directly in your browser. For a more accurate preview and consistent theme storage, run `python3 -m http.server 8000` from this directory, then open http://localhost:8000.

## Edit your content

- `index.html`: introduction and selected writing.
- `blog.html`: blog index.
- `blog/*.html`: three complete initial essays; duplicate a file to add an article, then add its link to the blog index.
- `projects.html`: three explicitly exploratory research/product directions.
- `assets/style.css`: shared typography, responsive layout, and light/dark color tokens.
- `assets/theme.js`: system theme detection, manual switching, and persistence.
- `assets/favicon.svg`: simple typographic favicon.

The initial content was drafted from your stated interests and experiences, not from a publication or CV. Review the three essays before publishing under your name. All dates are initial draft dates. Project entries describe directions and ideas, not completed experiments. No unverified social handles, email addresses, affiliations, or publication records have been added. Add your real contact links when ready.

## Behavior and accessibility

Content and navigation work without JavaScript. With JavaScript enabled, the circular header control changes theme; the preference is saved locally when browser storage is available. With no saved preference, the site follows the system theme. Keyboard focus, skip navigation, semantic landmarks, and reduced-motion preferences are supported.

## 发布说明

将解压后文件夹内的文件上传到 GitHub 仓库根目录，再按上面的 Pages 设置选择 `main` 分支与 `/(root)` 即可。无需 npm、打包或服务器。网站正文为英文；博客内容为根据你的思考整理的初稿，请在公开发布前审阅。暂未填写未经确认的邮箱或社交链接。
