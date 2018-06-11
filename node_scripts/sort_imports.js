const _ = require("lodash");
const fs = require("fs");

const args = process.argv.slice(2);
const file = args[0];

const fileAsString = fs.readFileSync(file).toString();
const fileByLines = fileAsString.split(/\r?\n/);
let importLines = [];
let importStatement = "";

_.each(fileByLines, (line) => {
  const startsWithImport = line.startsWith("import ");
  const endsWithSemicolon = line.endsWith(";");
  const trimmedLine = _.trim(line);

  if (_.isEmpty(importStatement) && !startsWithImport && !endsWithSemicolon) return;

  if (startsWithImport && endsWithSemicolon) {
    return importLines.push(trimmedLine);
  }

  if (startsWithImport && _.isEmpty(importStatement)) {
    return (importStatement += trimmedLine);
  }

  if (!_.isEmpty(importStatement) && endsWithSemicolon) {
    importStatement += trimmedLine;
    importLines.push(importStatement);
    return importStatement = "";
  }

  if (!_.isEmpty(importStatement)) {
    return importStatement += trimmedLine;
  }
});

_.each(importLines, (line) => console.log(line));