# Sqlites 

This is my personal utility library for using [SQLite3](https://sqlite.org/) under [Node.js](http://nodejs.org/).

Under the hood this is using [node-sqlite3](https://github.com/TryGhost/node-sqlite3).

# Why?
- Uses Typescript
- Uses Promises instead of callbacks
- Uses [SQLCipher](https://github.com/sqlcipher/sqlcipher) for encryption
- Good practices of how to use Sqlite API

# Why not?
- I make no promises on backawards compatibility
- This isn't a full featureset, only the parts that I currently need

# Dockerfile snippet for SQLCipher (Debian)
```
FROM node:18.6
RUN apt-get install -y sqlcipher libsqlcipher-dev
RUN npm uninstall sqlite3
RUN npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=/usr/
```




