async function getAlunos(){
    const res = await fetch('./api/list.php')
    const json = await res.json()

    console.log(json)

    return json
}