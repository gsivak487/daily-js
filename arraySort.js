const users = [
  { name: "Alice", dob: "10-09-1993" },
  { name: "Bob", dob: "15-03-1990" },
  { name: "Charlie", dob: "20-12-1995" }
];

function sortOnDOB(){
   return users.sort((a, b)=>{
        const [ad, am, ay] = a.dob.split('-');
        const [bd, bm, by] = b.dob.split('-');
        return new Date(`${by}-${bm}-${bd}`).getTime() - new Date(`${ay}-${am}-${ad}`).getTime();
    });
}

console.log(sortOnDOB(users).map(e => e.dob));


