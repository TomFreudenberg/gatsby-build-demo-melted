# Steps how the demo was created

``` bash
mkdir gatsby-build-demo-melted
cd gatsby-build-demo-melted

npx gatsby new pdf_docs https://github.com/gatsbyjs/gatsby-starter-hello-world
npx gatsby new pdf_app https://github.com/gatsbyjs/gatsby-starter-hello-world
```

# Steps to reproduce the demo from repository

``` bash
git clone https://github.com/TomFreudenberg/gatsby-build-demo-melted
cd gatsby-build-demo-melted
```

### create the app by just one build

``` bash
cd pdf_melted_app
npm install
npm run build
npm run serve
```

Now it is possible to get the PDF from http://localhost:9000/ as with splitted example

# Question

## How to meld all in one project and one build process?

The build process must combine the 4 steps

1. run build (but only pdf_*.js pages)
2. run puppeteer-to-pdf.js for all pdf_*/index.html and store the PDF into src path
3. remove public completely
4. run build (but this time without pdf_*.js)

Something like that could be an option.

