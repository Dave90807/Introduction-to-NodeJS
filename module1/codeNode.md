#### Node Core   Node Core Overview   Video: Node Core Overview

# Video: Node Core Overview

https://youtu.be/MHSsYYchydc

Welcome to module number one
of our course, introduction to Node.js.
This is a quite lengthy module but don't get overwhelmed.
Most of the lessons they're rather short.
And what's more important,
this module will give you a very solid,
very good strong foundation upon which you can build
your further knowledge on Node.js and you
can leverage this knowledge in any Node.js project.
So, first of all, we will take a look at some of
the global objects and
global keywords which you can use in any Node.js project,
in any Node.js script.
Some of them will give you additional information,
others will allow you to use certain mechanisms.
One of those mechanisms is Node.js modules.
You see, in browser JavaScript,
we up until recently didn't have any modules,
you would have to use a different language HTML
to import a file into browser JavaScript.
With Node.js is way,
way easier because natively
we have support for modules in Node.js.
So we will take a look at require,
which is a special method to
import functionality, to import a module.
And then we would look at module.exports,
which is a special global keywords or property
which will allow you to export
functionality to other files or other programs.
After that, we will take a look at npm basics.
Npm stands for node package manager.
It's a command line tool but it's also a registry which
is hosting a lot of modules, useful modules.
After that we will cover some of
the core HDB modules and not just HDB,
but some other modules as well,
such as file system module
and a few other main core modules.
The good thing about core modules,
you don't need npm to install them,
they are already built into the system.
So we will use one of those modules,
it's called HDB module and we will build a client.
So we would be making requests to
other services, other Web sites.
And then towards the end after we build a client,
we will build a server using
exactly the same HDB core module.
We will build our own web server and we will be able to
handle incoming requests and
do something with those requests.
In just a few lines of code,
you will have a fully functional
web server built on Node.js.
So again, this is a very important module,
it will give you a solid strong foundation for all
your future Node.js development and your projects.
So please, please, please, pay attention
carefully and I'll see you in the next lesson.

### Module 1: Node Core Overview

This module will build a solid foundation of Node development by teaching the following topics:

### Installation and Recommended Tool Chain

* Installation and recommended tool chain
* Before we start
* Launching Node, Global and Process

### Node REPL
* Launching Node code
* Node Globals
* Node process information
* Node Modules with require and module.exports

### Node modules with require and module.exports

* require usage patterns
* require caching mechanism
* Node module export patterns

### Core Modules

* Core modules
* fs module
* path module

### Understanding Event Emitters

* Understanding Node event emitters
* Modular events

### HTTP Client with Core http

* Implementing an HTTP client with core http module
* Implementing an HTTP client with JSON parsing
* Implementing an HTTP client with POST requests

### HTTP Server with Core http

* Implementing an HTTP server
* Understanding server request
* Understanding server response

### npm Basics

* Working with npm and npm basics
* Understanding package.json
* Configuring npm

Summary of Module 1: Node Core

Module 1 Tutorial Lab: Node Web Crawler

Module 1 Assignment Lab: CSV to JSON Converter

Module 1 Assessment

---

#### Node Core   Installation and Recommended Tool Chain   Video: Installation and Recommended Tool Chain

# Video: Installation and Recommended Tool Chain

https://youtu.be/xxIw0w_9hUM

