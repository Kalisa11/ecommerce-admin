"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProductColumns } from "./columns";
import { Button } from "@/components/ui/button";
import AlertModal from "@/components/modals/alert-modal";

interface CellActionProps {
  data: ProductColumns;
}
const CellAction = ({ data }: CellActionProps) => {

  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Copied to clipboard");
  };

  const deleteProduct = async () => {
    setLoading(true);
    try {
      await axios.delete(`/api/${params.storeId}/products/${data.id}`);
      router.refresh();
      toast.success("Product deleted");
    } catch (error) {
      toast.error("Error deleting product");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        item="Product"
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={deleteProduct}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 w-4 h-4" />
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/${params.storeId}/products/${data.id}`)
            }
          >
            <Edit className="mr-2 w-4 h-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 w-4 h-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CellAction;
