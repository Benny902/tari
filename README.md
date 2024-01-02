# tari

### webapp is deployed, main page for the customers: https://tari-tari-5c1910427284.herokuapp.com ,  <br>
(the current database is for testing, feel free to add/delete orders)
### a page for collectors: https://tari-tari-5c1910427284.herokuapp.com/collector , <br> and a page for the manager: https://tari-tari-5c1910427284.herokuapp.com/manager  .<br>

## TariTari - web app for a real business in israel, therefore made in Hebrew for the business to use.
also implemented RTL (Right To Left), because the Hebrew language is written from Right to Left.

### Used MERN STACK (MongoDB, Express, React, Nodejs)

This web app solves the manager's problem of needing to deal with the orders on phone, and directing each order to the collectors (those who prepare the orders).
on the app, the customer submits his order, and all the orders are delivered to the collectors page, which there they have options to view all the orders and also mark/unmark as done/minimize/maximize etc.
made to improve efficiency in the workplace.

to run the web app locally, open two terminals :<br>
on the first terminal, write: 'cd backend' and then 'npm install' and then 'npm start' .  <br>
on the second terminal, write: 'cd frontend' and then 'npm install' and then 'npm start' .  <br>
The app will start on the main page "localhost:3000/" , which shows the order form for the customer.<br>

and i've also implemented two separate pages:
a page for the collectors only: localhost:3000/collector,  
and a page for the Manager only: localhost:3000/manager (this page is like the Collector page, but with the option to delete orders.)  

on the home page, I did not add buttons to direct to these pages because they are irrelevant and not supposed to be known to the customers.


1. Main homepage; 2. Filling form;  3. After pressing submit order (סיום הזמנה);   

<img src="https://github.com/Benny902/tari/assets/73943596/5e3d520a-3138-417c-a3c6-34e89dc859b4" width="250">
<img src="https://github.com/Benny902/tari/assets/73943596/a9f75a85-f535-4e77-868c-37300df64f65" width="250">
<img src="https://github.com/Benny902/tari/assets/73943596/b7c066b1-b53e-41e5-93bb-1f27e670ea57" width="250">



4. Collector's page;   5. Manager's page (the difference is the Delete(מחק) button option; 6. marked order as done & minimized; 

<img src="https://github.com/Benny902/tari/assets/73943596/e894b509-f109-43cf-9b5f-581f7fe07053" width="250">
<img src="https://github.com/Benny902/tari/assets/73943596/94402870-3330-460b-b560-7f1c750c22ad" width="250">
<img src="https://github.com/Benny902/tari/assets/73943596/ec3d0243-89ef-440d-a06a-c951f69fb1aa" width="250">


