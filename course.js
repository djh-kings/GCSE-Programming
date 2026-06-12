const COURSE_DATA = {
  "name": "GCSE Computer Science – Programming Techniques",
  "description": "Core Python skills for GCSE Computer Science",
  "lessons": [
    {
      "name": "Strings",
      "slug": "strings",
      "materials": [
        {
          "name": "Concatenation and Slicing",
          "slug": "strings-page",
          "type": "page",
          "content": "## Joining strings together (concatenation)\n\nConcatenation just means joining strings together using `+`.\n\n```python\nfirstName = \"Ada\"\nlastName = \"Lovelace\"\nfullName = firstName + \" \" + lastName\nprint(fullName)\n```\n\nThis prints `Ada Lovelace`. Notice the `\" \"` — without it you'd get `AdaLovelace`.\n\n## Slicing strings\n\nSlicing lets you grab part of a string using its position (index). Indexes start at 0.\n\n```python\nword = \"computer\"\nprint(word[0])      # c\nprint(word[0:4])    # comp\nprint(word[4:])     # uter\nprint(word[-1])     # r (last character)\n```\n\n`word[0:4]` means \"start at index 0, stop before index 4\". The `:` is the slice operator.\n\n## Useful string methods\n\n```python\nname = \"ada lovelace\"\nprint(name.upper())        # ADA LOVELACE\nprint(name.title())         # Ada Lovelace\nprint(len(name))            # 12\nprint(name.replace(\"ada\", \"Ada\"))\n```\n\nTry changing the code in the editor and pressing Run."
        },
        {
          "name": "String Practice",
          "slug": "strings-assignment",
          "type": "assignment",
          "content": "## Task: Username Generator\n\nWrite a program that:\n\n1. Asks the user for their first name and last name\n2. Creates a username by joining the first 3 letters of their first name with the first 3 letters of their last name (all lowercase)\n3. Prints the username\n\nFor example, \"Ada Lovelace\" should produce `adalov`.\n\n**Hints:**\n* Use slicing to get the first 3 characters: `name[0:3]`\n* Use `.lower()` to make sure everything is lowercase\n* Use `+` to join the pieces together\n\nExtension: add the length of their last name to the end of the username, e.g. `adalov8`.",
          "starterCode": "firstName = input(\"Enter your first name: \")\nlastName = input(\"Enter your last name: \")\n\n# Your code here\n"
        }
      ]
    },
    {
      "name": "Arrays (Lists)",
      "slug": "arrays",
      "materials": [
        {
          "name": "Using Arrays",
          "slug": "arrays-page",
          "type": "page",
          "content": "## What is an array?\n\nIn Python, arrays are called lists. They store a fixed-length collection of items in order.\n\n```python\nfruits = [\"apple\", \"banana\", \"cherry\"]\nprint(fruits[0])    # apple\nprint(fruits[2])    # cherry\nprint(len(fruits))  # 3\n```\n\n## Looping through an array\n\n```python\nfruits = [\"apple\", \"banana\", \"cherry\"]\n\nfor fruit in fruits:\n    print(fruit)\n```\n\nThis prints each item on its own line.\n\n## Changing values\n\n```python\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfruits[1] = \"blueberry\"\nprint(fruits)   # ['apple', 'blueberry', 'cherry']\n```\n\n## Adding and removing\n\n```python\nfruits = [\"apple\", \"banana\"]\nfruits.append(\"cherry\")     # add to the end\nfruits.remove(\"apple\")      # remove by value\nprint(fruits)\n```\n\nGCSE exam questions usually treat arrays as **fixed length** — they're often used to represent a set number of items, like 5 student names or 10 exam scores."
        },
        {
          "name": "Array Practice",
          "slug": "arrays-assignment",
          "type": "assignment",
          "content": "## Task: Exam Scores\n\nA class has 5 students. Their exam scores are:\n\n```python\nscores = [56, 78, 91, 64, 83]\n```\n\nWrite a program that:\n\n1. Stores these scores in an array\n2. Prints each score using a loop\n3. Calculates and prints the total of all scores\n4. Calculates and prints the average score\n\n**Hints:**\n* Use a `for` loop to go through the array and add each score to a running total\n* Average = total ÷ number of scores. Use `len(scores)` to get the number of scores.\n\nExtension: print the highest score using `max(scores)`.",
          "starterCode": "scores = [56, 78, 91, 64, 83]\n\n# Your code here\n"
        }
      ]
    },
    {
      "name": "2D Arrays",
      "slug": "2d-arrays",
      "materials": [
        {
          "name": "2D Arrays as Tables",
          "slug": "2d-arrays-page",
          "type": "page",
          "content": "## A list of lists\n\nA 2D array is a list where each item is itself a list. This is useful for representing a table of data — like a spreadsheet or database table.\n\n```python\nstudents = [\n    [\"Ada\", 14, \"9A\"],\n    [\"Charles\", 15, \"9B\"],\n    [\"Grace\", 14, \"9A\"]\n]\n```\n\nThink of each inner list as a **record** (a row), and each position within it as a **field** (a column).\n\n## Accessing values\n\n```python\nprint(students[0])       # ['Ada', 14, '9A']\nprint(students[0][0])    # Ada\nprint(students[1][1])    # 15\n```\n\nThe first index picks the record (row). The second index picks the field (column) within that record.\n\n## Looping through a 2D array\n\n```python\nfor student in students:\n    print(student[0], \"is in class\", student[2])\n```\n\nThis prints each student's name and class — exactly like reading rows from a database table."
        },
        {
          "name": "2D Array Practice",
          "slug": "2d-arrays-assignment",
          "type": "assignment",
          "content": "## Task: Book Library\n\nYou're given a 2D array representing a small library:\n\n```python\nbooks = [\n    [\"The Hobbit\", \"Tolkien\", 1937],\n    [\"1984\", \"Orwell\", 1949],\n    [\"Dune\", \"Herbert\", 1965]\n]\n```\n\nWrite a program that:\n\n1. Stores this data in a 2D array\n2. Loops through it and prints each book in the format: `Title by Author (Year)`\n3. Asks the user to type an author's name, then searches the array and prints the title(s) by that author\n\n**Hints:**\n* Field 0 = title, field 1 = author, field 2 = year\n* To search, loop through `books` and check `if book[1] == searchName:`\n\nExtension: count how many books were published before 1960.",
          "starterCode": "books = [\n    [\"The Hobbit\", \"Tolkien\", 1937],\n    [\"1984\", \"Orwell\", 1949],\n    [\"Dune\", \"Herbert\", 1965]\n]\n\n# Your code here\n"
        }
      ]
    },
    {
      "name": "Functions and Procedures",
      "slug": "functions-procedures",
      "materials": [
        {
          "name": "Functions vs Procedures",
          "slug": "functions-procedures-page",
          "type": "page",
          "content": "## What's the difference?\n\nA **function** takes some input, does something with it, and **returns a value**.\n\nA **procedure** performs a task but doesn't return a value — it just does something (like printing, or changing something).\n\nIn Python, both are written using `def`. The difference is whether they use `return`.\n\n## A function\n\n```python\ndef square(number):\n    return number * number\n\nresult = square(5)\nprint(result)   # 25\n```\n\n`square` returns a value, so we can store it in a variable and use it later.\n\n## A procedure\n\n```python\ndef greet(name):\n    print(\"Hello, \" + name + \"!\")\n\ngreet(\"Ada\")\n```\n\n`greet` doesn't return anything — it just performs an action (printing). You can't do `result = greet(\"Ada\")` and expect `result` to hold something useful.\n\n## Where to use which\n\nUse a **function** when you need a value back to use elsewhere — like a calculation, a converted value, or a check (true/false).\n\nUse a **procedure** when you just need something to happen — displaying a menu, updating the screen, printing a report.\n\n### Same task, two ways\n\n```python\n# As a function — returns the result\ndef calculateArea(width, height):\n    return width * height\n\narea = calculateArea(4, 5)\nprint(\"The area is\", area)\n```\n\n```python\n# As a procedure — does the printing itself\ndef displayArea(width, height):\n    area = width * height\n    print(\"The area is\", area)\n\ndisplayArea(4, 5)\n```\n\nThe function version is more flexible — `area` can be reused, compared, stored. The procedure version is simpler but the result is \"locked\" inside the print statement. Generally, **functions are more reusable** — prefer them when you might need the result again."
        },
        {
          "name": "Functions and Procedures Practice",
          "slug": "functions-procedures-assignment",
          "type": "assignment",
          "content": "## Task: Temperature Converter\n\nWrite:\n\n1. A **function** called `celsiusToFahrenheit(celsius)` that returns the Fahrenheit equivalent. The formula is `(celsius * 9/5) + 32`.\n2. A **procedure** called `displayWeather(celsius)` that uses your function and prints a message like: `25°C is 77.0°F`\n\nThen call `displayWeather` with a few different temperatures.\n\n**Hints:**\n* Your function should have a `return` statement\n* Your procedure calls the function and prints the result — it doesn't need its own `return`\n\nExtension: add a second function `fahrenheitToCelsius(fahrenheit)` and test it converts back correctly.",
          "starterCode": "def celsiusToFahrenheit(celsius):\n    # Your code here\n    pass\n\ndef displayWeather(celsius):\n    # Your code here\n    pass\n\ndisplayWeather(25)\ndisplayWeather(0)\ndisplayWeather(100)\n"
        }
      ]
    },
    {
      "name": "Scope: Local and Global",
      "slug": "scope",
      "materials": [
        {
          "name": "Local and Global Variables",
          "slug": "scope-page",
          "type": "page",
          "content": "## Local variables\n\nA variable created **inside** a function only exists inside that function. This is called its **scope**.\n\n```python\ndef myFunction():\n    message = \"Hello from inside!\"\n    print(message)\n\nmyFunction()\nprint(message)   # ERROR — message doesn't exist out here\n```\n\n`message` is **local** to `myFunction`. Once the function finishes, it's gone.\n\n## Global variables\n\nA variable created **outside** any function, at the top level of your program, is **global** — it can be read from anywhere.\n\n```python\nscore = 0\n\ndef showScore():\n    print(\"Score is\", score)\n\nshowScore()   # Score is 0\n```\n\n## The catch with global variables\n\nYou can **read** a global variable inside a function, but if you try to **change** it, Python creates a new local variable instead — and the global one is untouched.\n\n```python\nscore = 0\n\ndef addPoint():\n    score = score + 1   # ERROR\n```\n\nTo actually change a global variable inside a function, you need the `global` keyword:\n\n```python\nscore = 0\n\ndef addPoint():\n    global score\n    score = score + 1\n\naddPoint()\naddPoint()\nprint(score)   # 2\n```\n\n## Why this matters\n\nUsing too many global variables makes programs harder to understand and debug — any function could be changing them. GCSE exam questions often test whether you understand *why* a piece of code produces an error, or doesn't update a value as expected, because of scope."
        },
        {
          "name": "Scope Practice",
          "slug": "scope-assignment",
          "type": "assignment",
          "content": "## Task: Fix the Bug\n\nThe code below is supposed to keep a running total of points scored, but it doesn't work. Run it first to see what happens.\n\nThen fix it so that `totalPoints` correctly increases each time `addPoints` is called.\n\n**Hints:**\n* What keyword lets a function change a global variable?\n* Where does that keyword need to go?\n\nOnce it's fixed, add a second function `resetPoints()` that sets `totalPoints` back to 0, and test it.",
          "starterCode": "totalPoints = 0\n\ndef addPoints(amount):\n    totalPoints = totalPoints + amount\n\naddPoints(10)\naddPoints(5)\nprint(\"Total points:\", totalPoints)\n"
        }
      ]
    },
    {
      "name": "Functions with Arrays and Random Numbers",
      "slug": "arrays-random",
      "materials": [
        {
          "name": "Passing and Returning Arrays",
          "slug": "arrays-random-page",
          "type": "page",
          "content": "## Passing an array to a function\n\nYou can pass an array (list) into a function just like any other value.\n\n```python\ndef printAll(items):\n    for item in items:\n        print(item)\n\nnames = [\"Ada\", \"Charles\", \"Grace\"]\nprintAll(names)\n```\n\n## Returning an array from a function\n\nA function can also build and return an array.\n\n```python\ndef doubleAll(numbers):\n    result = []\n    for number in numbers:\n        result.append(number * 2)\n    return result\n\nvalues = [1, 2, 3]\ndoubled = doubleAll(values)\nprint(doubled)   # [2, 4, 6]\n```\n\n## Random numbers\n\nThe `random` module lets you generate random numbers.\n\n```python\nimport random\n\n# A random whole number between 1 and 6 (inclusive)\ndiceRoll = random.randint(1, 6)\nprint(diceRoll)\n\n# A random choice from a list\ncolours = [\"red\", \"green\", \"blue\"]\nprint(random.choice(colours))\n```\n\n`random.randint(a, b)` includes both `a` and `b` as possible results.\n\n## Combining the ideas\n\n```python\nimport random\n\ndef rollDice(numberOfRolls):\n    results = []\n    for i in range(numberOfRolls):\n        results.append(random.randint(1, 6))\n    return results\n\nrolls = rollDice(5)\nprint(rolls)\nprint(\"Total:\", sum(rolls))\n```"
        },
        {
          "name": "Arrays and Random Numbers Practice",
          "slug": "arrays-random-assignment",
          "type": "assignment",
          "content": "## Task: Lottery Number Generator\n\nWrite a function `generateNumbers(howMany, maxValue)` that:\n\n1. Creates an empty list\n2. Adds `howMany` random numbers between 1 and `maxValue` (inclusive) to the list\n3. Returns the list\n\nThen write a procedure `displayNumbers(numbers)` that prints them in the format:\n\n```\nYour numbers: 4, 17, 23, 31, 45, 49\n```\n\nCall `generateNumbers(6, 49)` and pass the result to `displayNumbers`.\n\n**Hints:**\n* Use a loop that runs `howMany` times\n* `random.randint(1, maxValue)` for each number\n* For the display format, you could use `\", \".join(...)` — but remember `join` needs strings, not numbers, so you may need to convert each number with `str()`\n\nExtension: change `generateNumbers` so it never produces the same number twice (a real lottery wouldn't draw the same ball twice).",
          "starterCode": "import random\n\ndef generateNumbers(howMany, maxValue):\n    # Your code here\n    pass\n\ndef displayNumbers(numbers):\n    # Your code here\n    pass\n\nmyNumbers = generateNumbers(6, 49)\ndisplayNumbers(myNumbers)\n"
        }
      ]
    }
  ]
};
