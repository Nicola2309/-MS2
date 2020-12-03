# Tuscany Thermal Wellness

## Code Institute: Milestone Project 2


![Tuscany Thermal Wellness Responsive Design](https://github.com/Nicola2309/-MS2/blob/master/assets/images/readme-pics/ami-responsive.png)


*Tuscany Thermal Wellness*  is a fictional travel company website that aims to promote hot springs and Spa's of Tuscany and the related activities in those areas, and provide the user with a list of beautiful, tried and highly recommended places
to visit in Tuscany. The content online about all the places to go and visit is generally too overwhelming for the user to pick their best choice in a new environment.

The idea for this project came to me in my numerous visits in the thermal sites in southern Tuscany, and I realized that those areas
are definitely not as known as northern Tuscany, which includes Florence and Pisa, but they have many tidbits to offer.
As I completed the Javascript module in the course I decided to implement in different ways throughout the project: with a Google Maps API, imported a carousel for the areas content 
from [Going-To Internet tutorial, Responsive Product Slider Using HTML CSS and Javascript](https://www.goingtointernet.com/2020/03/make-marvel-slider.html), a styled arrow to go back at the top of the page, and a form to send the organisation additional requests.

This was the second of four Milestone Projects that made up the Full Stack Web Development Program at *The Code Institute*.
The main requirements were to make an interactive and responsive website with HTML5, CSS3 and JavaScript.

[Click here to view the project live.](https://nicola2309.github.io/-MS2/)

## Table of contents

- [**UX**](#UX)
    - [Main aims](#Main-aims)
    - [User Stories](#User-Stories)
        - [Project Stakeholders](#Project-Stakeholders)
        - [New Users](#New-Users)
        - [Returning Users](#Returning-Users)
        - [Frequent User](#Frequent-User)
    - [Design Process](#Design-Process)
- [**Features**](#Features)
    - [Existing features](#Existing-website-features)
    - [Features to implement in the future](#Features-to-implement-in-the-future)
- [**Technologies used**](#Technologies-used)
- [**Testing**](https://github.com/Nicola2309/-MS2/blob/master/testing.md)
- [**Deployment**](#Deployment)
    - [Deploying my project ](#Deploying-my-project)
    - [Deploying this project to Github](#Deploying-to-GitHub-Pages)
    - [Deploying with Google Maps API](#Deploying-with-Google-Maps-API)
    - [Deploying with EmailJS](#Deploying-with-EmailJS)
- [**Credits**](#Credits)
    - [Content](#Content)
    - [Images](#Images)
    - [Additional Support](#Additional-Support)
    - [Acknowledgements](#Acknowledgements)

## UX

The site owner wants to share the experience in visiting Tuscany in a practical and easy way for a wide audience which already visits Tuscany or would like to, 
so to offer a relax focused vacation with all the classic and special places to visit.

### Main Aims

* To provide an intuitive way of locate and learn highly recommended places.

* To make the website interactive through Javascript, a Google Maps API feature, a carousel to learn about all the indicated places, and the chance to ask any related information through a form.

* To make it easy for the user to go through the website, by having a clear menu bar including links to the different page sections of the website, and a styled arrow to go back at the top of the page.

* To create a design that would be fully responsive on all devices and screen sizes.

### User Stories

The following User Stories helped me to create a design that would satisfy the needs of several different types of users.

#### Project Stakeholders

- I am the creator of the website and I want to see it succeed. I would like to attract users searching for a relaxing vacation and in need of a structured list of precious advices saving time, money and sometime the experience of the user.

#### New Users

- I am a user who is looking into a relaxing vacation in Tuscany , I want to learn more about the best things to do and see in Tuscany, its recommended restaurants, and have the best from its different areas.
- I am a user who needs help in planning a relaxing vacation in Thermal Baths. I need a reliable service to contact in order to get valuable information before my trip.

#### Returning Users

- I am a user who visits often Tuscany and its Thermal Baths. I want to use this website to see which sites I didn't visit yet and what to do in that area.
- I am a user who wants to visit the less known parts of Tuscany and I need a service that can put together the fragmented information I can find online.

#### Frequent User

- As a frequent user, I want to check to see if there are any newly added locations or activities.

### Design Process

1. Strategy plane: From the onset, I knew that my primary aim was to provide the user a service that includes the best places to visit in Tuscany, in a way that was easy, engaging and memorable. I therefore started the UX process by creating the list of User Stories above, as they helped me remember who this project was aimed for and what to create to satisfy their needs.

2. Scope plane: Having decided the main aim for the project,  I focused on the JavaScript that I wanted to implement to make the website interactive. This led me to decide that I wanted to focus on three key features: a page with a Google Maps API, a slider for extra content, and an Email service to inform the user about news. 

3. Strcuture plane: Once I had narrowed down what features I wanted to include, I began to formulate the structure of my design with a Navbar in the left side including: 'Home', 'Hot Pools', 'Historical Interest', 'Local Meals', 'Our Role', 'Contact Us'. These seemed logical to me, as the 'Home' page would welcome users to the project with a catching image and message. They would then continue to 'Hot Pools' to learn about the hot spring and Spa's in Tuscany, then to the next page: 'Historical Interest' to read more about places and cities to visit. The 'Local Meals' page would have had an extensive meals description and where to find them. Reading all the information included the 'Our Role' page should have defined the presentation odf the provider. The 'Contact Us' should have 

4. Skeleton plane: As mentioned in the Structure Plane, I had begun to consider including the main way for the user to navigate the website: the menu bar. I came to this decision whilst considering the pace that I wanted the user to navigate the website. I wanted it to be easy for them to use the menu to move between each page in order. This would keep the pace going as they swiftly move through the design, learning throughout the process before asking any news in the form. However, as well as deciding on the menu bar and buttons, this stage of my design process also helped me to think of a complete new design since I was completely not convinced by this form, which resembles more the one of a blog than the one of an interactive website.

5. Surface plane: 
    * For my design to work, I decided to shrink the different pages into one, removing the 'Our Role' section, since having all the info's in one place would have made the 'Role' way clearer to the user.
    * With this in mind, I reopened my workspace on [Figma](https://www.figma.com/file/jc8QKDwQCQ1ecvrTFuogfB/MS's) dedicated to my Milestone projects and began experimenting with my wireframe. As with my first Milestone Project, I found it useful to have my hero image in place to extract complementary colors for the theme from it. I also began searching for ideas for my Logo on [FreeLogoDesign](https://nl.freelogodesign.org/) as I felt this would be important to the theme of the design. In the end I settled with a light green, #17C094, and light blue, #1FBBCC, them for the waves which represent both the landscape and the waters.
    * I turned to Google Fonts to select the fonts for my project. I wanted to find two compatible fonts that would help to both make the design look credible (so users would take it seriously as a source of information). As a result, I settled for Cormorant SC for my titles and Sans Serif for the content. 
    * With the wireframes complete, I began experimenting with the quiz in a separate workspace to create the JavaScript needed to make this aspect of my project work. My first idea of the basic structure and code with HTML and JavaScript and the repository can be found on GitHub [here](https://github.com/Nicola2309/MS2).  


#### Colour Scheme

- The three main colours used are:
    * Blue from the hero picture: #00a4df
    * Green from the logo upper wave, used in Submit button and Social Media icons : #17C094
    * Grey of the navbar, footer and carousel box: #e5e5e5
    * White of the background: #ffffff

#### Typography

- The Cormorant SC font is the main font used for the titles of the sections and the links through the whole website with Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Cormorant SC is a clean font who communicates firmness and confidence to the user.

#### Imagery

- The large, background hero image is designed to be striking and catch the user's attention. The slightly dark blue has to give the user an immediate sense of calm and cosiness.


### Wireframing with Figma

Design for desktop devices:
[My responsive design for Desktop devices](https://github.com/Nicola2309/-MS2/blob/master/assets/images/readme-pics/rsz-wireframe-desktop.png)

Design for mobile devices:
[My responsive design for mobile devices](https://github.com/Nicola2309/-MS2/blob/master/assets/images/readme-pics/rsz-wireframe-phone.png)

Design for tablet devices:
[My responsive design for tablet devices](https://github.com/Nicola2309/-MS2/blob/master/assets/images/readme-pics/rsz-wireframe-tablet.png)

[The entire workspace can be viewed on Figma with this link.](https://www.figma.com/file/jc8QKDwQCQ1ecvrTFuogfB/MS's?node-id=0%3A1)

## Features

### Existing Website Features

* Navigation and Hero Image: 
    - The main navigation includes the Logo and a link to each of the main sections of the site, which answer each of the user questions, and is styled clear, simple and modern.
    - The Hero image was carefully chose to communicate relax and cosiness with the shades of blue, white and black characterizing it.
    - Under the Hero image the navigation options continue. The three pictures, representing the activities offered to the user and the website sections, are clickable and lead the user to the chosen part of interest to know more about.

* Google Maps API :
    - This section includes a brief explanation of itself and suggestions to search for in the maps, 'Caseificio', 'Cantina' and 'Frantoio'. The icons in the suggestions sentences become bigger when hovered so to attract the attention of the user and making even clearer what product they are searching for by using those keywords, before even reading the little explanation. The Searchbox helps the user finding every desired location making the website a reliable and useful information source by itself, being useful to the user when performing those searches rather than obligating the user, by design, to leave it and perform the searches on another one.
    - The Searchbox works thanks to the implementation of the Places API which marks on the map, using a simple mark I implemented, the place or places searched by the user.
    - The Map contains 37 advised locations, with a proper icon according to the nature of the location. If the location is a free natural pool is represented by [waves](https://github.com/Nicola2309/-MS2/blob/master/assets/images/icons/spring-icon.png), if it is a Spa by [a swimming man](https://github.com/Nicola2309/-MS2/blob/master/assets/images/icons/pool-icon.png), if it is a restaurant by [cutlery](https://github.com/Nicola2309/-MS2/blob/master/assets/images/icons/dining-icon.png), if it of historical interest is represented by a [red pushpin](https://github.com/Nicola2309/-MS2/blob/master/assets/images/icons/red-pushpin.png).
    - Every Location has its own infowindow containing a picture, the title naming the location and a link to the official website, or in the case of 'Le Caldane', a free thermal site without an official page, to the wikipedia page. The infowindow closes when another icon is clicked so to leave a good user experience.
 
* Carousel Sections :
    - The carousel sections code is imported, the sections have been completely restyled to fit with the design of my website, changed the colour, reduced the height and filled with carefully chosen pictures, listed below, and my written content. The paragraphs content is carrying the ideas of the place they refer to, and a specific description of its specialtties or peculiarities, and the reasons to visit the described place.
    - I chose this carousel because it offers a double feature of going through the content, one by just sliding by grabbing elements with the mouse on the computer or sliding with the finger on touch screen devices, or using the classic arrows in the 2 sides of the carousel. I had to bring the opacity of the arrows to 1 to be clearly visible on my grey carousel.
    - The carousel has been made responsive adjusting the size and margins of each element to look good in every screen size. The carousel indicators margins and puddings have been also resized to look good on every screen size.
    - The carousel elements are ordered from South to North of Tuscany, prioritizing the part of the region with the least amount and most fragmented content online, making known immediately to the user something else from 'Pisa' and 'Firenze' which are included but not described at all due to the highly abundant material that's already online. If needed, the user can be advised about those cities in the 'Contact Us' section.

* Contact Us Section : 
    - The little presentation of the section explains the user the purpose of the service and gives the user some ideas for questions to ask.
    - The contact form is an easy and direct way for the user to ask a question to the site owner. 
    - Once filled the contact form an alert message will show up to thank the user.
    - [EmailJS](https://www.emailjs.com/) sends the email directly from the website to the website owner and an automatic reply informing the user that the email has been received and a detailed reply answering the user questions will be sent soon.

* Scroll To Top Button :
    - This feature has been added to give the user the possibility to scroll immediately back to the top of the webpage when needed.

### Features to implement in the future

There are three features I would like to implement in the future to make the map feature even more user friendly.
* Importing infowindows from maps for the locations searched by the user, that now needs to zoom to the actual location to get the infowindow prompted.
* Show user location on the map - I would like to add this feature so that a user can easily see their location compared to the recommendations. 
* Implement the Distance Matrix API and give the possibility to see, for the user, how distant is a chosen place to another.


## Technologies Used

### Languages, libraries, frameworks, editors, API's

I used a number of languages, frameworks and tools to construct my website. These include:
* [HTML](https://html.com/)
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) 
* [JavaScript](https://www.javascript.com/) 
* [JavaQuery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/)
* [GitHub](https://github.com/)
* [GitPod](https://www.gitpod.io/)
* [Google Maps API](https://developers.google.com/maps/documentation)
* [EmailJS](https://www.emailjs.com/)

### Tools Used

* [Figma](https://figma.com/) 
    - Used to create my wireframes, showing the positioning of elements on varying screen sizes.
* [W3C HTML Validator](https://validator.w3.org/) 
    - I used this tool to check the validity of my HTML code.
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 
    - I used this tool to check the validity of my CSS code.
* [FreeLogoDesign](https://nl.freelogodesign.org/)
    - To search style and choose a design for my Logo.
* [FontAwesome](https://fontawesome.com/) 
    - I relied on a free FontAwesome arrow icon to create the animated blue and yellow icons for my project. I also used three social media icons for Twitter, LinkedIn and Facebook.
* [Pexels](https://www.pexels.com/) 
    - This was one the source of several of the images used in my project, fully referenced in the 'Media' section below.
* [Pixabay](https://pixabay.com/)
    - This was another source of several of the images used in my project, fully referenced in the 'Media' section below.
* [Photo](https://www.microsoft.com/en-us/p/microsoft-photos/9wzdncrfjbh4?activetab=pivot:overviewtab)
    - I used this tool to modify the background hero image.
* [Free Online Spell Check Tool](https://www.internetmarketingninjas.com/online-spell-checker.php)
    - I used this tool to identify typos in my README.md, testing.md and index.html files.
* [Google Fonts](https://fonts.google.com/)
    - I used two complementary fonts from Google for my project: Cormorant SC and Sans Seriff. 
* [W3C Markup Validation Service](https://validator.w3.org/) 
    - This was a great tool throughout the project to check whether there were any errors in my HTML and CSS code (as discussed in more detail below).
* [JSHint](https://jshint.com/) 
    - This tool helped me test my JavaScript and jQuery code (explained in more detail in the Testing section below). 
* [PicResize](https://picresize.com/en/results)
    - To resize wirframes pictures.
* [AmIResponsive](http://ami.responsivedesign.is/#)
    - To implement the responsive image of my website in the project.


## Testing

Please view the complete testing process in this separate document [here](https://github.com/Nicola2309/-MS2/blob/master/testing.md).



## Deployment

### Deploying my project 

I created my project on GitHub and used GitPod's development environment to write my code. 
Use the following link to view my live project: [Tuscany Theraml Wellness](https://nicola2309.github.io/-MS2/)

#### Deploying to GitHub Pages
To make my project viewable to others, I deployed my project to GitHub Pages with the following process:

1. In my project repository on Github open the 'Settings' section.
2. I scrolled to the 'GitHub Pages' section.
3. I selected 'master branch' as my Source.
3. This deployed my project on GitHub Pages and allowed me to share the live website with others. 

More information about this process can be found on the following link: [Configuring a publishing source for your GitHub Pages site](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

#### Deploying with Google Maps API

I integrated Google Maps API to my website in the following way:
1. I navigated to Gooogle's [Getting started with Google Maps Platform](https://developers.google.com/maps/gmp-get-started), where I set up an account my account.
2. From there I selected 'Maps JavaScript API' and 'Places API', an API key with these steps on [here.](https://developers.google.com/maps/documentation/javascript/get-api-key)
3. Once I had set up my Google Maps feature in my project as described [here](https://developers.google.com/maps/documentation/javascript/tutorial), I restricted the key's access to only my project's URL to limit its use for no other purposes.

The above process can be copied if you would like to deploy a project with the Google Maps API feature.

#### Deploying with EmailJS

I used EmailJS to automatically send an email to the admin and reply automatically each time a user submits the form. These features can be implemented as follows:
1. I created an account with EmailJS and navigated to this [page](https://www.emailjs.com/docs/tutorial/adding-email-service/)
2. I followed the steps from the tutorial, creating a template and adding the EmailJS javascript library to my project.
3. I chose to stay with a free account, which limits my monthly quota to 200 emails per month.

The above process can be copied if you would like to deploy a project with the EmailJS service.

### Cloning my project

If you would like to work on my project further you can clone it to your local machine using the following steps:

1. Scroll to the top of my repository and click on the "clone or download button"
2. Decide whether you want to clone the project using HTTPS or an SSH key and do the following:
    * HTTPS: click on the checklist icon to the right of the URL
    * SSH key: first click on 'Use SSH' then click on the same icon as above
3. Open the 'Terminal'
4. Change the current working directory to the location where you want the cloned directory
5. Type 'git clone', and then paste the URL you copied earlier.
6. Press 'Enter' to create your local clone.
    
You can find both the source of this information and learn more about the process on the following link: [Cloning a Repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Credits

### Content

Website Text: All the text in the website was written by myself.

### Images

The images are from Pexels, and Pixabay and are referenced below. 

#### Pexels

- [Image of towel, rose and candles](https://www.pexels.com/photo/love-romantic-bath-candlelight-3188/)
- [Image of girl in black bathing suit in a pool](https://www.pexels.com/photo/woman-in-black-tank-top-in-water-4635389/)
- [Image of two girls immersed in water watching landscape](https://www.pexels.com/photo/two-women-in-swimming-pool-1418519/)
- [Image of a pool on landscape](https://www.pexels.com/photo/bath-clean-holiday-hotel-221457/)
- [Image of a chalet in the woods on a lake](https://www.pexels.com/photo/beautiful-building-chalet-conifers-449461/)
- [Image of a girl in a large round pool](https://www.pexels.com/photo/topless-woman-in-pool-facing-trees-during-night-time-9422/)
- [Image of a woman floating in water](https://www.pexels.com/photo/calm-woman-lying-in-bathtub-5403574/)
- [Image of woman just emerged from pool](https://www.pexels.com/photo/happy-tattooed-woman-in-bathrobe-at-table-with-decorative-flowers-5731220/)
- [Image of a woman walking in pool](https://www.pexels.com/photo/stylish-woman-in-swimsuit-in-swimming-pool-5731221/)
- [Image of woman in pool, near water stream](https://www.pexels.com/photo/dreamy-woman-with-tattoo-under-water-flow-in-swimming-pool-5731224/)
- [Image of woman in pool under waterstream](https://www.pexels.com/photo/dreamy-woman-with-makeup-enjoying-water-in-swimming-pool-5731222/)
- [Image of hot spring water from above](https://www.pexels.com/photo/landscape-of-blue-lake-surrounded-by-rocky-terrain-5808832/)
- [Image of a lake between mountains](https://www.pexels.com/photo/daylight-forest-glossy-lake-443446/)
- [Image of a cave](https://www.pexels.com/photo/lighted-cave-849385/)
- [Image of Santa Maria del Fiore Cathedral](https://www.pexels.com/photo/brown-and-white-concrete-building-4179480/)
- [Image of Pisa Tower and Dome](https://www.pexels.com/photo/leaning-tower-of-pisa-1144276/)
- [Image of Tower among buildings](https://www.pexels.com/photo/low-angle-photograph-of-concrete-tower-2042109/)
- [Image of old stone village](https://www.pexels.com/photo/group-of-people-on-a-bridge-of-an-old-building-2376789/)
- [Image of Sunset behing a little tower](https://www.pexels.com/photo/gray-concrete-triumphal-arch-surrounded-by-flowers-1055068/)
- [Image of boats on land and castle in the back](https://www.pexels.com/photo/conwy-castle-3341054/)
- [Image of cave and water](https://www.pexels.com/photo/water-under-caved-2432208/)
- [Image of Lucca square](https://www.pexels.com/photo/photo-of-the-saint-martin-cathedral-in-lucca-italy-2684808/)
- [Image of a square in a little village](https://www.pexels.com/photo/brown-building-2921608/)
- [Image of hot water in rock](https://www.pexels.com/photo/mineral-hot-springs-in-geothermal-area-against-overcast-day-4558356/)
- [Image of Church of San Domenico](https://www.pexels.com/photo/ancient-architecture-basilica-of-san-domenico-building-236516/)
- [Image of dining room with black tables and chairs](https://www.pexels.com/photo/table-in-vintage-restaurant-6267/)
- [Image of dining room in brown and white](https://www.pexels.com/photo/clear-wine-glass-on-table-67468/)
- [Image of two dishes brought from a waiter](https://www.pexels.com/photo/blur-breakfast-chef-cooking-262978/)
- [Image of a chef composing dishes on round tree chunks](https://www.pexels.com/photo/chef-preparing-vegetable-dish-on-tree-slab-1267320/)
- [Image of a dining room in the evening](https://www.pexels.com/photo/chair-cutlery-diner-dining-941861/)
- [Image of a glass of wine and a salad bowl on table](https://www.pexels.com/photo/blur-close-up-cutlery-dining-370984/)
- [Image of brown table with cutlery on in restaurant room](https://www.pexels.com/photo/menu-restaurant-france-eating-9315/)
- [Image of different dishes on black table](https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/)
- [Image of steak and veggies on white plate](https://www.pexels.com/photo/selective-focus-photography-of-beef-steak-with-sauce-675951/)
- [Image of brown and white restaurant room](https://www.pexels.com/photo/people-inside-room-and-surrounding-table-1581554/)
- [Image of filet and veggies](https://www.pexels.com/photo/cuisine-cutlery-delicious-dining-299348/)
- [Image of woman holding a red wine glass at restaurant table](https://www.pexels.com/photo/woman-holding-wine-glass-selective-focus-photography-1850595/)
- [Two ladies having dinner at a restaurant terrace](https://www.pexels.com/photo/woman-eating-bruschetta-1537635/)
- [Two ladies having lunch in a restaurant](https://www.pexels.com/photo/woman-drinking-wine-761854/)



#### Pixabay

- [Image of a pond in a park](https://pixabay.com/id/photos/taman-kolam-refleksi-lanskap-air-1601068/)
- [Image of San Gimignano towers](https://pixabay.com/id/photos/torre-tinggi-kemegahan-megah-5393308/)
- [Image of Torre Guinigi from far](https://pixabay.com/id/photos/lucca-tuscany-italia-atap-ubin-4521699/)
- [Image of a walled medieval village](https://pixabay.com/it/photos/portogallo-bragan%C3%A7a-bastioni-tours-971599/)
- [Image of Pienza square](https://pixabay.com/it/photos/pienza-piazza-papa-pio-ii-toscana-509194/)
- [Image of Pitigliano from far](https://pixabay.com/it/photos/pitiglioano-tramonto-tuscany-italia-4520515/)
- [Image of Siena center from above](https://pixabay.com/it/photos/italia-tuscany-siena-centro-storico-3602993/)
- [Image of woman with hat in pool](https://pixabay.com/it/photos/piscina-nuoto-relax-spa-di-lusso-690034/)
- [Image of Yellow and whit flower in front of a pool](https://pixabay.com/it/photos/fiore-frangipani-piscina-tropicale-1460889/)
- [Image of a guy bathing in a pool, calcium carbonate in the back](https://pixabay.com/photos/thermal-bath-water-spa-wellness-2044952/)
- [Image of Saturnia Thermal pools](https://pixabay.com/photos/tuscany-saturnia-maremma-italy-3587073/)
- [Image of the sky from the inside of a brown building](https://pixabay.com/photos/architecture-clouds-wall-5433366/)


### Additional Support

I used these tutorials to help me complete and make functional the notions absorbed from Google Docs, which were very useful but not as much as these tutorials who showed me practically the action of every function and guided me to the understanding of the Google Maps API and its functionalities like Customing Markers, Closing the InfoWindow after clicking on another marker for a better UX, and adding the Places API to implement the SearchBox on top of the map.

* [Maps Markers and Infowindo Tutorial](https://www.youtube.com/watch?v=Xptz0GQ2DO4&ab_channel=PradipDebnath)
* [Maps Places API Tutotial](https://www.youtube.com/watch?v=oVr6unKZbg4&ab_channel=DevelopMindfully)
* [Resizing Maps Markers Tutorial](https://www.youtube.com/watch?v=Zxf1mnP5zcw)
* [Scroll to top Button, W3School](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)


I used the code from this Tutorial and this source to have a consistent Carousel in Javascript in my project, wishing to be able to build it all by myself the next time I need one.

* [Carousel Tutorial](https://www.youtube.com/watch?v=drOgpionKpY&ab_channel=Going-ToInternet)
* [Github Page](https://github.com/sachinchoolur/lightslider)


### Acknowledgements

Thank you to the following people who helped with support, inspiration and guidance at different stages in the project:

- The guidance and support of my mentor Seun Owonikoko
- The supportive *Code Institute* community, including my fellow students and the tutor support team
- [Michelle Clement](https://github.com/michellelclement) and [Miranda Thewlis](https://github.com/mkthewlis) for their useful and well made repositories, where I could see which tutorials were better to follow and use part of the highlighted usable Readme file parts
- My family and friends for their patience and honest critique throughout