Hello. In this video,
I will show you how to install Node.js and npm.
Npm comes with node.js.
So, all we need to do is just go to the official node.js
website which is located at, nodejs.org.
And then you would pick
either current version or long-term support version.
So 8 it's also a long-term support version.
Every even version such as 4,
6, 8, they are long-term support versions.
That's the version that you would want to
use in your production and also most
of your applications unless you want to experiment with
the more cutting-edge odd versions such as,
7 and 9 and 11 in the future.
So, let's pick the current version which is 8 and
the download will start
automatically and will determine your system.
It also says your system here in the message.
So my system is MacOS 64-bit.
If for some reason that didn't happen,
you can always go to downloads
and manually pick your operation system,
your OS, such as Windows,
Mac or you can also pick the source code.
Once you get the source code you
can follow the instructions,
how to compile into the binary code from source code.
They also provide you the installations for
the Docker Linux SunOS
and some other Linux versions as well.
So, you have an option of 32 bits 64 bits for
Windows and then only 64 for MacOS.
So, the current version,
LTS, its still supported.
Version 6 is going to be soon dropped.
That comes with npm version 3.
I recommend installing at least version
8 which comes with npm version 5.
And then in a few months,
we will have version 9 and version 11 as well.
And version 10 would be
the next long-term support after version 8.
Once you installed using
the installer which is the easiest way,
you would have this command node
available in your system.
So, node- V or node -- version,
will confirm that you have the proper version.
In this case we're using version 8.
If you are watching this course a few
years from now I hope you do
because a lot of this material will be
still relevant even if you are using
node.js Version 10 or 12 or 14 or 16.
We are learning fundamentals,
so they are not going to change.
And what is convenient,
we would also install npm, alongside with node.js.
So, node.js comes with npm.
The npm is a node package manager.
It's baked into the node.js.
So, really you don't have
an option but also it's an inconvenience thing
because you have npm already
and it shows that I have version 5.
If you're using version 3 probably
you would be okay, version 4,
you would be okay, future versions,
most likely you'll be okay too.
But below version 2, I do not recommend.
So, if you have older versions,
go and install newer versions,
you never had npm, even better.
It comes with node go installed node.
So, that's it for the node installation.
What about MongoDB?
So, you can follow the links
in the course or you can go to this URL,
mongodb.com and you click on
the community server which
means it's basically a development version.
It's a free version for anyone to use.
And again it automatically will
detect my system based on my browser.
So it goes into OSX,
OS10 but I can manually download another version,
such as Windows or Linux.
So, you have an option of downloading just the zip file.
You would unpack it into any folder you want
to have this MongoDB installation
and then you can manually link it.
So, by clicking here,
installation instructions, you would have
all the information needed to follow along those lines.
So, this is a manual step.
So, you unpack the zip archive,
you copy it into some folder.
Remember that folder name and then you would
expose the path into your path environment variable.
Typically, it's a bashrc,
I'm using the ZSH.
So, it would be in the ZSHRC.
And then don't forget you would need
to also configure your data folder.
If you're doing the manual set up or you would need to
provide that folder manually.
I prefer to use Brew if you're on MacOS.
MacOS has the support for Brew,
but of course you need to install Brew,
before you can use it.
So, you can search for install
Brew on Mac and typically with just one command line.
So, you can execute this
command line used to have the Brew
and then you can go back to this command,
Brew install MongoDB and that will install your MongoDB.
This is not the package.
This is the database itself.
This is how you would create the data folder.
And keep in mind,
it needs to have proper permissions.
So, it cannot be Brewed
because when you're running your server,
you're not going to run it as Brew.
Most likely it's going to be under your user.
So, make sure you have
the proper permissions on this /data/db folder.
And that's pretty much it.
So, you have a few options of installing MongoDB.
I recommend Brew if you are in
MacOS and then you have the manual fallback.
You have also, instructions
how to install it on Windows and Linux.
So, we're not going to replicate
the instructions because if they change,
the best way is to go to the official
mongodb.com documentation and follow the instructions.
So, that's it. You would need node npm and MongoDB,
MongoDB the server and
then later we will install modules.
But for now, that's all good.
So, you are ready to continue.

### Installation and Recommended Tool Chain

In this lesson, we will go over the set up for Node, npm and all the tools you will need to be productive.

### Node and npm Installation (Recommended)

First, let’s go to https://nodejs.org/en/download and download a one-click installer for your OS by clicking 
on the Install button.

The installers come with npm (Node package manager)— an important tool for managing dependencies. Because npm 
comes with Node, there's no need to install npm separately.

When choosing a Node installer, don’t choose binaries or source code unless you know what to do with them or 
your OS is not present there (i.e., not Windows or Mac).

### Installing from Source Code

If there’s no installer for your OS on page http://nodejs.org/download, then you can get the source code and 
compile it yourself. Detailed instructions are at https://github.com/nodejs/node/blob/master/BUILDING.md, but 
here's the short version.

Do this only if you cannot find a proper installer at http://nodejs.org/download or if you plan to contribute 
code to the Node core itself.

Download the source code or clone the Node repository https://github.com/nodejs/node. In the same folder in 
which you have the files, execute:

    $ ./configure
    $ make -j4
    
Run the tests:

    $ make test

To install this version of Node.js into a system directory:

    $ [sudo] make install

### Recommended Editors

I recommend using VS Code or Github's Atom editors for this course. This will give you a solid editor with 
customization and a lot of useful functionality without the bulkiness of a full-blown IDE like Eclipse or 
WebStorm.

To download VS Code (highly recommended), simply go to its website at https://code.visualstudio.com.

To download Atom, simply go to its website at https://atom.io.

### Installing MongoDB

To install MongoDB go to https://www.mongodb.com/download-center and choose your version according to the OS. 
macOS users who have Homebrew, can install MongoBD using Homebrew by following the instructions at 
http://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x.

