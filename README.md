# Pet Lovers' Paradise Website:

# Phase 3:

At this point in the project, we’ve developed an enhanced interactive and user-friendly dashboard tailored for pet lovers. The goal from the beginning was to create an experience where users could explore adoptable pets and easily book essential pet care services. We started by integrating Clerk for user authentication, which allowed us to personalize the dashboard with user-specific greetings and secure access to registered user features. The dashboard UI was built using Tailwind CSS, enabling a responsive and clean layout that includes sections for adoptable pet cards and service offerings. These cards were designed with hover effects and call-to-action buttons to enhance user interaction.

As part of the booking experience, we embedded Calendly to allow users to schedule services directly from the dashboard. We implemented a floating calendar widget that appears as a bouncing icon in the corner, complete with a tooltip for clarity. When users click a “Book Now” button on a service card, the booking modal opens and dynamically passes their name and the selected service type into the Calendly URL for a personalized booking experience. While Calendly doesn’t allow pre-filling the email field due to security limitations, we were able to pass the user's full name and service type successfully.

To enhance the experience, we integrated the Calendly API to fetch real-time booking data, allowing users to view all their events directly in the dashboard. We handled API pagination to ensure all bookings were fetched, and enriched each event with invitee details. 

We used a centralized state management system using Context API and useReducer to manage the state of pet and service cards throughout the application. Along the way, we encountered some challenges—such as limitations in Calendly’s URL parameter support, but we adapted and implemented features that preserved a smooth user experience. We also modularized the reusable components to maintain a scalable and maintainable codebase.

In conclusion, this project successfully brings together a seamless user experience, efficient state management, and an intuitive UI. The dashboard is not only functional but also designed with user in mind. The journey of building this project has been rewarding.

## Setup:

- 1. Clone the repository
     git clone https://github.com/PeraltaFrian/pet_lovers_paradise.git

- 2.  Install dependencies
      npm install

- 3. Start the app with:
     npm run dev

- 4. Go to http://localhost:3000 in your browser to view the site.

Note: this requires environmental variables which is not uploaded to github

To view the live website go to below link:
Live website link: https://pet-lovers-paradise-ari9.onrender.com

## Updated Folder Structure:

Folder Structure:
   /app
   /about
      page.jsx
   /api/calendly/bookings/
      route.js
   /api
      cat.jsx
   /components
      Animaltar.jsx
      Avatar.jsx
      BookingsList.jsx
      BookingWidgetButton.jsx
      CalBookingModal.jsx
      PetfForm.jsx
      Card.jsx
      FormField.jsx
      PetCard.jsx
      Button.jsx
      Footer.jsx
      header.jsx
      NavBar.jsx
   /contact
      page.jsx
   /dashboard
      page.jsx
   /profile
      [[...rest]]
         page.jsx
   /pet
      [id]
         page.jsx
   /sign-in
      [[...sign-in]]
         page.jsx
   /sign-up
      [[...sign-up]]
      pages.jsx
   /public
      /assets
      cat.jpg
      cat2.jpg
      dog.jpg
      dog2.jpg
      grooming.jpg
      petcaregiver.jpg
      rabbit.jpg
      rabbit2.jpg
      veterinary.jpg
      globals.css
      layout.tsx
      page.tsx

## Technologies Used:

- Next.js (App Router, Client/Server Components)
- React (Functional Components, Hooks)
- Clerk (Authentication and User Management)
- Context API + useReducer (Global State Management)
- Tailwind CSS (Utility-First Styling)
- Heroicons and Lucide-react (icons)
- Framer Motion (Animation)
- Calendly (Booking Integration Widget and API)
- Render(Deployment)

## Functions:
1. User Authentication with Clerk
2. Dashboard 
   - View adorable pets for adoption
   - Explore pet services (grooming, veterinary, caregiver)
3. Submit Feedback or Enquiry via Contact us (Auto populate name and email if user is log-in)
4. Submit adoption request (Auto populate name and email if user is log-in)
5. Booking of pet service (Auto populate name and service type)
6. View all user bookings inside the dashboard.

## Additional Features:
- Users are able to book appointments using the animated calendar button (Floating Booking Widget) or by clicking the “Book Now” button under available services.
- User are able to view all their bookings inside the dashboard with important informations using Calendly API.
- Centralized state management using React Context API and useReducer.
- Fully responsive design with smooth animations and interactive icons to enhance the user experience.

## Test Instructions
1. Sign In / Sign Up using Clerk
      - Ensure authentication works and redirects properly after sign-in.
2. Profile Information
   - Upload a profile picture.
   - Update your password, username, first name, and last name.
   - Confirm that changes are reflected in the dashboard.
3. Explore the Dashboard
   - Navigate through the dashboard to view adoptable pets and available services.
   - Confirm responsive design and smooth interactions.
4. Test other pages
   - Go to the Contact or Adoption Request page. If logged in, verify that the email address and user ID are auto-populated.
