# Employee Tracker

<br>

<!-- TABLE OF CONTENTS -->
<h2>
<details>

  <summary >Table of Contents</summary>
  <br>
  <ol>
    <li>
      <a href="#about">About</a>
    <ul>  
    <li><a href="#technologies-used">Technologies Used</a></li>
    </ul>
    <br>
    <li><a href="#installation">Installation</a></li>
    </li>
    <ul>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#repo">Repo</a></li>
    </ul>
    <br>
    <li><a href="#what-it-looked-like">What it looked like</a></li>

  </ol>

</details>
</h2>

<br>

---

<br>

## About 

This class project is to create a CLI tool with Node.js that displays general employee data with a MySQL DB.

* This tool allows for a manager to view departments, roles and employees as well as add additional
* This tool can update existing employees roles 
* This tool is CLI controlled with a MySQL DB

<br>

### Technologies Used

* [Node.js]()
* [Inquirer.js]()
* [Mysql2]()
* [console.table]()

<br>

---

<br>

## Installation

1. Clone this repo 
```sh
git clone git@github.com/Montyking20/employee-tracker.git
```
2. Install NPM packages
   ```sh
   cd du-employee-tracker-proj-10 && npm install
   ```
3. Ensure mysql service is running
4. Update the MySQL password to your own in the {{this project repo folder}}/db/db_handler.js file


### Usage

Once installed run `npm start` and follow the interactive command prompts. The update fields are ID bases so ensure to enter the correct employee ID and role ID.

### Repo 

### [Repo Note Taker](https://github.com/Montyking20/employee-tracker)

<br>


---


## What it looked like

![Screen Shot of CLI Menu](./img.png)








