-- Insert data into the "department" table
INSERT INTO
    department (name)
VALUES
    ("Cybersecurity"),
    ("Power Generation"),
    ("Research & Development"),
    ("Hospitality Services"),
    ("Executive Management");

-- Insert data into the "role" table
INSERT INTO
    role (title, salary, department_id)
VALUES
    (
        "Chief Information Security Officer",
        25000.00,
        2
    ),
    ("Research Scientist", 700000.00, 2),
    ("Development Engineer", 100000.00, 7),
    ("Head Butler", 500000.00, 8),
    ("CEO", 900000.00, 9);

-- Insert data into the "employee" table
INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Harold", "Hogan", 1, 3),
    ("Ivan", "Vanko", 1, 1),
    ("Anthony", "Stark", 3, 2),
    ("Stephen", "Quinn", 5, 2),
    ("Virginia", "Potts", 5, 2);