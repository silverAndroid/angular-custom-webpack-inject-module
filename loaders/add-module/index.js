const acorn = require("acorn");

function addModule(moduleSource) {
  const ngModuleOptions = moduleSource.match(/@NgModule\(({(.|\n)*})\)/)[1];
  const tokens = acorn.tokenizer(`return ${ngModuleOptions}`, {
    allowReturnOutsideFunction: true,
    ecmaVersion: 2015,
    locations: true,
    ranges: true,
  });

  const imports = [];
  const importsRange = [];
  let hasReachedImports = false;
  let shouldStartAddingImports = false;

  for (const token of tokens) {
    if (token.type.label === "name" && token.value === "imports") {
      hasReachedImports = true;
    }
    if (hasReachedImports) {
      if (token.type.label === "[") {
        shouldStartAddingImports = true;
        importsRange[0] = token.start;
      } else if (token.type.label === "]") {
        importsRange[1] = token.start;
        break;
      }

      if (shouldStartAddingImports && token.type.label === "name") {
        imports.push(token.value);
      }
    }
  }
  imports.push("HelloModule");

  // length of 'return '
  const removalLength = 7;
  return moduleSource.replace(
    ngModuleOptions,
    ngModuleOptions.slice(0, importsRange[0] - removalLength) +
      "[" +
      imports.join(",") +
      "]" +
      ngModuleOptions.slice(importsRange[1] - removalLength + 1)
  );
}

function processModule(source) {
  source = "import { HelloModule } from './hello/hello.module';\n" + source;
  console.log(addModule(source));
  return addModule(source);
}

module.exports = processModule;