5. Test the “Book Now” Button and Floating Calendar Icon
   - Click on the “Book Now” button from any service card or use the floating calendar widget.
   - Verify that the Calendly booking modal opens.
   - Confirm that the user’s name and selected service are correctly passed and displayed in Calendly.
   - Test the booking flow: Make a booking -> Confirm receipt of a booking confirmation email -> Attempt rescheduling and cancellation using the email link.
6. Test view booking function
   - Afterbooking press "Refresh Bookings" to refresh the bookings table.
   - After cancellation or reschedule "Refresh Bookings" to refresh the bookings table.

## State Management

- This project uses **Context API** with **useReducer** for managing shared global state across client components.

### Managed State Includes:

- `isMounted`: Tracks if the client-side has fully mounted to safely run client-only logic.
- `petCards`: List of available pets for adoption.
- `serviceCards`: List of available pet-related services.

### How it works:

- A custom `AppProvider` wraps the entire app in `layout.js`, making state accessible throughout the app.
- Components like `Home` and `DashboardPage` use a custom `useAppContext` hook to access and update global state.
- All state updates are triggered through a centralized reducer to ensure clean and predictable state transitions.

---

# Phase 2:

- In this phase of the project, the task was to build a responsive navigation component and implement routing to enhance the user experience with smooth and intuitive page transitions. Tailwind CSS was used to quickly create a responsive, mobile-friendly navigation design that adapts well to different screen sizes. The navigation bar provides easy access to key sections of the application, such as the home page, services, about, contacts, sign-in, sign-up, and user profile. A burger menu was implemented for smaller devices to improve usability and ensure that navigation remains clean and accessible on compact screens. To maintain consistency across the application, buttons, cards, and forms were modularized into reusable components, ensuring uniform styling and improving maintainability.

- Routing between different pages was implemented efficiently. Route guards are used to secure restricted pages such as the user dashboard, profile, and pet adoption sections. If an unauthorized user attempts to access any of these restricted areas, they are automatically redirected to the login page. This approach ensures that restricted data remain protected, creating a more secure user experience. Dynamic routing was also integrated to display individual pet profiles based on their unique identifiers. For example, routes like /pet/:id allow the application to dynamically render pet details, enabling a more personalized experience for the user.

- Several challenges were encountered during this phase. Adjusting the layout for different screen sizes was initially tricky, as some elements would break or misalign on smaller screens. Implementing the burger menu required careful handling of state to ensure smooth opening and closing. Managing redirects based on user authentication required precise state handling to prevent infinite loops and broken navigation. Configuring dynamic routing to ensure the correct data was displayed upon route changes also required proper validation. Despite these challenges, this phase significantly improved the application's usability, security, and overall user experience by making it more responsive, intuitive, and dynamic.

## Setup:

- 1. Clone the repository
     git clone https://github.com/Group2cprga/pet_lovers_paradise.git

- 2.  Install dependencies
      npm install

- 3. Start the app with:
     npm run dev

- 4. Go to http://localhost:3000 in your browser to view the site.

Note: this requires environmental variables which is not uploaded to github

To view the live website go to below link:
Live website link: https://pet-lovers-paradise.onrender.com/

Updated Folder Structure:

Folder Structure:
/pets-website
/app
/about
page.jsx
/components
PetfForm.jsx
Card.jsx
FormField.jsx
PetCard.jsx
Button.jsx
Footer.jsx
header.jsx
NavBar.jsx
/contact
page.jsx
/dashboard
page.jsx
/profile
[[...rest]]
page.jsx
/pet
[id]
page.jsx
/sign-in
[[...sign-in]]
page.jsx
/sign-up
[[...sign-up]]
pages.jsx
/public
/assets
cat.jpg
cat2.jpg
dog.jpg
dog2.jpg
grooming.jpg
petcaregiver.jpg
rabbit.jpg
rabbit2.jpg
veterinary.jpg
globals.css
layout.tsx
page.tsx

Technologies Used:
Next.js (React framework)
Tailwind CSS (CSS framework)
React Router DOM (Routing)
Clerk (Authentication SDK)
JavaScript (Programming language)

Additional Functionality:

1. The navigation bar was enhanced to display horizontally on desktop devices and use a burger menu on smaller devices. Icons were also added to improve readability and user experience.
2. The contact page was enhanced by adding a dropdown list for "Reason for Contact" and auto-populating the user's name and email if the user is logged in, making the form more user-friendly.
3. Input validations were implemented for fields such as email address, phone number, and message length, along with error prompts to guide users when their input is invalid.
4. A new page was introduced for submitting adoption requests, enabling users to apply for adoption.

Other Features Added:

1. The routing configuration was enhanced to improve navigation and page transitions.
2. Dynamic routing was added for the pet adoption request page, enabling users access pet details and submit adoption requests for specific pets.
3. Route guards were implemented to redirect users to the login page when they attempt to access protected pages.
4. Protected routes were defined to ensure that only authenticated users can access restricted sections of the application.

Testing Instructions for Phase 2:

