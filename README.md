# File Metadata Microservice

File Metadata Microservice is a REST API which returns any file's size in bytes.

## Resources

### POST /

Receive a file's size in bytes.

This resource asserts that:

1. you must provide multipart/form-data
2. the name of the form data must be "file"

Example request URLs:

`https://file-metadata-microservice.example.com/`

#### Responses

**STATUS 200** - application/json

##### EXAMPLE

    {
      filesize: 23
    }

**STATUS 404** Returned if form data with the name "file" could not be found.
