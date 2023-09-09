# tari

# webapp is live, main page for the customers: https://taritari.onrender.com ,  <br>

# a page for collectors: https://taritari.onrender.com/collector , and a page for the manager: https://taritari.onrender.com/manager  .<br>

## TariTari - web app for a real business

### Used MERN STACK (MongoDB, Express, React, Nodejs)

This web app solves the manager's problem of needing to deal with the orders on phone, and directing each order to the collectors (those who prepare the orders).
on the app, the customer submits his order, and all the orders are being delivered to the collectors page, which there they have options to view all the orders and also mark/unmark as done/minimize/maximize etc.
made to improve efficiency in the work place.

to run the app, open two terminals,
on the first terminal write: 'cd backend' and then 'npm install' and then 'npm start' .
on the first terminal write: 'cd frontend' and then 'npm install' and then 'npm start' .

the app will start on the main page "localhost:3000/" which shows the order form for the customer.

and i've also implemented two separate pages:
a page for the collectors only: localhost:3000/collector
a page for the Manager only: localhost:3000/manager (this page is like the Collector page, but with the option to delete orders.)
on the home page i did not add buttons to direct to these pages, because they are not supposed to be known to the customers.


