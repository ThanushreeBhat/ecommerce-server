const express =require('express')
const app= express()
app.use(express.json())
const items=[
        {id:1,title: "Iphone 16 Pro",
        description: "Apple company phone",
        price: 70000},
    {id:2,title: "Samsung S4",description:"Samsung company phone",price: 90000
        },
    ]
const categories=[
    {id:1,name:'Electronics'},
{id:2,name:'Accessories'},{id:3,name:'Home appliances'}
]


app.get('/items',(request,response)=>{
    
    response.json({
        status: 200,
        message:"Items Fetched Successfully",
        data:items
    })
})
app.get('/item/details',(request,response)=>{
    const itemId= request.query.itemId;
    const item=items.filter((item)=> item.id == itemId)
    if(item.length>0){
        response.json({
            status:200,
            messge:"Item Details Fetched Successfully",
            data:item

    })
}else{
    response.json({
        status:404,
        messge:"Item Not Found",
    })
}
})

app.get('/discounts',(request,response)=>{
    const discounts =[
        {id:1,discount: 20},
        {is:2,discount: 40}
    ]
})
app.get('/categories',(request,response)=>{
    response.json({
        status:200,
        message:"Categories Fetched Successfully",
        data: categories
    })
})
app.post('/address',(request,response)=>{
    const name=request.body.name;
    const addr=request.body.addr;
    const pincode=request.body.pincode;
    const city=request.body.city;
    const state=request.body.state;
    const country=request.body.country;

    address={
        name: name,
        address: addr,
        city: city,
        state: state,
        country: country
    }
    response.send('Updated address Successfully')


})
app.delete('/address',(request,response)=>{
    address ={}
    response.send('Deleted successfully')
})
 payments=[]
app.post('/payment',(request,response)=>{
    const name= request.body.name;
    const upi=request.body.upi;
    const amount=request.body.amount;
     payment={
        id: payments.length+1,
        name: name,
        upi: upi,
        amount: amount
    }
    response.json({
        status:200,
        message:"Payment details added successfully",
        data: payment
    })
    payment.push(payment);
})

app.get('/payment/status',(request,response)=>{
    const paymentId= request.query.paymentId;
    const item=payments.find((payment)=> payment.id == paymentId)
    if(!payment){
         response.json({
        status:404,
        messge:"Item Not Found",
    })
    }else{
    response.json({
        status:200,
        message:"Payment Completed Successfully",
        data: payment
    })
    }

})

app.listen(3000);