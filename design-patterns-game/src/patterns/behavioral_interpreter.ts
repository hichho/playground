const INTERPRETER = {
  id: 'interpteter',
  name: 'Interpreter',
  type: 'behavioral',
  hint: 'A way to include language elements in a program',
  definition: `Given a language, define a representation for its grammar along with an interpreter that
    uses the representation to interpret sentences in the language.`,
  when:
    'you want to interpret given language and you can represent statements as an abstract syntax trees',
  codeES5: `function Sum(left, right) {
  this.left = left;
  this.right = right;
}

Sum.prototype.pattern = function() {
  return this.left.pattern() + this.right.pattern();
};

function Min(left, right) {
  this.left = left;
  this.right = right;
}

Min.prototype.pattern = function() {
  return this.left.pattern() - this.right.pattern();
};

function Num(val) {
  this.val = val;
}

Num.prototype.pattern = function() {
  return this.val;
};

module.exports = [Num, Min, Sum];`,
  codeES6: `class Sum {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  pattern() {
    return this.left.pattern() + this.right.pattern();
  }
}

class Min {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  pattern() {
    return this.left.pattern() - this.right.pattern();
  }
}

class Num {
  constructor(val) {
    this.val = val;
  }

  pattern() {
    return this.val;
  }
}

export { Num, Min, Sum };`
};

export default INTERPRETER;
