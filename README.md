# Daniel Miller - G2 Team - Technical Test

## The application

I setup the application to be able to filter/search personnel by GivenName, enabled sorting via any of the fields, added in error handling where appropriate, and also deleting personnel. I look forward to talking about it a bit more with the team!

## How would I do this differently if I had 10k personnel / 100k? 10m?

- Foremost I would store the data within a database e.g. MongoDB and not within a JSON document.
- The express server would have to support the correct endpoints for maniputlating the data e.g. PUT, DELETE, POST
- On a GET request the server would only send down a small portion of the total data such as 15 items out of the 100,000. I wouldachieve these smaller requests by attaching query parameters to the request from the client. These query parameters would include the search query from the client input e.g. "Sarah", and a current page e.g. "5", and possibly an itemsPerPage amount as a quality of life addition. The response to the client would include the 15 (or less) items and the total item count of all avaiable within the query.
- This total count of available items being sent in the response assists the front-end for creating the pagination.
- I would on the frontend create a pages component that would include the generic logic of displaying items in a page format.
- Each page click would create a new GET request to the server, it would also be a sensible idea to have a button to click on the search to not send GET requests too frequently to the server.
