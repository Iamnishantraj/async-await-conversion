# async-await-conversion
async-await-conversion

## 📝 Files Included

1. **callback-version.js**  
   Original version using Node.js callbacks (`fs.writeFile`, `fs.readFile`).

2. **async-await-version.js**  
   Refactored version using `fs/promises` and `async/await` syntax.

   
## ▶️ How to Run

Make sure you have Node.js installed.

```bash
node callback-version.js
node async-await-version.js
```

Both will:
- Create a file named `example.txt`
- Write a message
- Read and print its contents

---

## ✅ Confirmation of Conversion

To confirm the async/await conversion:
- No callbacks are used (`(err, data) => {}`)
- File operations use `await fs.writeFile(...)`, `await fs.readFile(...)`
- Module imported is `fs/promises` instead of `fs`

---

## 📚 Resources

- [GeeksforGeeks - Asynchronous Patterns in Node.js](https://www.geeksforgeeks.org/asynchronous-patterns-in-nodejs/)
