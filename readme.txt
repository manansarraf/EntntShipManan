# Ship Maintenance Dashboard

A fully frontend React-based dashboard designed for managing ships, their components, and maintenance jobs. This project was built as part of a technical assignment for ENTNT. It uses `localStorage` to simulate data persistence and includes user authentication, role-based access, and CRUD functionality.


Deployed on: Netlify 

Tech Stack:

- React.js  (for UI/UX part)
- React Router (for page rendering part)
- TailwindCSS(for styling part)
- Chart.js (To show statistical data in form of pie chart)
- LocalStorage (No backend/API used)



User Authentication

- Hardcoded users with roles: `Admin`, `Inspector`, `Engineer`
- Email/password login
- Session persistence using `localStorage`
- Role-based route protection

Ships Management

- View list of ships with fields: Name, IMO Number, Flag, Status
- Add, edit, and delete ships
- View detailed ship profile with:
  - General information
  - Maintenance history
  - Installed components

Components Management

- Add, edit, and delete ship components
- View detailed component info linked to specific ships

Jobs Management

- Schedule, edit, and delete jobs
- View recent jobs on the dashboard
- Calendar view of scheduled maintenance jobs

Dashboard KPIs

- Cards showing:
  - Total ships
  - Total components
  - Total jobs
- Interactive pie chart of ship statuses

Notification System

- Toast-based in-app notifications after actions like create/update/delete



Sample Users(Mock data for testing)
Admin - admin@entnt.com/admin123
Inspector - inspector@entnt.com/test123   
Engineer - engineer@entnt.com/engine123    




                    project setup and Dependencies installation:
npx create-react-app ship-maintenance-dashboard
cd ship-maintenance-dashboard
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p



how to run project?
in terminal write- npm run dev


