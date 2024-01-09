"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { AlertTriangle } from "lucide-react";

interface Props {
  isOpen: boolean;
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AlertModal = ({ isOpen, loading, onClose, onConfirm }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      title="Delete Store"
      description="Are you sure you want to delete this store? This action is irreversible."
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