1. Verify that the navigation bar is responsive and adjusts properly across different screen sizes.
2. Confirm that routes are accessible through the navigation bar and lead to the correct pages.
3. Confirm that the email address and user ID are auto-populated on the contact and adoption request pages if the user is logged in.
4. Test that the input validation works correctly, and ensure error prompts appear when users enter invalid data.
5. Test dynamic routes by navigating to a specific pet's details and adoption request page, ensuring the data displays correctly.
6. Test route guards by logging out and attempting to access protected pages, ensuring the user is redirected to the login page if they are not authenticated.
7. Confirm that the application redirects unauthenticated users to the login page when attempting to access protected pages.

---

Phase 1:

Developing the Pet Lovers' Paradise website was an exciting journey that involved both challenges and valuable learning experiences. Our primary goal was to create a platform where pet lovers could easily adopt pets and access services like grooming, veterinary care, and caregiving, all while ensuring a user-friendly design and seamless user registration and sign-in authentication.

We chose Clerk for authentication, which simplified the implementation of secure sign-ups, sign-ins, and profile updates. We used Next.js for its performance and Tailwind CSS for its ability to create responsive, customizable designs. Initially, we faced challenges integrating the Clerk, particularly in determining the best way to use it for user registration and ensuring proper routing to protected pages. Through this process, we learned that in addition to email and password fields, we could also add first and last name fields to the registration process. This allowed us to display the user’s name in our welcome phrase. We also learned how to set up middleware to handle protected routes, ensuring that only authenticated users could access restricted pages. During this process, we encountered issues like 404 errors (Page Not Found) and routing issues but worked through them to ensure proper access control.

We also prioritized making the website responsive across devices, using Tailwind CSS to ensure that it looked great on mobile, tablet, and desktop.

Throughout development, the main challenges we encountered were integrating third-party tools and troubleshooting authentication issues. Additionally, we prepared the "Book Now" and "Submit" buttons for future functionality, though they are not a priority at this stage. Through continuous testing and refinement, we overcame these obstacles and ensured the site functioned smoothly.

Once the website was built, we conducted thorough testing to evaluate functionality, responsiveness, and user experience. Based on the test results we made adjustments to further improve both design and functionality.

Setup:

1. Clone the repository
   git clone https://github.com/Group2cprga/pet_lovers_paradise.git
2. Install dependencies
   npm install
3. Start the app with:
   npm run dev
4. Go to http://localhost:3000 in your browser to view the site.

To view the live website go to below link:
Live website link: https://pet-lovers-paradise.onrender.com/

Folder Structure:
/pets-website
/app
/about
page.jsx
/component
Footer.jsx
header.jsx
NavBar.jsx
/contact
page.jsx
/dashboard
page.jsx
/profile
[[...rest]]
page.jsx
/sign-in
[[...sign-in]]
page.jsx
/sign-up
[[...sign-up]]
pages.jsx
/public
/assets
cat.jpg
cat2.jpg
dog.jpg
dog2.jpg
grooming.jpg
petcaregiver.jpg
rabbit.jpg
rabbit2.jpg
veterinary.jpg
globals.css
layout.tsx
page.tsx

Technologies Used:
Next.js (React framework)
Tailwind CSS (CSS framework)
Clerk (Authentication SDK)
JavaScript (Programming language)

Functionality:

1. The platform allows users to sign up with field validation and authentication.
2. Users can sign in and sign out with proper validation.
3. Users have the option to update their profile information.
4. Users can browse available pets for adoption, including details such as the pet's name and personality traits.
5. The platform provides information on pet services like Pet Grooming, Veterinary Care, and Pet Caregiving, complete with descriptions and images.
6. A "Book Now" button is available for services, although its functionality will be enhanced at a later stage.
7. There is an About page and a Contact page, which allows users to submit feedback, although the submit functionality is planned for future implementation.
8. All users including users who haven't signed up can access public pages like the main, about, and contact pages, while the profile and dashboard (Information of pets for adoption and services) are restricted to signed-in users.
9. The platform is designed to be mobile, tablet, and desktop-friendly for a seamless experience across devices.

Testing Instructions

1. Test the sign-up process by entering valid and invalid data in the required fields.
2. Ensure that proper validation occurs for required fields (First name, Last name, email, password) and that errors are shown for invalid input.
3. Verify that a new user is successfully created upon valid submission and verification as well as directed to dashboard page.
4. Test the sign-in process using valid credentials to ensure that the user is authenticated.
5. Test with invalid credentials to confirm that proper error messages are displayed.
6. Ensure that once signed in, the user can sign out successfully by clicking the profile image and choosing sign-out from the menu.
7. Test the profile update functionality by changing user information and verify that changes are saved correctly and that the updated data is displayed upon login.
8. Verify that users can browse the available pets for adoption and services with images and information.
9. Test to ensure that all users including users who haven't signed up can access public pages (main, about, contact).
10. Test to verify that only signed-in users can access the profile and dashboard (containing information about pets for adoption and services).
11. Test to ensure that users who are not signed in but attempt to access the dashboard (containing information about pets for adoption and services) will be prompted to sign in and redirected to the sign-in page.
12. Test the platform on various devices (mobile, tablet, and desktop) to ensure the layout and content adapt properly to different screen sizes.
