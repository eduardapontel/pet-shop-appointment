# Pet World 🐾

**Pet World** is a web application developed to streamline and organize appointment scheduling between pet owners and pet shops. It offers an intuitive and user-friendly interface to help manage bookings efficiently throughout the day.

<br>

## Layout 🎨

The layout for this project was created by Rocketseat using Figma. You can view the layout file and its components by visiting the following link: [Figma Layout](https://www.figma.com/design/TlmAT1xl4ItL29bKjFcNto/Agendamento-de-petshop--Community-?node-id=0-1&p=f&m=dev).

The layout showcases the structure, color scheme, and visual design of the web application, providing a clear reference for the development of the project.

<br>

## Features ✨

- Add new appointments;
- View appointments categorized by time of day (morning, afternoon, and evening);
- Delete an appointment;
- Filter appointments by date.

<br>

## Project Structure 🗂️

1. `pet-shop-appointment/`
   - `index.html`: The main HTML file that serves as the entry point for the application.
   - `package.json`: Contains metadata about the project, including dependencies and scripts.
   - `package-lock.json`: Locks the versions of dependencies for consistent installs.
   - `server.json`: Configuration file for server settings.
   - `webpack.config.js`: Configuration file for Webpack, a module bundler used to compile and bundle the project's assets.

2. `pet-shop-appointment/src/`
   - Contains the main source code for the application.
     - **`assets/`**: Contains static assets such as images and icons used in the application.
       - Example files: `dog.svg`, `calendar.svg`, etc.
     - **`libs/`**: Contains third-party libraries or custom utility libraries.
       - Example file: `dayjs.js` (likely a date manipulation library).
     - **`modules/`**: Contains different modules or components of the application.
       - **`form/`**: Contains files related to form handling.
         - Example files: `show.js`, `submit.js`, etc.
       - **`schedules/`**: Contains files related to schedule management.
         - Example files: `load.js`, `show.js`, etc.
     - **`services/`**: Contains service files that handle API calls or business logic.
       - Example files: `api-config.js`, `new-schedule.js`, etc.
     - **`styles/`**: Contains CSS files for styling the application.
       - Example files: `modal.css`, `global.css`, etc.
     - **`main.js`**: The main JavaScript file that initializes the application and may include the logic to render components or handle routing.

<br>

## Getting Started 🚀

- Access it directly by clicking [here](https://eduardapontel.github.io/pet-shop-appointment/).

**Or** follow the steps below to run it locally:

1. Clone the repository

```bash
git clone https://github.com/eduardapontel/pet-shop-appointment.git
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npm run server
```

4. Start the application
```bash
npm run dev
```

<br>

## Contributing 🤝

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are always welcome!
