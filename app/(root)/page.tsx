"use client";

import { Modal } from "@/components/ui/modal";
import { useModalStore } from "@/hooks/use-modal-store";
import { useEffect } from "react";

export default function Home() {
  const { isOpen, onClose, onOpen } = useModalStore();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <>
      <h1> Protected route </h1>
    </>
  );
}
