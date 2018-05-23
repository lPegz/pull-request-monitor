# Pull Request Control

Show all Pull Requests opened in the repositories you have interesting on whether you are a reviewer/assigner.

## Requirements

You must create 3 keys on the localStorage
- github_token: GitHub access token that you can create in [settings page](https://github.com/settings/tokens). 
  - Permissions required:
    - Repo:
      - public_repo
    - Admin:
      - read:org
- github_login: Login from you GitHub
- github_url: Base URL from the GitHub you want to retrieve the information (eg.: https://api.github.com)

You can storage the key in the a file .github_token, which is being considered in our .gitignore file.

# Running

1. Clone the repository and get into the folder created
2. `npm i`
3. `npm start`
4. The browser should be opened automatically

# TODO'S

### Required

System should be able to:
- [x] Retrieve and show Organizations and Repositories
- [ ] Retrieve and show pull requests for selected repositories
- [ ] Store repositories selected into localStorage
- [ ] Retrieve and show which user is marked as reviewer or assigned to

User should be able to:
- [ ] Select repositories to monitor the pull request
- [ ] Change the repositories selected
- [ ] Filter
- [ ] Change the query parameters
- [ ] Clear the query

**All feedbacks are welcome**
