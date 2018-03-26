# 🔮 hatch-react

A react starter kit.

## 🛠 Requirements:

- Node ^8.8.0
- Yarn ^1.2.1

## ⚙️ Project Configuration

Before starting:

- Update the `package.json` name field with the project name
- Update the `.travis.yml` file with the correct api keys and instance names for deploying
- Update the `app/sitemap.js` file with the correct hostname for sitemap generation
  - As you develop the app, make sure to [keep updating the sitemap configuration](https://github.com/ekalinin/sitemap.js)

## 🏎 Get Started

- Clone the repo
- Make sure yarn is up to date then run `yarn` to install deps

### FE Development

- Run `yarn start:development` to start a dev server
- Run `yarn storybook` to run Storybook (our component development environment)
- Run `yarn eslint` lint JavaScript files
- Run `yarn stylelint` lint style files
- Run `yarn test` to run tests
- Run `yarn prettier:watch` to auto format as you work

### Node Development

- Run `yarn build:development` to build the front end in develpment mode
- Or, run `yarn build:production` to build the front end in production mode
- Then, you can run `yarn start:watch` to start the Node server and watch for changes

## 🚀 Contributing and Releasing

1. The `master` branch is the unstable branch. It's where all new issues should base off of.
1. PRs that get merged to `master` trigger a deploy to staging.
1. When it's time to do a release, do a QA on [staging](#) to make sure it looks good.
1. If it's good, pull the latest changes locally from `master`. Version `master` by running `yarn version`.
1. Then `git checkout stable`, then `git merge master`. This will bring `stable` up to date.
1. Next, run `git push origin stable` to push the new version of the app up to GitHub. This will trigger a deploy to beta.
1. Once the deploy is successful, a QA session should be done on [beta](#). If any bugs are caught and need to be fixed, repeat the process from step 1 down.
1. When QA gets the green light, promote the app in the Heroku pipeline from beta to production.
1. 🎉

## ‼️ Before submitting a Pull Request

- Run `yarn eslint` to check for JS lint errors
- Run `yarn stylelint` to check for style lint errors
- Run `yarn test` to run tests
