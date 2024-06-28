console.log('test')
fetch('https://whatyearisit-backend-lovat-mu.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   console.log(data.year)
   let year = data.year
   document.querySelector('#year').textContent = year
   return data;
 })

  .then(data => {});

