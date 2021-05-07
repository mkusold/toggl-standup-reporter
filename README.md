# Remote Standup

Are you sick of having to hand-draft a daily remote standup email? This tool integrates Toggl Time Tracking with Gmail email drafts so you can automate your worries away.

## Setup

1. Run `yarn && cp .env.example .env`
1. Log into Toggl and go to https://track.toggl.com/profile and copy and paste the API Token into the `.env` file.
1. We also need the workspace ID which is a bit harder to find. Click on the Settings page in the side nav. Now look in the URL. It should look something like `https://track.toggl.com/{WorkspaceID}/settings/general`. Copy your workspace ID from here into your `.env` file.
