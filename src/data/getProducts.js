const products  = [
        {
            "id":"1",
            "name":"Vodka Arkasha",
            "Description": "Vodka",
            "stock":10,
            "category":"1",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppsOjIo-QS5m37RYRf8j9mrti2xgOwmm-jU6yMmAQ5A&s",
            "price": 6000
        },
        {
            "id":"2",
            "name":"Apertivo Yatay",
            "Description": "Yatay",
            "stock":0,
            "category":"1",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHYuDKpY-6x5Cahw0tAo3BYt6W0fl7LkvsjmTT_cKlg&s",
            "price": 5000
        },
        {
            "id":"3",
            "name":"Fernet Maggiore",
            "Description": "Fernet",
            "stock":0,
            "category":"1",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHqMiC2isI-wi7AW-riOEAAhYQkejdtdcqD4dqr9AnQ&s",
            "price": 7500
        },
        {
            "id":"4",
            "name":"Gin Peregrino",
            "Description": "The Golden Gin Entreriano",
            "stock":10,
            "category":"2",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaX7CBcplvuyXl9tLI2C-qjBB0fwdtSetBjfSbuZkrA&s",
            "price": 7000
        },
        {
            "id":"5",
            "name":"Bitter Atonito",
            "Description": "Red Bitter entreriano",
            "stock":50,
            "category":"2",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRjZscfiKNDgC_3BhfQV661i1MUYDftkEIAr0_-rCog&s",
            "price": 8000
        },
        {
            "id":"6",
            "name":"Vermouth Pais",
            "Description": "El Vertmouth premium de entre rios",
            "stock":15,
            "category":"2",
            "image":"https://dcdn.mitiendanube.com/stores/001/627/996/products/whatsapp-image-2024-02-21-at-18-33-24-ae9d450aee833c42d517085515340745-640-0.jpeg",
            "price": 6500
        }
    ]

const getProducts = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 3000)
});

export default getProducts;