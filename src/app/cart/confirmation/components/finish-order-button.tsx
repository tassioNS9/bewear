"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useFinishOrder } from "@/hooks/mutations/use-finish-order";
const FinishOrderButton = () => {
  const finisihOrderMutation = useFinishOrder();
  const [sucessDialogIsOpen, setSuccessDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        className="w-full rounded-full"
        size="lg"
        onClick={() => finisihOrderMutation.mutate()}
        disabled={finisihOrderMutation.isPending}
      >
        {finisihOrderMutation.isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Finalizar pedido"
        )}
      </Button>

      <Dialog open={sucessDialogIsOpen} onOpenChange={setSuccessDialogIsOpen}>
        <DialogContent>
          <Image
            src="/ilustration.svg"
            alt="Pedido realizado com sucesso"
            width={300}
            height={300}
            className="mx-auto"
          />
          <DialogTitle className="mt-4 text-2xl">
            Pedido realizado com sucesso
          </DialogTitle>
          <DialogDescription className="font-medium">
            Seu pedido foi realizado com sucesso! Você pode acompanhar o status
            na seção de Meus Pedidos.
          </DialogDescription>

          <DialogFooter>
            <Button
              className="rounded-full"
              size="lg"
              onClick={() => setSuccessDialogIsOpen(false)}
            >
              Ver meus pedidos
            </Button>
            <Button className="rounded-full" size="lg" variant="outline">
              Voltar para a loja
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinishOrderButton;
