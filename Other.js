class Mkulima {
    constructor(farms, products, vendors) {
        this.farms = farms;
        this.products = products;
        this.vendor = vendors;

    }
    addFarm(farmId, name, farmer, phone, address) {
        let farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,

        }
        return this.farms.push(farm);
    }


    getFarm(farmId) {
        for (var i = 0; i < this.farms.length; i++) {
            let farm = this.farms[i];
            if (farm.farmId === farmId); {
                return farm;
            }
        }
    }
    removeFarm(farmId) {
        let farm = this.getFarm(farmId);
        let index = this.farms.indexOf(farmId);
        return this.farms.splice(index, 1);
    }
    updateFarm(farmId, name, farmer, phone, address) {
        let newFarm = this.farms.find(newFarm => newFarm.farmer == "Ochieng");
        newFarm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,
        }
        return newFarm
    }

    addProduct(productId, name, price) {
        let product = {
            productId: productId,
            name: name,
            price: price,
        }
        return this.products.push(product);
    }
    getProduct(productId) {
        for (var i = 0; i < this.products.length; i++) {
            let product = this.products[i];
            if (product.productId === productId); {
                return product;
            }
        }

    }
    removeProduct(productId) {
        let product = this.getProduct(productId);
        let index = this.products.indexOf(productId);
        return this.products.splice(index, 1);
    }
    updateProduct(productId, name, price) {
        let newProduct = this.products.find(newProduct => newProduct.name == "maize");
        newProduct = {
            ProductId: productId,
            name: name,
            price: price,
        }
        return newProduct

    }

    printProducts() {
        for (let object of this.products) {
            console.log([object.name + "," + object.price])
        }
    }
    calculateOrderCost(productId, quantity) {
        let cost = this.products.find(cost => cost.productId == productId)
        return cost.price * quantity

    }

}




let order1 = new Mkulima([{
    farmId: "678bcg",
    farmName: " solwe farm",
    farmer: " Wanjala John",
    phone: " 0723456234",
    address: " Busia Kenya"
}], [{
    productId: "234hng",
    name: "beans",
    price: 2300
}]);
console.log(order1.addFarm("678ghi", " lambwe", " Ochieng", " 0723456789", " Homabay Kenya"));
console.log(order1.getFarm("678ghi"));
console.log(order1.removeFarm("678ghi"));
console.log(order1.updateFarm("345bjk", "nimo farm", "Macharia Ken", "0712345678", "Machakos Kenya"));
console.log(order1.addProduct("234bmn", "beans ", 2700));
console.log(order1.getProduct("234bmn"));
console.log(order1.removeProduct("234bmn"));
console.log(order1.updateProduct("234hjm", "carrots", 3500));
console.log(order1.printProducts());
console.log(order1.calculateOrderCost("234hng", 5))