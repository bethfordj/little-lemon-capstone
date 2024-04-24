I tried doing this as a PR with comments but it was annoying, so I'm just writing them in the code

Your readme looks fine from a "showing what is the app is/does" but it's missing tech info. Readme should include:

- Required frameworks for running (with versions!) in this case node. You will look extra class if you link the 
  install page for them. Does this need a database? Does it simulate one in dev?
- Any required configuration values
- Running locally command (and for a web app what URL to go to once it's running to view)
- Running test command
- Build for production command

Otherwise: Big picture thoughts will go here. Some of these are that way because it's a test project not a real one, 
I'm sure, but just FYI:
- The App organization is slightly different than I'm used to. We usually put Components each in their own 
  folder, with their own CSS file. It's good to have CS be as local as possible for anything that isn't global styling
- Only one big fat integration test, no unit tests for individual components. Would be good to see individual test 
  classes for components/pages/service methods.
- Depending on whether you want to be completely done with this or not, I would be tempted to move the data that *should* come from another service into a stubbed service file full or hooks, or a set of stubs for a standard data loading library. It would move this a little closer to how it would actually need to work.


Unrelated to anything -- I've only ever done React in typescript. It feels so weird to have no props type declarations ;-)
#React App for the Meta Front-End Developer Certificate

This is a react app for a booking website for the Little Lemon Restauraunt. Here are some photos of the Home page, Reservations page, and Booking form.

![The home page of the app](src/assets/LLC-home.png?raw=true "Home")

![the reservations page when there are no reservations](src/assets/Reservations-none.png?raw=true "Reservations with no bookings")

![the reservations page when there is one reservation](src/assets/Reservations-1.png?raw=true "Reservations with no bookings")

![the booking form](src/assets/Book-a-Reservation.png?raw=true "Reservations with no bookings")