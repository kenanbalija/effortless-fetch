# EffortlessFetch

EffortlessFetch is a simple, lightweight, and easy-to-use JavaScript library for making AJAX requests. It simplifies the process of making HTTP requests to RESTful APIs and handles asynchronous operations gracefully using Promises.

## Features

- Simple and intuitive API
- Supports GET, POST, PUT, DELETE methods
- Customizable headers
- Error handling
- Lightweight and dependency-free

## Installation

You can include EffortlessFetch in your project by downloading the source file and linking it in your HTML file.

```html
<script src="path/to/effortless-fetch.js"></script>
```

## Usage

Using EffortlessFetch is simple. Here's an example of how to make a GET request:

```javascript
EffortlessFetch.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

For a POST request:

```javascript
EffortlessFetch.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
}).then(data => console.log(data))
  .catch(error => console.error(error));
```

You can also use the generic `request` method for more advanced use cases:

```javascript
EffortlessFetch.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
  id: 1,
  title: 'updated title',
  body: 'updated body',
  userId: 1
}, {
  'Content-Type': 'application/json;charset=UTF-8'
}).then(data => console.log(data))
  .catch(error => console.error(error));
```

## License

MIT License. Copyright (c) 2023 [Kenan Balija].
