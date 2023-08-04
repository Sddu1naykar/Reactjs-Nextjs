import { useSelector } from "react-redux"
const Productcomponent = () => {
const products = useSelector((state)=>state.allproducts.product);
console.log("result",products)
const renderlist = products.map((products)=>{
const {id,title,image,price,category,description} = products;
console.log(title);

    return(
        <div className="four column wide" key={id}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title}></img>
                    </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta-price">${price}</div>
                            {/* <div className="meta">{description}</div> */}
                        </div>
                 
                </div>
            </div>

        </div>
    )
})
    return (
        <div>
       {renderlist}
        </div>
    )

}
export default Productcomponent