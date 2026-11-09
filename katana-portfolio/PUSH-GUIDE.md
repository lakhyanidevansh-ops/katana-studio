# Push future changes to GitHub yourself

This folder is linked to the website repo and branch `feat/katana-studios-portfolio`.

## Easiest way: GitHub Desktop

1. Install/open GitHub Desktop and sign in.
2. Choose **File → Add local repository** and select this folder.
3. Review **Changes** to make sure only the files you intended are listed.
4. Enter a short Summary such as `Update portfolio video mapping`, click **Commit to feat/katana-studios-portfolio**, then click **Push origin**.
5. Refresh the GitHub branch page to confirm the latest commit.

Do not force-push. Do not copy large video files into the website repo; videos are hosted by the existing GitHub Release or Drive URLs. Thumbnail images belong in `assets/thumbnails/`.

## Command line (PowerShell)

Use this when Git is installed and authenticated. Open PowerShell in this folder:

```powershell
git status
git add .
git commit -m "Update portfolio video mapping"
git push origin feat/katana-studios-portfolio
```

`git status` shows what will be committed. If it lists files you did not mean to change, stop and review before `git add .`.

## Change a video or cover

Follow `EDIT-GUIDES/LINK-GUIDE.md`; the source and thumbnail at the same array position form one card. Keep all clips unique. After editing `js/work.js`, update the mapping table in that guide too.