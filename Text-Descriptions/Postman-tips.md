# Postman Tips
<!-- * Completed and spellchecked -->
<!--
    ! SHOW SOME REAL EXAMPLES:
    Login URL: https://staging.rajabets.com/
    Website credentials: rajabets / 6sLJh92&DzO$
    Usr/Pwd: evolution2/123456789
    Player ID: 1152
    User ID: pmierirulgeqbh4f
    Casino ID: monotech00000001
-->

## Variables

There are several options to set variables in Postman, but one of the most convenient is to use "Pre-request Script":

1. Create a request
2. Go to "Pre-request Script"
3. Create a variable like this example:
   
    `pm.environment.set("host", "test.com");`

4. Use your variable in requests or JSON body (by surrounding your variable's name with two sets of curly braces):

    `https://{{host}}/api/call`

5. When sending the request Postman will replace the variable with the value:

    `send to: https://test.com/api/call`

----
## Console:

A useful tool to see the actual requests Postman makes.

Also, sometimes you can find more information on the errors there.

As well as you can use it for troubleshooting, for example, to check what variables are used during the request runtime.

### Examples:
In "Pre-request Script" add:
1. To see the full, raw request you are making: 

    `console.log(pm.request);`
2. To see if the variable is set correctly:

    `console.log(pm.environment.get("yourVariableName"));`

----

## Randomisers:

Postman has a lot of in-built variable randomisers. For example, if your request needs a unique `uuid` Postman got you covered, just do this in the request body:

<code>
<pre>
{
    "uuid": "{{$randomUUID}}",
    "name": "Bob"
}
</pre>
</code>

You can also set a random value to a variable, to do so in "Pre-request Script" add:

<code>
<pre>
pm.environment.set(
    "randomName", 
    pm.variables.replaceIn(
        "{{$randomFirstName}}"
    )
);
</pre>
</code>

----
## Comments:

Use Javascript syntax, i.e.: if you want to leave a comment for future you in the "Pre-request Script" or you want to disable a line of code just add `//` before the line:

`// pm.environment.set("casino.key", "rushstreetint001");`

----
[Postman Dynamic Variables List](https://learning.postman.com/docs/writing-scripts/script-references/variables-list/)

[Documentation on Postman Scripting](https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/)

----
[< Previous](JSON-property-accessors.md) | [Next >](Network-request-troubleshooting.md)