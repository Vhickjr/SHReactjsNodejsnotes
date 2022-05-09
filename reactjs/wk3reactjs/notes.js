/* Lerning outcome
JSX syntax and HTML and JS
How to embed Javascript in JSX
CSS Modules
styled components */
/* JSX is asimply a syntax extension of Javascript. It allows us to 
diectly write HTML in react, within the Javascript code
/* Babel transforms HTML code in Javascript to something the
web can understand.*/
/* React.createElement function converts JSX to a call that the
browswer understands.
Each JSX element is just syntactic sugar for calling
React.createElement function.
the syntax is given below
React.createElement(type, [props], [children])

JSX Wrapper
React requires Adjacent element to be wrapped in  a parent tag
ways to fix this 
1. using div
2. using React.Fragment
advantages of using React.Fragment tag
Fragment let you group a list of children without adding
extra nodes to the DOM.
or <> </>


 Adding classes to jsx
in React we use className not class
characteristics of jsx 
advantages and disadvantages

Styled component
There are different ways we can style our element in react
 1. importing css
 2. scss
 3. css modules 
 4. styled component

 styled component is a component for react and react native.
 that allows you to use component-leve; styles in your application
 that are written with a mixture of Javascript and css.
 for very big application, this is more preferable.

 steps in using style components

1. npm install styled-components --save
2. install styled components from 'styled-component';
3. create a variable by selecting where we want to store our
styled keys.
4. use the name of the variable we created as a wrapper 
around JSX elements.

ADDING INDIVIDUAL FILES

1. git add index.html
The file should be Staged. Let's check the status::
2. git status 
   
   git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached ..." to unstage)
    new file: index.html 

INSTALLING REACT-BOOTSTRAP
Link to read more
https://react-bootstrap.github.io/getting-started/introduction/


npm install react-bootstrap bootstrap

the react-bootstrap site contains information about about major components
of the application you are creating.
fluid clause makes use of the maximum stapce in the 
screens.

How to google better
1. wrap  your error message in quotes 
2. SITE:URL
3. you can exclude a term from search ny adding - in front
of it
4. use AFTER: DATE in from of your search or BEFORE:DATE

5.  search between numbers for example 10..20
6. Either operator (A|B)
7. How to build a * with reacJS
8. use DuckDuckGo
9. RELATED: URL
10. CATCHE: URL




*/
