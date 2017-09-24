Node.js - Mongodb Modern Boilerplate
=====================

Features
---------------

* Auto model loader
* Mongodb
* Express
* Auto route loader



Usage
--------------

```js
npm install
npm start
```

Test

```
npm test
```


Models
-----------------------

Create file that has ".model.js" extension. It will look for at the begining then It will load up automaticly.

Routes
-----------------------

All routes are automaticly calculating by project structure.

* index.route.js -> /
* [filename].route.js -> /filename
* [folder]/index.route.js -> /folder
* [folder]/[filename].route.js -> /folder/filename
* [folder]/[folder]/[filename].route.js -> /folder/folder/filename

