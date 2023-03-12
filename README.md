# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

[screenshot.png](https://postimg.cc/hJnVS7VR)


### Links

- Solution URL: [Github](https://github.com/cmb347827/notifications-page-main-github.io)
- Live Site URL: [Live Github](https://cmb347827.github.io/notifications-page-main-github.io/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap
- Sass/SCSS
- Mobile-first workflow


### What I learned

- I wanted to add the true font type file within my code , like so :
`
@font-face{
   font-family: mediumFont;
   src: url('https://github.com/cmb347827/notifications-page-main-github.io/blob/main/PlusJakartaSans-Medium.ttf');
}
div{
   font-family: mediumFont;
}
`
- But I ran into a CORS policy error: 
> Access to font at 'https://github.com/cmb347827/notifications-page-main-github.io/blob/main/PlusJakartaSans-Medium.ttf' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

- So I went back to using Google fonts.

- The most complicated part was needing two custom attribute data values, because when I used only `data-status:'on'` and `data-status:'off'` 
- pressing 'mark all as read' would toggle the new unread messages to 'read' status, but would also flip the old 'read' messages back to 'unread'.
- Adding the second custom data-attribute solved that.

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS, some jQuery. For now, in time I will go re-learn React ect.

### Useful resources

- [Custom HTML data attributes](https://www.geeksforgeeks.org/what-are-custom-attributes-in-html5/) - Custom data attributes.

## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)
