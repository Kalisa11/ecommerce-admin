"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

interface Props {
  isOpen: boolean;
  item: "Billboard" | "Store";
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AlertModal = ({ isOpen, item, loading, onClose, onConfirm }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      title={`Delete ${item}`}
      description="Are you sure you want to proceed? This action is irreversible."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-x-2 pt-6 flex items-center justify-end w-full">
        <Button variant={"outline"} onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={onConfirm} disabled={loading}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
