klusterx Test Project

- **[Access production deployment](https://klusterx.netlify.app/)**

The objective for this test is to convert the current Angular 'smart' and presentation components displaying an order to a buyer into React components.

A few things to note in the project:

- **[Create Create React App](https://github.com/facebook/create-react-app)** -This project was bootstrapped with Create React App
- **[Mantine](https://mantine.dev/)** - A fully featured React component library
- **[Dockerfile](https://docs.docker.com/engine/reference/builder/)** - Dockerfile to generate docker builds.
- **[docker-compose](https://docs.docker.com/compose/)** - Docker compose script to start service in production mode.
- **[.env file for configuration](#environment)** - Change server config like app port, mongo url etc
- **[Testing Library](https://testing-library.com/)** - Using Testing Library for running test cases of the application.

## I. Installation

#### 1. Clone this repo

```
$ git clone git@github.com:eaazumah/klusterx.git
$ cd klusterx
```

#### 2. Install dependencies

if yarn is not install

```
$ npm install --global yarn
```

```
$ yarn install
```

## II. Configuration

#### Environment

Copy the content of .env.default to a .env file

```
PORT=3000
```

## III. Development

### Start dev server

Start the dev server on local without docker/compose.

```
$ yarn start
```

Start the dev server using the compose script at `docker-compose.dev.yml`.

```
$ docker-compose -f docker-compose.dev.yml up --build
```

Running the above commands results in

- 🌏**App** running at `http://localhost:3000`

### Run test

```
$ yarn test -u
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## IV. Packaging and Deployment

#### 1. Build

```
$ yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### 2. Run production build with docker

```
$ docker build -t klusterx .
$ docker run -t -i \
      -p 80:80 \
      klusterx
```

- 🌏**App** running at `http://localhost:80`

#### 3. Run production build with docker-compose

```
$ docker-compose up
```

- 🌏**App** running at `http://localhost:80`

---

## Environment

To edit environment variables, create a file with name `.env` and copy the contents from `.env.default` to start with.

| Var Name | Type   | Default | Description                   |
| -------- | ------ | ------- | ----------------------------- |
| PORT     | number | `3000`  | Port to run the API server on |

### Directory Structure

```
+-- src
|   +-- app
|   |   +-- __tests__
|   |   |   +-- App.test.tsx
|   |   +-- App.tsx
|   +-- order
|   |   +-- __tests__
|   |   |   +-- media-modal.test.tsx
|   |   |   +-- order.test.tsx
|   |   |   +-- share-modal.test.tsx
|   |   +-- components
|   |   |   +-- media-modal.tsx
|   |   |   +-- share-modal.tsx
|   |   +-- hooks
|   |   |   +-- useMediaModal.ts
|   |   |   +-- useOrder.ts
|   |   |   +-- useShare.ts
|   |   |   +-- useShareModal.ts
|   |   |   +-- useYards.ts
|   |   +-- order.tsx
|   +-- router
|   |   +-- __tests__
|   |   |   +-- not-found.test.tsx
|   |   |   +-- routes.test.tsx
|   |   |   +-- router.test.tsx
|   |   +-- not-found.tsx
|   |   +-- routes.tsx
|   |   +-- router.tsx
|   +-- services
|   |   +-- apollo-client.ts
|   |   +-- data.ts
|   |   +-- utils.ts
|   +-- declaration.d.ts
|   +-- index.tsx
|   +-- react-app-env.d.ts
|   +-- reportWebVitals.ts
|   +-- setupTests.ts
+-- dockerignore
+-- .env.default
+-- .eslintrc.json
+-- .gitignore
+-- docker-compose.dev.yml
+-- docker-compose.yml
+-- Dockerfile
+-- package.json
+-- README.md
+-- tsconfig.build.json
+-- tsconfig.json
+-- yarn.json
```

## III. Contribution

### Git Workflow

Contribution to this project must follow the
**[GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices.)**
workflow

### Commits

Commits messages must follow **[Conventional Commits Spec](https://www.conventionalcommits.org/en/v1.0.0/)**

Use yarn commit to commit messages

```
$ yarn commit

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
