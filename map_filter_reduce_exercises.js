// // Array squared
// // const input = [1, 2, 3, 4, 5];
// // const squaredInputs = input.map((value) => Math.pow(value, 2));

// // Sum of every positive element
// // const input = [1, -4, 12, 0, -3, 29, -150];
// // const sumOfEveryPositive = input.reduce((acc, element) => {
// //   if (element > 0) {
// //     acc += element;
// //   }
// //   return acc;
// // }, 0);

// // Calculate median and mean
// // const input = [12, 46, 32, 64];

// // input.sort((a, b) => a - b);
// // const answer = input.reduce(
// //   (accumulator, currentValue, index, array) => {
// //     console.log(accumulator.mean)
// //     accumulator.mean += currentValue / array.length;

// //     if (array.length % 2 === 0) {
// //       // if the array has an even number of elements
// //       if (index === array.length / 2 - 1) {
// //         accumulator.median += currentValue;
// //       } else if (index === array.length / 2) {
// //         accumulator.median += currentValue;
// //         accumulator.median /= 2;
// //       }
// //     } else {
// //       // if the array has an odd number of elements
// //       if (index === (array.length - 1) / 2) {
// //         accumulator.median = currentValue;
// //       }
// //     }

// //     return accumulator;
// //   },
// //   { mean: 0, median: 0 }
// // );
// // console.log(answer)

// // Get name initials
// // let input = "George Raymond Richard Martin";

// // const arr = input.split(' ');
// // const getNameInitials = arr.map((text) => text[0]).join('');

// // Age difference from the youngest and oldest
// // Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
// // const input = [
// //     {
// //       name: "John",
// //       age: 13,
// //     },
// //     {
// //       name: "Mark",
// //       age: 56,
// //     },
// //     {
// //       name: "Rachel",
// //       age: 45,
// //     },
// //     {
// //       name: "Nate",
// //       age: 67,
// //     },
// //     {
// //       name: "Jennifer",
// //       age: 65,
// //     },
// //   ];
// //   const ages = input.map((person) => person.age);
// //   console.log('ANSWER', [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]);

// // Numeronyms
// // Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e
// // const createNumeron= (word) =>
// //   word[0] + (word.length - 2) + word[word.length - 1];
// // const input = "Every developer likes to mix kubernetes and javascript"
// // .split(' ')
// // .map((word) => {
// //     if (word.length >= 4) {
// //         return createNumeron(word)
// //     } else{
// //         return word;
// //     }

// // })
// // .join(" ");

// // console.log(input);

// // N! z mapą i redukcją

// // Jeśli dane wejściowe są liczbą, należy zwrócić silnię tej liczby. Silnia liczby naturalnej n jest iloczynem dodatnich liczb całkowitych mniejszych lub równych n. Więc 2! = 2, 3! = 6, 4! = 24 i tak dalej.

// // const input = 6;

// // const array = new Array(input).fill(null);

// // const silnia = array
// //   .map(function (currentValue, index) {
// //     return index + 1;
// //   })
// //   .reduce(function (accumulator, currentValue) {
// //     return accumulator * currentValue;
// //   });
// // console.log(silnia)

// // Policz elementy w tablicy tablic
// // Policz wystąpienia różnych elementów w danej tablicy 2D. Dane wejściowe są tablicą, której elementami są tablice ciągów znaków. Wynikiem jest obiekt, którego nazwy właściwości są wartościami z tablic, a ich wartością jest liczba ich wystąpień.

// // const input = [
// //   ["a", "b", "c"],
// //   ["c", "d", "f"],
// //   ["d", "f", "g"],
// // ];

// // const answer = input.flat().reduce((acc, letter) => {
// //   if (acc[letter]) {
// //     acc[letter] += 1;
// //   } else {
// //     acc[letter] = 1;
// //   }
// //   return acc;
// // }, {});
// // console.log(answer)

// // Uczniowie osiągający wysokie wyniki
// // Otrzymujesz tablicę obiektów reprezentujących grupę uczniów, każdy z nazwą i tablicą wyników testu. Twoim zadaniem jest użycie mapy, filtrowanie i redukcja w celu obliczenia średniego wyniku testu dla każdego ucznia, a następnie zwrócenie tablicy obiektów zawierających tylko uczniów, którzy mają średni wynik powyżej 90.

// // const students = [
// //   { name: "Alice", scores: [90, 85, 92] },
// //   { name: "Bob", scores: [75, 80, 85] },
// //   { name: "Charlie", scores: [90, 95, 85] },
// //   { name: "Jack", scores: [100, 100, 100] },
// // ];

// // const studentAverages = students.map((student) => {
// //   const sum = student.scores.reduce((acc, currentValue) => {
// //     return (acc += currentValue);
// //   }, 0);
// //   return { name: student.name, average: sum / student.scores.length };
// // });
// // const studentsOver90 = studentAverages.filter((student) => student.average > 90);
// // console.log(studentsOver90)

// Kategorie produktów o wysokich cenach
// Otrzymujesz tablicę obiektów reprezentujących kolekcję produktów, każdy z nazwą, ceną i kategorią. Twoim zadaniem jest użycie mapy, filtrowanie i redukcja w celu obliczenia średniej ceny produktów w każdej kategorii, a następnie zwrócenie tablicy obiektów zawierających tylko kategorie, które mają średnią cenę powyżej 50.

// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];

// const productsByCategory = products.reduce((acc, product) => {
//   const category = product.category;
//   if (!acc[category]) {
//     acc[category] = [];
//   }
//   acc[category].push(product);
//   return acc;
// }, {});
// const avgPriceByCategory = Object.keys(productsByCategory).map((category) => {
//   const sum = productsByCategory[category].reduce(
//     (acc, product) => acc + product.price,
//     0
//   );
//   return { category: category, average: sum / productsByCategory[category].length };
// });
// const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);
// console.log(highPricedCategories)


// Dział HR VS IT
// Otrzymujesz tablicę obiektów reprezentujących zbiór pracowników, każdy z imieniem i nazwiskiem, wynagrodzeniem i działem. Twoim zadaniem jest użycie mapy, filtrowanie i redukcja w celu obliczenia średniego wynagrodzenia dla każdego działu, a następnie zwrócenie tablicy obiektów zawierających tylko działy, których średnie wynagrodzenie przekracza 65 000.

// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//   ];

//   const employeesByDepartment = employees.reduce((acc, employee) => {
//     const department = employee.department;
//     if(!acc[department]){
//         acc[department] = [];
//     }
//     acc[department].push(employee);
//     return acc;
//   }, {})


//   const avgSalaryByDepartment = Object.keys(employeesByDepartment).map((department) => {
//     const sum = employeesByDepartment[department].reduce((acc, department) => acc + department.salary, 0)
//     return { department: department, average: sum / employeesByDepartment[department].length };
//   })

//  const highSallaryDepartment = avgSalaryByDepartment.filter(department => department.average > 65000);
// console.log(highSallaryDepartment)