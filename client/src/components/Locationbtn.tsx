"use client"
 
import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import { LocateFixed, MapPin} from "lucide-react"
 
const SHEET_SIDES = ["left"] as const
 
interface LocationData {
    status: string;
    country: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    query: string;
  }
  

const Locationbtn = () =>{
    const [, setIpAddress] = useState<string>('');
    const [locationData, setLocationData] = useState<LocationData | null>(null);
  
    // Function to fetch the IP address
    const fetchIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=text');
        const data = await response.text();
        setIpAddress(data); // Set the IP address in state
        fetchLocationData(data); // Fetch location data based on IP
      } catch (error) {
        console.error('Failed to fetch IP:', error);
      }
    };
  
    // Function to fetch location data using the IP address
    const fetchLocationData = async (ip: string) => {
      try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data: LocationData = await response.json();
        setLocationData(data); // Set location data in state
      } catch (error) {
        console.error('Failed to fetch location data:', error);
      }
    };
  
    useEffect(() => {
      fetchIp(); // Fetch IP when the component mounts
    }, []);
    return (
        <div>
      {/* <h1>Your IP Address is: {ipAddress}</h1> */}
      {locationData && locationData.status === 'success' ? (
        // <div>
        //   <h2>Location Information</h2>
        //   <p>Country: {locationData.country}</p>
        //   <p>Region: {locationData.regionName}</p>
        //   <p>City: {locationData.city}</p>
        //   <p>Zip: {locationData.zip}</p>
        //   <p>Latitude: {locationData.lat}</p>
        //   <p>Longitude: {locationData.lon}</p>
        //   <p>Timezone: {locationData.timezone}</p>
        //   <p>ISP: {locationData.isp}</p>
        // </div>
        <div className="md:grid md:grid-cols-2 md:gap-2 hidden">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button className="flex justify-between bg-transprent text-gray-500 hover:bg-gray-300 dark:hover:bg-black"> 
                <LocateFixed className="mr-2 -ml-2"/>
                {locationData.city}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle className="font-bold text-2xl">Your Location</SheetTitle>
                <SheetDescription>
                  Make changes to your current area location. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="mb-3 relative py-5">
                    <Input type="address" placeholder={locationData.city} className='pl-10 focus-visible:ring-1' />
                    <MapPin className="absolute inset-y-7 left-2 text-red-800 pointer-events-none" />
                </div>
              <SheetFooter className="w-full">
                <SheetClose asChild>
                  <Button type="submit" className="w-40 bg-darknav ">Save</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
        
      ) : (
        <p>Fetching location data...</p>
      )}
    </div>
    )
}
export default Locationbtn