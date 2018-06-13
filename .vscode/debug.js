const babel = require('@babel/core')
const result = babel.transform(`
  // function declaration
  function getColumnsDeclaration() {
    function inner() {
      return {
        x: () => (<span />)
      };
    }

    return {
      a: () => (<input />),
      b: () => (<button />)
    };
  }

  // function expression
  const getColumnsExpression = function () {
    return {
      a: () => (<input />),
      b: () => (<button />)
    }
  }

  //  arrow function expression
  const getColumnsArrowExpression = () => {
    return {
      a: () => (<input />),
      b: () => (<button />)
    }
  }

  export default {
    methods: {
      getChild() {
        return (
          <div><button>Child</button></div>
        );
      },
    },

    render() {
      return (
        <div>
          <input />
        </div>
      );
    }
  }
`, {
  plugins: ['./index.js']
})

console.log(result.code)
