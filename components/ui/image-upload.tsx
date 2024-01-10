"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}
const ImageUpload = ({
  value,
  disabled,
  onChange,
  onRemove,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = async (result: any) => {
    onChange(result.info.secure_url);
  };
  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        {value.map((image) => (
          <div
            key={image}
            className="relative w-[200px] h-[300px] rounded-md overflow-hidden"
          >
            <div className="absolute z-10 top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(image)}
                size={"icon"}
                variant={"destructive"}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image
              fill
              src={image}
              alt="Billboard image"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="obgo9h2t">
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <Button
              type="button"
              variant={"secondary"}
              onClick={onClick}
              disabled={disabled}
            >
              <ImagePlus className="mr-2 w-4 h-4" />
              Upload image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
