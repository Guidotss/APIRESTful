const {Router} = require('express')
const router = Router();

const products = [];


router.get('/', (req,res) =>{
    
    if(products[0] == null){
        return  res.json('todavia no se ha agregado ningun producto')
    }else{
        return  res.json({productos: products});
    }
})

    
    
router.get('/:id', (req,res) => {
    const {id} = req.params;
    let productId = products.map(e => e.id);
        
    if(productId.includes(Number(id))){
            
        let index = productId.indexOf(Number(id));
        return res.json(products[index]);
            
    }else{
        return  res.json({error: 'el id ingresado no existe dentro de la lista de productos'});
    }
})
    
 
let addId = 0;
router.post('/',(req,res) => {
    const product = req.body;
    Object.defineProperty(product,'id',{
        value: ++addId,
        writable: true,
        enumerable: true,
        configurable: true
    })

    products.push(product);
    res.json({mensaje: 'Producto agergado correctamente'});
})





router.put('/:id',(req,res) => {
    const {id} = req.params;
    const modifyProduct = req.body;
    let productId = products.map(e => e.id); 
    
    if(productId.includes(Number(id))){
        let index = productId.indexOf(Number(id)); 
        products.splice(index,1,modifyProduct); 

        return res.json({mensaje:'producto modificado'}); 
    }else{
        return res.json({mensaje:'el id ingresado no existe dentro de la lista de productos'}); 
    }
})


router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    let productId = products.map(e => e.id); 

    if(productId.includes(Number(id))){
        let index = productId.indexOf(Number(id)); 
        let delProduct = products.splice(index,1); 

        return res.json({productoEliminado: delProduct}); 
    }else{
        return res.json({mensaje:'el id ingresado no existe dentro de la lista de productos'}); 
    }
})


module.exports = router;