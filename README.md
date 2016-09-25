# i-compare-strings

Constant time string comparison.

## Installation

```bash
	npm install i-compare-strings -save
```

## Usage

```js
    var icmp = require('i-compare-strings');
    var str1 = "Test this String!";
    var str2 = "test This sTring!";
    var str3 = "Test this String!";
    
    //Case sensitive comparison 
    
    console.log(icmp(str1,str3)) // will output true
    console.log(icmp(str1,str2)) // will output false
    
    //Case insensitive comparison
    
    console.log(icmp(str1,str2,false)) // will output true
```

## LICENSE 
MIT

Copyright (c) 2016 Skevos Papamichail &lt;contact@skevosp.me&gt; (www.skevosp.me) 
