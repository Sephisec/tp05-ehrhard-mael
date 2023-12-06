
exports.get = (req, res) => {
        const catalogue = [
			{
				"reference": "REF001",
				"name": "Laptop",
				"price": 999.99
			},
			{
				"reference": "REF002",
				"name": "Smartphone",
				"price": 599.99
			},
			{
				"reference": "REF003",
				"name": "Tablet",
				"price": 299.99
			},
			{
				"reference": "REF004",
				"name": "Headphones",
				"price": 49.99
			},
			{
				"reference": "REF005",
				"name": "Television",
				"price": 799.99
			},
			{
				"reference": "REF006",
				"name": "Coffee Maker",
				"price": 79.99
			},
			{
				"reference": "REF007",
				"name": "Gaming Console",
				"price": 399.99
			},
			{
				"reference": "REF008",
				"name": "Camera",
				"price": 199.99
			},
			{
				"reference": "REF009",
				"name": "Bluetooth Speaker",
				"price": 29.99
			},
			{
				"reference": "REF010",
				"name": "Watch",
				"price": 199.99
			}
		];
		
	
	res.setHeader('Content-Type', 'application/json');
      
    res.send(catalogue);
   };    

