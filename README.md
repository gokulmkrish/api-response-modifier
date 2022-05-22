An example implementation of API size reduction
=================================================


This is an implementation of reducing JSON data structure.


Installation
------------

### Install Node JS dependencies

```
npm i
```

#### Usage
To Start express server
```
npm start
```

Problem Statement
-----------------
In web application there are some cases. where, data is huge in size most of the size occupied by the keys. So, if client server has common understanding of data then we can remove the keys in a ways where we can remove the keys from the data itself.
inspired from protobuf (IDL - Interface definition language).

Example
-------
Lets consider the below regular user JSON object. if server and client, knows what exactly the data going to be on the response. then we can remove the keys from it.
```
{
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
}
```

### Schema Object Declaration
About the resource data definition file should be placed in both server and client. which will be used to deserialize in the client side.
```
{
    id: {
        key: 0,
        type: 'number'
    },
    email: {
        key: 1,
        type: 'string'
    },
    first_name: {
        key: 2,
        type: 'string'
    },
    last_name: {
        key: 3,
        type: 'string'
    },
    avatar: {
        key: 4,
        type: 'string'
    }
}
```

### Resultant Data
```
[
    1,
    "george.bluth@reqres.in",
    "George",
    "Bluth",
    "https://reqres.in/img/faces/1-image.jpg"
]
```



API
---

### Serialize Method
```
serialize(data: Object, schema: Object) -> Array;
```

### DeSerialize Method
```
deserialize(data: Array, schema: Object) -> Object;
```


Outcome
-------
- Actual data side is about 2.02KB.
- After serialization data size is about 1.4KB.

which reduces the data size about ~30%.

There are lots of factors needs to be considered which is each schema file needs to pulled into client in order to deserialize.


Resouce
-------
protobuf  - Original Inspiration - https://developers.google.com/protocol-buffers

reqres.io - for mock data
