As a concert goer, I want to be able to purchase tickets for a show online, receive email receipts for my purchases, and receive automated email reminders leading up to the date of the show.

 # Functional Requirements:

 

1. ## Ticket Purchase:
- Users can submit their contact information (email address, phone numbers) and create a temporary profile.
- Users can browse available shows, select seats, and make payments securely online.
- Users should receive a confirmation email with details of their purchase, including a receipt.

3. ## Email Reminders:

- Starting from the day of ticket purchase until the date of the show, users should receive automated email reminders.
- Reminders should be sent daily, and the frequency should increase as the show date approaches (e.g., daily reminders a week before, then twice daily reminders two days before).

 4. ## User Profile:

- Users should have a profile section where they can update their email address and other contact information.

# Non-Functional Requirements:

1. ## Security:

- The system should ensure the security of user data, including payment information.
- Passwords should be securely hashed and stored.
- Payment transactions should be conducted over secure channels (e.g., HTTPS).

2. ## Reliability:

- Email reminders should be sent reliably and promptly.
- The system should be available and responsive during peak ticket purchase times (i.e few days to the show)

3. ## Scalability:

- The system should be able to handle an increasing number of users and ticket transactions.

4. ## Usability:

- The user interface should be intuitive and user-friendly, making it easy for users to purchase tickets and manage their profile.

# Technical Document:

1. ## System Architecture:

- The web app will be built using a modern web framework i.e NodeJS.
- For email delivery, an email service provider will be integrated.
- A database (Mongo DB) will be used to store user information, purchase history, and show details.

2. ## Payment Integration:

- Payment processing will be integrated using a secure payment gateway (Paystack).
- The payment gateway will handle transactions securely and provide an API for integration.

3. ## Email Automation:

- Automated email reminders will be scheduled using a task scheduler (cron jobs) in the backend.
- The email content will be dynamically generated based on user and show data.

4. ## Security Measures:

- User passwords will be hashed using a strong cryptographic algorithm (bcrypt).
- Data transmission will be encrypted using HTTPS.
- Access control and authentication will be implemented to protect user data.

5. ## Monitoring and Logging:

- Logging and monitoring tools (e.g., Loggly, New Relic) will be implemented to track system performance and user interactions.

# Models:

1. ## Show Model:
This model represents the show or event users can purchase tickets for.
Fields include:
- Show ID
- Show name
- Show date and time
- Venue
- Ticket price

2. ## Ticket Model:
- This model represents the tickets purchased by users.
- Fields include:
- Ticket ID
- User (foreign key to the User model)
- Receipt ID
- Purchase date
3. ## Payment Model:
Fields include:
- Payment ID
- User (foreign key to the User model)
- Amount
- Payment date and time
- Payment status
- Email status (whether receipt has been sent)


# Endpoints:
1. ## Concert Endpoints:
- /api/show (GET): Retrieves a list of available concerts.
- /api/shows/:showId (GET): Retrieves details about a specific show.
- /api/shows/:showId/tickets (POST): Allows users to purchase tickets for a show.

2. ## Payment Endpoints:
- /api/payment (POST): Initiates a payment transaction.
- /api/payment/callback (POST): Handles payment callbacks and updates payment status.
3. ## Ticket Endpoints:
- /api/tickets (GET): Retrieves a list of purchased tickets for the user.
- /api/tickets/:ticketId (GET): Retrieves details about a specific ticket.
- /api/tickets/:ticketId/receipt (GET): Retrieves the receipt for a ticket.


The ER Diagram for the Database is shown below:


![Er Diagra,](<../Er Diagram.jpg>)