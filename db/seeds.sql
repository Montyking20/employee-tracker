USE employeetracker_db

INSERT INTO department (id, name)
VALUES 
      (1, "Warehouse"),
      (2, "Production"),
      (3, "Design"),
      (4, "Devolping");


INSERT INTO role (id, title, salary, department_id)
VALUES
      (1, "Full Stack", 51000, 1),
      (2, "Front End Developer", 98648, 2),
      (3, "Back End Developer", 102621, 3),
      (4, "Graphic Designer", 77382, 4),
      (5, "UI Designer", 75755, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
      (1, "Butch", "Cassidy", 2, 1),
      (2, "Bill", "Hickok", 3, 2),
      (3, "Buddy", "Crane", 5, 4),
      (4, "Doc", "Holiday", 1, 3),
      (5, "Jesse", "James", 4, 5);

