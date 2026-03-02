## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? 
## ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
## console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`
## 'object'
Answer the following questions:

What does `console` store?
## Objects
## console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
## console.log - Prints the text to the Console as a log message
## console.assert() writes an error message to the console if the assertion is false
## The dot(.) allows the access of the log method inside the console object