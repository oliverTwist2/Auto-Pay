As a concert goer, I want to be able to purchase tickets for a show online, receive email receipts for my purchases, and receive automated email reminders leading up to the date of the show.

 # Functional Requirements:

 

## 1. Ticket Purchase:
- Users can browse available show, and make payments securely online.
- Users should receive a confirmation email with details of their purchase, including a receipt.

## 3. Email Reminders:

- Starting from the day of ticket purchase until the date of the show, users should receive automated email reminders.
- Reminders should be sent daily, and the frequency should increase as the show date approaches (e.g., daily reminders a week before).

# Non-Functional Requirements:

## 1. Security:

- The system should ensure the security of user data, including payment information.
- Payment transactions should be conducted over secure channels (e.g., HTTPS).

## 2. Reliability:

- Email reminders should be sent reliably and promptly.
- The system should be available and responsive during peak ticket purchase times (i.e few days to the show)

## 3. Scalability:

- The system should be able to handle an increasing number of users and ticket transactions.

## 4. Usability:

- The user interface should be intuitive and user-friendly, making it easy for users to purchase tickets.

# Technical Document:

## 1. System Architecture:

- The web app will be built using a modern web framework i.e NodeJS.
- For email delivery, an email service provider will be integrated.
- A database (Mongo DB) will be used to store user information, purchase history, and show details.

## 2. Payment Integration:

- Payment processing will be integrated using a secure payment gateway (Paystack).
- The payment gateway will handle transactions securely and provide an API for integration.

## 3. Email Automation:

- Automated email reminders will be scheduled using a task scheduler (cron jobs) in the backend.
- The email content will be dynamically generated based on user and show data.

## 4. Security Measures:

- Data transmission will be encrypted using HTTPS.


# Models:

## 1. Ticket Model:
This model represents the tickets purchased by users.
Fields include:
- Ticket ID
- User (foreign key to the User model)
- Receipt ID
- Purchase date

## 2. Payment Model:
- Fields include:
- Payment ID
- User (foreign key to the User model)
- Amount
- Payment date and time
- Payment stat	us
- Email status (whether receipt has been sent)  

# Endpoints:
## 1. Payment Endpoints:
- /api/payment (POST): Initiates a payment transaction.
- /api/payment/callback (POST): Handles payment webhooks and updates payment status.
## 2. Ticket Endpoints:
- /api/tickets (GET): Retrieves a list of purchased tickets for the user.
- /api/tickets/:ticketId (GET): Retrieves details about a specific ticket.
- /api/tickets/:ticketId/receipt (GET): Retrieves the receipt for a ticket.


# The ER Diagram

 

The ER Diagram for the Database is shown below:


![Er Diagra,](<Er Diagram.jpg>)