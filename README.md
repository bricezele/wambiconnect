# 📦 appstud-template-nextjs

This is a template of a Next.js project

## Getting Started

First, get a copy of the template

```bash
git clone git@github.com:appstud/appstud-template-nextjs.git

# install dependencies
yarn

# run the development server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to start a project with this template?

You can use `appstud-template-nextjs` to start a new project, or to work with an existing code base.

In both cases, it is essentially a matter of copying and pasting the interesting parts of the template into the project folder, without overwriting any specific files.

To do this:

```bash
# Example: after cloning a new projet in the folder my-new-project/
# go to the project folder

cd my-project

# copy the hidden and unhidden files in the root of the model
# node: alerts can be displayed about ignored folders, this is normal
cp -n ../appstud-template-nexjs/{.*,*} .

# copy (recursively) the folders components/, core/, locales/, pages/, public/, static/, themes/ and utils/
cp -rn ../appstud-template-nextjs/{components,core,locales,pages,public,static,themes,utils} .

# install dependencies
yarn

# start the dev server
yarn start
```

## Build all the modules

```bash
yarn build
```

## Dev mode

```bash
yarn dev
```

## Project Guidelines

The template should respect the following structure

```
appstud-template-nextjs
    __tests__
    components
    core
        application
            contexts
            dependencies
            hooks
        data
            analytics
            httpClient
            models
            providers
        domain
            analytics
            httpClient
            providers
    locales
    pages
    public
    static
    themes
    utils
```

## Configure linter on VSCode

Create a root folder called .vscode with a settings.json file inside containing the following code:

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Add those two lines:
  "editor.formatOnSave": true, // Tell VSCode to format files on save
  "editor.defaultFormatter": "esbenp.prettier-vscode" // Tell VSCode to use Prettier as default file formatter
}
```

For further details refer to: https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
