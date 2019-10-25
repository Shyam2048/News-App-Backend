import fetch from 'node-fetch'

export async function newsFeed(page, category) {
    let results = await fetch(
        'https://newsapi.org/v2/top-headlines?country=in&category=' +
            category +
            '&apiKey=3e97b6ca85d448a4aa0bb844ca6c67bf&pageSize=10&page=' +
            page,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return results.json()
}
