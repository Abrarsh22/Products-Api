const Product = require('../model/productModel');

const getAllProducts = async (req,res)=>{
    const {company,featured,name,sort,select} = req.query; 
    const query={};
    if(company){
        query.company = company;
    }
    if(featured){
        query.featured = featured;
    }
    if(name){
        query.name = {$regex:name, $options : "i"};
    }
    let apiData = Product.find(query);
    
    if(sort){
        let sortData = sort.split(",").join(" ");
        apiData = apiData.sort(sortData);
    }

    if(select){
        let selectData = select.split(",").join(" ");
        apiData = apiData.select(selectData)
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;
    let skip = (page-1 ) * limit;

    apiData = apiData.skip(skip).limit(limit);
    console.log(query);
    const productsData = await apiData ;
    res.status(200).json({ productsData,hits:productsData.length })
}

const getAllProductsTesting = async (req,res)=>{
    const productsData = await Product.find(req.query);
    console.log(req.query)
    res.status(200).json({ productsData })
}

module.exports={getAllProducts,getAllProductsTesting}