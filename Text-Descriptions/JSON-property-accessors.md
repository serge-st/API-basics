# JSON Property Accessors
<!-- * Completed and spellchecked -->

Let's return to our [User Authentication API Request Parameters](https://studio.evolutiongaming.com/api/userauthentication/docs/v2/protocol.html#2-request-parameters), what does the syntax behind the "Name" column mean?

This brings us to property accessors. We have these key-value pairs, so in order to get the values of certain keys, we need to correctly access them.

### Example:
<code>
<pre>
{ 
    "name": "Bob",
    "age": 22,
    "isAdmin": false,
    "skills": [
        "Managment",
        "Communication"
    ],
    "languages": { 
        "english": true,
        "portuguese": false 
    } 
}
</pre>
</code>

----
So this object is our request (or response) body. We can extract (or access) its individual values.

For example if we will try to acess `skills` we will get:

<code>
<pre>
[ 
    "Managment",
    "Communication"
]
</pre>
</code>

Or we can access `skills[1]` to get just the string: `"Communication"`

----
The same goes to nested objects.

We can access `languages` to get:

<code>
<pre>
{ 
    "english": true,
    "portuguese": false
}
</pre>
</code>

Or we can access `languages.english` to get just the value of  `true`.

----
## Review Route Parameters:
[Reward Games API Calls](https://studio.evolutiongaming.com/api/free-games/docs/v3/Calls.html)

----
[Example 2](../src/api-example-2/main.js)

----
[< Previous](Data-type-examples.md) | [Next >](Postman-tips.md)