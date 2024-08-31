
# KIRA's Website

This repository hosts KIRA Network's main website. The following describes the workflow for exporting the Webflow design, updating the `dev-webflow` branch, and publishing the changes to the `master` branch, which is used for GitHub Pages deployment.

## Workflow Overview

Clone the repository and checkout to dev branch:
```
git clone https://github.com/KiraCore/kira.network.git
cd kira.network
git checkout dev-webflow
```

1. **Webflow Export**: 
   - Export the latest version of the website from Webflow using credentials.
   - Extract the exported ZIP to the repository. Replace all files.

2. **Update `dev-webflow` Branch**:
   - Commit and push the changes to the `dev-webflow` branch.

```
git add .
git commit -m "update text"
git push
```

   - A pull request from `dev-webflow` to `master` is automatically created.

3. **Merge the Pull Request**:
   - Review the PR and merge it to update the `master` branch.
   - The `master` branch is configured as the source for GitHub Pages. After the PR is merged, the site is automatically deployed via GitHub Pages.
