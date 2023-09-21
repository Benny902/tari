# tari

## webapp is deployed, main page for the customers: https://tari-tari-5c1910427284.herokuapp.com ,  <br>
(the current database is for testing, feel free to add/delete orders)
## a page for collectors: https://tari-tari-5c1910427284.herokuapp.com/collector , <br>
and a page for the manager: https://tari-tari-5c1910427284.herokuapp.com/manager  .<br>

## TariTari - web app for a real business in israel, therefore made in Hebrew for the business to use.
also implemented RTL (Right To Left), because the Hebrew language is written from Right to Left.

### Used MERN STACK (MongoDB, Express, React, Nodejs)

This web app solves the manager's problem of needing to deal with the orders on phone, and directing each order to the collectors (those who prepare the orders).
on the app, the customer submits his order, and all the orders are being delivered to the collectors page, which there they have options to view all the orders and also mark/unmark as done/minimize/maximize etc.
made to improve efficiency in the work place.

to run the app, open two terminals,

on the first terminal write: 'cd backend' and then 'npm install' and then 'npm start' .  

on the second terminal write: 'cd frontend' and then 'npm install' and then 'npm start' .  

the app will start on the main page "localhost:3000/" which shows the order form for the customer.

and i've also implemented two separate pages:
a page for the collectors only: localhost:3000/collector,  
and a page for the Manager only: localhost:3000/manager (this page is like the Collector page, but with the option to delete orders.)  

on the home page i did not add buttons to direct to these pages, because they are not supposed to be known to the customers.


1. Main homepage,   2. after pressing submit order (סיום הזמנה),   


![image](https://github.com/Benny902/tari/assets/73943596/2b3b8a19-b6be-45d5-a1ac-04b0a1b4ed92) ![image](https://github.com/Benny902/tari/assets/73943596/59cb2118-d43d-4253-8284-1ff23b933cb4) 



3. Collector's page,   4. Manager's page (the difference is the Delete(מחק) button option:


![image](https://github.com/Benny902/tari/assets/73943596/a43b4684-feda-4aad-9877-53be259fa5e2) ![image](https://github.com/Benny902/tari/assets/73943596/30e87240-62d0-43be-88d1-1062119a7631)



5. marked the last order as done,   6. minimized that order:


 ![image](https://github.com/Benny902/tari/assets/73943596/0c0f8a98-47be-4042-9bef-7dc2538f2669) ![image](https://github.com/Benny902/tari/assets/73943596/108974f7-8963-4d9a-9d0f-6dcd8e74b3ad)



