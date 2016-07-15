# GitBook Snippets Plugin

Provides a basic reusable snippet functionality for GitBook. It supports using properties files for key/values that will be searched/replaced in the content.

It is most useful for inline or simple strings that you might reuse, such as links or names.

### How it works

Install it using `npm install --save gitbook-plugin-snippets` and then update the `book.json` to include the following values. 

```json
{
  "plugins": [
   "snippets"
  ],
  "pluginsConfig": {
    "snippets": {
      "file": "snippets.properties"
    }
  }
}
```

The `pluginsConfig.snippets.file` property should be the path or url to a properties file. 

The plugin uses the [properties](https://www.npmjs.com/package/properties) module to load and parse the file. It currently only supports top level properties, meaning you cannot namespace or nest sections. Here is an example.

```properties
200_STATUS=Request was successful.
404_STATUS=The resource was not found.
```

Now in order to consume this, you just place the key in your content and it will be replaced inline. 

### License

[MIT](./LICENSE)