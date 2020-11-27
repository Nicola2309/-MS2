## Testing

The testing process below includes:
- Testing user stories
- Validating HTML, CSS and JavaScript code
- Checking responsiveness of design on all screen sizes
- Checking website compatibility on different browsers
- Manually testing the functionality of all links
- Manually testing the sign up form

Return to the general README file clicking [here](https://github.com/Nicola2309/-MS2/blob/master/README.md)

### Testing User Stories

#### project stakeholders

The creator of the website desire is to create a minimal design with all the information a user might require, so to reduce the enormous amount of data the user should 
go through in order to collect the desired places to visit and experience.

#### New User

*User one who would like to have a full-experience vacation:*
- As this user would like to have hints about the offers of the region, would land on the website and have this journey:
    * A Large background hero image in deep blue under a navbar that would lead them in the different sections of the website.
    * The sections on the website are divided in four clear groups: "Spring Waters and Spa's", "In Villages and Cities", "Local Meals", with their elements ordered from the South of Tuscany to the North, and "Planning Hints".
    * These sections can be seen in carousels after the Map API by the user, and can be viewed by the user interacting with the carousel.
    * The elements of these three groups have corresponding images that represent each of them with a title and a small related description.
    * Each group has a title above clearly anticipating the category below.
    * Each location can be seen in the map with a link to a website for deeper information.
- This user would get all the ideas he needs about the area of interest helped by the Maps API as well, and leave with a positive exprience, knowing more about Tuscany's places.

*User two needs help on planning a relaxing vacation, and searches for a service to use*
- This user wants to have a vacation focused on thermal baths and needs a service to plan it, with these options:
    * They can use the menu bar to get to the "Planning Hints" section with a form to complete with Name, Email and questions.
    * Scroll to the bottom of the page and complete the form.
    * If the user decides to visit some places and needs extra information about it can read the content under each element of the carousel:
    * If the user need to book a table or a stay in the different location he can click on the official website link and perform this operations.
- Offering these solutions eases the user's actions and leaves a positive experience.

#### Returning Users

*User one who often visits the hot baths of Tuscany:*
- This user uses the website to check which of the places has not been visited yet and what they have to offer in this way:
    * From the website he can go directly to the Map and check where has been and where to go.
    * Scroll down to the different sections to have a brief description of each place
    * Use again the map to see where the desired place is located and the services around it.
- After viewing the location the user can connect to the website of each location to use their services, having a positive experience about the trip organization.

*User two who needs more information about the less popular parts of Tuscany*:
- This user returns to the website in order to learn more or refresh the information about less known Tuscany parts in the South this way:
    * The user can scroll to the map and check which places are recommended in the rural Tuscany
    * The user can freely decide if to read the brief website description of the area or to click on the website link and learn all about it.
These navigation options leave a user with a positive experience about the usage of the website as a resource to connect to the various desired places at different levels.

### Validating the HTML, CSS and JavaScript code


#### W3C HTML Validator*
* Ran index.html through [W3C Markup Validation Service](https://validator.w3.org/) to check there were some Bad Value errors: 
    * Failed 
        - 8 images were including spaces in their source attributes
        - `type="text"` in the 'Name' section of the form was confused and referenced as `type="name"`
        - `type="text/javascript"` was included in all the scripts with Javascript generating warnings
        - Hyphens in the images were added, `type="text"` corrected, `type="text/javascript"` deleted, and tested again
	* Passed


#### W3C CSS Validator
[W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/)
* Ran style.css through validator to check there were no syntax errors: 
    * Passed with no errors
* Ran navbar.css through validator to check there were no syntax errors:
    * Passed with no errors
* Ran lightslider.css through validator to check there were no syntax errors: 
    - On lines 159-160 there were too many values
    - Removed extra values
* Passed

#### Javascript 

I used [JSHint](https://jshint.com/) to check my JavaScript Files.
This Brought up the following warnings and the step that I took to correct them:
- *lightslider.js*- The imported code passed without errors
- *script.js* - Three Semicolon were missing in my code, I corrected the errors adding semicolons accordingly. Screenshot below
![JSHint script.js errors](https://github.com/Nicola2309/-MS2/blob/master/assets/readme-pics/jshint-script.png)
- *maps.js* - received just several warnings as shown in the screenshots below.
![JSHint maps.js errors](https://github.com/Nicola2309/-MS2/blob/master/assets/readme-pics/jshint-map.png)
![JSHint maps.js errors](https://github.com/Nicola2309/-MS2/blob/master/assets/readme-pics/jshint-map1.png)
- *myemailjs.js* - Passed without errors

### Testing compatibility with different browsers

I manually tested the website on the following web browsers, checking that buttons, responsiveness and design worked as planned:
- Google Chrome 
- Mozilla Firefox 
- Microsoft Edge
- Ecosia

### Navigation

When the user clicks on navigation elements the site is expected to bring the user to the corresponding website section:

 - Controlling each navigation item link leading to the correct  section:
    * Hot Pools - Passed. The site acted as expected 
    * Historical Interest - Passed. The site acted as expected
    * Local Meals - Passed. The site acted as expected
    * Planning Hints - Passed. The site acted as expected
- Testing the navigation and the scroll to top button:
    * Mobile - Passed. The site acted as expected
    * Tablet - Passed. The site acted as expected
    * PC - Passed. The site acted as expected
    * Responsive Device Tools using dev tools - Passed. The site acted as expected


### Jumbotron

- Checking the view of the hero image and the position of the introductory sentences:
    * Hero image - Failed on small and extra small devices.
        * Centered to keep the original view - Passed
    * Introductory sentences - Failed on every screen size.
        * I added media queries to determine their distance from the top of the webpage on each screensize, then it was displayed correctly.
    

### Maps API

- Testing all the Customized Markers in the map, expected to :
    * Open an infowindow containig :
        * Fictional Image of the place, not necessarily the same as the one showed in the Carousel sections.
        * The name of the location under the picture as a title
        * A link to the official website of the location
    * Onclicking another Customized Marker the previous infowindow must be closed.
- The tests passed for every location in the map.


### Carousel Sections

- The imported carousel has been very useful to get a fast building of this tool, the owner though didn't think it for a design as responsive as I needed:
    * Responsiveness test - Failed on small and extra small devices. The content was splitted impeding a positive UX.
- Margins and paddings have been modified to make the content readable. The carousel is acting as expected in every section and screensize.


### Scroll To Top Button

- When a user lands on the website the button is not visible, it appears when the user scrolls down for 20px
    * Upon testing, the site loads without the button showing, and then displays
      the button when the user starts to scroll down the page, starting at 20px
      from the top.
- When the user clicks the button since it's visible, the will take the user to the top of the web page.
    * Upon testing the site responds as expected



### Testing the design's responsiveness on several screen sizes

I manually tested the design of the live project by doing the following:
- Using Google Developer Tools to view the project on devices with different screen sizes.
- Checking whether the Google Maps feature still worked as planned on smaller devices, without compromising the ability to view the information stored on each marker. 
- Controlling the responsiveness of the carousel imported from the tutorial linked in README, that would explain text an pictures of each element clearly on every device, being fullu visible.
- Asking for feedback from friends and family who opened and interacted with the project on their devices.
