# React + Vite

# React Router Application
This React application utilizes the react-router-dom library to manage routing and navigate between different pages. It's organized into layouts and pages for different sections of the application.

## Project Structure
The project follows a structure where layouts and pages are defined for different sections. Here's an overview:

## Layouts
### RootLayer
The main layout that acts as the base for the entire application.

### HelpLayout
Layout for the help section of the application.

### CareersLayout
Layout specific to the careers section.

## Pages
### Home
The main landing page of the application.

### About
Page providing information about the application.

### FAQ
Page containing frequently asked questions.

### Contact
Page allowing users to get in touch. Contains actions for contact.

### Careers
Page displaying available career options.

### NotFound
404 error page for routes that don't match any defined paths.

### CareersData
Page showing specific details of a career option.

### ErrorData
Error page for the careers section.

## Routing Setup
The routing is configured using the createBrowserRouter function from react-router-dom. Routes are defined with corresponding components and paths:

Home: /
About: /about
FAQ: /help/faq
Contact: /help/contact
Careers: /careers
CareersData: /careers/:id (specific career details)
NotFound: (catch-all for non-existing routes)
