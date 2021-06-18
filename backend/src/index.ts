import express from 'express'
import fs from 'fs'
import ObjectsToCsv from 'objects-to-csv'
import {getArticlesByParameters} from './api/ieeeSearch'

const app = express()
const port = 3000

app.get('/process-data', async (_, res) => {

    const data = await getArticlesByParameters({queryText: 'ICSE',startYear: '2021' ,endYear: '2021' });
    const csv = new ObjectsToCsv(data)

    await csv.toDisk('./temporary/aux.csv')

    res.download('./temporary/aux.csv', () => fs.unlinkSync('./temporary/aux.csv'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

