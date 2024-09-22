![flowchart](https://github.com/user-attachments/assets/50d9c9ca-344f-48d0-b12a-5dddb5e0dc25)
<img width="458" alt="Person(Voter and Admin)" src="https://github.com/user-attachments/assets/8bbe7e61-3209-45ca-9904-96b96b5d0925">
<img width="448" alt="Candidate" src="https://github.com/user-attachments/assets/52f13d58-2504-4721-885b-5c8661b6799d">

**Voting App**



**1.Overview**



This is a backend application for a voting system that allows users to securely vote in an election. The app has different roles for users such as Voter and Admin, and each role has specific functionalities. Voters can view a list of electors, cast their vote, and view vote counts. Admins can manage the electoral process by adding, updating, or removing electors.



**2.Features**



**a. User Authentication:**


Users can create an account and log in using their credentials.

**b. Profile Management:**


Users can view and update their profile details including password changes.


**c. Voting:**


 Users with the Voter role can cast votes for their chosen electors.

 Voters can view a list of electors and check the voting count.
 

**d. Electoral Management:**


 Users with the Admin role can manage electors by adding, updating, or deleting them.
 


**3.API Endpoints**



**a. Authentication**


 Login: /login - Allows users to log in.
 
 Sign Up: /signup - Allows users to create a new account.
 

**b. Profile Management**

   
 Access Profile: GET /profile - Fetches the details of the logged-in user.
 
 Change Password: PUT /profile/password - Allows the user to update their password.
 

**c. Voting**


 View Electors: GET /electors - Fetches a list of available electors.
 
 Vote for Elector: POST /vote/:electorID - Allows the user to vote for a specific elector.
 
 Vote Count: GET /vote/count - Retrieves the total votes cast.

 
**d. Electoral Management (Admin)**


 Create Elector: POST /electors - Allows admins to add a new elector.
 
 Update Elector: PUT /electors/:electorID - Allows admins to update an elector’s details.
 
 Delete Elector: DELETE /electors/:electorID - Allows admins to remove an elector.

 

**4.Flow Diagram**



The flow diagram attached in repository illustrates the different user roles and their corresponding interactions with the system.
