const dbUri = 'http://localhost:9090'

fetch(dbUri, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
    query {
      allData {
        name
        id
      }
    }`
  })
})
  .then(async res => await res.json())
  .then(res => {
    console.log(res.data)
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
          <div>
            <h1>Vite + TypeScript</h1>
            <p>${JSON.stringify(res.data)}</p>
          </div>
        `
  }).catch(e => { console.error(e) })
