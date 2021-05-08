# Remote Standup

Are you sick of having to hand-draft a daily remote standup email? This tool integrates Toggl Time Tracking and generates an HTML file that can be copied and pasted into your email client so you can automate your worries away.

## Setup

1. Run `yarn && cp .env.example .env`
1. Log into Toggl and go to https://track.toggl.com/profile and copy and paste the API Token into the `.env` file.
1. We also need the workspace ID which is a bit harder to find. Click on the Settings page in the side nav. Now look in the URL. It should look something like `https://track.toggl.com/{WorkspaceID}/settings/general`. Copy your workspace ID from here into your `.env` file.
1. To run in the background forever and on startup, run `npm install forever -g`
1. Then kick off the program by running `forever start -v --minUptime 5000 --spinSleepTime 2000 -c "yarn start" ./`
