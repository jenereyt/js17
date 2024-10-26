const companies = [
  { name: "Apple", income: [10000, 12000, 500], expenditure: 23000 },
  { name: "Microsoft", income: [10000, 12000, 1500], expenditure: 17000 },
  { name: "Google", income: [15000, 20000, 4000], expenditure: 7000 },
  { name: "SpaceX", income: [150000, 62000, 2000], expenditure: 99000 },
  { name: "GM motors", income: [15000, 20000, 4000], expenditure: 100 },
];

function max(companies) {
  return companies.reduce((maxCompany, company) => {
    let total = company.income.reduce((acc, value) => acc + value, 0)
    let maxTotal = maxCompany.income.reduce((acc, value) => acc + value, 0)
    return total > maxTotal ? company : maxCompany;
  });
}


function min(сompanies) {
  return companies.reduce((minCompany, company) =>{
    let total = company.income.reduce((acc, value) => acc + value, 0)
    let minTotal = minCompany.income.reduce((acc, value) => acc + value, 0)
    return total < minCompany ? company : minCompany; 
  }) 
}
const resultMin = min(companies);
const resultMax = max(companies);
console.log(resultMax, resultMin); 
