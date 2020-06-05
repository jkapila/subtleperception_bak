

hljs.registerLanguage("r",
  function(e){
    var r="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
    return{
      c:[e.HCM,
        {b:r,l:r, k:
          {keyword:"function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
          literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},
        r:0},
        {cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},
        {cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},
        {cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},
        {cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},
        {cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},
        {b:"`",e:"`",r:0},
        {cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]}
        // Function for pipe operator
		{className: "pipe", begin: "%>%", relevance: 0},

		// Function parameters with good style as 'variable' + 'space' + '=' + 'space'
		{className: "fun-param", begin: "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*\\s+=\\s+", relevance: 0},

		// Assign operator with good style
		{className: "assign", begin: " <- ", relevance: 0},

		// Adding to class 'keyword' the explicit use of function's package
		{className: "keyword", begin: "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*::", relevance: 0},

		// Class for basic dplyr words with their scoped variants
		// Not included in this site highlighting rules
		{className: "dplyr", begin: "tibble|mutate|select|filter|summari[sz]e|arrange|group_by", 
		end: "[a-zA-Z0-9._]*", relevance: 0}
      ]
    }
  }
);
