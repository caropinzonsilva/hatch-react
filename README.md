# 🔮 hatch-react

A react starter kit.

## 🛠 Requirements:

- Node ^8
- Yarn ^1.2.1

## 🏎 Get Started

- Clone the repo
- Make sure yarn is up to date then run `yarn` to install deps
- Run `yarn start:development` to start a dev server
- Run `yarn storybook` to run Storybook (our component development environment)
- Run `yarn eslint` lint JavaScript files
- Run `yarn stylelint` lint style files
- Run `yarn test` to run tests
- Run `yarn prettier:watch` to auto format as you work

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
