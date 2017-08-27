# File Metadata Microservice

Get the size of a file in bytes.

## How it Works

This microservice uses [koa-body][1] to parse binary data and [Koa][2] and
[koa-router][3] to serve requests.

[1]: https://github.com/dlau/koa-body
[2]: http://koajs.com/
[3]: https://github.com/alexmingoia/koa-router

## How to Use

`app.js` exports a Koa app. Koa apps have an [`app.listen()`][4] method that is
identical to Node's [http.Server.listen()][5].

Import `app.js` and call `app.listen()` to start up the microservice.

[4]: http://koajs.com/#app-listen-
[5]: https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback

## API Resources

### POST /

Returns an object containing the data's size in bytes.

#### REQUEST

__Sample__: `https://file-metadata-microservice.example.com/`

__Content-Type__: `multipart/form-data`

__Request__:

    ------WebKitFormBoundary7fkjhx85BAWpokZH
    Content-Disposition: form-data; name="file"; filename="blob"
    Content-Type: text/plain


    ------WebKitFormBoundary7fkjhx85BAWpokZH--

#### RESPONSE

__Status__: 200 - `application/json`

__Response__:

    {
      "filesize": 1149
    }
