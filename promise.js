console.log('1. Start');

async function example() {
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2. Resolved after 2 seconds');
        }, 2000);
    });
    console.log(result);
}

console.log('3. End');
example();