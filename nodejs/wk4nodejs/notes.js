/*
TypeScript is a programming language developed and maintained by Microsoft.
 It is a strict syntactical superset of JavaScript and adds optional static 
 typing to the language. It is designed for the development of large 
 applications and transpiles to JavaScript.


 NB: programming file used (first-app)
 UNDERSTANDING NODEJS BETTER
 NodeJS is used to build backend of Mobile Apps and Web Apps
 Adavantages of NodeJS
 1. Great for prototyping and agile development
 2. Superfast and highly scalable
 3. Cleaner and more consistent
 4. Large ecosystem of open-source libs

 NODE ARCHITECTURE

 Every Browswer has a JavaScript Engine, that interprets
 your JavaScript.

 Chrome uses V8 engine
 Firefox uses SpiderMonkey
 MS edge uses CHAKRA

 Ryan Dhal invented NodeJS

 HOW NODE WORKS

 Node is non-blocking and asychroneous (handles multiple request)
  synchroneous systems requires individual thread to query
  a database.
Node is ideal for 
I/O-intensive apps
Do not use Node for CPI-intensive apps
use it for data intensive application
 COMMAND LINE/PROMPT UI

*before you run an app on command promp, type the program (that's if you want to run a language )
* creating a react app
*mkdir sidehustle (mkdir means create a directory)
*cd sidehustle
you can work from command promp
*dir (shows you the working directories)
* cls clears the commamd prompt of your system
* cd .. takes you back to the original directory
* cd \ takes you to the root folder
* del is used to delete 
* code . to open a code in vs code from cli

NODE CORE 

NODE MODULE SYSTEM
global function gives the same result anytime you call
it.
examples 
console.log()
setTimeout() set a particular time to runout before action takes place
clearTimeout()


setInterval
clearInterval()

global.console.log()
this gives you access to the function.

MODULES 
  Every file in a node application is considered a module

  HOW TO CREATE AND LOAD A MODULE
  to load a module you use a require function
   the require functions requires the object that is exported
   from the target module 

   MODULE WRAPPER FUNCTION

   Imediately Invoked Function Expression
   exports is a reference to module.exports
   so you cannot change the reference by writting something
   like this exports = log



   Module you should be aware of 
   1. File System
   2. HTTP
   3. OS 
   4. PATH
   5. process
   6. Query strings
   7. Stream
   8. etc
  
   parse.parse(path)

   Information About the operating system

   OS module


   RAISING EVENTS IN YOUR APPLICATION
   1. create a class
   2. you can also add additional functionality
   3. 

   HTTP MODULE 


































































* /