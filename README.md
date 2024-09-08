Voting App


Overview


This is a Voting Application that allows users to securely vote in an election. The app has different roles for users such as Voter and Admin, and each role has specific functionalities. Voters can view a list of electors, cast their vote, and view vote counts. Admins can manage the electoral process by adding, updating, or removing electors.

Features

User Authentication: Users can create an account and log in using their credentials.
Profile Management: Users can view and update their profile details including password changes.

Voting:
Users with the Voter role can cast votes for their chosen electors.
Voters can view a list of electors and check the voting count.

Electoral Management:
Users with the Admin role can manage electors by adding, updating, or deleting them.

API Endpoints

Authentication
Login: /login - Allows users to log in.
Sign Up: /signup - Allows users to create a new account.

Profile Management
Access Profile: GET /profile - Fetches the details of the logged-in user.
Change Password: PUT /profile/password - Allows the user to update their password.

Voting
View Electors: GET /electors - Fetches a list of available electors.
Vote for Elector: POST /vote/:electorID - Allows the user to vote for a specific elector.
Vote Count: GET /vote/count - Retrieves the total votes cast.

Electoral Management (Admin)
Create Elector: POST /electors - Allows admins to add a new elector.
Update Elector: PUT /electors/:electorID - Allows admins to update an elector’s details.
Delete Elector: DELETE /electors/:electorID - Allows admins to remove an elector.

Flow Diagram
The flow diagram attached in repository illustrates the different user roles and their corresponding interactions with the system.
