import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {sort_1: 'popular', 
                        sort_2: 'new arrivals', 
                        sort_3: 'best sellers', 
                        sort_4: 'special offers', 
                        sort_5: 'coming soon'})
})

app.get('/brand', (req, res) => {
    res.render('brand', {title__bold: 'the', title: 'brand', sub__title: 'company slogan goes here'})
})

app.get('/local', (req, res) => {
    res.render('local', {title__bold: 'local', title: 'stores', sub__title: 'find a store near you'})
})

app.get('/lookbook', (req, res) => {
    res.render('lookbookPage', {title__bold: 'our', 
                            title: 'lookbook', 
                            sub__title: 'Latest Posts - mens & womens', 
                            sort_1: 'latest', 
                            sort_2: 'most liked', 
                            sort_3: 'best sellers', 
                            sort_4: 'price low to high', 
                            sort_5: 'price high to low'})
})

app.listen(PORT, () => {
    console.log(`server ${PORT} ...`)
})