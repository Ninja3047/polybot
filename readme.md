#Polybot

![polybot banner](banner.png)

a work-in-progress hangouts bot written with [hangupsjs](https://github.com/tdryer/hangups), with a focus on variety of modules and ease of use.

It's primarily focused on groupchat-related functionality.

You can try its hosted demo on [google+](https://plus.google.com/114969566275981000493/about).

Uses `chat_modules` to interact with an abstraction of the hangupsjs api. Events are sent from an eventemitter in `index.js`.

##Functions
Command | Function
------------ | -------------
*(`jpe?g`/`png`/`gif` hotlink)* | an inline version of the linked image
*(`tweet` link)* | an inline tweet including username and tweet text
*(`/r/*` or `r/*`)* | a link to `*` subreddit and a description
*twitch emote* | responds with `*` emote from twitch.tv
*twitch.tv/** | responds with current thumbnail from twitch channel `*`
`.yt *` | a youtube link from the `*` search query
`.t *` | a phrase (`*`) google translated to english
`.c *` | a [mathjs](http://mathjs.org/) compatible `*` expression
`.wiki *` | a fuzzy case sensitive `*` title of a wikipedia article
`.d *` | an oxford dictionary definition for `*`
`.ud *` | an urban dictionary definition for `*`
`.a *` | show `*` ascii emote
`.p *` | respond with `*` copypasta
`.s *` | send a sticker matching `*` as the title. if the message is simply `.s`, a list of every sticker is returned
`.gif ({i}) *` | searches giphy for a random gif pertaining to `*`, and sends it. `({i})` is optional, where `{i}` is the index of the gif `[1-*]`
`.rainbow` | make the chat rainbow color
`.celebration` | a party that simply cannot be stopped once started
`.halloween` | a halloween celebration.
`.zalgo *` | responds with a zalgolized version of `*`
`.8 *` | makes an 8 ball decision based on the `*` question
`.rename *` | renames the current chat to `*`
`.weather *` | a wunderground location `*` which can be either a zipcode or a location name
`.timer *` | a timer which counts down `*` seconds and then notifies when reaching `0`
`.topwords` | analyses up to 10,000 previous messages to generate a word count
`.stats` | gives statistics for poly bot
`.markov *` | generates a 10 word markov chain for the member having name `*`
`*poly*` | any mention of poly will make it focus the current chat
`.ref` | links to this page
`.leave` | exits the (group) chat.
