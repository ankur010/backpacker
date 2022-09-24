# Frontend Case Study

This assignment will test your understanding of various aspects of the frontend development process and should help us understand how you work, communicate and think.

The assignment consists of three parts and should in total take about 3-5 hours to complete.

## Task 1
Your task is to implement a new component and add it to the landing page. While the general code quality of the landing page is mediocre, we expect you to implement and document the component to a higher standard.

**Setup**: This repository contains a predefined vue.js project for a single landing page that you'll be working in. Once completed, please send us the whole updated repo including your work committed in the contained git repo (w/o push or PR to this remote). 

**The component**: The component at hand should pull data from a [remote endpoint](https://pixabay.com/api/?key=30053638-dc58052ebc04d497829e1a757&q=city&image_type=photo) and display them in a horizontal carousel of cards. The design guidelines are defined in [Figma](https://www.figma.com/file/TdBCkltGWqWJ6Ut3cFrtYy/Test?node-id=2%3A964).

**Notes**: 
- The component should be placed into the landing page before the testimonial section
- Helper components may be created if that is necessary or sensible
- External libraries may be used at will
- The component should be as close to the design mockup as possible
- The asset folder should contain all images and icons that you'll need


## Task 2
Your next task is to improve and refactor a given component in the landing page. Assume that it has been created by someone who is no longer with the company and due to new requirements it now needs to be updated.

**The component**:
The component at hand is a sidebar that is toggled with a hamburger menu to present users with a navigation menu.

**New requirements**:
- **Behavioral bug**: The sidebar should automatically close when a click event outside of it occurs
- **Behavioral bug**: The sidebar should automatically close after a page transition
- **UI bug**: The sidebar should be fixed and should not be affected by scrolling behavior
- **Refactor**: The sidebar should be refactor to use the Composition API

## Task 3
Your next and last task is to provide answers to a number of questions about senior-level processes and approaches. You may be as elaborate as you feel is necessary, but you'll be graded on the quality and not the length of your answers.

**Q1**: What would you say are the 5 most important qualities to look for in a junior developer? Assume that you should evaluate multiple junior developers that all have the same level of understanding of the used programming language.

> Your Answer...

**Q2**: How would you measure the "performance" in the frontend team to help the CTO understand whether there might be areas to improve the efficiency?

> Your Answer...

**Q3**: What makes a good code review? Please differentiate it from a code review that is insufficient as well as from a code review that is overdone.

> Your Answer...

**Q4**: You're starting a new frontend project for a B2C eCommerce site with a team of 2 other frontend developers. You're tasked with defining the testing strategy for the first 6 months of the project. Which types of tests, which frameworks and which testing guidelines would you propose?   

> Your Answer...
