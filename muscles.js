let customers = [
  {
    id: "001",
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: "002",
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: "003",
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: "004",
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: "005",
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

 const seniorCustomers = customers.filter((element) => {
   return element.age >= 60;
 })
 console.log('Senior customers: ',seniorCustomers)

const customersWithFullName = customers.map((element) => {
  let title = "";
  if (element.gender === "M") {
    title = "Mr.";
  } else if (element.gender === "F" && element.married) {
    title = "Mrs.";
  } else {
    title = "Miss";
  }
  element["full_name"] = title + " " + element.f_name + " " + element.l_name;
  return element;
});
console.log(customersWithFullName);

let count = 0;

let total = customers.reduce((accumulator, customer, currentIndex, array) => {
   if(customer.purchased.includes('Book')){
      accumulator += customer.age;
      count++;
   }
   return accumulator;
}, 0)

console.log('[reduce] Średnia wieku kupującego książkę:'
               , Math.floor(total/count));


const hasYoungCustomer = customers.some((customer) => {
   return customer.age < 10; 
})
console.log('Czy klient ma mniej niż 10 lat? ', hasYoungCustomer);

const foundYoungCustomer = customers.find((customer) => {
   return (customer.age < 10);
})

console.log('Pierwszy znaleziony klient poniżej 10 roku życia', foundYoungCustomer);


const isThereWindowShopper = customers.every((customer) => {
   return customer.purchased.length === 0;
})

console.log('[every] Czy jest klient, który nic nie kupił? ', isThereWindowShopper);

const marriedCustomers = customers.filter((customer) => {
   return customer.married;
})
const expenseMapped = marriedCustomers.map(marriedCustomer => {
   return marriedCustomer.expense;
})
const totalExpenseMarriedCustomer = expenseMapped.reduce((accumulator, expense ) => {
   return accumulator += expense
}, 0)
console.log('Będący w związku malzenskim, wydatki', totalExpenseMarriedCustomer)