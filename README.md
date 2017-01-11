# Pastebin Link Preview for Mixmax

Mixmax link resolver for Pastebin files. For more information see <http://developer.mixmax.com/docs/overview-link-resolvers>

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:

```
curl http://localhost:9146/resolver?url=http%3A%2F%2Fpastebin.com%2FM8T7nqKK
```
