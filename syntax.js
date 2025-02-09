Prism.languages.polar = {
  'comment': /\/\/.*/ ,
  'string': /"[^"]*"|'[^']*'/ ,
  'keyword': /\b(put|func|scan|puts|class|mod|while|handle|safe|raise|match|case|default|for|each|next|break|this|elif|else)\b/ ,
  'boolean': /\b(true|false)\b/ ,
  'number': /\b\d+(\.\d+)?\b/ ,
  'operator': /[-+/*=<>!&|^%]/ ,
  'punctuation': /[{}[\];(),.:()]/ ,
  'identifier': /\b[a-z_]\w*\b/i
};
