// import AvailableMenu from "./AvailableMenu";
import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";


const RastaurantDetails = () =>{

    return ( <div className="max-w-6xl mx-auto my-10">
        <div className="w-full">
          <div className="relative w-full h-32 md:h-64 lg:h-72">
            <img
            //   src={singleRestaurant?.imageUrl || "Loading..."}
            src="http://ts4.mm.bing.net/th?id=OIP.WKx81fEsJX5_Ky34NtX0hAHaFW&pid=15.1"
              alt="res_image"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="my-5">
              <h1 className="font-medium text-xl">{/*singleRestaurant?.restaurantName || "Loading..."*/}Anshul</h1>
              <div className="flex gap-2 my-2">
                {["Hello","hello","vcm"].map((cuisine: string, idx: number) => (
                  <Badge key={idx}>{cuisine}</Badge>
                ))}
              </div>
              <div className="flex md:flex-row flex-col gap-2 my-5">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  <h1 className="flex items-center gap-2 font-medium">
                    Delivery Time: <span className="text-[#D19254]">{/*singleRestaurant?.deliveryTime || "NA"*/} 6 mins</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          
          <AvailableMenu/>
         {/* {singleRestaurant?.menus && <AvailableMenu menus = {singleRestaurant?.menus!}/>}  */}
        </div>
      </div>)
}
export default RastaurantDetails;

const AvailableMenu = () => {
    // const { addToCart } = useCartStore();
    const navigate = useNavigate();
    return (
      <div className="md:p-4">
        <h1 className="text-xl md:text-2xl font-extrabold mb-6">
          Available Menus
        </h1>
        <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
          {[1,2].map(() => (
            <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
              <img src="http://ts4.mm.bing.net/th?id=OIP.WKx81fEsJX5_Ky34NtX0hAHaFW&pid=15.1" alt="" className="w-full h-40 object-cover" />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {/* {menu.name} */} Dhokala
                </h2>
                <p className="text-sm text-gray-600 mt-2">{/*menu.description*/}A restaurant is an establishment that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
                <h3 className="text-lg font-semibold mt-4">
                  Price: <span className="text-[#D19254]">₹{/*menu.price*/}80</span>
                </h3>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  onClick={() => {
                    // addToCart(menu);
                    navigate("/cart");
                  }}
                  className="w-full bg-orange hover:bg-hoverOrange"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  };