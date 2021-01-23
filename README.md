# Another Gatsby Boilerplate (by Nikodermus)

A _very_ opinionated boilerplate for creating sites with Gatsby, that focus on 3 main things. [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), [Styled Components](https://styled-components.com/) and [CSS Variable System](https://www.infoq.com/news/2020/06/css-variables-design-systems/)

## Table of Contents

1. [🆕 Creating a Project](##creating-a-project)
1. [🐎 Before We Start](##before-we-start)
1. [👩🏽‍💻 Gatsby Development](##gastsby-development)
1. [🧰 Utils](##utils)
1. [🟦 VSCode](##vscode)
1. [💫 Deploy](##deploy)

---

## 🆕 Creating a Project

-   Using the Gatsby CLI, requires [Node JS](https://nodejs.org/en/) 12+

    ```bash
    npx gatsby new site-name https://github.com/Nikodermus/gatsby-styled-components-sanity
    ```

-   Using the GitHub template, you can click on `Use this template` and you will be guided through the steps. You can clone from your account afterwards.

    ![GitHub Template](https://i.ibb.co/yfK0Zc2/gatsby-styled-components-sanity.png)

---

## 🐎 Before We Start

1. Search for `REPLACE_ME` and change accordingly in all files.
1. Include your site or brand colors in `src/constants/site.js`, this will auto-generate the corresponding CSS variables.
1. Replace `static/images/favicon.png` for your own.
1. Include your fonts in `static/images` and link the `@font-face` in `static/images/fonts.css`
1. Uncomment in `gatsby-config.js` the `Sanity` plugin and include your `projectId`

---

## 👩🏽‍💻 Gatsby Development

```bash
yarn start # To get started
```

### Layout

This component is used to share elements beween pages, you can find it in `src/components/Library/molecules/Layout.jsx`, you can extend it to include what you want to appear in all pages. `Nav` and `Footer` are already included.

### Global Context (Store)

This project also has a context set up between pages, it won't be lost between page changes, the context definition is in `src/utils/context.js` and you can use it easily with a custom hook already provided:

```jsx
import { useGlobalContext } from 'src/utils/context';

const Component = () => {
    const [state, dispatch] = useGlobalContext();

    return <div>{JSON.stringify(state)}</div>;
};
```

### Hooks

```jsx
import {
    // Pass a ref and a callback that triggers when it clicks outside
    useClickOutside,
    // Pass a boolean to change if scroll is disabled
    // Returns method to change the scroll disables
    useScrollDisabled,
    // Pass a string, gets parsed as a WhatsApp link message
    // The message changes between desktop/mobile
    useWhatsappMessage,
} from 'src/utils/hooks';

// Returns an object {isDesktop, isMobile} properties.
// It uses the BREAKPOINTS from 'src/constants/styled'
import { useMediaChange } from 'src/utils/context';
```

### Gatsby Plugins

| Name                                                                                     | Use                                                                                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`google-analytics` ](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics)   | Include GA tracking                                                                                                                                  |
| [`google-gtag` ](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag)             | Include GA tracking                                                                                                                                  |
| [`netlify` ](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify)                     | Automatically generates a \_headers file and a \_redirects file at the root of the public folder to configure HTTP headers and redirects on Netlify. |
| [`sanity-image` ](https://www.gatsbyjs.com/plugins/gatsby-plugin-sanity-image)           | The well-considered marriage between Sanity’s image assets and Gatsby you’ve been looking for.                                                       |
| [`sitemap` ](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap)                     | Create a sitemap for your Gatsby site.                                                                                                               |
| [`source-sanity` ](https://www.gatsbyjs.com/plugins/gatsby-source-sanity)                | Source plugin for pulling data from Sanity.io into Gatsby websites.                                                                                  |
| [`styled-components` ](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components) | SSR for Styled Components                                                                                                                            |

---

## 🧰 Utils

### CSS Variables

This project uses a set of utilities to create a design system out of CSS Variables, using as source `src/constants/styled.js`, use your browser to see all the generated variables.

### SEO.jsx

Gatsby component to provide metadata to each page.

### CLI

This project is meant to use [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), which uses various folders, to scaffold this, you can use the following commands to create or delete this scaffolding.

```bash
# Creates the folders in 'src/components/Name' and the jsx file in `src/pages`
yarn page:create name

# Deletes all that was created by the CLI for the name
yarn page:delete name

```

---

## 🟦 VSCode

VSCode configuration out from the box to use formatting and linting, you can install all necessary extension, open the command palette `(⇧⌘P)` and use:

```
Extensions: Enable All Extensions for this Workspace
```

### Extension Details

| Download                                                                                                        | Why                                                          |
| :-------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)                   | EditorConfig Support for Visual Studio Code.                 |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                            | Integrates ESLint JavaScript into VS Code.                   |
| [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)                           | Highlighting, validation, and language features for graphql. |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                          | Code formatter using prettier.                               |
| [React PropTypes Generate](https://marketplace.visualstudio.com/items?itemName=suming.react-proptypes-generate) | Auto generate react's propTypes.                             |
| [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) | Dead simple React snippets you will actually use.            |
| [Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)  | Syntax highlighting for styled-components.                   |

---

## 💫 Deploy

We got you covered, deploying to Netlify is as simple as adding your repo in the dashboard page :)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nikodermus/gatsby-styled-components-sanity)
