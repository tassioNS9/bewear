"use client";

import { Button } from "@/components/ui/button";

const FinishOrderButton = () => {
  const handleFinishOrder = async () => {};
  return (
    <>
      <Button
        className="w-full rounded-full"
        size="lg"
        onClick={handleFinishOrder}
      >
        Finalizar compra
      </Button>
    </>
  );
};

export default FinishOrderButton;
