# Data Type Examples
<!-- * Completed and spellchecked -->

## String

Character or a set of characters (must be written in double-quotes):

`{ "name": "Bob" }`

## Number

A number or decimal (without surrounding quotes):

`{ "number": 15 }`

`{ "percentage": 99.9 }`

## Boolean

This data type can be either `true` or `false` (without surrounding quotes):

`{ "isCool": true }`

## Array

Array is an ordered collection of indexed values, like a list of items (written as a set of values inside square brackets):

`{ "sports": [ "Football", "Tennis", "Volleyball" ] }`

Arrays indexing is zero-based, meaning that the first element in the array ("Football" in this case) will have an index of `0`, the second element ("Tennis") has an index of `1` and so on.

Arrays can contain any data type, for example here is an array of objects:

`{ "users": [ { "name": "Bob, "age": 22}, { "name": "John, "age": 34 } ] }`

## Object

Object is a set of key-value pairs inserted between curly braces. Keys must be strings and should be unique. Multiple key-value pairs are separated by a comma (","). The same as arrays - values of objects keys can be of any data type:

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

## Null

Meaning the value is null (or the value was not defined) (also without surrounding quotes:

`{ "someField": null }`

----
[< Previous](Data-types-and-JSON.md) | [Next >](JSON-property-accessors.md)