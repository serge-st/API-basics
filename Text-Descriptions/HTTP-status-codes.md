# HTTP Status Codes
<!-- * Completed and spellchecked -->

A code that represents the request/response status.

In other words - a quick way to understand what happened to your request.

Status codes are in the range of 100 to 599 and are separated into groups.

----

**1xx** : Informational

Request received / processing

**2xx** : Success

Successfully received, understood and accepted

**3xx** : Redirect

Further action must be taken / redirect

**4xx** : Client Error

A request does not have what it needs, or - YOU (user) screwed up

**5xx** : Server Error

A server failed to fulfil an apparently valid request, or - I (server) screwed up

----

## Most common status codes:

200 - OK

201 - OK created (new record created)

302 - Found (requested resource has been moved to a different URL)

304 - Not modified (Cached version)

400 - Bad request

401 - Unauthorized

404 - Not found

500 - Internal server error

----
[Example 1](../src/api-example-1/main.js)

----
[< Previous](HTTP-headers.md) | [Next >](Data-types-and-JSON.md)