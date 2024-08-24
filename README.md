# Steps to run the project
    1. Clone the Github repository
    2. Make sure you have docker
    3. Run docker-compose up --build command in the terminal
    5. The server will be running at the PORT:3000 
![image](https://github.com/user-attachments/assets/8cee5ad8-c243-499b-90e7-82c63c5e59ce)

    6. You will see the above image if access the port from the browser
    
# Steps to run the collection
    1. Import the collection of the api's from the postmanCollection folder
    2. Run the server 
    3. Create a new user
    4. login that user to get a token
    5. Run the "create-default-resturant-collection" api to add default resturant data to resturants collection
    6. Run the "create-resturant-in-db" api to add a resturant to the database -- (give token in headers)
    7. Run the "get-resturant-based-on-radius" api to find out the resturant based on radius -- (give token in headers)
    8. Run the "get-resturant-based-on-max-min-radius" api to find out the resturant based on minimum and maximum distance or radius -- (give token in headers)