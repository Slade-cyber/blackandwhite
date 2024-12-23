import { Card, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function DetailCard({ product, category }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/products/${category}/${product.id}`);
  };

  return (
    <Card>
      <CardBody className="overflow-clip py-2 flex justify-center items-center">
        <Image
          alt={product.urunAdi}
          className="object-fill rounded-xl"
          src={product.thumbnails[0] || "https://via.placeholder.com/270"}
          style={{
            width: "270px", // Sabit genişlik
            height: "300px", // Sabit yükseklik
          }}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{product.urunAdi}</p>
        <small className="text-default-500">{product.ureticiAdi}</small>
        <h4 className="font-bold text-large">{product.fiyat}₺</h4>
        <Button
          className="my-2 text-pretty font-semibold bg-orange-400"
          radius="full"
          size="m"
          onPress={handleButtonClick}
        >
          Ürünü Göster
        </Button>
      </CardFooter>
    </Card>
  );
}
