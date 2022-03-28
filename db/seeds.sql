USE employeetracker_db

INSERT INTO department (id, name)
VALUES 
      ("Warehouse"),
      ("Production"),
      ("Design"),
      ("Devolping"),
      ("Testing");


INSERT INTO role (id, title, salary, department_id)
VALUES
      ("Full Stack", 51000, 1),
      ("Front End Developer", 98648, 2),
      ("Back End Developer", 102621, 3),
      ("Graphic Designer", 77382, 4),
      ("UI Designer", 75755, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
      ("Butch", "Cassidy", 2, 1),
      ("Bill", "Hickok", 3, 2),
      ("Buddy", "Crane", 5, 4),
      ("Doc", "Holiday", 1, 3),
      ("Jesse", "James", 4, 5);

