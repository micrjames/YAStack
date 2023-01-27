# YAStack
Yet another implementation of the Stack data structure, based on the Collection implementation.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Contact](#contact)

## General Info
This project was created as part of a series of projects implemented the usual data structures. The intention is that the object implements a Stack-like memory structure.

## Technologies Used
I'm only using plain, vanilla JavaScript with no libraries or other packages.

## Features
* Get a listing of the values of the object.
* Get the value of the top most element of the object.
* Add or remove the top most element from the object.
* Get the size of the object

## Setup
Just import the YAStack object into your project.

## Usage
Instantiate the object.
```
let thisStack = new YAStack();
```
Add some elements to the object.
```
thisStack.add('dog');
thisStack.add('cat');
```
Get a listing of the elements contained in the object.
```
thisStack.values();
```
Get the number of elements contained in the object.
```
thisStack.size();
```
Remove the top most element from the object.
```
thisStack.remove();
thisStack.remove();
```
This last expression will leave us with an empty object.

## Project Status
This project is pretty much finished unless any of the code can be improved. 

## Contact
Feel free to contact me @micrjamesjr on twitter or on github @micrjames
