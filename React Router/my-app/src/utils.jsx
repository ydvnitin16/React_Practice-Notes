export async function ProductsLoader(){
    const res = await fetch('http://localhost:5000/products');
    console.log(`Data fetched`)
    return res.json();
}

export async function LoadProduct({params}){
    const res = await fetch(`http://localhost:5000/products/${params.id}`);
    if(!res.ok){
        throw new Response('Sorry, The product not found.', {status: 404})
    }
    return res.json();
}