# Welcome to Shajara!

This is a full stack NextJs journaling application that helps keep track of your day and generate insights and mood based on how you're feeling on that day.

You can find a live preview on https://shamiri-shajara-hekzjgoex-shamiri.vercel.app/


# How to run it locally 

- Clone the workspace.
- in the projects root path run
```bash
npm  install --legacy-peer-deps
```
- create a .env folder and fill on these api keys from their respective 3rd party providers
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

DATABASE_URL=

PIXABAY_API_KEY=

ARCJET_KEY=

API_KEY=(google gemini api key)
``` 
- after completion run 
 ```bash
npm  run  dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

