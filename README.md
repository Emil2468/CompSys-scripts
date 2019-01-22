# CompSys scripts

Scripts to hopefully help complete CompSys exam. Everything is, and probably should be, written in javascript, such that it can be copied and pasted into the console in a browser. If something is missing feel free to create a pull request with more scripts or additions to existing, alternatively, if you dont have the time or the JS-skills, you can open an issue. 

Should you find bugs you can either open an issue descriping the bug, or create a pull request with a fix.

## How to use:
### Console
Not sure this will work on ITX, but if it does:
* Open browser
* Open console in browser
  * Either by pressing f12, <code>ctrl + shift + i</code> or rigth clicking and choosing inspect element
  * Then chose the tab "console"
* Copy and paste the wanted script(s) into the console, you can now call the defined functions directly from the browser console
### UI
Open index.html in a browser, here you can see available scripts pick one and insert values. You migth need to tell internet explorer to allow running local files, if it pops up
### PDF
In case scripts won't work I added a pdf containing all scripts, so one can manually walk through the scripts, without text editor.

## Writing numbers in different bases
* Write integers in binary by adding 0b at the beginning, eg.: 0b101 to write 5 in binary
  * It seems the prefix 0b does not work in IE, use parseInt instead: parseInt("101", 2)
* Write integers in hex by adding 0x at the beginning, eg.: 0x1a to write 26 in hex
* Print integers in an other base by using x.toString(base), eg.: (23).toString(2) to print 23 in binary

All scripts come with a best effort guarantee :)
  
