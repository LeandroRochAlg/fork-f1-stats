[![pages-build-deployment](https://github.com/despolov/f1-stats/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/despolov/f1-stats/actions/workflows/pages/pages-build-deployment) <br><br>
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/despolov/f1-stats/main?label=main%20-%20last%20commit&labelColor=%233D464E&color=0C7EBF)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/despolov/f1-stats/gh-pages?label=gh%20page%20-%20last%20commit&labelColor=%233D464E&color=0C7EBF)

# F1 Stats

F1 stats is an app for quick check of F1 stats from Practice sessions for each race of the current season

## Main Features

- Aggregated lap time based on the best sectors of each driver from every Practice session and the actual standings for comparison

- Used and New tyres count for each driver from every available session before the race

- Stints for each driver from every available session before the race

## Sources

- Data source: <https://openf1.org/>

## Commands

- deps install: npm i
- local run: npm run start
- tests run: npm run test
- app deploy: npm run deploy

## TODO

- add light and dark mode
  - main black color 121212
  - cards and etc 1E1E1E
  - the white becomes E2E2E2
- make the light/dark mode based on the sunrise/sunset
- add tests on the components and utils