Before you run the MongoDB server for the first time, you'll need to configure the folder in which MongoDB 
stores data. By default it's /data/db. To create this folder, execute this Terminal / CLI command:

    mkdir -p /data/db

Set permission/ownership with chown:

    sudo chown mongodb:mongodb

The command to start the MongoDB server is mongod.

Alternatively, you can specify a different folder with:

    mongod --dbpath <path to data directory>

### Configuring npm

You will need to do this if you get a permission error when you try to install npm modules. If you don't have 
permission errors, then skip this configuration. You can come back to it and configure later.

Locate the path to npm's directory. It might differ depending on the OS. Execute the command below to find your path:

    npm config get prefix

For many POSIX systems, this will be /usr/local.

DANGER: If the path is just /usr, change the default folder to a new one as described in 
[the npm documentation](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

Change the owner of npm's directories to the name of the current user (your username!):

    sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

This changes the permissions of the sub-folders used by npm and some other tools (lib/node_modules, bin, and share).


---

#### Node Core   Installation and Recommended Tool Chain   Video: Before we start

# Video: Before we start

>> I hope you followed the instructions
in the previous video,
in which I showed you how to install MongoDB.
So let's go and check that you
have the proper MongoDB version.
So you would go into your terminal
and type mongod -version.
Mongod is a command for
the Daemon of MongoDB database start over.
And as you can see I have version3
which is compatible for this course. What else can we do?
We can install something
globally with NPM, such as node-static.
So node-static,
that's a package name and it's a command line tool,
so we can install it globally.
That's why you see that -g flag and i stands for install.
So if you can execute this command and if
you've seen a successful message without
any errors that means you're NPM was installed properly.
And let's double check that we have the static command.
Now we have the static command installed.
Thanks to the global NPM installation.
If you're seeing permission error,
most likely you would have to use sudo
npm i -g node-static.
But this is only for global installations.
The better way would be to use the change
ownership command on that particular folder.
So how do you know the folder name? So we can all do NPM.
Which NPM that will give you the location of the command
and you can also monitor in
those error messages what folder lacks those permissions.
And then you can go and use change
on to change those permissions.
So it depends how you installed NPM.
I used NVM to install NPM.
That's another tool which you can leverage.
NVM stands for Node Version Manager.
One more thing that you can check.
You can use Evo to check the versions,
but the versions will be coming from the node process.
So it's kind of like from within.
And that should match the non-version command.
You can also check versions on
the Google Chrome V8 engine and other packages.
So that's it, you're ready to go now.


### Before we start

Let's check that you have everything ready to get up and running with the exercises and code presented in this course. 
Open your Terminal app or Command Prompt and type the following commands to check for the presence and versions of the 
required platforms, tools and libraries.

Node must be v8 or higher. Check it by running:

    node --version

You should be able to execute Node. You can use -e to quickly run Node code, for example:

    node -e 'console.log(`My node version is ${process.versions.node}`)'

npm must be v5 or higher. Check it by running:

    npm --version

Let's test npm installation. Go ahead and globally install node-static which is a useful local development web server:

    npm i -g node-static

You should not see any errors or need sudo if you followed instructions on how to change ownership of npm in the 
previous unit. If you see permission errors, then please go back to configuring npm and change the ownership of npm's 
folder.

When node-static is done installing, then you should be able to check static (command for node-static) with (I'm using 0.7.9):

   static --version

MongoDB must be v3 or higher:

   mongod --version
   
---

#### Node Core   Launching Node, Globals and Process   Video: Node.js REPL

# Video: Node.js REPL

Let's take a look how to launch node.js code.
The first way is to use REPL.
When you just type node from any folder,
your cursor, your pointer,
will change to this pointy brace,
more sign or less sign
depending on what equation you're looking at.
And this is called a REPL environment.
Why it's called REPL because,
every expression will be
evaluated then printed back to you.
So we can call
standard JavaScript functions from
the standard JavaScript API.
So let's create a string.
And it also has SDR.
So we can execute pretty
much any JavaScript, any standard JavaScript.
Even setTimeout, the API which is a timer API,
we can also use it.
Console.log and lets put a delay of 500 milliseconds.
So you saw there's a hello.
And also you saw some of the output which is the pointer.
It's a reference to that timer.
So you can see it's not like running a file.
You immediately get back the expression.
Let's do another example.
So let's say, let f,
I'm creating a function,
and this function returns number one.
So now when I'm invoking f, I'm getting one.
But, when if it's just an assignment,
assignment it's never an expression.
In this case I will get undefined.
And if I omit return,
or I forget it, or I make a typo,
then in this case f invoked would be undefined as well.
For example, let f2 equals one,
and then f2 it's undefined,
because I never returned anything.
So we can pretty much run any Node.js
ad JavaScript code using
the REPL. That's one of the ways.
In order to exit, you would press control c twice,
or you can type exit.
And now you are back into
the Bash script and the Bash command prompt, or zhs.
I'm using the zhs,
that's a similar thing. How do you know?
You see the dollar sign.
Unless you customize your terminal.
In this case you would see another symbol,
but it's not this angle point brace.
So, we cannot execute Node.js anymore.
You can see command not found.
So let me clear the screen,
and I will show you one more way.
Not many people know about it.
It's called eval.
So we would just provide
inline JavaScript right to the node command.
So cancel that log hello.
So it comes as a string,
gets evaluated and we are back to the Batch terminal.
So this is a very convenient way
when you're writing some Batch script.
You can just call any Node.js and
execute it right there in the same line.
Of course if you have a long command, long process,
long program, Node.js program,
that's not going to really work nice.
And then, the main way how you would
launch your Node.js scripts it's node,
and the file name.
For example program dot.js.
Right now, I don't have that file in this folder.
That's why you see this a little bit confusing error,
cannot find the module.
You might think why it's asking for a module.
All I wanted to do just to run that script, that file.
It's not even a module.
Well, the way it works,
every program, every file, it's a module for the Node.js.
So that's why you can see,
cannot find the module,
when it fact it means the file that you
provided does not exist in this folder.
So when I do ls,
there is no such folder,
there is no such file in this folder, okay?
You can obviously, you can point to a folder.
For example, if I'm inside of
Modules/Project_Files, I go to module one,
and then I can go into some of those lessons,
and then I can narrow down to
a specific file such as this, okay?
But, it needs to be a relative path.
Or, it could be absolute path as well.
The way the absolute path starts in Linux
and Mac and other POSIX systems is with this slash.
So that means it's a route.
So right now it's called the invalid because I don't,
module folder it's relative to my current folder.
It's not an absolute path.
I'm just giving examples,
so this would work.
This would work because
I have that path. It's a valid path.
Another way is to put dot slash.
Dot slash it means it's relative to my current folder,
so dot it's a current folder.
If you have an index.js,
you can also say dot,
which means run me index.js from this folder.
And if I try to run it it says,
module cannot find because I don't have
index.js file in this folder.
So that's pretty much it.
We have three ways. REPL, which
is that pointy angle brace.
We have node with
e-flag and then node and pointing to a file.
They're in the same folder or in a subfolder.
You can also point to a parent folder,
so dot dot slash will go one level up.
You can go as many levels up as you want.
Okay? So node and then the path to the file.
If you're providing path to the folder that will just be
an alias shortcut to saying go to the index.js.
And by the way, the digest extension is optional.
So I can just run it simple.
That will be similar to running simple.js.
So now you might have
a conflict if you have a folder called simple,
and if you have a file called simple.js.
When you just do simple, what will run?
Will it run the folder,
meaning the file index.js inside of that folder,
or will it run simple.js?
Well, in fact the files will take the precedence.
It will have the priority.
So if you have both folder names
simple and the file name simple.js,
and you would execute this command without the dot js,
it will round the fire simple.js.
So that's it for now.
I'll see you in the next lesson.


### Node.js Console (REPL)

Like most platforms/languages (e.g., Java, Python, Ruby, and PHP), Node.js comes with a virtual environment called 
Read-Evaluate-Print Loop (REPL). Using REPL (a.k.a. Node console), we can execute pretty much any Node.js/JavaScript 
code. It is even possible to include modules and work with the file system!

To start Node REPL, run the following command in your terminal:

    $ node

The prompt should change from $ to > (or something else, depending on your shell). From this prompt, we can run any 
JavaScript/Node.js (akin to the Chrome Developer Tools console) we want. For example:

    > 1+1
    > "Hello"+" "+"World"
    > a=1;b=2;a+b
    > 17+29/2*7
    > f = function(x) {return x*2}
    > f(b)

The result of the REPL statements above are shown below. As you can see, REPL prints the results of the expressions 
such as 1+1 or f(b):

    $ node
    > 1+1
    2
    > "Hello"+" "+"World"
    'Hello World'
    > a=1;b=2;a+b
    3
    > 17+29/2*7
    118.5
    > f = function(x) {return x*2}
    [Function: f]
    > f(b)
    4
    >

REPL is one of the ways how developers can run Node code. The benefit of REPL is that you immediately see the results 
of a particular expression or piece of code. I often use REPL to validate Regular Expressions or string methods. The 
downside of REPL is that the code is not saved which means it's harder to replicate the execution. Thus, in the next 
lesson we'll learn how to launch Node code from a saved file.

---
