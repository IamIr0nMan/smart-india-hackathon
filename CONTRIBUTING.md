# Contributing Guidelines

## These are the contributing guidelines everybody needs to follow

- Use meaningful component names so that it describes what the component is or what it does.
- Use meaningful variable names, don't use a, b, x, y, etc.
- Keep all the components in the [components folder](/src/components/) and all the pages in the [pages folder](/src/pages/).
- If using CSS for a component, then create a separate CSS file for that particular component in the same folder, don't write all the CSS in one file.
- Use `.jsx` extension for react components instead of `.js`.
- Keep all the images and other resources in the the [assets folder](/src/assets/).
- Create a new branch for developing a new feature with meaningful name using
  > `git checkout -b ＜new-branch＞`
  >
  > Then create a pull request so that it can be reviewed by others and merged to the main branch. Create a pull request only after completing the feature.
  >
  > To create a pull request:
  >
  > `git push -u origin <branch-name>`
  >
  > Then go to Github and there will be an option to create a pull request.
- In case, more than one people are working on the same branch use `git fetch` to check other person's commits and pull it using `git pull` before you make a commit.
