The idea for the cookieMonster API is to have a simple API to manage all of your cookie categorization and management needs. This will provide endpoints you can call on your sites to retrieve cookies.

### Resources

| URI                             | Resource                        | METHODS  |
| ------------------------------- | ------------------------------- | -------- |
| /cookies/                       | cookies all                     | GET/POST |
| /cookies/{id}                   | id specific cookie              | GET/PUT  |
| /cookies/strictlynecessary      | strictly necessary cookies      | GET      |
| /cookies/adtargeting            | ad targeting cookies            | GET      |
| /cookies/socialmedia            | social media cookies            | GET      |
| /cookies/functional/            | functional cookies              | GET      |
| /domains                        | account domains                 | GET/POST |
| /domains/{id}                   | id specific domain              | GET      |
| /domains/{id}/cookies           | domain specific cookies all     | GET/PUT  |
| /domains/{id}/cookies/:category | domain specific cookies wby cat | GET      |

The cookies will have the following attributes

| name               | id   | category        | lifespan              | domains                             | party             |
| ------------------ | ---- | --------------- | --------------------- | ----------------------------------- | ----------------- |
| Name of the cookie | uuid | cookie category | persistence of cookie | list of domain ids the cookie is on | first/third party |

All responses from the API will be an array of objects. The objects will have the following format:

```Cookies
{
	"name": "name",
	"id": "unique integer id",
	"category":"cookie catgory",
	"lifespan":"session/XX_hours/XX_minutes/XX_days/XX_months/XX_years",
	"domains": [array of integer ids],
	"party": "first/third"
}
```

```Domains
{
	"name": "hostname",
	"id": "unique integer id",
	"cookies": [array of integer ids],
}

```

```Errors
{
	"error": "error message"
}
```

Other endpoints will include:
/user GET - logs in user
/user POST - creates user

### Initial Scope and planned improvements

To get started I will just be creating an API with authentication that can be queried to retrieve cookie information.

After setting up the MVP, I will add filtering and pagination. After completing that, I will build out a front end to manage your account in React.
