const msg = {
    "content": "Hello! I'm a bot"
}

fetch(whurl + "?wait=true", 
{"method":"POST", 
"headers": {"content-type": "application/json"},
"body": JSON.stringify(msg)})
.then(a=xa.json()).then(console.log)