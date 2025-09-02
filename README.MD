## This file will cover what algorithms we have implemented, how to run a test on them and also key notes from the whole thing

## what i've learned
### test file naming
- jest looks for extensions like '.test.ts/js or spec.ts/js'
### test blocks
* describe() is used to group test (like a folder label)
* it() or test() defines individual test cases
### Assertions and what they are 
* Assertions initiated with expect() takes value you want to test as an argument and then allows you to chain a matcher (toBe, toEqual, toBeFalsy etc) function to it.
* matcher functions allows us to perform the actual comparison or validation against the expected outcome

### Test Driven Development
- the idea is to write out our test first, then create our function that passes all those test, this helps us to know what we a re building for and automatically also verify our implementation

## difficulties
issues
- working on the setup and npm test doesn't work, jest may have not been setup correctly, seems the scripts in our package.json was not setup completely
