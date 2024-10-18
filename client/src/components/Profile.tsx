import React, { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Edit, LocateIcon, Mail, MapPin, MapPinnedIcon, Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";


const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });

  // Create a hook for taking image form local memory.
  const imageRaf = useRef<HTMLInputElement | null>(null);

  const [selectedProfilePicture, setSelectedProfilePicture] = useState<string>("");

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({ ...prevData, profilePicture: result, }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (<>
    <form className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between  md:border border-gray-500 p-4 rounded-2xl dark:border-gray-800">
        { editing ? (<>
          <div className="flex items-center gap-2 ">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20 ">

            <AvatarImage src={selectedProfilePicture} />

            <AvatarFallback>CN</AvatarFallback>

            <input ref={imageRaf} className="hidden" type="file" accept="image/*" onChange={fileChangeHandler} />

            <div onClick={() => imageRaf.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
            >

              <Plus className="text-white w-8 h-8" />
            </div>
          </Avatar>
          <Input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            className="border-0 border-b border-gray-300 dark:border-gray-400 font-bold text-2xl focus-visible:ring-transparent "
          />
        </div>
        </>):(<>
          <div className="flex items-center gap-2 ">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20 ">

            <AvatarImage src={selectedProfilePicture} />

            <AvatarFallback>CN</AvatarFallback>

            <input disabled ref={imageRaf} className="hidden" type="file" accept="image/*" onChange={fileChangeHandler} />

            <div onClick={() => imageRaf.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
            >

              <Plus className="text-white w-8 h-8" />
            </div>
          </Avatar>
          <Input
          disabled
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent pointer-events-none"
          />
        </div>
        </>)}
        

        {/* create edit button */}
        <Edit className="mb-20" onClick={() => setEditing(true)} size={25} />
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        {
          editing ? (
            <>
              <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200 dark:bg-transparent">
                <Mail className="text-gray-500" />
                <div className="w-full">
                  <Label>Email</Label>
                  <input
                    name="email"
                    value={profileData.email}
                    onChange={changeHandler}
                    className="border-0 border-b border-gray-300 w-full text-gray-600 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200 dark:bg-transparent">
                <LocateIcon className="text-gray-500" />
                <div className="w-full">
                  <Label>Address</Label>
                  <input
                    name="address"
                    value={profileData.address}
                    onChange={changeHandler}
                    className="border-0 border-b border-gray-300 w-full text-gray-600 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200 dark:bg-transparent">
                <MapPin className="text-gray-500" />
                <div className="w-full">
                  <Label>City</Label>
                  <input
                    name="city"
                    value={profileData.city}
                    onChange={changeHandler}
                    className="border-0 border-b border-gray-300 w-full text-gray-600 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200 dark:bg-transparent">
                <MapPinnedIcon className="text-gray-500" />
                <div className="w-full">
                  <Label>Country</Label>
                  <input
                    name="country"
                    value={profileData.country}
                    onChange={changeHandler}
                    className="border-0 border-b border-gray-300 w-full text-gray-600 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500"
                  />
                </div>
              </div>
            </>
          ) : (<>
          <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-100 dark:bg-transparent">
            <Mail className="text-gray-500" />
            <div className="w-full">
              <Label>Email</Label>
              <input
                disabled
                name="email"
                value={profileData.email}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-100 dark:bg-transparent">
              <LocateIcon className="text-gray-500" />
              <div className="w-full">
                <Label>Address</Label>
                <input
                  disabled
                  name="address"
                  value={profileData.address}
                  onChange={changeHandler}
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-100 dark:bg-transparent">
              <MapPin className="text-gray-500" />
              <div className="w-full">
                <Label>City</Label>
                <input
                  disabled
                  name="city"
                  value={profileData.city}
                  onChange={changeHandler}
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-100 dark:bg-transparent">
              <MapPinnedIcon className="text-gray-500" />
              <div className="w-full">
                <Label>Country</Label>
                <input
                  disabled
                  name="country"
                  value={profileData.country}
                  onChange={changeHandler}
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                />
              </div>
            </div>
          </>)
        }
      </div>
      <div className="text-center">
      <Button variant="outline" className="bg-orange text-white rounded-lg dark:bg-darknav">Update</Button>
        </div>
    </form>
  </>)
}
export default Profile;
