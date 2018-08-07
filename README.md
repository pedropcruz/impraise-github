# Impraise Github Info

Hello github user's, welcome to this project! :)

**So first of all**, let's start the installation of this project!

First of all do:

```
npm install
```

Then, you have a *.env file* , and edit this file and add to this file 2 variables (without this, the project won't work)

```
REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=XXXX
PORT_SERVER=8000
```

So, substitue the **___REACT_APP_GITHUB_ACCESS_TOKEN___** for your Authorization token, you can configure that by follow this [tutorial](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) with this permissions:

![alt permissions](https://i.imgur.com/1hFwQ6E.png "Permissions")

And then you do **update token** and get the id, copy and paste on *.env file* on 
**REACT_APP_GITHUB_ACCESS_TOKEN**

On PORT_SERVER, you can choose the port for running server side, to obtain data from github GraphQL API.

And then, do ``` npm run start ``` for running the project! :)

Thanks for this huge project, I have learned a lot, and I know i need to improve some things, but you can share some of your feedback to improve my skills! :)
