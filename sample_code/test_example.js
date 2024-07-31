var x = {a: {foo: "bar"}, b: {hello: "world"}}
var y = {}

x["__proto__"]["keyA"] = 'secret'; // Input
if (y.keyA == 'secret') {
    console.log('Success!');
} else {
    console.log('Failed!');
}
