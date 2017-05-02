//定义工厂
tempApp.factory('HeaderFactory', function () {

    //初始化产品数组
    var products = [
    {code:'P001',name:'Lumia 950XL',description:'win10系统最好的手机，带有黑科技色彩',category:'mobile'},
    {code:'P002',name:'Lumia 950',description:'win10系统次好的手机，相比XL低个档次',category:'mobile'},
    {code:'P003',name:'Surface Pro Book',description:'微软最具创新的笔记本',category:'Notebook'},
    {code:'P004',name:'Surface Pro 4',description:'微软最好的PC/平板二合一产品',category:'Surface'},
    { code: 'P005', name: 'Surface 4', description: '微软次好的PC/平板二合一产品', category: 'Surface' },
    {code:'P006',name:'Surface Phone',description:'传说中微软下一代win10系统超旗舰手机',category:'mobile'}
    ];

    var factory = {};
    factory.getProducts= function() {
        return products;
    }

    factory.loadProductByCode= function(code) {
        var productFound={};
        for (var i = 0; i < products.length; i++) {
            if (products[i].code==code) {
                productFound = products[i];
                break;
            }
        }
        return productFound;
    }

    factory.saveProduct= function(product) {
        var tempProduct = factory.loadProductByCode(product.code);

        if (tempProduct == null || tempProduct == undefined) {
            tempProduct = {};
            tempProduct.code = product.code;
            tempProduct.name = product.name;
            tempProduct.description = product.description;
            tempProduct.category = product.category;
        } else{
            
            tempProduct.code = product.code;
            tempProduct.name = product.name;
            tempProduct.description = product.description;
            tempProduct.category = product.category;

            products.push(tempProduct);
        }
    }

    factory.deleteProduct= function(code) {
        var tempProduct = factory.loadProductByCode(code);

        if (tempProduct!=null) {
            products.remove(tempProduct);
        }
    }
    return factory;
});