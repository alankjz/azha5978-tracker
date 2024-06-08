# Word tracker (Word Bank)


## Overview
The Word Tracker is a straightforward web application designed to help users monitor and expand their vocabulary by tracking new words they learn. It is built using basic HTML and JavaScript, with data persistence handled through localStorage.

### Version Control
This project utilizes Git and GitHub for version control and development management. You can view the GitHub repository here: [https://github.com/alankjz/azha5978-tracker].

## Features

- **Text Word Bar/Log Button**: The text box for word entry is designed to resemble Google's main search page, offering a familiar user experience. Upon entering a word and pressing "Log Word," users are redirected to the next section of the site, where the first box is automatically filled with the entered word, enhancing and streamlining the process.

- **Word Entry WOrd**: The "New Word Entry" form includes fields for documenting newly learned words, along with relevant variables. It features a dropdown menu for selecting the word type and confidence level, providing bounded answer options. Additionally, a hover effect is applied to the "Add Word" button to enhance interactivity.

- **Word Bank**: The Word Bank stores logged words, displaying each entry with its details. The word itself is bolded for easy identification, with the accompanying details listed below for clarity. Each entry includes a "Delete" button on the right, which features a hover effect to enhance interactivity. As the list grows, users can scroll through the Word Bank within the "Word Bank" section to view all their logged words.

- **Responsive Design**: All scaling, dimenstions and layout avoided static units such as px and instead vh, vw and em to fit a range of device screen sizes and aspect ratios.

## Setup 
No Setup is required.

## Usage
1. Running it as a Live Server directly from 'index.html'
2. Running it on a local server with "npm run start"

When webpage is open the expected procedure would be:
1. Enter word in text bar
2. Redircted to the form section, fill in other details
3. View logged words in Word Bank and make and deleted records if desired.

This website is tailored for individuals embarking on language learning journeys who seek accountability through digital documentation. Users can maintain a logbook of their learning progress by conveniently logging any newly acquired language skills and knowledge.

## Limitations
localStorage limitations, which is limited to the brower and device. Records and data cannot be transfered, shared or opened on different devices.

## Acknowledgments
### Sources
#### Online
I used a custom font from Google Fonts, Link : [https://fonts.google.com/specimen/Josefin+Sans]

#### Class Modules Refered to
- Week 4, 7, 8, 10 

### AI Usage Acknowledgements
This project used AI (ChatGPT4) with assiting: 
- Cloning the response logged in the inital word bar into the first section of New Word Entry Form.
- Styling Buttons and Hover Button Interactions
- Styling list layout in Word Bank
- Cross checking for intial errors with integrating a local storage.