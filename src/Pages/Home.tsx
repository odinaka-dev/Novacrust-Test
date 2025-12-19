import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { NovacrustImage } from "@/constants/Image";
import { Copy } from "lucide-react";

const PaymentModal = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="font-outfit w-full max-w-md sm:max-w-lg lg:max-w-xl p-6 sm:p-8 sm:py-12 sm:pb-16 rounded-2xl bg-white shadow-lg"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <Tabs defaultValue="account" className="w-full">
          {/* Tabs */}
          <div className="flex justify-center items-center">
            <TabsList className="flex justify-center gap-2 bg-muted p-1 rounded-full mb-6">
              <TabsTrigger value="email">Crypto to cash</TabsTrigger>

              <TabsTrigger value="success">Cash to crypto</TabsTrigger>
            </TabsList>
          </div>

          {/* Tabs content */}
          <TabsContent value="email">
            <StepOne />
          </TabsContent>
          <TabsContent value="success">
            <StepTwo />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

const StepOne = () => {
  return (
    <DialogHeader className="text-center">
      <DialogTitle className="text-2xl font-bold mb-2 text-center mt-9">
        <h1 className="text-[36px] font-medium"> Coming Soon!</h1>
      </DialogTitle>
      <DialogDescription className="text-md text-gray-700 mb-6 text-center">
        <div className="text-center text-[18px]">
          <p>Cash to Crypto is almost here.</p>
          <p>Enter your email and we'll let you know the moment it's live.</p>
        </div>
        {/* Email input */}
        <div className="grid w-full gap-3 my-6">
          <Label
            htmlFor="email"
            className="text-[#013941] font-medium text-[16px]"
          >
            Email
          </Label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border placeholder:text-[#828282] border-[#E0E0E0] rounded-full py-4 px-4"
          />
        </div>
      </DialogDescription>

      <DialogFooter className="w-full">
        <Button className="bg-[#013941] py-8 w-full text-white rounded-full hover:bg-[#015b69] transition-colors">
          Update me
        </Button>
      </DialogFooter>
    </DialogHeader>
  );
};

const StepTwo = () => {
  return (
    <DialogHeader className="text-center">
      <DialogTitle className="text-2xl font-bold mb-2">
        <div className="flex items-center justify-center w-full">
          <img src={NovacrustImage?.Logo} alt="" />
        </div>
      </DialogTitle>
      <DialogDescription className="text-gray-700">
        <div className="flex flex-col items-center justify-center gap-9 my-8 w-full">
          <img src={NovacrustImage?.Success} alt="" />
          <div className="text-center w-full">
            <p className="text-[24px] font-medium text-[#013941]">
              Your transaction is processing.
            </p>
            <p className="text-[#4f4f4f] text-[20px] w-full">
              The recipient will receive it shortly.
            </p>
            <div className="flex items-center justify-between p-6 rounded-sm bg-[#F7F7F7] mt-8 text-[18px]">
              <p>Transaction Id</p>
              <div className="flex gap-1 items-center">
                <p className="font-medium">NC123456789</p>
                <Copy strokeWidth="1" size={16} className="" />
              </div>
            </div>
            <p className="text-[#013941] text-[18px] text-center font-semibold mt-12 cursor-pointer">
              Go Back
            </p>
          </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
};

export default PaymentModal;
