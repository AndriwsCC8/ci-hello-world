const sayHello = require('../helloWorld');

test('should return Hello, World!', () => {
    expect(sayHello()).toBe("Hello, World!");
});
