const dbUri = 'http://localhost:9090'

fetch(dbUri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    query {
      allData {
        name
        id
      }
    }`
    }),
})
    .then(res => res.json())
    .then(res => {
        console.log(res.data);
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
          <div>
            <h1>Vite + TypeScript</h1>
            <p>${JSON.stringify(res.data)}</p>
          </div>
        `
    });

