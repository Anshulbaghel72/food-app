import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage"

const Crad = () =>{
    const [open, setOpen] = useState<boolean>(false);
    
    return ( <div className="flex flex-col max-w-7xl mx-auto my-10">
        <div className="flex justify-end">
          <Button variant="link">Clear All</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Items</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1].map(() => (
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell> pauw {/*item.name*/}</TableCell>
                <TableCell> 90 {/*item.price*/}</TableCell>
                <TableCell>
                  <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md">
                    <Button
                    // onClick={() => decrementQuantity(item._id)}
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full bg-gray-200 dark:text-gray-700"
                    >
                      <Minus />
                    </Button>
                    <Button
                      size={"icon"}
                      className="font-bold border-none"
                      disabled
                      variant={"outline"}
                    >
                      2{/*item.quantity*/}
                    </Button>
                    <Button
                    // onClick={() => incrementQuantity(item._id)}
                      size={"icon"}
                      className="rounded-full text-gray-400 hover:text-gray-200  bg-darknav hover:bg-Orange"
                      variant={"outline"}
                    >
                      <Plus />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{/*item.price * item.quantity*/}180</TableCell>
                <TableCell className="text-right">
                  <Button size={"sm"} className="bg-darknav dark:bg-red-600 dark:hover:bg-red-700" >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="text-2xl font-bold">
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">{/*totalAmount*/}180</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex justify-end my-5">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setOpen(true)}
            className="bg-darknav text-gray-200 hover:bg-gray-900 hover:text-gray-200  dark:bg-darknav dark:hover:bg-black"
          >
            Proceed To Checkout
          </Button>
        </div>
        <CheckoutConfirmPage open={open} setOpen={setOpen} />
      </div>)
}
export default Crad