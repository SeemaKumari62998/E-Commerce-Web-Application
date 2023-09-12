import React from 'react'

function Home(props)
{
   return(
       <div>
          
       <h1>Home component</h1>
       <div className='add-to-cart'>
              <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/wordpress-shopping-cart-plugins.png"/>
          </div>
       <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }> 
                        Add To Cart
                    </button>
                </div>
       </div>
       </div>
   )
}
export default Home