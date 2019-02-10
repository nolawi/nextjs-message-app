# NextJS message app

### Todo

- [x] figure out what nextjs does?
- [x] Show form index page
- [x] `/api/guestbook`
- [x] fetch
- [x] pages guestbook/ home views
- [x] fetchmessage
- [x] navigation
- [x] bootstrap (bonus)
- [x] Code linting (bonus)
- [ ] resets with a success message
- [x] Form/show an error
- [ ] Unit tests (bonus)




A basic boilerplate for nextjs challenge

You are responsible for writing a node app using nextjs. Your app will consist of two pages (a form, and a feed), and a server that reads and writes to the feed.

Challenge: Create a new Github project with NextJS and React that meets the following criteria:
1. Starts with the command `npm i && npm dev`
2. Shows a form with “name” and “message” when it runs at localhost:3000
3. When submitting form, runs a `POST` to `/api/guestbook` and resets with a success message (should show an error if things are missing).
4. A link on the homepage takes you to `/guestbook` and shows all posts that have been submitted from the previous form.
  - A link on that page exists to go back to the homepage
  - You do not need to persist that data in any database, just keep it in memory.

##### BONUS

Feel free to add the following
1. Add some UI/UX features
2. Unit tests (coverage)
3. Code linting
