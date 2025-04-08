const express = require('express');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (optional)
app.use(express.static('public'));

app.get('/', (req, res) => {
    const categories = [
        { link: '/shops', image: '/img/cat/category-4.jpg', title: 'Computer' },
        { link: '/shops', image: '/img/cat/category-3.jpg', title: 'Laptop' },
        { link: '/shops', image: '/img/cat/category-2.jpg', title: 'Gadgets' }
    ];

    const products = [
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-pink',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-orange',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-orange',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-orange',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-blue',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        }
    ];
    const featuredProducts = [
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-pink',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-orange',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
    ];


    const popularProducts = [
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-pink',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-orange',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-orange',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
    ];

    const newProducts = [
        {
            defaultImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            hoverImg: 'http://localhost:3030/api/files/image/621277de-587c-48aa-9e2a-3d914458459a/get/large',
            badgeText: 'Hot',
            badgeColor: 'light-pink',
            category: 'Electronics',
            title: 'Logitech MX Master 3S',
            newPrice: 'Ar 2M500k',
            oldPrice: 'Ar 2M600k'
        },
    ];

    const deals = [
        {
            bgImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            brand: 'Deals of the day',
            category: 'Limited quantities.',
            title: 'Destockage catalogue Lunnette soleil',
            newPrice: 'Ar 5M',
            oldPrice: 'Ar 6M',
            countdown: {
                days: 2,
                hours: 11,
                minutes: 2,
                seconds: 23
            }
        },
        {
            bgImg: 'http://localhost:3030/api/files/image/cc3574f3-16f4-4496-9953-3a332f80619f/get/large',
            brand: 'Deals of the day',
            category: 'Limited quantities.',
            title: 'Destockage catalogue Lunnette soleil',
            newPrice: 'Ar 5M',
            oldPrice: 'Ar 6M',
            countdown: {
                days: 7,
                hours: 21,
                minutes: 18,
                seconds: 23
            }
        }
    ];

    res.render('index', {
        title: 'EJS Test',
        message: 'Hello from EJS!',
        categories,
        products,
        deals,
        featuredProducts,
        popularProducts,
        newProducts
    });
});



// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
