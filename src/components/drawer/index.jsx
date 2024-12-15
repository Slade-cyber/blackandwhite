import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";  // Importing the hamburger icon
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const DrawerHam = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const sizes = ["xs"];
  const handleOpen = (placement) => {
    setPlacement(placement);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {["right"].map((placement) => (
          <Button
            key={placement}
            className="bg-transparent"
            onPress={() => handleOpen(placement)}
          >
            <GiHamburgerMenu className="size-5 bg-"/>         
          </Button>
        ))}
      </div> 

      <Drawer isOpen={isOpen} size={sizes} placement={placement} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerBody className="bg-slate-100">
            <div className="flex justify-center flex-col items-center space-y-4 text-large">
            <div className="pt-12">
              <a href="mainpage" className="no-underline hover:underline">
                Anasayfa
              </a>
            </div>
            <div>
              <a href="about" className="no-underline hover:underline">
                Hakkımızda
              </a>
            </div>
            <div>
              <a href="services" className="no-underline hover:underline">
                Servisler
              </a>
            </div>
            <div>
              <a href="contact" className="no-underline hover:underline">
                İletişim
              </a>
            </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerHam;
