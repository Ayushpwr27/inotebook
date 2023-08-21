Frontend of the This Application contains two major folders ( components and context ) and two major files ( index.js and app.js )

# Components in React
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

for this project we have nine components
1. **About** - Contains About section of the 
2. **Addnote** - Contains a form the adds note for the user
3. **Alert** - Alert section that displays the changes made when user use a feature 
4. **Home** - The main page that is displayed ones a user is loged in 
5. **Login** - Login page
6. **Navbar** - Navbar
7. **Noteitems** - This component displayes the notes that is saved by the user and Provide options to update and delete the note
8. **Notes** - this component is the main component that helps in creating and updating notes
9. **Signup** - Signup Page

# what is context?

**Context** provides a way to pass data through the component tree without having to pass props down manually at every level.
In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

For this application we have used **noteState** - This is the context api that we use to perform operations in the wesite  

