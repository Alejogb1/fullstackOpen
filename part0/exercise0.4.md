browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
When the button on the form is clicked, the browser will send the user input to the server. 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa

server-->browser: [{ content: note , date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display

Link to visual diagram: https://www.websequencediagrams.com/cgi-bin/cdraw?lz=YnJvd3Nlci0-c2VydmVyOiBIVFRQIEdFVCBodHRwczovL3N0dWRpZXMuY3MuaGVsc2lua2kuZmkvZXhhbXBsZWFwcC9ub3RlcwoAOwYtLT4ATAc6IEhUTUwtY29kZQoAIkRtYWluLmNzAFUUABIJAB9JagBOGWpzCgpub3RlIG92ZXIgAIFkCApXaGVuIHRoZSBidXR0b24gbwAIBmZvcm0gaXMgY2xpY2tlZCwAHQYAgm4GIHdpbGwgc2VuZAA0BXVzZXIgaW5wdXQgdG8ARgUAgw0GLiAKZW5kIG5vdGUKAIIERW5ld19ub3RlX3NwYQoAgyQTW3sgY29udGVudDoAcQUgLCBkYXRlOiAiMjAxOS0wNS0yMyIgfSwgLi4uXQCBeBUAgVkIZXhlY3V0ZXMAghQFZXZlbnQgaGFuZGxlcgp0aGF0IHJlbmRlcnMAgVcFcyB0byBkaXNwbGF5AIFnCg&s=default
end note
