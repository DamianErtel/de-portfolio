<h1 align="center">
  Welcome to my portfolio webiste.
</h1>

## About the project

1.  **Tech stack used.**

    <ul>
        <li>Typescript</li>
        <li>Gatsby</li>
        <li>React</li>
        <li>Styled-Components</li>
    </ul>

2.  **Project structure.**

   ```
   └── src/
        ├── commonStyles/
        │   └── index.ts - styled components used across whole app.
        ├── components/
        │   ├── ...
        │   └── Sections - this is where each section of the project is stored.
        ├── hooks/ - this is where react hooks are stored.
        │   └── ... 
        ├── images/
        │   └── ...
        ├── pages/
        │   ├── 404.tsx
        │   └── index.tsx
        ├── theme/
        │   ├── darkTheme.ts - styled components theme used when the user switches to dark mode.
        │   ├── global.ts - global style declaration.
        │   └── theme.ts - default styled components theme.
        └── utils/ - this folder contains static content, and LocationContext for some navigation ui elements.
            └── ... 
   ```

3.  **Basic usage.**

    <ul>
        <li>Usual developement starts with command - gatsby develop</li>
        <li>To build app in order to later serve it - gatsby build</li>
        <li>Example for serving app on your local network - gatsby build && gatsby serve -H 192.168.0.1 -p 9000
            <br/> which will serve app on 192.168.0.1:9000
        </li>
        <li>In order to use these commands you must have gatsby-cli installed, more on that
            <a href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/" target="_blank" rel="noreferrer">here</a>
        </li>
        <li>If, for example, you would rather use 'npm start' instead of 'gatsby develop', check the package.json file for available scripts</li>
    </ul>