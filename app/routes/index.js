const router = require('express').Router()
const clientRoutes = require('./client.routes')
const flashCardRoutes = require('./flash-cards.routes')
const scraperRoutes = require('./scraper.routes')
module.exports = router;


// API routes here
router.use('/api/flash-cards', flashCardRoutes)
router.use('/api/scraper', scraperRoutes)

// API error handlers - (all routes must be registered before this)
useAPIErrorHandlers(router)
router.use(clientRoutes)
function useAPIErrorHandlers(router) {
    // handle API 404
    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404)
    })

    // handle API 500
    router.use((err, req, res, next) => {
        //if error object doesn't exist
        if (!err) {
            return next()
        }

        //logging error
        console.error(err.stack)

        // redirect to erro page
        res.sendStatus(500)
    })

}