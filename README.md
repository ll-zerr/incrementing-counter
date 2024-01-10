# Incrementing Counter

This is the Incrementing Counter project (Day 15) in the [Udemy course 50 projects in 50 Days](https://www.udemy.com/course/50-projects-50-days/?src=sac&kw=50+projects+50+days).

## Project Details

The goal of the project is to populate the page with three counters that increment by a specific number. 

### View My Project:

![Screenshot]()

## Features

- Displays three counters for specific targets.
- Each counter increments to reach completion at the same time.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## My Process

- Start the files from a boiler template.
- Create the three counters.
- Add styles.
- Create a variable for the target elements.
- For each counter, set the inner text to 0.
- Create a function to update the counters.
- In that function:
    * Grab the attribute of the data-target and turn it into a number.
    * Create a variable for the counter inner text and turn that into a number.
    * Create the increment number that each counter will increase by.
    * If the counter inner text is less than the target number for that counter:
        * Increase the counter inner text by the increment value for that counter, rounded up to the next whole number.
        * Continue to run the function that updates the counter by increments.
    * Otherwise, once the target number is achieved, make the counter inner text equal to the target number. 
- Call the function to update the counters by increments.

### Continued development

I like the look of the counters and hope to apply this on specific sites in the future.  

## Acknowledgements

Original Project idea: Brad Traversy, Florin Pop [Udemy course 50 Projects in 50 Days](https://www.udemy.com/course/50-projects-50-days/?src=sac&kw=50+projects+50+days)

Original HTML, CSS & Javascript provided by: Brad Traversy, Florin Pop [Udemy course 50 Projects in 50 Days](https://www.udemy.com/course/50-projects-50-days/?src=sac&kw=50+projects+50+days)